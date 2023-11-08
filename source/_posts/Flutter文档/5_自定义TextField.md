---
title: 【Flutter】自定义TextField
date: 2023-11-08 16:37:09
tags:
- Flutter
categories: 
- 开发
---

# 自定义TextField

## 使用`Container`包裹TextField

```dart
return Container(
  decoration: BoxDecoration(
    
  ),
  child: Padding(
    padding: const EdgeInsets.all(10.0),
    child: TextField(
      // 添加输入框的Controller
      controller: newName,
      decoration: InputDecoration(
        isCollapsed: true,
        contentPadding: EdgeInsets.symmetric(vertical: 0),
        // 根据情况设置高度，0的时候为尽可能最小化高度
        border: OutlineInputBorder(borderSide: BorderSide.none),
      ),
      autocorrect: false,
      enableSuggestions: false,
    ),
  ),
);
```

## 设置TextField中文本大小

```dart
return Container(
  decoration: BoxDecoration(
    
  ),
  child: TextField(
    controller: inputController,
    style: TextStyle(
      // 在这里输入需要的文本大小
      fontSize: 14,
    )
  )
)
```

## 添加TextField中按钮

```dart
TextField(
  controller: key,
  decoration: InputDecoration(
    suffixIcon: GestureDetector(
      onTap: (){
        // 点击操作
      },
      child: Container(
        // 按钮内容
        color: Colors.grey[100],
        child: Icon(
          Icons.clear,
          color: Colors.grey[400],
        ),
      ),
    )
  ),
),
```

## 禁用自动纠错

```dart
TextField(
  controller: key,
  // 是否自动纠错
  autocorrect: false,
  // 是否显示提示
  enableSuggestions: false,
),
```

## 输入完成操作

```dart
TextField(
  controller: key,
  onEditingComplete: (){
    // 输入完成操作
  },
),
```

