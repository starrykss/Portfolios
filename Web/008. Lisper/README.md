# Lisper

## Description

- API를 이용하여 비밀(Secret)의 내용과 작성자 정보를 불러와 새로운 스타일로 표시해주는 웹 페이지
  - **API 호출 사이트** : https://secrets-api.appbrewery.com/random
- 새로고침 할 때마다 비밀의 내용과 작성자 정보가 랜덤으로 표시된다.
- 이미지에 마우스 커서를 올릴 경우 비밀의 내용이 표시된다.

## Development Information

- **Development Period** : 2023.11.15
- **Language** : HTML5, CSS3, JavaScript
- **Runtime Environment** : Node.js
  - **Packages**
    - [`express`](https://www.npmjs.com/package/express)
    - [`ejs`](https://www.npmjs.com/package/ejs)
    - [`axios`](https://www.npmjs.com/package/axios)

## How to Start

- `src` 폴더에 진입한 후, 터미널에서 `npm install` 명령을 실행한다. (필요한 패키지 설치)
- `node index` 명령을 실행하여 서버를 시작한다.
- `localhost:3000`에 접속한다.
- 새로고침(`[F5]`) 키를 누르며 API 호출로 불러와진 비밀의 내용과 작성자를 확인해본다.

## Display

|              Screenshot 1              |              Screenshot 2              |
| :------------------------------------: | :------------------------------------: |
| ![Web Page Screenshot 1](picture1.png) | ![Web Page Screenshot 2](picture2.png) |
