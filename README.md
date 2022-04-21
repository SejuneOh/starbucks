# StarBucks WebApp Project

## Goals

1. 스타벅스 예제를 만들면서, HTML의 구조 및 배치관련 익숙해지기
1. CSS를 통한 CSS 구조 및 시스템, 배치, 관련 이해하기
1. git flow를 통한 git flow 인숙해지기!

---

### 220421

1. CSS 초기화작업, favicon.io, favicon.png의 이해  
    _브라우저는 root경로의 favicon.io가 있으면 Tab의 icon으로 사용하고, 지정도 할 수 있다._

   ```html
   <!-- png 파일 사용하기 -->
   <link rel="icon" href="/favicon.png" />
   ```

1. Open Graph Protocol, twitter cards  
   _Open Graph Protocol_  
   _웹 페이지가 다른 소셜 미디어를 통해 나갈때 공유 목적의 meta 정보를 적용해 정보를 간편하게 보여주는 기능_

   _Twitter cards_  
   _트위터에서 제공하는 OGP와 비슷한 기능으로 쇼셜미디어에 따라 가져가는 meta데이터 우선 순위가 달라 같이 적용하는 것이 좋다 ._

```html
<!-- open graph protocol -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta
  property="og:description"
  content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다."
/>
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />
```

- og:type: 페이지의 유형(E.g, website, video.movie)
- og:site_name: 속한 사이트의 이름
- og:title: 페이지의 이름(제목)
- og:description: 페이지의 간단한 설명
- og:image: 페이지의 대표 이미지 주소(URL)
- og:url: 페이지 주소(URL)

```html
<!-- twitter -->
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Starbucks" />
<meta property="twitter:title" content="Starbucks Coffee Korea" />
<meta
  property="twitter:description"
  content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다."
/>
<meta property="twitter:image" content="./images/starbucks_seo.jpg" />
<meta property="twitter:url" content="https://starbucks.co.kr" />
```

- twitter:card: 페이지(카드)의 유형(E.g. summary, player)
- twitter:site: 속한 사이트의 이름
- twitter:title: 페이지의 이름(제목)
- twitter:description: 페이지의 간단한 설명
- twitter:image: 페이지의 대표 이미지 주소(URL)
- twitter:url: 페이지 주소(URL)

3. Goggle Font 적용하기  
    _브라우저 마다 기본으로 사용하는 font가 다르기 때문에 미리 맞춰 주는 것이 좋다_

   1. [Google Fonts](https://fonts.google.com/) 사이트에서 무료 폰트 검색
   1. link 정보 가져와서 적용

   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link
     href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap"
     rel="stylesheet"
   />
   ```

   3. CSS 파일에 글꼴 적용  
      _사이트 특성에 맞는 글꼴, 색상, 글자높이, 공통으로 사용하는 내용은 미리 정의하는 것이 좋다_

   ```css
   body {
     color: #333;
     font-size: 16px;
     font-weight: 400;
     line-height: 1.4;
     /* 상속요소로 body 안에서 글꼴  먼저 적용*/
     /* font-family 속성은 연속으로 사용하고 마지막에는 꼭 사용 할 수 있는 속성을 정해야한다. */
     font-family: "Nanum Gothic", sans-serif;
   }
   ```

4. Google Icon 사용하기

- [Google CDN Connet](https://material.io/develop/web/getting-started)
- [Google Icon Search](https://fonts.google.com/icons?selected=Material+Icons&icon.query=login)

```html
<!-- Google Meterial Icon -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```

5. Sementic Header Tag로 로고 올리기 및 루트 페이지 설정

- 로고파일 올리기

```html
<!-- Home로 가는 절대경로 지정 Goto index.html -->
<a href="/" class="logo">
  <img src="/images/starbucks_logo.png" alt="STARBUCKS" />
</a>
```

- img tag baseline 공간 없애기 iline의 특성을 block으로 삭제

```css
/* img를 layout으로 추구하겠다 , inline의 baseline 및 공간을 사용하지 않겠다.*/
img {
  display: block;
}
```

- logo를 배치시 Position: absolute 를 사용하여 로고 중앙 맞추기
- 여기서 포인트는 absolute의 지정시 부모 요소의 position을 relative로 설정후
- margin의 특성을 사용한다.
  - 기준점 수직(top, bottom), 수평(left, top)과 기준이되는 넓이 높이가 있으면 margin auto시 자동으로 계산해준다.

```css
/* 가운데 정렬을 하기 위해서 만든 개념 */
header .inner {
  width: 1100px;
  height: 120px;
  margin: 0 auto;
  background-color: orange;
  position: relative;
}

header .logo {
  height: 75px;
  position: absolute;
  top: 0;
  bottom: 0;
  /* innner 기준 왼쪽에 붙어있게다 배치를 명시해준다. */
  left: 0;
  margin: auto;
}
```

---
