export type Line = {
  speaker?: string
  text: string
  kind?: "say" | "think"
}

export type ChatLine = {
  from: "me" | "other"
  name: string
  text: string
}

export type Panel = {
  id: string
  image: string
  alt: string
  time?: string
  label?: string
  wide?: boolean
  notice?: { kicker: string; title: string; lines: string[] }
  chat?: ChatLine[]
  lines: Line[]
}

export type EpisodeMeta = {
  number: number
  title: string
  href: string
  next?: { number: number; title: string; href: string }
}
