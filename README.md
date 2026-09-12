# 亚洲不疾不徐 · Asia Unhurried

慢慢走亚洲：签证、支付、上网、交通，以及值得停下来的城市。不含中国大陆；覆盖香港、澳门、台湾及其他亚洲目的地。

本仓库是站点的 Vite + React 19 + TypeScript + Tailwind CSS v4 前端。

## 本地运行

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
npm run preview
```

## 路由

| 路径 | 页面 |
| --- | --- |
| `/` | 首页：米色矢量亚洲地图；香港、槟城可点，其余城市为「待写」 |
| `/places/hong-kong` | 香港城市页（总览、邻里、吃、实用、行程） |
| `/hong-kong` | 重定向到 `/places/hong-kong` |
| `/places/malaysia` | 马来西亚国家页（槟城可点；吉隆坡待写） |
| `/places/malaysia/penang` | 槟城城市页（住乔治市） |
| `/penang` | 重定向到 `/places/malaysia/penang` |

地图来自 `asiaMapData.ts` 的品牌米色 SVG，不是 Leaflet / OSM。图上没有中国大陆钉点。

## 技术栈

- Vite 8
- React 19
- TypeScript
- Tailwind CSS v4（`@tailwindcss/vite`）
- react-router-dom 7

## 说明

商店、签证、价格、评分等内容以源码为准，请勿凭空补写。图片放在 `public/images/`（邻里与一日游为 Wikimedia / Pexels；香港海港、槟城店屋主视觉与「吃」分类插画为手绘）。来源见 [CREDITS.md](CREDITS.md)。

开发服务器默认端口 `43123`：

```bash
npm run dev -- --host --port 43123
```

## 公开预览

本仓库尚未连接 Vercel。本地看构建结果：`npm run build && npm run preview`。以后在 Origin 仓库的 Apps 里接入 Vercel 即可得到 `*.vercel.app`（Origin 仓库为私有，按 Vercel 文档不能挂在 Hobby 团队上）。`vercel.json` 已写好 SPA 回退，连接后 `/` 与 `/places/malaysia/penang` 可直接打开。
