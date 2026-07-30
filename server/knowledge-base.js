// ============================================================
// CRM + 大健康 综合知识库
// ============================================================

const knowledgeBase = {

  // ---- 1. CRM 系统线索数据 ----
  leads: [
    {id:1,date:'2026-07-13',name:'张伟',phone:'138****5678',pri:'高意向',src:'官网注册',major:'计算机科学',fol:'张三'},
    {id:2,date:'2026-07-13',name:'李娜',phone:'139****2345',pri:'中意向',src:'线下活动',major:'金融学',fol:'李四'},
    {id:3,date:'2026-07-12',name:'王强',phone:'186****7890',pri:'低意向',src:'朋友推荐',major:'市场营销',fol:'王五'},
    {id:4,date:'2026-07-12',name:'赵敏',phone:'150****3456',pri:'高意向',src:'社交媒体',major:'人工智能',fol:'赵六'},
    {id:5,date:'2026-07-11',name:'陈晨',phone:'177****9012',pri:'中意向',src:'电话咨询',major:'软件工程',fol:'张三'},
    {id:6,date:'2026-07-11',name:'刘洋',phone:'155****6789',pri:'低意向',src:'广告投放',major:'电子商务',fol:'陈七'},
    {id:7,date:'2026-07-10',name:'孙丽',phone:'188****4321',pri:'中意向',src:'官网注册',major:'数据科学',fol:'李四'},
    {id:8,date:'2026-07-10',name:'周杰',phone:'136****8765',pri:'高意向',src:'线下活动',major:'工商管理',fol:'王五'}
  ],

  // ---- 2. CRM 客户数据 ----
  customers: [
    {id:1,name:'深圳科技有限公司',contact:'张伟',phone:'138****5678',level:'VIP',industry:'互联网',region:'深圳',status:'合作中'},
    {id:2,name:'上海数据集团',contact:'李娜',phone:'139****2345',level:'大客户',industry:'金融',region:'上海',status:'合作中'},
    {id:3,name:'北京创新工场',contact:'王强',phone:'186****7890',level:'普通',industry:'教育',region:'北京',status:'跟进中'},
    {id:4,name:'杭州网络科技',contact:'赵敏',phone:'150****3456',level:'VIP',industry:'电商',region:'杭州',status:'合作中'}
  ],

  // ---- 3. CRM 订单数据 ----
  orders: [
    {id:1,no:'ORD-2026-0001',customer:'张伟',product:'CRM 企业版',amount:128000,status:'已完成',date:'2026-07-13'},
    {id:2,no:'ORD-2026-0002',customer:'李娜',product:'CRM 标准版',amount:56000,status:'处理中',date:'2026-07-13'},
    {id:3,no:'ORD-2026-0003',customer:'王强',product:'CRM 旗舰版',amount:256000,status:'待确认',date:'2026-07-12'},
    {id:4,no:'ORD-2026-0004',customer:'赵敏',product:'CRM 专业版',amount:89000,status:'已完成',date:'2026-07-12'},
    {id:5,no:'ORD-2026-0005',customer:'陈晨',product:'CRM 入门版',amount:32000,status:'已取消',date:'2026-07-11'},
    {id:6,no:'ORD-2026-0006',customer:'刘洋',product:'营销自动化套件',amount:45000,status:'处理中',date:'2026-07-11'},
    {id:7,no:'ORD-2026-0007',customer:'孙丽',product:'API 接口包',amount:8000,status:'已完成',date:'2026-07-10'},
    {id:8,no:'ORD-2026-0008',customer:'周杰',product:'数据看板插件',amount:12000,status:'待确认',date:'2026-07-10'}
  ],

  // ---- 4. CRM 产品数据 ----
  crmProducts: [
    {no:'PRD-2026-0001',name:'CRM 企业版',price:128000},
    {no:'PRD-2026-0002',name:'CRM 旗舰版',price:256000},
    {no:'PRD-2026-0003',name:'CRM 标准版',price:56000},
    {no:'PRD-2026-0004',name:'CRM 专业版',price:89000},
    {no:'PRD-2026-0005',name:'CRM 入门版',price:32000},
    {no:'PRD-2026-0006',name:'数据看板插件',price:12000},
    {no:'PRD-2026-0007',name:'营销自动化套件',price:45000},
    {no:'PRD-2026-0008',name:'API 接口包',price:8000}
  ],

  // ---- 5. 大健康行业产品信息表 (20种) ----
  healthProducts: [
    {no:'ZB-001',name:'深海鱼油软胶囊',spec:'120粒/瓶',price:198,功效:'调节血脂，维护心脑血管健康，辅助改善记忆力',适合人群:'中老年人、高血脂人群、脑力劳动者'},
    {no:'ZB-002',name:'高浓度维生素C泡腾片',spec:'30片/盒',price:68,功效:'增强免疫力，抗氧化，促进胶原蛋白合成',适合人群:'免疫力低下者、易感冒人群、皮肤保养需求者'},
    {no:'ZB-003',name:'乳清蛋白粉（香草味）',spec:'500克/罐',price:168,功效:'补充优质蛋白，促进肌肉合成与修复，增强体力',适合人群:'健身人群、术后康复者、蛋白质摄入不足者'},
    {no:'ZB-004',name:'益生菌固体饮料',spec:'30袋/盒',price:158,功效:'调节肠道菌群平衡，改善消化吸收，增强肠道屏障',适合人群:'肠胃功能紊乱者、便秘腹泻人群、抗生素使用者'},
    {no:'ZB-005',name:'褪黑素片',spec:'60片/瓶',price:98,功效:'改善睡眠质量，调节睡眠节律，缩短入睡时间',适合人群:'睡眠障碍者、倒时差人群、中老年失眠者'},
    {no:'ZB-006',name:'氨糖软骨素钙片',spec:'100片/瓶',price:228,功效:'补充关节营养，缓解关节不适，强健骨骼',适合人群:'中老年人、关节不适者、运动爱好者'},
    {no:'ZB-007',name:'叶黄素酯蓝莓压片糖果',spec:'60片/瓶',price:128,功效:'缓解视疲劳，过滤有害蓝光，保护视网膜健康',适合人群:'长时间用眼者、学生、电子产品使用者'},
    {no:'ZB-008',name:'辅酶Q10胶囊',spec:'60粒/瓶',price:298,功效:'营养心肌，提供细胞能量，抗氧化',适合人群:'心脏养护需求者、中老年人、易疲劳者'},
    {no:'ZB-009',name:'葡萄籽提取物胶囊',spec:'90粒/瓶',price:178,功效:'高效抗氧化，改善皮肤弹性，延缓衰老',适合人群:'爱美女性、抗氧化需求者、皮肤老化人群'},
    {no:'ZB-010',name:'胶原蛋白肽饮',spec:'10瓶/盒（每瓶50ml）',price:388,功效:'提升皮肤水润与弹性，改善关节与骨骼健康',适合人群:'25岁以上女性、皮肤干燥松弛者'},
    {no:'ZB-011',name:'液体钙软胶囊',spec:'150粒/瓶',price:118,功效:'高效补钙，增强骨密度，预防骨质疏松',适合人群:'孕妇、哺乳期女性、中老年、青少年成长期'},
    {no:'ZB-012',name:'大豆异黄酮片',spec:'90片/瓶',price:158,功效:'调节雌激素水平，缓解更年期不适，延缓衰老',适合人群:'更年期女性、内分泌失调女性'},
    {no:'ZB-013',name:'蜂王浆冻干粉胶囊',spec:'120粒/瓶',price:268,功效:'增强免疫力，抗疲劳，调节神经系统功能',适合人群:'体质虚弱者、易疲劳人群、中老年保健'},
    {no:'ZB-014',name:'螺旋藻片',spec:'200片/瓶',price:88,功效:'补充全面营养，调节酸碱平衡，增强抗病能力',适合人群:'偏食者、营养不良者、素食人群'},
    {no:'ZB-015',name:'牛初乳粉',spec:'200克/罐',price:328,功效:'富含免疫因子，增强机体抵抗力，促进生长发育',适合人群:'儿童、免疫力低下者、术后康复者'},
    {no:'ZB-016',name:'蓝莓叶黄素酯凝胶糖果',spec:'80粒/瓶',price:138,功效:'双重护眼，缓解干涩疲劳，保护夜间视力',适合人群:'学生、驾驶员、夜班工作者、近视人群'},
    {no:'ZB-017',name:'姜黄素复合片',spec:'60片/瓶',price:198,功效:'抗炎，保肝护肝，缓解关节疼痛，抗氧化',适合人群:'慢性炎症人群、饮酒应酬者、关节不适者'},
    {no:'ZB-018',name:'膳食纤维粉',spec:'300克/罐',price:108,功效:'增加饱腹感，促进肠道蠕动，调节血糖血脂',适合人群:'肥胖人群、三高患者、便秘者、控制体重者'},
    {no:'ZB-019',name:'水解II型胶原蛋白粉',spec:'150克/罐',price:398,功效:'靶向修复关节软骨，改善关节炎症状',适合人群:'关节炎患者、运动损伤者、中老年关节退化者'},
    {no:'ZB-020',name:'复合维生素矿物质片（男/女款）',spec:'90片/瓶',price:148,功效:'补充每日所需多种维生素和矿物质，均衡营养',适合人群:'饮食不规律者、上班族、营养补充基础需求人群'}
  ],

  // ---- 6. 大健康行业 50 问 Q&A ----
  healthQA: [
    {q:'益生菌有什么作用？多久能见效？',a:'益生菌主要作用是调节肠道菌群平衡，改善消化吸收，增强肠道屏障功能。对于腹泻、便秘、胀气等常见肠胃问题，大多数用户在连续服用7-14天后会感受到初步改善，建议坚持服用28天完成一个完整的调理周期。'},
    {q:'维生素C可以提高免疫力吗？',a:'是的，维生素C是重要的抗氧化剂，能增强白细胞功能，促进抗体形成，从而增强机体免疫力。特别是在季节交替、感冒高发期，适当补充维生素C有助于预防呼吸道感染。'},
    {q:'深海鱼油真的能降血脂吗？',a:'深海鱼油中的Omega-3脂肪酸（EPA和DHA）经临床验证具有调节血脂的作用，能降低甘油三酯，同时有助于维护心脑血管健康。但对于已确诊高血脂症的患者，建议作为辅助手段配合医嘱使用。'},
    {q:'胶原蛋白吃了能被皮肤吸收吗？',a:'现代技术将胶原蛋白水解为小分子胶原蛋白肽，分子量在2000-5000道尔顿之间，可直接被肠道吸收进入血液循环，最终作用于皮肤、关节等需要胶原蛋白的组织。多项研究证实口服胶原蛋白肽能提升皮肤水分和弹性。'},
    {q:'褪黑素安全吗？会有依赖性吗？',a:'褪黑素是人体自身分泌的激素，用于调节睡眠节律。外源性补充低剂量褪黑素（通常1-3mg）是安全的短期助眠手段，不会产生生理依赖性。建议从最低剂量开始，连续使用不超过3个月，并配合良好的睡眠习惯。'},
    {q:'氨糖软骨素对膝关节疼痛有效吗？',a:'氨糖和软骨素是关节软骨的主要成分，补充这两种物质能为软骨修复提供原料，同时减轻关节炎症反应。对于轻中度骨关节炎，连续服用3-6个月后，约70%使用者反馈关节疼痛和僵硬感有所缓解。'},
    {q:'叶黄素能预防近视吗？',a:'叶黄素主要作用是过滤有害蓝光，保护视网膜黄斑区，缓解视疲劳。它能减缓视力退化，但对真性近视的预防作用有限。建议儿童青少年配合充足的户外活动、正确的用眼习惯共同防控近视。'},
    {q:'辅酶Q10对心脏有什么好处？',a:'辅酶Q10是细胞能量转换的关键辅酶，尤其在心脏肌肉中含量丰富。它能改善心肌能量代谢，具有抗氧化作用，有助于维持心脏正常功能。适合中老年人、疲劳人群及关注心脏健康者。'},
    {q:'葡萄籽提取物的抗氧化效果如何？',a:'葡萄籽富含原花青素，其抗氧化能力是维生素C的20倍、维生素E的50倍。能有效清除自由基，延缓细胞老化，改善皮肤弹性，同时对血管健康也有保护作用。'},
    {q:'蜂王浆能增强免疫力吗？',a:'蜂王浆含有丰富的蛋白质、维生素、乙酰胆碱及王浆酸等活性物质，具有调节免疫、抗疲劳、改善神经功能的作用。特别适合体质虚弱、易疲劳、免疫力低下人群。'},
    {q:'孕妇可以吃益生菌吗？',a:'大多数益生菌菌株对孕妇是安全的，且有助于缓解孕期便秘问题。但建议选择标有"孕妇适用"的产品，并咨询医生后使用，特别是孕早期或有特殊情况的孕妇。'},
    {q:'糖尿病患者可以吃蜂胶吗？',a:'蜂胶有助于辅助调节血糖，但糖尿病患者服用时需注意：1）选择无糖制剂；2）密切监测血糖变化；3）不能替代降糖药物；4）建议在医生指导下使用。'},
    {q:'儿童可以吃蛋白粉吗？',a:'健康儿童一般不需要额外补充蛋白粉，均衡饮食即可满足需求。但以下情况可考虑：挑食严重导致蛋白质摄入不足、病后恢复期、运动量大的学龄儿童。务必选择儿童专用配方，控制剂量。'},
    {q:'肝脏不好的人可以吃鱼油吗？',a:'轻度脂肪肝患者适量服用鱼油可能有益，因为Omega-3有助于改善脂肪代谢。但严重肝病、肝硬化患者需谨慎，高剂量可能增加出血风险。建议咨询肝病专科医生。'},
    {q:'甲状腺问题可以吃大豆异黄酮吗？',a:'大豆异黄酮可能影响甲状腺激素的合成，甲状腺功能减退患者应慎用。如必须使用，需密切监测甲状腺功能，并确保与甲状腺药物服用时间间隔4小时以上。'},
    {q:'正在服用降压药可以吃辅酶Q10吗？',a:'辅酶Q10与大多数降压药无冲突，且有研究显示可能辅助降低血压。但建议监测血压变化，特别是初始服用阶段。最好与降压药间隔2小时服用。'},
    {q:'手术后可以吃胶原蛋白吗？',a:'术后恢复期补充胶原蛋白有助于伤口愈合和组织修复，但需注意：1）确认无过敏史；2）伤口无感染；3）建议拆线后开始服用；4）蛋白质类产品需控制总量避免肾脏负担。'},
    {q:'痛风患者可以吃维生素C吗？',a:'适量维生素C（每日500mg以内）有助于促进尿酸排泄，对痛风有益。但高剂量维生素C（超过1000mg/日）可能增加尿酸生成，痛风急性发作期应避免大剂量使用。'},
    {q:'胃溃疡可以吃益生菌吗？',a:'可以，特定菌株如罗伊氏乳杆菌有助于抑制幽门螺杆菌，改善胃部环境。但应避免含有过多酸性成分的益生菌产品，建议饭后服用减少刺激。'},
    {q:'贫血适合吃什么保健品？',a:'缺铁性贫血应补充铁剂（配合维生素C促进吸收）；巨幼细胞性贫血需补充叶酸和维生素B12。建议先明确贫血类型，针对性补充，并定期复查血常规。'},
    {q:'益生菌什么时候吃效果最好？',a:'建议饭后30分钟内服用，此时胃酸浓度较低，有利于活菌通过胃部到达肠道。水温不超过40℃，避免与抗生素同时服用（如需同服，间隔2-3小时）。'},
    {q:'维生素C可以长期吃吗？',a:'日常补充建议剂量为每日100-200mg，这个剂量可长期服用。大剂量（超过1000mg/日）不建议长期使用，可能增加肾结石风险，建议采用"服用3个月停1个月"的周期。'},
    {q:'鱼油早上吃还是晚上吃好？',a:'早晚均可，随餐服用效果更佳（利用食物中的脂肪促进吸收）。如有轻微消化不良反应，建议晚餐后服用。需注意鱼油可能有轻微抗凝作用，手术前一周应停用。'},
    {q:'胶原蛋白怎么吃吸收最好？',a:'建议早上空腹或睡前服用，此时吸收效率较高。配合维生素C一起服用可促进胶原蛋白合成。粉剂可用温水或冷水冲服，避免热水破坏结构。'},
    {q:'褪黑素应该怎么服用？',a:'睡前30分钟服用，起始剂量建议1mg。服用后避免使用手机等蓝光设备，创造黑暗的睡眠环境。连续使用建议不超过3个月，可间歇使用（如每周3-4次）。'},
    {q:'氨糖软骨素需要吃多久？',a:'关节养护通常需要较长时间，建议连续服用3个月以上评估效果。明显改善后可转为维持剂量（减半或间断服用）。一般建议每年服用2-3个周期。'},
    {q:'保健品可以和药物一起吃吗？',a:'不建议同时服用，可能相互影响吸收或增强/减弱药效。一般建议间隔2-3小时。特别是抗凝药、降压药、免疫抑制剂等，需咨询医生或药师。'},
    {q:'保健品有副作用吗？',a:'正规保健品在推荐剂量下通常安全，但个体可能产生：1）胃肠道不适（如益生菌初期）；2）过敏反应；3）与药物相互作用；4）过量导致的毒性。出现不适应及时停用并咨询专业人士。'},
    {q:'保健品需要停服吗？',a:'建议采用"周期性服用"策略，如服用3个月停1个月，让身体自我调节。抗氧化类（如葡萄籽）、免疫调节类（如蜂王浆）特别适合周期性使用。'},
    {q:'多种保健品可以一起吃吗？',a:'可以，但需注意：1）总剂量不要超标；2）功能相似的避免重复；3）注意服用时间安排（如水溶性维生素早饭后，脂溶性维生素随餐）；4）新增加产品建议逐个尝试。'},
    {q:'益生菌活菌数越多越好吗？',a:'不一定，关键看菌株活性与能否定植肠道。一般日常维护100-300亿CFU即可，过多可能引起初期不适。应选择有包埋技术、标明有效期内活菌数的产品。'},
    {q:'鱼油怎么选？看什么指标？',a:'重点关注：1）Omega-3总含量（不是鱼油重量）；2）EPA和DHA比例（心脑血管健康选EPA高的，脑健康选DHA高的）；3）纯度（TG型比EE型吸收好）；4）是否有IFOS等认证。'},
    {q:'胶原蛋白粉和胶原蛋白饮哪个好？',a:'粉剂性价比高，但需要冲泡；饮品方便且常添加辅助成分，但价格较高。效果上，关键看胶原蛋白肽的含量和分子量，剂型影响不大。根据个人方便和预算选择。'},
    {q:'维生素C天然和合成有区别吗？',a:'化学结构相同，吸收利用率基本一致。但天然VC常含有生物类黄酮等辅助成分，可能提升效果和耐受性。合成VC性价比更高。关键看配方和剂量是否适合需求。'},
    {q:'钙片应该选碳酸钙还是柠檬酸钙？',a:'碳酸钙含钙量高，价格便宜，但需要胃酸帮助吸收，建议随餐服用；柠檬酸钙吸收不依赖胃酸，对胃刺激小，适合胃酸缺乏或老年人。均建议分次服用（每次不超过500mg钙）。'},
    {q:'葡萄籽和维生素E哪个抗氧化更好？',a:'葡萄籽提取物（原花青素）的抗氧化能力更强，且具有独特的血管保护作用；维生素E是脂溶性抗氧化剂，保护细胞膜。两者可协同作用，无需二选一。'},
    {q:'蛋白粉动物源和植物源哪个好？',a:'动物蛋白（乳清、酪蛋白）氨基酸比例更接近人体，吸收利用率高；植物蛋白（大豆、豌豆）不含胆固醇，适合素食者。可根据饮食偏好、过敏情况选择，或两者搭配。'},
    {q:'叶黄素和越橘提取物有什么区别？',a:'叶黄素主要保护视网膜黄斑区，过滤蓝光；越橘（蓝莓）提取物富含花青素，改善微循环，特别有助于夜间视力。两者作用互补，常联合使用于护眼产品。'},
    {q:'辅酶Q10泛醇和泛醌哪个好？',a:'泛醇是还原型辅酶Q10，无需转化直接利用，吸收率更高，尤其适合40岁以上人群（转化能力下降）。泛醌需要体内转化，价格较低。建议根据年龄和预算选择。'},
    {q:'蜂胶软胶囊和滴剂哪个好？',a:'软胶囊剂量准确，携带方便，无刺激性味道；滴剂吸收快，可灵活调整剂量，但酒精基底可能不适合儿童和酒精敏感者。可根据使用场景和个人偏好选择。'},
    {q:'吃了益生菌为什么反而腹胀？',a:'初期可能出现的"赫氏消亡反应"：益生菌与有害菌斗争产生的暂时不适。通常持续3-7天自行缓解。建议从半量开始，逐步增加，多喝水，配合轻度运动。'},
    {q:'维生素C吃多了会尿黄正常吗？',a:'正常现象。水溶性维生素C超过身体需要量时会通过尿液排出，维生素B2（核黄素）代谢产物也使尿液变黄。只要无其他不适，减少剂量即可恢复正常。'},
    {q:'鱼油为什么打嗝有鱼腥味？',a:'可能因为：1）产品质量不佳（氧化）；2）服用后立即躺下；3）个体敏感。建议选择有肠溶包衣的产品，随餐服用，服用后保持直立姿势至少30分钟。'},
    {q:'胶原蛋白吃了多久能看到皮肤变化？',a:'一般连续服用4-8周后开始感受皮肤滋润度提升，12周左右可能看到细纹改善。效果因人而异，与年龄、皮肤状态、生活习惯（防晒、睡眠）密切相关。'},
    {q:'褪黑素为什么吃了没效果？',a:'可能原因：1）剂量不合适（可尝试调整）；2）服用时间不对（太早或太晚）；3）环境干扰（光线、噪音）；4）个体差异。建议配合睡眠卫生，如无效可咨询医生。'},
    {q:'氨糖软骨素吃了关节更疼怎么回事？',a:'少数人初期可能出现短暂不适，可能因为：1）炎症反应被激发；2）产品含有MSM等成分的初期反应；3）巧合（原有关节病进展）。如持续超过2周或疼痛加剧，应停用并就医。'},
    {q:'吃了保健品月经周期乱了怎么办？',a:'可能影响内分泌的保健品（如大豆异黄酮、月见草油等）可能干扰月经周期。建议停用观察1-2个周期是否恢复。如持续异常或伴有其他症状，应及时就医。'},
    {q:'为什么吃了葡萄籽经期推迟？',a:'葡萄籽原花青素可能影响雌激素代谢，少数敏感人群可能出现周期变化。通常停用后会恢复正常。建议经期前一周停用观察，或选择不含激素调节成分的抗氧化产品。'},
    {q:'蜂王浆吃了长痘怎么办？',a:'蜂王浆含有激素样物质，可能刺激皮脂腺分泌。建议：1）减少剂量或停用；2）避免与高糖饮食同时；3）加强皮肤清洁。如严重或持续，考虑更换其他增强免疫产品。'},
    {q:'保健品吃了没效果要不要继续？',a:'建议：1）确认服用方法是否正确（剂量、时间、搭配）；2）给足评估时间（通常1-3个月）；3）记录变化（症状日记）；4）咨询专业人士调整方案。如确实无效，可考虑更换产品或策略。'}
  ],

  // ---- 7. 大健康客户线索表 (30条) ----
  healthLeads: [
    {id:'LX2025001',name:'张伟',age:52,job:'企业高管',phone:'138****1234',source:'线上研讨会',symptom:'血脂偏高，精神疲劳',status:'高意向',seller:'王磊',product:'鱼油、护肝片',budget:'800-1500'},
    {id:'LX2025002',name:'李芳',age:45,job:'财务总监',phone:'139****5678',source:'老客户转介绍',symptom:'骨质疏松风险，睡眠差',status:'已成交',seller:'陈静',product:'钙D复合剂、褪黑素',budget:'500-1000'},
    {id:'LX2025003',name:'王志远',age:68,job:'退休教师',phone:'136****9012',source:'社区健康讲座',symptom:'关节僵硬，记忆力减退',status:'待跟进',seller:'王磊',product:'氨糖、银杏叶提取物',budget:'300-600'},
    {id:'LX2025004',name:'刘敏',age:31,job:'程序员',phone:'177****3456',source:'社交媒体广告',symptom:'长期用眼过度，颈椎酸痛',status:'中意向',seller:'李娜',product:'叶黄素、复合维生素',budget:'200-500'},
    {id:'LX2025005',name:'陈建国',age:60,job:'退休干部',phone:'135****7890',source:'电话陌拜',symptom:'三高问题，心血管保养',status:'已流失',seller:'张伟',product:'辅酶Q10、深海鱼油',budget:'400-800'},
    {id:'LX2025006',name:'周晓雯',age:28,job:'市场专员',phone:'188****1122',source:'电商平台留资',symptom:'肠胃不适，皮肤状态差',status:'高意向',seller:'李娜',product:'益生菌、胶原蛋白',budget:'400-800'},
    {id:'LX2025007',name:'赵建华',age:48,job:'出租车司机',phone:'159****3344',source:'线下展会',symptom:'腰肌劳损，前列腺健康',status:'低意向',seller:'王磊',product:'锯棕榈、B族维生素',budget:'200-400'},
    {id:'LX2025008',name:'孙丽华',age:55,job:'会计',phone:'150****5566',source:'老客户转介绍',symptom:'更年期综合症，潮热盗汗',status:'已成交',seller:'陈静',product:'月见草油、大豆异黄酮',budget:'600-1200'},
    {id:'LX2025009',name:'杨帆',age:35,job:'健身教练',phone:'138****7788',source:'行业社群',symptom:'运动后恢复慢，需增肌支持',status:'高意向',seller:'张伟',product:'乳清蛋白粉、关节宝',budget:'1000-2000'},
    {id:'LX2025010',name:'吴秀英',age:72,job:'退休',phone:'181****9900',source:'健康讲座',symptom:'心慌、失眠，体质虚弱',status:'待接触',seller:'陈静',product:'蜂王浆、灵芝孢子粉',budget:'300-600'},
    {id:'LX2025011',name:'徐浩',age:40,job:'销售经理',phone:'186****1314',source:'线上问卷',symptom:'慢性胃炎，脱发，亚健康',status:'中意向',seller:'王磊',product:'养胃粉、生物素',budget:'500-1000'},
    {id:'LX2025012',name:'黄倩',age:50,job:'教师',phone:'137****1516',source:'公众号文章',symptom:'干眼症，肩颈疲劳，焦虑',status:'已成交',seller:'李娜',product:'叶黄素、鱼油、镁片',budget:'400-800'},
    {id:'LX2025013',name:'高伟',age:58,job:'工程师',phone:'189****1718',source:'官网咨询',symptom:'血糖偏高，体力下降',status:'已流失',seller:'张伟',product:'铬元素、玛咖精片',budget:'200-500'},
    {id:'LX2025014',name:'林雨欣',age:25,job:'研究生',phone:'178****1920',source:'校园健康活动',symptom:'备考压力大，神经衰弱',status:'低意向',seller:'李娜',product:'DHA、维生素B族',budget:'150-300'},
    {id:'LX2025015',name:'罗斌',age:43,job:'个体店主',phone:'153****2122',source:'朋友推荐',symptom:'脂肪肝，尿酸偏高',status:'中意向',seller:'王磊',product:'奶蓟草（护肝）、芹菜籽精华',budget:'300-600'},
    {id:'LX2025016',name:'苏明玉',age:33,job:'医生',phone:'188****2324',source:'行业会议',symptom:'内分泌失调，免疫力低下',status:'待跟进',seller:'陈静',product:'维生素C、益生菌、黑枸杞',budget:'400-800'},
    {id:'LX2025017',name:'冯建军',age:65,job:'退休工人',phone:'139****2526',source:'药店咨询',symptom:'老寒腿，血液循环不佳',status:'已成交',seller:'张伟',product:'氨糖、生姜提取物、鱼油',budget:'300-500'},
    {id:'LX2025018',name:'朱婷婷',age:29,job:'空乘',phone:'177****2728',source:'社交平台KOL',symptom:'皮肤老化，长途飞行疲劳',status:'高意向',seller:'李娜',product:'虾青素、胶原蛋白、维生素B',budget:'600-1200'},
    {id:'LX2025019',name:'郭强',age:47,job:'长途司机',phone:'135****2930',source:'电台广告',symptom:'腰椎间盘突出，精力不足',status:'待接触',seller:'王磊',product:'氨基葡萄糖、人参提取物',budget:'200-400'},
    {id:'LX2025020',name:'宋佳',age:41,job:'教师',phone:'158****3132',source:'线下沙龙',symptom:'慢性咽炎，气血不足',status:'中意向',seller:'陈静',product:'蜂胶、阿胶糕、铁剂',budget:'400-700'},
    {id:'LX2025021',name:'胡军',age:36,job:'外卖员',phone:'147****3334',source:'地推活动',symptom:'饮食不规律，胃痛',status:'待跟进',seller:'张伟',product:'养胃粉、复合维生素',budget:'100-300'},
    {id:'LX2025022',name:'韩雪',age:50,job:'公务员',phone:'136****3536',source:'单位团购',symptom:'视力下降，骨质疏松',status:'已成交',seller:'李娜',product:'叶黄素、钙片',budget:'500-900'},
    {id:'LX2025023',name:'董磊',age:44,job:'律师',phone:'189****3738',source:'商务礼品渠道',symptom:'严重脱发，脂肪肝',status:'高意向',seller:'王磊',product:'生物素、奶蓟草、护肝片',budget:'800-1500'},
    {id:'LX2025024',name:'彭娟',age:58,job:'个体户',phone:'159****3940',source:'市场传单',symptom:'糖尿病前期，失眠',status:'已流失',seller:'陈静',product:'苦瓜素、褪黑素',budget:'200-400'},
    {id:'LX2025025',name:'肖飞',age:30,job:'健身爱好者',phone:'133****4142',source:'线上社群',symptom:'追求运动表现，关节保护',status:'中意向',seller:'张伟',product:'BCAA、蛋白粉、氨糖',budget:'800-1500'},
    {id:'LX2025026',name:'谢文东',age:33,job:'设计师',phone:'135****2324',source:'社交媒体广告',symptom:'熬夜多，头发早白，视力下降',status:'中意向',seller:'李娜',product:'黑芝麻精华、叶黄素',budget:'300-600'},
    {id:'LX2025027',name:'董美玲',age:62,job:'退休护士',phone:'139****2526',source:'健康讲座',symptom:'静脉曲张，睡眠浅',status:'待跟进',seller:'陈静',product:'葡萄籽精华、褪黑素',budget:'200-500'},
    {id:'LX2025028',name:'郑凯',age:29,job:'IT工程师',phone:'188****2728',source:'电商平台留资',symptom:'长期久坐，腰椎不适，便秘',status:'低意向',seller:'张伟',product:'益生菌、生姜提取物',budget:'200-400'},
    {id:'LX2025029',name:'何芳',age:38,job:'全职妈妈',phone:'158****2930',source:'宝妈社群',symptom:'产后恢复慢，免疫力低，掉发',status:'已成交',seller:'陈静',product:'铁剂、复合维生素',budget:'500-1000'},
    {id:'LX2025030',name:'蔡明哲',age:47,job:'大学教授',phone:'136****3132',source:'知识付费社群',symptom:'用脑过度，心律不齐',status:'高意向',seller:'王磊',product:'磷虾油、PQQ、白藜芦醇',budget:'1200-2500'}
  ],

  // ---- 8. 客户沟通记录 ----
  communications: [
    {time:'2025-07-10 14:05',from:'小芳',role:'客户',content:'你好，我看到你们那个益生菌ZB-004，想了解一下具体情况'},
    {time:'2025-07-10 14:06',from:'周贺',role:'销售',content:'小芳您好！感谢咨询我们的益生菌固体饮料（ZB-004）。这款是30袋/盒规格，每袋含300亿活菌，有5种专利菌株，特别适合调节肠胃、改善消化吸收。'},
    {time:'2025-07-10 14:08',from:'小芳',role:'客户',content:'我肠胃一直不太好，容易胀气，有时候还便秘。同事说吃了你们这个有效果'},
    {time:'2025-07-10 14:10',from:'周贺',role:'销售',content:'这款益生菌针对胀气、便秘反馈很好。配方添加了益生元（膳食纤维），能促进益生菌定植，同时帮助肠道蠕动。一般建议连续服用28天一个周期。'},
    {time:'2025-07-10 14:12',from:'小芳',role:'客户',content:'价格是158元吗？感觉有点贵啊，能优惠点吗？'},
    {time:'2025-07-10 14:15',from:'周贺',role:'销售',content:'如果您今天下单，我可以申请一张20元优惠券，实际138元，差不多每袋4.6元。我们还提供半盒15袋的体验装，价格85元。'},
    {time:'2025-07-10 14:22',from:'小芳',role:'客户',content:'半盒这个听起来可以。资料你先发我看看吧'},
    {time:'2025-07-10 14:26',from:'周贺',role:'销售',content:'资料已发送，请查收。今天下单的话，我可以额外送您一盒维生素C泡腾片（ZB-002）体验装。'},
    {time:'2025-03-11 16:30',from:'张三',role:'客户',content:'周贺你好，产品已收到。想咨询一下益生菌的正确服用方法，需要空腹服用吗？'},
    {time:'2025-03-11 17:00',from:'周贺',role:'销售',content:'建议每日1次，每次1粒，早餐后半小时温水服用效果最佳。避免与抗生素同时服用。'},
    {time:'2025-03-14 20:20',from:'张三',role:'客户',content:'目前服用感觉良好，肠胃状态有改善。想问一下建议连续服用多久为一个周期？'},
    {time:'2025-03-14 21:00',from:'周贺',role:'销售',content:'一般建议连续服用1-3个月以达到稳定的肠道菌群改善效果，之后可根据情况调整为每周2-3次维持。'}
  ]
};

// ============================================================
// 构建全文搜索索引 — 将知识库转为可搜索的文本块
// ============================================================
function buildSearchableChunks() {
  const chunks = [];

  // CRM 线索
  knowledgeBase.leads.forEach(l => {
    chunks.push({
      type: 'crm_leads',
      keywords: [l.name, l.phone, l.pri, l.src, l.major, l.fol, '线索', 'CRM'].concat((l.name||'').split('')),
      text: `【CRM线索】姓名：${l.name}，电话：${l.phone}，意向等级：${l.pri}，来源：${l.src}，专业：${l.major}，负责人：${l.fol}，录入日期：${l.date}`
    });
  });

  // CRM 客户
  knowledgeBase.customers.forEach(c => {
    chunks.push({
      type: 'crm_customers',
      keywords: [c.name, c.contact, c.phone, c.level, c.industry, c.region, c.status, '客户', 'CRM'],
      text: `【CRM客户】公司：${c.name}，联系人：${c.contact}，电话：${c.phone}，等级：${c.level}，行业：${c.industry}，地区：${c.region}，状态：${c.status}`
    });
  });

  // CRM 订单
  knowledgeBase.orders.forEach(o => {
    chunks.push({
      type: 'crm_orders',
      keywords: [o.customer, o.product, o.status, o.no, '订单', 'CRM'].concat(String(o.amount).split('')),
      text: `【CRM订单】订单号：${o.no}，客户：${o.customer}，产品：${o.product}，金额：¥${o.amount.toLocaleString()}，状态：${o.status}，日期：${o.date}`
    });
  });

  // CRM 产品
  knowledgeBase.crmProducts.forEach(p => {
    chunks.push({
      type: 'crm_products',
      keywords: [p.name, p.no, 'CRM', '产品'],
      text: `【CRM产品】编号：${p.no}，名称：${p.name}，价格：¥${p.price.toLocaleString()}`
    });
  });

  // 大健康产品
  knowledgeBase.healthProducts.forEach(p => {
    chunks.push({
      type: 'health_products',
      keywords: [p.name, p.no, p.功效, p.适合人群, '大健康', '保健品'].concat((p.name||'').split('')),
      text: `【大健康产品】编号：${p.no}，名称：${p.name}，规格：${p.spec}，价格：¥${p.price}，核心功效：${p.功效}，适合人群：${p.适合人群}`
    });
  });

  // 大健康 Q&A
  knowledgeBase.healthQA.forEach(qa => {
    chunks.push({
      type: 'health_qa',
      keywords: [qa.q, (qa.q||'').substring(0,10), '问答', '健康'].concat((qa.q||'').split('')),
      text: `【大健康问答】问题：${qa.q}\n回答：${qa.a}`
    });
  });

  // 大健康线索
  knowledgeBase.healthLeads.forEach(l => {
    chunks.push({
      type: 'health_leads',
      keywords: [l.name, l.phone, l.symptom, l.product, l.source, l.status, l.seller, '大健康', '线索'].concat((l.name||'').split('')),
      text: `【大健康客户线索】姓名：${l.name}，年龄：${l.age}，职业：${l.job}，电话：${l.phone}，来源：${l.source}，症状：${l.symptom}，状态：${l.status}，销售人员：${l.seller}，意向产品：${l.product}，预算范围：${l.budget}元`
    });
  });

  // 客户沟通记录
  knowledgeBase.communications.forEach(c => {
    chunks.push({
      type: 'communication',
      keywords: [c.from, c.content, c.role, '沟通', '销售'].concat((c.content||'').substring(0,15).split('')),
      text: `【客户沟通】时间：${c.time}，发送人：${c.from}（${c.role}），内容：${c.content}`
    });
  });

  return chunks;
}

// ============================================================
// 搜索引擎 — 关键词匹配 + 评分
// ============================================================
function searchKnowledge(query, chunks, maxResults = 8) {
  if (!query || !chunks.length) return [];

  const q = query.toLowerCase();
  // 分词：提取中英文关键词
  const tokens = q.split(/[\s,，。！？、；：""''（）()\/]+/).filter(t => t.length >= 1);

  // 额外提取有意义的 2-gram
  for (let i = 0; i < q.length - 1; i++) {
    const bigram = q.substring(i, i + 2);
    if (/[\u4e00-\u9fff]/.test(bigram)) {
      tokens.push(bigram);
    }
  }

  const scored = chunks.map(chunk => {
    const searchText = chunk.text.toLowerCase() + ' ' + chunk.keywords.join(' ').toLowerCase();
    let score = 0;

    tokens.forEach(token => {
      if (!token) return;
      if (searchText.includes(token)) {
        score += token.length * 2;

        // 精确匹配加分
        if (chunk.keywords.some(k => k.toLowerCase().includes(token))) {
          score += 5;
        }
      }
    });

    return { chunk, score };
  });

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(s => s.chunk);
}

// ============================================================
// 获取系统提示词
// ============================================================
function getSystemPrompt() {
  return `你是一个专业的CRM系统与大健康行业AI助手，名叫"AI智能助手"。
你必须严格遵循用户的指令来回答。

【回复格式规范 — 必须遵守】
1. 使用 Markdown 语法让回复清晰专业：
   - **加粗** 用于关键人物姓名、产品名称、关键数字
   - ### 三级标题 用于分章节（如"高意向线索"、"建议方案"）
   - 列表项使用有序编号 1. 2. 3.
   - 表格数据用换行 + 项目符号对齐展示
2. 回复结构：先给一句话结论/总结 → 再给详细数据 → 最后给建议
3. 数据密集型回复（线索列表、客户信息、产品对比）务必分点、分行展示
4. 避免把所有内容挤成一段长文字，重要信息单独成行
5. 每次回复结尾可适当加一句简短的下一步建议`;
}

// ============================================================
// 获取知识库上下文消息（作为单独的 user message）
// ============================================================
function getContextMessage(userQuery) {
  const chunks = buildSearchableChunks();
  const relevant = searchKnowledge(userQuery, chunks);

  if (relevant.length === 0) {
    return null;
  }

  const lines = relevant.map((c, i) => `${i + 1}. ${c.text}`);
  
  return `【系统知识库数据】以下是数据库中与您问题相关的数据，请严格基于这些数据回答：

${lines.join('\n\n')}

请直接引用上述数据中的内容来回答用户的问题。如果有价格信息、产品功效、客户数据等，请明确告知。`;
}

// ============================================================
// 直接答案查找 — 如果知识库有明确匹配，直接构造回答
// ============================================================
function findDirectAnswer(query) {
  const q = query.toLowerCase();
  const chunks = buildSearchableChunks();

  // 先检查产品编号匹配
  const productMatch = q.match(/ZB[-_]?00\d/i);
  if (productMatch) {
    const code = productMatch[0].toUpperCase().replace(/_/, '-');
    const product = knowledgeBase.healthProducts.find(p => p.no === code);
    if (product) {
      return `根据知识库数据，${product.name}（编号：${product.no}）的价格为 **¥${product.price}**，规格为 ${product.spec}。\n\n**核心功效**：${product.功效}\n\n**适合人群**：${product.适合人群}`;
    }
  }

  // 检查客户名称匹配（大健康线索）
  const nameMatch = knowledgeBase.healthLeads.find(l => q.includes(l.name));
  if (nameMatch) {
    return `根据知识库数据，客户 ${nameMatch.name}（${nameMatch.age}岁，${nameMatch.job}）的线索信息如下：\n\n来源：${nameMatch.source}\n症状/关注点：${nameMatch.symptom}\n跟进状态：${nameMatch.status}\n负责销售：${nameMatch.seller}\n意向产品：${nameMatch.product}\n预算范围：${nameMatch.budget}元`;
  }

  // 检查 CRM 线索匹配
  const crmLeadMatch = knowledgeBase.leads.find(l => q.includes(l.name));
  if (crmLeadMatch) {
    return `根据CRM系统数据，线索 ${crmLeadMatch.name}（电话：${crmLeadMatch.phone}）的信息如下：\n意向等级：${crmLeadMatch.pri}，来源渠道：${crmLeadMatch.src}，负责人：${crmLeadMatch.fol}`;
  }

  // 检查 CRM 订单匹配
  const orderMatch = knowledgeBase.orders.find(o => q.includes(o.customer) || q.includes(o.no.toLowerCase()));
  if (orderMatch) {
    return `根据CRM系统数据，订单 ${orderMatch.no} 信息如下：\n客户：${orderMatch.customer}，产品：${orderMatch.product}，金额：¥${orderMatch.amount.toLocaleString()}，状态：${orderMatch.status}，日期：${orderMatch.date}`;
  }

  // 检查 CRM 客户匹配
  const custMatch = knowledgeBase.customers.find(c => q.includes(c.name) || q.includes(c.contact));
  if (custMatch) {
    return `根据CRM系统数据，客户 ${custMatch.name} 信息如下：\n联系人：${custMatch.contact}，电话：${custMatch.phone}，等级：${custMatch.level}，行业：${custMatch.industry}，地区：${custMatch.region}，状态：${custMatch.status}`;
  }

  return null;
}

module.exports = { knowledgeBase, buildSearchableChunks, searchKnowledge, getSystemPrompt, getContextMessage, findDirectAnswer };
