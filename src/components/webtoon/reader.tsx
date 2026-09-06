import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { episode1, panels, series } from "@/data/episode-1"
import { cn } from "@/lib/utils"
import { Panel } from "./panel"

export function EpisodeReader() {
  return (
    <div className="min-h-dvh bg-[#f6f1ea] text-stone-800">
      <header className="sticky top-0 z-10 border-b border-stone-200/80 bg-[#f6f1ea]/90 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-[520px] items-center justify-between px-4">
          <Link href="/" className="text-[13px] text-stone-500">
            ← 목록
          </Link>
          <p className="text-[13px] font-medium tracking-wide">
            {series.title}
            <span className="ml-2 text-stone-400">EP.{episode1.number}</span>
          </p>
          <span className="w-10" />
        </div>
      </header>

      <main className="mx-auto flex max-w-[520px] flex-col gap-10 px-4 py-8 pb-24">
        <section className="flex flex-col gap-3 pt-2">
          <p className="text-[12px] tracking-[0.22em] text-stone-400 uppercase">
            {series.english}
          </p>
          <h1 className="font-serif text-[34px] leading-tight font-medium tracking-tight">
            {series.title}
          </h1>
          <p className="font-serif text-[18px] text-stone-600">
            {episode1.title}
          </p>
          <p className="text-[13px] leading-6 text-stone-500">{series.logline}</p>
        </section>

        {panels.map((panel) => (
          <Panel key={panel.id} panel={panel} />
        ))}

        <footer className="mt-4 flex flex-col gap-4 border-t border-stone-200 pt-8">
          <p className="font-serif text-[16px] leading-7 text-stone-600">
            {series.logline}
          </p>
          <p className="text-[13px] text-stone-400">
            다음 화 · EP.{episode1.next.number} {episode1.next.title}
          </p>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full")}
          >
            회차 목록으로
          </Link>
        </footer>
      </main>
    </div>
  )
}
