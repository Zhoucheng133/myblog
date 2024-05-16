---
type: docs
title: useState
weight: 8
---


`useState`是一个状态变量，和Vue3中的`ref`类似，React默认创建的变量都是非状态的变量（也就是变量更新之后在页面上不会更新）

## 定义一个状态变量

```js
// 注意引入useState
import { useState } from "react";

function App() {
  // 注意创建的是一个数组，前者是一个变量，后者是一个修改变量的函数
  const [cnt, setCnt]=useState(0);

  const add=()=>{
    // 使用setCnt不仅会修改cnt的值，也会更新视图
    setCnt(cnt+1);
  }

  return (
    <div>
      <button onClick={add}>Count={cnt}</button>
    </div>
  );
}

export default App;
```

## 定义一个对象/数组的状态变量

```js
import { useState } from "react";

function App() {
  const [form, setForm]=useState({
    "name": "Andy"
  });

  const change=()=>{
    setForm({...form, "name": "Ryan"});
    // 或者也可以这么写
    setForm(Object.assign({}, form, {"name": "Ryan"}));
    // 又或者也可以这么写
    const newVal=Object.create(form);
    newVal.name="Ryan";
    setForm(newVal);

    // 下面的写法是错误的，务必创建一个全新的对象
    setForm(Object.assign(form, {"name": "Ryan"}));
  }

  return (
    <div>
      <button onClick={change}>{form.name}</button>
    </div>
  );
}

export default App;
```

## 表单双向绑定

```js
import { useState } from "react";

function App() {

  const [value, setValue]=useState("");
  return (
    <div>
      <input value={ value } onChange={ (e)=>setValue(e.target.value) } type="text" />
    </div>
  );
}

export default App;
```