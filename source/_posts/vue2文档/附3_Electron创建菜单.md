---
title: 【Vue】Electron创建菜单
date: 2023-11-08 16:44:56
tags:
- Vue
categories: 
- 开发
---

# Electron创建菜单

## 创建菜单函数

```js
const { Menu } = require('electron');  // 注意要引入 Menu 模块
function createMenu() {
	const template = [
		{
			label: 'File',
			submenu: [
				{
					label:"关于",
					role: "about"
				},
				{
					label:"隐藏",
					role:"hide"
				},
				{
					label: '退出',
					accelerator: 'CmdOrCtrl+Q',
					click() {
						app.quit();
					}
				}
			]
		},
		{
			label: '编辑',
			submenu: [
				{ type: 'separator' },
				{
					label: "全选",
					role: 'selectAll'
				},
				{
					label: "重做",
					role: 'redo'
				},
				{ type: 'separator' },
				{
					label: "剪切",
					role: 'cut'
				},
				{
					label: "复制",
					role: 'copy'
				},
				{
					label: "粘贴",
					role: 'paste'
				}
			]
		},
		{
			label: "窗口",
			submenu: [
				{
					label:"最小化",
					role:"minimize"
				},
				{
					label:"缩放",
					role:"zoom",
				}
			]
		}
	];

	const isMac = process.platform === 'darwin';
	// 如果是macOS系统则添加菜单，否则不添加任何菜单
	const menu = Menu.buildFromTemplate(template);
	if (isMac) {
		Menu.setApplicationMenu(menu);
	} else {
		Menu.setApplicationMenu(null);
	}
}

// 在ready的状态下先创建窗口，然后再创建菜单
app.on('ready', async () => {
	createWindow();
	createMenu();
})
```

## 常见操作

待完成…