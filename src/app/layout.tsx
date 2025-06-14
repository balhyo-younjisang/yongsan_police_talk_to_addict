import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "TALKTO - 마약/도박중독자와의 현실감 있는 대화",
  description: "TALKTO | 2025 용산경찰서 청소년 정책 자문단 2번째 프로젝트 | 마약/도박중독자와의 현실감 있는 대화",
};

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
