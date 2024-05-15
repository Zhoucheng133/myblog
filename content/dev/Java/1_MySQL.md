---
type: docs
---

# MySQL

## 导入库

- 对于单独的Java项目  

  导入myql的包，下载地址[点击这里](https://dev.mysql.com/downloads/connector/j/)

    ```java
  import java.sql.*;
    ```

- 对于Maven项目（包括Spring Boot项目） 

  可以使用pom.xml文件导入，导入的内容如下：

  ```xml
  <dependency>
      <groupId>com.mysql</groupId>
      <artifactId>mysql-connector-j</artifactId>
      <scope>runtime</scope>
  </dependency>
  ```

## 各种操作

具体使用JDBC的方法可以见：[点击这里跳转到Gitee链接](https://gitee.com/Ryan-zhou/my-sql-tool)