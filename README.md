# 누군가의 봄

올린 콘티 칸을 그대로 세로로 쌓은 HTML 웹툰입니다. 새로 그린 그림은 쓰지 않습니다.

- EP.8 조금씩, 선이 흐려진다
- EP.9 더 깊어지는 관계

대사와 지문은 콘티 칸 안에 이미 들어 있습니다.

## 보기

```bash
npm install
npm run dev -- --port 43217
```

브라우저에서 [http://localhost:43217/webtoons/someone-spring/ep08.html](http://localhost:43217/webtoons/someone-spring/ep08.html)

정적 파일만 열려면 `public/`을 서버 루트로 두면 됩니다.

## 파일

- `webtoons/someone-spring/ep08.html` · `ep09.html` — 한 편당 HTML 하나
- `webtoons/someone-spring/ep08/scene-*.png` — EP.8 콘티에서 자른 칸
- `webtoons/someone-spring/ep09/scene-*.png` — EP.9 콘티에서 자른 칸
- `public/webtoons/someone-spring/` — 같은 파일을 브라우저로 제공
