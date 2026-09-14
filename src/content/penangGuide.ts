import type { SafetyGuideData, TravelGuide } from './travelGuide'

const mdac = { label: 'MDAC 官方登记', url: 'https://imigresen-online.imi.gov.my/mdac/main' }
const visa = { label: '中国驻马使馆：互免签证说明', url: 'https://my.china-embassy.gov.cn/fwzc/lsyw/lszj/fhqz2024/cjwdvisa/202508/t20250801_11681383.htm' }
const consular = { label: '驻槟城总领馆联系方式', url: 'https://penang.china-consulate.gov.cn/lsfw/lsbh/202506/t20250604_11640767.htm' }
const reminder = { label: '驻槟城总领馆暑期提醒（2026-07-24）', url: 'https://penang.china-consulate.gov.cn/chn/zytz/202607/t20260724_11991469.htm' }
const hotlink = { label: 'Hotlink 旅行卡与激活教程', url: 'https://www.hotlink.com.my/zh/products/travel-sim/' }
const hotlinkTerms = { label: 'Hotlink 旅行卡条款', url: 'https://www.hotlink.com.my/en/terms-conditions/products/travel-sim/' }
const grab = { label: 'Grab：槟城机场接车指引', url: 'https://www.grab.com/global/airport-rides/penang-international-airport/' }
const rapid = { label: 'Rapid Penang 路线与乘车说明', url: 'https://myrapid.com.my/bus-train/rapid-penang/rapid-pg-bus/' }
const tourism = { label: '马来西亚旅游局旅行指南', url: 'https://www.malaysia.travel/about-malaysia/travel-guide' }
const weather = { label: '马来西亚气象局', url: 'https://www.met.gov.my/en/' }
const emergency = { label: '马来西亚政府：999', url: 'https://www.malaysia.gov.my/en/categories/safety-and-community/public-safety/mers-999-emergency-line' }
const fraud = { label: '驻槟城总领馆防诈骗提醒', url: 'https://penang.china-consulate.gov.cn/zytz/202606/t20260610_11941142.htm' }
const dcc = { label: 'Visa：境外付款币种', url: 'https://www.visa.com/en-us/personal/travel/dynamic-currency-conversion' }

export const penangGuide: TravelGuide = {
  city: '槟城', checkedAt: '2026-09-12', scope: '持中国普通护照赴马来西亚短途旅游，以槟城机场抵达、住乔治市为例',
  intro: '住稳乔治市，先准备好一张能上网的卡、一条到酒店的路线，以及现金和备用付款方式。入境规则属于马来西亚，机场接驳与市内交通按槟城单独说明。',
  topics: [
    {
      id: 'documents', title: '护照、免签与 MDAC', summary: '免签与电子入境卡是两件事；按抵达日期安排填报。', stage: 'before',
      recommendation: '本页适用短途旅游：中国普通护照有效期不少于 6 个月，符合免签事由时，单次不超过 30 日、每 180 日累计不超过 90 日。普通短期游客仍需按要求填 MDAC；持其他身份或长期准证者另核豁免，不套用本页。',
      steps: [
        { title: '先核护照和停留记录', body: '检查护照有效期、破损情况、机票姓名和证件号；计划工作、学习、长期居留或频繁出入境时，先确认相应资格。马方停留日期按入境当日开始计算，离境安排以获准停留记录为准。' },
        { title: '提前准备填表资料', body: '把护照、抵达和离开日期、航班、入境前出发地，以及第一家酒店英文名称、地址、邮编放在一起；不确定酒店所在行政区时请酒店确认。' },
        { title: '在抵达前 3 天内进入官方入口', body: '使用下面的移民局 MDAC 链接，选择外国旅客登记入口。按实际抵达马来西亚的日期填报，不把国内起飞日直接当成抵达日；不要为了提前填报而改成错误日期。' },
        { title: '逐项照证件和订单填写', body: 'Name／姓名、Passport No.／护照号、Nationality／国籍、出生日期及护照到期日照护照填写。Arrival／抵达、Departure／离境按本次行程；Last Port of Embarkation 按实际入境前出发地，住宿地址照酒店回复，不随意选一个城市。' },
        { title: '提交后回查，再保存', body: '复核邮箱、护照号和日期后提交。保存确认页面／邮件，按官方“Check Registration”查询入口的要求检查登记；同行人逐人完成，不把一人的登记当成全家的。' },
        { title: '抵达后按口岸指示通关', body: '备好护照、酒店和返程订单、登记记录。自助通道资格与现场开放情况另核，不确定时走工作人员指引的通道；通关后确认护照和停留记录都已收好。' },
      ],
      done: '护照与免签适用条件符合，MDAC 登记信息正确且能查到，酒店与离境订单可离线出示。', fallback: '网页无法打开先换浏览器／网络，并通过移民局官方咨询入口处理；填写有误按官方指引更正或重新办理，不使用付费代填来掩盖问题。', sources: [mdac, visa, reminder],
      safety: { text: '护照副本用于备查，不能代替需出示的原件。', target: 'safety-documents' },
    },
    {
      id: 'mobile', title: '通信与手机', summary: '在国内做好登录准备，抵达后现场试通网络再离开。', stage: 'before',
      recommendation: '希望有人帮忙设置，选机场正规门店的实体旅行卡；已确认支持 eSIM 且能自行完成登记的手机，可用运营商官方 App。国内马来西亚漫游包适合少操作，也可作柜台关闭或激活失败的备用。',
      choices: [
        { title: 'Hotlink 实体旅行卡', body: '适合有实体卡槽、希望现场协助的人。官方销售点列有 Penang International Airport；柜台营业时间与库存需按你的抵达时间确认。' },
        { title: 'Hotlink eSIM／国内漫游', body: 'eSIM 先核具体手机型号与激活地点条件；国内漫游先查覆盖马来西亚、流量、热点和收费。不要默认所有国行手机都支持旅行 eSIM。' },
      ],
      steps: [
        { title: '确认手机与国内号码安排', body: '在手机“关于本机／关于手机”记录型号，按厂商说明核对 eSIM 或实体卡支持。国内号码若要接验证码，提前开通相应漫游服务并确认费用；收短信和上网是不同设置。' },
        { title: '比较套餐覆盖的整段时间', body: '本页 3–5 晚行程可先看 Hotlink 7 日实体旅行卡；想走 eSIM，官方页面另有 15 日方案。看清高速额度、公平使用后的限速、热点、当地通话与含税总价。' },
        { title: '实体卡：先确认产品再实名', body: '在官方列出的 Maxis／Hotlink 销售点出示护照办理，问清是否包含所需通行证、何时开始计时。请工作人员安装并激活，在离开柜台前验证网络。' },
        { title: 'eSIM：用官方 App 完成登记', body: '从官方页安装 Hotlink App，进入“Activate or Get New SIM → Get eSIM”，检查兼容性后选旅行方案。外国旅客使用护照验证，按页面选择新号码、填写邮箱、核对价格并付款，再在支持的地点安装；不要把“保留号码”误当作把中国号码转入。' },
        { title: '把默认数据设为旅行卡', body: 'iPhone 在“蜂窝网络 → 蜂窝数据”，安卓在“SIM 卡管理／移动网络”中选择旅行卡。使用当地卡时关闭国内卡的数据漫游及自动数据切换，旅行卡设置依运营商说明；保留国内号码收短信所需的服务。' },
        { title: '关掉 Wi-Fi，验证能完成实际事情', body: '打开地图找到酒店、给家人发消息、查看 Grab 是否能显示目的地。需要共享热点则让同伴连接一次。保存号码、有效期、收据与客服入口。' },
      ],
      purchase: { name: 'Hotlink Travel SIM · 7 日实体卡／15 日 eSIM', detail: '官网展示参考：7 日 RM25／40GB 高速额度；15 日 RM35／100GB，并标注支持 eSIM；含马来西亚境内通话及热点，受公平使用条款限制。购买前核对税费、开卡费及所选配套，不把“无限”当作始终不限速。', url: hotlink.url, taobaoQuery: '马来西亚 Hotlink 旅游电话卡 7天 实体卡', ask: '我的手机是___，抵达槟城___日、离开___日。请确认实体卡或 eSIM、实名所需证件、流量与限速、热点、本地号码、激活时间、是否另收税费，以及激活失败怎样处理。' },
      images: [{ src: '/images/guides/penang-hotlink-steps.png', width: 1014, height: 401, alt: 'Hotlink 官方教程：在 App 首页选择 Activate or Get New SIM', caption: '先点“Activate or Get New SIM”，再按 App 提示选择 eSIM 并检查兼容性。此图截自运营商教程，后续页面以当前 App 为准。', source: hotlink, capturedAt: '2026-09-12' }],
      done: '离开 Wi-Fi 后，地图和消息都正常，Grab 可以查询目的地；知道号码和套餐截止日期。', fallback: '先检查默认数据卡与激活状态，再依运营商说明排查网络设置；回柜台或用 Wi-Fi 联系客服。柜台关闭时启用提前查好的国内漫游包，进城后再办理。', sources: [hotlink, hotlinkTerms, { label: 'Apple：出境 eSIM 条件', url: 'https://support.apple.com/zh-cn/123879' }],
      safety: { text: '只有流量的卡可能无法拨打普通电话，确保需要时能让工作人员代拨。', target: 'safety-contacts' },
    },
    {
      id: 'payment', title: '支付、现金与取款', summary: '林吉特小面额现金打底，银行卡和扫码按店家实际支持使用。', stage: 'before',
      recommendation: '以现金＋已确认境外可用的银行卡为基础。不要为短途槟城行程先把钱大量充进不熟悉的钱包；Touch ’n Go 实体卡、电子钱包和公交产品不是一回事。',
      steps: [
        { title: '先问发卡行四件事', body: '确认银行卡是否支持马来西亚消费和取现、限额、手续费，以及风控通知和验证码如何接收。带本人实体卡，保存发卡行官方客服联系方式。' },
        { title: '安排抵达当天的林吉特', body: '按机场接驳、用餐和必要酒店押金估算首日现金，通过银行／持牌兑换机构或银行 ATM 办理。保留收据，分出小面额，现金不要一次带得过多。' },
        { title: '在 ATM 看清币种和费用', body: '找到支持所持卡组织的银行 ATM，选择取款并输入林吉特金额。确认机器手续费；若询问人民币换算，本站建议拒绝额外换汇、按当地币种 MYR 处理，最终成本仍取决于发卡行。' },
        { title: '吃饭先问怎么结账', body: '可问“Cash or card?”。扫码先确认商户支持你正在用的付款 App；看到 DuitNow 等标识不等于任意中国 App 都能扫。核对金额和商户名，失败先查扣款再重试。' },
        { title: '为公交留零钱，为叫车选好支付', body: 'Rapid Penang 官方乘车说明要求现金乘客备准确车资，投币箱不找零。Grab 在叫车确认前检查当前可选支付方式；若选择现金，备好小面额，并按订单结算。' },
      ],
      done: '能支付首日交通和用餐，持有小额林吉特，另有一条可用的付款或取现渠道。', fallback: '刷卡失败先查看银行记录和提示，换现金或另一张卡；ATM 吞卡或未出钞时保存地点、时间与机号，联系该银行和发卡行，不接受陌生人的“代操作”。', sources: [tourism, dcc, rapid, grab],
      safety: { text: '换汇或付款遇到私人转账、陌生链接时先核对。', target: 'safety-fraud' },
    },
    {
      id: 'stay', title: '住宿与入住', summary: '住乔治市也要选对那条街，尤其看前台、噪声和楼梯。', stage: 'before',
      recommendation: '先围绕乔治市日常步行与吃饭路线找住处。偏好安静、带大行李或晚到时，优先比较前台有人、电梯和房型信息明确的酒店；传统店屋住宿要单独核对楼梯、隔音和进门方式。',
      choices: [
        { title: '住乔治市核心区', body: '适合步行吃饭和重复逛街，但要看与酒吧、主路和夜间活动的实际距离。不要只按“古城中心”判断安静。' },
        { title: '住海边／较远区域', body: '若主要目的是乔治市日常生活，先计算往返交通和晚上叫车需求。不要因房价低就忽略每天的车程。' },
      ],
      steps: [
        { title: '把住宿点放到实际路线里', body: '地图上核对酒店与乔治市计划用餐地点的关系。放大看门口能否停车、附近是否有便利店、晚间返程最后一段怎么走，避开只看直线距离。' },
        { title: '读房型细节与近期评价', body: '看面积、对外窗、独立卫浴、空调、电梯、台阶和噪声。老店屋不同房间可能差异很大，问清你订的这一间，而不只看公共区域照片。' },
        { title: '确认总费用和入住人数', body: '结算页逐项看税费、旅游税及其他当地收费是否包含，是否到店另付、押金接受何种方式、何时退。确认儿童／加床、取消时间和早餐，保存订单最终价。' },
        { title: '取得可用于 MDAC 的住宿信息', body: '向酒店索取英文全称、完整地址、邮编、城市及州属，直接保存。不要把槟城州 Penang／Pulau Pinang 与城市 George Town 混填。' },
        { title: '提前确认晚到取钥匙', body: '给酒店发“Booking number ___; arrival about ___; please confirm late check-in and the entrance.” 保存回复、酒店电话和入口照片；自助入住的密码／钥匙位置应在抵达前拿到。' },
        { title: '到店先核门牌和房间', body: '核对名称和门牌，办理证件登记后取回证件。检查门锁、窗户、空调和浴室，认清楼梯与出口；房间不符时及时联系前台与原平台，保存现场记录。' },
      ],
      done: '酒店回复已保存，费用、晚到、房型和 MDAC 所需地址信息都明确。', fallback: '晚到仍无人回应，出发前就改成接待安排明确的住处；现场无法入住，去有人值守的地方联系平台协调，并保留额外支出凭据。', sources: [tourism, reminder],
      safety: { text: '夜间找不到入口时不要进入陌生巷道反复寻找，先联系酒店。', target: 'safety-stay' },
    },
    {
      id: 'packing', title: '插头、药品与随身物品', summary: '英式三脚插头、轻便雨具、防蚊用品和步行用鞋。', stage: 'before',
      recommendation: '马来西亚常用英式方形三脚插座，旅游局列示电源 240V／50Hz。先看充电器输入范围，再选 Type G 转换插头；适应天气比多带几套衣服更实用。',
      steps: [
        { title: '核对电器输入与插头', body: '读设备的 Input 标识，支持 100–240V 的充电器通常只需匹配插头。转换插头不变压，其他电器要按厂家额定电压和功率确认后使用。' },
        { title: '按热、雨和空调准备', body: '带轻便雨具、防滑鞋、薄外层、防晒和适合自己的防蚊用品。确认酒店是否提供饮水、洗漱用品及洗衣；充电线和首日用品放随身包。' },
        { title: '药品带原包装和说明', body: '处方药携带处方／医生说明，按个人行程需要准备。涉及管制成分或特殊药品时，出发前向马方主管部门确认；不携带不明来历物品，不替陌生人带包裹。' },
        { title: '按承运航司检查行李', body: '核对随身与托运行李尺寸、重量、液体以及充电宝规定。护照、必需药品、备用付款方式和充电设备留在随身包，避免行李延误后全部不可用。' },
      ],
      done: '插头和设备匹配，药品与行李已按本次要求核对，首日必需品随身可取。', fallback: '对特殊药物的入境要求不确定，先取得主管部门明确答复；普通生活用品可抵达后在正规门店补买。', sources: [tourism, reminder],
    },
    {
      id: 'arrival', title: '槟城机场 → 乔治市酒店', summary: '先走到正确的网约车上车点，再确认车辆；巴士留作路线已查清的选择。', stage: 'arrival',
      recommendation: '第一次抵达、带行李或多人同行，建议比较 Grab 到酒店的整车报价。官方机场接车页列出多层停车场 Level 1 的 E-Hailing Pickup Point；步行路线与最终停靠点以当时 App 和机场标识为准。',
      choices: [
        { title: 'Grab：直达住处', body: '在出发前从官方页安装 App 并完成手机号登录。核对车型容量、全部行李、价格和支付方式；叫车成功后按 App 指引到正确区域。' },
        { title: '公交：适合轻装且不赶时间', body: '先在 Rapid Penang 查机场与酒店之间的具体路线、方向、服务时间及步行段。401E 等线路需看站点；不能因为 102 从机场出发，就把它当作乔治市直达线。' },
      ],
      steps: [
        { title: '起飞前完成 App 和地址准备', body: '安装 Grab、完成登录，保存酒店英文全称和地图定位，确认号码在抵达后能接收必要验证。酒店能否安排接送也提前问好，保存报价和接机方式。' },
        { title: '出关后先停下来确认', body: '完成入境、取行李和海关手续，确认手机网络。检查酒店是否能按预计时间入住，再比较叫车与已查好的交通方案。' },
        { title: '输入目的地，核对完整订单', body: '选择叫车服务，输入酒店全称并对照地图和地址。确认起点是槟城机场的指定接车区，选择装得下同行人和行李的车型，查看价格、附加费用说明和现金／其他支付选项。' },
        { title: '跟着官方指引走到接车区', body: 'Grab 官网当前指引：从到达大厅 Door 1 出口出来，按标识经人行通道前往多层停车场，进入后右转至 Level 1 的 E-Hailing 接车区。同时看 App 内步行指引；现场有调整时问机场工作人员，再用 App 聊天说明所在标识或编号。' },
        { title: '核对车辆后再上车', body: '逐项对照车牌、车型和司机信息，确认是自己的订单再放行李。保留 App 内行程，系好安全带；有人要求取消订单改私下接送时，重新选择正式方案。' },
        { title: '到门口再结束行程', body: '核对酒店招牌和门牌，取齐行李，按订单支付。把到达消息发给同行人／家人，入住后再安排附近用餐。' },
      ],
      done: '到达正确酒店，人和行李齐全，订单及实际车费有记录。', fallback: '没有网络先回到机场有人值守的区域求助；一直无车或司机取消，通过机场正式出租车柜台或酒店已确认的接送安排出行，先明确总价。', sources: [grab, rapid],
      images: [{ src: '/images/guides/penang-grab-pickup.png', width: 1088, height: 544, alt: 'Grab 官方槟城机场接车教程中的到达大厅出口指引', caption: '第一步：按到达大厅标识找到出口，再前往多层停车场的接车区。图中绿色箭头来自 Grab 官方教程；完整步行路线见原页，现场以 App 和机场标识为准。', source: grab, capturedAt: '2026-09-12' }],
      safety: { text: '信息不符不上车；不要为找车走到无工作人员的陌生区域。', target: 'safety-transport' },
    },
    {
      id: 'transit', title: '市内交通与跨城', summary: '乔治市短距离步行，热时叫车，坐公交先备准确车资。', stage: 'during',
      recommendation: '用步行和 Grab 连接乔治市日常行程，公交用于路线清楚的较远目的地。吉隆坡、槟城与跨海交通的支付和站点不同，不共用一套想当然的规则。',
      steps: [
        { title: '步行先看实际可走的路', body: '路口按信号和实际来车方向过街，留意摩托车、台阶和店屋前通道；上午、傍晚集中走，炎热或阵雨时进店休息，不强走地图最短线。' },
        { title: '公交核对方向、票价和零钱', body: '在官方路线页查两端站点与运营时间，到站看站牌并向司机说目的地。现金支付备准确车资、取好车票；不要先购买面向当地居民的优惠产品，也不默认 Touch ’n Go 适用每条线路。' },
        { title: '每次叫车都检查起点', body: '店屋区或商场出入口可能不好停车，按 App 选择合法上车点，必要时说明门牌或标识；车牌和司机核对后上车，查看所选支付方式并保留行程。' },
        { title: '跨海／跨城先查接续', body: '去北海、搭火车或继续吉隆坡，分别确认轮渡／巴士／火车出发站与日期，留够衔接时间。网上购票从运营方入口进入，不把同城酒店地址当车站地址。' },
      ],
      done: '知道目的地的实际起终点、所需支付方式与当天返程。', fallback: '错过公交就重新查等待时间与叫车总价，错乘在下一处安全站点下车；跨城晚点先联系原承运方调整接续。', sources: [rapid, grab, reminder],
      safety: { text: '普通中国驾照不能直接作为在马自驾的许可，本页不建议临时租摩托替代交通。', target: 'safety-transport' },
    },
    {
      id: 'daily', title: '吃饭、语言与日常工具', summary: '先问价格和支付方式，地址、过敏说明都能直接给人看。', stage: 'during',
      recommendation: '具体吃哪家继续用本站“吃”分页；这里处理从进店到结账的步骤。华语并非每处通用，酒店英文地址和简短英语很有用。',
      steps: [
        { title: '点餐前确认价格与计价方式', body: '看菜单，指菜时问清是按份、重量还是另加配菜收费；在小贩中心问该摊是先付还是送餐后付。饮料可能另点，以现场说明为准。' },
        { title: '把忌口表达成具体食材', body: '可以出示“I am allergic to peanuts / shellfish / milk. Does this contain any?”，按实际过敏原选词。若担心共用锅具也要询问；“不辣”“素食”不等于没有某种过敏原。' },
        { title: '安排饮水和生活补给', body: '准备可靠来源的饮用水，问酒店补水、洗衣和寄存安排；在正规超市／便利店购买包装完好的食品和必需品，留意保质期与储存条件。' },
        { title: '在国内先把工具装好', body: '从官方渠道安装并登录所需地图、Grab 和翻译工具；下载可用的离线资料。保存酒店英文地址及门口照片，切断网络试开一次，不默认到了才一定能顺利注册。' },
      ],
      done: '能够表达地址和实际忌口，断网时仍能找到住处，日常补给有去处。', fallback: '语言不通时用文字、菜单与图片，请酒店协助解释；无法确认食材或卫生状况就换一处。', sources: [tourism, reminder, grab],
      safety: { text: '持续身体不适或受伤时，请及时找医护人员。', target: 'safety-health' },
    },
    {
      id: 'weather', title: '天气、习俗与活动', summary: '防热、防雨和防蚊；宗教场所先看参观要求。', stage: 'during',
      recommendation: '天气和身体状态决定当天走多远。查看气象局预警，雷暴或大雨时把山上、海上活动换成室内安排；不因已经订票而忽略停运。',
      steps: [
        { title: '出门前查天气和运营公告', body: '看 METMalaysia 当天预报及警告，计划升旗山时再看运营方通知。给返程留余量，雨具和防滑鞋随身；本站资料日期不是实时天气状态。' },
        { title: '按环境准备身体防护', body: '补水、避开持续暴晒，防蚊用品按标签使用；室内冷气较强时加薄外层。出现不适先休息并视情况就医，不在网页上自行判断病因。' },
        { title: '进入宗教场所先问', body: '查看参观时间、衣着、脱鞋和拍照规则；准备能遮盖肩膝的衣物，需要借用罩袍时依场所安排。不要在礼拜时段干扰活动。' },
        { title: '涉水活动先看天气与保障', body: '选资质与救生安排明确的运营方，核对保险是否覆盖该活动。海况差、身体不适或现场要求停止时取消，按工作人员要求使用救生装备。' },
      ],
      done: '当天活动适合天气和体力，服装与备用安排已备妥。', fallback: '天气突变进入安全建筑，查看运营方改签／退款说明；被困或有人受伤先请求紧急救援。', sources: [weather, reminder, { label: '升旗山官方公告', url: 'https://www.penanghill.gov.my/' }],
      safety: { text: '雷暴、海上风险和突发疾病的处理见安全页。', target: 'safety-weather' },
    },
    {
      id: 'departure', title: '退房、返程与停用套餐', summary: '早班机先安排车辆，再处理押金和手机设置。', stage: 'return',
      recommendation: '返程前一天核对航班与出发机场。住乔治市不代表随时都能立刻到机场，早班机尤其要提前安排车辆和退房。',
      steps: [
        { title: '倒推离开酒店的时间', body: '看承运航司值机、行李托运和登机截止时间，再加入路程、叫车等待、交通与排队余量。不要把 App 显示的行驶时间当全部所需时间。' },
        { title: '确认早退房和接送', body: '与酒店确认前台是否有人、钥匙怎样归还、押金怎样退。预订接送时保存报价、车型、接车时间和联系方式，前一晚再次确认。' },
        { title: '随身物品逐处检查', body: '收好护照、手机、银行卡、充电器、药品和行李寄存凭据。把返程航班与必要转机材料离线保存，确认行李总重符合机票额度。' },
        { title: '回国后恢复国内数据', body: '把默认数据切回国内号码，检查旅行套餐是否自动续订，按运营商规则停用不再需要的服务。保存酒店、交通及医疗相关票据。' },
      ],
      done: '返程车辆与退房方式明确，护照在手，套餐续费状态和押金有记录。', fallback: '无车时请酒店联系正式出租车或接送服务；航班异常先联系航司确认改签，保留通知和费用单据后联系保险公司。', sources: [grab, hotlinkTerms, reminder],
    },
  ],
  checklist: [
    { id: 'passport', text: '护照有效期、免签事由与累计停留期限已核对', topic: 'documents' },
    { id: 'mdac', text: '按抵达日期完成每个人的 MDAC，并保存登记记录', topic: 'documents' },
    { id: 'mobile', text: '手机支持所选卡种，首段网络和国内验证码有安排', topic: 'mobile' },
    { id: 'money', text: '首日林吉特、小面额车资和备用银行卡已安排', topic: 'payment' },
    { id: 'stay', text: '酒店最终费用、英文地址、晚到入住方式已确认', topic: 'stay' },
    { id: 'arrival', text: 'Grab 已能登录，机场接车指引与备用交通已保存', topic: 'arrival' },
    { id: 'packing', text: '插头、药品、充电宝和随身行李已检查', topic: 'packing' },
    { id: 'offline', text: '断网仍能打开酒店地址、订单和必要地图', topic: 'daily' },
    { id: 'weather', text: '已查看出发前天气和计划活动的运营通知', topic: 'weather' },
    { id: 'safety', text: '保险涵盖马来西亚及计划活动，999 和领保号码已保存', topic: 'safety-preparation' },
    { id: 'return', text: '返程航班、转机条件和到机场的交通已确认', topic: 'departure' },
  ],
}

export const penangSafety: SafetyGuideData = {
  city: '槟城', checkedAt: '2026-09-12', emergencyNote: '人身危险、严重伤病或火警先拨马来西亚当地 999。需要中国公民领事协助时联系驻槟城总领馆；医疗救援和报警应先找当地应急部门。',
  contacts: [
    { name: '警察／消防／救护', number: '999', dial: '999', use: '在马来西亚当地拨打，说明位置及事故情况，由应急部门协调。', source: emergency, urgent: true },
    { name: '中国驻槟城总领馆领保', number: '+60 11 1059 2308', dial: '+601110592308', use: '中国公民领事保护与协助。官方说明工作日 09:00–17:00 接听，非工作时间转接 12308。', source: consular },
    { name: '外交部全球领保热线', number: '+86 10 12308', dial: '+861012308', use: '24 小时；该号码无法接通可试 +86 10 6561 2308。无法代替当地报警、救护或保险公司的理赔服务。', source: consular },
    { name: '国家诈骗应对中心', number: '997', dial: '997', use: '在马来西亚当地拨打。已转账立即同时联系银行止付并报案；不能保证追回款项。', source: reminder },
  ],
  phrases: [
    { zh: '请叫救护车。我在这里（出示完整地址），需要医疗帮助。', en: 'Please call an ambulance. I need medical help at this address.' },
    { zh: '我是中国游客，需要警方帮助。我不会说马来语。', en: 'I am a visitor from China. I need police assistance. I do not speak Malay.' },
  ],
  preparation: [
    '保存酒店英文地址、前台电话、同行人与家人联系方式，约定无法联系时的碰面地点；同行人各自留一份。',
    '核对保险覆盖马来西亚、全部往返日期与实际活动；关注既往病史、户外／涉水除外条款、医疗垫付或直付条件和救援电话。',
    '按领馆提醒，护照原件需随身备查，另留护照资料页和 MDAC 副本；副本不能替代原件。',
    '出发前查看领馆最新提醒和当地天气。早晚航班先安排好正式接送及酒店接待，临时取消活动也有替代方案。',
  ],
  alerts: [
    { title: '左侧行车与摩托车', body: '过街看实际来车和信号，留意单行道与转弯车辆；乘车全程系安全带。领馆提醒中国驾照不能直接在马使用，自驾需先核合法资格和保险。', source: reminder },
    { title: '冒充官方与熟人诈骗', body: '领馆提醒防范冒充使领馆、公检法、航司或熟人的诈骗。不要用来电者提供的链接或号码验证其身份，转账前从官方渠道独立核对。', source: fraud },
    { title: '雷暴、酷热与防蚊', body: '按出行当天气象局信息调整行程，雷暴时停止户外和海上活动；做好防暑、防蚊及饮食卫生。身体不适及时找医护人员。', source: weather },
    { title: '夜间返程和随身财物', body: '夜间避免独自进入偏僻区域；使用正式订单叫车，车辆信息核对后再上车。妥善保管护照，不随身携带全部现金。', source: reminder },
  ],
  scenarios: [
    { id: 'safety-transport', title: '车不对／交通事故', steps: ['比对车牌、车型和司机，信息不符不上车；司机要求取消订单改线下交易时，选择其他正式交通。', '途中有即时危险或事故造成人员受伤，先到安全位置并拨 999，说明地址、地标和伤者情况。', '在不增加危险的前提下保存订单、车牌、照片和时间，按警方要求处理；联系保险公司，需要领事协助再联系总领馆。'], sources: [grab, emergency, reminder] },
    { id: 'safety-documents', title: '护照丢了', steps: ['先检查最后使用处，联系机场、酒店或运营方失物招领；确认遗失后向当地警方报失，保存报失证明。', '联系中国驻槟城总领馆，说明护照遗失、所在位置和返程日期，确认适用的旅行证件办理流程与材料。', '准备身份证明副本、照片、行程及报失记录；同时向马来西亚移民部门确认补证后离境所需手续，再联系航司。不要仅拿新旅行证就默认可直接登机离境。'], sources: [consular, reminder, mdac] },
    { id: 'safety-phone', title: '手机／钱包丢了', steps: ['先到酒店、商场服务台或警务人员附近，请人协助联系；若遭盗抢，先确保人身安全并报案。', '通过银行、支付平台和运营商官方渠道挂失；可使用手机厂商的查找服务，但不要独自去陌生地点追讨。', '用备份酒店地址和备用现金／银行卡返回住处，通知同行人，保存报案与挂失记录，联系保险公司询问材料。'], sources: [reminder, emergency] },
    { id: 'safety-fraud', title: '被骗／已经转账', steps: ['立即停止继续付款和提供信息，不再共享屏幕或验证码，保存聊天、收款账号、链接及交易时间。', '尽快联系相关银行／支付平台止付，并拨马来西亚 997、向当地警方报案。通过中国银行或平台转账的，同时联系国内相关机构。', '按警方指引补交材料，需要时联系领馆寻求协助。不要再付“解冻费”或“追款费”，不承诺钱款一定能追回。'], sources: [fraud, reminder] },
    { id: 'safety-health', title: '生病／受伤', steps: ['严重伤病或急迫危险先拨 999。让同行人提供位置，不为了先取得保险许可而耽误急救。', '非紧急情况请酒店帮助联系正规医疗机构；联系保险公司确认服务网络与结算要求，带上护照、用药与过敏资料。', '保留诊断、处方、费用明细和收据；发热、持续不适等由医护人员判断，不根据旅行网页自行用药或决定继续涉水、登山。'], sources: [emergency, reminder] },
    { id: 'safety-weather', title: '雷暴／被困／停运', steps: ['停止山地、海上和其他受影响户外活动，进入安全建筑，远离积水、海边和孤立树木，听从当地指示。', '查气象局和运营方公告，联系酒店与同行人说明位置；不要自行穿越封闭道路或涉水赶车。', '被困或有人受伤先拨 999。安全后再办理改签／住宿，保留停运通知和必要支出凭据。'], sources: [weather, emergency] },
    { id: 'safety-stay', title: '无法入住／被尾随', steps: ['先到有人值守的公共区域，联系原酒店或平台；有即时危险拨 999，不跟随陌生人前往新的房间或偏僻地点。', '核对预订名称、地址、入住日期和酒店回复；突发额外收费或无房时保存记录，请原平台协调可入住的住处。', '必要时先安排安全住宿，保留原订单、沟通与额外费用凭据，再处理退款和投诉。'], sources: [reminder, emergency] },
  ],
}
