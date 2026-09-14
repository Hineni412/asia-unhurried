import type { Attraction } from '../../attractions'

const goTokyo = { label: '东京官方旅游指南 Go Tokyo', url: 'https://www.gotokyo.org/' }
const kyotoCity = { label: '京都市观光协会', url: 'https://kyoto.travel/' }

export const japanAttractions: Attraction[] = [
  {
    id: 'meiji-jingu', city: 'tokyo', name: '明治神宫', nameLocal: '明治神宮 Meiji Jingu', type: 'heritage', area: '涩谷／原宿', areaId: 'shinjuku',
    intro: '城市中心的大片常绿林与神社参道。清晨人少，鸟居与砂石路本身就是散步内容。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '免费参拜 · 无需预约',
      summary: '境内参拜免费，按当月开关门时间到访即可。宝物殿等个别设施另收费。',
      link: { label: '明治神宫官网', url: 'https://www.meijijingu.or.jp/' },
      rows: [
        { item: '境内参拜', ticket: '免费', reservation: '不需要；按当月开闭门时间到访' },
        { item: '宝物殿等设施', ticket: '另收费', reservation: '以现场与官网为准' },
      ],
      steps: [
        { title: '查当月开关门时间', body: '神宫随日出日落开关门，每月时间不同——官网每月更新，夏天早开晚闭。' },
        { title: '选一个入口进入', body: '原宿口（JR 原宿站／千代田线明治神宫前站）与代代木口是常用入口；保存入口名再动身。' },
        { title: '把参道当散步', body: '从鸟居到本殿约十分钟砂石路，放慢走；本殿参拜后原路或另一侧出口离开。' },
      ],
      fallback: '遇内部设施临时关闭时，境内散步不受影响；暴雨天改排室内馆。',
    },
    price: '境内免费', hours: '随日出日落，每月不同（官网每月公布）', address: '明治神宮，東京都渋谷区代々木神園町 1-1',
    highlights: [
      { title: '大鸟居与参道', body: '从原宿口进入先过一座大木鸟居，参道两侧是人工种植后自然成林的树木，城市的噪音在几十米内退下去。', photo: 0 },
      { title: '本殿参拜', body: '本殿前按神社惯例参拜（二拜二拍手一拜）。不求懂仪式，站着看别人怎么做也可以。', photo: 1 },
      { title: '清晨的林地', body: '开门时段进园人少，乌鸦和慢跑者是主要同伴。把它排在一天的开始，不占白天。', photo: 2 },
    ],
    walk: [
      { title: '原宿口进，慢慢走参道', body: '过鸟居前鞠躬与否随意，沿参道走中间两侧皆可；酒桶与奉献清酒陈列在参道中段。' },
      { title: '本殿与御苑', body: '本殿参拜后体力允许可加御苑（菖蒲田有名，另收费）；不想多走就直接去出口。' },
      { title: '接原宿或回新宿', body: '出来就是原宿竹下通／表参道方向，或沿代代木方向回新宿一侧吃饭。' },
    ],
    arrival: [
      { title: '轨道到达', body: 'JR 原宿站、千代田线／副都心线明治神宫前站最常用；小田急代代木八幡、JR 代代木也可进入。' },
      { title: '车辆', body: '参道入口不适合车停；打车到原宿站附近下车再走进来。' },
    ],
    tips: [
      { title: '开关门随月份变', body: '冬季闭园较早，傍晚行程先查当月时间；正月的初诣人潮另算。' },
      { title: '婚礼与法事常见', body: '遇到神前婚礼队伍保持礼让；本殿区域不喧哗、按标识拍摄。' },
    ],
    sources: [{ label: '明治神宫官网', url: 'https://www.meijijingu.or.jp/' }, goTokyo],
    restaurantIds: ['maisen'], related: ['shinjuku-gyoen', 'senso-ji'],
  },
  {
    id: 'senso-ji', city: 'tokyo', name: '浅草寺', nameLocal: '浅草寺 Sensō-ji', type: 'heritage', area: '浅草', areaId: 'asakusa',
    intro: '东京最古老的寺院与雷门商业街。赶早去，把白天的人流留给别人。', duration: '1–2 小时',
    booking: {
      status: 'walk-in', label: '境内自由 · 无需预约',
      summary: '寺域与仲见世通免费开放；本堂参拜时间随季节，清晨与傍晚都能走。',
      link: { label: '浅草寺官网', url: 'https://www.senso-ji.jp/' },
      rows: [
        { item: '境内与仲见世通', ticket: '免费', reservation: '不需要；商店约 09:00 后陆续开门' },
        { item: '本堂参拜', ticket: '免费', reservation: '按当日开堂时间' },
      ],
      steps: [
        { title: '决定走清晨还是白天', body: '想看安静的寺院就 07:00–08:00 到，仲见世还没开门；想看商店街就上午去，接受人流。' },
        { title: '保存出口信息', body: '银座线／浅草线／东武线都有浅草站，出口不同；雷门在多数出口的步行范围内。' },
        { title: '现场按顺序走', body: '雷门 → 仲见世通 → 宝藏门 → 本堂；抽签与御守在本堂旁。' },
      ],
      fallback: '人流过大时拐进寺域两侧的横町与藏前方向小店街，内容不比仲见世差。',
    },
    price: '免费', hours: '境内开放；本堂 06:00–17:00（10–3 月 06:30 开）', address: '浅草寺，東京都台東区浅草 2-3-1',
    highlights: [
      { title: '雷门大提灯', body: '雷门的红灯笼是下町的招牌。清晨拍干净，白天看的是人和人。', photo: 0 },
      { title: '仲见世通', body: '约 250 米的参道商店街，卖人形烧、雷公饼与纪念品。吃不靠它，但看江户门面值得。', photo: 1 },
      { title: '本堂与五重塔', body: '本堂前的香炉烟雾是固定画面；五重塔在寺域西侧，一并绕到。', photo: 2 },
    ],
    walk: [
      { title: '雷门到本堂一条线', body: '本站建议沿主参道走到底再拐两侧；回程走横町避开人潮。' },
      { title: '别错过寺域背面', body: '本堂东侧的庭园与传法院方向更安静，适合坐下歇脚。' },
      { title: '接藏前或隅田川', body: '体力有余往藏前手作街区走；想看水就往隅田川岸边走一段。' },
    ],
    arrival: [
      { title: '轨道到达', body: '东京地铁银座线、都营浅草线、东武晴空塔线各线浅草站；筑波特快也有浅草站（位置略远）。' },
      { title: '人力车与巴士', body: '雷门前有人力车候客（按时段议价）；都营巴士也有浅草线，行李多则打车到雷门附近。' },
    ],
    tips: [
      { title: '商店开门晚', body: '仲见世店铺多数 09:00 后开门，关门比景点早；想逛店就别赶早。' },
      { title: '周边商业拉客', body: '浅草一带有针对游客的高价店与拉客，按自己计划走，不跟带路人进无明码的店。' },
    ],
    sources: [{ label: '浅草寺官网', url: 'https://www.senso-ji.jp/' }, goTokyo],
    restaurantIds: ['kamiya-bar'], related: ['tsukiji-outer-market', 'tokyo-national-museum'],
  },
  {
    id: 'tokyo-national-museum', city: 'tokyo', name: '东京国立博物馆', nameLocal: '東京国立博物館', type: 'art', area: '上野', areaId: 'ueno',
    intro: '上野公园内的日本最老博物馆，本馆与东洋馆为主。选一两个馆看，别求全。', duration: '2–3 小时',
    booking: {
      status: 'partial', label: '常设展现场购票 · 特展另核',
      summary: '综合文化展（常设）现场购票即可；特别展可能需指定日期券，按官网当期公告为准。',
      link: { label: '东京国立博物馆', url: 'https://www.tnm.jp/' },
      rows: [
        { item: '综合文化展', ticket: '成人 ¥1,000（以官网为准）', reservation: '现场购票；高峰可线上买' },
        { item: '特别展', ticket: '按档期另计', reservation: '部分特展需日期指定，先查官网' },
      ],
      steps: [
        { title: '先看当期展览表', body: '官网列出本馆、东洋馆、法隆寺宝物馆与特展安排；常设展周一休馆（遇假日顺延）。' },
        { title: '只选一两个馆', body: '本馆看日本美术主线，东洋馆看亚洲文物；两馆认真看完已经很满。' },
        { title: '现场或线上购票', body: '常设展当日购票；特展按官网指引。保存票务邮件与开馆时间截图。' },
      ],
      fallback: '特展售罄时只看常设展仍值半天；闭馆日改上野公园散步或国立科学博物馆。',
    },
    price: '常设展 ¥1,000（以官网为准）', hours: '09:30–17:00；周一休馆（以官网为准）', address: '東京国立博物館，東京都台東区上野公園 13-9',
    highlights: [
      { title: '本馆的日本美术主线', body: '从绳文土器到浮世绘按时代排布，第一次看日本美术选这里一条线看完。', photo: 0 },
      { title: '东洋馆的亚洲收藏', body: '中国青铜、佛造像与朝鲜陶瓷集中在一栋楼里，动线比本馆松。', photo: 1 },
      { title: '上野公园的馆群环境', body: '博物馆嵌在公园与樱树之间，馆与馆之间走路本身就是休息。', photo: 2 },
    ],
    walk: [
      { title: '进园先认馆位', body: '上野公园内的博物馆群分散，从正门进先看园图，直奔选定的馆。' },
      { title: '本馆优先', body: '体力与注意力最好的时候给本馆；东洋馆放后段。' },
      { title: '出园接谷根千', body: '午后从公园北口方向往谷中走，商店街傍晚收得早。' },
    ],
    arrival: [
      { title: '轨道到达', body: 'JR 上野站公园口步行约 10 分钟；京成线上野站同样方向。' },
      { title: '园内步行', body: '车辆只能到园外道路；把博物馆定位设为正门口。' },
    ],
    tips: [
      { title: '周一闭馆别扑空', body: '周一休馆（遇假日次日休）；连假与樱季人多。' },
      { title: '馆内拍照规则', body: '常设展多数区域可拍但禁闪光灯，特展另有规定，以现场标识为准。' },
    ],
    sources: [{ label: '东京国立博物馆', url: 'https://www.tnm.jp/' }, goTokyo],
    restaurantIds: [], related: ['senso-ji', 'meiji-jingu'],
  },
  {
    id: 'shinjuku-gyoen', city: 'tokyo', name: '新宿御苑', nameLocal: '新宿御苑', type: 'nature', area: '新宿', areaId: 'shinjuku',
    intro: '收费的国民公园，人比免费公园少，草坪能坐下。樱枫季是主场，平日是喘息地。', duration: '1.5–2.5 小时',
    booking: {
      status: 'walk-in', label: '现场购票入园',
      summary: '入园门票 ¥500（以官网为准），门口购票或刷交通 IC 卡；周一休园。',
      link: { label: '新宿御苑官网', url: 'https://www.fng.or.jp/shinjuku/' },
      rows: [
        { item: '入园门票', ticket: '成人 ¥500（以官网为准）', reservation: '现场购票；旺季建议线上预购' },
        { item: '温室', ticket: '含在门票内', reservation: '按园内开放时间' },
      ],
      steps: [
        { title: '确认休园日', body: '周一休园（遇假日顺延次日）；樱枫季可能有延长或整理安排。' },
        { title: '选门进园', body: '新宿门、大木户门、千駄谷门三个入口；住新宿站方向走新宿门。' },
        { title: '带一张园内地图', body: '园地约 58 公顷，按地图选一块草坪或庭园坐下，不必走遍。' },
      ],
      fallback: '休园日改明治神宫或代代木公园；门票政策变动以官网为准。',
    },
    price: '成人 ¥500（以官网为准）', hours: '09:00–16:30（以官网为准）；周一休园', address: '新宿御苑，東京都新宿区内藤町 11',
    highlights: [
      { title: '三种庭园并排', body: '日式、法式、英式庭园在同一片地里并排出现，走一圈就是三种造园逻辑。', photo: 0 },
      { title: '草坪可以坐', body: '与多数东京公园不同，这里草坪允许坐卧——便利店买的饭团在这里就是一顿。', photo: 1 },
      { title: '樱花与红叶', body: '樱季与枫季的门票最值；旺季人多但园子大，往深处走人很快散开。', photo: 2 },
    ],
    walk: [
      { title: '新宿门进，先看日本庭园', body: '从站前方向进来先走低处水岸与桥，再往温室方向。' },
      { title: '选一块草地坐下', body: '本站建议把「坐下」当作内容而不是间隙；带水和吃的进来（垃圾带出）。' },
      { title: '从千駄谷或大木户门出', body: '按下一个目的地选出口：千駄谷门去明治神宫外苑方向，大木户门回新宿站。' },
    ],
    arrival: [
      { title: '轨道到达', body: '丸之内线新宿御苑前站最方便；JR 新宿站南口步行约 10 分钟到新宿门。' },
      { title: '园内无车', body: '园内不能驾车或骑车；打车到新宿门／大木户门下车。' },
    ],
    tips: [
      { title: '不能带酒进园', body: '园内禁酒（与其他日本公园不同）；野餐可以，饮酒不行。' },
      { title: '旺季早到', body: '樱枫季开门前后最安静；午后入场先查售票截止时间。' },
    ],
    sources: [{ label: '新宿御苑官网', url: 'https://www.fng.or.jp/shinjuku/' }, goTokyo],
    restaurantIds: ['fuunji'], related: ['meiji-jingu'],
  },
  {
    id: 'imperial-east-gardens', city: 'tokyo', name: '皇居东御苑', nameLocal: '皇居東御苑', type: 'nature', area: '丸之内', areaId: 'nihonbashi-ginza',
    intro: '旧江户城本丸改作的庭园，免费入园。石垣与护城河比宫殿好看。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '免费入园 · 注意休园日',
      summary: '东御苑免费开放，周一与周五通常休园（遇假日另有安排）；皇居一般参观是另一回事，需另预约。',
      link: { label: '宫内厅参观信息', url: 'https://www.kunaicho.go.jp/' },
      rows: [
        { item: '东御苑', ticket: '免费', reservation: '不需要；入口领取入园牌' },
        { item: '皇居一般参观（宫内厅预约制）', ticket: '免费', reservation: '需事前网上预约，名额有限' },
      ],
      steps: [
        { title: '先分清两处', body: '东御苑直接走进；「皇居参观」是宫内厅导览团，要预约。别排错。' },
        { title: '核对休园日', body: '周一、周五休园（以宫内厅公告为准）；出发前看一眼官网。' },
        { title: '入口领牌', body: '大手门、平川门、北桔桥门三个入口；入园领牌、出园归还。' },
      ],
      fallback: '休园日改日比谷公园或千鸟渊绿道散步；皇居参观没约到就算了，东御苑已足够。',
    },
    price: '免费', hours: '09:00–16:30（随季节）；周一、周五休园', address: '皇居東御苑，東京都千代田区千代田 1-1',
    highlights: [
      { title: '江户城的石垣', body: '巨石垒出的城墙是本物；站在大手门下看，比看照片能理解江户城的尺度。', photo: 0 },
      { title: '本丸与二之丸庭园', body: '本丸是开阔草坪，二之丸是修剪整齐的日式庭园；两处气质不同，都值得走。', photo: 1 },
      { title: '从苑内看东京站方向', body: '苑内高处能看见丸之内的楼群——旧城与新城隔着护城河对望。', photo: 2 },
    ],
    walk: [
      { title: '大手门进', body: '从东京站方向最近的是大手门；进门领入园牌。' },
      { title: '本丸草坪绕一圈', body: '沿石垣下走一圈，看天守台遗迹；体力好再加二之丸。' },
      { title: '北桔桥门出接千鸟渊', body: '春天这一侧是樱名所；平日走它出门就是安静的护城河绿道。' },
    ],
    arrival: [
      { title: '轨道到达', body: '东京站步行约 5–10 分钟到大手门；地铁大手町站、竹桥站对应不同门。' },
      { title: '苑内无车', body: '打车到大手门前下车；护城河一圈适合跑步与散步。' },
    ],
    tips: [
      { title: '周一五休园', body: '最容易扑空的规则就是休园日；把东御苑排在周二至周四或周末。' },
      { title: '与「皇居参观」分开', body: '想进本丸深处的宫殿区要另约宫内厅导览；没约到不必遗憾。' },
    ],
    sources: [{ label: '宫内厅参观信息', url: 'https://www.kunaicho.go.jp/' }, goTokyo],
    restaurantIds: ['rokurinsha'], related: ['tokyo-national-museum'],
  },
  {
    id: 'tsukiji-outer-market', city: 'tokyo', name: '筑地场外市场', nameLocal: '築地場外市場', type: 'waterfront', area: '筑地',
    intro: '场内批发已迁丰洲，场外市场仍在原址。上午去，当早餐加散步。', duration: '1.5–2 小时',
    booking: {
      status: 'walk-in', label: '开放市场 · 随到随走',
      summary: '场外市场是一片街巷与店面，无门票；店家各自营业，多数早开午收。',
      link: { label: '筑地食の街', url: 'https://www.tsukiji.or.jp/' },
      rows: [
        { item: '市场街区', ticket: '免费', reservation: '不需要；约 05:00–14:00 最热闹' },
        { item: '用餐', ticket: '按店自付', reservation: '热门店排队；食券机或现金为主' },
      ],
      steps: [
        { title: '确认目标是「场外」', body: '导航认「築地場外市場」；丰洲是另一处批发市场，别跑错。' },
        { title: '上午去', body: '多数店家中午前后收摊；09:00–11:00 是密度与新鲜度的平衡点。' },
        { title: '先走一圈再坐下吃', body: '看清巷内格局再选店：玉子烧、海鲜饭、牛杂煮各有所长，别在第一巷吃饱。' },
      ],
      fallback: '雨天照常营业但有顶棚的巷内更舒服；店家公休不统一，某店关门就换一家。',
    },
    price: '免费', hours: '店家多为 05:00–14:00 前后', address: '築地場外市場，東京都中央区築地 4 丁目',
    highlights: [
      { title: '场外横丁', body: '几条窄巷里塞着鱼铺、玉子烧、干货与小吃摊；走两遍比走一遍有意思。', photo: 0 },
      { title: '玉子烧与立食', body: '丸武的玉子烧串是这里的定番；站着吃完继续走。', photo: 1 },
      { title: '筑地本愿寺在旁边', body: '市场西侧的筑地本愿寺是少见的印度样式佛殿，免费入内，顺路一看。', photo: 2 },
    ],
    walk: [
      { title: '从本愿寺方向进', body: '先沿晴海通走，再拐进横丁；逆着人流走更容易看清摊面。' },
      { title: '吃在巷内，不在主路', body: '主路口的店排队最长；往里走同品类人更少。' },
      { title: '留胃给一家坐下来的店', body: '吃完带走的东西，找一家食堂坐下喝碗汤收尾。' },
    ],
    arrival: [
      { title: '轨道到达', body: '日比谷线筑地站或都营大江户线筑地市场站；从银座步行亦可。' },
      { title: '车辆', body: '巷内不适合车；打车到筑地本愿寺或晴海通下车。' },
    ],
    tips: [
      { title: '场内≠场外', body: '丰洲是新的批发市场（另有参观安排），筑地剩下的是场外——别混淆两个地名。' },
      { title: '现金与小份', body: '摊头多收现金；想多尝就买小份分着吃。' },
    ],
    sources: [{ label: '筑地食の街', url: 'https://www.tsukiji.or.jp/' }, goTokyo],
    restaurantIds: ['kitsuneya', 'marutake'], related: ['senso-ji'],
  },
  {
    id: 'kiyomizu-dera', city: 'kyoto', name: '清水寺', nameLocal: '清水寺 Kiyomizu-dera', type: 'heritage', area: '东山',
    intro: '悬造舞台与二年坂三年坂的坡道。清晨的清水寺和白天是两座寺。', duration: '1.5–2 小时',
    booking: {
      status: 'walk-in', label: '现场购票参拜',
      summary: '本堂与舞台参拜收费（成人约 ¥500，以官网为准）；06:00 开门，清晨时段体验完全不同。',
      link: { label: '清水寺官网', url: 'https://www.kiyomizudera.or.jp/' },
      rows: [
        { item: '本堂与舞台', ticket: '成人约 ¥500（以官网为准）', reservation: '现场购票' },
        { item: '夜间特别参拜（春秋限定）', ticket: '另公告', reservation: '按当季公告安排' },
      ],
      steps: [
        { title: '决定清晨还是傍晚', body: '06:00 开门人最少；黄昏光线好但人多。中午与午后是最挤时段。' },
        { title: '从哪侧上山', body: '清水坂／二年坂三年坂两条主线上山，坡道步行 10–15 分钟；出租车可到附近下车点。' },
        { title: '现场购票入内', body: '本堂舞台一线买票进入；音羽之瀧在寺域下方，顺路看。' },
      ],
      fallback: '人太多时把参拜缩短，把时间给二年坂三年坂的慢走；雨天坡道湿滑，改乘出租车到更近的下车点。',
    },
    price: '参拜料约 ¥500（以官网为准）', hours: '06:00–18:00（随季节与特别参拜变动）', address: '清水寺，京都府京都市東山区清水 1-294',
    highlights: [
      { title: '清水舞台', body: '悬在坡上的本堂舞台是京都最经典的取景框；站在台上回头看的是东山与京都市景。', photo: 0 },
      { title: '二年坂三年坂', body: '寺下的石板坡道两侧是老町家店面，清晨几乎没有游客——这时候才是老街本身。', photo: 1 },
      { title: '音羽之瀧', body: '寺域下方的三道水流，排队接水祈福是传统节目；人多就看看，不必排。', photo: 2 },
    ],
    walk: [
      { title: '清水坂上山', body: '从五条坂或清水坂步行上山；坡道两侧是老铺，但先走上去再说。' },
      { title: '舞台与奥之院', body: '本堂舞台看景，奥之院回望舞台本身——「清水舞台」最好的角度其实在对面。' },
      { title: '下山走三年坂二年坂', body: '下山拐进石板坡道，接八坂之塔方向；这一段才是东山的散步精华。' },
    ],
    arrival: [
      { title: '巴士与步行', body: '市巴士清水道或五条坂下车步行约 10 分钟上坡；祇园四条、清水五条站步行约 20 分钟。' },
      { title: '出租车', body: '可送到参道入口附近下车点，最后一段仍是步行坡道。' },
    ],
    tips: [
      { title: '赶早是唯一的窍门', body: '06:00–08:00 的清水寺几乎是另一个景点；09:00 后人流指数上升。' },
      { title: '坡道与鞋', body: '全程坡道与石板路，穿适合走路的鞋；雨天石坂湿滑。' },
    ],
    sources: [{ label: '清水寺官网', url: 'https://www.kiyomizudera.or.jp/' }, kyotoCity],
    restaurantIds: [], related: ['ginkaku-ji', 'nishiki-market'],
  },
  {
    id: 'kinkaku-ji', city: 'kyoto', name: '金阁寺', nameLocal: '鹿苑寺 Kinkaku-ji', type: 'heritage', area: '北山',
    intro: '镜湖池畔的金箔楼阁。景点单一但真物在场，配北山或嵯峨方向排半天。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '现场购票参拜',
      summary: '参拜料成人约 ¥500（以寺方公布为准）；单向参观动线，顺着走一圈约 40 分钟。',
      link: { label: '鹿苑寺（金阁寺）', url: 'https://www.shokoku-ji.jp/kinkakuji/' },
      rows: [
        { item: '庭园参拜', ticket: '成人约 ¥500（以寺方公布为准）', reservation: '现场购票' },
      ],
      steps: [
        { title: '北山方向半天安排', body: '金阁寺在市区西北，单独跑一趟不划算——与龙安寺或仁和寺方向一起排。' },
        { title: '巴士直达', body: '市巴士金阁寺道下车即达；开门时段人最少。' },
        { title: '按动线走一圈', body: '入口 → 镜湖池畔看金阁 → 绕后山 → 出口茶店；单向线不用动脑。' },
      ],
      fallback: '只想看一处金色楼阁就别排别的寺；金阁寺看完时间多半还早，顺路加龙安寺石庭。',
    },
    price: '参拜料约 ¥500（以寺方公布为准）', hours: '09:00–17:00', address: '鹿苑寺，京都府京都市北区金閣寺町 1',
    highlights: [
      { title: '镜湖池的金阁', body: '三层楼阁倒映在池面是定番画面；晴天与雪天各有各的好。', photo: 0 },
      { title: '庭园动线', body: '绕池一圈的参道设计成熟，每个角度都留过取景位。', photo: 1 },
      { title: '夕佳亭与出口茶店', body: '后山的茶室与动线尽头的茶店适合坐下收尾，不急走。', photo: 2 },
    ],
    walk: [
      { title: '镜湖池先停', body: '进园先到池畔看主景，再顺动线绕后山。' },
      { title: '后山看细节', body: '金阁只能外观不能入内；后山的泉、石与夕佳亭补足内容。' },
      { title: '接龙安寺或仁和寺', body: '同方向各约 20 分钟步程（或一站巴士），排在一半天里合适。' },
    ],
    arrival: [
      { title: '巴士', body: '市巴士「金阁寺道」下车步行 1 分钟；从京都站有直达线路（班次以市巴士案内为准）。' },
      { title: '出租车', body: '从市中心打车约 20–30 分钟；回程在金阁寺道上车。' },
    ],
    tips: [
      { title: '只能外观', body: '金阁内部不公开；门票实质是庭园参拜。' },
      { title: '与北山打包', body: '单跑一趟耗时，和龙安寺、仁和寺放同方向半天最合理。' },
    ],
    sources: [{ label: '鹿苑寺（金阁寺）', url: 'https://www.shokoku-ji.jp/kinkakuji/' }, kyotoCity],
    restaurantIds: [], related: ['ginkaku-ji'],
  },
  {
    id: 'ginkaku-ji', city: 'kyoto', name: '银阁寺', nameLocal: '慈照寺 Ginkaku-ji', type: 'heritage', area: '左京·哲学之道',
    intro: '东山山脚的侘寂庭园与银阁。连哲学之道一起走，是京都最舒服的半天。', duration: '1–1.5 小时（加哲学之道 2.5 小时）',
    booking: {
      status: 'walk-in', label: '现场购票参拜',
      summary: '参拜料成人约 ¥500（以寺方公布为准）；庭园依山而上，动线清晰。',
      link: { label: '慈照寺（银阁寺）', url: 'https://www.shokoku-ji.jp/ginkakuji/' },
      rows: [
        { item: '庭园参拜', ticket: '成人约 ¥500（以寺方公布为准）', reservation: '现场购票' },
      ],
      steps: [
        { title: '与哲学之道打包', body: '银阁寺是哲学之道的北端点；先走寺再走道，或反向，都是好安排。' },
        { title: '巴士到银阁寺道', body: '市巴士银阁寺道下车步行约 10 分钟；清晨开门时人少。' },
        { title: '上山看全景', body: '庭园内有上山路，登高看银阁与京都市区是内容之一。' },
      ],
      fallback: '雨天庭园石径湿滑，缩短山路部分；银阁寺本身不大，别指望它占满一天。',
    },
    price: '参拜料约 ¥500（以寺方公布为准）', hours: '08:30–17:00（冬季 09:00–16:30）', address: '慈照寺，京都府京都市左京区銀閣寺町 2',
    highlights: [
      { title: '银阁与锦洗池', body: '没有贴银的「银阁」是侘寂的教材；锦洗池边的角度最经典。', photo: 0 },
      { title: '向月台与银沙滩', body: '白砂堆成的向月台与银沙滩是寺里最出片的造形——细看砂的棱线。', photo: 1 },
      { title: '上山路回望', body: '沿庭园上山路走一段，从高处看银阁与屋顶连成的线，值回票价。', photo: 2 },
    ],
    walk: [
      { title: '庭园先绕一圈', body: '按动线绕池走，看银沙滩与向月台；再决定是否上山。' },
      { title: '哲学之道南行', body: '出寺接哲学之道往南走约 2 公里，樱季这里是花廊。' },
      { title: '法然院或永观堂收尾', body: '沿途有法然院等寺社可拐进去；走到底接南禅寺方向。' },
    ],
    arrival: [
      { title: '巴士', body: '市巴士「银阁寺道」下车步行约 10 分钟；从京都站、河原町方向均有线路。' },
      { title: '从南禅寺北上', body: '反向走哲学之道亦可；南端起点在南禅寺附近。' },
    ],
    tips: [
      { title: '哲学之道一起走', body: '单看银阁寺内容偏薄，与哲学之道、法然院连成半天才是正确打开方式。' },
      { title: '樱季早到', body: '哲学之道樱季人流密集；赶在 09:00 前到银阁寺体验最好。' },
    ],
    sources: [{ label: '慈照寺（银阁寺）', url: 'https://www.shokoku-ji.jp/ginkakuji/' }, kyotoCity],
    restaurantIds: [], related: ['kiyomizu-dera', 'kinkaku-ji'],
  },
  {
    id: 'fushimi-inari', city: 'kyoto', name: '伏见稻荷大社', nameLocal: '伏見稲荷大社', type: 'heritage', area: '伏见',
    intro: '千本鸟居一路排到山顶。多数人走前 15 分钟就折返——往上走人立刻少。', duration: '1.5–2.5 小时',
    booking: {
      status: 'walk-in', label: '免费参拜 · 全天开放',
      summary: '境内全天开放免费参拜；山道无门票无闸机，走多少随你。',
      link: { label: '伏见稻荷大社官网', url: 'https://inari.jp/' },
      rows: [
        { item: '境内参拜与山道', ticket: '免费', reservation: '不需要；24 小时开放' },
      ],
      steps: [
        { title: '决定走到哪', body: '千本鸟居一段最挤；走到四つ辻（约 40 分钟）人流明显减少，山顶约需 1.5–2 小时往返。' },
        { title: '赶早或傍晚', body: '清晨与傍晚人少；夜间山道有照明但请量力。' },
        { title: 'JR 稻荷站直达', body: 'JR 奈良线稻荷站就在门口；京阪伏见稻荷站稍远。' },
      ],
      fallback: '下雨或体力不够就只走千本鸟居前段折返；山顶视野其实一般，不必有执念。',
    },
    price: '免费', hours: '全天开放（社务所与授与所约 08:30–16:30）', address: '伏見稲荷大社，京都府京都市伏見区深草薮之内町 68',
    highlights: [
      { title: '千本鸟居', body: '朱红鸟居连绵成隧道是招牌画面；越往上走人越少、越像它本来的样子。', photo: 0 },
      { title: '狐狸与稻荷信仰', body: '境内到处是衔着钥匙或宝珠的狐像——稻荷神的使者，看细节比看鸟居有趣。', photo: 1 },
      { title: '山道中的茶店与眺望', body: '半山腰的茶店与眺望台是休息点；四つ辻能俯瞰京都市区。', photo: 2 },
    ],
    walk: [
      { title: '楼门到千本鸟居', body: '先过楼门与本殿，再进鸟居隧道；前段人多，拍人不如走人。' },
      { title: '走到四つ辻再决定', body: '约 40 分钟到眺望点；继续上山顶约再加一倍时间，按体力决定。' },
      { title: '原路或环线回', body: '山道有环线可回，按标识走；雨天石阶湿滑。' },
    ],
    arrival: [
      { title: 'JR 稻荷站', body: 'JR 奈良线稻荷站出口即到；从京都站两站约 5 分钟。' },
      { title: '京阪', body: '京阪本线伏见稻荷站步行约 5 分钟。' },
    ],
    tips: [
      { title: '山道无补给上限', body: '越高越安静但补给点少；带水，穿能走路的鞋。' },
      { title: '夜间谨慎', body: '24 小时开放不等于适合夜爬；傍晚后只走前段，结伴并带灯。' },
    ],
    sources: [{ label: '伏见稻荷大社官网', url: 'https://inari.jp/' }, kyotoCity],
    restaurantIds: [], related: ['kiyomizu-dera'],
  },
  {
    id: 'tenryu-ji', city: 'kyoto', name: '天龙寺', nameLocal: '天龍寺 Tenryū-ji', type: 'heritage', area: '岚山',
    intro: '岚山曹源池庭园，世界遗产。出北门就是竹林道，两个内容一次走完。', duration: '1–1.5 小时（加竹林 2 小时）',
    booking: {
      status: 'walk-in', label: '现场购票参拜',
      summary: '庭园参拜收费（成人约 ¥500，以寺方公布为准）；诸堂参拜另计。北门直通竹林道。',
      link: { label: '天龙寺官网', url: 'https://www.tenryuji.com/' },
      rows: [
        { item: '庭园', ticket: '成人约 ¥500（以寺方公布为准）', reservation: '现场购票' },
        { item: '诸堂参拜', ticket: '另收费', reservation: '现场购票' },
      ],
      steps: [
        { title: '岚山半天打包', body: '天龙寺＋竹林道＋渡月桥是岚山主线；再加保津川或常寂光寺看体力。' },
        { title: '从庭园门进', body: '庭园入口在岚山站附近；参拜后从北门出就是竹林道。' },
        { title: '赶早', body: '竹林道 09:00 后人流上升；清晨的竹林是另一个景点。' },
      ],
      fallback: '人多时把竹林缩短，去大河内山庄或常寂光寺方向——岚山的好处是替代路线多。',
    },
    price: '庭园约 ¥500（以寺方公布为准）', hours: '08:30–17:00（以寺方公布为准）', address: '天龍寺，京都府京都市右京区嵯峨天龍寺芒ノ馬場町 68',
    highlights: [
      { title: '曹源池庭园', body: '借景岚山的池泉回游式庭园，坐在方丈前廊看池是最正确的姿势。', photo: 0 },
      { title: '竹林道', body: '北门外的竹林小径是岚山的招牌；清晨或雨天人最少。', photo: 1 },
      { title: '渡月桥与保津川', body: '寺外步行即达的渡月桥看保津川；岚山整体的山水是主角。', photo: 2 },
    ],
    walk: [
      { title: '庭园坐一会', body: '别赶——曹源池适合坐在廊下看十分钟。' },
      { title: '北门出接竹林', body: '出北门即竹林道入口；顺人流走即可。' },
      { title: '竹林尽头选方向', body: '往野宫神社、常寂光寺方向走安静；回渡月桥方向热闹。' },
    ],
    arrival: [
      { title: '轨道到达', body: 'JR 嵯峨岚山站步行约 10 分钟；阪急岚山站、岚电岚山站均可。' },
      { title: '从市区', body: '京都站乘 JR 山阴本线约 15 分钟；巴士也有但慢。' },
    ],
    tips: [
      { title: '竹林道免费但人多', body: '竹林道本身无门票；赶早或赶晚是它的正确时段。' },
      { title: '岚山留半天', body: '天龙寺只是岚山的一部分；给整个片区留半天以上。' },
    ],
    sources: [{ label: '天龙寺官网', url: 'https://www.tenryuji.com/' }, kyotoCity],
    restaurantIds: [], related: ['kinkaku-ji', 'kiyomizu-dera'],
  },
  {
    id: 'nishiki-market', city: 'kyoto', name: '锦市场', nameLocal: '錦市場', type: 'waterfront', area: '河原町',
    intro: '「京都的厨房」，一条 400 米的商店街。边走边尝比坐下吃一顿更合适。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '开放商店街',
      summary: '免费进入的商店街；店铺多为 10:00–18:00 前后营业，傍晚收得早。',
      link: { label: '锦市场商店街', url: 'https://www.kyoto-nishiki.or.jp/' },
      rows: [
        { item: '商店街', ticket: '免费', reservation: '不需要；店铺营业约 10:00–18:00' },
      ],
      steps: [
        { title: '中午前后去', body: '店铺午前陆续开门，傍晚收摊；11:00–15:00 是最合适的时段。' },
        { title: '边走边吃注意规则', body: '近年提倡在店门口或店内吃，边走边吃被劝阻的店增多——看各家标识。' },
        { title: '挂到河原町半天', body: '锦市场夹在四条通与三条通之间，与河原町、寺町通散步连起来。' },
      ],
      fallback: '拥挤或店休多时转寺町通、新京极商店街，吃与买的内容差不多。',
    },
    price: '免费', hours: '店铺多为 10:00–18:00', address: '錦市場，京都府京都市中京区錦小路通',
    highlights: [
      { title: '400 米食材一条街', body: '豆腐、汤叶、渍物、玉子烧、海鲜串——京都厨房的日常在这里摊开。', photo: 0 },
      { title: '三木鸡卵与豆乳甜甜圈', body: '玉子烧老铺与豆浆甜甜圈是市场定番；现做现吃。', photo: 1 },
      { title: '锦天满宫在尽头', body: '商店街东端的神社，灯笼好看；走到底顺便一拜。', photo: 2 },
    ],
    walk: [
      { title: '从西端进', body: '从寺町通一侧进锦小路，走到底接新京极方向。' },
      { title: '每家只尝一口', body: '玉子烧一串、甜甜圈一份、渍物试吃——份量留给品类数。' },
      { title: '接寺町通', body: '出来往南接寺町通老铺街，或往北去三条通咖啡。' },
    ],
    arrival: [
      { title: '轨道到达', body: '阪急京都线京都河原町站步行约 5 分钟；地铁乌丸线四条站亦可。' },
      { title: '步行串联', body: '与四条通、寺町通、新京极在同一网格内，纯步行。' },
    ],
    tips: [
      { title: '边走边吃规矩', body: '部分店要求店内或店门口吃完再走；看标识，别边走边啃。' },
      { title: '傍晚收得早', body: '17:00 后店铺陆续关门；把锦市场排在中午前后。' },
    ],
    sources: [{ label: '锦市场商店街', url: 'https://www.kyoto-nishiki.or.jp/' }, kyotoCity],
    restaurantIds: ['miki-keiran', 'konna-monja', 'owariya'], related: ['kiyomizu-dera'],
  }
,
  {
    id: 'osaka-castle', city: 'osaka', name: '大阪城', nameLocal: '大阪城 Osaka Castle', type: 'heritage', area: '大阪城公园', areaId: 'osaka-castle-park',
    intro: '石垣、护城河与重建天守阁。看点在石垣与整座公园，登不登天守看兴致。', duration: '1.5–2.5 小时',
    booking: {
      status: 'partial', label: '公园免费 · 天守阁购票',
      summary: '大阪城公园免费开放；天守阁为收费博物馆，现场购票或官网查当前票价。',
      link: { label: '大阪城官网', url: 'https://www.osakacastle.net/' },
      rows: [
        { item: '公园全域', ticket: '免费', reservation: '不需要' },
        { item: '天守阁', ticket: '收费（以官网为准）', reservation: '现场购票；旺季可官网预查' },
      ],
      steps: [
        { title: '先决定登不登阁', body: '天守阁是 1931 年重建的博物馆——看展品与顶层视野；只想散步的留公园内即可。' },
        { title: '选一个入口进园', body: '谷町四丁目侧近天守正面，森之宫侧适合从南进入；JR 大阪城公园站最顺。' },
        { title: '清晨或傍晚走护城河', body: '白天旅行团多；早上走石垣与护城河一段更松。' },
      ],
      fallback: '天守阁排长队时只看石垣与二之丸庭园；雨天改大阪历史博物馆（谷町四丁目旁）。',
    },
    price: '公园免费；天守阁收费', hours: '公园全天；天守阁约 09:00–17:00（以官网为准）', address: '大阪城，大阪市中央区大阪城1-1',
    highlights: [
      { title: '巨石石垣', body: '天守台座与内堀的大块花岗岩是这座城真正老的部分——比重建天守本身耐看。', photo: 0 },
      { title: '天守阁顶层', body: '八层展望台环看市区；展品讲丰臣与德川两段建城史。', photo: 1 },
      { title: '西之丸庭园草坪', body: '庭园草坪正对天守，樱花季与平日傍晚都松。', photo: 2 },
    ],
    walk: [
      { title: '谷町四丁目进', body: '从西侧入口过内堀桥，先看石垣再上天守台座。' },
      { title: '绕本丸一圈', body: '天守阁前后绕一圈看不同角度的石垣与橹。' },
      { title: '森之宫方向出', body: '南侧出口接森之宫站，顺路可吃。' },
    ],
    arrival: [
      { title: '轨道到达', body: 'JR 环状线大阪城公园站、地铁谷町线／中央线谷町四丁目站、长堀鹤见绿地线森之宫站都到。' },
      { title: '步行串联', body: '与中之岛、难波不步行直连；回市区坐地铁。' },
    ],
    tips: [
      { title: '公园比阁大', body: '全园走完要两三小时；只走本丸加西之丸约一个半小时。' },
      { title: '樱花季人挤', body: '花期周末极挤；想看花平日早去。' },
    ],
    sources: [{ label: '大阪城官网', url: 'https://www.osakacastle.net/' }, { label: 'Osaka Info', url: 'https://osaka-info.com/' }],
    restaurantIds: [], related: ['osaka-museum-history', 'nakanoshima-park'],
  },
  {
    id: 'dotonbori', city: 'osaka', name: '道顿堀', nameLocal: '道頓堀 Dōtonbori', type: 'waterfront', area: '难波', areaId: 'namba-dotonbori',
    intro: '运河、霓虹招牌与格力高跑男。大阪的明信片，晚上来，别在主街吃正餐。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '街区开放 · 免费',
      summary: '运河两岸步道开放区域免费；戎桥与固力果招牌前是拍照点。',
      link: { label: 'Osaka Info 道顿堀', url: 'https://osaka-info.com/' },
      rows: [
        { item: '运河步道与街区', ticket: '免费', reservation: '不需要' },
        { item: '道顿堀游船', ticket: '收费', reservation: '现场购票；班次以当天为准' },
      ],
      steps: [
        { title: '傍晚到', body: '霓虹亮灯后才是道顿堀；先到法善寺横丁，再沿运河走。' },
        { title: '桥上拍照快进快出', body: '戎桥上人多，拍完去两侧步道。' },
      ],
      fallback: '人挤时拐进法善寺横丁或千日前商店街，内容差不多。',
    },
    price: '免费', hours: '全天；店铺至夜间', address: '道頓堀，大阪市中央区道頓堀',
    highlights: [
      { title: '格力高跑男与霓虹', body: '戎桥前的固力果看板是必拍；螃蟹、章鱼等立体招牌整条街都是。', photo: 0 },
      { title: '运河步道', body: '桥下沿河步道看招牌倒影，比桥上人少。', photo: 1 },
      { title: '法善寺横丁', body: '石板小巷与苔藓法善寺，距主街两分钟另一世界。', photo: 2 },
    ],
    walk: [
      { title: '法善寺横丁进', body: '先进巷子看石板路，再到运河边对比冷热。' },
      { title: '沿河走一段', body: '戎桥两侧各走一段，看两岸招牌。' },
      { title: '接千日前或心斋桥', body: '往东千日前商店街，往北大心斋桥筋。' },
    ],
    arrival: [
      { title: '轨道到达', body: '地铁御堂筋线难波站14号口最近；心斋桥站步行亦达。' },
    ],
    tips: [
      { title: '看紧随身物', body: '人流极密，双肩包背前面。' },
      { title: '主街餐馆偏贵', body: '吃正餐去横丁或市场，主街看灯就好。' },
    ],
    sources: [{ label: 'Osaka Info', url: 'https://osaka-info.com/' }],
    restaurantIds: ['mizuno', 'kougaryu', 'imai', 'meoto-zenzai'], related: ['hozenji-yokocho', 'kuromon-market'],
  },
  {
    id: 'hozenji-yokocho', city: 'osaka', name: '法善寺横丁', nameLocal: '法善寺横丁 Hōzenji Yokochō', type: 'heritage', area: '难波', areaId: 'namba-dotonbori',
    intro: '道顿堀旁的石板小巷：苔藓法善寺、老馆子和甜品老铺，两分钟路程换百年氛围。', duration: '30–60 分钟',
    booking: {
      status: 'walk-in', label: '街区开放 · 免费',
      summary: '巷子与法善寺免费参拜；店内消费按店。',
      link: { label: 'Osaka Info', url: 'https://osaka-info.com/' },
      rows: [{ item: '巷内与寺院', ticket: '免费', reservation: '不需要' }],
      steps: [
        { title: '从道顿堀一侧进', body: '巷口小，看灯笼与石板找；白天夜里两种气质。' },
        { title: '法善寺拜不动明王', body: '苔藓覆盖的不动明王像前浇水祈福是当地做法。' },
      ],
      fallback: '巷内店多按自家时间营业；关了就当散步。',
    },
    price: '免费', hours: '全天；店铺各自', address: '法善寺横丁，大阪市中央区難波1-2',
    highlights: [
      { title: '水挂不动明王', body: '参拜者浇水长成的厚苔像是标志；拍照轻声。', photo: 0 },
      { title: '石板小巷', body: '两条平行的窄巷，灯笼与老铺并排。', photo: 1 },
      { title: '夫妇善哉', body: '巷里的甜品老铺，善哉两小盏是定番。', photo: 2 },
    ],
    walk: [
      { title: '东口进西口出', body: '巷子短，来回走一遍看两遍。' },
      { title: '甜品或老铺坐一下', body: '夫妇善哉或小酒馆坐一坐比拍照更像这里。' },
    ],
    arrival: [
      { title: '轨道到达', body: '地铁难波站步行约5分钟；巷口在道顿堀南侧。' },
    ],
    tips: [
      { title: '夜间氛围好', body: '灯笼亮后最有味道；与道顿堀同排。' },
    ],
    sources: [{ label: 'Osaka Info', url: 'https://osaka-info.com/' }],
    restaurantIds: ['meoto-zenzai', 'imai'], related: ['dotonbori', 'kuromon-market'],
  },
  {
    id: 'shinsekai-tsutenkaku', city: 'osaka', name: '新世界与通天阁', nameLocal: '新世界・通天閣 Tsutenkaku', type: 'landmark', area: '新世界', areaId: 'shinsekai-tennoji',
    intro: '昭和下町街区与怀旧铁塔。串炸店、将棋馆、比利肯像——旧大阪的标本。', duration: '1.5–2 小时',
    booking: {
      status: 'partial', label: '街区免费 · 展望台购票',
      summary: '街区免费；通天阁展望台收费，官网或现场购票。',
      link: { label: '通天阁官网', url: 'https://www.tsutenkaku.co.jp/' },
      rows: [
        { item: '街区', ticket: '免费', reservation: '不需要' },
        { item: '通天阁展望台', ticket: '收费', reservation: '现场购票；节假日可官网预查' },
      ],
      steps: [
        { title: '惠美须町站出来即是', body: 'ジャンジャン横丁与通天阁本通都在站旁。' },
        { title: '展望台按兴致', body: '塔不高，看的是脚下的新世界街区本身。' },
      ],
      fallback: '塔排队时只在街区走；串炸店就是最好的内容。',
    },
    price: '街区免费；展望台收费', hours: '街区全天；展望台约 10:00–20:00（以官网为准）', address: '通天閣，大阪市浪速区恵美須東1-18-6',
    highlights: [
      { title: '通天阁展望台', body: '塔内比利肯像与顶层视野；看的是新世界这片下町本身。', photo: 0 },
      { title: 'ジャンジャン横丁', body: '窄巷将棋馆与便宜食堂，昭和气氛最浓的一条。', photo: 1 },
      { title: '串炸招牌街', body: '通天阁本通的巨大河豚灯与串炸招牌是这片的天际线。', photo: 2 },
    ],
    walk: [
      { title: '惠美须町站出', body: '先走ジャンジャン横丁，再拐通天阁本通。' },
      { title: '塔下绕一圈', body: '登不登塔都可，塔下绕一圈看招牌。' },
      { title: '串炸收尾', body: '回达摩或任意串炸店坐下一顿。' },
    ],
    arrival: [
      { title: '轨道到达', body: '地铁堺筋线惠美须町站3号口最近；动物园前站（御堂筋线）亦可。' },
    ],
    tips: [
      { title: '白天比夜里稳', body: '街区老旧，白天感受最好；夜归走亮的大路。' },
      { title: '酱汁规则', body: '串炸「禁蘸两次」标志到处都是——入乡随俗。' },
    ],
    sources: [{ label: '通天阁官网', url: 'https://www.tsutenkaku.co.jp/' }, { label: 'Osaka Info', url: 'https://osaka-info.com/' }],
    restaurantIds: ['daruma-shinsekai'], related: ['shitennoji'],
  },
  {
    id: 'shitennoji', city: 'osaka', name: '四天王寺', nameLocal: '四天王寺 Shitennō-ji', type: 'heritage', area: '天王寺', areaId: 'shinsekai-tennoji',
    intro: '593 年建的日本最古官寺。伽蓝配置保留飞鸟样式，比市区任何景点都安静。', duration: '1–1.5 小时',
    booking: {
      status: 'partial', label: '境内免费 · 部分收费',
      summary: '寺域开放免费；中心伽蓝与本坊庭园收小额门票。',
      link: { label: '四天王寺官网', url: 'https://www.shitennoji.or.jp/' },
      rows: [
        { item: '境内（外郭）', ticket: '免费', reservation: '不需要' },
        { item: '中心伽蓝·庭园·宝物馆', ticket: '各收小额门票', reservation: '现场购票' },
      ],
      steps: [
        { title: '南门（南大门）进', body: '按中门—塔—金堂—讲堂一条中轴走，是日本最古老的伽蓝布局。' },
        { title: '伽蓝门票看兴致', body: '只想散步的外郭就够；想看五重塔内部买票进中心伽蓝。' },
      ],
      fallback: '设施关闭时境内散步不受影响；与新世界同排半天。',
    },
    price: '境内免费；伽蓝另收', hours: '境内约 08:30–16:30（季节调整，以官网为准）', address: '四天王寺，大阪市天王寺区四天王寺1-11-18',
    highlights: [
      { title: '飞鸟式伽蓝布局', body: '中门、五重塔、金堂、讲堂南北一线——教科书里的最古配置。', photo: 0 },
      { title: '五重塔', body: '塔可登（内部阶梯陡）；院内的龟池与石舞台安静。', photo: 1 },
      { title: '本坊庭园', body: '极乐净土之庭，樱花与新绿季好看。', photo: 2 },
    ],
    walk: [
      { title: '南大门进', body: '从南侧正门进，沿中轴往北。' },
      { title: '绕伽蓝一圈', body: '看完中心伽蓝绕外郭走一圈。' },
      { title: '接天王寺公园或新世界', body: '往西天王寺公园，往北新世界步行可达。' },
    ],
    arrival: [
      { title: '轨道到达', body: '地铁谷町线四天王寺前夕阳丘站步行约5分钟；JR 天王寺站步行约10分钟。' },
    ],
    tips: [
      { title: '早去最松', body: '旅行团少；晨走寺内只有信众。' },
      { title: '每月庙会', body: '21、22 日有市集法会，想赶热闹可对准日期。' },
    ],
    sources: [{ label: '四天王寺官网', url: 'https://www.shitennoji.or.jp/' }, { label: 'Osaka Info', url: 'https://osaka-info.com/' }],
    restaurantIds: [], related: ['shinsekai-tsutenkaku'],
  },
  {
    id: 'sumiyoshi-taisha', city: 'osaka', name: '住吉大社', nameLocal: '住吉大社 Sumiyoshi Taisha', type: 'heritage', area: '住吉',
    intro: '全国住吉神社总本宫，住吉造本殿与反桥是国宝级。地铁直达但游客少。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '境内免费',
      summary: '境内参拜免费；反桥（太鼓桥）与四栋本殿是重点。',
      link: { label: '住吉大社官网', url: 'https://www.sumiyoshitaisha.net/' },
      rows: [{ item: '境内参拜', ticket: '免费', reservation: '不需要' }],
      steps: [
        { title: '南海本线住吉大社站出来即是', body: '站旁即西鸟居；或阪堺电车住吉鸟居前站。' },
        { title: '反桥先走', body: '太鼓桥弧度陡，慢慢过；桥上是好机位。' },
      ],
      fallback: '雨天照常可看；台阶与桥面湿滑注意。',
    },
    price: '免费', hours: '境内约 06:00–17:00（季节调整）', address: '住吉大社，大阪市住吉区住吉2-9-89',
    highlights: [
      { title: '反桥（太鼓桥）', body: '朱红拱桥跨在内堀上，是住吉的标志机位。', photo: 0 },
      { title: '四栋本殿', body: '住吉造本殿一字排开，样式在伊势之前——日本最古老的神社建筑形式之一。', photo: 1 },
      { title: '楠珺社与おもかる石', body: '境内小社与占卜石，按参道顺序走会经过。', photo: 2 },
    ],
    walk: [
      { title: '西鸟居进', body: '南海站出来从西侧进，先过反桥。' },
      { title: '四殿顺拜', body: '第一本宫到第四本宫沿中轴走。' },
      { title: '接阪堺电车', body: '回程可坐阪堺路面电车（往天王寺方向），体验老城区电车。' },
    ],
    arrival: [
      { title: '轨道到达', body: '南海本线住吉大社站（难波方向约10分钟）；阪堺线住吉鸟居前站。' },
    ],
    tips: [
      { title: '人少的国宝级', body: '名气大但游客少，比市区神社都松。' },
      { title: '阪堺电车顺路', body: '住吉—天王寺一段路面电车值得坐一次。' },
    ],
    sources: [{ label: '住吉大社官网', url: 'https://www.sumiyoshitaisha.net/' }, { label: 'Osaka Info', url: 'https://osaka-info.com/' }],
    restaurantIds: [], related: ['shitennoji'],
  },
  {
    id: 'kuromon-market', city: 'osaka', name: '黑门市场', nameLocal: '黒門市場 Kuromon Ichiba', type: 'waterfront', area: '日本桥', areaId: 'namba-dotonbori',
    intro: '「大阪的厨房」：海鲜、和牛串、水果摊。早上去，挑老店，看明码价。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '市场开放 · 免费进',
      summary: '市场免费进入；店铺约 09:00 后开，傍晚收摊。',
      link: { label: '黑门市场', url: 'https://www.kuromon.com/' },
      rows: [{ item: '市场', ticket: '免费', reservation: '不需要' }],
      steps: [
        { title: '上午去', body: '10 点前后店全开且人未挤；下午晚了很多收摊。' },
        { title: '看价再吃', body: '近年游客化明显——挑有明码标价的店。' },
      ],
      fallback: '店休或人多时，市场两端外的餐馆同样能吃到。',
    },
    price: '免费', hours: '店铺多为 09:00–18:00', address: '黒門市場，大阪市中央区日本橋2丁目',
    highlights: [
      { title: '鲜鱼店现切', body: '黑门三平等大店现切生鱼片与烤扇贝，自选柜台式。', photo: 0 },
      { title: '和牛串与海鲜串', body: '店头烤串边走边吃（按店规）。', photo: 1 },
      { title: '关东煮与老铺', body: '市场两侧有不只海鲜的老铺——关东煮、豆腐、渍物。', photo: 2 },
    ],
    walk: [
      { title: '从日本桥侧进', body: '东端进往西走，约 600 米。' },
      { title: '每家尝一口', body: '扇贝、和牛串、水果——份量留给品类数。' },
      { title: '接道顿堀', body: '西口出往难波方向接道顿堀。' },
    ],
    arrival: [
      { title: '轨道到达', body: '地铁日本桥站10号口步行约2分钟；难波站步行约8分钟。' },
    ],
    tips: [
      { title: '边走边吃规矩', body: '多数店要求店门口吃完；看标识。' },
      { title: '价格比前些年涨', body: '游客化后单价偏高；当体验不当便宜市场。' },
    ],
    sources: [{ label: '黑门市场', url: 'https://www.kuromon.com/' }, { label: 'Osaka Info', url: 'https://osaka-info.com/' }],
    restaurantIds: ['kuromon-sanpei'], related: ['dotonbori', 'hozenji-yokocho'],
  },
  {
    id: 'nakanoshima-park', city: 'osaka', name: '中之岛', nameLocal: '中之島 Nakanoshima', type: 'waterfront', area: '中之岛', areaId: 'nakanoshima',
    intro: '两河夹出的岛：中央公会堂、府立图书馆与玫瑰园。大阪最安静的一段水岸。', duration: '1.5–2 小时',
    booking: {
      status: 'walk-in', label: '开放区域免费',
      summary: '中之岛公园与河岸步道免费；中央公会堂与美术馆按馆收费。',
      link: { label: '大阪市中央公会堂', url: 'https://osaka-chuokokaido.jp/' },
      rows: [
        { item: '公园与河岸', ticket: '免费', reservation: '不需要' },
        { item: '中央公会堂见学', ticket: '收费或限定开放', reservation: '以官网为准' },
        { item: '国立国际美术馆', ticket: '收费', reservation: '现场购票' },
      ],
      steps: [
        { title: '淀屋桥或难波桥站下', body: '东端进岛往西走，公会堂与图书馆先经过。' },
        { title: '沿河南岸走', body: '河边步道看对岸公会堂与高楼夹水。' },
      ],
      fallback: '雨天改中央公会堂内部见学或美术馆；河岸步道照常。',
    },
    price: '公园免费；馆舍另收', hours: '公园全天', address: '中之島公園，大阪市北区中之島',
    highlights: [
      { title: '中央公会堂', body: '红砖新文艺复兴建筑，是大阪近代化的门面；外观免费看。', photo: 0 },
      { title: '玫瑰园', body: '春秋花季最好；平时是草坪与长椅。', photo: 1 },
      { title: '河岸天际线', body: '从岛上看两岸，大阪最「欧洲」的一段。', photo: 2 },
    ],
    walk: [
      { title: '东端进', body: '难波桥→公会堂→府立图书馆→公园一路往西。' },
      { title: '河畔坐一会', body: '长椅与咖啡车按季节；留时间发呆。' },
      { title: '西端出接肥后桥', body: '往西接肥后桥站或渡边桥站回市区。' },
    ],
    arrival: [
      { title: '轨道到达', body: '京阪／地铁淀屋桥站、难波桥站、肥后桥站均可上岛。' },
    ],
    tips: [
      { title: '人少时段多', body: '这里不是团客点，白天多时段安静。' },
      { title: '与大阪城同排', body: '上午大阪城、下午中之岛是顺的组合。' },
    ],
    sources: [{ label: 'Osaka Info', url: 'https://osaka-info.com/' }],
    restaurantIds: [], related: ['osaka-castle', 'osaka-museum-history'],
  },
  {
    id: 'osaka-museum-history', city: 'osaka', name: '大阪历史博物馆', nameLocal: '大阪歴史博物館 Osaka Museum of History', type: 'art', area: '谷町四丁目', areaId: 'osaka-castle-park',
    intro: '难波宫遗址上的城市史博物馆，高层展厅正看大阪城。雨天与冷天的救场项。', duration: '1.5–2 小时',
    booking: {
      status: 'walk-in', label: '购票入场 · 常设展',
      summary: '常设展购票入场；官网或现场购票，特展另计。',
      link: { label: '大阪历史博物馆', url: 'https://www.mus-his.city.osaka.jp/' },
      rows: [{ item: '常设展', ticket: '收费', reservation: '现场购票；特展与休馆日以官网为准' }],
      steps: [
        { title: '谷町四丁目站出来即是', body: '与大阪城谷町口隔路相对，先馆后城或反序。' },
        { title: '从顶层往下看', body: '展厅按楼层从古代往近代讲，顶层的难波宫复原视野最好。' },
      ],
      fallback: '休馆日（多为周二）改大阪城公园或中之岛美术馆。',
    },
    price: '常设展收费', hours: '09:30–17:00（周二休，以官网为准）', address: '大阪歴史博物館，大阪市中央区大手前4-1-32',
    highlights: [
      { title: '难波宫大极殿复原', body: '顶层等比复原柱子与朱红宫殿，落地窗外就是大阪城。', photo: 0 },
      { title: '水地下街景层', body: '难波时代的市井与下水道层景，做得很直观。', photo: 1 },
      { title: '窗外的大阪城', body: '展厅窗正对天守阁——馆内看城的独特角度。', photo: 2 },
    ],
    walk: [
      { title: '先上顶层', body: '电梯直达上层往下走，按时间线退着看。' },
      { title: '与大阪城联排', body: '看完馆过马路进城公园，动线最顺。' },
    ],
    arrival: [
      { title: '轨道到达', body: '地铁谷町线／中央线谷町四丁目站 2、9 号口旁。' },
    ],
    tips: [
      { title: '看窗景就值回票', body: '馆内玻璃正对大阪城，摄影角度独特。' },
    ],
    sources: [{ label: '大阪历史博物馆', url: 'https://www.mus-his.city.osaka.jp/' }],
    restaurantIds: [], related: ['osaka-castle', 'nakanoshima-park'],
  },
  {
    id: 'namba-yasaka', city: 'osaka', name: '难波八坂神社', nameLocal: '難波八阪神社 Namba Yasaka Jinja', type: 'heritage', area: '难波',
    intro: '巨大的狮子头殿——吸厄运的狮子殿是小巷里的隐藏机位，离难波站步行可达。', duration: '30–45 分钟',
    booking: {
      status: 'walk-in', label: '境内免费',
      summary: '境内参拜免费；狮子殿是境内建筑。',
      link: { label: 'Osaka Info', url: 'https://osaka-info.com/' },
      rows: [{ item: '境内', ticket: '免费', reservation: '不需要' }],
      steps: [
        { title: '难波站西南方向步行', body: '巷内小社，按地图走约 10 分钟。' },
        { title: '狮子殿正面拍照', body: '殿前留人拍照的间隙——人少时 10 分钟足够。' },
      ],
      fallback: '境内小、内容少，不顺路可舍；祭典日（夏祭）反而热闹。',
    },
    price: '免费', hours: '境内约 06:00–17:00', address: '難波八阪神社，大阪市浪速区元町2-9-19',
    highlights: [
      { title: '狮子殿', body: '12 米高的狮子头造型殿——正面看是张开的大口，机位在正前方。', photo: 0 },
      { title: '本殿与境内', body: '神社本身小巧安静，十分钟逛完。', photo: 1 },
      { title: '巷弄环境', body: '周边是本地住宅巷，和难波主街反差大。', photo: 2 },
    ],
    walk: [
      { title: '巷内进', body: '按地图从难波站西南方向进巷。' },
      { title: '拍照后去别处', body: '内容就是这座殿；接道顿堀或难波公园方向。' },
    ],
    arrival: [
      { title: '轨道到达', body: '地铁难波站步行约 10 分钟；近铁／JR 难波站亦可。' },
    ],
    tips: [
      { title: '只为一座殿', body: '专程来意义不大，与难波散步顺路即可。' },
    ],
    sources: [{ label: 'Osaka Info', url: 'https://osaka-info.com/' }],
    restaurantIds: [], related: ['dotonbori'],
  },
  {
    id: 'umeda-sky', city: 'osaka', name: '梅田蓝天大厦 空中庭园', nameLocal: '梅田スカイビル 空中庭園展望台', type: 'landmark', area: '梅田', areaId: 'umeda-kita',
    intro: '连接双塔顶层的环形展望台，梅田侧看淀川与全城落日。', duration: '1–1.5 小时',
    booking: {
      status: 'recommended', label: '购票入场 · 可官网预购',
      summary: '空中庭园展望台购票入场；官网可查票价并可预购，黄昏时段人多。',
      link: { label: '空中庭园官网', url: 'https://www.kuchu-teien.com/' },
      rows: [{ item: '展望台', ticket: '收费', reservation: '现场或官网；黄昏高峰' }],
      steps: [
        { title: '梅田站步行约 10 分钟', body: '大阪站西北方向，过地下道到河畔一侧。' },
        { title: '算落日时间', body: '黄昏前后上去看日落＋夜景两段；比白天值。' },
      ],
      fallback: '雨天露台关闭只开室内层；天气差可不去。',
    },
    price: '展望台收费', hours: '约 09:30–22:30（以官网为准）', address: '梅田スカイビル，大阪市北区大淀中1-1-88',
    highlights: [
      { title: '环形露天展望台', body: '顶层 360 度环廊，风大但视野无死角。', photo: 0 },
      { title: '扶梯穿塔', body: '中段悬空扶梯连接双塔，本身就是景观。', photo: 1 },
      { title: '淀川落日', body: '西侧看河与落日，东侧看梅田楼群。', photo: 2 },
    ],
    walk: [
      { title: '塔下拍照', body: '建筑外形从地面看也值得一张。' },
      { title: '电梯＋扶梯上', body: '先到中层再转悬空扶梯上顶层。' },
      { title: '下来走茶屋町', body: '回梅田走茶屋町一侧，咖啡馆多。' },
    ],
    arrival: [
      { title: '轨道到达', body: 'JR 大阪站／地铁梅田站步行约 10 分钟（西北方向）。' },
    ],
    tips: [
      { title: '黄昏去', body: '白天上去性价比一般；落日加夜景一段值回票价。' },
      { title: '顶层风大', body: '带件外套；帽子与伞不带上露天层。' },
    ],
    sources: [{ label: '空中庭园官网', url: 'https://www.kuchu-teien.com/' }, { label: 'Osaka Info', url: 'https://osaka-info.com/' }],
    restaurantIds: [], related: ['nakanoshima-park'],
  }
,
  {
    id: 'dazaifu-tenmangu', city: 'fukuoka', name: '太宰府天满宫', nameLocal: '太宰府天満宮 Dazaifu Tenmangū', type: 'heritage', area: '太宰府（近郊）',
    intro: '全国天满宫总本社，祭学问之神菅原道真。表参道老街＋本殿＋飞梅传说，平日去最顺。', duration: '半天（含往返）',
    booking: {
      status: 'walk-in', label: '境内免费',
      summary: '境内参拜免费；宝物殿与九州国立博物馆（邻接）另收费。',
      link: { label: '太宰府天满宫官网', url: 'https://www.dazaifutenmangu.or.jp/' },
      rows: [
        { item: '境内参拜', ticket: '免费', reservation: '不需要' },
        { item: '九州国立博物馆', ticket: '收费', reservation: '现场购票；特展另计' },
      ],
      steps: [
        { title: '西铁太宰府站出来即是表参道', body: '西铁福冈（天神）站→二日市换太宰府线，终点步行 5 分钟。' },
        { title: '走表参道进', body: '梅枝饼老铺沿路排开——烤饼现买现吃是固定仪式。' },
        { title: '平日去', body: '周末与考试季（求学运）极挤；平日早去。' },
      ],
      fallback: '本殿工事或大祭期间看围挡进度；九州国立博物馆可当雨天替代。',
    },
    price: '境内免费', hours: '境内约 06:00–19:00（季节调整）', address: '太宰府天満宮，福岡県太宰府市宰府4-7-1',
    highlights: [
      { title: '本殿与飞梅', body: '本殿前的飞梅传说是从京都一夜飞来；楼门与本殿外观可看（近年有大规修缮，以官网为准）。', photo: 0 },
      { title: '表参道与梅枝饼', body: '参道两侧梅枝饼店现烤现卖，红豆馅糯米饼是这里的定番。', photo: 1 },
      { title: '心字池与太鼓桥', body: '参道跨过「过去·现在·未来」三座桥，池形为「心」字。', photo: 2 },
    ],
    walk: [
      { title: '西铁站出来即参道', body: '沿表参道一路吃喝到楼门。' },
      { title: '过太鼓桥参拜', body: '本殿参拜后绕飞梅与心字池。' },
      { title: '加九国博物馆或回程', body: '体力够就走联络道去九州国立博物馆（建筑本身值一看）。' },
    ],
    arrival: [
      { title: '西铁电车', body: '西铁福冈（天神）站→二日市换乘→太宰府站，全程约 30–40 分钟；IC 卡可用。' },
      { title: '巴士', body: '博多／天神有直达巴士；以当下班次为准。' },
    ],
    tips: [
      { title: '考试季与节分挤爆', body: '1–3 月考试季与节分祭人多；按日期避开。' },
      { title: '梅枝饼带回家会硬', body: '现烤现吃是本体；带走当伴手礼注意赏味期短。' },
    ],
    sources: [{ label: '太宰府天满宫官网', url: 'https://www.dazaifutenmangu.or.jp/' }, { label: 'Yokanavi', url: 'https://yokanavi.com/' }],
    restaurantIds: [], related: ['kushida-shrine'],
  },
  {
    id: 'ohori-park', city: 'fukuoka', name: '大濠公园与福冈城迹', nameLocal: '大濠公園・福岡城跡 Ōhori Park', type: 'nature', area: '大濠／舞鹤', areaId: 'ohori-maizuru',
    intro: '环湖两公里的城市公园，隔壁是福冈城迹（舞鹤公园）。本地跑步者的领地，福冈最松的半天。', duration: '1.5–2.5 小时',
    booking: {
      status: 'walk-in', label: '免费',
      summary: '公园与城迹全域免费；日本庭园与天鹅船等小项另收。',
      link: { label: 'Yokanavi', url: 'https://yokanavi.com/' },
      rows: [
        { item: '公园与城迹', ticket: '免费', reservation: '不需要' },
        { item: '日本庭园', ticket: '小额门票', reservation: '现场购票' },
      ],
      steps: [
        { title: '大濠公园站出来即湖边', body: '地铁空港线直达；先走湖心岛一线。' },
        { title: '城迹在隔壁', body: '舞鹤公园一侧是残存石垣与橹；两个园一次走。' },
      ],
      fallback: '雨天改福冈市美术馆（公园内）或咖啡馆。',
    },
    price: '免费', hours: '公园全天；庭园与美术馆按时', address: '大濠公園，福岡市中央区大濠公園1',
    highlights: [
      { title: '湖心岛与三座桥', body: '长桥把湖切成两半，岛上有凉亭——走桥穿湖是这里的定番。', photo: 0 },
      { title: '福冈城迹（舞鹤公园）', body: '石垣、复原橹与展望台看市区；樱花季是重点。', photo: 1 },
      { title: '日本庭园与美术馆', body: '公园南缘的小庭园与福冈市美术馆（草间弥生南瓜在馆外）。', photo: 2 },
    ],
    walk: [
      { title: '环湖一段', body: '顺时针走湖心岛方向，约 2 公里环线可只走一半。' },
      { title: '拐进城迹', body: '从舞鹤一侧上石垣看公园全景。' },
      { title: '公园咖啡收尾', body: '湖畔咖啡馆或回天神方向吃。' },
    ],
    arrival: [
      { title: '轨道到达', body: '地铁空港线大濠公园站出站即到；从天神步行约 15 分钟。' },
    ],
    tips: [
      { title: '晨走最佳', body: '清晨本地跑步者与湖面光线都好。' },
      { title: '美术馆休馆日', body: '福冈市美术馆多周一休，排前查官网。' },
    ],
    sources: [{ label: 'Yokanavi', url: 'https://yokanavi.com/' }],
    restaurantIds: ['rec-coffee'], related: ['fukuoka-tower'],
  },
  {
    id: 'kushida-shrine', city: 'fukuoka', name: '栉田神社', nameLocal: '櫛田神社 Kushida Jinja', type: 'heritage', area: '博多旧市街', areaId: 'hakata-oldtown',
    intro: '博多的总镇守，山笠祭的主场。境内展示着巨大的饰山笠，是老市街散步的中心点。', duration: '45–60 分钟',
    booking: {
      status: 'walk-in', label: '境内免费',
      summary: '境内参拜免费；饰山笠展示在境内常年可见。',
      link: { label: 'Yokanavi', url: 'https://yokanavi.com/' },
      rows: [{ item: '境内', ticket: '免费', reservation: '不需要' }],
      steps: [
        { title: '川端商店街旁即是', body: '博多站步行约 15 分钟或地铁中洲川端站步行 5 分钟。' },
        { title: '看饰山笠', body: '境内常年展示一座大型饰山笠——不用赶 7 月祭也能看到。' },
      ],
      fallback: '境内小，半小时足够；与川端商店街、博多旧市街寺庙群同排。',
    },
    price: '免费', hours: '境内约 04:00–22:00', address: '櫛田神社，福岡市博多区上川端町1-41',
    highlights: [
      { title: '饰山笠', body: '十多米高的彩饰山笠常年展示，祭典之外的日常看点。', photo: 0 },
      { title: '楼门与本殿', body: '博多总镇守的千年社格；晨间信众陆续来。', photo: 1 },
      { title: '灵泉鹤之井户', body: '境内井户与干支惠方盘——按岁德方参拜的本地习俗。', photo: 2 },
    ],
    walk: [
      { title: '楼门进', body: '先看饰山笠，再参拜本殿。' },
      { title: '接川端商店街', body: '出来即川端商店街入口，顺路走。' },
    ],
    arrival: [
      { title: '轨道到达', body: '地铁中洲川端站步行约 5 分钟；博多站步行约 15 分钟。' },
    ],
    tips: [
      { title: '7 月山笠祭', body: '博多祇园山笠（7 月上旬）期间全城投入，赶上是大运气。' },
      { title: '早上去', body: '本地参拜者多的时段最真实。' },
    ],
    sources: [{ label: 'Yokanavi', url: 'https://yokanavi.com/' }],
    restaurantIds: ['hakata-issou'], related: ['kawabata-shotengai', 'nakasu-yatai'],
  },
  {
    id: 'kawabata-shotengai', city: 'fukuoka', name: '川端商店街', nameLocal: '川端通商店街 Kawabata Shōtengai', type: 'waterfront', area: '博多旧市街', areaId: 'hakata-oldtown',
    intro: '有顶棚的老商店街：博多织、人形、红豆汤老铺。比商场慢半拍，适合雨天。', duration: '45–75 分钟',
    booking: {
      status: 'walk-in', label: '街区开放',
      summary: '商店街开放；店铺多为 10:00–18:00，傍晚陆续收。',
      link: { label: 'Yokanavi', url: 'https://yokanavi.com/' },
      rows: [{ item: '街区', ticket: '免费', reservation: '不需要' }],
      steps: [
        { title: '栉田神社出来即是', body: '两个街区相连：栉田参拜完顺街走。' },
        { title: '中午前后去', body: '老店开门晚收得早；傍晚很多已关。' },
      ],
      fallback: '店多时关门早——当散步走，吃东西回中洲。',
    },
    price: '免费', hours: '店铺多为 10:00–18:00', address: '川端通商店街，福岡市博多区上川端町',
    highlights: [
      { title: '博多织与老铺', body: '传统织物与博多人形的老店集中在街内。', photo: 0 },
      { title: '红豆汤（ぜんざい）老铺', body: '川端ぜんざい是本地名物——老店一碗红豆汤是歇脚定番。', photo: 1 },
      { title: '山笠装饰', body: '街内常有山笠主题装饰，祭典气氛全年都在。', photo: 2 },
    ],
    walk: [
      { title: '从栉田侧进', body: '栉田神社→商店街一路向北。' },
      { title: '老店慢慢看', body: '织带店、人形店值得进去问。' },
    ],
    arrival: [
      { title: '轨道到达', body: '中洲川端站步行约 5 分钟；与栉田神社同片区。' },
    ],
    tips: [
      { title: '雨天友好', body: '有顶棚，福冈雨天的好退路。' },
      { title: '关门早', body: '傍晚多数店已收，排在中午前后。' },
    ],
    sources: [{ label: 'Yokanavi', url: 'https://yokanavi.com/' }],
    restaurantIds: [], related: ['kushida-shrine'],
  },
  {
    id: 'nakasu-yatai', city: 'fukuoka', name: '中洲屋台', nameLocal: '中洲屋台 Nakasu Yatai', type: 'waterfront', area: '中洲', areaId: 'nakasu',
    intro: '那珂川沿岸的路边摊群：塑料棚、一格一位、拉面与关东煮。福冈夜生活的本体。', duration: '1–2 小时（晚间）',
    booking: {
      status: 'walk-in', label: '开放 · 按摊消费',
      summary: '屋台傍晚起陆续开张；现金为主，看价目表再坐。',
      link: { label: 'Yokanavi', url: 'https://yokanavi.com/' },
      rows: [{ item: '屋台', ticket: '按摊点单', reservation: '不需要；雨天部分摊不出' }],
      steps: [
        { title: '中洲川端站出来沿河走', body: '那珂川通り沿线的棚摊傍晚亮起灯。' },
        { title: '先看价目再坐', body: '棚内墙上有价目表；有空位就坐，和邻座挤一挤。' },
      ],
      fallback: '雨天摊少改中洲室内餐馆；深夜出租车回住处。',
    },
    price: '按摊消费', hours: '约 18:00–24:00（各摊不同）', address: '中洲那珂川通り，福岡市博多区中洲',
    highlights: [
      { title: '河边棚摊', body: '塑料棚里的灯光与人声是本体；从天神侧望过去一排。', photo: 0 },
      { title: '一格一位', body: '肩挨肩坐吧台——和邻座与店主聊天是规则不是意外。', photo: 1 },
      { title: '屋台拉面', body: '小份豚骨拉面收尾一晚，是屋台的标准句点。', photo: 2 },
    ],
    walk: [
      { title: '沿河走一遍再选', body: '先走完全部摊再回头坐——选有人气但不满员的。' },
      { title: '一家尝一两样', body: '烤串＋关东煮一家，拉面收尾另一家。' },
    ],
    arrival: [
      { title: '轨道到达', body: '地铁中洲川端站出来即是；从天神步行约 10 分钟。' },
    ],
    tips: [
      { title: '现金为主', body: '备千元钞与硬币；部分摊已支持电子付。' },
      { title: '结伴更安心', body: '独行夜归走大路；拉客（ぼったくり）摊报价含糊就换。' },
    ],
    sources: [{ label: 'Yokanavi', url: 'https://yokanavi.com/' }],
    restaurantIds: ['nakasu-yatai-stalls', 'ichiran-hq'], related: ['kushida-shrine'],
  },
  {
    id: 'fukuoka-tower', city: 'fukuoka', name: '福冈塔与百道海滨', nameLocal: '福岡タワー・百道浜 Fukuoka Tower', type: 'landmark', area: '百道海滨',
    intro: '海滨的镜面三角塔与沙滩公园。黄昏来：沙滩、落日、登塔夜景一段收。', duration: '1.5–2 小时',
    booking: {
      status: 'recommended', label: '展望台购票',
      summary: '海滨沙滩免费；登塔购票，官网可查票价。',
      link: { label: '福冈塔官网', url: 'https://www.fukuokatower.co.jp/' },
      rows: [
        { item: '海滨公园', ticket: '免费', reservation: '不需要' },
        { item: '展望台', ticket: '收费', reservation: '现场或官网' },
      ],
      steps: [
        { title: '巴士最顺', body: '天神／博多站乘巴士到福冈塔口；地铁西新站步行约 20 分钟。' },
        { title: '先沙滩后塔', body: '黄昏先走沙滩看海，天黑前登塔看夜景。' },
      ],
      fallback: '雨天塔内照常但视野打折；沙滩段改咖啡馆。',
    },
    price: '沙滩免费；登塔收费', hours: '塔约 09:30–22:00（以官网为准）', address: '福岡タワー，福岡市早良区百道浜2-3-26',
    highlights: [
      { title: '镜面塔身', body: '半镜面三角塔身白天映天、夜里亮灯——沙滩上远看最有形。', photo: 0 },
      { title: '百道沙滩', body: '城市沙滩的松弛感：排球场、散步道与海上落日。', photo: 1 },
      { title: '顶层展望', body: '123 米展望台看福冈市街与博多湾。', photo: 2 },
    ],
    walk: [
      { title: '巴士站下车到沙滩', body: '先沿海岸步道走一段。' },
      { title: '登塔', body: '天黑前上塔，日景夜景一次收。' },
      { title: '回天神方向', body: '巴士回天神或西新站地铁。' },
    ],
    arrival: [
      { title: '巴士', body: '天神／博多有巴士直达福冈塔南口一带；地铁西新站步行约 20 分钟。' },
    ],
    tips: [
      { title: '黄昏组合', body: '沙滩落日＋塔上夜景是正确用法。' },
      { title: '风大', body: '海边风大，夏天也带件薄外套。' },
    ],
    sources: [{ label: '福冈塔官网', url: 'https://www.fukuokatower.co.jp/' }, { label: 'Yokanavi', url: 'https://yokanavi.com/' }],
    restaurantIds: [], related: ['ohori-park'],
  },
  {
    id: 'hakata-oldtown-temples', city: 'fukuoka', name: '博多旧市街寺社散策', nameLocal: '博多旧市街（東長寺・承天寺）', type: 'heritage', area: '博多旧市街', areaId: 'hakata-oldtown',
    intro: '博多站西侧的中世寺町：东长寺大佛、承天寺山门与圣福寺，半天走完的安静路线。', duration: '1.5–2 小时',
    booking: {
      status: 'walk-in', label: '各寺免费或小额',
      summary: '寺域多免费开放；东长寺木造大佛可近距离参拜。',
      link: { label: 'Yokanavi', url: 'https://yokanavi.com/' },
      rows: [{ item: '各寺境内', ticket: '免费或小额', reservation: '不需要' }],
      steps: [
        { title: '博多站步行圈', body: '东长寺→承天寺→圣福寺步行串联，半天内收。' },
        { title: '东长寺看大佛', body: '木造大佛的近距离感是最大看点。' },
      ],
      fallback: '各寺内容小，可与栉田神社、川端商店街拼成旧市街半天。',
    },
    price: '免费为主', hours: '各寺约 09:00–17:00', address: '東長寺，福岡市博多区御供所町2-4',
    highlights: [
      { title: '东长寺木造大佛', body: '福冈大佛——可绕像参拜的木造坐佛，人少时极静。', photo: 0 },
      { title: '承天寺山门', body: '朱红山门临街而立，「博多」一名的缘起之地。', photo: 1 },
      { title: '寺町巷弄', body: '寺与寺之间是低调的老街，比景点本身更有味道。', photo: 2 },
    ],
    walk: [
      { title: '东长寺起', body: '从博多站方向先进东长寺看大佛。' },
      { title: '沿寺町走', body: '承天寺→圣福寺按巷弄顺序串。' },
      { title: '接栉田或川端', body: '收尾接栉田神社与川端商店街。' },
    ],
    arrival: [
      { title: '轨道到达', body: '博多站步行约 10 分钟起；地铁祇园站亦近。' },
    ],
    tips: [
      { title: '安静但内容小', body: '喜欢寺町氛围的人会很值；求大景的可舍。' },
    ],
    sources: [{ label: 'Yokanavi', url: 'https://yokanavi.com/' }],
    restaurantIds: ['hakata-issou'], related: ['kushida-shrine', 'kawabata-shotengai'],
  },
  {
    id: 'sumiyoshi-jinja-fukuoka', city: 'fukuoka', name: '住吉神社', nameLocal: '住吉神社 Sumiyoshi Jinja', type: 'heritage', area: '博多',
    intro: '全国住吉信仰的发祥地之一（与大阪住吉大社并称起源）。博多站步行可达的千年古社。', duration: '30–45 分钟',
    booking: {
      status: 'walk-in', label: '境内免费',
      summary: '境内参拜免费；相扑像与能乐殿是看点。',
      link: { label: 'Yokanavi', url: 'https://yokanavi.com/' },
      rows: [{ item: '境内', ticket: '免费', reservation: '不需要' }],
      steps: [
        { title: '博多站南方向步行', body: '站前步行约 10 分钟；那珂川支流边。' },
      ],
      fallback: '内容小，与博多站周边联排即可。',
    },
    price: '免费', hours: '境内约 06:00–17:00', address: '住吉神社，福岡市博多区住吉3-1-51',
    highlights: [
      { title: '古社境内', body: '比邻车站却闹中取静，老樟树与本殿。', photo: 0 },
      { title: '相扑力士像', body: '境内有名的古代力士像，祈福者摸其手。', photo: 1 },
      { title: '能乐殿', body: '境内能舞台是博多文化的老底子之一。', photo: 2 },
    ],
    walk: [
      { title: '鸟居进绕一圈', body: '境内不大，半小时收。' },
      { title: '接博多站周边', body: '与车站伴手礼、拉面店同排。' },
    ],
    arrival: [
      { title: '轨道到达', body: '博多站步行约 10 分钟。' },
    ],
    tips: [
      { title: '顺路项', body: '离开福冈前的空档项，不专程。' },
    ],
    sources: [{ label: 'Yokanavi', url: 'https://yokanavi.com/' }],
    restaurantIds: [], related: ['hakata-oldtown-temples'],
  },
  {
    id: 'itoshima-futamigaura', city: 'fukuoka', name: '糸岛 樱井二见浦夫妇岩', nameLocal: '桜井二見ヶ浦 Futamigaura', type: 'nature', area: '糸岛（近郊）',
    intro: '白色鸟居立在海上、夫妇岩连注连绳——糸岛最上镜的海岸点。晴天来，阴天失色。', duration: '半天（含往返）',
    booking: {
      status: 'walk-in', label: '开放免费',
      summary: '海岸开放区域免费；樱井神社一侧有驻车场。',
      link: { label: '糸岛市观光协会', url: 'https://itoshima-kanko.net/' },
      rows: [{ item: '海岸与鸟居', ticket: '免费', reservation: '不需要' }],
      steps: [
        { title: '看天再决定', body: '晴天蓝白对比才是本体；阴雨天去意义减半。' },
        { title: 'JR＋巴士或自驾', body: 'JR 筑肥线到筑前前原方向换巴士／出租车；无车略折腾，留足时间。' },
      ],
      fallback: '天气不好改市区内容；糸岛海岸咖啡馆密集，也算备选。',
    },
    price: '免费', hours: '全天', address: '桜井二見ヶ浦，福岡県糸島市志摩桜井',
    highlights: [
      { title: '海上白鸟居', body: '纯白鸟居立在海里，夫妇岩在后——福冈周边最上镜的构图。', photo: 0 },
      { title: '夫妇岩注连绳', body: '两块相依的海岩连大注连绳，象征缘结。', photo: 1 },
      { title: '海岸咖啡馆带', body: '二见浦沿线散落看海咖啡与餐厅。', photo: 2 },
    ],
    walk: [
      { title: '鸟居正面拍', body: '沙滩或步道上正面构图最稳。' },
      { title: '沿岸散步', body: '海岸步道往南走找咖啡馆坐住。' },
    ],
    arrival: [
      { title: '轨道＋巴士', body: 'JR 筑肥线＋昭和巴士或出租车；班次少，先查回程。' },
    ],
    tips: [
      { title: '晴天限定', body: '这是看天景点；阴天直接换市区。' },
      { title: '回程班次少', body: '去程就记好返程巴士时间。' },
    ],
    sources: [{ label: '糸岛市观光协会', url: 'https://itoshima-kanko.net/' }],
    restaurantIds: [], related: ['fukuoka-tower'],
  },
  {
    id: 'hakata-station', city: 'fukuoka', name: '博多站', nameLocal: '博多駅 Hakata Station', type: 'landmark', area: '博多', areaId: 'hakata-oldtown',
    intro: '九州门户站，本身就是一座城：拉面一条街、伴手礼层与屋顶铁道神社。', duration: '45–90 分钟',
    booking: {
      status: 'walk-in', label: '车站开放',
      summary: '站内商业设施按各自营业；拉面一条街（博多めん街道）与屋上庭园免费进入。',
      link: { label: 'JR 博多 City', url: 'https://www.jrhakatacity.com/' },
      rows: [{ item: '车站与商业层', ticket: '免费', reservation: '不需要' }],
      steps: [
        { title: '按需求分层', body: '伴手礼层（铭品藏）、拉面一条街（めん街道）、屋顶庭园。' },
        { title: '离福冈前留一小时', body: '新干线或机场前在站内吃碗面买齐伴手礼，动线最顺。' },
      ],
      fallback: '人多时屋顶庭园是喘息位。',
    },
    price: '免费', hours: '商业层约 10:00–20:00（各店不同）', address: '博多駅，福岡市博多区博多駅中央街1-1',
    highlights: [
      { title: '拉面一条街', body: 'めん街道集合多家豚骨拉面名店分店——临走前补一顿。', photo: 0 },
      { title: '屋顶铁道神社', body: '站顶小神社与展望庭园，能看新干线进出站。', photo: 1 },
      { title: '铭品藏伴手礼层', body: '明太子、博多糕点一站买齐。', photo: 2 },
    ],
    walk: [
      { title: '筑紫口与博多口', body: '两个口方向不同，先确认酒店／地铁方向。' },
      { title: '楼层按需求', body: '饿了去めん街道，买齐去铭品藏。' },
    ],
    arrival: [
      { title: '轨道到达', body: '新干线、在来线、地铁空港线交汇；机场两站地铁。' },
    ],
    tips: [
      { title: '当收尾站', body: '把站内容排在离开当天，行李寄存投币柜。' },
    ],
    sources: [{ label: 'JR 博多 City', url: 'https://www.jrhakatacity.com/' }],
    restaurantIds: ['hakata-issou', 'rec-coffee'], related: ['hakata-oldtown-temples'],
  }
]
