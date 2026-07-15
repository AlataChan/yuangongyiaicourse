# Course 04 Qinglan Case Visual Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 将第 4 课青澜公众号案例重写为素材冲突驱动的真实协作现场，并用 3 张归藏材质图解说明多智能体分工、交接、退回与人审原理。

**Architecture:** 以 `README.md` 作为课程长文源稿，将同一案例压缩同步到 `handbook.html` 和讲师提纲。图解作为认知锚点分别承载「素材冲突」「职责流水线」和「审核退回闭环」，图中只放短标签，完整解释留在页面正文。

**Tech Stack:** Markdown、原生 HTML/CSS、项目既有 Markdown-to-HTML 构建脚本、Guizang Material Illustration、built-in image generation、本地链接检查脚本。

---

### Task 1: 固定案例数据与教学语言

**Files:** `part-04-scenario/README.md`, `part-04-scenario/handbook.html`, `../teaching/lesson-04-multi-agent/instructor-outline.md`

1. 将旧版「一句今晚发」改为 17:20 临时任务，加入报名表 56 人、签到表 41 个签名、群里约 50 人、肖像授权待查和历史语气要求。
2. 将「模型偷懒」改写为写作、核验、审校三种目标发生职责冲突。
3. 补充职责分离、上下文隔离、结构化交接、独立评估、局部返工和人工闸门六个原理。
4. 运行关键词检查，确认三个文件的事实口径一致。

### Task 2: 生成并验收 3 张案例图解

**Files:** `part-04-scenario/assets/illustrations/qinglan-material-conflict.png`, `qinglan-agent-pipeline.png`, `qinglan-review-loop.png`, `PROMPTS.md`

1. 按设计撰写 3 组归藏材质提示词，每图保留 4–5 个简体中文短标签。
2. 使用 built-in image generation 分别生成三张 1.9:1 宽横图。
3. 将图像复制到课程仓库目标目录。
4. 逐张检查标签、裁切、指向、颜色一致性、水印与意外英文；不通过则重新生成。
5. 将最终提示词、输出路径和质检记录写入 `PROMPTS.md`。

### Task 3: 将图解嵌入学员阅读链路

**Files:** `part-04-scenario/README.md`, `part-04-scenario/handbook.html`

1. 在素材包后嵌入 `qinglan-material-conflict.png`。
2. 在五角色分工前嵌入 `qinglan-agent-pipeline.png`。
3. 在退回规则后嵌入 `qinglan-review-loop.png`。
4. 检查 HTML `img` 的 `alt`、`loading`、`decoding` 属性和 Markdown 相对路径。

### Task 4: 再生成 README HTML 并检查一致性

**Files:** `part-04-scenario/README.html`, `part-04-scenario/assets/illustrations/PROMPTS.html`

1. 使用课程仓库既有 Markdown-to-HTML 脚本再生成 HTML。
2. 检查新标题、表格、三张图和讲师材料链接均出现在生成 HTML 中。
3. 检查 `README.html` 内嵌的 Markdown source 已更新。

### Task 5: 验证页面、链接和公开脱敏要求

**Files:** 上述全部交付文件。

1. 运行课程仓库链接检查脚本，期望返回 0 且无断链。
2. 本地打开 `handbook.html#case` 和 `README.html`，检查桌面端与窄屏下图片不裁切、表格可滚动、段落层级清晰。
3. 检索真实机构名、人名、联系方式与内部文件名，确认案例区只保留虚构青澜与通用素材名称。
4. 逐项对照设计文档的 6 条验收标准。
