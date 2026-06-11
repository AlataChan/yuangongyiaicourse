---
name: env-ngo-skill-optimize
description: >-
  Load when the user provides an existing skill (SKILL.md or skill folder) they
  wrote and asks to evaluate, debug, or optimize it — e.g. the skill misfires,
  never triggers, outputs wrong format, or fails eval cases. Do not load for
  writing a brand-new skill from scratch, or for running the underlying task
  itself (writing reports, proposals, etc.).
disable-model-invocation: true
---

# 技能优化技能（skillopt · 评测 → 诊断 → 迭代）

把「我写的技能不好用」变成一份**可执行的优化清单**。这是第 1 课「自测」环节的进阶样板：学员写完自己的第一个技能后，用它做体检和迭代，第 4 课补第二技能时复用。

## When To Use

- 用户提供了一份自己写的 `SKILL.md`（或整个技能文件夹），想知道「写得行不行」。
- 用户反馈技能**该触发时不触发**、**不该触发时误触发**、输出不符合模板、缺数据时编造。
- 用户做完评测表，有失败用例，想知道改哪里。
- 触发关键词：优化技能、技能体检、为什么不触发、误触发、评测没过、改 description。

不要用于：从零设计新技能（直接按第 1 课骨架写）、代替技能本身去完成业务任务、优化整个 AI智能体的系统提示词（第 3 课内容）。

## Workflow

1. 读取用户提供的目标 `SKILL.md` 与配套 `assets/`，确认六段骨架（When To Use / Workflow / Required Inputs / Output Contract / Gotchas / Files To Read）是否齐全。
2. 对照 `assets/skill_health_checklist.md` 逐项打分，重点检查四个高频病因：
   - **触发说明太宽/太窄**（只写功能没写边界、缺「不要用于」）；
   - **输出契约不固定**（章节、字数、顺序未约定）;
   - **Gotchas 缺位**（脱敏、缺数据、套话三类至少各 1 条）;
   - **评测缺失**（没有「该加载 / 禁用 / 缺数据」三类用例）。
3. 若用户未提供评测表，按 `assets/eval_template.md` 生成 ≥6 条评测用例（加载 2 + 禁用 2 + 缺数据/合规 2），请用户逐条试跑并标记通过/失败。
4. 针对每条失败用例给出**最小修改**建议：优先改 description 边界或加 1 条 Gotcha，而不是重写整份技能。
5. 输出诊断报告，并提示用户把本轮改动记入 `assets/iteration_log.md`（优化前后对比 + 触发原因）。

## Required Inputs

- 目标技能的 `SKILL.md` 全文（必须）。
- 可选：失败案例（用户原话 + AI 实际输出）、已有评测表、`assets/` 模板文件。

## Output Contract

输出 Markdown，必须且仅包含以下五个章节，顺序固定：

1. **体检结论**（≤100 字：一句话总评 + 健康分 x/10）
2. **逐项诊断**（按检查清单列：通过 ✅ / 待改 ⚠️ / 缺失 ❌，每条 1 行）
3. **失败用例分析**（无失败用例则写「待用户试跑评测表」）
4. **最小修改建议**（按优先级排序，给出可直接粘贴的改写文本，如新 description）
5. **本轮迭代记录**（填好的 iteration_log 条目，供用户存档）

语言与用户输入一致（默认中文）。

## Gotchas

- **不要重写整份技能**：每轮只给 ≤3 处最小修改；大改会让学员无法定位是哪处改动起效。
- **description 改写必须含边界**：新写的触发说明必须同时有「何时用」与「不要用于」两段，否则不算修复。
- **不替用户跑评测**：评测要在用户自己的平台（WorkBuddy / 元器）上试跑，本技能只生成用例和分析结果，不假装「已测试通过」。
- **合规优先**：若目标技能会输出受益人/捐赠人/志愿者 PII，无论用户问什么，先在「最小修改建议」第 1 条加脱敏 Gotcha。
- **健康分不虚高**：六段骨架缺任何一段，健康分上限 6/10；无评测表上限 7/10。

## Files To Read

- `assets/skill_health_checklist.md` —— 体检打分清单（10 项）
- `assets/eval_template.md` —— 评测用例表模板（三类用例）
- `assets/iteration_log.md` —— 迭代记录卡模板（优化前后对比）
