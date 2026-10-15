# [WebGL/3D] 구글 AI Studio로 구현한 '차코 캐니언 3D 디지털 트윈 & 고고천문학 탐험기' 개발기

> **포스팅 추천 카테고리:** IT / 웹 개발 / WebGL & Three.js / 인공지능 (AI Studio)  
> **태그:** `AIStudio`, `GoogleAIStudio`, `Threejs`, `WebGL`, `3D웹개발`, `차코캐니언`, `디지털트윈`, `고고천문학`, `LiDAR`, `GitHubPages`, `프론트엔드`

---

## 1. 들어가며: 왜 1,000년 전 차코 캐니언(Chaco Canyon)인가?

미국 뉴멕시코 북서부 사막 협곡에 자리한 **차코 캐니언(Chaco Canyon, 나바호어: Tsé Bił Ndzisgaii)**은 서기 850년부터 1150년경까지 북미 남서부 고대 푸에블로 문명의 종교·정치·천문학적 중심지였습니다.

그중에서도 가장 거대한 유적인 **푸에블로 보니토(Pueblo Bonito, '아름다운 마을')**는:
- 433개의 지리참조 폴리곤(지상/반지하 403개 + 지하 30개)과 복원 시 최대 4층 높이(~14.0m)에 달하는 800여 개의 사암 방,
- 동서 광장을 감싸는 35개 이상의 원형 의식용 홀인 **키바(Kiva)**,
- 56,000점 이상의 터키석과 모계 혈통 유전자가 확인된 33호 묘실(Room 33),
- 수천 킬로미터 떨어진 열대 멕시코에서 공수된 주홍금강앵무와 카카오 잔류물,
- 그리고 무엇보다 **춘분·추분의 일출/일몰과 완벽히 일치하는 동서 남측 성벽**, **진북(True North)을 가리키는 중앙 분할벽**, **동지 일출 햇살이 벽면을 비추는 코너 관측 창문(228호실)** 등 경이로운 고고천문학적 건축 정렬을 품고 있습니다.

저는 이 경이로운 고대 건축물을 웹 브라우저에서 누구나 자유롭게 탐험할 수 있도록, **0.5m 해상도의 미국 고고학 항공 LiDAR 데이터**, **미국 의회도서관 HABS No. NM-30 실측 도면**, **NASA 과학데이터(EO-5678)**를 결합한 **인터랙티브 3D 디지털 트윈 웹 애플리케이션**을 개발했습니다.

놀랍게도 이 복잡한 WebGL 셰이더, 수학적 태양 궤도 연산, 3D 보행 인터랙션, 다국어(한국어/영어) 지원 시스템의 전 과정은 **Google AI Studio**의 강력한 코드 생성 및 아키텍처 지원을 통해 완성되었습니다. 

본 포스팅에서는 **AI Studio를 활용한 개발 워크플로우**, **Three.js 커스텀 셰이더 및 고고천문학 계산 알고리즘 코드 예시**, 그리고 **GitHub Pages 자동 배포 CI/CD 파이프라인**까지 상세하게 정리해 공유합니다.

---

## 2. Google AI Studio를 활용한 개발 워크플로우

### 2.1 단순한 코드 어시스턴트를 넘어선 '도메인 협업 파트너'
복잡한 3D 그래픽스와 과학/역사 데이터를 다룰 때 가장 큰 장벽은 **도메인 지식의 파편화**입니다. 고고학 논문(Kennett et al. 2017 Nature Communications, Crown & Hurst 2009 PNAS), 미국 국립공원관리청(NPS) 측량 보고서, LiDAR 좌표계(EPSG:6342 UTM 13N), 그리고 Three.js의 광원/카메라 행렬이 서로 맞물려야 하기 때문입니다.

Google AI Studio는 대규모 컨텍스트 윈도우(Long-Context Window)를 지원하기 때문에, 방대한 고고학 데이터셋(`chaco_data.json`, 433개 폴리곤 정보)과 HABS 실측 도면 메타데이터를 통째로 컨텍스트에 올린 상태에서 설계를 진행할 수 있었습니다.

### 2.2 프롬프트 엔지니어링 노하우
AI Studio에 작업을 지시할 때 효과적이었던 핵심 원칙은 다음과 같습니다:

1. **단편적 기능 대신 '물리적/수학적 기준' 명시하기:**
   - *"태양 조명을 만들어줘"* 대신  
   - *"차코 캐니언의 위도(북위 36.0605°)와 지구 자전축 기울기(23.44°)를 반영하여, 춘분(Equinox), 하지(Summer Solstice), 동지(Winter Solstice)의 태양 적경/적위 및 방위각(Azimuth)을 삼각함수로 유도하고, Three.js DirectionalLight의 위치 벡터로 실시간 변환해줘."*
2. **시각적 품질 기준을 그래픽스 용어로 구체화하기:**
   - *"사암 벽체를 멋있게 렌더링해줘"* 대신  
   - *"Three.js MeshStandardMaterial의 `onBeforeCompile`을 확장하여 프래그먼트 셰이더에 fwidth 기반 안티앨리어싱을 적용하고, 3형(Type III) 띠모양 애슐러(Banded Ashlar) 석조와 쐐기돌(Spalls) 텍스처를 노이즈 함수로 절차적 합성해줘. 특정 방 클릭 시 주변부는 어두워지고 해당 방의 바닥과 벽체만 스포트라이트로 부각되는 마스크 텍스처 셰이더를 작성해줘."*
3. **다국어(i18n) 시스템의 무결성 요구:**
   - *"한국어를 기본 언어로 설정하고, 상단 헤더의 언어 전환 버튼 하나로 3D 씬의 재로딩 없이 모든 DOM 텍스트, 3D 룸 핀 라벨, 팝오버, 나침반 방위각 안내까지 실시간으로 즉각 리렌더링되도록 모듈화된 i18n 엔진을 구축해줘."*

---

## 3. 핵심 시스템 아키텍처 & 기술 스택

| 계층 | 기술 스택 | 설명 |
| :--- | :--- | :--- |
| **Core 3D Engine** | Three.js (r170), WebGL | 3D 모델 렌더링, 씬 그래프, 카메라 오빗/1인칭 보행 제어 |
| **Post-Processing** | EffectComposer, UnrealBloomPass | 고지대 사막의 깊이감 있는 대기 산란 및 골든 아워 블룸 효과 |
| **Data & Survey** | OpenTopography 0.5m LiDAR, HABS No. NM-30 | 433개 지리참조 사암 건축물 폴리곤 및 지형 표고 데이터 |
| **Archaeoastronomy** | NASA Science (EO-5678) 천문 계산 | 춘추분 90°/270°, 하지 60.5°, 동지 119.5° 일출 각도 시뮬레이션 |
| **Build & Deploy** | Vite 8, TypeScript, GitHub Actions | 상대 경로(`./`) 번들링 및 GitHub Pages 무중단 자동 배포 |
| **Localization** | Custom Reactive i18n Engine | 한국어(기본) / 영어 실시간 핫 스위칭 시스템 |

---

## 4. 핵심 소스 코드 심층 해설

### 4.1 고고천문학 솔라 컴퍼스(Celestial Compass) 및 태양 궤적 계산
푸에블로 보니토의 거대한 남측 성벽은 동서축(90°↔270°)을 따라 정확히 뻗어 있어 춘분과 추분의 일출과 일몰을 정확히 지향합니다. 또한 남동부 228호실의 코너 창문은 동지 일출 방위각(~119.5° ESE)을 정밀하게 겨누고 있습니다.

이를 수학적으로 모델링한 자바스크립트 계산 코드입니다:

```javascript
// 차코 캐니언 고유 위도 및 계절별 적위(Declination) 상수
const CHACO_LAT_DEG = 36.0605;
const CHACO_LAT_RAD = THREE.MathUtils.degToRad(CHACO_LAT_DEG);

const SEASON_DECLINATIONS = {
  summer: 23.44,   // 하지 (북위 23.44°)
  equinox: 0.0,    // 춘분 / 추분
  winter: -23.44,  // 동지 (남위 23.44°)
  lunar: -28.6,    // 18.6년 주기 달의 대정지(Major Standstill)
  night: -12.0,    // 별빛 밤하늘 모드
};

/**
 * 시간(Hour)과 계절(Season)에 따른 태양 고도(Altitude) 및 방위각(Azimuth) 계산
 * @param {string} seasonKey - 'equinox' | 'summer' | 'winter' | 'lunar' | 'night'
 * @param {number} hour24 - 0.0 ~ 24.0 실수 시간 (예: 16.85 = 16시 51분)
 */
function computeSolarAzAlt(seasonKey, hour24) {
  const decDeg = SEASON_DECLINATIONS[seasonKey] ?? 0.0;
  const decRad = THREE.MathUtils.degToRad(decDeg);

  // 태양 시각각 (Hour Angle: 정오 12:00 = 0 rad, 1시간당 15도)
  const haRad = THREE.MathUtils.degToRad((hour24 - 12.0) * 15.0);

  // 구면삼각법(Spherical Trigonometry)을 통한 태양 고도각(Altitude) 계산
  const sinAlt =
    Math.sin(CHACO_LAT_RAD) * Math.sin(decRad) +
    Math.cos(CHACO_LAT_RAD) * Math.cos(decRad) * Math.cos(haRad);
  const altRad = Math.asin(THREE.MathUtils.clamp(sinAlt, -1.0, 1.0));
  const altDeg = THREE.MathUtils.radToDeg(altRad);

  // 방위각(Azimuth: 진북 0°, 동 90°, 남 180°, 서 270°) 계산
  const cosAz =
    (Math.sin(decRad) - Math.sin(CHACO_LAT_RAD) * sinAlt) /
    (Math.cos(CHACO_LAT_RAD) * Math.cos(altRad) + 1e-7);
  let azRad = Math.acos(THREE.MathUtils.clamp(cosAz, -1.0, 1.0));
  if (Math.sin(haRad) > 0) {
    azRad = Math.PI * 2.0 - azRad;
  }
  const azDeg = (THREE.MathUtils.radToDeg(azRad) + 180.0) % 360.0;

  return { azDeg, azRad, altDeg, altRad };
}
```

이 연산 결과를 바탕으로 Three.js 씬의 `DirectionalLight` 위치를 실시간으로 갱신하여, 춘분 일출 시에는 거대한 남측 성벽을 따라 광선이 일직선으로 쏟아지고, 동지 일출 시에는 228호실 창문을 통해 빛줄기가 방 내부 반대편 모서리를 비추는 물리적 현상을 시뮬레이션할 수 있었습니다.

---

### 4.2 Three.js 커스텀 PBR 셰이더 확장 (`onBeforeCompile`)
실제 유적의 느낌을 살리기 위해 일반 텍스처 매핑 대신, **셰이더 레벨에서 지리참조 좌표와 노이즈 함수를 결합**했습니다. 사용자가 특정 방을 클릭하면 주변 유적 전체가 자연스럽게 어두워지고(Dimming), 선택된 방만 따뜻한 촛불 조명처럼 빛나는 '포커스 셰이더'를 구현했습니다:

```javascript
mat.onBeforeCompile = (shader) => {
  shader.uniforms.uNodeTypeId = { value: nodeTypeId };
  shader.uniforms.uRoomDataMap = sharedRoomShaderUniforms.uRoomDataMap;
  shader.uniforms.uFocusMaskMap = sharedRoomShaderUniforms.uFocusMaskMap;
  shader.uniforms.uDimAmount = sharedRoomShaderUniforms.uDimAmount;

  shader.fragmentShader = shader.fragmentShader
    .replace(
      '#include <common>',
      `#include <common>
       uniform float uNodeTypeId;
       uniform sampler2D uRoomDataMap;
       uniform sampler2D uFocusMaskMap;
       uniform float uDimAmount;
       varying vec3 vDesertWorldPos;`
    )
    .replace(
      '#include <dithering_fragment>',
      `
       // 1. 차코 캐니언 월드 좌표를 UV 좌표로 변환하여 룸 데이터 샘플링
       vec2 pbUv = vec2(
         (vDesertWorldPos.x - (${PB_TEX_MIN_X.toFixed(1)})) / ${PB_TEX_SPAN_X.toFixed(1)},
         (vDesertWorldPos.z - (${PB_TEX_MIN_Z.toFixed(1)})) / ${PB_TEX_SPAN_Z.toFixed(1)}
       );
       vec4 focusSample = texture2D(uFocusMaskMap, pbUv);
       float activeMask = smoothstep(0.28, 0.85, focusSample.r);

       // 2. 방 선택 시 주변 유적 디밍 & 선택된 방 스포트라이트 조명
       if (uDimAmount > 0.001) {
         float outsideDim = mix(1.0, 0.16, uDimAmount);
         vec3 dimmedBg = gl_FragColor.rgb * outsideDim;
         vec3 litActiveRoom = gl_FragColor.rgb * (1.0 + 0.52 * uDimAmount) * vec3(1.10, 1.03, 0.93);
         gl_FragColor.rgb = mix(dimmedBg, litActiveRoom, clamp(activeMask, 0.0, 1.0));
       }

       #include <dithering_fragment>
      `
    );
};
```

---

### 4.3 반응형 다국어(i18n) 시스템 구현 (한국어 기본)
국내 사용자뿐만 아니라 글로벌 연구자도 접근할 수 있도록 한국어와 영어를 지원하되, 기본 언어는 한국어로 설정했습니다. 중요한 점은 **3D 렌더링 컨텍스트를 파괴하지 않고 DOM과 3D 라벨만 실시간 교체**하는 구조입니다:

```javascript
// i18n.js
export const TRANSLATIONS = {
  ko: {
    brandTitle: '차코 캐니언',
    brandSub: '푸에블로 보니토 • 서기 850–1150년',
    modeOrbit: '와이드 조감도',
    modeGuided: '가이드 투어',
    modeWalk: '자유 보행',
    btnRooms: '방 탐색',
    btnFloorplan: '2D 평면도',
    btnArchive: '기록 보관소',
    // ... 수백 개의 학술 검증 어휘 수록
  },
  en: {
    brandTitle: 'CHACO CANYON',
    brandSub: 'Pueblo Bonito • AD 850–1150',
    modeOrbit: 'Wide Orbit',
    modeGuided: 'Guided Walkthrough',
    modeWalk: 'Free Walk',
    btnRooms: 'Rooms',
    btnFloorplan: 'Floorplan',
    btnArchive: 'Archive',
    // ...
  }
};

// 언어 전환 시 씬 재로딩 없이 즉각 실행되는 DOM 리액티브 함수
export function applyLanguageToDOM(lang = getActiveLanguage()) {
  document.documentElement.lang = lang;
  document.title = lang === 'ko' 
    ? '차코 캐니언 3D 디지털 트윈 & 고고천문학 탐험기' 
    : 'Chaco Canyon 3D Digital Twin & Archaeoastronomy Explorer';

  // 1. 헤더 및 주요 모드 버튼 갱신
  document.querySelector('#btn-brand-home .brand-title').textContent = t('brandTitle', lang);
  document.getElementById('current-lang-label').textContent = lang === 'ko' ? '한국어' : 'English';
  document.getElementById('btn-mode-orbit').innerHTML = `<span>🦅</span> ${t('modeOrbit', lang)}`;
  document.getElementById('btn-mode-guided').innerHTML = `<span>🧭</span> ${t('modeGuided', lang)}`;
  document.getElementById('btn-mode-walk').innerHTML = `<span>🚶</span> ${t('modeWalk', lang)}`;

  // 2. 6대 주요 구역 및 12개 방 칩 텍스트 재구성
  buildSectionsNavDOM();
  buildDiscoveryChipsDOM();

  // 3. 3D 공간 상의 CSS2D 오브젝트(방 이름 핀) 즉각 갱신
  for (const [id, beaconEl] of discoveryBeaconEls.entries()) {
    const discI18n = getDiscoveryI18n(id, lang);
    if (discI18n) {
      beaconEl.textContent = discI18n.shortPin;
      beaconEl.title = discI18n.beaconLabel;
    }
  }

  // 4. 현재 열려 있는 방 도시에 및 사이드 노트 리렌더링
  if (selectedFeature) populateInspectorDossier(selectedFeature, false);
}
```

---

### 4.4 GitHub Actions를 이용한 GitHub Pages 자동 배포 파이프라인
프로젝트를 정적 호스팅 서비스인 GitHub Pages에 배포할 때 가장 흔히 겪는 문제는 **서브디렉토리 에셋 경로 404 에러**입니다. `vite.config.ts`에서 `base: './'`를 지정하여 모든 JS, CSS, GLB 경로를 상대 경로로 변환하고, 아래와 같이 공식 GitHub Actions 워크플로우를 구성했습니다:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main, master ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm install

      - name: Build production bundle
        run: npm run build

      - name: Setup GitHub Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 5. 트러블슈팅과 성능 최적화 경험

### 5.1 18MB 고해상도 GLB 모델의 로딩 지연 해결
433개 방의 지붕, 서까래, 키바 벤치가 포함된 18MB 3D 바이너리 파일(`chaco_canyon.glb`)을 처음 불러올 때 사용자 이탈이 발생할 수 있었습니다.
- **해결책:** 서버 사이드 프록시 미들웨어에 `Cache-Control: public, max-age=604800` 헤더를 부여하고, 원격 CDN(GStatic) 페일오버(Failover) 로직을 삼중으로 구축했습니다.
- **로더 애니메이션:** 고대 나선형 암각화와 태양 궤도를 형상화한 순수 SVG 애니메이션 로더를 적용하여 로딩 체감 시간을 대폭 단축했습니다.

### 5.2 60FPS 유지를 위한 지리참조 폴리곤 피킹 최적화
마우스를 올릴 때마다 433개의 방 폴리곤에 대해 광선 투사(Raycasting) 및 점-다각형 포함 검사(Point-in-Polygon)를 수행하면 프레임 드랍이 발생했습니다.
- **해결책:** 12개의 큐레이션 탐방 지점을 공간 해시 테이블로 먼저 1차 필터링(반경 3.2m 이내)하고, 불필요한 지형 메시와의 인터섹션 계산을 스킵함으로써 60fps의 부드러운 인터랙션을 확보했습니다.

### 5.3 블로그 임베드를 위한 16:9 / 9:16 가변 뷰포트
티스토리나 노션 같은 블로그에 iframe으로 삽입할 때를 대비하여, 상단에 **Auto / 16:9 / 9:16 종횡비 스위처**를 탑재했습니다. 세로형 모바일 화면에서도 와이드 파노라마가 왜곡되지 않고 자동으로 화면 비율에 맞추어집니다.

---

## 6. 소스 코드 배포 및 라이브 데모 안내

### 6.1 GitHub 소스 코드 저장소 & Pages 배포 URL
- **GitHub 소스 저장소:** [https://github.com/djai32521/chaco-canyon-3d](https://github.com/djai32521/chaco-canyon-3d)
- **GitHub Pages 라이브 배포 URL:** [https://djai32521.github.io/chaco-canyon-3d/](https://djai32521.github.io/chaco-canyon-3d/)

#### [내 GitHub 저장소로 푸시하는 방법]
터미널에서 아래 명령어를 실행하면 본인의 GitHub 저장소로 즉시 배포할 수 있습니다:
```bash
# 1. 원격 저장소 연결 (본인 계정의 레포지토리 주소 입력)
git remote add origin https://github.com/djai32521/chaco-canyon-3d.git

# 2. 메인 브랜치 설정 및 푸시
git branch -M main
git push -u origin main
```
*푸시가 완료되면 GitHub 저장소의 `Settings` > `Pages`에서 Source가 `GitHub Actions`로 자동 설정되어 약 1~2분 후 라이브 배포가 완료됩니다.*

### 6.2 실시간 클라우드 미리보기 링크
AI Studio에서 구동 중인 개발 및 프리뷰 서버 링크에서도 즉시 체험하실 수 있습니다:
- **실시간 프리뷰 앱:** [https://ais-pre-dgyhqoscnpilnb5uap33z5-189458334862.asia-east1.run.app](https://ais-pre-dgyhqoscnpilnb5uap33z5-189458334862.asia-east1.run.app)

---

## 7. 마치며: AI Studio와 함께한 차세대 웹 3D 개발의 미래

이번 프로젝트를 진행하며 가장 놀라웠던 점은, 예전 같으면 수 주간의 수학적 계산과 셰이더 디버깅이 필요했을 **고고천문학적 시뮬레이션과 WebGL 디지털 트윈**을 **Google AI Studio**와의 유기적인 대화를 통해 며칠 만에 고품질로 완성할 수 있었다는 점입니다.

단순한 보일러플레이트 코드 생성이 아니라, 고고학적 팩트 체크(연륜 연대, 모계 유전자, 출토 유물 목록)와 복잡한 3D 그래픽스 파이프라인을 유기적으로 엮어내는 AI의 능력은 1인 개발자에게 수십 명 규모의 전문 팀을 붙여준 것과 같은 생산성을 제공했습니다.

3D 웹 개발이나 디지털 트윈, WebGL 프로젝트를 구상 중이시라면 **Google AI Studio**를 적극적으로 활용해 보시기를 강력히 추천합니다!

---

*본 포스팅에 사용된 모든 고고학 실측 도면 및 항공 LiDAR 데이터는 미국 의회도서관(HABS No. NM-30, LOC nm0107), 미국 국립공원관리청(NPS), OpenTopography 공공 연구 데이터(OT.042019.6342.1)에 근거합니다.*
