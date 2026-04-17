# Workflow

通用协作流程，不区分技术栈。所有模板默认遵循本文约定。

## 分支

- 主干分支：`master`，始终保持可发布状态，禁止直接 push
- 开发分支：从 `master` 切出，命名格式 `<type>/<slug>`
  - `feat/` 新功能
  - `fix/` 缺陷修复
  - `chore/` 杂项（依赖、配置、构建）
  - `docs/` 文档
  - `refactor/` 重构（不改变行为）
  - `test/` 仅测试改动
- slug 用短横线小写，例：`feat/user-login`、`fix/null-pointer-on-logout`

## 提交

遵循 [Conventional Commits](https://www.conventionalcommits.org/)：

```
<type>(<scope>): <subject>

<body>

<footer>
```

- `type` 与分支前缀一致（`feat` / `fix` / `chore` / `docs` / `refactor` / `test` / `perf` / `build` / `ci`）
- `scope` 可选，表示改动模块
- `subject` 祈使句，不超过 72 字符，句末不加句号
- 破坏性变更在 footer 标记 `BREAKING CHANGE: <说明>`
- 单个提交聚焦一件事；不把格式化、重构、功能混在一起

## Pull Request

1. 从 `master` 拉取最新代码并 rebase
2. 本地跑完 lint / 类型检查 / 测试再推送
3. PR 标题沿用 Conventional Commits 格式
4. PR 描述必须包含：
   - **动机**：为什么做这个改动
   - **方案**：做了什么，关键取舍
   - **验证**：如何验证（命令、截图、测试）
   - **影响**：兼容性、迁移步骤（如有）
5. 关联 issue 用 `Closes #123`
6. 草稿阶段用 Draft PR，别让 reviewer 在未完成代码上浪费时间

## Code Review

- 至少 1 名 reviewer 批准后才可合并
- Reviewer 关注：正确性、边界、可读性、测试覆盖；不纠结个人风格偏好
- Author 对每条评论明确回复：已修复 / 有异议（说明理由）/ 后续处理（开 issue）
- 分歧超过两轮仍未收敛，升级到同步讨论，讨论结论回写到 PR

## 合并

- 默认 **Squash merge**，保证 `master` 历史线性、每个 commit 对应一个 PR
- 合并信息使用 PR 标题，body 保留关键说明
- 合并后删除远程分支

## 发布

- 版本号遵循 [SemVer](https://semver.org/)：`MAJOR.MINOR.PATCH`
- Tag 格式 `v<version>`，例 `v1.2.0`
- 每次发布更新 `CHANGELOG.md`，按版本倒序分类列出 `Added` / `Changed` / `Fixed` / `Removed` / `Security`

## CI

- 每个 PR 必须绿灯才能合并
- CI 至少覆盖：依赖安装、lint、类型检查（如适用）、单元测试、构建
- 失败的 CI 先修，不靠重跑

## Hotfix

- 从受影响的发布 tag 切 `fix/` 分支
- 修复 → PR → 合回 `master` → 打新 patch tag
- 若涉及多个版本分支，逐个 cherry-pick，每个都走完整 PR 流程
