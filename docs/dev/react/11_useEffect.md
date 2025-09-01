# useEffect

useEffect( 回调函数, 依赖项 )

## 作为组件挂载后执行的操作

类似于Vue的`mounted`，在组件挂载的时候执行的操作

此时依赖项为一个空数组: `useEffect(()=>{ 函数体 }, [])`

```js
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    // 最常见的用法就是网络请求
    // 第一个参数是一个回调函数，用于执行挂载这个组件时候的操作
    axios.get('https://api.example.com/data')
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
    // 此时useEffect第二个参数为空数组
  }, []);

  return (
    <div>
      {/* 组件内容 */}
    </div>
  );
}

export default App;
```

## 作为更新的钩子函数

类似于Vue的`updated`，在组件发生更新的时候执行

此时依赖项为空（不需要依赖项）: `useEffect(()=>{ 函数体 })`

**注意，组件挂载的时候也会执行**

```js
import { useEffect, useState } from "react";

function App() {

  useEffect(()=>{
    console.log("onUpdate!");
  })

  const [cnt, setCnt]=useState(0)

  return (
    <div>
      <button onClick={()=>setCnt(cnt+1)}>测试按钮: {cnt}</button>
    </div>
  );
}

export default App;
```

## 作为依赖项监听的钩子函数

类似于Vue的`watch`，在特定的变量发生变化的时候执行

此时依赖项为需要监听的变量: `useEffect(()=>{ 函数体 }, [变量1, 变量2, ...])`

**注意，组件挂载的时候也会执行**

```js
import { useEffect, useState } from "react";

function App() {

  const [cnt, setCnt]=useState(0)

  useEffect(()=>{
    console.log("onUpdate!");
  }, [cnt])
  

  return (
    <div>
      <button onClick={()=>setCnt(cnt+1)}>测试按钮: {cnt}</button>
    </div>
  );
}

export default App;
```

如果不希望在挂载的时候执行回调函数，可以添加一个变量判断是否挂载完成：

```js
import { useEffect, useState } from "react";

function App() {

  const [cnt, setCnt]=useState(0);
  const [init, setInit]=useState(false);

  useEffect(()=>{
    if(!init){
      setInit(true);
    }else{
      console.log("onUpdate!");
    }
  }, [cnt])
  

  return (
    <div>
      <button onClick={()=>setCnt(cnt+1)}>测试按钮: {cnt}</button>
    </div>
  );
}

export default App;
```

## 清除副作用

```js
import { useEffect } from "react";

function App() {


  useEffect(()=>{
    return ()=>{
      // 在清除这个组件的时候自动执行这个操作
      // 多用于清理计时器等功能
    }
  })
  

  return (
    <div>
      
    </div>
  );
}

export default App;
```