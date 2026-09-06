import type { Metadata } from "next"
import { EpisodeReader } from "@/components/webtoon/reader"
import { series } from "@/data/episode-1"
import { episode8, panels } from "@/data/episode-8"

export const metadata: Metadata = {
  title: `${series.title} EP.${episode8.number} ${episode8.title}`,
  description: series.logline,
}

export default function EpisodeEightPage() {
  return <EpisodeReader episode={episode8} panels={panels} />
}
