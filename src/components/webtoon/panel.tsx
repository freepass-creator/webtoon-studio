import Image from "next/image"
import type { Panel as PanelData } from "@/data/episode-1"
import { cn } from "@/lib/utils"

export function Panel({ panel }: { panel: PanelData }) {
  return (
    <article className="flex flex-col gap-3">
      {(panel.time || panel.label) && (
        <div className="flex items-baseline justify-between px-1 text-[11px] tracking-[0.18em] text-stone-500 uppercase">
          <span>{panel.label}</span>
          <span className="normal-case tracking-normal text-stone-400">
            {panel.time}
          </span>
        </div>
      )}

      <div
        className={cn(
          "relative overflow-hidden bg-stone-200",
          panel.wide ? "aspect-[16/9]" : "aspect-[3/4]"
        )}
      >
        <Image
          src={panel.image}
          alt={panel.alt}
          fill
          className="object-cover"
          sizes="(max-width: 520px) 100vw, 520px"
          priority={panel.id === "title"}
        />
      </div>

      {panel.notice && (
        <div className="border border-stone-200 bg-stone-50 px-4 py-3">
          <p className="text-[11px] tracking-[0.16em] text-stone-400 uppercase">
            {panel.notice.kicker}
          </p>
          <p className="mt-1 text-[15px] font-medium text-stone-800">
            {panel.notice.title}
          </p>
          <ul className="mt-2 space-y-1 text-[13px] leading-6 text-stone-600">
            {panel.notice.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      )}

      {panel.chat && (
        <div className="flex flex-col gap-2 px-1">
          {panel.chat.map((msg) => (
            <div
              key={`${msg.name}-${msg.text}`}
              className={cn(
                "max-w-[85%] rounded-2xl px-3 py-2 text-[13px] leading-5",
                msg.from === "me"
                  ? "self-end bg-stone-800 text-stone-50"
                  : "self-start bg-stone-100 text-stone-700"
              )}
            >
              <p className="mb-0.5 text-[10px] tracking-wide text-stone-400">
                {msg.name}
              </p>
              {msg.text}
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-2 px-0.5">
        {panel.lines.map((line, index) =>
          line.speaker ? (
            <p
              key={`${panel.id}-d-${index}`}
              className="border-l-2 border-stone-300 pl-3 text-[14px] leading-7 text-stone-800"
            >
              <span className="mr-2 text-[11px] font-medium tracking-wide text-stone-500">
                {line.speaker}
              </span>
              {line.text}
            </p>
          ) : (
            <p
              key={`${panel.id}-c-${index}`}
              className={cn(
                "text-[14px] leading-7",
                line.kind === "think"
                  ? "text-stone-500 italic"
                  : "text-stone-700"
              )}
            >
              {line.text}
            </p>
          )
        )}
      </div>
    </article>
  )
}
