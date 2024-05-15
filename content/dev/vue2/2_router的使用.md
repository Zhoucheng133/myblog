---
type: docs
---

# router的使用

## router的作用

router主要用来将不同的URL映射到不同的页面，比如说
`localhost:8080/`映射到主页
`localhost:8080/about`映射到关于页面

## 安装router

- 使用vue ui：  
  选择`插件`，然后选择`增加Router`

- 使用NPM：  
  ```bash
  npm install vue-router
  ```

- 使用yarn：  
  ```bash
  yarn add vue-router
  ```

## 使用router

- router文件的目录：`src/router/index.js`

- `index.js`文件默认内容如下

  ```javascript
  import Vue from 'vue'
  import VueRouter from 'vue-router'

  Vue.use(VueRouter)

  const routes = [
    {
      // 这里是主体内容
    },
  ]

  const router = new VueRouter({
    routes
  })

  export default router
  ```

- 对于主体文件用法如下：
  ```js
  const routes = [
    {
      path: '/',
      name: 'home',
      component:() => import('../views/HomeView.vue')
    },
  ]
  ```

  - `path`表示的是页面路径，如果该页面为`http://localhost:8080`，那么如果`path`为`/home`表示如果要访问该页面，其URL地址为`http://localhost:8080/home`

  - `name`表示其页面名称（用处不大）

  - `component`表示页面地址，你可以这样使用：

    ```js
    component:() => import('../views/HomeView.vue')
    ```

    表示引入的这个页面在`../view/HomeView.vue`

- 如果要去除URL地址栏中的`#`，可以修改下面的`router`：
  ```js
  const router = new VueRouter({
    mode:'history',		// 增加的内容在这里
    routes
  })
  ```


## 在App.vue中使用router

- 如果你安装好了router，可以进行如下配置：

  对于`App.vue`文件，修改内容如下：

  ```html
  <template>
    <div>
      <router-view></router-view>
    </div>
  </template>
  ```
  
  这样的操作会自动根据你浏览器的URL地址跳转到相应的页面

## 跳转路由

```javascript
directLink(url){
  this.$router.push(url)
}
```

## 重新定向

```javascript
const routes = [{ path: '/home', redirect: '/' }]
// 也就是说访问/home会自动跳转到/
```

