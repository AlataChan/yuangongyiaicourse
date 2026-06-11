#!/usr/bin/env node
/**
 * 结项报告章节完整性校验器。
 *
 * 用确定性逻辑检查一份生成的结项报告是否包含 Output Contract 要求的
 * 六个固定章节，避免模型「漏写章节」却看起来完整。属于第 1 课「低自由度
 * 确定性脚本」示范：与其让模型自评，不如用脚本卡一道。
 *
 * @file check_sections.mjs
 * @example
 *   node scripts/check_sections.mjs ./generated_report.md
 */

import { readFile } from "node:fs/promises";

/**
 * Output Contract 要求的六个章节关键词（按固定顺序）。
 * 匹配时只要标题行包含对应关键词即视为命中。
 * @type {readonly string[]}
 */
const REQUIRED_SECTIONS = [
  "项目背景",
  "主要活动",
  "产出与数据",
  "成效与反馈",
  "反思与后续建议",
  "缺失项清单",
];

/**
 * 从报告全文中提取 Markdown 标题行（以 # 开头的行）。
 *
 * @param {string} markdown - 结项报告全文。
 * @returns {string[]} 去掉首尾空白后的标题行数组。
 */
function extractHeadings(markdown) {
  return markdown
    .split("\n")
    .filter((line) => /^#{1,6}\s/.test(line.trim()))
    .map((line) => line.trim());
}

/**
 * 校验报告是否包含全部必需章节。
 *
 * @param {string} markdown - 结项报告全文。
 * @returns {{ ok: boolean, missing: string[] }} 校验结果与缺失章节列表。
 */
function checkSections(markdown) {
  const headings = extractHeadings(markdown).join("\n");
  const missing = REQUIRED_SECTIONS.filter(
    (section) => !headings.includes(section),
  );
  return { ok: missing.length === 0, missing };
}

/**
 * CLI 入口：读取文件路径参数，打印校验结论，并以退出码反映结果。
 *
 * @returns {Promise<void>}
 */
async function main() {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error("用法：node scripts/check_sections.mjs <报告文件路径>");
    process.exit(2);
  }

  const markdown = await readFile(filePath, "utf8");
  const { ok, missing } = checkSections(markdown);

  if (ok) {
    console.log("OK：六个必需章节齐全。");
    process.exit(0);
  }

  console.log(`不合格：缺少 ${missing.length} 个章节 → ${missing.join("、")}`);
  process.exit(1);
}

main().catch((error) => {
  console.error("校验失败：", error.message);
  process.exit(2);
});
