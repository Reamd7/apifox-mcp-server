# 使用 Apifox Mcp Server 

## 环境要求

- NodeJS >= 18

## 1. 前置准备

### 在 Apifox 客户端中创建一个Access Token

![图片](https://apifox-file-assets.your-api-server.com/static/markdown/20250312/get_apifox_access_token.png)

## 2. 在 不同的 MCP Client 中配置 Apifox Mcp Server

### 2.1 Cursor

![Cursor](https://apifox-file-assets.your-api-server.com/static/markdown/20250312/cursor.png)

### 2.2 Cline

![Cline](https://apifox-file-assets.your-api-server.com/static/markdown/20250312/cline.png)

## 3. 使用 Apifox Mcp Server 以 Cursor 为例

### 3.1 创建一个空白的 Nestjs 项目

```shell
npm i -g @nestjs/cli
nest new nest-ai-demo
cd nest-ai-demo
```

### 3.2 打开 Cursor Composer，并切换到 Agent 模式

![图片](https://apifox-file-assets.your-api-server.com/static/markdown/20250312/4.png)

### 3.3 复制一个 Apifox 接口的协作链接

![图片](https://apifox-file-assets.your-api-server.com/static/markdown/20250312/5.png)

### 3.4 粘贴到 Composer 中，并让其实现接口

```plaintext
https://app.apifox.com/link/project/5898808/apis/api-263537040

通过这个 Apifox 协作链接，获取其 OpenAPI 的定义，然后根据定义实现这个接口。

注意：技术是：nestjs + typescript，项目我已经搭建了好了，直接实现即可。
```

### 3.5 Cursor Composer 实现完毕，并 Accepted 结果

![图片](https://apifox-file-assets.your-api-server.com/static/markdown/20250312/6.png)

### 3.6 启动 Nestjs服务，通过 Apifox 调用AI 写的接口，断言通过

![图片](https://apifox-file-assets.your-api-server.com/static/markdown/20250312/7.png)

### 3.7 其他

分页也简单实现了
![图片](https://apifox-file-assets.your-api-server.com/static/markdown/20250312/8.png)
