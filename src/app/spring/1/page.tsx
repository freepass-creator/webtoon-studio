import type { Metadata } from "next"
import { EpisodeReader } from "@/components/webtoon/reader"
import { episode1, panels, series } from "@/data/episode-1"

export const metadata: Metadata = {
  title: `${series.title} EP.${episode1.number} ${episode1.title}`,
  description: series.logline,
}

export default function EpisodeOnePage() {
  return <EpisodeReader episode={episode1} panels={panels} />
}
