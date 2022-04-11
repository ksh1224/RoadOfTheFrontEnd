# RoadOfTheFrontEnd

프론트 엔드(React Native) 개발의 초석을 다지는 프로젝트

## Getting Started

### Module Install

```bash
$ npm install
# --- or ---
$ yarn
```

### Android

```bash
$ npm run android
# --- or ---
$ yarn android
```

### iOS

mac 환경에서만 가능, xcode 필요

```bash
$ cd ios && pod install && cd ..
```

```bash
$ npm run ios
# --- or ---
$ yarn ios
```

## Project Configuration

```
  ------------------------------------------
index.ts
  ├─ @types : 타입 정의 폴더
  ├─ assets : 정적 자원 폴더
  │   ├─ fonts : 폰트 폴더
  │   ├─ json : json 폴더
  │   ├─ svgs : svg 폴더
  │   ├─ constant.ts : 상수 파일
  ├─ components : 컴포넌트 폴더
  │   ├─ element : 요소 컴포넌트 폴더
  │   ├─ layout : 레이아웃 컴포넌트 폴더
  │   ├─ navigation : 네비게이션 컴포넌트 폴더
  ├─ screens : 스크린(페이지) 폴더
  ├─ utils : 유틸 폴더
  │   ├─ fetchUtil.ts : 데이터 패치 유틸 파일
  │   ├─ permissionUtil.ts : 권한 관련 유틸 파일
  ------------------------------------------
```

## Mission Guide

미션 가이드 이외에 추가하고 싶은 기능이나 보완하고 싶은 부분이 있으면 자유롭게 추가하시면 됩니다.

### Mission 1. 투두 리스트

1. **TodoScreen**에 추가 버튼 만들고 추가 버튼 클릭 시 **TodoWriteModalScreen**로 이동
2. **TodoWriteModalScreen**에서 정보 입력 폼 만들고 투두 정보(src/@types/todo.d.ts 참고) 입력 후 생성 버튼 클릭 시 스크린 닫히고 **TodoScreen**에 추가
3. **TodoScreen**에서 체크박스 클릭 하면 완료 처리 시키기(체크 박스 체크, 텍스트에 취소선 추가)
4. **TodoScreen**에서 투두 리스트 아이템 클릭 시 **TodoDetailScreen**으로 이동
5. **TodoDetailScreen**에서 투두 정보 모두 표시
6. **TodoDetailScreen**에서 수정 삭제 버튼 추가 하고 수정 삭제 기능 추가
7. 삭제 시 리스트에서 제외 처리
8. **[선택 사항]** todo state는 recoil 사용해보기
9. **[선택 사항]** 데이터는 async storage로 유지 시켜보기

### Mission 2. 날씨 정보

1. 날씨 데이터는 아래 날씨 api 문서(**forecast.json method** 사용 추천)
2. **WeatherScreen**에 현재 날씨 포함 3일 후 날씨까지(데이터 없으면 현재만 표시) 보여주고 오늘 시간 별 날씨 리스트 보여줌(디자인은 자유)
3. **WeatherScreen**에서 아무 것도 선택 안했을 때 처음에 현재 위치 가지고와서 날씨 정보 보여줌
4. **WeatherScreen**에서 헤더에 지역 정보 클릭 시 **LocationSelectModalScreen**로 이동
5. **LocationSelectModalScreen**에 지역 검색 기능 필요
6. **LocationSelectModalScreen**에서 검색한 지역 선택 시 닫히고 **WeatherScreen**에 선택한 지역 날씨 정보 표시

## Mission Reference

### 투두 api 관련

- react native 스토리지 라이브러리: https://github.com/react-native-async-storage/async-storage

### 날씨 api 관련 문서

- api 문서: https://www.weatherapi.com/docs
- 날씨 상태 별 언어 리스트 데이터: https://www.weatherapi.com/docs/conditions.json
- 위치 react native 라이브러리: https://github.com/react-native-geolocation/react-native-geolocation/blob/master/README.md
- 권한 react native 라이브러리: https://github.com/react-native-geolocation/react-native-geolocation/blob/master/README.md
