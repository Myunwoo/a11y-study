# 🧩 Web Accessibility (A11y) Study

한 번에 끝낼 수 없는 웹 접근성, 공부도 꾸준히 해보자!

A11y 공부 기록을 남기는 저장소입니다.


## 구성

- WCAG 2.1의 원칙
- 스크린 리더, 키보드 탐색 등 보조기술 고려한 마크업 작성
- React 컴포넌트에서의 A11y
- 접근성 자동/수동 테스트 도구 익히기
- A11y 준수하는 Modal 컴포넌트 완성해보기


## 🔗 참고 자료

- [MDN - 웹 접근성](https://developer.mozilla.org/ko/docs/Web/Accessibility)
- [웹 접근성 연구소 (한국)](https://www.wah.or.kr/)
- [WCAG Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [React Aria](https://react-spectrum.adobe.com/react-aria/)

---

## 📂 디렉토리 구조

```bash
a11y-study/
├── README.md
├── 01_basics/              # A11y 개념 이론 정리
│   ├── 01_wcag.md
│   ├── 02_semantic-html.md
│   └── 03_screen-reader.md
├── 02_html-practice/       # 시맨틱 HTML 실습
│   ├── 02_semantic-form.html
│   └── 02_landmark-example.html
├── 03_react-a11y/          # React 컴포넌트 실습
│   ├── 03_ButtonA11y.tsx
│   ├── 03_ToggleSwitchA11y.tsx
│   └── 03_ModalA11y.tsx
├── 04_tools-testing/       # 접근성 테스트 도구 정리 및 실습
│   ├── 04_lighthouse-report.md
│   ├── 04_axe-core-example.test.tsx
│   └── 04_jest-axe-setup.ts
├── 05_final-modal/         # 최종 Modal 컴포넌트 구현
│   ├── Modal.tsx
│   ├── Modal.test.tsx
│   └── README.md
└── logs/                   # 학습 일지 및 회고
    ├── 2025-07-05.md
    └── ...
```