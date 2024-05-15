---
type: docs
weight: 12
---

# 发布App

## iOS

1. 直接通过Release模式安装在`iPhone`上
2. 使用`Xcode`发布到`App Store`或其他方式发布

## Android

1. 直接通过Release模式安装在设备上
2. 使用命令生成`apk`文件: 
   ```bash
   flutter build apk --split-per-abi
   ```
## Windows

通过命令生成: 

```bash
flutter build windows
```

## macOS

使用命令生成: 

```bash
flutter build macos
```

## Linux

使用命令生成

```bash
flutter build linux
```