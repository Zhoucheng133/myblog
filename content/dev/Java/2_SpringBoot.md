---
type: docs
---

# SpringBoot

## 创建一个SpringBoot项目

可以通过这个链接在线创建：[点击这里查看](https://start.spring.io/)

### 项目配置

添加的依赖：

- SpringBoot DevTools：开发者工具
- LomBok：转发Java中的类参数（传递到前端以对象的形式）
- Spring Web：可以使用注解`@RequestMapping`

### 为打包做准备

在最后添加：

```xml
<build>
  <plugins>
    <plugin>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-maven-plugin</artifactId>
      </plugin>
  </plugins>
</build>
```

这个依赖可以导出`jar`包，打包的命令如下：

```bash
mvn package
```



### 修改端口号

在目录`src/main/java/xxx/resources/application.properties`中添加：

```properties
server.port=1234
```

### 修改访问目录

同样在目录`src/main/java/xxx/resources/application.properties`中添加：

```properties
server.servlet.context-path=/api
```

## Controller

添加一个Controller应该这么写：

```java
package /* 这是你的包路径，自动生成 */;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/*
也可以分开写：
@Controller
@ResponseBody
*/
@RestController
public class Controller{
  // 这里写URL地址
  @RequestMapping("/request")
  void request(){
    // 浏览器打开/request时候的操作
  }
  
  // 当然也可以添加返回值
  String request(){
    // 添加一个返回值
    return "Hello world!";
  }
}
```

### LomBok

`LomBok`在请求的时候可以返回一个`JavaScript`对象，在`Java`中以类的形式存在

```java
import lombok.Data;

@Data
public class user {
    int id;
    String name;
    String pass;
    String status;
    String createDate;
    /**
     * @param id
     * @param name
     * @param pass
     * @param status
     * @param createDate
     */
    public user(int id, String name, String pass, String status, String createDate) {
        this.id = id;
        this.name = name;
        this.pass = pass;
        this.status = status;
        this.createDate = createDate;
    }
}
```

以这个类返回到前端是一个对象：

```java
@RequestMapping("getUser")
  user getUser(@RequestParam(name = "id") String id){
      user data=userForm.getUser(Integer.parseInt(id));
      return data;
  }
```

得到的结果是：

```json
{
    "id": 1,
    "name": "zhoucheng",
    "pass": "12345678",
    "status": "user",
    "createDate": "2023-09-09 15:43:50"
}
```

### 文件处理

同样使用`Controller`接收文件

```java
@RequestMapping("/upload")
String upload(@RequestParam("file") MultipartFile file) throws IOException{
    // 判断文件是否为空
    if(!file.isEmpty()){
        byte[] bytes = file.getBytes();
      	// 在项目中创建的文件夹
        String uploadDir = "uploads";
      	// 获取文件名，注意防止重名
        String fileName = file.getOriginalFilename();
      	// 创建路径
        Path path = Path.of(uploadDir + File.separator + fileName);
      	// 创建目录
        Files.createDirectories(path.getParent());
        // 存储文件
        Files.write(path, bytes);
        return "上传成功!";
    }
    return "上传失败!";
}
```

