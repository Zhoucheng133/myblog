# 自定义TextField

## 边框设置

### 添加边框

```dart
TextField(
  decoration: InputDecoration(
    border: OutlineInputBorder(),
    labelText: '请输入内容',
  ),
)
```

### 设置焦点时边框的颜色粗细
```dart
return TextField(
  decoration: InputDecoration(
    enabledBorder: OutlineInputBorder(
      borderSide: BorderSide(color: Colors.grey, width: 1.0), // 未选中时的边框
    ),
    focusedBorder: OutlineInputBorder(
      borderSide: BorderSide(color: Colors.blue, width: 2.0), // 选中时的边框
    ),
    labelText: '请输入内容',
  ),
)
```

## 使用`Container`包裹`TextField`

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
        border: OutlineInputBorder(borderSide: BorderSide.none),
      ),
      autocorrect: false,
      enableSuggestions: false,
    ),
  ),
);
```

## 设置`TextField`中文本大小

```dart{8}
return Container(
  decoration: BoxDecoration(
    
  ),
  child: TextField(
    controller: inputController,
    style: TextStyle(
      fontSize: 14,
    )
  )
)
```

## 添加`TextField`中按钮

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

```dart{3-4}
TextField(
  controller: key,
  autocorrect: false,
  enableSuggestions: false,
),
```

## 输入完成操作

一般在移动端上按下回车键的操作

```dart
TextField(
  controller: key,
  onEditingComplete: (){
    // 输入完成操作
  },
),
```

## 密码框

```dart{3}
TextField(
  controller: key,
  obscureText: true;
),
```

## 输入内容设置

### 仅数字输入

可以使用[FluentUI](https://pub.dev/packages/fluent_ui)依赖的NumberBox实现

如果使用MaterialUI的TexField：

```dart{3-5}
TextField(
  controller: key,
  inputFormatters: [
    FilteringTextInputFormatter.digitsOnly,
  ],
)
```

或者也可以通过设置软键盘模式：

```dart
TextField(
  // 如果需要小数点：
  // keyboardType: TextInputType.numberWithOptions(decimal: true),
  // 如果不需要：
  keyboardType: TextInputType.number,
  controller: key,
  inputFormatters: [
    FilteringTextInputFormatter.digitsOnly,
  ],
)
```

### 自定义筛选

```dart
TextField(
  controller: key,
  inputFormatters: [
    TextInputFormatter.withFunction((oldValue, newValue){
      // 需要有返回值，oldValue和newValue都是TextEditingController
      // 下面的示例，输入长度不得超过10个字符
      if(newVal.length>10){
        return oldValue;
      }
      return newValue;
    });
  ],
)