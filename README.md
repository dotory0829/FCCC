# FCCC(FreeCodeCampChallenges)

> 아래의 링크에 있는 자바스크립트 40제를 구현하고 있습니다.  
> 구현된 기능들은 폴더 별로 다르게 저장되어 있고, 미리보기 및 주요 개념은 아래에 따로 작성해두었습니다.  
> (주요 개념은 아래 링크에서 언급된 것으로, 해당 개념을 필수로 사용하여 구현했습니다.)  
> 링크 : [초보자를 위한 40가지의 자바스크립트 프로젝트](https://www.freecodecamp.org/korean/news/javascript-projects-for-beginners)

## [01. Color Flipper]()

<div align="center">

![ColorFlipper](https://github.com/dotory0829/FCCC/assets/118456013/b819ab0a-807f-4945-820d-62d04dea926a)

</div>

### 주요 개념

- document.createElement()
- document.getElementById()
- addEventListener()
- append(): 노드 객체 뿐만 아니라 문자열도 추가 가능 + 2개 이상도 인자로 추가 가능
- appendChild(): 노드 객체만 추가 가능 + 1개만 가능
- document.body.style...anyStyle
- innerHTML: innerHTML를 통해 js코드 내에서 마크업 가능
  - 단, 보안 이슈로 인해 사용하는것을 지양하는것이 좋으며, <br />
    직접 돔에 추가하고 싶은거라면 Mdn에서 insertAdjacentHTML()를 권장함
- innerText: text값을 가져오거나 설정 (유저에게 보여지는 text만을 다룸)
- textContent: 사용자에게 보여지는 text뿐만 아니라 속성등의 text도 포함함

<div align='center'>

<img width="553" alt="innerText, HTML, textContent의 차이" src="https://github.com/dotory0829/FCCC/assets/118456013/fe0cfabd-3c99-4b8b-aa94-3b02dea362b8">
</div>

```javascript
const divEl = document.createElement("div");
divEl.innerText = `<div>innerText는 텍스트 값을 설정하며, 취급</div>`;
rootEl.append(divEl); // 돔에 마크업이 아닌 텍스트로써 삽입됨
```

```javascript
const h2El = document.createElement("h2");
// 가능 1
h2El.append("background", " ", "color: ");
// 가능 2
const textNode = document.createTextNode("background color: ");
h2El.appendChild(textNode);
// 가능 3
h2El.innerText = "background color: ";
// 가능 4
h2El.innerHTML = "background color: ";
// 가능 5
h2El.textContent = "background color: ";

//  불가능
// h2El.appendChild('background color: ') //  'appendChild' on 'Node': parameter 1 is not of type 'Node'.
```

---
