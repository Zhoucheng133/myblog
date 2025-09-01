import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "博客",
  description: "A blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '我的作品', link: '/mywork/mywork' }
    ],

    sidebar: [
      {
        text: '我的作品',
        link: '/mywork/mywork',
      },
      {
        text: '开发文档',
        link: '/dev/index',
        items: [
          {
            text: 'Flutter', 
            collapsed: true,
            items: [
              { text: '保存设置', link: '/dev/flutter/1_保存设置' },
              { text: 'GestureDetector', link: '/dev/flutter/2_GestureDetector' },
              { text: '网络请求', link: '/dev/flutter/3_网络请求' },
              { text: 'GetX', link: '/dev/flutter/4_GetX' },
              { text: '自定义TextField', link: '/dev/flutter/5_自定义TextField' },
              { text: 'Container样式', link: '/dev/flutter/6_Container样式' },
              { text: 'Text样式', link: '/dev/flutter/7_Text样式' },
              { text: '桌面端窗口', link: '/dev/flutter/8_桌面端窗口' },
              { text: 'Scaffold', link: '/dev/flutter/9_Scaffold' },
              { text: 'App图标', link: '/dev/flutter/10_App图标' },
              { text: 'MouseRegion', link: '/dev/flutter/11_MouseRegion' },
              { text: '发布App', link: '/dev/flutter/12_发布App' },
              { text: '启动页', link: '/dev/flutter/13_启动页' },
              { text: '外部文件', link: '/dev/flutter/14_外部文件' },
              { text: '本地化', link: '/dev/flutter/15_本地化' },
              { text: '判断前台运行', link: '/dev/flutter/16_判断前台运行' },
              { text: 'Dialog', link: '/dev/flutter/17_Dialog' },
              { text: '嵌套Widget', link: '/dev/flutter/18_嵌套Widget' },
              { text: '图标', link: '/dev/flutter/19_图标' },
              { text: '长度参数', link: '/dev/flutter/20_长度参数' },
              { text: 'initState和dispose', link: '/dev/flutter/21_initState和dispose' },
              { text: '路由', link: '/dev/flutter/22_路由' },
              { text: '列表', link: '/dev/flutter/23_列表' },
              { text: 'Material App', link: '/dev/flutter/24_MaterialApp' },
              { text: '系统相关', link: '/dev/flutter/25_系统相关' },
              { text: '菜单', link: '/dev/flutter/26_菜单' },
              { text: '水波纹效果', link: '/dev/flutter/27_水波纹效果' },
              { text: '连接到动态库', link: '/dev/flutter/28_连接到动态库' },
              { text: '暗色模式', link: '/dev/flutter/29_暗色模式' },
            ],
          },
          {
            text: 'CSS',
            collapsed: true,
            items: [
              { text: '常用语法', link: '/dev/css/1_常用语法' },
              { text: '各种单位', link: '/dev/css/2_各种单位' },
              { text: 'Grid布局', link: '/dev/css/3_Grid布局' },
              { text: '动画', link: '/dev/css/4_动画' },
              { text: 'Flex布局', link: '/dev/css/5_Flex布局' },
            ]
          },
          {
            text: "Docker",
            collapsed: true,
            items: [
              { text: 'Dockerfile', link: '/dev/docker/1_dockerfile' },
              { text: '创建镜像', link: '/dev/docker/2_创建镜像' },
              { text: '创建容器', link: '/dev/docker/3_创建容器' },
              { text: '与主机通信', link: '/dev/docker/4_与主机通信' },
            ]
          },
          {
            text: "Electron",
            collapsed: true,
            items: [
              { text: '创建Electron项目', link: '/dev/electron/1_创建Electron项目' },
              { text: '配置Electron', link: '/dev/electron/2_配置Electron' },
              { text: 'Electron主进程链接', link: '/dev/electron/3_Electron主进程链接' },
              { text: 'Electron创建菜单', link: '/dev/electron/4_Electron创建菜单' },
              { text: '主进程常用', link: '/dev/electron/5_主进程常用' },
              { text: '添加Electron图标', link: '/dev/electron/6_添加Electron图标' },
            ]
          },
          {
            text: "常用命令",
            collapsed: true,
            items: [
              { text: 'Linux常用命令', link: '/dev/常用命令/1_Linux命令' },
              { text: 'Mac常用命令', link: '/dev/常用命令/2_Mac命令' },
              { text: 'Windows常用命令', link: '/dev/常用命令/3_Windows命令' },
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zhoucheng133' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present ZhouC'
    }
  }
})
