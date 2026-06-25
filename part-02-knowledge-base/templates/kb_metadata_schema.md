# 知识库 frontmatter + metadata 字段表

> 文件路径：`/Users/apple/Documents/4.0 Sanyuan/2.4 环境公益"新"力量/course/part-02-knowledge-base/templates/kb_metadata_schema.md`
>
> 用途：把散乱资料整理成 LLM-wiki 条目。frontmatter 放在 Markdown 最前面，metadata 是知识库平台可用于筛选和引用的字段。两者字段尽量保持一致。

## 1. 标准条目结构

```yaml
---
doc_title: 2024 清河巡护项目结项报告
doc_type: 结项报告
project_name: 清河巡护项目
year: 2024
module: M1 文书
topic_tags:
  - 河流保护
  - 志愿者管理
funder: XX 基金会
privacy_level: L2
audience_scope: 内部同事可问
retrieval_hint: 事实查找
source_owner: 项目部
last_reviewed_at: 2026-06-10
source_path: 云盘/项目档案/2024清河
canonical_questions:
  - 2024 清河项目开展了多少次巡护？
  - 2024 清河项目有哪些主要成效？
summary: 记录 2024 年清河巡护项目的活动、产出、成效和反思。
---

# 正文标题

## 背景

## 关键事实

## 可引用材料

## 注意事项
```

## 2. 推荐字段

| 字段 | 是否必填 | 示例 | 用途 |
|------|----------|------|------|
| `doc_title` | 必填 | 2024 清河巡护项目结项报告 | 让 AI 能引用来源 |
| `doc_type` | 必填 | 结项报告 / 资助指南 / 案例复盘 / 沟通模板 | 区分资料类型 |
| `project_name` | 条件必填 | 清河巡护项目 | 项目类资料必须填 |
| `year` | 条件必填 | 2024 | 支持按年份检索 |
| `module` | 必填 | M1 文书 / M2 案例 / M3 传播 | 对齐课程主场景 |
| `topic_tags` | 必填 | 河流保护、社区动员、志愿者 | 支持语义检索和筛选 |
| `funder` | 可选 | XX 基金会 | 文书和资助类资料推荐填 |
| `privacy_level` | 必填 | L1 / L2 / L3 / L4 | 决定是否能进入组织层知识库 |
| `audience_scope` | 必填 | 内部同事可问 / 公开用户可问 / 仅维护人可看 | 控制回答边界 |
| `retrieval_hint` | 必填 | 事实查找 / 案例匹配 / 条款引用 / 综合判断 | 帮助后续设计测试题和检索策略 |
| `canonical_questions` | 必填 | 这份资料应该能回答的 2–5 个问题 | 用于命中率测试 |
| `summary` | 必填 | 1–2 句话概括资料价值 | 帮助模型快速判断相关性 |
| `source_path` | 推荐 | 云盘/项目档案/2024清河 | 方便人工回查原件 |
| `source_owner` | 推荐 | 项目部 / 传播部 | 后续维护时找负责人 |
| `last_reviewed_at` | 推荐 | 2026-06-10 | 确认资料是否过期 |

## 3. 三类资料的最小 frontmatter

### M1 项目文书链

```yaml
---
doc_title:
doc_type:
project_name:
year:
funder:
module: M1 文书
topic_tags:
privacy_level:
audience_scope:
retrieval_hint: 事实查找
canonical_questions:
summary:
---
```

### M2 案例与知识沉淀

```yaml
---
doc_title:
doc_type: 案例复盘 / 服务故事 / 方法总结
project_name:
year:
module: M2 案例
topic_tags:
privacy_level:
audience_scope:
retrieval_hint: 案例匹配
canonical_questions:
summary:
---
```

### M3 传播与运营

```yaml
---
doc_title:
doc_type: 公众号稿 / 活动复盘 / 社群 FAQ / 品牌话术
year:
module: M3 传播
topic_tags:
privacy_level:
audience_scope:
retrieval_hint: 条款引用 / 综合判断
canonical_questions:
summary:
---
```

## 4. 清洗质量自检

| 检查项 | 通过标准 |
|--------|----------|
| frontmatter 是否完整 | 至少有标题、类型、密级、标签、检索提示、可回答问题 |
| 标签是否太泛 | 不只写“项目”“资料”，而是写“河流保护”“社区动员”等可检索词 |
| 年份是否缺失 | 涉及项目、活动、报告的资料尽量填年份 |
| 文档类型是否稳定 | 同类文档使用同一个词，如统一写“结项报告” |
| 合规档位是否明确 | 没有档位的资料不得进入 Agent平台 |
| 正文是否可引用 | 保留事实、数据、来源和限制，不只留下泛泛摘要 |
