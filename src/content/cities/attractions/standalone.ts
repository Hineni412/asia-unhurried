import type { Attraction } from '../../attractions'

const stb = { label: '新加坡旅游局', url: 'https://www.visitsingapore.com/' }
const mgto = { label: '澳门旅游局', url: 'https://www.macaotourism.gov.mo/' }

export const standaloneAttractions: Attraction[] = [
  {
    id: 'gardens-by-the-bay', city: 'singapore', name: '滨海湾花园', nameLocal: 'Gardens by the Bay', type: 'nature', area: '滨海湾',
    intro: '擎天树与两座冷室：户外园区免费看，花穹与云雾林单独售票。黄昏的 Supertree 是免费灯光秀。', duration: '3–4 小时',
    booking: {
      status: 'partial', label: '冷室需购票',
      summary: '户外园区与擎天树丛免费；花穹（Flower Dome）与云雾林（Cloud Forest）联票按官网当期价；OCBC 空中步道另计。',
      link: { label: '滨海湾花园官网', url: 'https://www.gardensbythebay.com.sg/' },
      rows: [
        { item: '户外园区与擎天树', ticket: '免费', reservation: '不需要；灯光秀每晚定时' },
        { item: '花穹+云雾林', ticket: '联票以官网为准', reservation: '官网或现场购票' },
        { item: 'OCBC 空中步道', ticket: '另收费', reservation: '以官网为准' },
      ],
      steps: [
        { title: '先定看不看冷室', body: '两冷室是售票项目——植物爱好者值得，否则户外园区也够看半天。' },
        { title: '排黄昏时段', body: '傍晚到：先看冷室或园区，天黑看擎天树灯光秀（Garden Rhapsody，免费）。' },
        { title: '看当期花展', body: '花穹常有主题轮换（樱花、郁金香等）——官网看档期。' },
      ],
      fallback: '不买票就只走户外园区加灯光秀；滨海湾一圈散步不受影响。',
    },
    price: '户外免费；冷室联票以官网为准', hours: '园区 05:00–02:00；冷室约 09:00–21:00', address: 'Gardens by the Bay, 18 Marina Gardens Dr, Singapore',
    highlights: [
      { title: '擎天树丛', body: '十几棵 25–50 米的人造树；白天看结构，夜里看灯光秀。', photo: 0 },
      { title: '云雾林', body: '35 米室内瀑布与苔藓山——冷室里是真瀑布，值票价的就是它。', photo: 1 },
      { title: '花穹', body: '世界最大玻璃冷室，按洲分区种植；换展频繁。', photo: 2 },
    ],
    walk: [
      { title: '先冷室后户外', body: '下午先逛两冷室（室内有空调避暑），傍晚走户外。' },
      { title: '擎天树下等灯', body: '灯光秀每晚定时（19:45 / 20:45，以官网为准）；提前找位置坐下。' },
      { title: '接金沙或滨海湾', body: '从龙尾桥（Dragonfly Bridge）走回金沙方向看夜景。' },
    ],
    arrival: [
      { title: 'MRT', body: '滨海湾站（Thomson-East Coast 线）或海湾舫站步行即达。' },
      { title: '从金沙', body: '从滨海湾金沙走龙尾桥直达园区。' },
    ],
    tips: [
      { title: '灯光秀免费', body: '每晚两场的 Garden Rhapsody 在擎天树区免费——不必花钱就有内容。' },
      { title: '冷室很冷', body: '冷室空调强劲，带薄外套。' },
    ],
    sources: [{ label: '滨海湾花园官网', url: 'https://www.gardensbythebay.com.sg/' }, stb],
    restaurantIds: [], related: ['merlion-park'],
  },
  {
    id: 'buddha-tooth-relic', city: 'singapore', name: '佛牙寺龙华院', nameLocal: 'Buddha Tooth Relic Temple', type: 'heritage', area: '牛车水',
    intro: '牛车水的唐风大寺，殿内金光与顶楼花园都免费。对面就是麦士威熟食中心。', duration: '45 分钟–1.5 小时',
    booking: {
      status: 'walk-in', label: '免费 · 无需预约',
      summary: '全天免费开放；殿内与顶楼都可看。',
      link: stb,
      rows: [
        { item: '寺庙参观', ticket: '免费', reservation: '不需要' },
      ],
      steps: [
        { title: '看主殿与塔', body: '主殿金佛与顶楼的转经轮花园是两层重点。' },
        { title: '电梯上顶楼', body: '顶楼有小花园与巨大转经轮；多数游客漏掉这层。' },
        { title: '对面就是麦士威', body: '寺对面是麦士威熟食中心——看完寺去吃。' },
      ],
      fallback: '与牛车水街区、印度庙（马里安曼）连走；都免费。',
    },
    price: '免费', hours: '07:00–19:00（以寺方公布为准）', address: 'Buddha Tooth Relic Temple, 288 South Bridge Rd, Singapore',
    highlights: [
      { title: '唐风大殿', body: '按唐代样式重建的大殿金壁辉煌；佛像与供台的密度极高。', photo: 0 },
      { title: '顶楼转经轮', body: '顶楼的巨大转经轮与小花园是隐藏内容；人少安静。', photo: 1 },
      { title: '佛牙舍利塔', body: '寺内供奉佛牙舍利的金塔；远观为主。', photo: 2 },
    ],
    walk: [
      { title: '主殿先看', body: '入殿看主佛与供台；脱鞋按殿内指示。' },
      { title: '电梯上楼', body: '上顶楼看转经轮与花园。' },
      { title: '出门接牛车水', body: '过马路就是麦士威与牛车水街区。' },
    ],
    arrival: [
      { title: 'MRT', body: '牛车水站（东北线/滨海市区线）步行约 5 分钟。' },
    ],
    tips: [
      { title: '免费开放', body: '全寺免费——包括顶楼与舍利塔远观。' },
      { title: '对面吃', body: '寺正对面是麦士威熟食中心，动线天然顺。' },
    ],
    sources: [stb],
    restaurantIds: ['tian-tian', 'hawker-chan'], related: ['maxwell-food-centre'],
  },
  {
    id: 'national-museum-sg', city: 'singapore', name: '新加坡国家博物馆', nameLocal: 'National Museum of Singapore', type: 'art', area: '武吉士',
    intro: '新加坡最老的博物馆，国家历史一条线讲得清楚。常设展对外国游客收费。', duration: '2–3 小时',
    booking: {
      status: 'walk-in', label: '购票入场',
      summary: '常设展厅对非居民收费（票价以官网为准）；特展另计。',
      link: { label: '国家博物馆官网', url: 'https://www.nhb.gov.sg/nationalmuseum' },
      rows: [
        { item: '常设展', ticket: '非居民票价以官网为准', reservation: '现场或线上购票' },
        { item: '特展', ticket: '按档期另计', reservation: '官网查看' },
      ],
      steps: [
        { title: '新加坡厅为主线', body: '按「早期—殖民—独立」一条线看国家叙事；展陈质量不错。' },
        { title: '玻璃圆厅与建筑', body: '19 世纪建筑本身是看点；圆厅与长廊免费区可看。' },
      ],
      fallback: '只想看建筑就走公共区；票价值不值看你对历史的兴趣。',
    },
    price: '非居民以官网为准', hours: '10:00–19:00', address: 'National Museum of Singapore, 93 Stamford Rd, Singapore',
    highlights: [
      { title: '新加坡历史展厅', body: '从马来到独立的一条主线；比想象中有叙事感。', photo: 0 },
      { title: '建筑本身', body: '帕拉第奥式立面与玻璃圆厅——老建筑与新扩建的拼接。', photo: 1 },
      { title: '生活与民俗展', body: '食物、摄影与日常物件展厅接地气，不只是大历史。', photo: 2 },
    ],
    walk: [
      { title: '历史厅主线', body: '先看新加坡厅，再选生活馆或摄影馆。' },
      { title: '建筑绕一圈', body: '外部立面与后山（福康宁）接着散步。' },
    ],
    arrival: [
      { title: 'MRT', body: '多美歌站（Dhoby Ghaut）或百胜站（Bras Basah）步行即达。' },
    ],
    tips: [
      { title: '冷气强', body: '带薄外套；留 2 小时以上。' },
      { title: '接福康宁', body: '馆后就是福康宁公园，看完去公园走。' },
    ],
    sources: [{ label: '国家博物馆官网', url: 'https://www.nhb.gov.sg/nationalmuseum' }, stb],
    restaurantIds: ['killiney'], related: [],
  },
  {
    id: 'merlion-park', city: 'singapore', name: '鱼尾狮公园', nameLocal: 'Merlion Park', type: 'waterfront', area: '滨海湾',
    intro: '喷水鱼尾狮——新加坡的签到点。十分钟看一眼就够，滨海湾一圈散步才是正事。', duration: '30 分钟–1 小时',
    booking: {
      status: 'walk-in', label: '免费开放',
      summary: '全天开放的开放公园；鱼尾狮雕像免费看。',
      link: stb,
      rows: [
        { item: '公园与鱼尾狮', ticket: '免费', reservation: '不需要' },
      ],
      steps: [
        { title: '看鱼尾狮接水', body: '经典机位在桥边；十分钟拍完就散步。' },
        { title: '滨海湾步道', body: '从鱼尾狮沿海湾步道走一圈——金沙、摩天轮、滨海湾花园依次看。' },
        { title: '黄昏来', body: '日落与夜景比白天好看。' },
      ],
      fallback: '人多就远看；滨海湾一圈的散步比雕像本身值。',
    },
    price: '免费', hours: '全天开放', address: 'Merlion Park, 1 Fullerton Rd, Singapore',
    highlights: [
      { title: '鱼尾狮', body: '8.6 米的喷水鱼尾狮；游客照机位在对岸与桥侧。', photo: 0 },
      { title: '滨海湾天际线', body: '从公园看金沙三塔与摩天轮——新加坡天际线全景。', photo: 1 },
      { title: '海湾步道', body: '沿水步道是城市散步的高配版；黄昏光最好。', photo: 2 },
    ],
    walk: [
      { title: '鱼尾狮拍照', body: '拍完往 Fullerton 桥或海湾步道走。' },
      { title: '海湾步道一圈', body: '沿水走看金沙与艺术中心；全程约 1 小时。' },
      { title: '接金沙或老巴刹', body: '过桥到金沙或往老巴刹方向吃饭。' },
    ],
    arrival: [
      { title: 'MRT', body: '莱佛士坊站（Raffles Place）步行约 10 分钟。' },
    ],
    tips: [
      { title: '十分钟景点', body: '把它当滨海湾散步的一站，不是目的地。' },
      { title: '黄昏最佳', body: '日落前到，看亮灯。' },
    ],
    sources: [stb],
    restaurantIds: [], related: ['gardens-by-the-bay'],
  },
  {
    id: 'sentosa', city: 'singapore', name: '圣淘沙', nameLocal: 'Sentosa', type: 'nature', area: '圣淘沙岛',
    intro: '南部离岛：海滩、步道与环球影城。不买乐园票也能过岛走海滩。', duration: '半天–一天',
    booking: {
      status: 'partial', label: '入岛方式分免费/付费',
      summary: '步行从怡丰城跨海步道免费入岛；Sentosa Express 缆车与岛内景点另收费（以官网为准）。',
      link: { label: '圣淘沙官网', url: 'https://www.sentosa.com.sg/' },
      rows: [
        { item: '跨海步道步行入岛', ticket: '免费', reservation: '怡丰城一层步道' },
        { item: 'Sentosa Express', ticket: '约 S$4（以官网为准）', reservation: '现场购票' },
        { item: '环球影城等园内项目', ticket: '另计', reservation: '官网购票' },
      ],
      steps: [
        { title: '先定乐园还是海滩', body: '去环球影城就专排一天；只想散步就从步道进岛走海滩。' },
        { title: '步道免费', body: '从怡丰城走 Sentosa Boardwalk 入岛免费——多数人不知道。' },
        { title: '海滩一侧走', body: 'Siloso / Palawan / Tanjong 三个海滩由步道连接；亚洲大陆最南端的吊桥在 Palawan。' },
      ],
      fallback: '乐园票贵且要排一天；不玩乐园就在海滩与步道走半天回城。',
    },
    price: '步道免费入岛；乐园与项目另计', hours: '海滩全天；项目按各官网', address: 'Sentosa Island, Singapore',
    highlights: [
      { title: '跨海步道', body: '从怡丰城步行入岛的步道本身是好走的——自动步道加分段遮荫。', photo: 0 },
      { title: 'Palawan 海滩与吊桥', body: '吊桥通往「亚洲大陆最南端」小岛——是营销但也是真的小地标。', photo: 1 },
      { title: '海滩散步', body: '三片海滩连成的步道；傍晚不晒。', photo: 2 },
    ],
    walk: [
      { title: '步道入岛', body: '怡丰城走 Boardwalk 进岛约 15 分钟。' },
      { title: '选一片海滩', body: 'Palawan 最热门、Tanjong 最安静；选一处待住。' },
      { title: '傍晚回城', body: '坐 Express 或步道回怡丰城吃晚饭。' },
    ],
    arrival: [
      { title: '步道/捷运', body: '怡丰城（HarbourFront 站）走步道或坐 Sentosa Express。' },
      { title: '打车', body: '可直接入岛，含入岛费；回程岛内打车。' },
    ],
    tips: [
      { title: '乐园另计', body: '环球影城门票单独买且要留一天；与海滩散步分开排。' },
      { title: '防晒', body: '海滩无遮荫；带水与防晒。' },
    ],
    sources: [{ label: '圣淘沙官网', url: 'https://www.sentosa.com.sg/' }, stb],
    restaurantIds: [], related: ['gardens-by-the-bay'],
  },
  {
    id: 'maxwell-food-centre', city: 'singapore', name: '麦士威熟食中心', nameLocal: 'Maxwell Food Centre', type: 'waterfront', area: '牛车水',
    intro: '新加坡最有名的小贩中心：天天海南鸡饭就在这。一顿吃三四摊是正确用法。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '开放食阁',
      summary: '免费进入的公共食阁；约百摊集中，早餐到晚餐都有。',
      link: stb,
      rows: [
        { item: '食阁', ticket: '免费；按摊自付', reservation: '不需要；纸巾占位是本地规则' },
      ],
      steps: [
        { title: '纸巾先占位', body: '本地规则：放一包纸巾在桌上占位再去点——新加坡特色 chope。' },
        { title: '按摊点', body: '天天海南鸡饭、金华鱼片汤等——看排队摊选一两家，别全点一遍。' },
        { title: '吃完自己收', body: '托盘归还与桌面清理是规定；看标识分类放回。' },
      ],
      fallback: '人满就换 Amoy 或老巴刹；小贩中心之间的替代性很强。',
    },
    price: '免费入场；餐食按摊', hours: '约 08:00–21:00（各摊不一）', address: 'Maxwell Food Centre, 1 Kadayanallur St, Singapore',
    highlights: [
      { title: '天天海南鸡饭', body: '小贩中心的招牌摊位；排队看时段。', photo: 0 },
      { title: '百摊集中', body: '从鱼片汤到甘蔗汁一阁收齐——看图点摊。', photo: 1 },
      { title: 'chope 文化', body: '纸巾占位的规则本身就是新加坡日常的一课。', photo: 2 },
    ],
    walk: [
      { title: '占位再点', body: '先占位再按摊点；一次点两三摊分着吃。' },
      { title: '吃完收桌', body: '按标识归还托盘；被罚款是真事。' },
      { title: '接佛牙寺', body: '过马路就是佛牙寺。' },
    ],
    arrival: [
      { title: 'MRT', body: '牛车水站或丹戎巴葛站步行约 5 分钟。' },
    ],
    tips: [
      { title: '托盘必还', body: '小贩中心有强制归还托盘规定；按标识操作。' },
      { title: '别点太多', body: '份量不小；两三摊分食刚好。' },
    ],
    sources: [stb],
    restaurantIds: ['tian-tian', 'hawker-chan'], related: ['buddha-tooth-relic'],
  },
  {
    id: 'ruins-st-paul', city: 'macau', name: '大三巴牌坊', nameLocal: 'Ruins of St. Paul\'s', type: 'heritage', area: '历史城区',
    intro: '只剩立面的圣保禄教堂遗址，澳门的象征。清晨与深夜它才是安静的。', duration: '30 分钟–1 小时',
    booking: {
      status: 'walk-in', label: '免费开放',
      summary: '遗址立面与后方的墓室/博物馆免费；牌坊前有台阶与广场。',
      link: mgto,
      rows: [
        { item: '牌坊与墓室', ticket: '免费', reservation: '不需要' },
      ],
      steps: [
        { title: '清晨或入夜', body: '白天牌坊前总是人海；清晨 07:00–09:00 或晚上 21:00 后它是安静的。' },
        { title: '看后殿遗址', body: '牌坊后有墓室与天主教艺术博物馆（免费），多数游客只看正面。' },
        { title: '接大炮台', body: '牌坊旁上坡是大炮台花园，看澳门全景。' },
      ],
      fallback: '人多就往哪吒庙或旧城墙走——大三巴周边全是世界遗产点。',
    },
    price: '免费', hours: '全天开放（墓室约 09:00–18:00）', address: '大三巴牌坊，澳門大三巴斜港',
    highlights: [
      { title: '立面本身', body: '五层石立面是天主教堂的前壁；看细部雕刻与中日元素。', photo: 0 },
      { title: '牌坊后墓室', body: '牌坊背后藏着墓室与宗教艺术展品——多数人漏掉。', photo: 1 },
      { title: '哪吒庙与旧城墙', body: '牌坊旁的小哪吒庙与旧城墙遗址同框——中西并置。', photo: 2 },
    ],
    walk: [
      { title: '牌坊前看立面', body: '先看正面，再绕到后殿看遗址结构。' },
      { title: '后殿博物馆', body: '墓室与展品在后殿地下室。' },
      { title: '上大炮台', body: '右侧台阶上大炮台花园看全景。' },
    ],
    arrival: [
      { title: '步行', body: '议事亭前地步行约 10 分钟上坡。' },
      { title: '公交', body: '多条巴士到新马路/大三巴附近下车步行。' },
    ],
    tips: [
      { title: '人多的时间窗', body: '10:00–17:00 最挤；清晨或晚上体验完全不同。' },
      { title: '免费博物馆', body: '牌坊后的天主教艺术博物馆与墓室免费，值得进去。' },
    ],
    sources: [mgto],
    restaurantIds: ['margarets', 'wong-chi-kee'], related: ['senado-square', 'macau-museum'],
  },
  {
    id: 'senado-square', city: 'macau', name: '议事亭前地', nameLocal: 'Largo do Senado', type: 'waterfront', area: '历史城区',
    intro: '波浪纹石砖广场与葡式立面群，澳门历史城区的中心。免费开放的城市客厅。', duration: '30 分钟–1.5 小时',
    booking: {
      status: 'walk-in', label: '开放广场',
      summary: '全天开放的城市广场；周边议事亭、邮政局等建筑外观可看，部分可入内。',
      link: mgto,
      rows: [
        { item: '广场与周边', ticket: '免费', reservation: '不需要' },
      ],
      steps: [
        { title: '看波浪纹地', body: '黑白波浪纹葡式碎石路是澳门的标志；踩在上面本身就是内容。' },
        { title: '周边建筑看立面', body: '仁慈堂、邮政局、民政总署——沿广场一圈看葡式立面。' },
        { title: '接大三巴', body: '从广场沿手信街步行 10 分钟到大三巴。' },
      ],
      fallback: '广场是必经之路——不必专程，走历史城区时自然经过。',
    },
    price: '免费', hours: '全天开放', address: '議事亭前地，澳門中區',
    highlights: [
      { title: '波浪纹石砖', body: '1990 年代铺的葡式碎石路面是澳门的地景名片。', photo: 0 },
      { title: '葡式立面群', body: '明黄与粉白的殖民立面连排——看色彩与窗框。', photo: 1 },
      { title: '节庆与日常', body: '广场是澳门人的客厅——圣诞灯饰、农曆年布置都会在这里。', photo: 2 },
    ],
    walk: [
      { title: '广场绕一圈', body: '看喷泉、立面与地面；往里走接商业街。' },
      { title: '手信街方向', body: '沿大三巴街方向走就是肉干与杏仁饼手信区。' },
      { title: '接大三巴或妈阁', body: '北上大三巴，南往妈阁庙。' },
    ],
    arrival: [
      { title: '步行', body: '历史城区中心点，从任何方向步行可达。' },
    ],
    tips: [
      { title: '石板路滑', body: '雨天波浪纹石砖湿滑——慢走。' },
      { title: '手信区连着', body: '大三巴街上的手信店试吃多；礼貌尝即可。' },
    ],
    sources: [mgto],
    restaurantIds: ['wong-chi-kee', 'nam-peng', 'margarets'], related: ['ruins-st-paul', 'a-ma-temple'],
  },
  {
    id: 'a-ma-temple', city: 'macau', name: '妈阁庙', nameLocal: 'Templo de A-Má / A-Ma Temple', type: 'heritage', area: '妈阁',
    intro: '澳门名字的由来，五百年的妈祖庙依山而建。清晨的香火与山石是它的真面目。', duration: '45 分钟–1 小时',
    booking: {
      status: 'walk-in', label: '免费开放',
      summary: '全天开放的庙宇；清晨香客比游客多。',
      link: mgto,
      rows: [
        { item: '庙宇参拜', ticket: '免费', reservation: '不需要' },
      ],
      steps: [
        { title: '清晨去', body: '早课与香火是妈阁庙的日常；旅行团十点后到。' },
        { title: '按山势走殿', body: '庙沿山坡分几进殿——跟着石阶与香火走。' },
        { title: '看摩崖与石狮', body: '庙内山石上的题刻与石狮是古迹本体。' },
      ],
      fallback: '庙不大，看完接妈阁庙前地或海事博物馆（附近有馆）。',
    },
    price: '免费', hours: '约 07:00–18:00', address: '媽閣廟，澳門媽閣上街',
    highlights: [
      { title: '依山殿宇', body: '庙沿山分进，石阶、石门与香火错落——比平面图式的庙有意思。', photo: 0 },
      { title: '摩崖题刻', body: '山石上的历代题刻是古迹本体；看字看石。', photo: 1 },
      { title: '妈阁前地', body: '庙前广场与内港；澳门的「 Macau」名字传说由此来。', photo: 2 },
    ],
    walk: [
      { title: '从庙前地进', body: '从妈阁庙前地进庙，沿山势上行。' },
      { title: '各殿看石刻', body: '石阶两侧看摩崖与殿内香火。' },
      { title: '出来接海事博物馆', body: '庙对面有海事博物馆（看开放情况）。' },
    ],
    arrival: [
      { title: '公交/打车', body: '妈阁站或妈阁庙前地下车；距议事亭约 15–20 分钟步行。' },
    ],
    tips: [
      { title: '香火味重', body: '庙内香火旺；对烟敏感就在外围看。' },
      { title: '清晨最佳', body: '7–9 点的妈阁庙属于信众，不是游客。' },
    ],
    sources: [mgto],
    restaurantIds: ['litoral'], related: ['senado-square', 'coloane-village'],
  },
  {
    id: 'macau-museum', city: 'macau', name: '澳门博物馆', nameLocal: 'Museu de Macau', type: 'art', area: '大炮台',
    intro: '大炮台上的三层博物馆：澳门民俗、葡管历史与城市变迁。门票便宜，顺路看。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '现场购票',
      summary: '门票约 15 澳门元（以现场为准）；周一休馆。与大三巴、大炮台同一山坡。',
      link: mgto,
      rows: [
        { item: '博物馆', ticket: '约 15 澳门元（以现场为准）', reservation: '现场购票' },
      ],
      steps: [
        { title: '大三巴顺路上山', body: '大三巴右侧台阶上大炮台；博物馆在炮台内。' },
        { title: '先看炮台景', body: '山顶炮台看澳门半岛全景；博物馆在室内。' },
        { title: '民俗层细看', body: '底层的老街景与婚俗展比图文好看——看生活场景。' },
      ],
      fallback: '周一休馆就只看大炮台；票便宜不必纠结。',
    },
    price: '约 15 澳门元（以现场为准）', hours: '10:00–18:00；周一休馆', address: '澳門博物館，大炮台（大三巴牌坊側）',
    highlights: [
      { title: '大炮台全景', body: '博物馆所在的大炮台是澳门半岛的制高点——先看风景。', photo: 0 },
      { title: '老街景复原', body: '底层展厅复原了澳门旧街与店屋——比照片直观。', photo: 1 },
      { title: '婚俗与日常', body: '水上人家、婚俗与节庆的展品讲澳门生活史。', photo: 2 },
    ],
    walk: [
      { title: '大炮台先看景', body: '上山先看炮台与全景，再进馆。' },
      { title: '馆内按层走', body: '三层展馆按主题分；民俗层最有意思。' },
      { title: '下山回大三巴', body: '从原路或博物馆电梯下山。' },
    ],
    arrival: [
      { title: '步行', body: '从大三巴牌坊旁台阶上山；或从新马路方向。' },
    ],
    tips: [
      { title: '周一休馆', body: '排行程避开周一。' },
      { title: '与大三巴打包', body: '两处共享山坡，一并安排。' },
    ],
    sources: [mgto],
    restaurantIds: ['margarets'], related: ['ruins-st-paul'],
  },
  {
    id: 'coloane-village', city: 'macau', name: '路环村', nameLocal: 'Vila de Coloane', type: 'waterfront', area: '路环',
    intro: '澳门的「乡下」：圣方济各堂、码头街与安德鲁饼店总店。与半岛是两个世界。', duration: '半天',
    booking: {
      status: 'walk-in', label: '开放街区',
      summary: '免费开放的渔村小镇；巴士或打车约 30–40 分钟从半岛到。',
      link: mgto,
      rows: [
        { item: '街区散步', ticket: '免费', reservation: '不需要' },
      ],
      steps: [
        { title: '专程半天', body: '路环离半岛与路氹都有距离——排一个半天，不穿插。' },
        { title: '安德鲁总店买挞', body: 'Lord Stow\'s 总店在路环码头街——吃页有详情。' },
        { title: '圣方济各堂看立面', body: '小教堂黄色立面与鹅卵石广场是路环的中心。' },
      ],
      fallback: '公交班次疏——打车或算好巴士时间；半天走完回半岛。',
    },
    price: '免费', hours: '全天开放', address: '路環市區，澳門路環',
    highlights: [
      { title: '圣方济各堂', body: '黄白小教堂与喷泉广场——路环的心脏，也是电影取景地。', photo: 0 },
      { title: '码头街与旧船厂', body: '沿河的旧船厂与铁皮屋是澳门仅存的渔村痕迹。', photo: 1 },
      { title: '安德鲁总店', body: '葡挞发源店就在路环——总店排队比市区分店短。', photo: 2 },
    ],
    walk: [
      { title: '教堂广场集合', body: '到圣方济各堂前地，先看教堂与广场。' },
      { title: '码头街走', body: '沿河边走看船厂与老街；买安德鲁挞。' },
      { title: '接黑沙滩或返程', body: '体力好可接黑沙滩；不然回半岛。' },
    ],
    arrival: [
      { title: '巴士', body: '25/26A 等线从半岛或路氹到路环；班次以巴士官网为准。' },
      { title: '打车', body: '从路氹打车约 15–20 分钟；从半岛 30+ 分钟。' },
    ],
    tips: [
      { title: '半天就够', body: '路环很小；别为它排一整天。' },
      { title: '巴士班次', body: '离岛巴士间隔长；记下回程班次或打车。' },
    ],
    sources: [mgto],
    restaurantIds: ['lord-stows'], related: ['venetian-macao'],
  },
  {
    id: 'venetian-macao', city: 'macau', name: '威尼斯人', nameLocal: 'The Venetian Macao', type: 'landmark', area: '路氹',
    intro: '室内运河与人造天空：澳门的另一面。购物中心免费进，贡多拉船另收费。', duration: '1.5–3 小时',
    booking: {
      status: 'walk-in', label: '商场免费 · 贡多拉另计',
      summary: '大运河购物中心免费入场；贡多拉船票按官网/现场价。',
      link: { label: '澳门威尼斯人', url: 'https://www.venetianmacao.com/' },
      rows: [
        { item: '大运河购物中心', ticket: '免费', reservation: '不需要' },
        { item: '贡多拉', ticket: '以官网/现场价为准', reservation: '现场购票' },
      ],
      steps: [
        { title: '三楼大运河', body: '三楼大运河购物中心是主景点：室内运河、人造天空与拱桥。' },
        { title: '贡多拉看意愿', body: '船夫唱歌的贡多拉是体验项——不坐船也能看运河。' },
        { title: '从半岛/机场接', body: '赌场接驳车（发财车）或巴士到路氹；回程同。' },
      ],
      fallback: '不进赌场也行——购物区与运河层适合只看建筑；带小孩另看限制。',
    },
    price: '购物中心免费；贡多拉另计', hours: '约 10:00–22:00（购物区）', address: '澳門威尼斯人，路氹金光大道',
    highlights: [
      { title: '室内运河', body: '三楼人造天空下的运河与拱桥——澳门的「意大利」。', photo: 0 },
      { title: '贡多拉船', body: '船夫唱歌的室内贡多拉是招牌体验；坐船或岸上看。', photo: 1 },
      { title: '金光大道外景', body: '威尼斯人外的路氹天际线——酒店群建筑本身就是看点。', photo: 2 },
    ],
    walk: [
      { title: '三楼运河区', body: '沿运河走一圈看人造天空与拱桥。' },
      { title: '购物中心', body: '购物餐饮一体；按兴趣逛。' },
      { title: '接官也街', body: '威尼斯人步行约 10–15 分钟到氹仔官也街吃。' },
    ],
    arrival: [
      { title: '发财车/巴士', body: '关闸、外港与机场有免费赌场接驳车到威尼斯人；巴士亦可。' },
      { title: '步行官也街', body: '与氹仔旧城区步行相连。' },
    ],
    tips: [
      { title: '购物中心免费', body: '不去赌场也能看运河——大运河层是公共区域。' },
      { title: '空调冷', body: '室内空调强劲，带薄外套。' },
    ],
    sources: [{ label: '澳门威尼斯人', url: 'https://www.venetianmacao.com/' }, mgto],
    restaurantIds: ['tai-lei-loi-kei'], related: ['coloane-village'],
  },
]
