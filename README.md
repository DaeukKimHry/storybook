#  Storybook + react + typescript

> typescript template 기반의 cra 를 실행한다.
- yarn create react-app storybook --template typescript

> style 파일 불러오기를 위해 node-sass-chokidar를 설치해준다.
- yarn add node-sass-chokidar

> react scripts 를 대신 react-app-rewired를 사용하기 위해 패키지를 설치하고 PPconfig-overrides.js를 생성해준다.>
- yarn add react-app-rewired && customize-cra --dev

> config-overrides.js
> https://stackoverflow.com/questions/61240655/how-to-allownamespaces-in-cra