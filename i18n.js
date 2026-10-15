/**
 * Chaco Canyon 3D Digital Twin - Bilingual i18n Translation & Localization Engine
 * Default Language: 한국어 ('ko') | Supported: 한국어 ('ko'), English ('en')
 */

export const I18N_STORAGE_KEY = 'chaco_canyon_lang';

export const TRANSLATIONS = {
  ko: {
    // ------------------------------------------------------------------------
    // TOP BAR & BRAND
    // ------------------------------------------------------------------------
    brandTitle: '차코 캐니언',
    brandSub: '푸에블로 보니토 • 서기 850–1150년',
    modeOrbit: '와이드 조감도',
    modeGuided: '가이드 투어',
    modeWalk: '자유 보행',
    btnRooms: '방 탐색',
    btnFloorplan: '2D 평면도',
    btnArchive: '기록 보관소',
    btnRecord: '녹화',
    btnRecording: '녹화 중지',
    btnCleanView: 'UI 숨기기 (단축키: H)',
    btnLangToggle: '한국어',
    langToggleTitle: '언어 전환 / Switch to English',

    // ------------------------------------------------------------------------
    // ASPECT RATIO SWITCHER
    // ------------------------------------------------------------------------
    aspectAuto: '자동 맞춤',
    aspect16_9: '16:9 가로',
    aspect9_16: '9:16 세로',
    aspectTitleAuto: '임베드 창 크기 자동 맞춤 (16:9 / 9:16)',
    aspectTitle16_9: '16:9 가로형 블로그 프레임 고정',
    aspectTitle9_16: '9:16 세로형 모바일 블로그 프레임 고정',

    // ------------------------------------------------------------------------
    // OVERVIEW HERO LAUNCHPAD CARD
    // ------------------------------------------------------------------------
    heroEyebrow: '0.5m LiDAR 및 고고학 실측 측량 • 북위 36.0605°, 서경 107.9616°',
    heroStats: {
      roomsVal: '~800개',
      roomsLbl: '전체 방 (433개 GIS 폴리곤)',
      southWallVal: '~175m',
      southWallLbl: '남측 성벽 (162–175m)',
      stopsVal: '12개 방',
      stopsLbl: '핵심 큐레이션 탐방로',
      dendroVal: '서기 850–1130',
      dendroLbl: '연륜 연대 측정 범위',
    },
    btnStartWalkthrough: '가이드 룸 투어 시작',
    btnEnterFreeWalk: '광장 내부 걷기 (WASD)',

    // ------------------------------------------------------------------------
    // SECTIONS BAR QUICK TOOLS
    // ------------------------------------------------------------------------
    elevPlaza: '광장 1.8m',
    elevTerrace: '테라스 5.5m',
    elevRoof: '지붕 9.5m',
    btnCycleElev: '↕ 높이: ',
    btnAutoOrbit: '↻ 자동 회전',
    btnWideShot: '↺ 넓은 시야',
    btnFullscreen: '⛶ 전체 화면',

    // ------------------------------------------------------------------------
    // ROOM DOSSIER DRAWER & SIDE NOTE LABELS
    // ------------------------------------------------------------------------
    dossierCategoryVerified: '검증된 발굴 기록',
    dossierCategoryFootprint: '지리참조 폴리곤 (구역 편년)',
    dossierStopPrefix: '탐방 지점',
    dossierOf: '/',
    lblMasonry: '석조 양식',
    lblDendro: '연륜 연대 / 편년',
    lblDimensions: '복원 상태',
    lblArea: '측량 기록',
    lblSummaryVerified: '공식 고고학 발굴 기록',
    lblSummaryGeneric: '지리참조 건축 기록',
    lblArtifactsVerified: '출토 유물 및 학술 증거',
    lblArtifactsGeneric: '보관 및 발굴 현황',
    tabDiagram: '📐 개략 도면',
    tabPhoto: '📷 LiDAR / HABS / NPS',
    btnStepInside: '🚶 방 내부 보기',
    btnOrbitRoom: '🦅 방 주위 회전',
    btnNextRoom: '다음 방 →',
    btnPrevRoom: '← 이전 방',
    roomSideUnfocusTitle: '닫기 및 전체 전경 복귀 (Esc)',
    dossierCloseTitle: '방 상세 패널 닫기',
    reopenDossierTitle: '‹ 방 상세 정보 열기',

    // ------------------------------------------------------------------------
    // BOTTOM WALKTHROUGH DOCK & CONTROLS
    // ------------------------------------------------------------------------
    btnGuidedWalkStart: '자동 가이드 투어',
    btnGuidedWalkPause: '자동 투어 일시정지',
    walkHint: '<b>WASD / 방향키</b> 보행 • <b>드래그</b> 360° 시선 • <b>바닥 클릭</b> 이동 • <b>방 핀 클릭</b> 탐색',
    exploreHud: '<b>드래그</b> 360° 회전 • <b>우클릭 드래그</b> 시점 이동 • <b>스크롤</b> 줌 • <b>방/핀 클릭</b> 탐색',
    walkPadTurnLeft: '↶ 좌회전',
    walkPadLeft: '◀ 좌측',
    walkPadForward: '▲ 전진',
    walkPadBack: '▼ 후진',
    walkPadRight: '▶ 우측',
    walkPadTurnRight: '↷ 우회전',

    // ------------------------------------------------------------------------
    // CARDINAL OBSERVATORY & CELESTIAL COMPASS
    // ------------------------------------------------------------------------
    seasonEquinox: '춘분/추분',
    seasonSummer: '하지',
    seasonWinter: '동지',
    compassTitleEquinox: '춘분 및 추분 (90° E ↔ 270° W): 클릭 시 일출(90°), 정오(180°), 일몰(270°) 순환',
    compassTitleSummer: '하지 (60° ENE ↔ 300° WNW): 클릭 시 하지 일출(60°), 정오, 일몰(300°) 순환',
    compassTitleWinter: '동지 (120° ESE ↔ 240° WSW): 클릭 시 동지 일출(120°), 정오, 일몰(240°) 순환',
    compassInfoBtnTitle: '동서·남북 방위 및 하지/동지 정렬 (NASA EO-5678, Sofaer 1997)',
    compassInfoHeading: '방위 및 지점 정렬 축 (북위 36.06°)',
    compassInfoDesc: '푸에블로 보니토에서 정밀 실측된 건축 및 천문 방위각 정렬 (Sofaer 1997; Farmer 2003; NASA EO-5678):',
    compassInfoWall: '동–서 남측 성벽 (90°↔270°): 동서 축선으로 완벽히 정렬되어 춘분과 추분의 일출(90° E) 및 일몰(270° W)과 일치합니다.',
    compassInfoMeridian: '남–북 중앙 분할벽 (0°↔180°): 중앙 광장을 진북-진남 자오선(정오 태양 그림자 축)을 따라 정확히 양분합니다.',
    compassInfoSolstice: '지점 지평선 이동각 (60°–120°): 일출 각도가 하지의 약 60.5°(북동동)에서 동지의 약 119.5°(남동동)까지 왕복합니다 (228호실 코너 창문 정렬).',

    // ------------------------------------------------------------------------
    // SOLAR LIGHTING & CHRONOLOGY POPOVER
    // ------------------------------------------------------------------------
    solarLightingHeader: '태양광 조명 (북위 36.06°)',
    sunTimeLabel: '태양 시간',
    presetGoldenHour: '🌅 골든 아워 부조광',
    presetRakingSunset: '🔥 석양 사광',
    presetEquinoxSunrise: '🌄 춘분 일출',
    presetWinterSolstice: '❄️ 동지 일출',
    presetHighNoon: '☀️ 정오 태양',
    presetNightKiva: '🌌 밤의 키바 화톳불',
    phasesHeader: '건축 편년 단계 (서기 850–1115년)',
    phaseAll: '전체 시기',
    phaseStage1: '1단계: 850년',
    phaseStage2: '2단계: 1040년',
    phaseStage3: '3단계: 1060년',
    phaseStage4: '4단계: 1085년+',
    chkLabels: '3D 방 핀',
    chkAlignments: '태양 광선 축',
    chkRoofs: '소나무 비가 서까래 (복원)',
    chkRockfall: '1941년 암벽 붕괴',

    // ------------------------------------------------------------------------
    // 2D GEOREFERENCED FLOORPLAN DRAWER
    // ------------------------------------------------------------------------
    mapDrawerTitle: '지리참조 평면도 (433개 폴리곤: 403개 지상/반지하 + 30개 지하 층)',
    mapDrawerSub: '임의의 방, 키바, 또는 발광 탐색 점을 클릭하면 해당 위치로 즉시 이동합니다',
    mapSearchPlaceholder: '33호실, 28호실, 대형 키바 A, 249호실 검색...',
    mapSearchBtn: '이동',
    legOldBonito: '올드 보니토 (850년)',
    legSpine: '4층 북측 척추부',
    legWings: '측익부 (1–3층)',
    legKivas: '키바 (35개+)',
    legGuided: '가이드 추천 방',
    legCamera: '현재 시점',

    // ------------------------------------------------------------------------
    // ARCHIVE & ATLAS MODAL
    // ------------------------------------------------------------------------
    atlasModalTitle: '차코 캐니언 0.5m LiDAR, HABS No. NM-30 및 NPS 고고학 아틀라스',
    atlasModalSub: 'OpenTopography 0.5m 항공 LiDAR(OT.042019.6342.1), 미국 의회도서관 HABS No. NM-30 실측 도면 및 미국 국립공원관리청(NPS) 공식 조사에 기초함',
    atlasTab1: '1. 0.5m LiDAR 분석, 3D 렌더 및 HABS/NPS 아카이브',
    atlasTab2: '2. 파하다 뷰트 선 대거(Sun Dagger) 시뮬레이터',
    atlasTab3: '3. 차코 석조 건축 양식 분류 (Type I–IV)',
    atlasTab4: '4. 1차 연구 및 실측 데이터 출처 (10개 출처)',

    sunDaggerHeading: '파하다 뷰트(Fajada Butte) 3개 암석판 선 대거(29SJ297) 및 천문 방위각 우주관',
    sunDaggerDesc1: '차코 캐니언 남동쪽 입구에 135m 높이로 솟은 파하다 뷰트(Tsé Diyilí) 꼭대기에는 1977년 안나 소파이어(Anna Sofaer)가 기록한 세 암석판 유적(Three-Slab Site, 29SJ297)이 위치합니다. 2~3m 높이의 거대한 사암 석판 세 개가 좁은 태양 광선 슬릿("빛의 칼날")을 뒤편 암벽의 나선형 암각화 위에 투영합니다:',
    sunDaggerPoint1: '하지 정오 (6월 21일경): 단 하나의 수직 빛줄기가 9.5바퀴 대형 나선 암각화의 정중앙을 수직으로 관통합니다.',
    sunDaggerPoint2: '동지 정오 (12월 21일경): 두 개의 평행한 빛줄기가 대형 나선의 바깥쪽 좌우 접선을 감싸며 중앙은 어둠으로 남깁니다.',
    sunDaggerPoint3: '춘분 및 추분 정오: 하나의 빛줄기가 대형 나선 중앙과 우측 사이를 지나고, 두 번째 빛줄기가 좌상단 2.5바퀴 소형 나선의 중심을 정확히 꿰뚫습니다.',
    sunDaggerPoint4: '18.6년 달의 극대/극소 주기: 월출 시 그림자 모서리가 9.5바퀴 나선의 중심(극소 정지)과 좌측 끝(극대 정지)에 정렬되며, 19개의 대각 홈이 18.6년 백도 교점 주기와 일치합니다.',
    sunDaggerDesc2: '캐니언 바닥의 푸에블로 보니토, 케트로 케틀, 카사 린코나다는 이러한 천문학적 축을 거대한 건축 규모로 구현했습니다. 푸에블로 보니토의 중앙 분할벽은 진북-진남 자오선을 따르고, 남측 성벽은 춘추분 일출/일몰과 완벽히 일치하며, 남동쪽 228호실 코너 창문은 동지 일출 각도(~120° ESE)에 정렬되어 있습니다.',

    sdBtnSummer: '하지 (여름)',
    sdBtnEquinox: '춘분 / 추분',
    sdBtnWinter: '동지 (겨울)',
    sdBtnLunar: '달의 18.6년 주기',
  },

  en: {
    // ------------------------------------------------------------------------
    // TOP BAR & BRAND
    // ------------------------------------------------------------------------
    brandTitle: 'CHACO CANYON',
    brandSub: 'Pueblo Bonito • AD 850–1150',
    modeOrbit: 'Wide Orbit',
    modeGuided: 'Guided Walkthrough',
    modeWalk: 'Free Walk',
    btnRooms: 'Rooms',
    btnFloorplan: 'Floorplan',
    btnArchive: 'Archive',
    btnRecord: 'Record',
    btnRecording: 'Stop Record',
    btnCleanView: 'Toggle Clean HUD (Shortcut: H)',
    btnLangToggle: 'English',
    langToggleTitle: '언어 전환 / Switch to Korean',

    // ------------------------------------------------------------------------
    // ASPECT RATIO SWITCHER
    // ------------------------------------------------------------------------
    aspectAuto: 'Auto',
    aspect16_9: '16:9',
    aspect9_16: '9:16',
    aspectTitleAuto: 'Auto-fit enclosing iframe (16:9 or 9:16)',
    aspectTitle16_9: 'Lock 16:9 Landscape Blog Embed Frame',
    aspectTitle9_16: 'Lock 9:16 Vertical Blog Embed Frame',

    // ------------------------------------------------------------------------
    // OVERVIEW HERO LAUNCHPAD CARD
    // ------------------------------------------------------------------------
    heroEyebrow: '0.5m LIDAR & ARCHAEOLOGICAL SURVEY • 36.0605°N, 107.9616°W',
    heroStats: {
      roomsVal: '~800',
      roomsLbl: 'Total Rooms (433 GIS Polygons)',
      southWallVal: '~175m',
      southWallLbl: 'South Wall (162–175m)',
      stopsVal: '12 Rooms',
      stopsLbl: 'Curated Stops',
      dendroVal: 'AD 850–1130',
      dendroLbl: 'Tree-Ring Span',
    },
    btnStartWalkthrough: 'Start Guided Room Walkthrough',
    btnEnterFreeWalk: 'Walk Inside Plaza (WASD)',

    // ------------------------------------------------------------------------
    // SECTIONS BAR QUICK TOOLS
    // ------------------------------------------------------------------------
    elevPlaza: 'Plaza 1.8m',
    elevTerrace: 'Terrace 5.5m',
    elevRoof: 'Roof 9.5m',
    btnCycleElev: '↕ Level: ',
    btnAutoOrbit: '↻ Auto-Orbit',
    btnWideShot: '↺ Wide Shot',
    btnFullscreen: '⛶ Fullscreen',

    // ------------------------------------------------------------------------
    // ROOM DOSSIER DRAWER & SIDE NOTE LABELS
    // ------------------------------------------------------------------------
    dossierCategoryVerified: 'VERIFIED EXCAVATION RECORD',
    dossierCategoryFootprint: 'GEOREFERENCED FOOTPRINT (SECTOR PHASE)',
    dossierStopPrefix: 'STOP',
    dossierOf: 'OF',
    lblMasonry: 'MASONRY',
    lblDendro: 'TREE-RING / DATING',
    lblDimensions: 'RECONSTRUCTION STATUS',
    lblArea: 'SURVEY RECORD',
    lblSummaryVerified: 'PUBLISHED ARCHAEOLOGICAL RECORD',
    lblSummaryGeneric: 'GEOREFERENCED ARCHITECTURAL RECORD',
    lblArtifactsVerified: 'EXCAVATED ARTIFACTS & EVIDENCE',
    lblArtifactsGeneric: 'ARCHIVAL & EXCAVATION STATUS',
    tabDiagram: '📐 Schematic Diagram',
    tabPhoto: '📷 LiDAR / HABS / NPS',
    btnStepInside: '🚶 Step Inside View',
    btnOrbitRoom: '🦅 Orbit Room',
    btnNextRoom: 'Next Room →',
    btnPrevRoom: '← Prev',
    roomSideUnfocusTitle: 'Close & return to full ruin (Esc)',
    dossierCloseTitle: 'Collapse Room Dossier',
    reopenDossierTitle: '‹ Room Dossier',

    // ------------------------------------------------------------------------
    // BOTTOM WALKTHROUGH DOCK & CONTROLS
    // ------------------------------------------------------------------------
    btnGuidedWalkStart: 'Auto-Guide Tour',
    btnGuidedWalkPause: 'Pause Auto-Guide',
    walkHint: '<b>WASD / Arrows</b> Walk • <b>Drag</b> Look 360° • <b>Click Ground</b> Walk To • <b>Click Room Pin</b> Inspect',
    exploreHud: '<b>Drag</b> Orbit 360° • <b>Right-Drag</b> Pan • <b>Scroll</b> Zoom • <b>Click Any Room or Pin</b> Explore',
    walkPadTurnLeft: '↶ Turn Left',
    walkPadLeft: '◀ Left',
    walkPadForward: '▲ Walk',
    walkPadBack: '▼ Back',
    walkPadRight: '▶ Right',
    walkPadTurnRight: '↷ Turn Right',

    // ------------------------------------------------------------------------
    // CARDINAL OBSERVATORY & CELESTIAL COMPASS
    // ------------------------------------------------------------------------
    seasonEquinox: 'Equinox',
    seasonSummer: 'Summer',
    seasonWinter: 'Winter',
    compassTitleEquinox: 'Spring & Autumn Equinox (90° E ↔ 270° W): Click to cycle Sunrise (90° E), Noon (180° S), and Sunset (270° W)',
    compassTitleSummer: 'Summer Solstice (60° ENE ↔ 300° WNW): Click to cycle Sunrise (60° ENE), Noon (180° S), and Sunset (300° WNW)',
    compassTitleWinter: 'Winter Solstice (120° ESE ↔ 240° WSW): Click to cycle Sunrise (120° ESE), Noon (180° S), and Sunset (240° WSW)',
    compassInfoBtnTitle: 'Cardinal & Solstice Alignments (Sofaer 1997; NASA EO-5678)',
    compassInfoHeading: 'CARDINAL & SOLSTICE AXES (36.06°N)',
    compassInfoDesc: 'Measured architectural and solar azimuth alignments documented at Pueblo Bonito (Sofaer 1997; Farmer 2003; NASA EO-5678):',
    compassInfoWall: 'E–W Southern Wall (90°↔270°): Oriented East–West; aligns with Equinox sunrise (90° E) and sunset (270° W).',
    compassInfoMeridian: 'N–S Dividing Wall (0°↔180°): Bisects the central court along the True North–South meridian (Solar Noon shadow axis).',
    compassInfoSolstice: 'Solstice Horizon Swing (60°–120°): Sunrise shifts from ~60.5° ENE (Summer Solstice) to ~119.5° ESE (Winter Solstice; Room 228 corner window, Reyman 1976).',

    // ------------------------------------------------------------------------
    // SOLAR LIGHTING & CHRONOLOGY POPOVER
    // ------------------------------------------------------------------------
    solarLightingHeader: 'SOLAR LIGHTING (36.06°N)',
    sunTimeLabel: 'Sun Time',
    presetGoldenHour: '🌅 Golden Hour Relief',
    presetRakingSunset: '🔥 Deep Raking Sunset',
    presetEquinoxSunrise: '🌄 Equinox Sunrise',
    presetWinterSolstice: '❄️ Winter Solstice',
    presetHighNoon: '☀️ High Noon',
    presetNightKiva: '🌌 Night Kiva Fires',
    phasesHeader: 'CONSTRUCTION PHASES (AD 850–1115)',
    phaseAll: 'All Phases',
    phaseStage1: 'I: AD 850',
    phaseStage2: 'II: AD 1040',
    phaseStage3: 'III: AD 1060',
    phaseStage4: 'IV: AD 1085+',
    chkLabels: '3D Room Pins',
    chkAlignments: 'Solar Sightlines',
    chkRoofs: 'Pine Vigas (Reconstructed)',
    chkRockfall: '1941 Rockfall',

    // ------------------------------------------------------------------------
    // 2D GEOREFERENCED FLOORPLAN DRAWER
    // ------------------------------------------------------------------------
    mapDrawerTitle: 'GEOREFERENCED FLOORPLAN (433 POLYGONS: 403 ACTIVE + 30 SUB-COURT)',
    mapDrawerSub: 'Click any room, kiva, or glowing cyan discovery dot to walk/fly there',
    mapSearchPlaceholder: 'Search Room 33, Room 28, Kiva A, Room 249…',
    mapSearchBtn: 'Go',
    legOldBonito: 'Old Bonito (AD 850)',
    legSpine: '4-Story Spine',
    legWings: 'Wings (1–3S)',
    legKivas: 'Kivas (35+)',
    legGuided: 'Guided Room',
    legCamera: 'Camera',

    // ------------------------------------------------------------------------
    // ARCHIVE & ATLAS MODAL
    // ------------------------------------------------------------------------
    atlasModalTitle: 'CHACO CANYON 0.5m LIDAR, HABS NO. NM-30 (LOC nm0107) & NPS ARCHAEOLOGICAL ATLAS',
    atlasModalSub: 'Grounded in OpenTopography 0.5m Airborne LiDAR (OT.042019.6342.1), Historic American Buildings Survey HABS No. NM-30 (LOC nm0107), and NPS Surveys',
    atlasTab1: '1. 0.5m LiDAR Breakdowns, 3D Renders & HABS/NPS Archive',
    atlasTab2: '2. Fajada Butte Sun Dagger Simulator',
    atlasTab3: '3. Chacoan Masonry Typology (Types I–IV)',
    atlasTab4: '4. Primary Data Archive Links (10 Sources)',

    sunDaggerHeading: 'Fajada Butte Three-Slab Sun Dagger (29SJ297) & Cardinal Cosmology',
    sunDaggerDesc1: 'Rising 135 meters above the southeastern entrance of Chaco Canyon, Fajada Butte (Tsé Diyilí) houses the Three-Slab Site (29SJ297) documented by Anna Sofaer in 1977. Three leaning slabs of Cliff House Sandstone (~2–3 m tall) channel narrow slivers of sunlight onto two pecked spiral petroglyphs on the cliff face behind them:',
    sunDaggerPoint1: 'Summer Solstice Noon (June 21): A single vertical light dagger pierces the exact center of the large 9.5-turn spiral petroglyph.',
    sunDaggerPoint2: 'Winter Solstice Noon (Dec 21): Two parallel light daggers bracket the exact outer left and right tangents of the large spiral, leaving its center dark.',
    sunDaggerPoint3: 'Spring & Autumnal Equinoxes: One dagger falls midway between the center and right edge of the large spiral, while a second dagger pierces the exact center of the smaller 2.5-turn spiral to the upper left.',
    sunDaggerPoint4: '18.6-Year Lunar Major & Minor Standstills: Moonrise shadow edges align with the center (minor standstill) and left tangent (major standstill) of the 9.5-turn spiral, with 19 diagonal grooves matching the 18.6-year lunar nodal cycle.',
    sunDaggerDesc2: 'Across the canyon floor below, Pueblo Bonito, Chetro Ketl, and Casa Rinconada encode these same astronomical axes at monumental scale: Pueblo Bonito\'s central dividing wall follows the true North–South cardinal meridian, while its southern closing wall aligns to the East–West equinox sunrise/sunset, and Room 228 features exterior corner windows aligned to the Winter Solstice sunrise (~120° ESE).',

    sdBtnSummer: 'Summer Solstice',
    sdBtnEquinox: 'Equinox',
    sdBtnWinter: 'Winter Solstice',
    sdBtnLunar: 'Lunar Standstill',
  },
};

// ----------------------------------------------------------------------------
// 6 ARCHITECTURAL SECTIONS TRANSLATIONS
// ----------------------------------------------------------------------------
export const SECTIONS_I18N = {
  overview: {
    ko: {
      shortTitle: '와이드 조감도',
      fullTitle: '1구역 • 3D 건축 복원 (0.5m LiDAR 및 고고학 실측 측량)',
      heroTitle: '푸에블로 보니토 대형 주택 및 차크라 메사 절벽',
      heroDesc:
        '남측 성벽 <strong>~175m(162–175m) × 98m</strong> 규모에 <strong>433개의 지리참조 폴리곤</strong>(403개 지상/반지하 건축물 + 30개 지하 층; 복원 시 최대 4층/~14.0m에 이르는 800여 개 방)과 동서 광장을 둘러싼 <strong>35개 이상의 의식용 키바</strong>를 갖춘 고대 아메리카 최대의 대형 주택(Great House)입니다. OpenTopography 0.5m 항공 LiDAR(OT.042019.6342.1)와 미국 국립공원관리청(NPS), 의회도서관 HABS No. NM-30 실측 조사 자료를 정밀하게 통합하여 복원했습니다.',
    },
    en: {
      shortTitle: 'Wide Overview',
      fullTitle: 'SECTION I • 3D ARCHITECTURAL RECONSTRUCTION (0.5m LIDAR & ARCHAEOLOGICAL SURVEY)',
      heroTitle: 'Pueblo Bonito Great House & Chacra Mesa Escarpment',
      heroDesc:
        'Spanning <strong>~175 m (162–175 m) × 98 m</strong> with <strong>433 georeferenced polygons</strong> (403 active ground/recessed features + 30 buried sub-court features; ~800 total multi-story rooms rising up to a reconstructed 4 stories / ~9.8–14.0 m) and <strong>35+ ceremonial kivas</strong> flanking open East and West Courts, this 3D interpretive reconstruction extrudes the 0.5m airborne LiDAR (OpenTopography OT.042019.6342.1), HABS No. NM-30 (LOC Item nm0107), and NPS measured surveys.',
    },
  },
  old_bonito: {
    ko: {
      shortTitle: '올드 보니토 핵심부',
      fullTitle: '2구역 • 올드 보니토 기원 핵 (1단계: 서기 850–935+)',
      heroTitle: '9세기 초승달형 건축핵, 모계 묘실 및 제의 저장소',
      heroDesc:
        '1형 판상 사암 석조(서기 850–935년경)로 축조된 북서쪽 올드 보니토 원호형 구역입니다. 33호실(서기 800–1130년의 14구 유골, 미토콘드리아 DNA B2y1 하플로타입을 100% 공유하는 모계 혈통 확인, 56,000점 이상의 터키석 출토; Kennett et al. 2017), 28호실(약 174점의 토기 완형 및 원통형 카카오 잔 111–112점, 카카오 테오브로민 성분 검출), 32호실(375점 이상의 의식용 지팡이), 38호실(14마리의 금강앵무 유골 및 두꺼운 조류 배설물 퇴적층, 흑옥 개구리 상)이 밀집되어 있습니다.',
    },
    en: {
      shortTitle: 'Old Bonito Core',
      fullTitle: 'SECTION II • OLD BONITO NUCLEUS (STAGE I: AD 850–935+)',
      heroTitle: 'The 9th-Century Crescent, Mortuary Crypt & Ritual Repositories',
      heroDesc:
        'Built of Type I tabular sandstone slabs (c. AD 850–935), the northwestern Old Bonito arc contains Room 33 (14 burials dated AD 800–1130, 9/9 sequenced sharing mtDNA haplotype B2y1, >56,000 turquoise items; Kennett et al. 2017), Room 28 (~174 whole ceramic vessels including ~111–112 Chacoan cylinder jars plus absorbed Theobroma cacao residue; Crown & Hurst 2009), Room 32 (375+ ceremonial staffs), and Room 38 (14 scarlet macaw skeletons; Watson et al. 2015).',
    },
  },
  kivas: {
    ko: {
      shortTitle: '대형 키바 & 광장',
      fullTitle: '3구역 • 대형 키바 A 및 동서 이중 광장 (서기 1075–1115년경)',
      heroTitle: '반지하 성소, 바닥 공명실 및 자오선 광장',
      heroDesc:
        '남북 중앙 분할벽에 의해 동쪽 광장과 서쪽 광장으로 양분된 공간입니다. 동쪽 광장의 대형 키바 A는 북쪽 전용 계단으로 진입하며, 4개의 거대한 방형 석조 기둥이 지탱하는 소나무 목재 지붕(약 2.9m 높이), 원형 석조 벤치, 34개의 벽면 벽감, 중앙 화덕 및 바닥 매립형 석조 공명실(Vaults)을 갖추고 있습니다.',
    },
    en: {
      shortTitle: 'Great Kivas & Plaza',
      fullTitle: 'SECTION III • GREAT KIVA A & OPEN DUAL COURTS (APPROX. AD 1075–1115)',
      heroTitle: 'Recessed Sanctuaries, Subfloor Vaults & Cardinal Plaza',
      heroDesc:
        'Divided by a North–South wall into open East and West Courts, Pueblo Bonito’s plazas include Great Kiva A (built approx. AD 1075–1115)—entered by a formal northern stairway and surrounded by a concentric masonry bench and 34 wall niches, with a reconstructed timber roof supported by four large square rubble-filled masonry columns, a raised central firebox, and paired subfloor masonry vaults.',
    },
  },
  east_wing: {
    ko: {
      shortTitle: '동익부 & 하지/동지 관측소',
      fullTitle: '4구역 • 전성기 동익부, 공방 구역 및 천문 관측소 (서기 1050–1110년)',
      heroTitle: '249호실 금강앵무 사육실, 168호실 터키석 공방 및 228호실 동지 일출 창문',
      heroDesc:
        '심재-외벽(Core-and-Veneer) 사암 석조로 건축된 동쪽 및 남동쪽 윙입니다. 249호실(금강앵무 유골 3구와 횃대, 조류 분변 바닥), HABS No. NM-30 5번에 실측된 T자형 문(226호실) 및 코너 출입구(225호실), 168호실(남동부 터키석 세공 및 공예 공방), 225/228호실(방위각 약 120° 남동동 동지 일출 광선이 반대편 벽면을 비추는 외부 코너 창문)이 위치합니다.',
    },
    en: {
      shortTitle: 'East Wing & Solstice',
      fullTitle: 'SECTION IV • CLASSIC EAST WING, CRAFT SECTOR & SOLAR OBSERVATORIES (AD 1050–1110)',
      heroTitle: 'Room 249 Macaw Aviary, Room 168 Lapidary & Craft Area & Solstice Windows',
      heroDesc:
        'Built in core-and-veneer sandstone masonry, the East and Southeast Wings include Room 249 (3 Scarlet Macaw skeletons, perches, adobe bowls & guano floor; Judd 1954), nearby Section No. 1 rooms (Rooms 174–177, 225–226) documented in HABS No. NM-30, Room 168 (lapidary and craft activity area), and Rooms 225 & 228 (~120° ESE Winter Solstice sunrise corner windows; Reyman 1976).',
    },
  },
  west_spine: {
    ko: {
      shortTitle: '서측 묘역 & 1941 암벽 붕괴',
      fullTitle: '5구역 • 서측 묘실 클러스터 및 1941년 위협하는 바위(Threatening Rock) 붕괴',
      heroTitle: '326호실 서측 묘실 및 1941년 사암 거석 붕괴 너덜지대',
      heroDesc:
        '푸에블로 보니토에서 가장 초기에 축조된 서측 블록(서기 860–935년경)에 속하는 326호실은 서측 묘실 클러스터(320, 326, 329, 330호실)의 일부로, 재평가 결과 12명의 유골(성인 11명[여성 10, 남성 1] 및 영아 1명)이 확인되었습니다. 북동쪽 절벽 뒤편에서는 약 3만 톤 무게의 \'위협하는 바위(Tsé Bíyah Aniiʼáhí)\' 사암 거석이 1941년 1월 22일 붕괴하여 북측 외벽과 65개 방을 덮친 역사적 현장입니다.',
    },
    en: {
      shortTitle: 'Western Burials & Rockfall',
      fullTitle: 'SECTION V • WESTERN BURIAL CLUSTER & 1941 THREATENING ROCK COLLAPSE',
      heroTitle: 'Room 326 Western Burial Cluster Chamber & 1941 Threatening Rock Talus',
      heroDesc:
        'In one of Pueblo Bonito’s earliest western architectural blocks (approx. AD 860–935 construction), Room 326 formed part of the Western Burial Cluster (Rooms 320, 326, 329, 330); osteological reassessment identified 12 individuals (11 adults [10 females, 1 male] and 1 infant). Along the northeastern cliff, the ~30,000-ton Threatening Rock monolith collapsed on January 22, 1941.',
    },
  },
  greater_chaco: {
    ko: {
      shortTitle: '서측 광장 & 키바 Q',
      fullTitle: '6구역 • 서측 광장, 대형 키바 Q 및 4층 북측 척추부',
      heroTitle: '대형 키바 Q, 개방형 서측 광장 및 복원된 4층 높이 북측 외벽',
      heroDesc:
        '남북 분할벽 서편의 개방된 서측 광장 중심에는 대형 키바 Q(11세기 중엽 추정, 대형 키바 A보다 선행)가 위치합니다. 원형 석조 소켓에 안치된 4개의 거대한 원목 지붕 기둥(대형 키바 A의 사각 석조 기둥과 구조적 대조)과 바닥 공명실, 남쪽 진입 계단을 갖추고 있으며, 북쪽으로는 4층 높이(~14m)로 우뚝 솟은 북측 척추부(14/85호실)로 이어집니다.',
    },
    en: {
      shortTitle: 'West Court & Kiva Q',
      fullTitle: 'SECTION VI • WEST COURT PLAZA, GREAT KIVA Q & 4-STORY SPINE',
      heroTitle: 'Great Kiva Q, The Open West Court & Reconstructed Four-Story Northern Spine',
      heroDesc:
        'West of the North–South dividing wall, the open West Court plaza centers on Great Kiva Q (Classic Bonito Phase, probably mid-11th century and predating Great Kiva A), equipped with four large wooden roof-support posts seated in circular masonry settings, paired rectangular subfloor vaults, and southern entry stairway, rising northward to the reconstructed 4-story Northern Spine (Room 14/85).',
    },
  },
};

// ----------------------------------------------------------------------------
// 12 CURATED ROOM DISCOVERIES TRANSLATIONS
// ----------------------------------------------------------------------------
export const DISCOVERIES_I18N = {
  pueblo_bonito_380: {
    ko: {
      chipLabel: '01 • 33호 묘실',
      shortPin: '33호실 • 엘리트 묘실',
      beaconLabel: '33호실: 모계 혈통 묘실 (14구 매장 • 9/9 전원 B2y1 mtDNA)',
      tinyEra: '1단계 올드 보니토 기원 핵 • 서기 850–935년 (매장 서기 800–1130년)',
      tinyTitle: '33호실 — 모계 엘리트 묘실 (ROOM 33 CRYPT)',
      tinyDesc: '상층 58호실 아래 위치한 지상층 묘실. 14구의 매장(서기 800–1130년), 56,000점 이상의 터키석 유물, 유전자 분석된 9명 모두가 동일한 모계 미토콘드리아 DNA(B2y1)를 공유하는 지배 가문의 묘역입니다.',
      keyPoints: [
        '건축 및 복원: 상층 58호실 아래 위치한 1형 판상 사암 묘실입니다. 상층 구조와 소나무 서까래, 손으로 깎은 소나무 널빤지 바닥 분할은 1896년 페퍼(Pepper)의 발굴 기록에 기초한 해석적 복원입니다.',
        '층위 및 부장품 (Pepper 1909, 1920): 소나무 널판 바닥 아래층에서 14호(서기 800–850년; 터키석 11,200점 이상, 조개 패물 3,300점 이상, 전복, 소라고둥 나팔) 및 13호(터키석 5,800점 이상) 유골이 발굴되었으며, 바닥 위층에서 12구의 매장(터키석 총 56,000점 이상, 목제 플루트, 모자이크 바구니)이 출토되었습니다.',
        '고유전체학 분석 (Kennett et al. 2017 Nature Communications): 9구의 전장 미토콘드리아 게놈이 100% 동일(B2y1 하플로타입)하여, 약 330년간(서기 800–1130년) 어머니-딸, 할머니-손자 관계로 이어지는 모계 혈통 엘리트 가문임이 입증되었습니다.',
      ],
      artCaption: '페퍼(Pepper 1909, 1920) 및 케넷(Kennett et al. 2017): 33호실 (14구 매장, 56,000점 이상 터키석, 9/9 B2y1 mtDNA)',
      photoCap: '퍼블릭 도메인 (Pepper 1920, AMNH Vol. 27): 33호실에서 출토된 조각 목제 플루트 악기',
    },
    en: {
      chipLabel: '01 • Rm 33 Crypt',
      shortPin: 'Rm 33 • Elite Crypt',
      beaconLabel: 'Room 33: Matrilineal Crypt (14 Burials • 9/9 B2y1 mtDNA)',
      tinyEra: 'STAGE I OLD BONITO CORE • AD 850–935 (BURIALS AD 800–1130)',
      tinyTitle: 'ROOM 33 — MATRILINEAL MORTUARY CRYPT',
      tinyDesc: 'Ground-story chamber beneath reconstructed Upper Room 58. Held 14 burials (AD 800–1130), >56,000 turquoise items, and 9/9 sequenced individuals sharing identical mtDNA haplotype B2y1.',
      keyPoints: [
        'Architecture & Reconstruction: Ground-story Type I tabular sandstone chamber beneath Upper Room 58. The upper story, ceiling vigas, and hand-hewn pine plank floor divide shown in the 3D model are interpretive reconstructions based on Pepper’s 1896 excavation records (Pepper 1909, 1920).',
        'Stratigraphy & Offerings (Pepper 1909, 1920): Below the pine plank floor lay Burial 14 (AD 800–850; >11,200 turquoise & >3,300 shell ornaments, abalone, conch trumpet) and Burial 13 (>5,800 turquoise pieces); above the floor lay 12 burials (>56,000 total turquoise items, wooden flutes, mosaic basket).',
        'Archaeogenomics (Kennett et al. 2017, Nat. Commun. 8:14115): Complete mtDNA genomes from 9 individuals were 100% identical (haplotype B2y1); nuclear SNPs from 6 individuals confirmed mother–daughter and grandmother–grandson kin across ~330 years (AD 800–1130).',
      ],
      artCaption: 'Pepper (1909, 1920 AMNH) & Kennett et al. (2017): Room 33 (14 Burials, >56,000 Turquoise Items, 9/9 B2y1 mtDNA)',
      photoCap: 'Public Domain (Pepper 1920, AMNH Vol. 27): Carved Wooden Flutes Excavated from Room 33',
    },
  },

  pueblo_bonito_240: {
    ko: {
      chipLabel: '02 • 28호 카카오',
      shortPin: '28호실 • 카카오 잔',
      beaconLabel: '28호실: 토기 완형 ~174점 (원통형 잔 ~111–112점) 및 카카오 잔류물',
      tinyEra: '올드 보니토 시기 축조 • 11세기 말~12세기 초 퇴적 봉헌',
      tinyTitle: '28호실 — 원통형 잔 캐시 및 카카오 흡착 성분',
      tinyDesc: '올드 보니토 북측 호형부에 속하며 차후 개축 및 세분화되었습니다. 발굴 시 약 174점의 토기 완형(원통형 잔 111–112점 포함, 약 99점이 높은 수납 선반에 밀집)이 출토되었으며, 잔류물 분석 결과 카카오(Theobroma cacao) 성분인 테오브로민이 검출되었습니다.',
      keyPoints: [
        '건축 구조: 초기 올드 보니토 북측 호형부의 일부로 축조된 후 세분화 및 개축되었습니다. 3D 모델에서는 두 구획을 일관된 복합 공간으로 표현합니다.',
        '도기 캐시 발굴: 28호실에서 약 174점의 완형 토기가 출토되었으며, 이 중 차코 특유의 원통형 잔이 111–112점에 달했습니다(약 99점이 높은 수납 선반에 밀집). 서기 1100년경 제의적 종결 화재로 인해 심하게 그을린 상태로 발견되었습니다.',
        '카카오(Theobroma cacao) 성분 검출: 출토된 원통형 잔 파편 5점을 질량 분석한 결과 3점에서 테오브로민(카카오의 고유 바이오마커)이 검출되어, 메소아메리카 무역로를 통해 유입된 카카오 음료 의례가 거행되었음을 증명했습니다 (Crown & Hurst 2009 PNAS).',
      ],
      artCaption: '페퍼(Pepper 1920) 및 크라운 & 허스트(2009 PNAS): 28호실 원통형 잔 111~112점 및 흡착된 카카오 테오브로민 성분',
      photoCap: '1877년 미국 지질조사국(USGS, W.H. Jackson): 원형 그대로 보존된 차코 주거실 내부 및 소나무 서까래',
    },
    en: {
      chipLabel: '02 • Rm 28 Cacao',
      shortPin: 'Rm 28 • Cacao Jars',
      beaconLabel: 'Room 28: ~174 Ceramic Vessels (~111–112 Cylinder Jars) & Cacao Residue',
      tinyEra: 'OLD BONITO CONSTRUCTION • LATE 11TH–EARLY 12TH CENTURY CACHE DEPOSIT',
      tinyTitle: 'ROOM 28 — CYLINDER JAR CACHE & CACAO RESIDUE',
      tinyDesc: 'Originally part of the early Old Bonito northern arc and later remodeled. Excavations recovered ~174 whole ceramic vessels, including ~111–112 Chacoan cylinder jars with absorbed Theobroma cacao residue.',
      keyPoints: [
        'Architecture: Originally part of the early Old Bonito northern arc and later remodeled and subdivided, with an added upper story.',
        'Ceramic Cache: Excavations recovered approximately 174 whole ceramic vessels from Room 28, including ~111–112 Chacoan cylinder jars, heavily burned during a termination event around AD 1100.',
        'Cacao Evidence: Chemical residue analysis detected theobromine—the biomarker for Theobroma cacao—in three cylinder jar sherds, demonstrating Mesoamerican exchange rituals (Crown & Hurst 2009 PNAS).',
      ],
      artCaption: 'Pepper (1920) & Crown & Hurst (2009 PNAS): ~174 Ceramic Vessels (~111–112 Cylinder Jars) & Absorbed Theobromine Residue',
      photoCap: '1877 U.S. Geological Survey (W.H. Jackson): Intact Chacoan Room Interior & Vigas',
    },
  },

  pueblo_bonito_8: {
    ko: {
      chipLabel: '03 • 32호 지팡이',
      shortPin: '32호실 • 375+ 의식 지팡이',
      beaconLabel: '32호실: 전실 • 375점 이상의 조각 목제 의식 지팡이 및 모자이크 바구니',
      tinyEra: '1단계 올드 보니토 핵심부 • 연륜 연대 서기 862–919년',
      tinyTitle: '32호실 — 의식용 지팡이(PAHO) 안치 전실',
      tinyDesc: '33호 묘실 바로 남쪽에 인접하여 33호실로 진입하는 유일한 내부 문을 갖춘 전실입니다. 375점 이상의 조각된 의식용 지팡이(Paho), 81발의 갈대 화살, 터키석 모자이크 원통 바구니가 출토되었습니다.',
      keyPoints: [
        '진입 구조: 33호 묘실의 남쪽에 직접 연결되어 있으며, 33호실 내부로 통하는 유일한 출입구(너비 약 0.52m)를 지닌 엄숙한 전실입니다.',
        '연륜 연대 및 건축: 진흙 모르타르와 1형 판상 사암으로 축조되었으며, 계단식 석조 벽선반이 있습니다. 천장 원목의 연륜 연대는 서기 862~919년으로 측정되었습니다 (Windes & Ford 1996).',
        '출토 유물군 (Pepper 1920): 북서쪽 구석에 정갈하게 쌓인 375점 이상의 조각 목제 의식 지팡이, 화살통에 담긴 81발의 갈대 화살, 터키석 및 가시굴 조개 모자이크 원통형 바구니, 25점 이상의 레드 메사 흑백 토기가 발견되었습니다.',
      ],
      artCaption: '페퍼(Pepper 1920 AMNH Vol. 27): 32호실 — 375점 이상의 목제 지팡이, 81발 화살 및 터키석 모자이크 바구니',
      photoCap: 'NPS 퍼블릭 도메인: 소나무 상인방 문틀 및 층상 사암 벽체',
    },
    en: {
      chipLabel: '03 • Rm 32 Staffs',
      shortPin: 'Rm 32 • 375+ Staffs',
      beaconLabel: 'Room 32: Antechamber • 375+ Wooden Staffs & Mosaic Basket',
      tinyEra: 'STAGE I OLD BONITO CORE • TREE-RING DATED AD 862–919',
      tinyTitle: 'ROOM 32 — CEREMONIAL STAFFS ANTECHAMBER',
      tinyDesc: 'Antechamber immediately south of Room 33 providing the sole interior doorway into the Room 33 crypt; yielded 375+ carved wooden staffs, 81 reed arrows, and a turquoise-mosaic cylinder basket.',
      keyPoints: [
        'Access & Context: Positioned immediately south of Room 33, providing the sole interior doorway into the Room 33 mortuary crypt.',
        'Dendrochronology: Built of Type I uncoursed tabular sandstone slabs; ceiling poles yielded tree-ring dates of AD 862–919 (Windes & Ford 1996).',
        'Excavated Assemblage (Pepper 1920): Contained 375+ carved wooden ceremonial staffs (pahos) stacked in the NW corner, a quiver of 81 reed arrows, and turquoise-and-Spondylus mosaic baskets.',
      ],
      artCaption: 'Pepper (1920 AMNH Vol. 27): Room 32 — 375+ Wooden Staffs, 81 Reed Arrows & Mosaic Basket',
      photoCap: 'NPS Public Domain: Pine Lintel Doorways & Coursed Sandstone Masonry',
    },
  },

  pueblo_bonito_352: {
    ko: {
      chipLabel: '04 • 38호 앵무새',
      shortPin: '38호실 • 14 금강앵무',
      beaconLabel: '38호실: 금강앵무 사육실 및 제의 퇴적 (14마리 주홍금강앵무 • Haplo6)',
      tinyEra: '올드 보니토 핵심부 • 앵무새 반입 서기 900–1040년경',
      tinyTitle: '38호실 — 금강앵무 사육실 및 제의 유적',
      tinyDesc: '14마리의 주홍금강앵무 유골(12마리는 두꺼운 조류 배설물 층에 매몰, 2마리는 바닥 구덩이에 의례 매장)과 터키석 상감 흑옥 개구리상이 출토된 초기 올드 보니토 방입니다.',
      keyPoints: [
        '건축 양식: 북측 룸블록 내 초기 올드 보니토 방입니다. 3D 모델의 환기창, 횃대, 상층부 구조는 발굴 보고서에 입각한 해석적 복원입니다.',
        '금강앵무 유존체: 14마리의 주홍금강앵무(Ara macao) 유골이 출토되었습니다. 12마리가 두껍게 다져진 조류 배설물(구아노) 층에서 발견되어 실내에서 살아있는 앵무새를 직접 사육했음을 명확히 입증하며, 2마리는 바닥 구덩이에 제의적으로 안치되었습니다.',
        '연대 및 유전체 분석: 방사성 탄소 및 고대 DNA 분석에 따르면 앵무새 반입은 서기 900~1040년에 집중되었으며, 시퀀싱된 개체들 모두 동일한 모계 계통(Haplo6 클레이드)의 극히 가까운 유전형을 보여 멕시코 열대 우림의 특정 번식 집단에서 교역되었음을 시사합니다 (Watson et al. 2015; George et al. 2018).',
      ],
      artCaption: '페퍼(1920), 왓슨(2015) & 조지(2018): 14마리 주홍금강앵무 및 터키석 상감 흑옥 개구리상',
      photoCap: 'NPS 1930년대 공공누리: 사암 절벽 아래 북측 룸블록 보존 현장',
    },
    en: {
      chipLabel: '04 • Rm 38 Macaws',
      shortPin: 'Rm 38 • 14 Macaws',
      beaconLabel: 'Room 38: Macaw-Keeping Room & Ritual Deposit (14 Scarlet Macaws • Haplo6 Clade)',
      tinyEra: 'OLD BONITO CORE • MACAW USE CA. AD 900–1040',
      tinyTitle: 'ROOM 38 — MACAW-KEEPING ROOM & RITUAL DEPOSIT',
      tinyDesc: 'Early Old Bonito room where excavations recovered 14 scarlet macaw skeletons—12 embedded in a thick bird guano deposit and 2 in subfloor pits—plus a turquoise-inlaid black jet frog.',
      keyPoints: [
        'Architecture: Early Old Bonito room within the northern roomblock. Reconstructed vents, doors, and perches shown in 3D are interpretive.',
        'Macaw Remains: 14 scarlet macaw skeletons—12 embedded in a thick deposit of compacted bird guano (evidence of live captive birds) and 2 in subfloor pits—plus a jet frog.',
        'Chronology & Genetics: Radiocarbon and ancient-DNA studies show macaw acquisition mostly between AD 900 and 1040, within the restricted Haplo6 mitochondrial clade (Watson et al. 2015; George et al. 2018).',
      ],
      artCaption: 'Pepper (1920), Watson et al. (2015) & George et al. (2018): 14 Scarlet Macaws & Jet Frog',
      photoCap: 'NPS 1930s Public Domain: Northern Roomblocks Below Cliff House Sandstone Cliff',
    },
  },

  pueblo_bonito_159: {
    ko: {
      chipLabel: '05 • 대형 키바 A',
      shortPin: '대형 키바 A',
      beaconLabel: '대형 키바 A: 동측 광장 거대 키바 (4개 방형 석조 기둥 및 34개 벽감)',
      tinyEra: '11세기 말~12세기 초 • 서기 1075–1115년경 축조',
      tinyTitle: '대형 키바 A (GREAT KIVA A) — 동측 광장 성소',
      tinyDesc: '북쪽 공식 석조 계단으로 진입하며, 동심원형 석조 벤치와 34개의 벽면 벽감, 중앙 화덕, 그리고 4개의 거대한 방형 석조 기둥이 지탱하는 웅장한 소나무 목재 지붕을 갖춘 광장 중심 성소입니다.',
      keyPoints: [
        '건축 및 편년: 푸에블로 보니토의 전성기 확장기(서기 1075–1115년경)에 동쪽 광장에 반지하로 축조되었습니다. 북쪽 전용 계단 진입로와 34개의 개방형 벽감이 둘러싸고 있습니다.',
        '지붕 구조 및 바닥 시설: 4개의 거대한 방형 석조 기둥이 지붕 하중을 지탱하며, 중앙에 솟은 석조 화덕과 양옆으로 대칭 배치된 바닥 석조 공명실(Foot Drums/Vaults)이 배치되어 있습니다.',
        '봉헌 제의 맥락: 발굴 당시 34개 벽감은 개방되어 있었으나, 푸에블로 보니토의 주요 키바 건축층에서는 기둥 초석 및 벽체 봉헌용 터키석 비즈와 조개 장신구가 다수 확인되었습니다.',
      ],
      artCaption: '저드(Judd 1954 NMNH) 및 NPS (1980): 대형 키바 A (4개 방형 석조 기둥, 34개 벽감 및 바닥 공명실)',
      photoCap: 'NPS 퍼블릭 도메인: 대형 키바 A 바닥 석조 공명실, 중앙 화덕 및 원형 벤치 벽감',
    },
    en: {
      chipLabel: '05 • Great Kiva A',
      shortPin: 'Great Kiva A',
      beaconLabel: 'Great Kiva A: East Court Great Kiva (4 Square Masonry Columns & 34 Niches)',
      tinyEra: 'LATE 11TH–EARLY 12TH CENTURY • APPROX. AD 1075–1115',
      tinyTitle: 'GREAT KIVA A — EAST COURT GREAT KIVA',
      tinyDesc: 'Recessed East Court Great Kiva entered by a formal northern stairway and surrounded by a concentric masonry bench and 34 open wall niches; four large square rubble-filled masonry columns supported the timber roof.',
      keyPoints: [
        'Architecture & Chronology: Built during the late 11th to early 12th century expansion (approx. AD 1075–1115). Entered by a formal northern stairway and surrounded by 34 wall niches.',
        'Roof Support & Floor Features: Four large square rubble-filled masonry columns supported the reconstructed timber roof (~9 ft 7 in ceiling height), flanking a raised central firebox and paired subfloor vaults.',
        'Ceremonial Offerings: While niches were found open upon excavation, dedicatory turquoise and shell deposits are extensively documented across Chacoan great kivas.',
      ],
      artCaption: 'Judd (1954, 1964 NMNH) & NPS: Great Kiva A (Approx. AD 1075–1115 • 4 Square Masonry Columns & 34 Wall Niches)',
      photoCap: 'NPS Public Domain: Great Kiva A Subfloor Masonry Vaults, Central Firebox & 34 Wall Niches',
    },
  },

  pueblo_bonito_257: {
    ko: {
      chipLabel: '06 • 249호 앵무 사육실',
      shortPin: '249호실 • 3 앵무새',
      beaconLabel: '249호실: 3마리 금강앵무 유골, 목제 횃대 및 조류 배설물 바닥',
      tinyEra: '3단계 전성기 보니토기 • 서기 1050–1085년경',
      tinyTitle: '249호실 — 금강앵무 사육실 및 동익부 회랑',
      tinyDesc: '닐 저드(Neil Judd, 1954)가 발굴한 방으로, 3마리의 주홍금강앵무 유골, 벽면에 박힌 목제 횃대, 점토 모이그릇, 두꺼운 배설물 바닥이 확인되었으며, HABS NM-30 실측 T자형 문과 인접해 있습니다.',
      keyPoints: [
        '사육 증거 (Judd 1954): 3마리의 주홍금강앵무 유골과 함께 사암 벽체에 삽입된 목제 횃대, 점토 먹이그릇, 두껍게 다져진 조류 배설물 바닥이 출토되어 실내 사육장으로 규명되었습니다.',
        '유전 계통 및 산지: 최근 재조사에서 푸에블로 보니토는 총 35마리 이상의 금강앵무를 산출했으며, 모두 멕시코 열대 유래의 단일 미토콘드리아 계통군(Haplo6)에 속합니다 (George et al. 2018 PNAS).',
        'T자형 문 및 HABS No. NM-30: 3형 줄무늬 심재-외벽 석조로 지어졌으며, 인접한 226호실 서측 벽면의 실측 T자형 출입구 및 225호실 코너 문과 함께 차코 특유의 축선형(Enfilade) 통로를 형성합니다.',
      ],
      artCaption: '저드(Judd 1954) & HABS No. NM-30 Sheet 5: 249호 앵무 사육실 및 동익부 T자형 문',
      photoCap: 'NPS 퍼블릭 도메인: 동익부 축선형 일렬 문(Enfilade Doorways) 및 3형 줄무늬 석조',
    },
    en: {
      chipLabel: '06 • Rm 249 Aviary',
      shortPin: 'Rm 249 • 3 Macaws',
      beaconLabel: 'Room 249: 3 Scarlet Macaw Skeletons, Perches & Guano Floor',
      tinyEra: 'STAGE III CLASSIC BONITO • APPROX. AD 1050–1085',
      tinyTitle: 'ROOM 249 — MACAW AVIARY & EAST WING CHAMBER',
      tinyDesc: 'Excavated by Judd (1954): yielded 3 Scarlet Macaw skeletons, wooden wall perches, adobe bowls & thick guano floor; near HABS NM-30 Section 1 T-doorways.',
      keyPoints: [
        'Aviary Evidence (Judd 1954): Yielded 3 Scarlet Macaw skeletons, thick guano floor, adobe bowls, and wooden perches set into masonry walls.',
        'Collections & Genetics: Pueblo Bonito has produced ~35 macaws; sequenced individuals fall into the same broader mitochondrial clade (Haplo6; George et al. 2018 PNAS).',
        'East Wing Doors: Built in Type III banded core-and-veneer masonry; nearby HABS No. NM-30 Sheet 5 documents measured T-Doorways on Room 226.',
      ],
      artCaption: 'Judd (1954 NMNH) & HABS No. NM-30 Sheet 5: Room 249 Aviary (3 Macaws) & East Wing T-Doorway',
      photoCap: 'NPS Public Domain: East Wing Aligned Enfilade Doorways & Type III Banded Masonry',
    },
  },

  pueblo_bonito_231: {
    ko: {
      chipLabel: '07 • 168호 공방',
      shortPin: '168호실 • 터키석 공방',
      beaconLabel: '168호실: 남동부 터키석 세공 및 공예 활동 구역',
      tinyEra: '3~4단계 • 서기 1050–1105년경',
      tinyTitle: '168호실 — 석기 세공 및 터키석 가공 구역',
      tinyDesc: '남동쪽 룸블록 확장부에 속하며 168, 170, 173호실 일대에서 연마 석기, 박편 석기 공구, 광물 안료 및 터키석 가공 잔해물이 다량 출토된 장인 공방 구역입니다.',
      keyPoints: [
        '건축: 심재-외벽 사암 석조로 건축된 남동측 룸블록 확장부입니다. 단층 공간으로 복원되었습니다.',
        '출토 유물 및 생산 활동: 168, 170, 173호실 주변에서 마제석기, 미세 박편 석기, 광물 원석, 터키석 파편 및 세공 잔유물이 다수 발견되어 전문 공예 공방으로 기능했음을 나타냅니다.',
        '학술적 주의: 과거 일부 대중서에서 구리 방울이나 나팔 저장소로 와전된 바 있으나 정밀 발굴 기록상 터키석 및 광물 가공 공방으로 확인됩니다.',
      ],
      artCaption: '남동 구역 (168, 170, 173호실): 연마 석기 도구 및 터키석 세공 공방 흔적',
      photoCap: 'NPS 1930년대 공공누리: 절벽 위에서 내려다본 남동쪽 룸블록 및 키바군',
    },
    en: {
      chipLabel: '07 • Rm 168 Craft',
      shortPin: 'Rm 168 • Lapidary & Craft',
      beaconLabel: 'Room 168: Southeastern Lapidary & Craft Activity Area',
      tinyEra: 'STAGE III–IV • APPROX. AD 1050–1105',
      tinyTitle: 'ROOM 168 — LAPIDARY & CRAFT ACTIVITY',
      tinyDesc: 'Southeastern sector room associated with lapidary and craft activity. Rooms 168, 170, and 173 produced ground- and flaked-stone tools, mineral materials, and turquoise evidence.',
      keyPoints: [
        'Architecture: Part of the later southeastern roomblock expansion, constructed with core-and-veneer sandstone masonry.',
        'Artifacts: Rooms 168, 170, and 173 produced ground- and flaked-stone tools, mineral materials, and turquoise-related lapidary debitage.',
        'Archaeological Record: Carefully distinguished as a lapidary and mineral production area based on excavation inventories.',
      ],
      artCaption: 'Southeastern Sector (Rooms 168, 170 & 173): Ground- and Flaked-Stone Tools & Lapidary Activity',
      photoCap: 'NPS 1930s Public Domain: Southeastern Roomblocks & Kivas from Cliff Overlook',
    },
  },

  pueblo_bonito_9: {
    ko: {
      chipLabel: '08 • 228호 동지창',
      shortPin: '228호실 • 동지 일출창',
      beaconLabel: '228호실 (인접 225호실): 방위각 ~120° ESE 동지 일출 코너 관측 창문',
      tinyEra: '3~4단계 • 서기 1065–1110년경',
      tinyTitle: '228호실 — 동지 일출 코너 관측 창문',
      tinyDesc: '남동부 외곽 모서리에 위치한 228호실과 225호실은 방위각 약 120°(남동동) 방향으로 대각선 코너 창문이 뚫려 있어, 1년 중 낮이 가장 짧은 동지(12월 21일경) 일출 햇살이 실내 반대편 모서리를 정확히 비춥니다 (Reyman 1976).',
      keyPoints: [
        '고고천문학적 정렬 (Reyman 1976 Science 193:1037–1038): 남동쪽 225호실과 228호실의 외부 코너 창문은 방위각 약 120° ESE를 향해 있으며, 실제 현장 관측 결과 동지 일출 직후 가느다란 햇빛 줄기가 실내 반대편 서측 모서리를 정확하게 조명함이 입증되었습니다.',
        '건축 및 복원: 3/4형 심재-외벽 사암 석조로 축조되었으며 상부 벽체와 지붕 구조는 해석적 복원입니다.',
        '의회도서관 HABS No. NM-30 실측: HABS NM-30 1구역 도면(Sheet 1~5, 1940)에 225호실 북동 모서리의 대각선 출입구와 226호실 T자형 문이 정밀하게 도면화되어 있습니다.',
      ],
      artCaption: '레이먼(Reyman 1976 Science): 225 및 228호실 방위각 ~120° 동지 일출 코너 창문',
      photoCap: 'NPS 1929년 공공누리: 남동부 룸블록의 대각선 코너 개구부 실측 사진',
    },
    en: {
      chipLabel: '08 • Rm 228 Solstice',
      shortPin: 'Rm 228 • Solstice Window',
      beaconLabel: 'Room 228 (with Room 225): ~120° ESE Winter Solstice Sunrise Corner Windows',
      tinyEra: 'STAGE III–IV • APPROX. AD 1065–1110',
      tinyTitle: 'ROOM 228 — WINTER SOLSTICE CORNER WINDOW',
      tinyDesc: 'Rooms 228 & 225 in the southeastern sector feature exterior corner windows oriented at ~120° ESE toward the Winter Solstice sunrise (Reyman 1976).',
      keyPoints: [
        'Solar Alignment (Reyman 1976, Science 193:1037–1038): Both Rooms 225 and 228 have exterior corner windows oriented at azimuth ~120° ESE; at Winter Solstice sunrise, sunlight enters and illuminates the opposite interior wall/corner.',
        'Architecture: Constructed in Type III/IV core-and-veneer sandstone masonry; upper wall elevations shown in 3D are interpretive.',
        'HABS No. NM-30 Documentation: HABS No. NM-30 records measured plans of Rooms 174–177 and 225–226, including the Corner Doorway on Sheet 5.',
      ],
      artCaption: 'Reyman (1976 Science 193:1037–1038): Rooms 225 & 228 ~120° ESE Winter Solstice Sunrise Corner Windows',
      photoCap: 'NPS 1929 Public Domain: Diagonal Corner Aperture in Southeastern Rooms',
    },
  },

  pueblo_bonito_406: {
    ko: {
      chipLabel: '09 • 326호 묘역',
      shortPin: '326호실 • 서측 묘역',
      beaconLabel: '326호실: 서측 묘실 클러스터 (초기 블록 서기 860–935년 • 12인 유골)',
      tinyEra: '올드 보니토 초기 건축 블록 • 서기 860–935년경',
      tinyTitle: '326호실 — 서측 묘실군 (WESTERN BURIAL CLUSTER)',
      tinyDesc: '푸에블로 보니토의 가장 이른 서측 블록에 속하는 묘실로, 320, 326, 329, 330호실로 구성된 서측 묘실군의 핵심입니다. 인골 재평가 결과 12인(성인 여성 10, 남성 1, 영아 1)의 매장이 확인되었습니다.',
      keyPoints: [
        '건축사: 서기 860~935년경 올드 보니토 초기 서측 윙으로 축조된 후 후기 점유 기간 동안 개축 및 통로 폐쇄가 이루어졌습니다.',
        '묘역 기능: 인골 재평가 결과 326호실에는 총 12구(성인 11명[여성 10, 남성 1] 및 영아 1명)가 안치되었음이 규명되었습니다.',
        '묘역 클러스터: 326호실은 인접한 320, 329, 330호실과 함께 서측 공동 묘역 복합체를 이루었습니다.',
      ],
      artCaption: '저드(Judd 1954) 및 에이킨스(Akins 1986): 326호실 (초기 블록 서기 860–935년; 12인 매장)',
      photoCap: 'NPS 1930년대 공공누리: 푸에블로 보니토의 서측 룸블록 및 키바 전경',
    },
    en: {
      chipLabel: '09 • Rm 326 Burials',
      shortPin: 'Rm 326 • Western Burials',
      beaconLabel: 'Room 326: Western Burial Cluster Chamber (Early Block AD 860–935 • 12 Individuals)',
      tinyEra: 'OLD BONITO ARCHITECTURAL BLOCK • APPROX. AD 860–935 CONSTRUCTION',
      tinyTitle: 'ROOM 326 — WESTERN BURIAL CLUSTER CHAMBER',
      tinyDesc: 'Belongs to one of Pueblo Bonito’s earliest western architectural blocks (approx. AD 860–935). Reassessment identified 12 individuals (11 adults [10 females, 1 male] and 1 infant).',
      keyPoints: [
        'Architecture: Early western architectural block (approx. AD 860–935) modified during later occupation with sealed openings.',
        'Mortuary Use: Later reassessment identified 12 individuals: 11 adults (10 females, 1 male) and one infant.',
        'Western Cluster: Formed part of the larger western burial cluster including Rooms 320, 329, and 330.',
      ],
      artCaption: 'Judd (1954), Akins (1986) & Reassessment: Room 326 (12 Individuals [10♀, 1♂, 1 Infant])',
      photoCap: 'NPS 1930s Public Domain: Western Roomblocks & Kivas of Pueblo Bonito',
    },
  },

  landmark_threatening_rock: {
    ko: {
      chipLabel: '10 • 1941 암벽붕괴',
      shortPin: '1941 암벽붕괴',
      beaconLabel: '1941년 위협하는 바위(Threatening Rock) 붕괴 (~30,000톤 사암 거석)',
      tinyEra: '11세기 차코 토목 옹벽 • 1941년 1월 22일 붕괴',
      tinyTitle: '위협하는 바위 (TSÉ BÍYAH ANIIʼÁHÍ)',
      tinyDesc: '푸에블로 보니토 북동쪽 절벽 바로 뒤에 서 있던 약 30,000톤 무게의 거대한 사암 거석으로, 11세기 차코인들이 흙과 통나무 옹벽을 쌓아 지탱했으나 1941년 1월 22일 붕괴하여 북측 외벽과 65개 방을 파괴했습니다.',
      keyPoints: [
        '지질학적 배경: 상부 백악기 클리프 하우스 사암(Cliff House Sandstone) 층에서 분리된 거대한 독립 암괴(나바호어: Tsé Bíyah Aniiʼáhí, "아래를 받쳐놓은 바위")로 높이 약 30m에 달했습니다.',
        '고대 선사 토목 공학 (Judd 1959): 11세기 차코 건축가들은 바위 기저부의 메네피 혈암 침식을 막기 위해 소나무 원목과 사암 석조를 이용해 정교한 지지 옹벽 테라스를 축조했습니다.',
        '1941년 대붕괴 (USGS Prof. Paper 454-H): 1941년 1월 22일 오후 3시 10분, 겨울철 동결-융해 쐐기 작용으로 거석이 앞으로 전도되어 북측 외벽을 강타하고 약 65개 방을 완파했습니다. 현재의 3D 모델에는 잔해 너덜지대(Talus)가 정밀 반영되어 있습니다.',
      ],
      artCaption: '저드(Judd 1959) 및 슘 & 촐리(1964 USGS): 위협하는 바위 거석 및 1941년 1월 22일 붕괴 현장',
      photoCap: 'NPS 1929년 공공누리: 1941년 붕괴 전 푸에블로 보니토 바로 뒤편에 우뚝 솟아 있던 위협하는 바위',
    },
    en: {
      chipLabel: '10 • 1941 Rockfall',
      shortPin: '1941 Rockfall',
      beaconLabel: '1941 Threatening Rock Collapse (~30,000 Tons)',
      tinyEra: '11TH-CENTURY RETAINING TERRACE • COLLAPSED JAN 22, 1941',
      tinyTitle: 'THREATENING ROCK (TSÉ BÍYAH ANIIʼÁHÍ)',
      tinyDesc: 'Detached ~30,000-ton sandstone monolith braced by an 11th-century Chacoan terrace; collapsed Jan 22, 1941 across the northeastern outer wall.',
      keyPoints: [
        'Geological Setting: Detached Upper Cretaceous Cliff House Sandstone monolith that stood immediately behind the northeastern arc of Pueblo Bonito.',
        'Prehistoric Engineering (Judd 1959): In the 11th century, Chacoan builders constructed an earth-and-masonry retaining terrace reinforced with upright pine logs.',
        '1941 Collapse (USGS Prof. Paper 454-H): On January 22, 1941 at 3:10 PM, the monolith toppled, destroying part of the outer northern wall and crushing ~65 rooms.',
      ],
      artCaption: 'Judd (1959) & Schumm & Chorley (1964 USGS): Threatening Rock Monolith & Jan 22, 1941 Collapse',
      photoCap: 'NPS 1929 Public Domain: Threatening Rock Towering Behind Pueblo Bonito (Pre-1941)',
    },
  },

  pueblo_bonito_170: {
    ko: {
      chipLabel: '11 • 대형 키바 Q',
      shortPin: '대형 키바 Q',
      beaconLabel: '대형 키바 Q: 서측 광장 거대 키바 (원형 석조 소켓의 4개 목제 기둥)',
      tinyEra: '전성기 보니토기 • 11세기 중엽 추정 (키바 A보다 선행)',
      tinyTitle: '대형 키바 Q (GREAT KIVA Q) — 서측 광장 성소',
      tinyDesc: '서측 광장에 반지하로 축조된 거대 원형 키바로, 동측 키바 A의 사각 석조 기둥과 달리 원형 석조 소켓에 안치된 4개의 거대한 목제 원목 기둥이 지붕을 받치고 바닥 공명실과 둘레 벤치를 구비했습니다.',
      keyPoints: [
        '편년 및 구조: 대형 키바 Q는 동측의 대형 키바 A보다 앞서 11세기 중엽에 축조된 것으로 추정됩니다. 둘레 벤치, 중앙 화덕, 한 쌍의 바닥 직사각형 공명실 및 남쪽 진입 계단을 갖추고 있습니다.',
        '목제 지붕 기둥: 키바 A의 사각 석조 기둥과 대조적으로, 거대한 통나무 기둥 4개를 원형 석조 소켓 바닥에 직립시켜 지붕을 지탱한 독특한 공법이 특징입니다.',
        '복원 상태: 완전한 목제 지붕 가구 구조 및 상부 벽체 높이는 고고학적 비교 연구에 입각한 해석적 복원입니다.',
      ],
      artCaption: '저드(Judd 1964 NMNH) & NPS: 대형 키바 Q (11세기 중엽 • 원형 석조 소켓 4개 목제 기둥 및 바닥 공명실)',
      photoCap: '푸에블로 보니토 3D 복원 및 0.5m LiDAR 조사: 개방형 서측 광장과 대형 키바 Q',
    },
    en: {
      chipLabel: '11 • Great Kiva Q',
      shortPin: 'Great Kiva Q',
      beaconLabel: 'Great Kiva Q: West Court Great Kiva (4 Large Wooden Roof Posts in Circular Masonry Settings)',
      tinyEra: 'CLASSIC BONITO PHASE • PROBABLY MID-11TH CENTURY',
      tinyTitle: 'GREAT KIVA Q — WEST COURT GREAT KIVA',
      tinyDesc: 'Recessed circular Great Kiva in the West Court with an encircling masonry bench, central firebox, paired rectangular subfloor vaults, and 4 large wooden roof posts in circular masonry settings.',
      keyPoints: [
        'Chronology & Architecture: Predates Great Kiva A, probably mid-11th century. Equipped with an encircling bench, firebox, paired vaults, and southern entry stairway.',
        'Roof Support: Used four large wooden roof posts seated in circular masonry settings—distinct from the square masonry columns of Great Kiva A.',
        'Reconstruction: Full roof timbering and upper walls shown in the model are interpretive reconstructions.',
      ],
      artCaption: 'Judd (1964 NMNH) & NPS Survey: Great Kiva Q (Mid-11th Century • 4 Wooden Roof Posts in Circular Masonry Settings)',
      photoCap: 'Pueblo Bonito 3D Reconstruction & 0.5m LiDAR Survey: Open West Court & Great Kiva Q',
    },
  },

  pueblo_bonito_22: {
    ko: {
      chipLabel: '12 • 4층 북측 척추부',
      shortPin: '14/85호실 • 4층 척추부',
      beaconLabel: '14/85호실: 북측 외곽 원호 4층 높이 기념비적 척추부 (~14m)',
      tinyEra: '2단계 전성기 보니토 확장 • 서기 1040–1060년경',
      tinyTitle: '14/85호실 — 복원된 4층 높이 북측 외벽 척추부',
      tinyDesc: '푸에블로 보니토의 북쪽 배면을 둘러싸는 거대한 4층 높이(~14.0m)의 방형 척추부로, 정교한 2형 및 3형 심재-외벽 석조와 수천 그루의 폰데로사 소나무 원목 서까래(비가)로 지어졌습니다.',
      keyPoints: [
        '4층 기념비적 척추부 (Lekson 1984): 초기 1단계 올드 보니토 원호 바로 뒤편에 서기 1040~1060년경 덧붙여진 4층 높이의 웅장한 외벽입니다. 광장 쪽을 향해 3층, 2층, 1층으로 계단식 테라스를 이루며 낮아집니다.',
        '석조 공학: 두께 90cm에 달하는 2형 코어-앤-베니어(Core-and-Veneer) 석조로, 두꺼운 사암 판석 사이에 얇은 사암 조각(Spalls)을 정밀하게 끼워 넣어 고지대 사막의 풍화와 비바람을 견디도록 축조되었습니다.',
        '원목 서까래 조달 (Guiterman et al. 2016 PNAS): 수만 개의 소나무 비가(Vigas)는 75km 이상 떨어진 추스카(Chuska) 산맥과 주니(Zuni) 산맥에서 바퀴 없이 손과 어깨로 운반되었습니다.',
      ],
      artCaption: '렉슨(Lekson 1984) 및 의회도서관 HABS No. NM-30: 14/85호실 4층 높이 북측 외벽 복원',
      photoCap: '블렌더 렌더: 북측 4층 척추부의 정밀 석조 및 폰데로사 소나무 서까래(비가) 복원',
    },
    en: {
      chipLabel: '12 • 4-Story Spine',
      shortPin: 'Rm 14/85 • 4-Story Spine',
      beaconLabel: 'Room 14/85: Northern Outer Arc 4-Story Monumental Spine (~14.0m Elevation)',
      tinyEra: 'STAGE II CLASSIC BONITO EXPANSION • APPROX. AD 1040–1060',
      tinyTitle: 'ROOM 14/85 — RECONSTRUCTED FOUR-STORY NORTHERN SPINE',
      tinyDesc: 'Monumental 4-story spine (~14.0m) enclosing the northern rear of Pueblo Bonito, built with Type II core-and-veneer masonry and Ponderosa pine vigas.',
      keyPoints: [
        'Four-Story Spine (Lekson 1984): Monumental multi-story wall arc built ca. AD 1040–1060 immediately wrapping the Old Bonito core, stepping down terraced plazas.',
        'Masonry Engineering: Thick Type II core-and-veneer walls (~0.9m thick) with ashlar veneer and tabular spall chinking.',
        'Timber Logistics (Guiterman et al. 2016 PNAS): Tens of thousands of Ponderosa pine vigas were transported manually from the Chuska and Zuni Mountains over 75 km away.',
      ],
      artCaption: 'Lekson (1984) & HABS No. NM-30: Reconstructed 4-Story Northern Spine (Rooms 14 & 85)',
      photoCap: '3D Render: Reconstructed 4-Story Northern Spine Masonry & Pine Vigas',
    },
  },
};

// Current active language state (Default is 'ko')
let currentLang = 'ko';

export function getActiveLanguage() {
  return currentLang;
}

export function initLanguage() {
  try {
    const saved = localStorage.getItem(I18N_STORAGE_KEY);
    if (saved === 'en' || saved === 'ko') {
      currentLang = saved;
    } else {
      currentLang = 'ko'; // Default is always Korean per requirement
    }
  } catch {
    currentLang = 'ko';
  }
  document.documentElement.lang = currentLang;
  return currentLang;
}

export function setLanguage(lang) {
  if (lang !== 'ko' && lang !== 'en') return;
  currentLang = lang;
  try {
    localStorage.setItem(I18N_STORAGE_KEY, lang);
  } catch {
    // ignore
  }
  document.documentElement.lang = lang;
}

export function t(key, lang = currentLang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.ko;
  return dict[key] !== undefined ? dict[key] : (TRANSLATIONS.en[key] || key);
}

export function getSectionI18n(sectionId, lang = currentLang) {
  const sec = SECTIONS_I18N[sectionId];
  if (!sec) return null;
  return sec[lang] || sec.ko || sec.en;
}

export function getDiscoveryI18n(featId, lang = currentLang) {
  const disc = DISCOVERIES_I18N[featId];
  if (!disc) return null;
  return disc[lang] || disc.ko || disc.en;
}
