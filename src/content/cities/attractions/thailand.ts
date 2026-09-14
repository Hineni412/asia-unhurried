import type { Attraction } from '../../attractions'

const tat = { label: '泰国国家旅游局 TAT', url: 'https://www.tourismthailand.org/' }

export const thailandAttractions: Attraction[] = [
  {
    id: 'wat-chedi-luang', city: 'chiang-mai', name: '契迪龙寺', nameLocal: 'วัดเจดีย์หลวง Wat Chedi Luang', type: 'heritage', area: '古城',
    intro: '古城中心的残破大佛塔——15 世纪地震留下的残缺本身就是清迈最动人的画面。', duration: '45 分钟–1.5 小时',
    booking: {
      status: 'walk-in', label: '现场购票',
      summary: '门票约 50 泰铢（以现场为准）；寺内仍在使用，进殿脱鞋、衣着遮肩膝。',
      link: tat,
      rows: [
        { item: '寺院参观', ticket: '约 50 泰铢（以现场为准）', reservation: '现场购票' },
      ],
      steps: [
        { title: '古城中心步行', body: '契迪龙寺在古城正中，任何方向走过去都不远。' },
        { title: '看大佛塔四面', body: '绕塔一圈看残存的大象与佛像浮雕；修复与原状并置。' },
        { title: '殿内安静坐一会', body: '主殿与侧殿可入内；看当地人的日常参拜。' },
      ],
      fallback: '古城内寺院密集，一处关门换另一处；Wat Phra Singh 步行可达。',
    },
    price: '约 50 泰铢（以现场为准）', hours: '约 06:00–18:00', address: 'วัดเจดีย์หลวง, ถนนพระปกเกล้า เชียงใหม่',
    highlights: [
      { title: '残破的大佛塔', body: '原高 80 余米的兰纳式佛塔只剩半截——残缺让尺度感反而更强。', photo: 0 },
      { title: '殿内壁画与僧团', body: '主殿的壁画与佛像仍在使用；晨昏能听到诵经。', photo: 1 },
      { title: '古城的位置感', body: '以佛塔为参照认路——它在古城几何中心附近。', photo: 2 },
    ],
    walk: [
      { title: '佛塔绕一圈', body: '先看四面再看殿；绕塔时看不同角度的浮雕。' },
      { title: '殿内静坐', body: '进殿脱鞋坐一会儿；别急着拍完照就走。' },
      { title: '接古城散步', body: '出门接 Rachadamnoen 路；周日这条街就是步行街。' },
    ],
    arrival: [
      { title: '步行/双条', body: '古城内步行；从外围坐双条车（songthaew）或嘟嘟车到门口。' },
    ],
    tips: [
      { title: '寺院规矩', body: '脱鞋进殿、遮肩膝；不指佛像、脚不对佛。' },
      { title: '与夜市同路', body: '周日晚上的步行街就从寺前这条路开始——先看寺再逛市。' },
    ],
    sources: [tat],
    restaurantIds: ['huen-phen'], related: ['wat-phra-singh', 'sunday-walking-street'],
  },
  {
    id: 'wat-phra-singh', city: 'chiang-mai', name: '帕辛寺', nameLocal: 'วัดพระสิงห์ Wat Phra Singh', type: 'heritage', area: '古城西',
    intro: '清迈最受尊崇的寺院，Phra Singh 佛像在此。殿内壁画与木雕值得细看。', duration: '45 分钟–1.5 小时',
    booking: {
      status: 'walk-in', label: '寺域免费 · 主殿或收小额维护费',
      summary: '寺域免费进入；主殿对游客可能收小额维护费（约 20–50 泰铢，以现场为准）。',
      link: tat,
      rows: [
        { item: '寺域', ticket: '免费', reservation: '不需要' },
        { item: '主殿（游客）', ticket: '约 20–50 泰铢（以现场为准）', reservation: '现场' },
      ],
      steps: [
        { title: '看主殿与僧院', body: '主殿供 Phra Singh 佛；僧院区的木构建筑与壁画看细节。' },
        { title: '与契迪龙寺连看', body: '两寺在古城一条主轴上，步行约 15 分钟。' },
      ],
      fallback: '寺院逛多了会麻木——帕辛寺与契迪龙寺选一细看，另一处快走。',
    },
    price: '寺域免费；主殿小额维护费', hours: '约 06:00–20:00', address: 'วัดพระสิงห์, ถนนสามล้าน เชียงใหม่',
    highlights: [
      { title: 'Phra Singh 佛', body: '主殿供奉的狮佛是清迈的守护佛——宋干节游行的主角。', photo: 0 },
      { title: '藏经阁木构', body: '藏经阁的雕花与高架结构是兰纳木构的精品。', photo: 1 },
      { title: '殿内壁画', body: '壁画描绘清迈旧日生活——看画里的服饰与市集。', photo: 2 },
    ],
    walk: [
      { title: '主殿先看', body: '先看 Phra Singh 佛与殿内壁画，再看僧院建筑。' },
      { title: '绕寺域走', body: '寺域内有多座殿与佛塔；找安静的院子坐一会。' },
      { title: '接古城西侧', body: '寺在古城西端，出门接 Samlan 路或回 Rachadamnoen。' },
    ],
    arrival: [
      { title: '步行', body: '古城内步行即达；从塔佩门方向约 15 分钟。' },
    ],
    tips: [
      { title: '仍是活的僧院', body: '寺内有僧团驻锡；殿内安静、脱鞋。' },
      { title: '壁画别错过', body: '殿内两侧壁画是泰北生活图景——值得慢看。' },
    ],
    sources: [tat],
    restaurantIds: [], related: ['wat-chedi-luang'],
  },
  {
    id: 'doi-suthep', city: 'chiang-mai', name: '素贴山双龙寺', nameLocal: 'วัดพระธาตุดอยสุเทพ', type: 'heritage', area: '素贴山',
    intro: '山上的金色佛塔与清迈全景。306 级龙梯或缆车上山；晴天看城，雾天看云。', duration: '半天（含往返）',
    booking: {
      status: 'walk-in', label: '现场购票',
      summary: '寺庙门票约 30 泰铢 + 可选缆车（约 50 泰铢往返）；上山的双条车在古城外乘坐。',
      link: tat,
      rows: [
        { item: '寺院门票', ticket: '约 30 泰铢（以现场为准）', reservation: '现场购票' },
        { item: '缆车', ticket: '约 50 泰铢往返', reservation: '不想爬 306 级台阶就坐' },
        { item: '双条上山', ticket: '按人议价/包车', reservation: '古城外或清迈大学门拼车' },
      ],
      steps: [
        { title: '先解决上山', body: '古城外或清迈大学门口拼双条上山约 30 分钟；包车或自驾更灵活。' },
        { title: '决定走梯还是缆车', body: '306 级龙梯不算难；缆车适合带老人或雨天。' },
        { title: '看天气定值不值', body: '晴天在寺后平台看清迈全景；雾天就看金塔本身。' },
      ],
      fallback: '天气差就只看寺院不看全景；山路晕车者备好晕车药。',
    },
    price: '门票约 30 泰铢 + 缆车/双条另计', hours: '约 06:00–18:00', address: 'วัดพระธาตุดอยสุเทพ, ดอยสุเทพ เชียงใหม่',
    highlights: [
      { title: '306 级龙梯', body: '两侧那伽龙身的台阶是登寺的仪式性入口；缆车可替代。', photo: 0 },
      { title: '金色佛塔', body: '山顶的金塔在阳光下极亮；绕塔三圈是标准动作。', photo: 1 },
      { title: '清迈全景', body: '寺后平台看清迈城与机场；能见度决定一切。', photo: 2 },
    ],
    walk: [
      { title: '龙梯上或缆车', body: '体力好走龙梯；保存体力坐缆车。' },
      { title: '绕塔看城', body: '金塔绕行后去后平台看全景；停留看云。' },
      { title: '下山接尼曼或古城', body: '下山顺路经过清迈大学/尼曼方向。' },
    ],
    arrival: [
      { title: '双条车', body: '古城外或清迈大学门口拼车上山；单程约 30 分钟。' },
      { title: '包车/自驾', body: '包车半天含等候更省心；山路弯多。' },
    ],
    tips: [
      { title: '能见度', body: '烧山季（约 2–4 月）能见度差；雨季云多。' },
      { title: '寺庙规矩', body: '进寺遮肩膝、脱鞋；山上比城里凉，带薄外套。' },
    ],
    sources: [tat],
    restaurantIds: [], related: ['wat-umong'],
  },
  {
    id: 'sunday-walking-street', city: 'chiang-mai', name: '周日步行街', nameLocal: 'ถนนคนเดินวันอาทิตย์', type: 'waterfront', area: '古城',
    intro: 'Rachadamnoen 路每周日傍晚变成一公里长的市集。手作、小吃与按摩——把周日留给它。', duration: '2–3 小时（傍晚）',
    booking: {
      status: 'walk-in', label: '开放市集',
      summary: '每周日傍晚约 17:00–22:00；从塔佩门到帕辛寺一线封路。',
      link: tat,
      rows: [
        { item: '市集', ticket: '免费', reservation: '不需要；周日限定' },
      ],
      steps: [
        { title: '把行程对准周日', body: '清迈行程安排尽量覆盖一个周日；错过周日还有周六步行街（城南）。' },
        { title: '傍晚去', body: '17:00 摊位陆续开，入夜后人多；走一遍看，回头再买。' },
        { title: '走完整条', body: '从塔佩门走到帕辛寺约一公里；支巷里有美食广场与按摩。' },
      ],
      fallback: '不在周日就改周六步行街（Wualai 路）或夜市（Night Bazaar）。',
    },
    price: '免费', hours: '周日约 17:00–22:00', address: 'ถนนราชดำเนิน เชียงใหม่（塔佩门—帕辛寺）',
    highlights: [
      { title: '手工艺摊', body: '银饰、布包、皂雕、伞——比夜市批发货更本地。', photo: 0 },
      { title: '街头小吃', body: '芒果糯米、烤串、泰北小吃边走边尝；支巷有集中的食区。', photo: 1 },
      { title: '寺庙里的按摩摊', body: '市集支线的寺院院子里有露天足摩——清迈特色休息站。', photo: 2 },
    ],
    walk: [
      { title: '塔佩门出发', body: '从东端塔佩门进，沿 Rachadamnoen 往西走。' },
      { title: '支巷别错过', body: '主街两侧支巷有食区与按摩；看人群拐进去。' },
      { title: '帕辛寺收尾', body: '西端到帕辛寺前；寺域内也有摊位。' },
    ],
    arrival: [
      { title: '步行', body: '古城内步行；塔佩门是好认的起点。' },
    ],
    tips: [
      { title: '只有周日', body: '行程避开周日就少一个清迈的核心体验；周六步行街是替代。' },
      { title: '带现金与耐性', body: '人多走得慢，现金付摊；砍价礼貌地进行。' },
    ],
    sources: [tat],
    restaurantIds: [], related: ['wat-chedi-luang', 'wat-phra-singh'],
  },
  {
    id: 'wat-umong', city: 'chiang-mai', name: '乌蒙寺', nameLocal: 'วัดอุโมงค์ Wat Umong', type: 'nature', area: '素贴山脚',
    intro: '隧道里的森林寺院：700 年的老树与阴凉隧道，是清迈最不像景点的寺。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '免费（随缘）',
      summary: '寺域免费开放；隧道与湖边随喜布施。',
      link: tat,
      rows: [
        { item: '寺域与隧道', ticket: '免费（乐捐）', reservation: '不需要' },
      ],
      steps: [
        { title: '打车到山脚', body: '乌蒙寺在素贴山脚，古城西南约 15 分钟车程。' },
        { title: '走隧道看佛塔', body: '隧道里凉且有佛龛；出来接山上的残塔。' },
        { title: '湖边坐一会', body: '寺内湖与鸽群；适合发呆。' },
      ],
      fallback: '不想走远就在寺内湖与隧道区停留；回程打车或让司机等。',
    },
    price: '免费', hours: '约 06:00–18:00', address: 'วัดอุโมงค์, ตำบลสุเทพ เชียงใหม่',
    highlights: [
      { title: '隧道佛龛', body: '三条砖拱隧道里藏着佛龛；阴凉安静，是全城最独特的寺院空间。', photo: 0 },
      { title: '山顶残塔', body: '隧道上方的残破佛塔比山下多数寺更有味道。', photo: 1 },
      { title: '森林与湖', body: '寺在树林里，湖边可喂鱼看鸽——完全不是观光寺院的样子。', photo: 2 },
    ],
    walk: [
      { title: '隧道先走', body: '隧道口有指示牌；里面凉，看佛龛。' },
      { title: '上塔看残迹', body: '隧道上方山上的佛塔绕一圈。' },
      { title: '湖边收尾', body: '寺内湖边坐下；这寺的用处就是让人安静。' },
    ],
    arrival: [
      { title: '打车/双条', body: '古城西南约 15 分钟；回程门口叫车或约定等候。' },
    ],
    tips: [
      { title: '防蚊', body: '林区蚊虫多；带驱蚊。' },
      { title: '禅修中心', body: '寺内有禅修课程；短期游客就散步即可。' },
    ],
    sources: [tat],
    restaurantIds: [], related: ['doi-suthep'],
  },
  {
    id: 'grand-palace', city: 'bangkok', name: '大皇宫与玉佛寺', nameLocal: 'พระบรมมหาราชวัง Grand Palace', type: 'heritage', area: '老城',
    intro: '曼谷的第一看点：玉佛寺的贴金与琉璃密度全泰最高。赶早、遮肩膝、别理门口「今天关门」的话术。', duration: '2–3 小时',
    booking: {
      status: 'recommended', label: '建议线上购票',
      summary: '门票 500 泰铢含玉佛寺；可现场买但旺季排队，建议官网或现场售票处提前安排。',
      link: { label: '大皇宫官方票务', url: 'https://www.royalgrandpalace.th/' },
      rows: [
        { item: '大皇宫与玉佛寺', ticket: '500 泰铢（以官网为准）', reservation: '现场或线上购票' },
      ],
      steps: [
        { title: '开门时段去', body: '08:30 开门人最少；中午团队最密且最热。' },
        { title: '着装达标', body: '长裤/长裙、有袖上衣；门口有租纱笼但自己穿对更省事。' },
        { title: '玉佛寺先走', body: '入口进后先看玉佛寺回廊壁画与主殿；再走出看宫殿外观。' },
      ],
      fallback: '只看不进也行——外围看建筑群与湄南河方向散步；别信门口「关门了跟我去别处」的拉客。',
    },
    price: '500 泰铢（以官网为准）', hours: '08:30–15:30（以官网为准）', address: 'Grand Palace, Na Phra Lan Rd, Phra Nakhon, Bangkok',
    highlights: [
      { title: '玉佛寺回廊', body: '回廊壁面的《罗摩衍那》连环画是泰国艺术教科书；沿廊慢慢看。', photo: 0 },
      { title: '玉佛与主殿', body: '殿内玉佛很小但地位最高；脱鞋进殿，不拍照。', photo: 1 },
      { title: '宫殿群外观', body: '西式立面与泰式屋顶并置的宫殿群——看混搭看尺度。', photo: 2 },
    ],
    walk: [
      { title: '玉佛寺区先走', body: '回廊、主殿、金塔一线按顺序看。' },
      { title: '宫殿区外观', body: '出寺院区看 Chakri 宫等外观；多数不开放入内。' },
      { title: '出门接卧佛寺', body: '大皇宫南门步行 10 分钟到卧佛寺——打包一个上午。' },
    ],
    arrival: [
      { title: '船+步行', body: 'BTS 到 Saphan Taksin 转 Chao Phraya 船到 Tha Chang 码头步行约 10 分钟。' },
      { title: '打车', body: '打车到大皇宫附近下车；回程在码头上船避开堵车。' },
    ],
    tips: [
      { title: '门口的「关门」话术', body: '寺外有人谎称关门拉你去别处——直接走向官方售票口。' },
      { title: '着装严格', body: '长裤与有袖上衣是硬要求；凉鞋可以，拖鞋式无跟慎入。' },
    ],
    sources: [{ label: '大皇宫官方票务', url: 'https://www.royalgrandpalace.th/' }, tat],
    restaurantIds: ['thipsamai'], related: ['wat-pho', 'wat-arun'],
  },
  {
    id: 'wat-pho', city: 'bangkok', name: '卧佛寺', nameLocal: 'วัดโพธิ์ Wat Pho', type: 'heritage', area: '老城',
    intro: '46 米卧佛与泰国按摩的发源地。比大皇宫人少、殿多，可看的东西更松。', duration: '1.5–2 小时',
    booking: {
      status: 'walk-in', label: '现场购票',
      summary: '门票约 300 泰铢（以现场为准）；含一小瓶水。',
      link: tat,
      rows: [
        { item: '寺院参观', ticket: '约 300 泰铢（以现场为准）', reservation: '现场购票' },
      ],
      steps: [
        { title: '卧佛殿先看', body: '大殿里的卧佛是主角；从脚底看细节。' },
        { title: '塔群与庭院', body: '四座大佛塔的瓷片贴花极细；绕塔群走一圈。' },
        { title: '按摩学校可选', body: '寺内按摩学校是真按摩发源——想体验按现场排队。' },
      ],
      fallback: '看完卧佛就走也行；与大皇宫同上午最顺。',
    },
    price: '约 300 泰铢（以现场为准）', hours: '08:00–18:30（以现场为准）', address: 'Wat Pho, 2 Sanam Chai Rd, Phra Nakhon, Bangkok',
    highlights: [
      { title: '46 米卧佛', body: '殿内横躺的巨佛是曼谷最大卧佛；佛足的珍珠母镶嵌要看。', photo: 0 },
      { title: '瓷片佛塔群', body: '四座大塔的彩瓷贴花是泰国工艺的密集展示。', photo: 1 },
      { title: '按摩发源', body: '寺内按摩学校是泰式按摩的祖庭；石刻经络图刻在廊下。', photo: 2 },
    ],
    walk: [
      { title: '卧佛殿', body: '进殿绕佛一圈看足底珍珠母。' },
      { title: '塔群绕', body: '四座大塔在寺域中心；细看瓷片拼花。' },
      { title: '廊下经图', body: '廊下与墙上有按摩经络石刻——按摩学校就在这。' },
    ],
    arrival: [
      { title: '船', body: 'Tha Chang 或 Tha Tien 码头下船步行即到。' },
      { title: '从大皇宫', body: '大皇宫南门步行约 10 分钟。' },
    ],
    tips: [
      { title: '按摩排队', body: '寺内按摩受欢迎要排队；或到店外同校系统店。' },
      { title: '塔群细看', body: '远看塔群热闹，近看瓷片细节才是真功夫。' },
    ],
    sources: [tat],
    restaurantIds: ['thipsamai'], related: ['grand-palace', 'wat-arun'],
  },
  {
    id: 'wat-arun', city: 'bangkok', name: '郑王庙', nameLocal: 'วัดอรุณ Wat Arun', type: 'heritage', area: '湄南河西岸',
    intro: '黎明寺的瓷片高塔在河西岸。最好看的方式：在河对岸看，或坐船过去登塔。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '现场购票',
      summary: '门票约 200 泰铢（以现场为准）；从 Tha Tien 码头坐摆渡过河。',
      link: tat,
      rows: [
        { item: '寺院门票', ticket: '约 200 泰铢（以现场为准）', reservation: '现场购票' },
        { item: '摆渡', ticket: '几泰铢', reservation: 'Tha Tien 码头现场买票' },
      ],
      steps: [
        { title: '坐船过河', body: '卧佛寺旁 Tha Tien 码头坐小摆渡过河几分钟——过河本身就是内容。' },
        { title: '登塔看河', body: '塔身可登部分台阶；看对岸老城与河面。' },
        { title: '回对岸看全景', body: '从对岸咖啡馆或河边看郑王庙反而是最好的角度——尤其日落。' },
      ],
      fallback: '只看对岸也行——郑王庙的剪影比塔内更经典。',
    },
    price: '约 200 泰铢（以现场为准）', hours: '08:00–18:00（以现场为准）', address: 'Wat Arun, 158 Wang Doem Rd, Bangkok Yai, Bangkok',
    highlights: [
      { title: '瓷片高塔', body: '主塔用中国瓷片贴成——近看是瓷碗与碎片的拼贴，远看是日出时的剪影。', photo: 0 },
      { title: '塔上台阶', body: '可登部分陡峭台阶；从塔上看湄南河弯道。', photo: 1 },
      { title: '河对岸视角', body: '从卧佛寺一侧或咖啡馆看过来才是明信片角度。', photo: 2 },
    ],
    walk: [
      { title: '摆渡过河', body: 'Tha Tien 码头几分钟过河；上岸即寺门。' },
      { title: '登塔与绕塔', body: '塔基绕一圈看瓷片，可登台阶上二层。' },
      { title: '回对岸看全景', body: '回东岸在河边或楼上咖啡馆看日落。' },
    ],
    arrival: [
      { title: '摆渡', body: 'Tha Tien 码头坐摆渡；与卧佛寺同一码头区。' },
      { title: '船', body: 'Chao Phraya 船到 Wat Arun 码头亦可。' },
    ],
    tips: [
      { title: '对岸才是机位', body: '登塔看河，拍塔在岸——两者别搞反。' },
      { title: '台阶陡', body: '登塔台阶很陡；恐高就在塔基看。' },
    ],
    sources: [tat],
    restaurantIds: [], related: ['wat-pho', 'grand-palace'],
  },
  {
    id: 'chatuchak-market', city: 'bangkok', name: '恰图恰周末市集', nameLocal: 'ตลาดนัดจตุจักร', type: 'waterfront', area: '恰图恰',
    intro: '上万摊位的周末市集：什么都有，什么都不用全看。选两个区逛，中午热了就撤。', duration: '2–4 小时',
    booking: {
      status: 'walk-in', label: '开放市集 · 周末限定',
      summary: '周六日 09:00–18:00 全面开放；周五部分批发开放。免费。',
      link: tat,
      rows: [
        { item: '市集', ticket: '免费', reservation: '不需要；周六日全摊' },
      ],
      steps: [
        { title: '分区别乱走', body: '市集按区（section）编——选衣服区或手作区或旧物区其中两块逛。' },
        { title: '上午去', body: '午后极热；上午逛、中午在市场内吃、午后撤。' },
        { title: '在食区吃', body: '市集内有集中的食摊区与椰子冰淇淋等定番。' },
      ],
      fallback: '非周末就别来——大部分摊不开。改去市内百货或河边。',
    },
    price: '免费', hours: '周六日 09:00–18:00', address: 'Chatuchak Weekend Market, Kamphaeng Phet 2 Rd, Bangkok',
    highlights: [
      { title: '分区迷宫', body: '27 个 section 各有主题；拿一张场地图再进。', photo: 0 },
      { title: '手作与旧物', body: 'section 里的手作皮具、旧军品与复古杂货是淘宝区。', photo: 1 },
      { title: '食摊与椰子冰', body: '市集内的食区集中且便宜；椰子冰淇淋是标配。', photo: 2 },
    ],
    walk: [
      { title: '选定区先走', body: '进门拿场地图，直奔选定的两三个 section。' },
      { title: '热了就进食区', body: '中午进食区或饮品摊歇脚。' },
      { title: '撤去 BTS/MRT', body: '走热了就从最近出口去站，别撑。' },
    ],
    arrival: [
      { title: '轨道到达', body: 'BTS Mo Chit 或 MRT Chatuchak Park 站下车步行即到。' },
      { title: '打车', body: '回程在门口打车或拼车，避开门口拉客。' },
    ],
    tips: [
      { title: '只在周末', body: '平日来只能看空场——务必周六日。' },
      { title: '防暑', body: '棚内闷热；带水、小风扇与帽子。' },
    ],
    sources: [tat],
    restaurantIds: ['or-tor-kor'], related: [],
  },
  {
    id: 'jim-thompson-house', city: 'bangkok', name: '吉姆·汤普森故居', nameLocal: 'Jim Thompson House', type: 'art', area: '暹罗旁',
    intro: '泰丝大王留下的泰式木宅，导览带看。就在暹罗商圈旁，是闹市里的意外绿洲。', duration: '1–1.5 小时',
    booking: {
      status: 'walk-in', label: '含导览 · 现场购票',
      summary: '门票含定时导览（约 200 泰铢，以官网为准）；中文/英文场次按当天排。',
      link: { label: 'Jim Thompson House', url: 'https://www.jimthompsonhouse.org/' },
      rows: [
        { item: '宅邸导览', ticket: '约 200 泰铢含导览（以官网为准）', reservation: '现场购票按场次' },
      ],
      steps: [
        { title: '按场次到', body: '宅内必须跟导览；到场后看最近一场的语言与开讲时间。' },
        { title: '看宅与园', body: '六栋泰式老屋拼装成的宅子；导览看建筑与藏品，园自己走。' },
        { title: '接暹罗', body: '出门即暹罗商圈；把逛商圈与看宅排成半天。' },
      ],
      fallback: '等导览的空档在园内茶座坐；赶时间就只看园不进宅。',
    },
    price: '约 200 泰铢（以官网为准）', hours: '10:00–17:00（以官网为准）', address: 'Jim Thompson House, 6 Kasem San 2, Pathum Wan, Bangkok',
    highlights: [
      { title: '泰式木宅', body: '六栋拆运重组的柚木宅架高临水——看拼装与通风的智慧。', photo: 0 },
      { title: '宅内藏品', body: '瓷器、佛雕与家具是真收藏；导览会讲失踪悬案。', photo: 1 },
      { title: '园内热带植物', body: '宅子被茂密的热带植物包围，闹市中心的小森林。', photo: 2 },
    ],
    walk: [
      { title: '按场次跟导览', body: '进宅跟导览走一遍听故事；宅内不许脱队。' },
      { title: '园内慢走', body: '导览结束后园内与河边自由走。' },
      { title: '出门接暹罗', body: '从宅走到 Siam 商圈几分钟；安排在同一片区。' },
    ],
    arrival: [
      { title: 'BTS', body: 'National Stadium 站步行约 5 分钟。' },
      { title: '步行', body: '从 Siam 商圈步行可达。' },
    ],
    tips: [
      { title: '导览场次', body: '中英场次看当天安排；中文场可能少。' },
      { title: '室内脱鞋', body: '宅内脱鞋进；背包部分区域需寄存。' },
    ],
    sources: [{ label: 'Jim Thompson House', url: 'https://www.jimthompsonhouse.org/' }, tat],
    restaurantIds: [], related: [],
  },
]
