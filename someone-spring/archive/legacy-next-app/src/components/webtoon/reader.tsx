import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { series } from "@/data/episode-1"
import type { EpisodeMeta, Panel as PanelData } from "@/data/types"
import { cn } from "@/lib/utils"
import { Panel } from "./panel"

export function EpisodeReader({
  episode,
  panels,
}: {
  episode: EpisodeMeta
  panels: PanelData[]
}) {
  return (
    <div className="min-h-dvh bg-[#f6f1ea] text-stone-800">
      <header className="sticky top-0 z-10 border-b border-stone-200/80 bg-[#f6f1ea]/90 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-[520px] items-center justify-between px-4">
          <Link href="/" className="text-[13px] text-stone-500">
            ← 목록
          </Link>
          <p className="text-[13px] font-medium tracking-wide">
            {series.title}
            <span className="ml-2 text-stone-400">EP.{episode.number}</span>
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
          <p className="font-serif text-[18px] text-stone-600">{episode.title}</p>
          <p className="text-[13px] leading-6 text-stone-500">{series.logline}</p>
        </section>

        {panels.map((panel) => (
          <Panel key={panel.id} panel={panel} />
        ))}

        <footer className="mt-4 flex flex-col gap-4 border-t border-stone-200 pt-8">
          {episode.next && (
            <p className="text-[13px] text-stone-400">
              다음 화 · EP.{episode.next.number} {episode.next.title}
            </p>
          )}
          {episode.next?.href && episode.next.href !== "/" ? (
            <Link
              href={episode.next.href}
              className={cn(buttonVariants({ size: "lg" }), "w-full")}
            >
              EP.{episode.next.number} 이어 보기
            </Link>
          ) : null}
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
