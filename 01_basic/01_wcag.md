# WCAG 2.1 - 웹 콘텐츠 접근성 지침

> WCAG = Web Content Accessibility Guidelines, W3C WAI (World Wide Web Consortium - Web Accessibility Initiative)에서 만든 웹 접근성 평가 기준 문서

웹 접근성은 "모든 사용자가 웹 콘텐츠에 접근하고, 인식하고, 이해하고, 조작할 수 있도록 하는 것"을 목표로 합니다.

WCAG 2.1 표준을 준수하면 전맹과 저시력, 난청과 청각장애, 운동장애, 언어장애, 광과민성 등의 어려움을 가진 사용자들에게 더 접근 가능한 콘텐츠를 제공할 수 있습니다.

WCAG 2.1은 기술적인 해답을 제공하는 것이 아니며, 권장 사항을 제공합니다.

---

## WCAG 2.1의 4대 원칙 (POUR)

| 원칙         | 의미                                                                 |
|--------------|----------------------------------------------------------------------|
| **P**erceivable (인식의 용이성) | 사용자에게 콘텐츠가 **보이고 들릴 수 있도록** 정보와 UI를 표현해야 합니다. |
| **O**perable (운용의 용이성)    | 모든 사용자(특히 키보드 사용자)가 **UI를 조작할 수 있어야** 합니다.         |
| **U**nderstandable (이해의 용이성) | 콘텐츠와 UI의 **의미와 흐름이 명확하고 예측 가능**해야 합니다.            |
| **R**obust (견고성)         | 다양한 보조 기술과 브라우저에서도 **일관되게 동작**해야 합니다.    

---

## 1. Perceivable (인식의 용이성)

> 정보와 사용자 인터페이스 요소는 사용자가 인식할 수 있는 방법으로 제시되어야 한다.
> 사용자에게 콘텐츠가 **보이고 들릴 수 있도록** 정보와 UI를 표현해야 한다.

### 지침 1.1 대체 텍스트

확대, 점자, 음성, 기호 또는 간단한 언어와 같이 사용자가 필요로 하는 다른 형식으로 변경할 수 있도록 콘텐츠에 대한 대체 정보를 제공해야하는 것을 의미합니다.

- Controls, Input: 콘텐츠가 콘트롤이거나 사용자의 입력을 수용하는 경우, 그 **목적**을 설명하는 **이름**을 가져야 합니다.
- Time-Based Media(영상이나 녹음 파일 등): 시간기반 미디어에는 최소한 동등한 설명의 대체 텍스트를 제공해야 한다.
- Test: 텍스트가 아닌 콘텐츠가 텍스트로 제시될 때 무효가 되는 시험이나 연습의 경우, 최소한 동등한 설명의 대체 텍스트를 제공해야 한다.
- Sensory: 특정 감각에 기반한 경험을 하도록 의도한 경우, 쇠초한 동등한 설명의 대체 텍스트를 제공해야 한다.
- CAPTCHA: 콘텐츠의 목적이 컴퓨터가 아닌 사람이 콘텐츠에 접근하고 있는지를 확인하는 것이라면, 콘텐츠의 목적을 식별하고 기술하는 대체 텍스트를 제공해야 하며, 다른 유형의 감각 인식 출력 모드를 사용하는 대체 형식을 제공해야 한다.

### 지침 1.2 시간기반 미디어

- 사전 녹음된 오디오 콘텐츠에는 자막을 제공해야 한다. 단, 미디어가 **텍스트에 대한 미디어 대체수단이고, 대체수단임이 분명하게 명시된 경우**는 제외한다.
- 모든 실시간 오디오 콘텐츠에는 자막을 제공해야 한다.
- 사전 녹화된 비디오 콘텐츠에는 오디오 설명을 제공해야 한다.
- 사전 녹음된 오디오 콘텐츠에는 수어 통역을 제공해야 한다.

### 지침 1.3 적응 가능

> 콘텐츠는 정보나 구조의 손실 없이 다른 방법들로 표시될 수 있도록 제작되어야 한다.

- 프레젠테이션을 통해 전달되는 정보, 구조, 관계는 프로그래밍 방식으로 결정되거나 텍스트로 이용 가능해야 한다.
- 콘텐츠가 표시되는 수서가 의미에 영향을 미치는 경우, 올바른 읽기 순서는 프로그래밍 방식으로 결정되어야 한다.
- 콘텐츠를 이해하고 작동하기 위해 제공되는 지시문은 모양, 색삭, 크기, 시각적 위치, 방향 또는 소리와 같은 구성요소의 감각적인 특정에만 의존해서는 안 된다.
- 특정 디스플레이 방향이 필수적이지 않는 한, 콘텐츠는 세로 또는 가로와 같이 한 방향으로만 보거나 작동되도록 제한해서는 안 된다.

```프레젠테이션: 사용자가 인식할 수 있는 형태로 콘텐츠를 렌더링하는 것```

### 지침 1.4 식별 가능

> 배경으로부터 전경을 분리하는 것을 포함하여, 사용자가 더 쉽게 보고 들을 수 있도록 콘텐츠를 제작해야 한다.

- 색상 사용: 색상은 정보 전달, 동작 표시, 반응 유발 또는 시각적 요소 구별을 위한 유일한 시각적 수단으로만 사용되어서는 안 된다.
- 오디오 제어: 웹 페이지에 있는 어떤 오디오가 3초 이상 자동으로 재생되는 경우, 해당 오디오를 일시정지 또는 중지할 수 있는 메커니즘이나, 시스템 볼륨과는 별도로 오디오 음량을 조절할 수 있는 메커니즘을 제공해야 한다.
- 명도대비: 명도대비율은 최소한 4.5:1 이상이 되어야 한다. 단, 아래의 경우에는 제외한다.
  - 커다란 텍스트: 커다란 텍스트와 텍스트 이미지의 명도대비가 최소한 3:1이어야 한다.
  - 순수한 장식, 부수적인 ui의 일부, 로고 등에는 명도대비 요구사항이 적용되지 않는다.
- 텍스트 크기: 텍스트는 콘텐츠나 기능의 손상 없이, 그리고 보조공학 없이 최대 200%까지 크기 조정이 가능해야 한다.

---

## 2. Operable(운영의 용이성)
> 모든 사용자(특히 키보드 사용자)가 **UI를 조작할 수 있어야** 합니다.

### 지침 2.1 키보드 접근성

- 키보드 인터페이스를 통해 모든 콘텐츠의 기능을 이용할 수 있어야 한다.

### 지침 2.2 충분한 시간

> 사용자가 콘텐츠를 읽고 사용할 수 있도록 충분한 시간을 제공해야 한다.

- 시간 제한 조정 가능: 콘텐츠에 의해 설정된 시간 제한의 경우, 다음 중 하나 이상을 준수해야 한다.
  - 해제: 시간 제한이 시작되기 전, 시간 제한을 해제할 수 있어야 한다.
  - 조정: 시간 제한이 시작되기 전, 시간 제한을 조정할 수 있어야 한다(기본 설정 길이의 10배 이상).
  - 연장: 시간 만료 최소 20초 전에 경고를 받고, 간단한 동작을 사용하여 제한 시간을 10회 이상 연장할 수 있어야 한다.
  - 실시간 예외: 시간 제한이 필수적이며 이에 대한 다른 대안이 없는 실시간 이벤트의 경우 예외이다.
- 작업방해 금지: 응급상황과 관련된 것을 제외하고, 사용자는 작업방해를 연기하거나 차단할 수 있어야 한다.
- 재인증: 인증세션이 종료되었을 경우, 사용자는 재인증 후 데이터 손실없이 지속적으로 이용할 수 있어야 한다.
- 시간종료: 사용자가 아무런 활동을 하지 않은 상황에서도 데이터가 20시간 이상 보존되지 않는 한, 사용자에게 데이터의 손실을 초래할 수 있는 상태에 대해 알려주어야 한다.

### 지침 2.3 발작 및 신체적 반응

> 콘텐츠는 발작 또는 신체적 반응을 일으키지 않도록 설계되어야 한다.

- 번쩍임을 3회 또는 임계값 이하로 설정
- 대화형 애니메이션: 인터렉션에 의해 촉발되는 모션 애니메이션은 기능 조작이나 정보 전달을 위해 반드시 필수적인 경우가 아니라면 비활성화할 수 있어야 한다.

### 지침 2.4 네비게이션 기능

- 여러 웹 페이지에 걸쳐 반복되는 콘텐츠 블록이 있는 경우, 이를 건너뛸 수 있는 메커니즘을 제공해야 한다.
- 웹 페이지는 주제나 목적을 설명하는 제목을 포함해야 한다.
- 포커스 순서: 웹 페이지를 순차적으로 탐색할 수 있고 탐색 순서가 의미 또는 운용에 영향을 주는 경우, 포커스할 수 있는 요소들은 의미와 운용가능성이 유지되는 순서로 포커스를 받아야 한다.
- 다양한 방법: 웹 페이지 내에 위치한 특정 페이지를 찾을 수 있는 방법을 한 가지 이상 제공해야 한다. 단, 과정상의 단계이거나 결과물일 경우는 제외한다.
- 식별 가능한 포커스: 키보드로 조작할 수 있는 사용자 인터페이스는 키보드 포커스가 표시되는 작동 모드를 제공해야 한다.

---

## 3. Understandable (이해의 용이성)

> 사용자 인터페이스의 정보와 운용은 이해 가능해야 한다.

### 지침 3.1 가독성

> 텍스트 콘텐츠는 읽을 수 있고 이해할 수 있어야 한다.

- 기본 언어 설정 제공
- 생소한 단어는 구체적인 정의를 인식할 수 있는 메커니즘을 제공
- 약어는 본딧말이나 의미를 인식할 수 있는 메커니즘을 제공

### 지침 3.2 예측 가능성

> 웹 페이지는 예측 가능한 방식으로 제시되고 작동해야 한다.

- 네비게이션 메커니즘의 일관성
- 동일한 기능을 지닌 구성요소들은 일관되게 식별되어야 함

### 지침 3.3 입력 지원

> 사용자가 실수를 회피하거나 수정할 수 있도록 지원해야 한다.

- 입력 오류가 감지되면 사용자에게 오류 항목을 보여주고, 오류에 대한 설명을 텍스트로 제공하여야 함.
- 사용자 입력이 필요한 콘텐츠에는 레이블 또는 지시문을 제공해야 함.
- 맥락에 적합한 도움말이 제공되어야 함.
- 사용자가 정보를 제출해야 하는 웹 페이지의 경우, 적어도 다음 중 하나를 준수해야 한다.
  - 제출 내역을 되돌릴 수 있어야 한다.
  - 사용자가 입력한 데이터는 입력 오류를 점검하고 사용자에게 오류를 수정할 수 있는 기회를 제공해야 한다.
  - 제출을 완료하기 전에 정보를 검토, 확인, 수정할 수 있는 메커니즘을 제공해야 한다.

---

## 4. Robust (견고성)

> 콘텐츠는 보조공학을 포함한 다양한 사용자 에이전트가 해석할 수 있을 정도로 견고해야 한다.

### 4.1 호환성


---

## 각 원칙별 주요 가이드라인 요약

### 1. Perceivable (인지 가능)

- 텍스트가 아닌 콘텐츠는 **대체 텍스트(alt)** 제공
- 자막 또는 텍스트 대본 제공
- **색상에만 의존하지 않기**
- 충분한 **색상 대비 비율 (4.5:1 이상)** 확보
- 콘텐츠는 사용자 설정에 따라 조정 가능해야 함 (확대, 스크린 리더 등)

### 2. Operable (조작 가능)

- **키보드만으로도 모든 기능 사용 가능**
- 충분한 시간 제공 (자동 종료 방지 또는 연장 가능)
- 광과민성 발작 방지 (깜빡임 주의)
- 명확안 포커스 표시와 흐름 유지
- Escape로 닫기, Tab으로 이동 등 예측 가능한 키 조작

### 3. Understandable (이해 가능)

- 명확한 레이블, 제목 제공
- 사용자의 입력 오류를 검출하고 수정 유도
- **일관된 UI 동작**
- 버튼 링크, 입력창의 의미가 명확히 전달되어야 함

### 4. Robust (견고성)

- HTML 구조가 유효하고 오류 없어야 함
- 보조 기술(Screen Reader 등)이 읽을 수 있도록 시맨틱 태그 사용
- **ARIA 속성**은 적절하게, 남용하지 않기

---