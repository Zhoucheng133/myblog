---
type: docs
title: Windows常用命令
weight: 3
---

## 使用oh-my-posh

1. 在Windows应用商店找到oh-my-posh
2. 使用命令打开`powershell`的配置文件:
   ```bash
   # 如果已经设置了Visual Studio Code的环境变量
   code $PROFILE
   # 如果没有设置这个环境变量，可以直接输入
   $PROFILE
   # 找到配置文件目录打开
   ```
3. 输入配置文件
   ```ps1
   oh-my-posh init pwsh --config $env:POSH_THEMES_PATH\montys.omp.json | Invoke-Expression
   cls
   ```
注意，如果你的账户是英文的，`PROFILE`文件需要修改为:
```ps1
$previousOutputEncoding = [Console]::OutputEncoding
[Console]::OutputEncoding = [Text.Encoding]::UTF8
try {
    oh-my-posh init pwsh --config $env:POSH_THEMES_PATH\montys.omp.json | Invoke-Expression
} finally {
    [Console]::OutputEncoding = $previousOutputEncoding
}

cls
```
注意：`montys`这里是主题的名称，所有的主题可以见[oh-my-posh官网](https://ohmyposh.dev/docs/themes)