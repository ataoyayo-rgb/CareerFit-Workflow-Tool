/*
  中国头部企业常见岗位族的通用关键词库
  用途：MVP 阶段的岗位方向识别、经历匹配和求职表达建议。
  说明：这不是实时招聘数据，也不声称覆盖中国前 50 企业全部岗位。
*/

const JOB_KEYWORD_LIBRARY = [
  {
    id: "content-media-operations",
    direction: "内容与新媒体运营",
    roles: ["内容运营", "新媒体运营", "新媒体运营助理", "短视频运营", "社群运营", "用户运营", "电商运营", "直播运营", "活动执行", "活动运营", "平台运营", "品牌内容", "内容协调", "社媒协调", "小红书运营", "抖音运营", "视频号运营", "B站运营"],
    core: ["内容运营", "新媒体运营", "内容生产", "选题策划", "内容策划", "内容分发", "内容协调", "社媒内容", "social media content", "content coordination", "平台运营", "账号运营", "用户互动", "社群运营", "电商运营", "直播运营", "活动执行", "活动运营", "用户增长", "粉丝增长", "短视频", "直播", "小红书", "抖音", "视频号", "B站", "公众号", "品牌内容"],
    hard: ["文案", "脚本", "剪辑", "排版", "数据复盘", "内容日历", "内容排期", "素材归档", "私信反馈", "content calendar", "热点追踪", "A/B 测试", "SEO", "平台规则", "运营数据", "转化率", "留存", "互动率"],
    soft: ["沟通", "执行", "审美", "用户洞察", "协作", "创意", "复盘", "细节意识"],
    bonus: ["爆款", "矩阵运营", "达人合作", "KOL", "KOC", "私域", "增长实验", "AIGC 内容生成"],
    english: ["content operation", "content operations", "content strategy", "content coordination", "content creation", "copywriting", "social media", "social media content", "short video", "community operation", "user engagement", "content distribution", "editorial calendar", "campaign", "post-campaign analysis", "retention", "conversion rate", "Xiaohongshu", "Douyin", "TikTok", "WeChat Channels", "Bilibili"],
    synonyms: ["内容编辑", "内容策展", "社媒运营", "账号增长", "粉丝运营", "用户维护", "选题优化", "平台分发", "互动运营", "review", "retrospective", "content calendar", "communication materials"],
    abilityMap: {
      content: "内容",
      campaign: "活动运营",
      user: "用户运营",
      community: "社群运营",
      data: "数据",
      review: "复盘能力"
    },
    expressionFocus: ["内容生产", "平台分发", "用户互动", "数据反馈", "选题优化"]
  },
  {
    id: "product-project",
    direction: "产品与项目方向",
    roles: ["产品经理", "产品助理", "产品运营", "需求分析", "用户研究", "产品增长", "产品数据分析"],
    core: ["产品经理", "产品运营", "需求分析", "用户研究", "产品增长", "产品数据分析", "功能设计", "用户反馈", "竞品分析", "需求文档", "原型", "PRD", "MVP", "迭代", "user flow", "usability"],
    hard: ["Axure", "Figma", "墨刀", "流程图", "用户画像", "埋点", "指标体系", "数据分析", "看板", "SQL", "Excel", "需求优先级", "验收测试"],
    soft: ["沟通", "跨部门协作", "逻辑分析", "推动", "执行", "解决问题", "时间管理"],
    bonus: ["增长实验", "A/B 测试", "敏捷", "Scrum", "低代码", "自动化", "商业化"],
    english: ["product manager", "product operation", "requirement analysis", "user research", "product research", "growth", "roadmap", "prototype", "wireframe", "feature design", "user flow", "usability", "PRD", "MVP", "agile", "scrum", "user feedback"],
    synonyms: ["产品助理", "需求调研", "用户访谈", "版本迭代", "功能优化", "产品优化"],
    abilityMap: {
      stakeholder: "跨部门协作",
      requirement: "需求分析",
      research: "用户研究",
      product: "产品",
      data: "数据",
      growth: "增长"
    },
    expressionFocus: ["需求拆解", "用户洞察", "项目推进", "跨部门协作", "数据验证"]
  },
  {
    id: "marketing-brand",
    direction: "市场与品牌方向",
    roles: ["市场营销", "市场专员", "品牌营销", "品牌公关", "整合营销", "公关传播", "Marketing Communications Assistant", "marketing communications", "communications assistant", "Campaign 执行", "增长营销", "渠道推广", "品牌策划"],
    core: ["市场营销", "市场专员", "品牌营销", "品牌公关", "整合营销", "公关传播", "Campaign", "campaign planning", "campaign execution", "campaign support", "活动策划", "活动执行", "增长营销", "渠道推广", "品牌策划", "传播策略", "营销方案", "communication materials", "meeting notes", "stakeholder communication", "用户增长", "品牌曝光", "线下活动"],
    hard: ["投放", "渠道管理", "营销数据", "转化率", "ROI", "CRM", "竞品分析", "市场调研", "媒介", "公关稿", "Brief", "预算", "campaign documents", "project progress"],
    soft: ["沟通", "创意", "执行", "资源协调", "结果导向", "复盘能力", "written communication", "information organisation", "information organization"],
    bonus: ["整合传播", "KOL", "KOC", "私域增长", "品牌联名", "增长实验", "AIGC 营销素材", "AI tools", "content creation tools"],
    english: ["marketing", "marketing communications", "communications", "brand marketing", "integrated marketing", "public relations", "campaign", "campaign planning", "campaign execution", "campaign documents", "communication materials", "meeting notes", "stakeholder communication", "social media", "content coordination", "growth marketing", "channel promotion", "brand planning", "go-to-market", "ROI", "CRM", "brief"],
    synonyms: ["市场推广", "品牌传播", "营销策划", "传播执行", "活动执行", "媒介传播", "渠道拓展", "post-campaign analysis", "internal and external stakeholders", "organise campaign documents", "organize campaign documents"],
    abilityMap: {
      campaign: "市场营销",
      brand: "品牌",
      channel: "渠道推广",
      growth: "增长",
      communication: "沟通",
      review: "复盘能力"
    },
    expressionFocus: ["营销策划", "渠道推广", "传播执行", "资源协调", "效果复盘"]
  },
  {
    id: "sales-business",
    direction: "销售与商务方向",
    roles: ["商务拓展", "商务助理", "销售运营", "销售管培生", "客户成功", "大客户管理", "渠道销售", "BD", "客户关系维护"],
    core: ["商务拓展", "销售运营", "客户成功", "大客户管理", "渠道销售", "BD", "客户关系维护", "线索跟进", "客户沟通", "方案演示", "商机", "续约", "回款"],
    hard: ["CRM", "销售漏斗", "Pipeline", "销售数据", "合同", "报价", "客户分层", "转化率", "客情维护", "需求挖掘"],
    soft: ["沟通", "谈判", "执行", "抗压能力", "责任心", "结果导向", "跟进"],
    bonus: ["SaaS", "KA", "渠道管理", "解决方案销售", "客户成功体系", "数据驱动销售"],
    english: ["business development", "BD", "sales operation", "customer success", "key account", "account management", "channel sales", "client relationship", "pipeline", "CRM", "renewal", "conversion"],
    synonyms: ["客户维护", "客户经营", "商机推进", "销售支持", "大客户销售", "渠道拓展", "client communication", "follow-up"],
    abilityMap: {
      client: "客户沟通",
      sales: "销售",
      pipeline: "销售运营",
      negotiation: "谈判",
      communication: "沟通"
    },
    expressionFocus: ["客户需求理解", "沟通跟进", "方案转化", "关系维护", "结果达成"]
  },
  {
    id: "software-engineering",
    direction: "软件开发方向",
    roles: ["软件工程师", "前端开发", "后端开发", "全栈开发", "Web 开发", "移动端开发", "小程序开发", "software engineer", "frontend developer", "backend developer", "full stack developer", "web developer", "mobile developer", "application developer"],
    core: ["软件开发", "功能开发", "前端实现", "后端接口", "接口开发", "API integration", "frontend", "backend", "full stack", "web application", "application development", "用户界面", "交互组件", "代码实现", "代码优化"],
    hard: ["JavaScript", "TypeScript", "React", "Vue", "Node.js", "Python", "Java", "HTML", "CSS", "API", "database", "数据库", "Git", "debugging", "调试", "testing", "测试", "deployment", "部署", "code review"],
    soft: ["逻辑分析", "问题排查", "细节意识", "学习能力", "工程思维", "文档意识"],
    bonus: ["单元测试", "自动化测试", "CI/CD", "性能优化", "响应式设计", "组件化", "代码评审", "云部署"],
    english: ["software engineer", "frontend developer", "backend developer", "full stack developer", "web developer", "mobile developer", "application developer", "JavaScript", "TypeScript", "React", "Vue", "Node.js", "Python", "Java", "API", "database", "Git", "debugging", "testing", "deployment", "code review"],
    synonyms: ["前端工程师", "后端工程师", "全栈工程师", "网页开发", "应用开发", "小程序工程师", "接口联调", "bug fixing", "feature implementation", "frontend engineering", "backend engineering"],
    abilityMap: {
      feature: "功能开发",
      frontend: "前端开发",
      backend: "后端开发",
      API: "API 集成",
      debugging: "问题排查",
      testing: "测试验证",
      documentation: "技术文档"
    },
    expressionFocus: ["功能开发", "代码实现", "接口联调", "问题排查", "测试验证"]
  },
  {
    id: "data-analytics",
    direction: "数据分析方向",
    roles: ["数据分析师", "数据分析实习生", "商业分析师", "BI 分析师", "data analyst", "business analyst", "BI analyst"],
    core: ["数据分析", "商业分析", "BI 分析", "数据可视化", "数据看板", "指标分析", "KPI", "趋势分析", "用户行为分析", "reporting", "dashboard", "metric tracking", "trend analysis", "business intelligence"],
    hard: ["SQL", "Excel", "Python", "Tableau", "Power BI", "数据清洗", "数据建模", "报表", "dashboard", "data visualization", "data cleaning", "data modelling", "metrics", "KPI", "A/B testing"],
    soft: ["逻辑分析", "细节意识", "结构化表达", "业务理解", "问题诊断"],
    bonus: ["自动化报表", "A/B 测试", "漏斗分析", "留存分析", "归因分析", "数据治理", "预测分析"],
    english: ["data analyst", "business analyst", "BI analyst", "data visualization", "dashboard", "SQL", "Excel", "Python", "Tableau", "Power BI", "reporting", "data cleaning", "data modelling", "metrics", "KPI", "trend analysis", "A/B testing"],
    synonyms: ["数据统计", "报表分析", "数据洞察", "指标跟踪", "经营报表", "用户行为分析", "dashboarding", "insight generation", "metric analysis"],
    abilityMap: {
      cleaning: "数据清洗",
      analysis: "数据分析",
      dashboard: "数据可视化",
      reporting: "报表整理",
      metrics: "指标跟踪",
      insight: "洞察提炼",
      SQL: "SQL"
    },
    expressionFocus: ["数据清洗", "指标跟踪", "趋势分析", "可视化呈现", "业务洞察"]
  },
  {
    id: "ai-machine-learning",
    direction: "人工智能与机器学习方向",
    roles: ["人工智能工程师", "机器学习工程师", "数据科学家", "AI engineer", "machine learning engineer", "data scientist", "ML intern"],
    core: ["人工智能", "机器学习", "数据科学", "模型训练", "模型评估", "自然语言处理", "NLP", "计算机视觉", "大语言模型", "LLM", "分类模型", "预测模型", "推荐系统", "model training", "model evaluation"],
    hard: ["Python", "dataset", "数据集", "feature engineering", "特征工程", "accuracy", "准确率", "evaluation metrics", "评估指标", "prompt engineering", "提示词工程", "NLP", "computer vision", "classification", "prediction", "recommendation system"],
    soft: ["实验意识", "逻辑分析", "问题拆解", "持续迭代", "结果评估"],
    bonus: ["模型调参", "误差分析", "RAG", "Agent", "向量检索", "MLOps", "模型部署", "A/B 测试"],
    english: ["machine learning", "AI engineer", "data scientist", "model training", "model evaluation", "NLP", "computer vision", "prompt engineering", "LLM", "classification", "prediction", "recommendation system", "feature engineering", "dataset", "accuracy", "evaluation metrics"],
    synonyms: ["机器学习算法", "模型实验", "模型验证", "文本分类", "预测分析", "推荐算法", "AI workflow", "model experimentation", "data preparation", "prompt design"],
    abilityMap: {
      model: "模型实验",
      dataset: "数据准备",
      prompt: "提示词设计",
      evaluation: "模型评估",
      feature: "特征处理",
      workflow: "AI 工作流",
      automation: "自动化流程"
    },
    expressionFocus: ["数据准备", "模型实验", "模型评估", "提示词设计", "AI 工作流"]
  },
  {
    id: "cybersecurity",
    direction: "网络安全方向",
    roles: ["网络安全工程师", "信息安全分析师", "安全分析师", "cybersecurity analyst", "information security analyst", "security analyst"],
    core: ["网络安全", "信息安全", "安全分析", "漏洞", "风险评估", "权限控制", "安全事件响应", "安全监控", "日志分析", "合规检查", "network security", "incident response"],
    hard: ["vulnerability", "risk assessment", "access control", "incident response", "monitoring", "log analysis", "compliance", "phishing", "endpoint security", "penetration testing", "渗透测试", "钓鱼攻击", "终端安全", "网络防护"],
    soft: ["风险意识", "细节意识", "问题排查", "责任心", "合规意识"],
    bonus: ["SIEM", "SOC", "威胁情报", "漏洞扫描", "安全基线", "应急演练", "零信任"],
    english: ["cybersecurity", "information security", "security analyst", "vulnerability", "risk assessment", "access control", "incident response", "monitoring", "log analysis", "compliance", "phishing", "network security", "endpoint security", "penetration testing"],
    synonyms: ["安全运维", "安全合规", "安全审计", "权限审查", "异常登录", "risk identification", "security monitoring", "security compliance"],
    abilityMap: {
      risk: "风险识别",
      log: "日志分析",
      monitoring: "安全监控",
      access: "权限管理",
      incident: "事件响应",
      compliance: "合规支持"
    },
    expressionFocus: ["风险识别", "日志分析", "安全监控", "权限管理", "合规支持"]
  },
  {
    id: "it-support-systems",
    direction: "IT 支持与系统运维方向",
    roles: ["IT 支持", "技术支持", "桌面支持", "系统运维", "helpdesk", "IT support", "technical support", "system administrator", "systems support"],
    core: ["IT 支持", "技术支持", "桌面支持", "系统运维", "故障排查", "用户支持", "工单处理", "设备配置", "账号配置", "system administration", "ticket handling", "user support"],
    hard: ["hardware", "software", "network", "ticket", "device setup", "account setup", "documentation", "硬件", "软件", "网络", "工单", "设备配置", "账号配置", "技术文档"],
    soft: ["服务意识", "耐心沟通", "问题排查", "细节意识", "响应意识"],
    bonus: ["SLA", "资产管理", "知识库", "权限管理", "远程支持", "自动化运维", "Linux", "Windows"],
    english: ["IT support", "helpdesk", "technical support", "system administration", "troubleshooting", "hardware", "software", "network", "ticket", "user support", "device setup", "account setup", "documentation"],
    synonyms: ["IT 运维", "桌面运维", "系统支持", "技术客服", "账号开通", "软件安装", "device support", "technical documentation"],
    abilityMap: {
      troubleshooting: "故障排查",
      user: "用户支持",
      system: "系统配置",
      ticket: "工单处理",
      documentation: "技术文档",
      device: "设备支持"
    },
    expressionFocus: ["故障排查", "用户支持", "系统配置", "工单处理", "技术文档"]
  },
  {
    id: "engineering-technical",
    direction: "工程技术方向",
    roles: ["工程实习生", "机械工程师", "电气工程师", "土木工程师", "工艺工程师", "engineering intern", "mechanical engineering", "electrical engineering", "civil engineering", "process engineering"],
    core: ["工程实习", "机械工程", "电气工程", "土木工程", "工艺工程", "技术图纸", "测试验证", "检验", "质量检查", "设计评审", "设备维护", "technical drawing", "design review"],
    hard: ["CAD", "AutoCAD", "SolidWorks", "MATLAB", "simulation", "仿真", "technical drawing", "测试", "inspection", "quality check", "maintenance", "safety", "安全规范", "设备维护"],
    soft: ["工程思维", "细节意识", "安全意识", "现场协作", "问题排查"],
    bonus: ["工艺优化", "失效分析", "有限元", "生产线", "标准作业", "EHS", "设备点检"],
    english: ["engineering intern", "mechanical engineering", "electrical engineering", "civil engineering", "process engineering", "CAD", "AutoCAD", "SolidWorks", "MATLAB", "simulation", "technical drawing", "testing", "inspection", "quality check", "design review", "maintenance", "safety"],
    synonyms: ["工程技术", "机械设计", "电气设计", "土木施工", "工艺支持", "图纸整理", "测试记录", "equipment support", "process support"],
    abilityMap: {
      drawing: "图纸整理",
      testing: "测试验证",
      process: "工艺支持",
      quality: "质量检查",
      design: "设计评审",
      safety: "安全规范",
      equipment: "设备维护"
    },
    expressionFocus: ["图纸整理", "测试验证", "工艺支持", "质量检查", "安全规范"]
  },
  {
    id: "research-lab",
    direction: "科研与实验室支持方向",
    roles: ["科研助理", "实验室助理", "研究助理", "research assistant", "lab assistant", "laboratory assistant"],
    core: ["科研助理", "实验室助理", "实验", "文献综述", "数据收集", "数据编码", "问卷", "访谈", "实验室", "样本准备", "实验流程", "学术研究", "literature review", "data collection"],
    hard: ["SPSS", "R语言", "Python", "laboratory", "sample preparation", "protocol", "ethics", "academic research", "survey", "interview", "data coding", "实验记录", "伦理审批"],
    soft: ["严谨性", "细节意识", "信息整理", "学术写作", "规范意识"],
    bonus: ["论文写作", "统计分析", "实验设计", "IRB", "开放科学", "数据管理计划"],
    english: ["research assistant", "lab assistant", "experiment", "literature review", "data collection", "data coding", "survey", "interview", "SPSS", "R", "Python", "laboratory", "sample preparation", "protocol", "ethics", "academic research"],
    synonyms: ["研究支持", "课题助理", "文献整理", "问卷分析", "实验支持", "research documentation", "survey analysis", "lab procedure"],
    abilityMap: {
      literature: "文献整理",
      collection: "数据收集",
      experiment: "实验支持",
      documentation: "研究记录",
      survey: "问卷分析",
      protocol: "实验流程",
      writing: "学术写作"
    },
    expressionFocus: ["文献整理", "数据收集", "实验支持", "研究记录", "学术写作"]
  },
  {
    id: "quality-testing",
    direction: "质量与测试方向",
    roles: ["QA", "质量保证", "软件测试", "测试工程师", "质量控制", "quality assurance", "software testing", "QA tester", "quality control"],
    core: ["QA", "质量保证", "软件测试", "测试用例", "Bug 记录", "UAT", "回归测试", "质量控制", "检验", "缺陷", "验证", "测试文档", "用户验收测试"],
    hard: ["test case", "bug report", "UAT", "regression testing", "inspection", "defect", "validation", "test documentation", "user acceptance testing", "测试用例", "缺陷记录", "验证测试", "回归测试"],
    soft: ["细节意识", "问题定位", "质量意识", "逻辑分析", "耐心"],
    bonus: ["自动化测试", "测试管理工具", "缺陷跟踪", "性能测试", "兼容性测试", "可用性测试"],
    english: ["QA", "quality assurance", "software testing", "test case", "bug report", "UAT", "regression testing", "quality control", "inspection", "defect", "validation", "test documentation", "user acceptance testing"],
    synonyms: ["测试执行", "测试验证", "质量检查", "缺陷管理", "用户测试", "bug tracking", "test case design", "user testing"],
    abilityMap: {
      test: "测试用例",
      bug: "缺陷记录",
      quality: "质量检查",
      validation: "验证测试",
      regression: "回归测试",
      documentation: "测试文档",
      user: "用户测试"
    },
    expressionFocus: ["测试用例", "缺陷记录", "质量检查", "验证测试", "测试文档"]
  },
  {
    id: "healthcare-life-science",
    direction: "医疗健康与生命科学支持方向",
    roles: ["医疗助理", "临床支持", "生命科学助理", "生物医药助理", "healthcare assistant", "clinical support", "life science assistant", "medical research assistant"],
    core: ["医疗助理", "临床支持", "生命科学", "生物", "药学", "医学研究", "患者支持", "健康数据", "实验记录", "样本追踪", "文档整理", "安全流程", "health data", "lab records"],
    hard: ["biology", "pharmaceutical", "medical research", "patient support", "health data", "lab records", "compliance", "sample tracking", "documentation", "safety protocol", "合规", "样本追踪", "实验记录"],
    soft: ["细节意识", "保密意识", "服务意识", "规范意识", "责任心"],
    bonus: ["GCP", "GMP", "临床试验", "医学文献", "病例资料", "药物警戒", "实验室安全"],
    english: ["healthcare assistant", "clinical support", "life science", "biology", "pharmaceutical", "medical research", "patient support", "health data", "lab records", "compliance", "sample tracking", "documentation", "safety protocol"],
    synonyms: ["医疗支持", "生命科学支持", "临床资料", "实验记录管理", "健康信息", "lab record management", "health data organisation"],
    abilityMap: {
      documentation: "文档整理",
      sample: "样本追踪",
      compliance: "合规支持",
      patient: "患者支持",
      healthData: "健康数据",
      lab: "实验记录",
      safety: "安全流程"
    },
    expressionFocus: ["文档整理", "样本追踪", "合规支持", "健康数据", "安全流程"]
  },
  {
    id: "data-business-analysis",
    direction: "数据与商业分析方向",
    roles: ["数据分析", "数据分析实习生", "商业分析", "经营分析", "用户分析", "销售分析", "BI", "SQL", "Excel", "数据可视化", "指标体系"],
    core: ["数据分析", "商业分析", "经营分析", "用户分析", "销售分析", "BI", "指标体系", "数据看板", "数据复盘", "业务洞察", "漏斗分析", "留存分析", "转化分析"],
    hard: ["SQL", "Excel", "Python", "Tableau", "Power BI", "数据可视化", "Dashboard", "报表", "数据清洗", "数据建模", "透视表", "函数", "指标口径"],
    soft: ["逻辑分析", "细节意识", "沟通", "问题诊断", "结果导向", "学习能力"],
    bonus: ["自动化报表", "A/B 测试", "归因分析", "预测分析", "经营模型", "数据治理"],
    english: ["data analysis", "business analysis", "business intelligence", "BI", "SQL", "Excel", "dashboard", "reporting", "metrics", "data visualization", "funnel analysis", "cohort", "retention", "conversion"],
    synonyms: ["数据统计", "报表分析", "经营报表", "用户洞察", "指标拆解", "数据洞察", "analysis", "metrics", "reporting"],
    abilityMap: {
      data: "数据",
      metrics: "指标体系",
      dashboard: "数据可视化",
      reporting: "报告撰写",
      SQL: "SQL",
      Excel: "Excel"
    },
    expressionFocus: ["数据记录", "指标拆解", "分析方法", "可视化呈现", "业务结论"]
  },
  {
    id: "ai-automation",
    direction: "AI 与自动化方向",
    roles: ["AI 工具使用", "Prompt Engineering", "AI Workflow", "Agent", "RAG", "自动化", "AIGC", "内容生成", "AI 提效", "数据总结", "信息整理"],
    core: ["AI", "AI 工具", "Prompt", "Prompt Engineering", "AI Workflow", "Agent", "RAG", "自动化", "AIGC", "内容生成", "AI 提效", "信息整理", "数据总结", "知识库", "工作流"],
    hard: ["ChatGPT", "Claude", "Coze", "Dify", "Notion AI", "Zapier", "Make", "API", "向量检索", "提示词", "自动化脚本", "低代码"],
    soft: ["学习能力", "流程优化", "解决问题", "主动性", "细节意识", "复盘能力"],
    bonus: ["多 Agent", "知识库问答", "自动化运营", "AI 数据分析", "AI 内容生产", "效率提升"],
    english: ["AI tools", "prompt engineering", "AI workflow", "agent", "RAG", "automation", "AIGC", "content generation", "productivity", "information synthesis", "workflow optimization", "low-code", "no-code"],
    synonyms: ["提示词工程", "智能体", "检索增强生成", "自动化流程", "AI 辅助", "提效", "信息归纳", "workflow", "automation"],
    abilityMap: {
      "AI tools": "AI",
      prompt: "AI",
      workflow: "流程优化",
      automation: "自动化",
      RAG: "RAG",
      agent: "Agent",
      data: "数据总结"
    },
    expressionFocus: ["AI workflow", "自动化", "信息整理", "效率提升", "可复用流程"]
  },
  {
    id: "tech-internet",
    direction: "技术与互联网基础岗位",
    roles: ["前端", "后端", "测试", "数据开发", "算法", "运维", "系统支持", "技术支持", "低代码", "无代码工具"],
    core: ["前端", "后端", "测试", "数据开发", "算法", "运维", "系统支持", "技术支持", "低代码", "无代码", "需求实现", "问题排查", "接口", "系统维护"],
    hard: ["HTML", "CSS", "JavaScript", "React", "Vue", "Node.js", "Java", "Python", "API", "数据库", "SQL", "Git", "测试用例", "Linux", "云服务"],
    soft: ["逻辑分析", "解决问题", "沟通", "学习能力", "细节意识", "责任心"],
    bonus: ["自动化测试", "DevOps", "CI/CD", "性能优化", "数据管道", "低代码平台"],
    english: ["frontend", "backend", "testing", "data engineering", "algorithm", "operations", "technical support", "system support", "low-code", "no-code", "API", "database", "troubleshooting"],
    synonyms: ["前端开发", "后端开发", "软件测试", "系统运维", "技术客服", "问题定位", "bug", "debug"],
    abilityMap: {
      frontend: "前端",
      backend: "后端",
      testing: "测试",
      support: "技术支持",
      troubleshooting: "解决问题",
      data: "数据"
    },
    expressionFocus: ["需求实现", "问题排查", "系统支持", "协作交付", "稳定性"]
  },
  {
    id: "hr-admin",
    direction: "人力与行政方向",
    roles: ["HR", "人力资源实习生", "行政助理", "招聘", "员工关系", "培训", "行政支持", "组织协调", "文档管理"],
    core: ["HR", "人力资源", "人力资源实习生", "行政助理", "招聘", "员工关系", "培训", "行政支持", "组织协调", "文档管理", "面试安排", "简历筛选", "入离职", "活动组织", "会议安排"],
    hard: ["Excel", "ATS", "招聘渠道", "面试流程", "员工档案", "培训材料", "行政采购", "费用报销", "制度文档"],
    soft: ["沟通", "细节意识", "责任心", "执行", "时间管理", "服务意识", "保密意识"],
    bonus: ["雇主品牌", "校园招聘", "HRBP", "培训体系", "流程优化"],
    english: ["HR", "recruiting", "recruitment", "employee relations", "training", "administrative support", "coordination", "document management", "interview scheduling", "onboarding"],
    synonyms: ["人事", "招募", "简历筛选", "面试协调", "员工沟通", "行政协助", "资料管理", "coordination"],
    abilityMap: {
      communication: "沟通",
      coordination: "组织协调",
      document: "文档管理",
      recruiting: "招聘",
      training: "培训"
    },
    expressionFocus: ["流程执行", "沟通协调", "文档管理", "细节把控", "服务支持"]
  },
  {
    id: "finance",
    direction: "金融与财务方向",
    roles: ["财务分析", "财务助理", "会计", "审计", "风控", "投资分析", "行业研究", "预算", "成本控制"],
    core: ["财务分析", "财务助理", "会计", "审计", "风控", "投资分析", "行业研究", "预算", "成本控制", "财务报表", "尽调", "估值", "现金流", "合规"],
    hard: ["Excel", "财务模型", "三大报表", "利润表", "资产负债表", "现金流量表", "Wind", "Bloomberg", "估值模型", "风险评估", "预算编制"],
    soft: ["逻辑分析", "细节意识", "责任心", "抗压能力", "报告撰写", "学习能力"],
    bonus: ["CPA", "CFA", "FRM", "行业数据库", "投研报告", "内控"],
    english: ["financial analysis", "accounting", "audit", "risk control", "investment analysis", "industry research", "budgeting", "cost control", "valuation", "due diligence", "financial model"],
    synonyms: ["财务测算", "报表分析", "成本分析", "风险管理", "投研", "行业分析", "预算管理"],
    abilityMap: {
      financial: "财务分析",
      audit: "审计",
      risk: "风控",
      research: "行业研究",
      budget: "预算",
      Excel: "Excel"
    },
    expressionFocus: ["数据严谨性", "财务分析", "风险意识", "报告输出", "业务判断"]
  },
  {
    id: "supply-chain-manufacturing",
    direction: "供应链与制造方向",
    roles: ["供应链", "采购", "物流", "生产计划", "质量管理", "流程优化", "库存管理", "新能源制造", "智能制造"],
    core: ["供应链", "采购", "物流", "生产计划", "质量管理", "流程优化", "库存管理", "新能源制造", "智能制造", "供应商", "交付", "产能", "物料", "SOP"],
    hard: ["ERP", "SAP", "库存周转", "采购成本", "交期", "质检", "质量标准", "流程图", "数据报表", "BOM", "生产排程"],
    soft: ["组织协调", "沟通", "执行", "问题诊断", "结果导向", "细节意识", "抗压能力"],
    bonus: ["精益生产", "六西格玛", "自动化产线", "新能源", "智能制造", "供应链优化"],
    english: ["supply chain", "procurement", "logistics", "production planning", "quality management", "process optimization", "inventory management", "new energy manufacturing", "smart manufacturing", "ERP", "SAP"],
    synonyms: ["供应链管理", "采购管理", "物流管理", "库存控制", "流程改善", "质量控制", "交付管理", "workflow"],
    abilityMap: {
      workflow: "流程优化",
      process: "流程优化",
      inventory: "库存管理",
      quality: "质量管理",
      procurement: "采购",
      coordination: "组织协调"
    },
    expressionFocus: ["流程优化", "供应商/跨方协调", "数据跟踪", "交付保障", "成本或效率改善"]
  },
  {
    id: "consulting-strategy",
    direction: "咨询与战略方向",
    roles: ["战略分析", "行业研究", "案例分析", "竞品分析", "商业建模", "报告撰写", "客户访谈", "问题诊断"],
    core: ["战略分析", "行业研究", "案例分析", "竞品分析", "商业建模", "报告撰写", "客户访谈", "问题诊断", "商业分析", "市场规模", "增长策略", "桌面研究"],
    hard: ["Excel", "PPT", "PowerPoint", "商业模型", "财务模型", "访谈纪要", "框架分析", "PEST", "SWOT", "波特五力", "数据可视化"],
    soft: ["逻辑分析", "沟通", "学习能力", "报告撰写", "结构化表达", "抗压能力"],
    bonus: ["咨询项目", "战略项目", "案例面试", "行业数据库", "专家访谈"],
    english: ["strategy analysis", "industry research", "case analysis", "competitive analysis", "business modeling", "report writing", "client interview", "problem diagnosis", "market sizing", "desktop research"],
    synonyms: ["战略研究", "行业分析", "竞品研究", "案例拆解", "商业建模", "客户调研", "结构化分析"],
    abilityMap: {
      strategy: "战略分析",
      research: "行业研究",
      analysis: "逻辑分析",
      report: "报告撰写",
      client: "客户访谈",
      problem: "问题诊断"
    },
    expressionFocus: ["问题拆解", "行业/竞品研究", "结构化分析", "报告输出", "客户沟通"]
  },
  {
    id: "education-training",
    direction: "教育与培训方向",
    roles: ["教育培训", "课程助理", "教务助理", "培训助理", "学习顾问", "助教"],
    core: ["教育培训", "课程支持", "教务管理", "培训执行", "课堂协助", "学员沟通", "学习反馈", "课程资料", "教学运营"],
    hard: ["课件整理", "学习数据", "Excel", "PPT", "课程排期", "作业批改", "问卷反馈", "培训材料"],
    soft: ["沟通", "耐心", "责任心", "执行", "信息整理", "服务意识"],
    bonus: ["在线教育", "社群学习", "课程迭代", "学习效果评估"],
    english: ["education", "training", "teaching assistant", "course operations", "learning support", "student feedback"],
    synonyms: ["教学辅助", "课程运营", "学员服务", "班级管理", "辅导"],
    abilityMap: {
      communication: "沟通",
      training: "培训",
      education: "教育",
      data: "数据",
      service: "服务意识"
    },
    expressionFocus: ["课程执行", "学员沟通", "资料整理", "反馈跟进", "学习效果"]
  },
  {
    id: "creative-design",
    direction: "设计与创意方向",
    roles: ["设计创意", "视觉设计", "平面设计", "新媒体设计", "内容设计", "创意策划"],
    core: ["设计创意", "视觉设计", "平面设计", "新媒体设计", "内容设计", "创意策划", "海报", "排版", "视觉素材", "品牌视觉"],
    hard: ["Canva", "Figma", "Photoshop", "Illustrator", "剪映", "排版", "视觉规范", "素材整理"],
    soft: ["审美", "沟通", "细节意识", "创意", "执行"],
    bonus: ["品牌一致性", "动效", "短视频包装", "AIGC 设计"],
    english: ["design", "creative", "visual design", "graphic design", "content design", "Canva", "Figma"],
    synonyms: ["视觉创意", "物料设计", "创意执行", "设计助理"],
    abilityMap: {
      design: "设计",
      creative: "创意",
      content: "内容",
      communication: "沟通"
    },
    expressionFocus: ["视觉表达", "素材整理", "创意执行", "品牌一致性", "细节呈现"]
  },
  {
    id: "general-workplace",
    direction: "通用职场能力",
    roles: ["通用职场能力", "项目助理"],
    core: ["沟通", "执行", "项目助理", "组织协调", "跨部门协作", "解决问题", "逻辑分析", "学习能力", "抗压能力", "责任心", "细节意识", "主动性", "结果导向", "时间管理", "复盘能力"],
    hard: ["文档整理", "会议纪要", "进度管理", "汇报", "Excel", "PPT", "邮件沟通", "流程梳理"],
    soft: ["communication", "execution", "implementation", "delivery", "follow-up", "stakeholder management", "cross-functional communication", "client communication", "problem solving", "logical thinking", "ownership", "attention to detail", "time management", "retrospective"],
    bonus: ["跨文化沟通", "双语沟通", "快速学习", "高压项目", "复杂信息整理"],
    english: ["communication", "execution", "implementation", "delivery", "follow-up", "stakeholder communication", "stakeholder management", "cross-functional collaboration", "problem solving", "logical analysis", "learning agility", "ownership", "attention to detail", "time management", "retrospective", "review"],
    synonyms: ["协同", "推进", "落地", "交付", "跟进", "复盘", "总结", "责任感", "主动推进", "抗压", "细心", "跨团队协作"],
    abilityMap: {
      communication: "沟通",
      stakeholder: "跨部门协作",
      execution: "执行",
      implementation: "执行",
      delivery: "执行",
      "follow-up": "执行",
      review: "复盘能力",
      retrospective: "复盘能力",
      problem: "解决问题",
      detail: "细节意识",
      ownership: "责任心"
    },
    expressionFocus: ["沟通协作", "执行推进", "问题解决", "结果导向", "复盘沉淀"]
  }
];

const GLOBAL_ABILITY_ALIASES = [
  { label: "沟通", terms: ["沟通", "communication", "stakeholder communication", "stakeholder management", "cross-functional communication", "client communication"] },
  { label: "跨部门协作", terms: ["跨部门", "跨团队", "协同", "stakeholder", "cross-functional", "collaboration"] },
  { label: "执行", terms: ["执行", "落地", "推进", "跟进", "execution", "implementation", "delivery", "follow-up"] },
  { label: "复盘能力", terms: ["复盘", "总结", "review", "retrospective", "post-campaign analysis"] },
  { label: "数据", terms: ["数据", "指标", "报表", "metrics", "dashboard", "reporting", "analysis", "SQL", "Excel"] },
  { label: "内容", terms: ["内容", "文案", "选题", "content", "copywriting", "editorial"] },
  { label: "AI", terms: ["AI", "AIGC", "AI tools", "prompt", "workflow", "agent", "RAG", "automation"] },
  { label: "流程优化", terms: ["流程", "流程优化", "workflow", "process optimization", "automation"] },
  { label: "活动运营 / 市场营销", terms: ["活动", "campaign", "marketing", "event"] }
];

function analyzeJobDescriptionWithLibrary(description) {
  const text = normalizeText(description);
  const rawText = String(description || "");
  const directionMatches = JOB_KEYWORD_LIBRARY.map((family) => {
    const groups = {
      role: findHits(text, family.roles),
      core: findHits(text, family.core),
      hard: findHits(text, family.hard),
      soft: findHits(text, family.soft),
      bonus: findHits(text, family.bonus),
      english: findHits(text, family.english),
      synonyms: findHits(text, family.synonyms)
    };
    const score = groups.role.length * 10
      + groups.core.length * 6
      + groups.hard.length * 5
      + groups.soft.length * 3
      + groups.bonus.length * 4
      + groups.english.length * 5
      + groups.synonyms.length * 4;

    return { family, groups, score };
  }).filter((match) => match.score > 0)
    .sort((a, b) => b.score - a.score);

  const topMatches = directionMatches.slice(0, 3);
  const primary = topMatches[0]?.family || null;
  const allGroups = topMatches.map((match) => match.groups);
  const globalAbilities = GLOBAL_ABILITY_ALIASES
    .filter((alias) => findHits(text, alias.terms).length)
    .map((alias) => alias.label);

  const analysis = {
    isShort: rawText.trim().length < 40,
    directions: topMatches.map((match) => ({
      id: match.family.id,
      name: match.family.direction,
      score: match.score
    })),
    primaryDirection: primary ? primary.direction : "",
    coreKeywords: unique(allGroups.flatMap((group) => group.role.concat(group.core, group.english, group.synonyms))).slice(0, 16),
    hardSkills: unique(allGroups.flatMap((group) => group.hard)).slice(0, 14),
    softSkills: unique(allGroups.flatMap((group) => group.soft).concat(globalAbilities)).slice(0, 14),
    bonusKeywords: unique(allGroups.flatMap((group) => group.bonus)).slice(0, 12),
    abilityTags: unique(topMatches.flatMap((match) => Object.values(match.family.abilityMap)).concat(globalAbilities)).slice(0, 18),
    expressionFocus: unique(topMatches.flatMap((match) => match.family.expressionFocus)).slice(0, 10),
    matchedKeywords: unique(topMatches.flatMap((match) => Object.values(match.groups).flat())).slice(0, 40),
    hasSignals: topMatches.length > 0
  };

  analysis.keywordList = unique([
    ...analysis.coreKeywords,
    ...analysis.hardSkills,
    ...analysis.softSkills,
    ...analysis.bonusKeywords,
    ...analysis.abilityTags
  ]);

  return analysis;
}

function findHits(normalizedText, terms) {
  return unique((terms || []).filter((term) => normalizedText.includes(normalizeText(term))));
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[，。；：、（）【】《》“”‘’]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

window.JobKeywordLibrary = {
  families: JOB_KEYWORD_LIBRARY,
  abilityAliases: GLOBAL_ABILITY_ALIASES,
  analyze: analyzeJobDescriptionWithLibrary
};
