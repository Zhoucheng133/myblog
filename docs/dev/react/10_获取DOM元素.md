# 获取DOM元素

```js
import { useRef } from "react";

function App() {

  function changeColor(){
    // 注意获取DOM元素添加.current
    textRef.current.style.color="red";
  }

  const textRef=useRef(null);

  return (
    <div>
      <div ref={textRef}>测试文本</div>

      <button onClick={ changeColor }>测试按钮</button>
    </div>
  );
}

export default App;
```