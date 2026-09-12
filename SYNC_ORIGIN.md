# GitHub 与 Origin 怎么配合 / How GitHub and Origin work together

这份说明是给非开发同事的：你只需要知道**两张桌子**各做什么，以及怎么把改动从一张桌子抄到另一张。

This note is for a non-developer: you only need two desks, what each desk is for, and how to copy work from one desk to the other.

---

## 一句话 / One sentence

| 桌子 Desk | 是什么 What it is | 用来做什么 Use it for |
| --- | --- | --- |
| **GitHub** `Hineni412/asia-unhurried` | ZCode / GLM 的工作桌 | 在 ZCode 里改代码、试效果 |
| **Cursor Origin** `894189001/asia-unhurried` | 正式舞台（source of truth） | Cursor 云代理、合并、**唯一**接到 Vercel 的仓库 |
| **Vercel** | 网站上线 | **只从 Origin 自动发布**。不要改接到 GitHub。 |

- GitHub = ZCode working desk  
- Origin = official stage; production deploys from Origin only  
- Do **not** reconnect Vercel to GitHub unless you first decide there is a **single** source of truth

官方生产地址仍是：**Origin → Vercel**。GitHub 只是副本，方便 ZCode 工作。

Production remains **Origin → Vercel**. GitHub is a working copy for ZCode.

GitHub 仓库：https://github.com/Hineni412/asia-unhurried  
Origin 仓库：https://origin.cursor.com/894189001/asia-unhurried

---

## 千万不要做的事 / Do not do this

**不要把 Vercel 重新连接到 GitHub。**

如果你在 Vercel 后台把 Git 仓库从 Origin 改成 GitHub（或同时接两个），网站可能发错版本，两套代码也会互相打架。除非你们已经开会决定「以后只认 GitHub」或「以后只认 Origin」，否则保持现在的做法：**Vercel 只跟 Origin**。

**Do not reconnect Vercel to GitHub.**

Changing Vercel’s Git source from Origin to GitHub (or connecting both) can ship the wrong site and fight over history. Unless you explicitly choose **one** source of truth, leave Vercel on Origin only.

---

## 在 ZCode 里怎么用 GitHub / Using GitHub in ZCode

1. 用 GitHub 登录 ZCode（账号需能打开 `Hineni412/asia-unhurried`）。  
2. 打开仓库 `Hineni412/asia-unhurried`，默认分支是 `main`。  
3. 在 ZCode 里改页面、文字、图片；改完后让 ZCode **提交（commit）并推送（push）到 GitHub**。  
4. 这时改动还只在 GitHub 上。网站（Vercel）**不会**因此更新。要把改动变成正式站，需要再同步到 Origin（下一节）。

1. Sign into ZCode with GitHub (an account that can open `Hineni412/asia-unhurried`).  
2. Open `Hineni412/asia-unhurried`, branch `main`.  
3. Edit in ZCode, then **commit and push to GitHub**.  
4. Vercel will **not** update yet. Copy the work to Origin (next section) for the official site.

---

## 把 GitHub 上的改动同步到 Origin / GitHub → Origin

目标：把 ZCode 在 GitHub 写好的内容，搬到 Origin，这样 Cursor / Vercel 才能用上。

Goal: copy ZCode’s GitHub work onto Origin so Cursor and Vercel can use it.

### 方法 A（推荐）：请 Cursor 云代理搬一次

把下面这段发给 Cursor 云代理即可（中英均可）：

> 请把 GitHub `Hineni412/asia-unhurried` 的 `main` 同步到 Origin `894189001/asia-unhurried`。不要改 Vercel。用 PR 合入 Origin，不要强推 main。

In English:

> Sync GitHub `Hineni412/asia-unhurried` `main` into Origin `894189001/asia-unhurried`. Do not change Vercel. Open an Origin PR; do not force-push `main`.

代理一般会：拉取 GitHub → 在 Origin 开一个 Pull Request（变更请求）→ 你在 Origin 网页上点 **Merge / 合并**。合并后，Vercel 才会按 Origin 发布。

The agent typically fetches GitHub, opens an Origin pull request, and you click **Merge**. Vercel publishes after that merge.

### 方法 B：会用电脑终端的人

在本机克隆 **Origin** 仓库后：

```bash
# 只加一次：把 GitHub 记成另一条远程
git remote add github https://github.com/Hineni412/asia-unhurried.git

git fetch github
git checkout -b sync-from-zcode
git pull github main --no-rebase
git push -u origin sync-from-zcode
```

然后在 Origin 网页用这条分支开 Pull Request，检查 diff 后合并。不要对 `main` 使用 `--force`。

Then open an Origin PR from that branch. Do **not** `--force` push `main`.

### 方法 C：不会用 Git 时

1. 打开 GitHub 仓库，点最新一次提交，看改了哪些文件。  
2. 把同样的文件改动做到 Origin（或请别人做成 PR）。  
3. 不要只把 zip 解压覆盖后强推，以免弄丢历史。

1. On GitHub, open the latest commit and see which files changed.  
2. Apply the same edits on Origin (or ask someone to open a PR).  
3. Do not unzip-and-force-push over history.

---

## 把 Origin 上的改动同步回 GitHub / Origin → GitHub

Cursor 云代理在 Origin 合并 PR 之后，GitHub 还停在旧版本。需要再抄回去，ZCode 才看得到。

After Cursor Cloud merges on Origin, GitHub is stale until you copy back. ZCode only sees GitHub.

### 方法 A（推荐）：请 Cursor 云代理推一次

> 请把 Origin `894189001/asia-unhurried` 的 `main` 推送到 GitHub `Hineni412/asia-unhurried` 的 `main`。不要改 Vercel，不要强制覆盖 GitHub 上尚未搬回 Origin 的新提交。

In English:

> Push Origin `894189001/asia-unhurried` `main` to GitHub `Hineni412/asia-unhurried` `main`. Do not change Vercel. Do not force-overwrite GitHub commits that are not on Origin yet.

### 方法 B：终端

```bash
git fetch origin
git fetch github
git checkout main
git pull origin main
git push github main
```

如果 GitHub 上还有 ZCode 的新提交还没搬到 Origin，**先做「GitHub → Origin」**，不要 `git push --force`。

If GitHub has ZCode commits not yet on Origin, **sync GitHub → Origin first**. Do not `git push --force`.

---

## 日常建议顺序 / Everyday order

1. **ZCode 改 GitHub** → 同步到 Origin → 合并 Origin PR → Vercel 发布。  
2. **Cursor 改 Origin** → 合并后 → 再推回 GitHub，ZCode 才能接着改。  
3. 两边都改过、还没同步时：先停手，请人把两边提交做成一个 PR，不要两边硬推。

1. **ZCode on GitHub** → sync to Origin → merge → Vercel.  
2. **Cursor on Origin** → after merge → push back to GitHub.  
3. If both sides changed: stop, combine in one PR, no force-push.

---

## 出问题怎么认 / Quick checks

- 网站没变：改动可能还在 GitHub，还没进 Origin。  
- ZCode 里看不到 Cursor 刚改的：还没从 Origin 推回 GitHub。  
- 突然出现很旧的页面：可能有人把 Vercel 接到了错误的仓库——立刻检查 Vercel 仍指向 Origin。

- Site unchanged: work is still only on GitHub.  
- ZCode missing Cursor’s edit: Origin was not copied back to GitHub.  
- Old site appears: Vercel may have been pointed at the wrong Git remote — confirm it still uses Origin.

---

## 技术备注 / Technical note

- Origin `main` 是生产源。GitHub `main` 应尽量与之对齐，但允许 GitHub 暂时超前（ZCode 尚未搬回）。  
- 本文件只说明工作流，**不改变** Vercel 项目设置。

- Origin `main` is production. GitHub `main` should track it, except when GitHub is briefly ahead with uncopied ZCode work.  
- This file documents workflow only. It does **not** change Vercel project settings.
