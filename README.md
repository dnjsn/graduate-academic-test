# Graduate Academic Test

一个面向研究生，尤其是医学口研究生的学术黑梗人格测试静态网页。

## 本地运行

1. 进入目录：

   ```bash
   cd /Users/wendong/Desktop/ai诊断step123非good不诊断鳞屑无少样本/新代码/graduate-academic-test
   ```

2. 运行测试：

   ```bash
   npm test
   ```

3. 本地预览：

   ```bash
   python3 -m http.server 4173
   ```

4. 浏览器打开：

   [http://localhost:4173](http://localhost:4173)

## GitHub Pages 发布

1. 创建一个公开 GitHub 仓库。
2. 把本目录所有文件放到仓库根目录。
3. 推送到 `main` 分支。
4. 打开 GitHub 仓库的 `Settings -> Pages`。
5. `Source` 选择 `Deploy from a branch`。
6. 分支选 `main`，目录选 `/ (root)`。
7. 保存后等待公开 URL 生成。

`.nojekyll` 已经包含在项目里，GitHub Pages 会把它当普通静态站点处理。

## 内容修改入口

- 题目：`src/content/questions.js`
- 人格结果：`src/content/personas.js`
- 期刊宇宙：`src/content/journals.js`

## 手动 QA 清单

- [ ] 首页无报错加载
- [ ] 点击“开始测试”后进入题页
- [ ] `hidden-authorship-trigger` 选 `C` 时出现共一隐藏题
- [ ] `hidden-clinical-trigger` 选 `C` 时出现答辩隐藏题
- [ ] 全部答完后才能提交
- [ ] 结果页同时显示人格、期刊和编辑决定
- [ ] 窄屏 `390px` 下仍可读

## 说明

- 无后端，所有结果都在前端本地计算
- 这是静态部署项目，默认目标是 GitHub Pages
- 当前工作区不是 Git 仓库，真正发布前需要先放进 GitHub 仓库
