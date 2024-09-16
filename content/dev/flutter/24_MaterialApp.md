---
type: docs
title: Material App
weight: 24
---

## Material App基本结构

```dart
return MaterialApp(
  // 是否显示Debug的标识
  debugShowCheckedModeBanner: false,
  theme: ThemeData(
    // 主题色
    colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
    // 使用Material样式, 默认为true
    useMaterial3: true,
    // 默认字体, 详细见Text样式
    textTheme: GoogleFonts.notoSansScTextTheme(),
    // 水波纹效果, transparent表示不显示水波纹效果
    splashColor: Colors.transparent,
  ),
  home: const Scaffold(
    // 页面内容...
    // Scaffold见9: Scaffold
  ),
);
```