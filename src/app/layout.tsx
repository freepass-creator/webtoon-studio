import type { Metadata } from "next"
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google"
import "./globals.css"

const sans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-korean-sans",
})

const serif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-korean-serif",
})

export const metadata: Metadata = {
  title: "누군가의 봄",
  description:
    "평범한 회사원 한서윤의 성인권 보조 봉사. 행위는 그리지 않고, 표정과 손으로만 남는 성인 웹툰.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${sans.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  )
}
