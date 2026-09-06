import type { EpisodeMeta, Panel } from "./types"

export const episode9: EpisodeMeta = {
  number: 9,
  title: "더 깊어지는 관계",
  href: "/spring/9",
  next: { number: 10, title: "멈출 수 없는 마음", href: "/" },
}

export const panels: Panel[] = [
  {
    id: "title",
    image: "/episodes/spring/9/spring-ep9-p01-wait.png",
    alt: "기다리는 서윤",
    label: "EP. 9",
    lines: [
      { text: "한 번은 선을 넘었다." },
      { text: "이제는, 그 시간을 조금 더 원하고 있었다." },
    ],
  },
  {
    id: "wait",
    image: "/episodes/spring/9/spring-ep9-p01-wait.png",
    alt: "현관을 보는 서윤",
    time: "금요일 19:20",
    label: "기다리고 있는 그녀",
    lines: [
      { speaker: "서윤", text: "오셨네요. 조금 늦으셨어요." },
      { speaker: "민재", text: "오래 기다리셨어요?" },
      { speaker: "서윤", text: "…네. 손 생각만 하고 있었어요." },
      { text: "사람을 기다린 게 아니었다. 그 순서가 시작되길 기다렸다." },
    ],
  },
  {
    id: "talk",
    image: "/episodes/spring/9/spring-ep9-p02-talk.png",
    alt: "소파에 앉은 두 사람",
    label: "가까워지는 거리",
    lines: [
      { speaker: "서윤", text: "오늘은… 제가 먼저 해도 될까요." },
      { speaker: "민재", text: "네. 편하신 대로요." },
      { speaker: "서윤", text: "…정말요?" },
      { text: "조심히 내딛던 한 걸음이, 이제는 망설임이 없다." },
    ],
  },
  {
    id: "chair",
    image: "/episodes/spring/9/spring-ep9-p03-chair.png",
    alt: "휠체어 앞에서",
    label: "휠체어에서",
    lines: [
      { speaker: "서윤", text: "이렇게… 해도 돼요?" },
      { speaker: "민재", text: "네. 고맙습니다." },
      { text: "불편한 몸은 장벽이 아니었다. 닿는 방식이 다를 뿐이다." },
    ],
  },
  {
    id: "prepare",
    image: "/episodes/spring/8/spring-ep8-p05-prepare.png",
    alt: "이불과 바지 허리",
    label: "행위",
    lines: [
      { text: "바지가 내려가고, 이불이 선을 만든다." },
      { text: "나는 그의 눈을 보지 않는다. 숨이 맞는 간격만 본다." },
      { text: "행위는 그리다. 그 이상은 그리지 않는다." },
    ],
  },
  {
    id: "face",
    image: "/episodes/spring/8/spring-ep8-p06-face.png",
    alt: "더 집중한 표정",
    lines: [
      { speaker: "서윤", text: "…괜찮아요. 더 해도 돼요." },
      {
        text: "처음엔 그의 반응이 필요했다. 지금은 내 손이 먼저 안다.",
        kind: "think",
      },
    ],
  },
  {
    id: "sheet",
    image: "/episodes/spring/1/spring-p09-sheet.png",
    alt: "시트를 쥔 손",
    wide: true,
    lines: [
      { text: "말보다 숨이 먼저다." },
      { text: "두 사람이 정직해지는 구간은, 언제나 손이 멈춘 다음이다." },
    ],
  },
  {
    id: "after",
    image: "/episodes/spring/8/spring-ep8-p07-after.png",
    alt: "여운이 남은 방",
    label: "끝이 아닌 여운",
    lines: [
      { speaker: "서윤", text: "오늘도… 그 시간이 길었어요." },
      { speaker: "민재", text: "괜찮아요. 당신도 괜찮으셨으면." },
      { text: "사람을 좋아해도 되는지 묻지 않았다. 그 활동이 좋았는지만 남았다." },
    ],
  },
  {
    id: "bath",
    image: "/episodes/spring/9/spring-ep9-p07-bath.png",
    alt: "살짝 열린 욕실 문",
    label: "물소리",
    lines: [
      { speaker: "서윤", text: "정리하고 올게요." },
      { text: "처음처럼 서툴지 않다. 문을 닫는 손도, 다시 나오는 손도 익숙하다." },
    ],
  },
  {
    id: "morning",
    image: "/episodes/spring/9/spring-ep9-p04-morning.png",
    alt: "아침, 떠나려는 민재",
    time: "다음 날",
    label: "다음 날 아침",
    lines: [
      { speaker: "서윤", text: "벌써 가세요?" },
      { speaker: "민재", text: "다음엔… 제가 먼저 연락할게요." },
      { text: "짧은 밤이었다. 그런데 다음이, 이미 열려 있었다." },
    ],
  },
  {
    id: "alone",
    image: "/episodes/spring/9/spring-ep9-p05-phone.png",
    alt: "혼자 남은 서윤",
    label: "혼자 남은 그녀",
    lines: [
      { text: "그가 돌아가도 가슴이 바로 가라앉지 않는다." },
      {
        text: "보고 싶은 건 얼굴이 아니다. 손이 움직이던 그 십 분이다.",
        kind: "think",
      },
    ],
  },
  {
    id: "chat",
    image: "/episodes/spring/9/spring-ep9-p06-chat.png",
    alt: "다음을 묻는 메시지",
    wide: true,
    label: "다음을 기대하며",
    chat: [
      { from: "other", name: "민재", text: "다음에도 같은 시간에 와주실 수 있나요." },
      { from: "me", name: "서윤", text: "네. 그 시간으로요." },
    ],
    lines: [
      { text: "깊어지는 건 연애가 아니다. 두 사람이 고른, 같은 활동이다." },
    ],
  },
  {
    id: "city",
    image: "/episodes/spring/1/spring-p14-city.png",
    alt: "밤 도시",
    wide: true,
    lines: [
      { text: "이제는 조금 더 정직해진다." },
      { text: "멈출 수 없는 건 그 사람이 아니라, 그 손이다." },
    ],
  },
]
