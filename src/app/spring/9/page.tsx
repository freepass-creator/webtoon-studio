import type { Metadata } from "next"
import { EpisodeReader } from "@/components/webtoon/reader"
import { series } from "@/data/episode-1"
import { episode9, panels } from "@/data/episode-9"

export const metadata: Metadata = {
  title: `${series.title} EP.${episode9.number} ${episode9.title}`,
  description: series.logline,
}

export default function EpisodeNinePage() {
  return <EpisodeReader episode={episode9} panels={panels} />
}
