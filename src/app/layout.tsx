import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "文字里的远方 — 三毛《万水千山走遍》文学场景地图",
  description:
    "把三毛《万水千山走遍》中的旅行地点，变成一张可以点击的文学地图。不是旅游攻略，也不是百科，只是从文字出发，重新抵达那些地方。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
