"use client";

import { Place } from "@/data/places";

// 当前作品《万水千山走遍》的路线顺序（可扩展）
const ROUTE_ORDER = ["mexico-city", "honduras", "panama", "colombia", "peru", "dunhuang"];

// 标签方向配置 — 避免拉美区域拥挤
const LABEL_DIR: Record<string, { dir: "top" | "bottom" | "left" | "right"; offset?: { x: number; y: number } }> = {
  "mexico-city": { dir: "left",  offset: { x: -2, y: 0 } },
  honduras:      { dir: "right", offset: { x: 2, y: 0 } },
  panama:        { dir: "right", offset: { x: 2, y: 0 } },
  colombia:      { dir: "bottom", offset: { x: 0, y: 0 } },
  peru:          { dir: "bottom", offset: { x: -2, y: 0 } },
  dunhuang:      { dir: "left",  offset: { x: -2, y: 0 } },
};

interface LiteraryWorldMapProps {
  places: Place[];
  selectedPlaceId: string;
  onSelectPlace: (placeId: string) => void;
}

function segPath(x1: number, y1: number, x2: number, y2: number): string {
  // 轻微弧度，不夸张
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  // 弧度控制点偏移量，方向垂直于连线
  const off = Math.min(Math.abs(dx), Math.abs(dy)) * 0.15 + 2;
  const cx = mx - (dy / Math.sqrt(dx * dx + dy * dy + 0.01)) * off;
  const cy = mx + (dx / Math.sqrt(dx * dx + dy * dy + 0.01)) * off;
  return `M${x1} ${y1} Q${cx} ${cy} ${x2} ${y2}`;
}

export default function LiteraryWorldMap({ places, selectedPlaceId, onSelectPlace }: LiteraryWorldMapProps) {
  const placeMap = Object.fromEntries(places.map((p) => [p.id, p]));
  const selectedIdx = ROUTE_ORDER.indexOf(selectedPlaceId);

  return (
    <div className="relative w-full max-w-[1200px] mx-auto">
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-[#2b2118]/12 shadow-sm"
        style={{ aspectRatio: "16 / 9", background: "#f0e4ce" }}
      >
        {/* 纸张纹理 */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background:
            "radial-gradient(ellipse at 20% 40%, rgba(170,145,100,0.2) 0%, transparent 55%), " +
            "radial-gradient(ellipse at 80% 50%, rgba(185,165,120,0.14) 0%, transparent 50%), " +
            "linear-gradient(135deg, rgba(210,190,150,0.1) 0%, transparent 70%)",
        }} />

        {/* SVG 地图层 */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          {/* 经纬线 */}
          <g stroke="#b8a070" strokeWidth="0.06" opacity="0.3">
            {[20, 40, 60, 80].map((v) => <line key={`h${v}`} x1="0" y1={v} x2="100" y2={v} />)}
            {[20, 40, 60, 80].map((v) => <line key={`v${v}`} x1={v} y1="0" x2={v} y2="100" />)}
          </g>

          {/* 大陆轮廓 — 装饰性，较淡但可见 */}
          <g fill="#dcc8a0" stroke="#c8b488" strokeWidth="0.15" opacity="0.55">
            {/* 北美 */}
            <path d="M6,26 L14,18 L24,16 L28,24 L26,32 L22,40 L16,48 L12,44 L10,38 L8,30 Z" />
            {/* 中美洲 */}
            <path d="M16,48 L19,50 L18,58 L15,54 Z" />
            {/* 南美 */}
            <path d="M20,60 L28,56 L32,62 L34,72 L32,82 L28,86 L22,78 L18,68 Z" />
            {/* 欧洲 */}
            <path d="M40,18 L48,14 L54,20 L52,28 L46,32 L40,28 Z" />
            {/* 非洲 */}
            <path d="M42,34 L50,30 L56,38 L54,54 L50,62 L44,56 L40,44 Z" />
            {/* 亚洲 */}
            <path d="M54,14 L66,10 L78,14 L84,22 L82,34 L76,40 L68,42 L60,38 L56,28 L52,20 Z" />
            {/* 东南亚 */}
            <path d="M74,44 L80,42 L84,48 L82,54 L78,52 L74,48 Z" />
            {/* 澳洲 */}
            <path d="M76,64 L84,60 L88,64 L86,70 L80,68 Z" />
            {/* 日本 */}
            <path d="M86,18 L90,16 L92,22 L88,24 Z" />
            {/* 格陵兰 */}
            <path d="M28,8 L36,4 L40,10 L36,16 L30,14 Z" />
          </g>

          {/* === 路线层 === */}
          {/* 整条路线始终为浅色虚线 */}
          {ROUTE_ORDER.slice(0, -1).map((id, i) => {
            const from = placeMap[id]?.mapPosition;
            const to = placeMap[ROUTE_ORDER[i + 1]]?.mapPosition;
            if (!from || !to) return null;
            // 只高亮当前选中点相邻的两段（前一段和后一段）
            const isNeighbor = selectedIdx >= 0 && (i === selectedIdx - 1 || i === selectedIdx);
            return (
              <path
                key={`route-${i}`}
                d={segPath(from.x, from.y, to.x, to.y)}
                fill="none"
                stroke={isNeighbor ? "#6b3a10" : "#a89878"}
                strokeWidth={isNeighbor ? 0.28 : 0.22}
                strokeDasharray="1.2 1.8"
                opacity={isNeighbor ? 0.75 : 0.5}
              />
            );
          })}

          {/* 路线方向箭头 */}
          {ROUTE_ORDER.slice(0, -1).map((id, i) => {
            const f = placeMap[id]?.mapPosition;
            const t = placeMap[ROUTE_ORDER[i + 1]]?.mapPosition;
            if (!f || !t) return null;
            const mx = (f.x + t.x) / 2;
            const my = (f.y + t.y) / 2;
            return (
              <text key={`arr-${i}`} x={mx} y={my} fontSize="1.8" fill="#8b7b5e" opacity="0.5" textAnchor="middle" dominantBaseline="middle">
                ›
              </text>
            );
          })}

          {/* 编号 — 每个点附近 */}
          {ROUTE_ORDER.map((id, i) => {
            const p = placeMap[id]?.mapPosition;
            if (!p) return null;
            // 编号放在点位上方，不与标签冲突
            return (
              <text key={`num-${id}`} x={p.x - 3} y={p.y - 3} fontSize="1.5" fill="#a09070" opacity="0.55" textAnchor="middle" dominantBaseline="middle" fontWeight="600">
                {i + 1}
              </text>
            );
          })}
        </svg>

        {/* 地点按钮 — 完全基于 mapPosition */}
        {places.map((place) => {
          const sel = place.id === selectedPlaceId;
          const { x, y } = place.mapPosition;
          const lblCfg = LABEL_DIR[place.id] || { dir: "bottom" as const };
          const off = lblCfg.offset || { x: 0, y: 0 };

          // 标签位置计算 — 选中时额外偏移避免圆环遮挡
          const selOff = sel ? 4 : 0;
          const lblPos: React.CSSProperties = (() => {
            switch (lblCfg.dir) {
              case "top":
                return { bottom: "100%", left: "50%", transform: `translateX(calc(-50% + ${off.x}px))`, marginBottom: 5 + selOff };
              case "bottom":
                return { top: "100%", left: "50%", transform: `translateX(calc(-50% + ${off.x}px))`, marginTop: 5 + selOff };
              case "left":
                return { right: "100%", top: "50%", transform: `translateY(calc(-50% + ${off.y}px))`, marginRight: 6 + selOff };
              case "right":
                return { left: "100%", top: "50%", transform: `translateY(calc(-50% + ${off.y}px))`, marginLeft: 6 + selOff };
              default:
                return {};
            }
          })();

          return (
            <button
              key={place.id}
              type="button"
              onClick={() => onSelectPlace(place.id)}
              className="absolute z-10 touch-manipulation transition-transform duration-300"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
                WebkitTapHighlightColor: "transparent",
              }}
              aria-label={place.displayName}
            >
              {/* 选中：中心点 + 小内环 + 外扩散 pulse */}
              {sel && (
                <>
                  <span className="pulse-ring absolute w-[10px] h-[10px] pointer-events-none" />
                  <span className="absolute w-[17px] h-[17px] rounded-full border-[1.5px] border-[#7a1f00]/40 pointer-events-none" />
                </>
              )}

              {/* 点位 */}
              <span
                className="relative block rounded-full transition-all duration-300"
                style={{
                  width: sel ? 10 : 8,
                  height: sel ? 10 : 8,
                  background: sel ? "#7a1f00" : "#3d5a1e",
                  border: sel ? "2px solid #7a1f00" : "1.5px solid #5a8030",
                  boxShadow: sel ? "0 0 6px rgba(122,31,0,0.3)" : "0 0 2px rgba(61,90,30,0.15)",
                }}
              />

              {/* 标签 — 手机端只显示当前选中地点 */}
              <span
                className={`absolute whitespace-nowrap font-bold px-2 py-0.5 rounded-md transition-colors duration-300 text-[10px] md:text-[11px] ${
                  sel
                    ? "text-[#f0e4ce] bg-[#7a1f00]"
                    : "hidden md:inline-block text-[#2b2118] bg-[#f0e4ce]/[0.92] border border-[#b8a070]/50"
                }`}
                style={{
                  ...lblPos,
                  boxShadow: sel ? "0 2px 6px rgba(122,31,0,0.2)" : "0 1px 3px rgba(0,0,0,0.06)",
                }}
              >
                {place.displayName}
              </span>
            </button>
          );
        })}

        {/* 指南针 */}
        <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 opacity-25 pointer-events-none">
          <svg width="28" height="28" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="15" fill="none" stroke="#6b5a45" strokeWidth="0.5" />
            <line x1="18" y1="5" x2="18" y2="31" stroke="#6b5a45" strokeWidth="0.4" />
            <line x1="5" y1="18" x2="31" y2="18" stroke="#6b5a45" strokeWidth="0.4" />
            <polygon points="18,6 16.8,12 19.2,12" fill="#6b5a45" />
            <text x="18" y="11" textAnchor="middle" fontSize="4.5" fill="#6b5a45">N</text>
          </svg>
        </div>

        {/* 标题 */}
        <div className="absolute top-3 left-3 md:top-4 md:left-4 pointer-events-none">
          <span className="text-[10px] md:text-[11px] font-bold text-[#8b7b5e]/70 tracking-[0.2em] uppercase">
            Literary Route · 万水千山走遍
          </span>
        </div>
      </div>
    </div>
  );
}
