# 课后测验与课程内容的绑定说明

> 文件路径：`/Users/apple/Documents/4.0 Sanyuan/2.4 环境公益"新"力量/course/quiz-binding.md`  
> 维护者索引：改题、改手册、改首页目标时，请同步三处。

## 绑定模型（回答「quiz 跟谁强相关？」）

测验**不单独依附** `index.html` 或 `handbook.html` 之一，而是 **三角绑定**：

| 层级 | 文件 | 角色 |
|------|------|------|
| **深度教学内容** | `handbook.html` | **主锚点**：每题标注 `手册·章节` 并链到 `#anchor` |
| **学习目标入口** | `index.html` | **目标锚点**：每题标注 `目标①` 或首页区块（如 `#compliance`） |
| **课纲验收** | `102_detailed_course_design.md` | 设计依据；改课纲时需回溯 quiz 是否仍覆盖 |

**学习路径（推荐）：** `index` 看目标 → `handbook` 深学 → 章节末「检验理解」→ `quiz.html#qN` 自测。

## 页面内双向链接约定

### quiz.html → 手册 / 首页

- 顶部 `.bind` 区块：说明覆盖范围 +「建议先学完 → 学员手册」
- 每题 `.q-src`：两个链接（手册章节 + index 目标/区块）
- 每题 `id="q1"` … `q10`，供手册反向链接

### handbook.html → quiz

- 各章末 `.quiz-check`：`检验理解 → 课后测验 Qx · Qy`

### index.html → quiz

- 导航「课后测验」
- 学习目标区：「课后测验（10 题）→」，注明覆盖目标 ①–⑤

## 各课文件位置

| 课次 | quiz | handbook | index |
|------|------|----------|-------|
| 第 1 课 技能 | `part-01-skill/quiz.html` | `handbook.html` | `index.html` |
| 第 2 课 知识库 | `part-02-knowledge-base/quiz.html` | `handbook.html` | `index.html` |
| 第 3 课 AI智能体 | `part-03-agent/quiz.html` | `handbook.html` | `index.html` |
| 第 4 课 场景深化 | `part-04-scenario/quiz.html` | `handbook.html` | `index.html` |
| 第 5 课 预发布 | `part-05-prelaunch/quiz.html` | `handbook.html` | `index.html` |

课前 `part-00-prework` **不设测验**（立项书产出评估，见 102/104）。

## 第 1 课映射示例（维护模板）

| 题号 | 手册锚点 | index 目标 | 考查要点 |
|------|----------|------------|----------|
| Q1 | `#concepts` | 目标① | 技能 vs 提示词 |
| Q2 | `#workbuddy` | 目标③ | 三层加载·触发层 |
| Q3 | `#templates` | 目标② | 哪些任务值得做技能 |
| Q4 | `#workbuddy` | 目标④ | 输出契约 |
| Q5 | `#gotchas` | 目标④ | 禁止编造 |
| Q6 | `#workbuddy` | 目标③ | 最小技能四要素 |
| Q7 | `#compliance` | 目标⑤ | 脱敏上传 |
| Q8 | `#concepts` | 目标① | 知识库分工 |
| Q9 | `#demo` | 目标④ | 跑通真实任务 |
| Q10 | `#homework` | 目标③ | 开放·省时记录（简答） |

第 2–5 课完整逐题表见各 `quiz.html` 内 `.q-src` 链接（单一事实源，避免本文件双份维护漂移）。

## 修改检查清单

- [ ] 改 `handbook.html` 章节 → 同步 `quiz.html` 对应 `.q-src` 与题干
- [ ] 改 `index.html` 学习目标 → 同步 `quiz.html` 目标链接与 `.bind` 文案
- [ ] 改题号/增删题 → 同步 `handbook.html` 各章 `.quiz-check`
- [ ] 改 `102` 课验收指标 → 抽查 10 题是否仍覆盖

---

**版本**：v1.0（2026-06-07）· 测验强绑定至手册+首页目标；课前无 quiz。
