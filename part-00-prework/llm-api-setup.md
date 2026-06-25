# 课前环境准备 · LLM API 开通指南

> 文件路径：`/Users/apple/Documents/4.0 Sanyuan/2.4 环境公益"新"力量/course/part-00-prework/llm-api-setup.md`
>
> 建议完成时间：开课前 1 周（与立项书作业并行）　|　预计耗时：30–45 分钟

---

## 一、这份准备要解决什么

课程里有两层工具，对「模型 API」的需求不同：

| 层级 | 工具 | 是否需要自己买 Token |
|------|------|---------------------|
| **组织层** | Agent平台（第 2–5 课主线 Bot） | **不需要**——平台内置模型，按平台规则使用 |
| **个人层** | QoderWork（第 1–2 课技能与本地知识库） | **需要**——连接外部大模型 API |
| **自建补充** | OpenClaw + Lighthouse（可选试点） | **需要**——独立部署时自行配置模型 Key |

因此：**组织层 Bot 不用提前买 Token；个人层 QoderWork 和可选自建路线需要。** 建议在第 1 课前完成 API 开通，避免第 1 课现场卡在注册与充值。

---

## 二、推荐方案

| 优先级 | 平台 | 适用场景 | 控制台 |
|--------|------|---------|--------|
| **主线** | 阿里云百炼 | QoderWork 默认对接、OpenClaw 试点、国内访问稳定 | [百炼控制台 · API Key](https://bailian.console.aliyun.com/?tab=api#/api) |
| **辅助** | DeepSeek 开发者平台 | 百炼额度用尽时的备选、或偏好 DeepSeek 模型时 | [platform.deepseek.com](https://platform.deepseek.com/) |

> 本期组织层教学以 Agent平台 为准，百炼**不是**第 2–5 课 Bot 的主线平台，而是个人层与自建路线的模型来源。详见内部文档 `105_平台选型评估表.md`。

---

## 三、主线 · 阿里云百炼（逐步操作）

### 3.1 注册阿里云账号并实名

1. 打开 [阿里云官网](https://www.aliyun.com/)，用手机号或邮箱注册。
2. 进入 [账号中心 → 实名认证](https://account.console.aliyun.com/v2/#/authc/home)，完成**个人**或**企业**实名（企业机构建议用对公账户，便于后续发票与报销）。
3. 确认账户**可用余额 ≥ 0**——余额为负时无法开通百炼服务。

**机构建议**：由 1 位「课程接口人」注册主账号，或为子账号开通百炼权限；API Key 仅在该接口人处保管，勿多人共用。

### 3.2 开通百炼大模型服务

1. 登录 [百炼控制台](https://bailian.console.aliyun.com/)。
2. 在左侧进入 **模型广场** 或 **应用广场**，点击 **去开通** / **开通模型调用服务**。
3. 勾选服务协议，确认开通以下商品（按提示勾选即可）：
   - 百炼大模型推理
   - 百炼大模型部署（可选，本期课程一般不用）
   - 百炼大模型训练（可选，本期课程一般不用）
4. 开通成功后，控制台会提示服务已就绪；新用户通常可获得**新人免费额度**（各模型额度与有效期以控制台显示为准，一般为开通后 90 天内有效）。

官方说明：[开通服务步骤](https://help.aliyun.com/zh/model-studio/activate-alibaba-cloud-model-studio) · [新人免费额度](https://help.aliyun.com/zh/model-studio/new-free-quota)

### 3.3 创建 API Key

1. 在百炼控制台**右上角**选择地域：**华北 2（北京）**（国内课程推荐；新加坡等地域 Key 不能混用）。
2. 进入 **[API Key 管理页](https://bailian.console.aliyun.com/?tab=api#/api)**，点击 **创建 API Key**。
3. 填写名称（建议：`机构简称-QoderWork-2026`），权限保持默认或按需设为「全部模型」。
4. **立即复制并保存**完整 Key（格式 `sk-` 开头）——关闭弹窗后无法再次查看完整密钥。

官方说明：[如何获取 API Key](https://help.aliyun.com/zh/model-studio/get-api-key)

### 3.4 充值与费用控制

百炼采用**按量后付费**：免费额度用尽后，从阿里云账户余额自动扣费。

**充值步骤**：

1. 打开 [费用与成本 → 充值汇款](https://usercenter2.aliyun.com/home)。
2. 选择金额并完成支付（支持支付宝、网银、对公汇款等）。
3. （可选）在 [费用中心](https://usercenter2.aliyun.com/home) 设置**余额预警**与**消费限额**，避免意外超支。

**公益机构预算参考**（课前 + 第 1–2 课调试）：

| 阶段 | 建议余额 | 说明 |
|------|---------|------|
| 课前试跑 | 新人免费额度通常够用 | 先不充值，用完免费额度再充 |
| 正式学习期 | 预留 **50–100 元** | 足够完成技能调试与知识库测试 |
| 长期运营 | 按实际调用量 | 可在控制台查看各模型单价 |

模型价格参考：[百炼模型价格](https://help.aliyun.com/zh/model-studio/model-pricing)

### 3.5 在 QoderWork 中配置（第 1 课会再演示）

课前只需**保存好 Key**，第 1 课会教具体填入位置。原则：

- 在 QoderWork「模型设置」中选择 **OpenAI 兼容** 或 **自定义 API**。
- **Base URL**（北京地域示例）：`https://dashscope.aliyuncs.com/compatible-mode/v1`
- **API Key**：粘贴你在 3.3 步创建的 Key。
- **模型名**：按课程推荐选择（如 `qwen-plus` 或当期讲义指定型号）。

### 3.6 自测：Key 是否可用（可选）

在终端执行（将 `YOUR_API_KEY` 替换为真实 Key，**勿把 Key 提交到 Git 或发到群聊**）：

```bash
curl https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "qwen-plus",
    "messages": [{"role": "user", "content": "你好，请用一句话介绍你自己"}]
  }'
```

若返回 JSON 且含 `choices`，说明 Key 与网络均正常。

---

## 四、辅助 · DeepSeek 开发者平台

当百炼免费额度用尽、或希望对比另一套模型时，可按下列步骤开通 DeepSeek。

### 4.1 注册与实名

1. 访问 [DeepSeek 开放平台](https://platform.deepseek.com/) 注册账号。
2. 完成**实名认证**（个人或企业）——未实名无法充值与稳定调用。

### 4.2 创建 API Key

1. 登录后进入左侧 **API keys**。
2. 点击 **创建 API key**，命名如 `机构简称-QoderWork-backup`。
3. **立即保存**以 `sk-` 开头的完整 Key（仅显示一次）。

### 4.3 充值

1. 进入 **充值** 页面，选择金额（建议首次 **50 元** 试跑）。
2. 使用支付宝或微信完成支付；新账号可能有赠送额度，以控制台为准。
3. 确认 **可用余额** 已更新；若调用报 402，检查是否已开通按量计费。

官方说明：[DeepSeek API 常见问题](https://api-docs.deepseek.com/zh-cn/faq)

### 4.4 在 QoderWork 中配置 DeepSeek

- **Base URL**：`https://api.deepseek.com`
- **API Key**：DeepSeek 控制台创建的 Key
- **模型名**：`deepseek-chat`（对话）或课程指定型号

---

## 五、安全与合规红线

| 规则 | 说明 |
|------|------|
| **禁止公开** | API Key 不得写入立项书、Git 仓库、公开文档或课程协作区 |
| **禁止硬编码** | 不要写在脚本源码里；使用环境变量或工具内置「密钥管理」 |
| **专人保管** | 建议仅 1–2 位课程接口人持有 Key；离职或换岗时删除旧 Key |
| **L4 数据** | 受益人、捐赠人、志愿者等敏感信息**禁止**通过未审核的第三方 API 处理 |
| **额度监控** | 开通余额预警；发现异常调用立即在控制台**删除 Key** |

---

## 六、课前自检清单

复制到本地，完成一项勾一项：

```markdown
## LLM API 课前自检

- [ ] 阿里云账号已注册并完成实名认证
- [ ] 百炼大模型服务已开通
- [ ] 已创建百炼 API Key（华北 2 北京）并安全保存
- [ ] 已了解免费额度范围；必要时已充值或设置余额预警
- [ ] （可选）DeepSeek 账号、Key、充值已完成
- [ ] 已在 QoderWork 试连一次，或确认第 1 课现场再配置
- [ ] 未将 Key 写入立项书或上传到公开渠道
```

---

## 七、常见问题

**Q：Agent平台 也要买 Token 吗？**  
A：不需要。Agent平台 Bot 使用平台内置模型，按 Agent平台 规则使用即可。

**Q：必须用阿里云吗？**  
A：个人层 QoderWork **必须**配置某一家的模型 API；课程推荐百炼为主、DeepSeek 为辅。组织层 Bot 仍走 Agent平台。

**Q：子账号可以操作吗？**  
A：可以。主账号在 RAM 中为子账号授予百炼「管理员」或「API-Key」页面权限即可。

**Q：免费额度用完了怎么办？**  
A：在阿里云费用中心充值，或切换到 DeepSeek 备选 Key；删除不再使用的 API Key 可立即停止计费。

**Q：开通时报「可用额度小于 0」？**  
A：先充值使阿里云账户余额 ≥ 0，再返回百炼开通服务。

---

## 八、与后续课程的衔接

| 准备项 | 用到哪节课 |
|--------|-----------|
| 百炼 / DeepSeek API Key | → 第 1 课：QoderWork 技能调试 |
| 同上 | → 第 2 课：本地知识库检索与命中率测试 |
| OpenClaw 试点（可选） | → 课程组代建时使用同一 Key 原则，密钥不进公开文档 |

→ 回到 [课前作业首页](./README.md) · [打开立项书模板](./templates/project_assistant_charter.md)
