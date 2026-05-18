# Weather API

도시 이름을 검색하면 현재 날씨 정보를 보여주는 React 기반 웹 애플리케이션입니다. OpenWeather API를 사용해 도시의 좌표를 조회하고, 해당 좌표의 실시간 날씨 데이터를 화면에 표시합니다.

## 주요 기능

- 도시명 기반 날씨 검색
- 현재 기온, 습도, 날씨 설명 표시
- OpenWeather 날씨 아이콘 표시
- 날씨 상태에 따른 배경 이미지 변경
- Enter 키 또는 검색 버튼으로 조회
- 로딩 및 오류 상태 처리

## 기술 스택

| 구분 | 기술 |
| --- | --- |
| Frontend | React |
| Build Tool | Vite |
| HTTP Client | Axios |
| Styling | CSS |
| API | OpenWeather API |
| Lint | ESLint |

## 프로젝트 구조

```text
src
├─ api
│  ├─ geo.js        # 도시명을 위도/경도로 변환
│  └─ weather.js    # 좌표 기반 현재 날씨 조회
├─ assets           # 날씨 배경 이미지
├─ components
│  └─ WeatherCard.jsx
├─ data
│  └─ bgColor.js    # 날씨 코드별 배경 매핑
├─ App.jsx
└─ main.jsx
```

## 실행 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

프로젝트 루트에 `.env` 파일을 만들고 OpenWeather API 키를 입력합니다.

```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 Vite가 안내하는 로컬 주소로 접속하면 앱을 확인할 수 있습니다.

## 사용 API

이 프로젝트는 OpenWeather의 두 가지 API를 사용합니다.

- **Geocoding API**: 입력한 도시명을 좌표로 변환
- **Current Weather API**: 좌표를 기준으로 현재 날씨 조회

## 동작 흐름

1. 사용자가 도시명을 입력합니다.
2. `fetchCoordinates`가 도시명을 위도와 경도로 변환합니다.
3. `fetchWeatherByCoords`가 해당 좌표의 현재 날씨를 요청합니다.
4. 응답받은 날씨 데이터를 `WeatherCard` 컴포넌트에 표시합니다.
5. 날씨 코드에 따라 배경 이미지가 변경됩니다.

## 빌드

배포용 파일은 다음 명령어로 생성할 수 있습니다.

```bash
npm run build
```

생성된 결과물은 `dist` 디렉터리에 저장됩니다.
