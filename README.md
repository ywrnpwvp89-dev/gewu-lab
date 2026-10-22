# 格物 · 实验数据工作台

面向教师与实验教学的浏览器数据工作台：输入原始测量值、计算、拟合、规范作图，导出Word、Excel、PDF、SVG、PNG与离线复算文件。基于已有教师版整理，保留30个处理模块，未预填个人测量数据。

## 使用

在本目录运行 `python3 -m http.server 8080 --directory dist`，访问 `http://localhost:8080`；也可将 `dist/` 发布到静态托管。数据计算在浏览器中完成，不主动上传实测数据。刷新前请导出结果。

## 目录

- `dist/app.js`：页面交互。
- `dist/core.js`：实验数据处理。
- `dist/plot.js`：规范作图。
- `dist/export.js`：结果导出。
- `dist/vendor/`：离线字体、数学排版和导出库及对应许可。

## 使用边界

使用者负责核对实验方法、单位、仪器参数和有效数字。本工具不替代教师批改，不自动生成现场观察，也不编造测量数据。上传到GitHub是代码发布；在线网址以GitHub Pages部署结果为准。

自有代码采用MIT；第三方许可分别保存在vendor目录，不包含第三方教学资料的再许可。

## 回归检查

`npm install`、`npx playwright install chromium` 后，在8766端口启动静态服务，运行 `npm run test:browser`。也可通过TEST_URL指定地址、CHROME_BIN指定Chrome路径。测试输入是自制合成数据，用来核对模块数量、计算、作图和PDF导出；不代表全部实验模型重新认证。
