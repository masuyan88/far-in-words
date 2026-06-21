"use client";

export default function AboutSection() {
  return (
    <section className="py-10 md:py-14 px-5 md:px-6 safe-bottom">
      <div className="max-w-xl mx-auto text-center">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <div className="flex-1 h-px bg-[#2b2118]/10" />
          <span className="text-[#6b5a45]/50 text-[11px] tracking-widest uppercase font-semibold">关于</span>
          <div className="flex-1 h-px bg-[#2b2118]/10" />
        </div>

        <h2 className="text-base md:text-lg font-bold text-[#2b2118] mb-4">关于这个小网页</h2>

        <div className="space-y-3 text-[#6b5a45] text-sm md:text-[15px] leading-[1.75]">
          <p>
            这是一个基于三毛《万水千山走遍》的文学场景地图。
            <br />
            它不是旅游攻略，也不是百科，只是尝试把书中出现的旅行地点，
            整理成一张可以点击的地图。
          </p>
          <p className="text-[#6b5a45]/70 text-xs leading-[1.7]">
            本项目中的图像与视觉元素用于营造文学旅行氛围，并非三毛当年旅途影像或历史复原。
          </p>
          <p className="text-[#6b5a45]/70 text-xs leading-[1.7]">
            第一版仅收录少量地点和场景，后续可继续补充。
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-[#6b5a45]/25">
          <span>·</span><span>·</span><span>·</span>
        </div>
      </div>
    </section>
  );
}
