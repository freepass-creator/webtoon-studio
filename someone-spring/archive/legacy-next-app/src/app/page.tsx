import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { episode1, series } from "@/data/episode-1"
import { episode8 } from "@/data/episode-8"
import { episode9 } from "@/data/episode-9"
import { cn } from "@/lib/utils"

const episodes = [episode1, episode8, episode9]

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-[#f6f1ea] text-stone-800">
      <main className="mx-auto flex max-w-[520px] flex-col px-4 py-10">
        <p className="text-[12px] tracking-[0.22em] text-stone-400 uppercase">
          {series.english}
        </p>
        <h1 className="mt-3 font-serif text-[40px] leading-none font-medium tracking-tight">
          {series.title}
        </h1>
        <p className="mt-4 text-[15px] leading-7 text-stone-600">{series.logline}</p>

        <div className="relative mt-8 aspect-[3/4] overflow-hidden bg-stone-200">
          <Image
            src="/episodes/spring/1/spring-p01-title.png"
            alt="한서윤"
            fill
            className="object-cover"
            sizes="(max-width: 520px) 100vw, 520px"
            priority
          />
        </div>

        <section className="mt-8 flex flex-col gap-3 text-[14px] leading-7 text-stone-600">
          <p>
            한서윤은 스물여섯, 작은 회사의 회사원이다. 주말마다 방문하는 일은
            연애가 아니다. 스스로 닿지 못하는 사람들에게, 필요한 만큼만 손을
            빌려 주는 봉사다.
          </p>
          <p>사람을 사랑하지 않는다. 그런데 그 활동이, 점점 남아 있다.</p>
          <p className="text-[12px] leading-6 text-stone-400">{series.warning}</p>
        </section>

        <ol className="mt-8 flex flex-col gap-2">
          {episodes.map((ep) => (
            <li key={ep.number}>
              <Link
                href={
                  ep.number === 8
                    ? "/webtoons/someone-spring/ep08.html"
                    : ep.number === 9
                      ? "/webtoons/someone-spring/ep09.html"
                      : ep.href
                }
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full justify-start"
                )}
              >
                EP.{ep.number} {ep.title}
              </Link>
            </li>
          ))}
        </ol>
      </main>
    </div>
  )
}
