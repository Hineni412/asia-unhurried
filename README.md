# 亚洲不疾不徐 · Asia Unhurried

慢慢走亚洲：签证、支付、上网、交通，以及值得停下来的城市。不含中国大陆；覆盖香港、澳门、台湾及其他亚洲目的地。

本仓库是站点的 Vite + React 19 + TypeScript + Tailwind CSS v4 前端。

**正式上线走 Cursor Origin → Vercel。** GitHub `Hineni412/asia-unhurried` 只是给 ZCode / GLM 用的工作副本，不是生产源。两边怎么抄作业见 [SYNC_ORIGIN.md](SYNC_ORIGIN.md)（中英对照，给非开发同事）。不要把 Vercel 改接到 GitHub。

Production stays **Origin → Vercel**. The GitHub repo is a ZCode working desk only — see [SYNC_ORIGIN.md](SYNC_ORIGIN.md). Do not reconnect Vercel to GitHub.

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
| `/` | 首页：米色矢量亚洲地图；香港、槟城与其余 15 城均为完整城市页 |
| `/places/hong-kong` | 香港城市页（`?tab=` 切换总览 / 出行指南 / 街区与看点 / 住 / 吃 / 行程 / 安全与求助，默认总览） |
| `/hong-kong` | 重定向到 `/places/hong-kong` |
| `/places/malaysia` | 马来西亚国家页（槟城完整页；吉隆坡初版页） |
| `/places/malaysia/penang` | 槟城城市页（住乔治市；同样用 `?tab=` 切换主面板） |
| `/penang` | 重定向到 `/places/malaysia/penang` |
| `/places/hong-kong/attractions/:attractionId` | 大馆、M+、香港故宫文化博物馆、香港公园的独立详情 |
| `/places/malaysia/penang/attractions/:attractionId` | 侨生博物馆、邱公司、姓周桥、升旗山的独立详情 |
| `/places/japan` `/places/south-korea` `/places/taiwan` `/places/vietnam` `/places/thailand` | 国家页：城市列表 |
| `/places/japan/tokyo` `/places/japan/kyoto` `/places/japan/osaka` `/places/japan/fukuoka` `/places/south-korea/seoul` `/places/south-korea/jeju` `/places/south-korea/busan` `/places/taiwan/taipei` `/places/vietnam/hanoi` `/places/vietnam/hoi-an` `/places/thailand/chiang-mai` `/places/thailand/bangkok` `/places/malaysia/kuala-lumpur` `/places/macau` `/places/singapore` | 15 个完整城市页：与香港／槟城相同的 `?tab=` 分页（总览 / 出行指南 / 街区与看点 / 吃 / 行程 / 安全与求助；已写「住」内容的城市另有「住」tab），含店单、街区散步路线、行程与安全页 |
| `/places/*/attractions/:attractionId` | 15 城共 105 个景点的独立详情页（与香港／槟城同一 `AttractionPage`） |
| `/stay` | 怎么选住处：四步选房方法 + 各城预算语境汇总 |

地图来自 `asiaMapData.ts` 的品牌米色 SVG，不是 Leaflet / OSM。图上没有中国大陆钉点。国家与城市目录数据集中在 `src/content/directory.ts`（`COUNTRIES` / `CONTENT_CITIES`）。

15 城内容在 `src/content/cities/`：`types.ts` 定义 `CityContent`（与香港同构的完整模型），按国家分文件（japan / korea / taiwan / vietnam / thailand / malaysia / standalone），`index.ts` 汇总 `CITY_CONTENT`。各城景点记录在 `src/content/cities/attractions/`，与香港／槟城的 `src/content/attractions.ts` 合并为同一张表，共用 `AttractionPage` 详情路由。`DirectoryCityPage` 统一组装：`CityOverview`、`CityPlacesPanel`、`CityEatPanel` 与 `PracticalNotes` / `Itinerary` / `SafetyGuide` 六个面板，全部复用香港／槟城的组件与交互。照片经 `scripts/fetchCityPhotos.mjs` 从 Wikimedia Commons 抓取（校验许可、下载本地、逐图署名；每景点目标 4 张、城市图 1 张、每个吃品类 1 张实物图存 `public/images/eat/`，可用 `SKIP`/`QUERY`/`FOOD` 表修正抓错主体），产物为 `public/images/cities/`、`src/content/cities/photoData.ts`（`cityImages`/`cityAttractionPhotos`/`foodImages`）与 CREDITS.md 的受管区块。

## 出行指南与安全

出行指南保留 `?tab=practical`；安全页为 `?tab=safety`。旧 `?tab=verify`、`#verify` 会转到指南末尾的检查清单。具体主题支持 `#guide-mobile` 等定位，安全处理支持 `#safety-documents` 等定位。

指南内容位于 `src/content/hongKongGuide.ts` 和 `src/content/penangGuide.ts`，沿用现有分页和折叠组件。每项包含适用条件、步骤、完成标志、失败替代办法和来源；价格与联系方式按标注日期核对，不表示实时监控。原有短版实用／核验数据已迁移，避免维护两份相互冲突的说明。

购买入口提供已核对的官方产品页及明确标注的淘宝搜索；淘宝具体商家和商品未核验。csl 套餐表与部分条款流量不一致，页面已说明需在购买时确认。MDAC 官方登记页在本次浏览器核对中返回访问限制，使用公开官方入境说明整理指引，没有提交个人资料、完成真实购卡或进行实地乘车测试。

核验清单仅用于当前分页，离开分页或刷新后重置。官方步骤截图位于 `public/images/guides/`，各图含来源与截图日期；截图不是实时界面。

## 技术栈

排版调整与后续改进清单见 [DESIGN_REVIEW.md](DESIGN_REVIEW.md)。正文使用统一的 `text-body`（手机 19px、桌面 20px），辅助信息为 `text-small`（手机 17px、桌面 18px），注释为 `text-note`（16px）；食物分类采用小图与介绍并列，向下阅读时显示当前品类悬浮栏，餐厅条目在桌面分栏、手机顺序阅读。已实施的邻里与景点改版及设计依据见 [NEIGHBORHOOD_REDESIGN.md](NEIGHBORHOOD_REDESIGN.md)。

- Vite 8
- React 19
- TypeScript
- Tailwind CSS v4（`@tailwindcss/vite`）
- react-router-dom 7

## 说明

商店、签证、价格、评分等内容以源码为准，请勿凭空补写。图片放在 `public/images/`（邻里与一日游为 Wikimedia / Pexels；`cities/` 下 11 城图片为 Wikimedia Commons 授权图；香港海港、槟城店屋主视觉与「吃」分类插画为手绘）。来源见 [CREDITS.md](CREDITS.md)。

开发服务器默认端口 `43123`：

```bash
npm run dev -- --host --port 43123
```

## 公开预览

本仓库尚未连接 Vercel。本地看构建结果：`npm run build && npm run preview`。以后在 Origin 仓库的 Apps 里接入 Vercel 即可得到 `*.vercel.app`（Origin 仓库为私有，按 Vercel 文档不能挂在 Hobby 团队上）。`vercel.json` 已写好 SPA 回退，连接后 `/` 与 `/places/malaysia/penang` 可直接打开。

### 高优先级阅读流程（2026-09-12）

首页可直达香港、槟城行前准备。指南目录显示当前主题，手机可随时展开切换。餐厅提供带具体地址的地图搜索，与相关邻里互相跳转；不在现有散步范围的餐厅注明另排交通。邻里补有入口、返回、住宿取舍及路线来源，三晚／五晚行程分别提供完整四天／六天安排。地图是地址搜索，建议时长不是导航实测；本轮地址来源与验证边界见 DESIGN_REVIEW.md。

### 街区与看点、桌面宽度（2026-09-12）

街区页保留 `?tab=places`，类型与区域筛选保存在网址 `type` / `area` 参数中。景点以 `?section=booking` 等参数直达五类栏目；卡片进入详情后，返回列表会保留筛选和阅读位置。现有 `#area-*` 散步路线按需展开，餐厅与行程继续互相连接。

8 个景点共用 `AttractionPage`，内容与照片记录分别位于 `src/content/attractions.ts`、`src/content/attractionPhotos.ts`。每处 5–6 张实拍，桌面拼接、手机滑动、相册逐图署名；43 张景点展示中复用一张已有升旗山远景，其余图片及街区封面存放在 `public/images/attractions/`。官方截图、临时关闭公告和未明确的预约条件按页面标注处理，未提交真实订单。

布局复用 `.site-shell`，最大外框 1920px；1440px 窗口两侧约 48px，1920px 约 64px。窄屏保留 20px 边距，长段落限制行长，主要正文仍为手机 19px／桌面 20px。

### 「住」的片区比较与选房方法（2026-09-14）

首页精选卡改为 `src/content/featured.ts` 数据驱动（一行一座城，数组顺序即显示顺序），hero 快捷链接同样取自该列表。「住」是独立的 `?tab=stay` 分页，只在该城写了 `stay` 内容时出现（其余城市自动隐藏）：`src/content/stay.ts` 定义 `StayGuide`，城市内容的 `stay` 字段可选。每城写预算语境（¥700–800/晚上限在该城的定性档位与旺季提醒）、选房锚点与各片区的「适合谁／预算感受／交通锚点／吃饭半径／要接受的／别选」，不列具体酒店；片区可跳到对应散步路线，订房操作仍在「出行指南 · 住宿与入住」。`/stay` 页固化四步选房流程（定总价上限 → 用晚饭圈定片区 → 画十分钟步行圈 → 核对房型与规则），并自动汇总已写好比较的城市。17 城全部已写。

「住」tab 顶部为真实地图（Leaflet + `src/content/stayMap.ts` 注册表，按城市 slug 索引；每城数据在 `src/content/stayMaps/<slug>.ts`）：底图用 OpenStreetMap 数据（HOT 瓦片，`{s}.tile.openstreetmap.fr`，免 key 但只宜小规模使用），其上叠加 canvas 价位热力层、收录餐厅／看点／枢纽点位与行程动线；香港另有 data.gov.hk 区界细线（`src/content/stayMapGeoHK.ts`，由 `scripts/gen-stay-map-hk.mjs` 生成）。热力层按各片区的价位锚点（`StayMapZone.heat`，如「海旁贵、内街廉」）做逐像素 IDW 插值，绿→黄→红映射到该城价位区间——同一片区内部也有价差渐变。锚点与 `band` 区间按 `research/hotel-prices-*.md` 的近一年公开数据（Kayak / BudgetYourTrip / JLL / DMO 京都 ADR / 澳门统计局等）校准，是量级示意而非实测房价。地图上方可选「出行月份」：`StayMapData.season`（全城默认）与 `StayMapZone.season`（单区覆盖，如釜山海滨暑期峰更陡）给出一套典型月度系数——樱季、凉季、黄金周、台风季等相对波动，选中月份后热力场、悬停价位与预算置灰全部按系数重算；节假日单周尖峰在月度均值中被摊薄，图注已注明非实时价。各片区的完整判断（适合谁／预算感受／交通锚点／吃饭半径／要接受的／别选）收进片区弹窗：悬停显示价位，点击（或移动端点按）打开详情，图下不再重复文案；弹窗内链接走 SPA 路由回街区散步、订房检查与外部来源。输入每晚预算上限后，热力场内插值价位超过上限的像素逐点置灰——同一片区会呈现「够得着的留色、够不着的变灰」的真实分界，片区边框另以实线/虚线标示整体是否在预算内。点位与动线为示意位置、不作导航级精确，价位区间以订房平台实时价为准。全部 17 城均有地图数据；无地图数据时回退为文字比较。上量后应换有正式配额的瓦片服务（如 CARTO / Mapbox / Thunderforest，均需 key）。
