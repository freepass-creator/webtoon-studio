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
