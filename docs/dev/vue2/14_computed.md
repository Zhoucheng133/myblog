# computed

## 和`methods`区别

`computed`和`methods`在某些时候可以转换：

```html
<template>
  <div>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    };
  },
  computed: {
    fullName() {
      return this.firstName+" "+this.lastName;
    }
  }
};
</script>
```
效果上等同于

```html
<template>
  <div>
    <p>{{ fullName() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    };
  },
  methods: {
    fullName() {
      return this.firstName+" "+this.lastName;
    }
  }
};
</script>
```

但是computed是用来声明计算属性的，因此computed运行，另外还有以下区别

- `methods`不一定需要返回值，但是`computed`**一定有返回值**
- `methods`一般是用于执行操作的时候使用，比如点击操作，钩子函数调用等等，而`computed`一般直接用在dom内容上