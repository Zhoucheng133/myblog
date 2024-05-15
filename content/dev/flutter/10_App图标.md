---
type: docs
---

# App图标

## Flutter launcher icons

这是一个可以在不同平台上快速创建图标的依赖，省去自己创建图标的步骤

## 安装依赖

在项目的命令行中执行：

```bash
flutter pub add flutter_launcher_icons
```

## 配置图标

在`pubspec.yaml`文件中添加下面的代码：
```yaml
flutter_launcher_icons:
  android: "launcher_icon"
  ios: true
  image_path: "assets/icon/icon.png"    # 图标文件路径
  min_sdk_android: 21
  web:
    generate: true
    image_path: "path/to/image.png"     # 图标文件路径
    background_color: "#hexcode"
    theme_color: "#hexcode"
  windows:
    generate: true
    image_path: "path/to/image.png"     # 图标文件路径
    icon_size: 48
  macos:
    generate: true
    image_path: "path/to/image.png"     # 图标文件路径
```

最后执行下面的命令：

```bash
flutter pub get
flutter pub run flutter_launcher_icons
```