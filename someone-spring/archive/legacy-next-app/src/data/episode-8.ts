import type { EpisodeMeta, Panel } from "./types"

export const episode8: EpisodeMeta = {
  number: 8,
  title: "조금씩, 선이 흐려진다",
  href: "/spring/8",
  next: { number: 9, title: "더 깊어지는 관계", href: "/spring/9" },
}

export const panels: Panel[] = [
  {
    id: "title",
    image: "/episodes/spring/8/spring-ep8-p06-face.png",
    alt: "익숙해진 서윤의 얼굴",
    label: "EP. 8",
    lines: [
      { text: "처음엔 경험이라 생각했다." },
      { text: "어느 순간부터, 나는 그 순서를 몸으로 외우고 있었다." },
    ],
  },
  {
    id: "hall",
    image: "/episodes/spring/8/spring-ep8-p00-hall.png",
    alt: "아파트 복도",
    time: "토요일 16:40",
    label: "가는 길",
    lines: [
      { text: "초인종을 누르기 전에, 이미 손의 온도를 맞춘다." },
      { text: "문 번호는 외웠다. 그게 익숙함의 시작이었다." },
    ],
  },
  {
    id: "door",
    image: "/episodes/spring/8/spring-ep8-p01-door.png",
    alt: "문 앞의 서윤과 민재",
    label: "다시 만난 자리",
    lines: [
      { speaker: "민재", text: "오셨네요. 오늘도… 와주셔서." },
      { speaker: "서윤", text: "일정대로요. 편하게 계세요." },
      { text: "어색함은 거의 없었다. 시선도, 말도, 이미 알고 있는 거리였다." },
    ],
  },
  {
    id: "tea",
    image: "/episodes/spring/8/spring-ep8-p02-tea.png",
    alt: "차를 마주한 두 사람",
    label: "시작 전",
    lines: [
      { speaker: "민재", text: "오늘은… 지난번이랑 같이해도 될까요." },
      { speaker: "서윤", text: "네. 필요한 만큼만요." },
      {
        text: "사랑 이야기를 하러 온 자리가 아닌데도, 내 대답이 너무 빨랐다.",
        kind: "think",
      },
    ],
  },
  {
    id: "shoulders",
    image: "/episodes/spring/8/spring-ep8-p03-shoulders.png",
    alt: "어깨 위의 손",
    label: "거리가 줄어든다",
    lines: [
      { speaker: "민재", text: "긴장하지 마세요. 천천히요." },
      { speaker: "서윤", text: "…네." },
      { text: "피하던 거리가, 이제는 피하지 않는다. 손이 낯설지 않았다." },
    ],
  },
  {
    id: "wheelchair",
    image: "/episodes/spring/8/spring-ep8-p04-wheelchair.png",
    alt: "휠체어 앞의 서윤",
    label: "휠체어에서",
    lines: [
      { speaker: "민재", text: "오늘은… 잘하고 계세요." },
      { speaker: "서윤", text: "더 할까요. 괜찮으시면." },
      { text: "처음엔 망설였다. 지금은 그의 몸이 아니라, 이 순서에 익숙하다." },
    ],
  },
  {
    id: "prepare",
    image: "/episodes/spring/8/spring-ep8-p05-prepare.png",
    alt: "이불을 걷고 바지 허리를 맞추는 손",
    label: "행위",
    lines: [
      { text: "바지를 반쯤 내렸을 뿐인데, 방 안 공기가 달라진다." },
      { text: "나는 얼굴을 본다. 그는 천장을 본다." },
      { text: "행위는 여기까지다. 손의 위치, 숨의 간격, 이불이 내려간 선." },
    ],
  },
  {
    id: "face",
    image: "/episodes/spring/8/spring-ep8-p06-face.png",
    alt: "집중한 서윤",
    lines: [
      { text: "표정이 의무의 얼굴이 아니었다." },
      {
        text: "사람을 좋아하는 게 아니다. 이 일이, 내 손을 잡아두고 있다.",
        kind: "think",
      },
    ],
  },
  {
    id: "sheet",
    image: "/episodes/spring/1/spring-p09-sheet.png",
    alt: "시트를 움켜쥔 손",
    wide: true,
    lines: [
      { text: "시트가 접힌다. 말은 없다." },
      { text: "필요한 만큼만, 이라고 했는데. 손이 멈추는 타이밍을 내가 먼저 알았다." },
    ],
  },
  {
    id: "after",
    image: "/episodes/spring/8/spring-ep8-p07-after.png",
    alt: "끝난 뒤의 방",
    label: "끝난 후",
    lines: [
      { speaker: "민재", text: "수고했어요. 오늘은… 정말." },
      { speaker: "서윤", text: "일정대로요." },
      { text: "끝나고 남는 건 공허함이다. 나쁜 기분은 아니었다." },
    ],
  },
  {
    id: "mirror",
    image: "/episodes/spring/8/spring-ep8-p08-mirror.png",
    alt: "거울 속의 서윤",
    time: "21:10",
    label: "일상으로",
    lines: [
      { text: "거울 속 내가 조금 달라 보였다." },
      { text: "낯설다. 그런데 미워할 수는 없었다." },
    ],
  },
  {
    id: "night",
    image: "/episodes/spring/1/spring-p12-bed.png",
    alt: "혼자 있는 밤",
    time: "23:50",
    label: "혼자 있는 밤",
    lines: [
      { text: "다른 방문 일정도 생긴다. 사람은 바뀌어도, 손의 순서는 같다." },
      {
        text: "이게 내가 원하던 건가. 그래도… 조금은, 나쁘지 않다.",
        kind: "think",
      },
    ],
  },
  {
    id: "next",
    image: "/episodes/spring/8/spring-ep8-p09-prepare-next.png",
    alt: "다음을 위해 개어 둔 옷",
    wide: true,
    label: "다음을 준비하며",
    lines: [
      { text: "입을 옷과, 맞출 손의 온도를 이미 안다." },
      { text: "다음엔 누가 오든. 남는 건 사람이다. 빠지는 건 이 활동이다." },
    ],
  },
  {
    id: "city",
    image: "/episodes/spring/1/spring-p14-city.png",
    alt: "밤 도시",
    wide: true,
    lines: [
      { text: "조금씩, 선이 흐려진다." },
      { text: "나는 이미, 누군가의 봄이 되어 가는지도 모른다." },
    ],
  },
]
