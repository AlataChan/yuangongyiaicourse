# 知识库 metadata 字段表

> 文件路径：`/Users/apple/Documents/4.0 Sanyuan/2.4 环境公益"新"力量/course/part-02-knowledge-base/templates/kb_metadata_schema.md`
>
> 用途：为知识库资料统一标签，提升检索命中率。metadata 不求多，先保证字段稳定。

## 推荐字段

| 字段 | 是否必填 | 示例 | 用途 |
|------|----------|------|------|
| `doc_title` | 必填 | 2024 清河巡护项目结项报告 | 让 AI 能引用来源 |
| `doc_type` | 必填 | 结项报告 / 资助指南 / 案例复盘 / 沟通模板 | 区分资料类型 |
| `project_name` | 条件必填 | 清河巡护项目 | 项目类资料必须填 |
| `year` | 条件必填 | 2024 | 支持按年份检索 |
| `module` | 必填 | M1 文书 / M2 案例 / M3 传播 | 对齐课程主场景 |
| `topic_tags` | 必填 | 河流保护、社区动员、志愿者 | 支持语义检索和筛选 |
| `funder` | 可选 | XX 基金会 | 文书和资助类资料推荐填 |
| `privacy_level` | 必填 | L1 / L2 / L3 / L4 | 决定是否能上云 |
| `source_owner` | 可选 | 项目部 / 传播部 | 后续维护时找负责人 |
| `last_reviewed_at` | 可选 | 2026-06-10 | 确认资料是否过期 |

## 三类资料的最小 metadata

### M1 项目文书链

```text
doc_title:
doc_type:
project_name:
year:
funder:
module: M1 文书
topic_tags:
privacy_level:
```

### M2 案例与知识沉淀

```text
doc_title:
doc_type: 案例复盘 / 服务故事 / 方法总结
project_name:
year:
module: M2 案例
topic_tags:
privacy_level:
```

### M3 传播与运营

```text
doc_title:
doc_type: 公众号稿 / 活动复盘 / 社群 FAQ / 品牌话术
year:
module: M3 传播
topic_tags:
privacy_level:
```

## 标签质量自检

| 检查项 | 通过标准 |
|--------|----------|
| 标签是否太泛 | 不只写“项目”“资料”，而是写“河流保护”“社区动员”等可检索词 |
| 年份是否缺失 | 涉及项目、活动、报告的资料尽量填年份 |
| 文档类型是否稳定 | 同类文档使用同一个词，如统一写“结项报告” |
| 合规档位是否明确 | 没有档位的资料不得进入腾讯元器 |
