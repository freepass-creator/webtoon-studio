import type { EpisodeMeta, Panel } from "./types"

export type { ChatLine, Line, Panel } from "./types"

export const series = {
  title: "누군가의 봄",
  english: "Someone's Spring",
  logline: "누군가에게는 당연한 것이, 누군가에게는 평생의 꿈일 수 있다.",
  warning:
    "성인 웹툰. 장애인의 성인권 보조 봉사를 다루며, 행위는 직접 그리지 않고 표정·손·옷깃으로만 보여 줍니다.",
}

export const episode1: EpisodeMeta = {
  number: 1,
  title: "처음 하는 일",
  href: "/spring/1",
  next: { number: 2, title: "흔들리는 손", href: "/" },
}

export const panels: Panel[] = [
  {
    id: "title",
    image: "/episodes/spring/1/spring-p01-title.png",
    alt: "한서윤의 얼굴",
    label: "EP. 1",
    lines: [
      { text: "한서윤, 스물여섯.", kind: "think" },
      { text: "작은 회사의 평범한 회사원이다." },
    ],
  },
  {
    id: "phone",
    image: "/episodes/spring/1/spring-p00-phone.png",
    alt: "봉사 모집 글을 읽는 서윤",
    time: "토요일 아침",
    notice: {
      kicker: "주말 활동",
      title: "방문 성인권 보조 봉사자 모집",
      lines: [
        "대상  스스로 일상·성생활에 닿기 어려운 성인",
        "역할  위생, 자세, 손이 닿지 않는 부분의 보조",
        "시간  주 1회 · 2시간 · 교통비",
        "조건  교육 이수 · 감정 개입 금지 · 얼굴 비공개",
      ],
    },
    lines: [
      { text: "돈 때문에 클릭한 글은 아니었다." },
      { text: "할 수 있는 일처럼 보였다. 그래서 지원했다." },
    ],
  },
  {
    id: "mirror",
    image: "/episodes/spring/1/spring-p02-mirror.png",
    alt: "거울 앞에서 옷을 다듬는 서윤",
    time: "08:40",
    label: "준비",
    lines: [
      { text: "오늘 첫 방문.", kind: "think" },
      { text: "너무 튀지 않게. 상대가 위축되지 않게." },
      { text: "교육에서 말했다. 특별한 감정은 필요 없다고." },
    ],
  },
  {
    id: "train",
    image: "/episodes/spring/1/spring-p03-train.png",
    alt: "지하철에 앉은 서윤",
    time: "10:20",
    label: "이동",
    lines: [
      { text: "처음이라 손끝이 찼다." },
      { text: "그래도 봉사는 봉사다. 그렇게 되뇌었다." },
    ],
  },
  {
    id: "door",
    image: "/episodes/spring/1/spring-p04-door.png",
    alt: "아파트 문 앞의 서윤과 휠체어",
    time: "11:00",
    label: "도착",
    lines: [
      { speaker: "서윤", text: "안녕하세요. 봄 활동에서 왔습니다." },
      { text: "문 안에 휠체어가 있었다. 집은 생각보다 작았다." },
    ],
  },
  {
    id: "tea",
    image: "/episodes/spring/1/spring-p05-tea.png",
    alt: "차 앞에 마주 앉은 서윤과 민재",
    label: "첫 만남",
    lines: [
      {
        speaker: "민재",
        text: "와주셔서… 감사합니다. 사람이 오는 게, 오랜만이어서요.",
      },
      { speaker: "서윤", text: "편하게 계세요. 오늘은 인사부터 하면 된다고 했어요." },
      { text: "그는 컵만 내려다봤다. 나는 그의 눈을 억지로 맞추지 않았다." },
    ],
  },
  {
    id: "hands",
    image: "/episodes/spring/1/spring-p06-hands.png",
    alt: "휠체어 팔걸이 위의 손",
    wide: true,
    lines: [
      {
        speaker: "민재",
        text: "사람들은 이거, 숨 쉬는 것처럼 하잖아요.",
      },
      {
        speaker: "민재",
        text: "팔이 안 되는 게 다가 아니에요. 혼자 있으면… 그 감각 자체가 잊혀요.",
      },
      {
        speaker: "민재",
        text: "필요한 건 사람이거든요. 부끄러워도, 몸이 기억하는 방식이 있거든요.",
      },
      { text: "사랑 이야기를 하러 온 자리가 아니었다." },
    ],
  },
  {
    id: "prepare",
    image: "/episodes/spring/1/spring-p07-prepare.png",
    alt: "이불을 걷고 바지 허리를 정리하는 서윤",
    label: "봉사 시간",
    lines: [
      { text: "바지를 반쯤 내렸을 뿐인데, 방 안 공기가 달라졌다." },
      { text: "나는 그의 얼굴만 봤다. 그는 천장을 봤다." },
      { text: "교육대로. 담담하게. 필요한 만큼만." },
    ],
  },
  {
    id: "face",
    image: "/episodes/spring/1/spring-p08-face.png",
    alt: "집중한 서윤의 표정",
    lines: [
      { text: "그런데 내 표정이, 내가 생각한 것보다 집중되어 있었다." },
      {
        text: "의무라고 했는데. 손이 멈칫한 건, 의무 때문만은 아니었다.",
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
      { text: "그의 손이 시트를 움켜쥐었다." },
      { text: "말은 없었다. 숨만 조금 거칠어졌다." },
      {
        text: "사람을 좋아하는 게 아니었다. 이 순간이, 이상하게 또렷했다.",
        kind: "think",
      },
    ],
  },
  {
    id: "after",
    image: "/episodes/spring/1/spring-p10-after.png",
    alt: "이불을 올려 주는 서윤",
    label: "마무리",
    lines: [
      { text: "이불을 올려 주었다." },
      { speaker: "민재", text: "…오늘도, 감사합니다. 다음에도… 와주실 수 있어요?" },
      { speaker: "서윤", text: "네. 일정대로요." },
      { text: "그 대답이 너무 빨랐다." },
    ],
  },
  {
    id: "train-night",
    image: "/episodes/spring/1/spring-p11-train-night.png",
    alt: "퇴근길 지하철의 서윤",
    time: "16:10",
    label: "귀가",
    chat: [
      { from: "other", name: "지윤", text: "첫 봉사 어땠어? 이상하진 않고?" },
      { from: "me", name: "서윤", text: "그냥 봉사했어. 별일 없었어." },
    ],
    lines: [
      { text: "별일 없다고 했다. 그런데 손이 아직 따뜻했다.", kind: "think" },
    ],
  },
  {
    id: "bed",
    image: "/episodes/spring/1/spring-p12-bed.png",
    alt: "천장만 보는 서윤",
    time: "23:40",
    label: "혼자 있는 밤",
    lines: [
      { text: "그 사람을 떠올리는 게 아니었다." },
      { text: "바지가 내려가던 소리. 시트를 쥐던 손. 내가 하던 그 일." },
      {
        text: "몸이 반응하는 게 이상한가. 나는 봉사만 했을 뿐인데.",
        kind: "think",
      },
    ],
  },
  {
    id: "morning",
    image: "/episodes/spring/1/spring-p13-morning.png",
    alt: "다음 날 아침 세면대 앞의 서윤",
    time: "다음 날",
    lines: [
      { text: "다음 주에도 간다." },
      { text: "담담하게 하면 된다고, 다시 말했다." },
      { text: "그런데 이미, 그 시간이 다음을 기다리고 있었다." },
    ],
  },
  {
    id: "city",
    image: "/episodes/spring/1/spring-p14-city.png",
    alt: "해 질 녘 도시",
    wide: true,
    lines: [
      { text: "누군가에게는 당연한 것이, 누군가에게는 평생의 꿈일 수 있다." },
      { text: "그리고 나는, 그 사람을 사랑하는 게 아니다." },
      { text: "그 활동에, 조금씩 빠지고 있는 건지도 모른다." },
    ],
  },
]
