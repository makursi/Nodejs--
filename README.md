  <h1>
    #跟着满爷(小满zs)学习Nodejs
  </h1>

  <h3>#在这个项目中跟着小满b站Nodejs视频学习相关Nodejs的知识</h3>


#学习Nodejs中的内置模块：
1. fs (File System)

    用途：提供对文件系统的访问接口，可以用来读写文件、获取文件信息等。
    常用方法：
        fs.readFile(path[, options], callback)：异步读取文件内容。
        fs.writeFile(file, data[, options], callback)：异步写入数据到文件。
        fs.readdir(path, callback)：读取目录的内容。

2. http 和 https

    用途：用于创建 HTTP 或 HTTPS 服务器和客户端。
    常用方法：
        http.createServer([requestListener])：创建 HTTP 服务器。
        http.get(options[, callback])：发起 HTTP GET 请求。
        类似的，https 模块提供了相同的方法来处理 HTTPS 协议。

3. path

    用途：提供了处理和转换文件路径的工具。
    常用方法：
        path.join([...paths])：将多个路径片段拼接在一起，并规范化生成的路径。
        path.resolve([...paths])：解析路径序列中的绝对路径。
        path.basename(path[, ext])：返回 path 的最后一部分。

4. os

    用途：提供了基本的操作系统交互功能。
    常用方法：
        os.cpus()：获取 CPU 信息。
        os.totalmem() 和 os.freemem()：分别获取总内存和可用内存大小。
        os.platform()：获取当前操作系统的名称。

5. querystring

    用途：用于解析和格式化 URL 查询字符串。
    常用方法：
        querystring.parse(str[, sep[, eq[, options]]])：将查询字符串转换为对象。
        querystring.stringify(obj[, sep[, eq[, options]]])：将对象序列化成查询字符串。

6. url

    用途：用于 URL 处理，如解析 URL 字符串或构建新的 URL。
    常用方法：
        url.parse(urlString[, parseQueryString[, slashesDenoteHost]])：解析 URL 字符串。
        url.format(urlObject)：从 URL 对象构造 URL 字符串。

7. events

    用途：事件驱动编程的核心模块，允许你订阅和发布自定义事件。
    常用方法：
        eventEmitter.on(event, listener)：添加事件监听器。
        eventEmitter.emit(event[, ...args])：触发指定事件。

8. stream

    用途：用于处理流数据，如文件、网络请求等。
    流分为四种类型：Readable（可读）、Writable（可写）、Duplex（双工）、Transform（转换）。

###通义ai大模型总结
![cute Carla](./Images/Carla%20(10).jpg)