---
type: docs
title: 自定义Hook
weight: 12
---


类似于Vue3的组合式函数，可以用于存储可以重复使用的方法

```js
import { useState } from "react";

// 注意命名，用use开头小驼峰命名，不然会报错
function useToggle(){
  const [show, setShow]=useState(true);
  const toggle=()=>{
    setShow(!show);
  };
  return {show, toggle}
}

function App() {

  const {show, toggle}=useToggle();

  return (
    <div>
      <button onClick={toggle}>测试按钮</button>
      {show && <div>Test content</div>}
    </div>
  );
}

export default App;
```