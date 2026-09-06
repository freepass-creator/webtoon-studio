# COURTLADY-01 생성 기록

## 2026-09-06 · 관계 연기 테스트 01

- 결과 파일: `chemistry-test.jpg`
- 용도: 왕–궁녀 2인 관계 테스트
- 상태: 1차 후보 · 미확정
- 생성 방식: 내장 이미지 생성

## 최종 프롬프트

```text
Use case: historical-scene
Asset type: vertical cinematic webtoon panel
Create a premium photorealistic Korean historical-drama scene set in an early-Joseon royal palace at night. A clearly adult Korean court lady in her mid-20s seeks to captivate the adult king through confident eye contact, a subtle knowing smile, and exceptionally graceful court etiquette. She is kneeling beside a low royal table while carefully pouring tea, with composed posture and an air of romantic intrigue. There is no physical contact.
The private palace chamber has dark lacquered wood, a silk folding screen, paper lattice windows, candlelight, cool moonlight, and a trace of incense haze. The adult king appears only from behind as a dignified, softly blurred foreground silhouette, so the court lady remains the focus.
She has natural Korean features and wears an elegant, fully covering, historically inspired court-lady hanbok in deep crimson and muted jade, with traditional hair and restrained ornaments. Clothing is intact, modest, and period-appropriate.
Style: near-photoreal live-action K-drama still, realistic skin and silk texture, sophisticated palace intrigue.
Composition: vertical 9:16, three-quarter view, shallow depth of field, court lady dominant in frame, king's shoulder framing one edge.
Mood: intimate but non-sexual romantic tension, elegance, ambition, secrecy, danger.
Palette: crimson, black lacquer, muted jade, warm gold, cool blue.
Constraints: all characters are adults; fully clothed; no nudity; no sexual action; no touching; no modern objects; no text; no watermark; anatomically correct hands.
```

## 변형 이력

- 1차 지시의 직접적인 관능 표현을 눈빛, 미소, 거리와 궁중 예법 중심의 관계 긴장으로 조정해 생성했다.
- 왕은 임시 실루엣이며 `KING-01` 캐스팅으로 확정하지 않는다.

## 2026-09-06 · 전신 체형 테스트 01

- 결과 파일: `body-turnaround.jpg`
- 용도: 캐릭터 확정 전 정면·정측면·후면 체형 비교
- 기준 이미지: `chemistry-test.jpg`의 `COURTLADY-01`
- 잠정 수치: 24세 · 165cm · 51kg
- 상태: 1차 후보 · 미확정
- 생성 방식: 내장 이미지 생성 후 후보 코드와 수치를 하단에 정확히 표기

## 최종 프롬프트

```text
Use case: identity-preserve
Asset type: professional casting body-turnaround board for a historical live-action webtoon
Input image: the provided image is the identity reference for COURTLADY-01. Preserve the adult Korean woman's facial identity, apparent age 24, natural skin tone, dark eyes, and the same elegant black hair gathered into a neat low court bun. Do not copy the king or palace scene.

Primary request: create one clean studio casting board showing the exact same adult woman standing in three full-body views: straight front, exact 90-degree side, and straight back. Head through bare feet must be completely visible in every view. All three views must have identical body proportions, face identity, hairstyle, clothing, scale, camera height, and neutral posture.

Body design: 165 cm, 51 kg; slender but naturally proportioned adult build; softly defined shoulders and waist; balanced hips; long straight legs; realistic healthy body, not underweight and not exaggerated.

Wardrobe: a historically inspired, opaque off-white linen chest wrap securely wound around the torso from above the bust to just below the ribcage, flattening and supporting the chest without exposing breasts or nipples; paired with simple opaque off-white Joseon-style under-trousers ending above the knees. Bare shoulders, lower legs, and feet are visible only for objective body-proportion assessment. The garments are fully opaque, practical, non-transparent, non-modern, and provide complete intimate coverage.

Scene/backdrop: neutral warm-gray casting studio wall and floor with evenly spaced horizontal height-reference lines behind the subject. No palace furniture, no props.
Style/medium: premium near-photoreal live-action casting photography, realistic skin and unretouched fabric texture, clean documentary accuracy.
Composition/framing: landscape composite board, three equal vertical bays, generous spacing between views, eye-level camera, 70–85 mm lens feel, minimal perspective distortion, consistent flat studio lighting.
Expression/pose: neutral professional expression, arms relaxed slightly away from the torso, feet parallel, no contrapposto, no sensual pose.
Constraints: clearly adult; preserve the woman's identity from the reference; objective wardrobe-fitting and body-proportion study; no nudity; no nipples; no cleavage; no transparent fabric; no lingerie styling; no erotic framing; no text, numbers, logos, or watermark; anatomically correct hands and feet; exactly three views only.
```

## 변형 이력

- 생성 이미지의 인물과 배경은 그대로 유지했다.
- 하단에 `COURTLADY-01 · AGE 24 · HEIGHT 165 CM · WEIGHT 51 KG`를 정확한 글자로 추가했다.


## 2026-09-06 · 전신 체형 테스트 03

- 결과 파일: `body-turnaround-v3.jpg`
- 용도: 허벅지까지 이어진 천 감개를 줄인 정면·정측면·후면 비교
- 기준 이미지: `chemistry-test.jpg`의 `COURTLADY-01`
- 잠정 수치: 24세 · 165cm · 51kg
- 상태: 3차 후보 · 미확정
- 생성 방식: 내장 이미지 생성 및 의상 재질 정밀 수정 후 공식 수치 표기

## 생성 프롬프트

```text
Create a polished Korean webtoon production model sheet for this same fictional adult woman, age 24. Preserve her recognizable face, braided updo, hair ornaments, and graceful proportions, translated into refined semi-realistic webtoon linework and flat color rather than photography. Show three aligned full-body views at equal scale: front, exact side profile, and back. Neutral upright stance, arms relaxed, objective anatomy-and-costume reference on a pale gray measurement-grid backdrop. She wears an opaque ivory wrapped-cloth practice costume: a secure bandeau-style linen top and compact fitted high-waisted wrap shorts with a short standard stage-costume cut, fully lined and nontransparent. The layered linen-strip texture stays on the garments only; the legs remain visually unobstructed. Bare feet. Balanced studio lighting, clean character-design board, non-erotic presentation.
```

## 재질 수정 프롬프트

```text
Precision costume-texture edit on this professional webtoon character model sheet. Keep the adult age-24 character, anatomy, face, hair, all three poses, garment silhouettes, garment coverage, layout, labels, detail panels, background grid, and colors unchanged. Edit only the textile construction of the ivory lower shorts in the front, side, back, and shorts-detail panels: make them visibly constructed from many snug, overlapping horizontal linen cloth strips, matching the wrapped-bandage craftsmanship of the chest top. The bands should read as practical hand-wrapped cloth with subtle seams and layered edges, while remaining fully opaque, secure, smooth-fitting, and the exact same short length and coverage as the current shorts. Preserve the waist sash. Objective non-erotic costume-design reference; no other changes.
```

## 변형 이력

- 사진형 수정안 대신 동일 후보를 반실사 웹툰 캐릭터 시트로 재구성했다.
- 하의 길이는 허벅지 상부에서 끝나는 짧은 형태로 줄이고 다리에는 천 띠가 이어지지 않게 했다.
- 하의 표면을 가슴싸개와 같은 겹친 리넨 띠 구조로 통일했다.
- 생성 시 들어간 임시 표기 위에 `COURTLADY-01 · AGE 24 · HEIGHT 165 CM · WEIGHT 51 KG · BODY TURNAROUND V3`를 정확히 표기했다.

## 2026-09-07 · 공식 바디 프로필

- 결과 파일: `body-profile.png`
- 용도: 배우 후보 간 얼굴·체격·신체 비율을 비교하는 한 장짜리 공식 캐스팅 보드
- 공통 규격: `CASTING-BODY-v2.0`
- 잠정 수치: 24세 · 165cm · 51kg
- 상태: 캐스팅 검토 중 · 미확정
- 생성 방식: 동일 인물 3면 사진 생성 후 절대 눈금과 정확한 한글 정보를 결정론적으로 합성

## 최종 사진 생성 프롬프트

```text
Use case: identity-preserve
Asset type: text-free photographic source for a standardized one-page premium Korean entertainment-agency body casting board.

Input images: Image 1 is the primary facial identity reference. Image 2 is the body-proportion and exact three-view reference. Preserve the same fictional adult Korean woman, explicitly age 24, 165 cm, 51 kg, with natural facial features, realistic healthy slender proportions, and consistent skin tone. Remove all historical hair ornaments and decorative accessories. Keep her dark hair neatly and simply secured in a low braided bun so the neck, shoulders, and body outline remain readable.

Primary request: recreate the exact same adult actress in exactly three aligned full-body views at identical scale: straight front, exact 90-degree right-facing side profile, and straight back.

Standard casting wardrobe: the identical opaque pure-white athletic two-piece in all three views: a fully lined, logo-free, high-neck fitted crop rashguard top with wide shoulder coverage and no cleavage, plus matching opaque fitted swim shorts with a modest upper-thigh length. Neutral professional fit-testing wardrobe, nontransparent, no lingerie styling, no jewelry, no shoes. Bare feet.

Scene/backdrop: seamless uniform light warm-gray agency studio, completely clean, no ruler, no grid, no props, no words.

Style/medium: premium near-photoreal live-action Korean agency casting photography; realistic unretouched skin; accurate white technical fabric; understated, high-end portfolio quality.

Composition/framing: wide landscape contact sheet with exactly three equal bays and generous equal spacing. Whole head through bare feet visible. Each body has exactly equal height and scale. Level 85 mm lens feel, camera at waist height, flat soft studio light, minimal perspective distortion.

Pose/expression: neutral professional expression and upright posture, arms relaxed slightly away from torso, feet parallel, no contrapposto, no fashion pose.

Constraints: clearly adult; exact same woman in all three bays; identical face, body proportions, hairstyle, garment, lighting and scale; exact front / exact side / exact back; no text, numbers, labels, logo, border, watermark, ruler, grid, extra inset or props; no cropped body parts; anatomically correct hands and feet.

Avoid: three-quarter view, different women, identity drift, erotic framing, transparent fabric, lingerie styling, cleavage, fashion pose, historical costume, hair ornaments, background markings, extra limbs, distorted hands or feet.
```

## 합성 규격

- 마스터 캔버스: 2400 × 3200px · 세로 3:4
- 절대 눈금: 0~200cm · 마스터 기준 1cm = 10px
- 200cm선: y=430px
- 165cm선 및 정수리: y=780px
- 0cm 바닥선 및 발바닥: y=2430px
- 전신 높이: 각 1650px
- 보기 순서: 정면 · 정확한 90도 옆면 · 뒷면
- 공식 하단 정보: 나이 · 키 · 몸무게
- 공식 파일은 GitHub 표시 성능을 위해 1600 × 2133px PNG로 내보내되 모든 좌표와 비율은 마스터에서 동일 비율로 축소한다.

## 변형 이력

- 이전의 미색 사극 속옷형 시안은 보관 자료로 유지했다.
- 루트 공통 규격에 맞춰 로고·장식이 없는 불투명 흰색 운동용 크롭 래시가드와 흰색 수영 쇼츠로 통일했다.
- 이미지 생성 단계에는 글자와 눈금을 넣지 않고, 최종 단계에서 한글 제목·0~200cm 눈금·165cm선·수치를 정확하게 합성했다.
- 이 작업에는 스토리보드, 콘티 또는 서사 구성이 포함되지 않는다.
