/*
  Resume Bullet Pattern Library
  用途：根据岗位方向、JD 关键词和经历内容，生成更贴近目标岗位的中英文简历 Bullet。
  说明：这是公开 demo 的通用模板库，不代表完整市场岗位覆盖。
*/

(function () {
  const BULLET_PATTERNS = [
    {
      id: "business",
      zhName: "商业分析与业务支持",
      enName: "Business Analysis & Business Support",
      directionTags: ["数据 / 分析", "咨询 / 战略", "运营"],
      keywords: ["商业分析", "业务", "经营", "战略", "管理培训生", "商业运营", "business", "operation", "strategy"],
      anchors: ["业务分析", "经营支持", "数据整理", "报告撰写", "流程优化", "跨部门协作", "问题诊断"],
      verbs: ["整理", "分析", "跟进", "汇总", "识别", "支持"],
      metrics: ["运营问题", "改进方向", "协作效率", "项目进度", "决策支持"],
      zhTemplates: [
        { anchor: "业务分析", keywords: ["业务", "经营", "分析", "数据"], text: "业务分析：整理业务数据和项目资料，协助识别运营问题与改进方向，为团队决策提供基础支持。" },
        { anchor: "经营支持", keywords: ["业务", "流程", "跟进", "运营"], text: "经营支持：参与日常业务流程跟进，协助完成信息汇总、进度同步和执行反馈，提升团队协作效率。" },
        { anchor: "报告撰写", keywords: ["报告", "调研", "资料", "汇报"], text: "报告撰写：根据项目需求整理调研资料和关键发现，形成结构化报告，支持后续方案讨论。" }
      ],
      enTemplates: [
        "- Supported business analysis by organizing operational data and project materials, helping the team identify key issues and improvement opportunities.",
        "- Assisted daily business operations by tracking progress, summarizing updates, and supporting cross-functional communication.",
        "- Prepared structured reports based on research findings and project information to support decision-making."
      ]
    },
    {
      id: "marketing",
      zhName: "市场与品牌",
      enName: "Marketing & Branding",
      directionTags: ["市场 / 品牌"],
      keywords: ["市场", "品牌", "campaign", "营销", "公关", "传播", "增长", "渠道", "推广"],
      anchors: ["市场调研", "Campaign 执行", "品牌传播", "用户洞察", "渠道推广", "活动复盘", "内容策划"],
      verbs: ["调研", "策划", "推广", "协调", "复盘", "传播"],
      metrics: ["触达人数", "转化率", "活动参与", "渠道表现", "品牌曝光"],
      zhTemplates: [
        { anchor: "市场调研", keywords: ["市场", "调研", "竞品", "用户"], text: "市场调研：收集并整理目标用户、竞品和行业信息，协助团队判断市场机会和内容方向。" },
        { anchor: "Campaign 执行", keywords: ["campaign", "活动", "推广", "渠道"], text: "Campaign 执行：参与活动推广流程，协助完成物料准备、渠道发布、进度跟进和效果复盘。" },
        { anchor: "品牌传播", keywords: ["品牌", "传播", "社交媒体", "内容"], text: "品牌传播：围绕品牌定位整理传播素材，支持社交媒体、活动和内容渠道的统一表达。" }
      ],
      enTemplates: [
        "- Conducted market and competitor research to support campaign planning and identify potential audience opportunities.",
        "- Assisted campaign execution, including material preparation, channel coordination, progress tracking, and post-campaign review.",
        "- Supported brand communication by organizing messaging materials across social media, events, and content channels."
      ]
    },
    {
      id: "sales",
      zhName: "销售与商务",
      enName: "Sales & Business Development",
      directionTags: ["销售 / 商务"],
      keywords: ["销售", "商务", "客户", "BD", "订单", "带货", "门店", "客户成功", "转化"],
      anchors: ["客户沟通", "需求挖掘", "销售转化", "客户维护", "商务跟进", "订单处理", "商品讲解", "售后支持"],
      verbs: ["沟通", "确认", "跟进", "讲解", "维护", "转化"],
      metrics: ["销售额", "转化率", "订单数", "客户满意度", "复购"],
      zhTemplates: [
        { anchor: "客户沟通", keywords: ["客户", "沟通", "接待", "答疑"], text: "客户沟通：负责客户接待、需求确认和问题解答，提升客户对产品和服务流程的理解。" },
        { anchor: "销售转化", keywords: ["销售", "转化", "商品", "带货"], text: "销售转化：围绕产品卖点优化介绍话术，根据客户反馈调整推荐方式，推动销售转化。" },
        { anchor: "订单处理", keywords: ["订单", "交付", "核对", "售后"], text: "订单处理：跟进订单确认、信息核对和交付流程，减少沟通误差并保障客户体验。" }
      ],
      enTemplates: [
        "- Communicated with customers to understand needs, answer questions, and improve their understanding of products and services.",
        "- Improved sales conversion by refining product explanations and adjusting recommendations based on customer feedback.",
        "- Supported order processing by confirming customer information, tracking delivery steps, and reducing communication errors."
      ]
    },
    {
      id: "product",
      zhName: "产品与用户体验",
      enName: "Product & User Experience",
      directionTags: ["产品"],
      keywords: ["产品", "需求", "用户研究", "用户体验", "竞品", "功能", "增长产品", "product"],
      anchors: ["需求分析", "用户研究", "功能梳理", "竞品分析", "产品优化", "数据反馈", "用户体验"],
      verbs: ["整理", "拆解", "分析", "优化", "验证", "反馈"],
      metrics: ["使用体验", "功能转化", "反馈数量", "留存", "流程效率"],
      zhTemplates: [
        { anchor: "需求分析", keywords: ["需求", "反馈", "功能"], text: "需求分析：整理用户反馈和业务需求，协助拆解功能场景，形成可执行的产品改进建议。" },
        { anchor: "竞品分析", keywords: ["竞品", "同类产品", "对比"], text: "竞品分析：对比同类产品功能、流程和用户体验，提炼差异点并支持产品优化讨论。" },
        { anchor: "产品优化", keywords: ["产品", "优化", "体验", "流程"], text: "产品优化：根据用户反馈和使用流程问题，协助调整功能设计和页面交互，提升使用体验。" }
      ],
      enTemplates: [
        "- Organized user feedback and business requirements to support feature analysis and product improvement suggestions.",
        "- Conducted competitor analysis on product features, workflows, and user experience to identify optimization opportunities.",
        "- Assisted product optimization by reviewing user pain points and improving feature logic and page interactions."
      ]
    },
    {
      id: "tech",
      zhName: "技术与数字化",
      enName: "Technology & Digital Tools",
      directionTags: ["技术 / 互联网", "AI / 自动化"],
      keywords: ["前端", "后端", "测试", "开发", "技术", "自动化", "低代码", "无代码", "AI workflow", "工具"],
      anchors: ["功能开发", "问题排查", "测试验证", "数据处理", "自动化", "技术支持", "工具搭建", "文档编写"],
      verbs: ["开发", "搭建", "测试", "修复", "验证", "记录"],
      metrics: ["功能完成", "错误减少", "效率提升", "流程复用", "数据准确性"],
      zhTemplates: [
        { anchor: "功能开发", keywords: ["开发", "搭建", "网页", "工具"], text: "功能开发：基于业务需求搭建本地网页工具，实现数据录入、筛选、导出和本地保存等基础功能。" },
        { anchor: "测试验证", keywords: ["测试", "验证", "修复", "问题"], text: "测试验证：围绕核心使用流程进行功能测试，定位样式加载、数据导入和统计记录等问题并持续修复。" },
        { anchor: "自动化工具", keywords: ["自动化", "AI", "workflow", "工具"], text: "自动化工具：使用 AI 和前端技术搭建流程化工具，将重复性任务转化为可复用的本地操作流程。" }
      ],
      enTemplates: [
        "- Built a local web-based tool based on user needs, implementing data entry, filtering, export, and local storage features.",
        "- Conducted functional testing across core user flows and resolved issues related to styling, data import, and analytics tracking.",
        "- Developed workflow tools using AI and front-end technologies to convert repetitive tasks into reusable local processes."
      ]
    },
    {
      id: "software-engineering",
      zhName: "软件开发",
      enName: "Software Engineering",
      directionTags: ["Software Engineering", "软件开发", "技术 / 互联网"],
      keywords: ["软件开发", "软件工程师", "前端开发", "后端开发", "全栈开发", "Web 开发", "JavaScript", "TypeScript", "React", "Vue", "Node.js", "Python", "Java", "API", "数据库", "Git", "调试", "测试", "部署", "software engineer", "frontend developer", "backend developer", "full stack developer"],
      anchors: ["功能开发", "前端实现", "后端接口", "问题排查", "测试验证", "性能优化", "文档整理"],
      verbs: ["开发", "实现", "联调", "调试", "测试", "优化", "记录"],
      metrics: ["功能完成度", "交互稳定性", "问题修复", "测试通过", "用户流程", "代码可维护性"],
      zhTemplates: [
        { anchor: "功能开发", keywords: ["功能", "开发", "JavaScript", "React", "Vue", "Node.js"], text: "功能开发：根据用户需求实现网页工具核心功能，支持数据录入、筛选、匹配和结果生成。" },
        { anchor: "前端实现", keywords: ["前端", "页面", "组件", "交互", "HTML", "CSS"], text: "前端实现：搭建页面交互组件和本地数据逻辑，优化用户输入、结果展示和复制流程。" },
        { anchor: "后端接口", keywords: ["后端", "接口", "API", "数据库"], text: "后端接口：根据接口或数据结构要求完成联调与数据处理，支持前后端流程稳定衔接。" },
        { anchor: "问题排查", keywords: ["调试", "bug", "debug", "修复"], text: "问题排查：围绕样式加载、数据导入和交互异常进行测试修复，提升工具稳定性。" },
        { anchor: "补充建议", keywords: [], text: "补充建议：可补充具体技术栈、模块名称、接口数量、测试结果或性能改进数据，让技术贡献更清晰。" }
      ],
      enTemplates: [
        "- Built and tested web application features based on user requirements, improving task flow and interface usability.",
        "- Implemented frontend components and connected them with local data logic to support user input, filtering, and output generation.",
        "- Integrated API or data-handling logic with application workflows to support stable frontend and backend interaction.",
        "- Debugged styling, data import, and interaction issues across core user flows.",
        "- Add technical details where available, such as stack, modules, APIs, test results, or performance improvements."
      ]
    },
    {
      id: "data-analytics",
      zhName: "数据分析",
      enName: "Data Analytics",
      directionTags: ["Data Analytics", "数据分析", "数据 / 分析"],
      keywords: ["数据分析", "商业分析", "BI 分析", "数据可视化", "数据看板", "SQL", "Excel", "Python", "Tableau", "Power BI", "报表", "数据清洗", "数据建模", "指标分析", "KPI", "趋势分析", "A/B 测试", "data analyst", "dashboard", "reporting"],
      anchors: ["数据清洗", "数据分析", "指标跟踪", "报表整理", "可视化呈现", "洞察提炼", "决策支持"],
      verbs: ["清洗", "整理", "分析", "追踪", "建模", "呈现", "解释"],
      metrics: ["数据准确性", "指标变化", "异常趋势", "报表效率", "业务判断", "决策支持"],
      zhTemplates: [
        { anchor: "数据清洗", keywords: ["清洗", "核对", "原始数据"], text: "数据清洗：整理和核对原始数据，提升报表统计和后续分析的准确性。" },
        { anchor: "指标分析", keywords: ["指标", "KPI", "趋势", "用户行为"], text: "指标分析：围绕关键指标追踪数据变化，识别用户行为、运营表现或业务结果中的异常趋势。" },
        { anchor: "可视化呈现", keywords: ["Excel", "SQL", "Python", "Tableau", "Power BI", "可视化", "看板"], text: "可视化呈现：使用已有数据分析工具整理分析结果，形成清晰报表或图表支持团队决策。" },
        { anchor: "洞察提炼", keywords: ["洞察", "结论", "发现"], text: "洞察提炼：将数据变化转化为可理解的分析结论，帮助团队判断问题原因和后续行动方向。" },
        { anchor: "补充建议", keywords: [], text: "补充建议：可补充使用的工具、数据规模、关键指标、分析方法或业务结果，让数据贡献更具体。" }
      ],
      enTemplates: [
        "- Cleaned and organized raw data to support reporting, metric tracking, and follow-up analysis.",
        "- Used available analysis tools to review trends and identify changes in user behavior, performance, or operational outcomes.",
        "- Built simple reports or dashboards to communicate key findings and support team decisions.",
        "- Translated data patterns into clear findings to help the team understand issues and next steps.",
        "- Add details where available, such as tools, dataset size, metrics, analysis method, or business outcome."
      ]
    },
    {
      id: "ai-machine-learning",
      zhName: "人工智能与机器学习",
      enName: "AI / Machine Learning",
      directionTags: ["AI / Machine Learning", "人工智能 / 机器学习", "AI / 自动化"],
      keywords: ["人工智能", "机器学习", "数据科学", "模型训练", "模型评估", "自然语言处理", "NLP", "计算机视觉", "提示词工程", "大语言模型", "LLM", "分类模型", "预测模型", "推荐系统", "特征工程", "数据集", "准确率", "评估指标", "machine learning", "model training", "model evaluation"],
      anchors: ["数据准备", "模型实验", "模型评估", "提示词设计", "AI 工作流", "自动化流程", "特征处理"],
      verbs: ["整理", "训练", "评估", "设计", "比较", "迭代", "自动化"],
      metrics: ["输出一致性", "准确率", "评估结果", "错误类型", "测试样本", "流程效率"],
      zhTemplates: [
        { anchor: "数据准备", keywords: ["数据集", "样本", "清洗", "标注"], text: "数据准备：整理结构化样本数据，为模型测试、规则匹配或 AI 工作流验证提供基础。" },
        { anchor: "模型实验", keywords: ["模型", "训练", "实验", "分类", "预测"], text: "模型实验：基于已有数据和任务目标进行模型或规则实验，记录不同方案的输出差异和问题表现。" },
        { anchor: "模型评估", keywords: ["评估", "准确率", "指标", "evaluation"], text: "模型评估：使用明确评估标准对输出结果进行对比，识别准确率、稳定性或错误类型方面的问题。" },
        { anchor: "提示词设计", keywords: ["提示词", "prompt", "LLM"], text: "提示词设计：根据不同任务场景设计提示词和评估标准，对比输出质量并持续优化。" },
        { anchor: "补充建议", keywords: [], text: "补充建议：可补充数据集规模、模型类型、评估指标、提示词策略或自动化流程效果。" }
      ],
      enTemplates: [
        "- Prepared structured datasets and tested rule-based or AI-assisted workflows to improve output consistency.",
        "- Ran model or rule-based experiments based on task requirements, documenting output differences and quality issues.",
        "- Defined evaluation criteria to compare AI-generated or model-generated outputs across user scenarios.",
        "- Designed prompts and review steps to improve task fit, output clarity, and consistency.",
        "- Add details where available, such as dataset size, model type, evaluation metrics, prompt strategy, or automation results."
      ]
    },
    {
      id: "cybersecurity",
      zhName: "网络安全",
      enName: "Cybersecurity",
      directionTags: ["Cybersecurity", "网络安全", "技术 / 互联网"],
      keywords: ["网络安全", "信息安全", "安全分析", "漏洞", "风险评估", "权限控制", "安全事件响应", "安全监控", "日志分析", "合规检查", "钓鱼攻击", "网络防护", "终端安全", "渗透测试", "cybersecurity", "vulnerability", "access control", "incident response"],
      anchors: ["风险识别", "日志分析", "安全监控", "权限管理", "事件响应", "合规支持"],
      verbs: ["检查", "识别", "监控", "分析", "记录", "跟进", "整理"],
      metrics: ["风险项", "异常记录", "处理进度", "合规材料", "权限准确性", "响应效率"],
      zhTemplates: [
        { anchor: "风险识别", keywords: ["风险", "漏洞", "异常"], text: "风险识别：协助检查系统日志、权限记录和异常行为，支持潜在安全风险识别。" },
        { anchor: "日志分析", keywords: ["日志", "监控", "记录"], text: "日志分析：整理系统日志和访问记录，提取异常线索并支持后续安全排查。" },
        { anchor: "安全监控", keywords: ["监控", "事件", "响应"], text: "安全监控：整理安全事件信息和处理记录，配合团队跟进异常情况。" },
        { anchor: "合规支持", keywords: ["合规", "审查", "材料"], text: "合规支持：整理检查材料、风险说明和整改记录，支持基础安全合规工作。" },
        { anchor: "补充建议", keywords: [], text: "补充建议：可补充涉及的系统、日志类型、安全工具、风险等级或处理结果。" }
      ],
      enTemplates: [
        "- Reviewed system logs and access records to support security monitoring and risk identification.",
        "- Organized log entries and access evidence to identify abnormal patterns and support follow-up investigation.",
        "- Assisted with basic security checks, documentation, and follow-up actions for potential issues.",
        "- Supported compliance-related checks by organizing evidence, records, and risk notes.",
        "- Add details where available, such as systems, log types, security tools, risk levels, or resolution outcomes."
      ]
    },
    {
      id: "it-support-systems",
      zhName: "IT 支持与系统运维",
      enName: "IT Support / Systems",
      directionTags: ["IT Support", "IT 支持", "技术 / 互联网"],
      keywords: ["IT 支持", "技术支持", "桌面支持", "系统运维", "故障排查", "硬件", "软件", "网络", "工单", "用户支持", "设备配置", "账号配置", "技术文档", "helpdesk", "system administration", "troubleshooting"],
      anchors: ["故障排查", "用户支持", "系统配置", "工单处理", "技术文档", "设备支持"],
      verbs: ["排查", "配置", "安装", "记录", "跟进", "支持", "整理"],
      metrics: ["工单处理", "响应时间", "问题解决", "用户反馈", "配置准确性", "重复问题减少"],
      zhTemplates: [
        { anchor: "故障排查", keywords: ["故障", "排查", "网络", "软件", "硬件"], text: "故障排查：协助用户定位软件、设备或网络问题，记录处理过程并跟进未解决事项。" },
        { anchor: "系统配置", keywords: ["配置", "账号", "设备", "安装"], text: "系统配置：参与设备设置、账号配置和软件安装，保障日常办公或业务系统使用。" },
        { anchor: "工单处理", keywords: ["工单", "ticket", "跟进"], text: "工单处理：记录用户问题、处理进度和解决结果，支持技术支持流程持续跟进。" },
        { anchor: "技术文档", keywords: ["文档", "知识库", "常见问题"], text: "技术文档：整理常见问题和处理步骤，帮助用户更快完成重复性技术操作。" },
        { anchor: "补充建议", keywords: [], text: "补充建议：可补充支持的系统、设备类型、工单数量、响应时间或解决率。" }
      ],
      enTemplates: [
        "- Provided basic technical support by troubleshooting user issues, documenting solutions, and following up on unresolved tickets.",
        "- Assisted with device setup, account configuration, and software installation to support daily operations.",
        "- Tracked support tickets by documenting user issues, progress, and resolution status.",
        "- Created simple documentation to help users complete recurring technical tasks more efficiently.",
        "- Add details where available, such as supported systems, device types, ticket volume, response time, or resolution rate."
      ]
    },
    {
      id: "engineering-technical",
      zhName: "工程技术",
      enName: "Engineering",
      directionTags: ["Engineering", "工程技术", "技术 / 互联网"],
      keywords: ["工程实习", "机械工程", "电气工程", "土木工程", "工艺工程", "CAD", "AutoCAD", "SolidWorks", "MATLAB", "仿真", "技术图纸", "测试", "检验", "质量检查", "设计评审", "设备维护", "安全规范", "engineering intern", "technical drawing", "inspection"],
      anchors: ["图纸整理", "测试验证", "工艺支持", "质量检查", "设计评审", "安全规范", "设备维护"],
      verbs: ["查看", "整理", "测试", "检查", "记录", "协助", "维护"],
      metrics: ["测试记录", "异常问题", "检查结果", "执行准备", "安全标准", "流程改进"],
      zhTemplates: [
        { anchor: "图纸整理", keywords: ["图纸", "CAD", "AutoCAD", "SolidWorks"], text: "图纸整理：协助查看技术图纸和项目资料，支持工程任务拆解与执行准备。" },
        { anchor: "测试验证", keywords: ["测试", "验证", "仿真", "MATLAB"], text: "测试验证：整理测试记录和问题反馈，协助团队检查设备、流程或样品表现。" },
        { anchor: "质量检查", keywords: ["质量", "检验", "inspection"], text: "质量检查：参与基础检验和记录整理，帮助识别异常问题并支持后续改进。" },
        { anchor: "安全规范", keywords: ["安全", "维护", "设备"], text: "安全规范：按照既有流程记录设备、材料或现场检查信息，支持安全与执行标准落实。" },
        { anchor: "补充建议", keywords: [], text: "补充建议：可补充工程工具、图纸类型、测试方法、设备名称、检查标准或改进结果。" }
      ],
      enTemplates: [
        "- Assisted engineering tasks by reviewing technical drawings, organizing test records, and supporting process documentation.",
        "- Recorded testing feedback and helped the team review equipment, process, or sample performance.",
        "- Supported quality checks and inspection workflows to identify issues and maintain safety or production standards.",
        "- Coordinated with technical team members to clarify requirements, materials, and execution steps.",
        "- Add details where available, such as engineering tools, drawing types, test methods, equipment, standards, or improvement results."
      ]
    },
    {
      id: "research-lab",
      zhName: "科研与实验室支持",
      enName: "Research / Lab",
      directionTags: ["Research / Lab", "科研 / 实验室", "教育 / 培训"],
      keywords: ["科研助理", "实验室助理", "实验", "文献综述", "数据收集", "数据编码", "问卷", "访谈", "SPSS", "R语言", "Python", "实验室", "样本准备", "实验流程", "伦理审批", "学术研究", "research assistant", "lab assistant", "literature review", "data collection"],
      anchors: ["文献整理", "数据收集", "实验支持", "研究记录", "问卷分析", "实验流程", "学术写作"],
      verbs: ["收集", "整理", "编码", "记录", "分析", "总结", "跟进"],
      metrics: ["资料完整性", "样本数量", "编码一致性", "实验记录", "报告质量", "研究进度"],
      zhTemplates: [
        { anchor: "文献整理", keywords: ["文献", "综述", "学术"], text: "文献整理：收集并梳理相关研究资料，提炼关键观点和研究空白，支持课题分析。" },
        { anchor: "数据收集", keywords: ["数据", "问卷", "访谈", "编码"], text: "数据收集：整理问卷、访谈或实验记录，为后续统计分析和报告撰写提供基础。" },
        { anchor: "实验支持", keywords: ["实验", "实验室", "样本", "流程"], text: "实验支持：协助完成样本准备、实验记录和流程跟进，保障研究任务按计划推进。" },
        { anchor: "研究记录", keywords: ["记录", "protocol", "伦理"], text: "研究记录：按照既有研究流程整理记录和材料，支持课题文档管理与规范执行。" },
        { anchor: "补充建议", keywords: [], text: "补充建议：可补充研究方法、样本数量、工具软件、实验流程、编码规则或报告成果。" }
      ],
      enTemplates: [
        "- Collected and organized research materials, survey data, or interview notes to support academic analysis.",
        "- Prepared survey, interview, or experiment records to support later analysis and report writing.",
        "- Assisted with experiment preparation, data recording, and protocol follow-up under team guidance.",
        "- Summarized literature and research findings to support project reports or discussion materials.",
        "- Add details where available, such as research methods, sample size, software tools, lab procedure, coding rules, or report outputs."
      ]
    },
    {
      id: "quality-testing",
      zhName: "质量与测试",
      enName: "Quality / Testing",
      directionTags: ["Quality / Testing", "质量 / 测试", "技术 / 互联网"],
      keywords: ["QA", "质量保证", "软件测试", "测试用例", "Bug 记录", "UAT", "回归测试", "质量控制", "检验", "缺陷", "验证", "测试文档", "用户验收测试", "quality assurance", "test case", "bug report", "regression testing"],
      anchors: ["测试用例", "缺陷记录", "质量检查", "验证测试", "回归测试", "测试文档", "用户测试"],
      verbs: ["设计", "执行", "验证", "记录", "复现", "检查", "收集"],
      metrics: ["测试覆盖", "缺陷数量", "复现步骤", "通过率", "质量问题", "用户反馈"],
      zhTemplates: [
        { anchor: "测试用例", keywords: ["测试用例", "测试", "流程"], text: "测试用例：围绕核心流程设计并执行测试用例，验证功能稳定性和页面交互效果。" },
        { anchor: "缺陷记录", keywords: ["bug", "缺陷", "记录", "复现"], text: "缺陷记录：记录问题现象、复现步骤和预期结果，协助团队快速定位和修复问题。" },
        { anchor: "验证测试", keywords: ["验证", "UAT", "回归"], text: "验证测试：根据需求或修复结果进行验证，支持功能上线前的质量检查。" },
        { anchor: "用户测试", keywords: ["用户测试", "反馈", "体验"], text: "用户测试：收集用户反馈并整理问题清单，推动功能说明、操作路径和输出质量优化。" },
        { anchor: "补充建议", keywords: [], text: "补充建议：可补充测试范围、用例数量、缺陷数量、通过率、测试工具或用户反馈规模。" }
      ],
      enTemplates: [
        "- Designed and executed test cases to verify core workflows and identify functional or interface issues.",
        "- Documented bugs, reproduction steps, and expected results to support efficient issue resolution.",
        "- Validated requirements or fixes through focused testing before release or handoff.",
        "- Conducted user testing and collected feedback to improve workflow clarity and output quality.",
        "- Add details where available, such as test scope, case volume, bug count, pass rate, testing tools, or user feedback size."
      ]
    },
    {
      id: "healthcare-life-science",
      zhName: "医疗健康与生命科学支持",
      enName: "Healthcare / Life Science Support",
      directionTags: ["Healthcare / Life Science", "医疗健康 / 生命科学"],
      keywords: ["医疗助理", "临床支持", "生命科学", "生物", "药学", "医学研究", "患者支持", "健康数据", "实验记录", "合规", "样本追踪", "文档整理", "安全流程", "healthcare assistant", "clinical support", "life science", "biology", "pharmaceutical", "medical research"],
      anchors: ["文档整理", "样本追踪", "合规支持", "患者支持", "健康数据", "实验记录", "安全流程"],
      verbs: ["整理", "记录", "追踪", "核对", "沟通", "支持", "归档"],
      metrics: ["资料完整性", "样本记录", "合规材料", "反馈记录", "流程准确性", "安全要求"],
      zhTemplates: [
        { anchor: "文档整理", keywords: ["文档", "记录", "资料"], text: "文档整理：整理健康、实验或项目记录，保障资料清晰完整并支持后续跟进。" },
        { anchor: "样本追踪", keywords: ["样本", "追踪", "实验"], text: "样本追踪：协助记录样本、数据或流程信息，支持实验或合规文档管理。" },
        { anchor: "合规支持", keywords: ["合规", "安全", "流程"], text: "合规支持：按照既有要求整理检查材料和流程记录，支持基础合规与安全管理。" },
        { anchor: "患者支持", keywords: ["患者", "沟通", "反馈"], text: "患者支持：协助沟通基础流程信息，记录反馈并支持服务体验改进。" },
        { anchor: "补充建议", keywords: [], text: "补充建议：可补充场景类型、记录数量、样本规模、合规要求、系统工具或安全流程。" }
      ],
      enTemplates: [
        "- Organized health, lab, or project records to support accurate documentation and follow-up.",
        "- Assisted sample tracking, data recording, or compliance-related documentation under supervision.",
        "- Supported compliance checks by organizing process records and safety-related documentation.",
        "- Supported patient or stakeholder communication by clarifying basic process information and maintaining clear records.",
        "- Add details where available, such as context, record volume, sample scale, compliance requirements, systems, or safety procedures."
      ]
    },
    {
      id: "finance",
      zhName: "财务与金融",
      enName: "Finance & Financial Analysis",
      directionTags: ["财务 / 金融"],
      keywords: ["财务", "会计", "审计", "金融", "风控", "投资", "成本", "预算", "报表"],
      anchors: ["数据核对", "财务分析", "成本控制", "风险识别", "报表整理", "合规检查", "预算支持", "研究分析"],
      verbs: ["核对", "整理", "分析", "审核", "识别", "支持"],
      metrics: ["记录误差", "费用波动", "成本变化", "风险点", "预算准确性"],
      zhTemplates: [
        { anchor: "数据核对", keywords: ["数据", "核对", "财务", "报表"], text: "数据核对：整理并核对业务数据和财务信息，减少记录误差，保障后续分析准确性。" },
        { anchor: "财务分析", keywords: ["费用", "收入", "成本", "分析"], text: "财务分析：基于费用、收入或成本数据进行初步分析，协助识别异常波动和优化空间。" },
        { anchor: "风险识别", keywords: ["风险", "合规", "审核", "流程"], text: "风险识别：参与资料审核和流程检查，协助发现潜在风险点并提出改进建议。" }
      ],
      enTemplates: [
        "- Organized and verified business and financial data to reduce reporting errors and support accurate analysis.",
        "- Conducted preliminary analysis of cost, revenue, or expense data to identify abnormal changes and improvement areas.",
        "- Assisted risk identification by reviewing documents and checking process compliance."
      ]
    },
    {
      id: "hr",
      zhName: "人力资源与行政",
      enName: "HR & Administration",
      directionTags: ["人力 / 行政"],
      keywords: ["HR", "招聘", "培训", "员工关系", "行政", "组织协调", "候选人", "面试"],
      anchors: ["招聘支持", "培训协助", "员工沟通", "行政协调", "文档管理", "流程跟进", "组织支持"],
      verbs: ["整理", "安排", "沟通", "统计", "协调", "跟进"],
      metrics: ["招聘进度", "培训完成", "反馈数量", "资料准确性", "协作效率"],
      zhTemplates: [
        { anchor: "招聘支持", keywords: ["招聘", "候选人", "面试"], text: "招聘支持：协助整理候选人信息、面试安排和沟通记录，支持招聘流程顺利推进。" },
        { anchor: "行政协调", keywords: ["行政", "事务", "资料", "沟通"], text: "行政协调：负责日常事务跟进、资料整理和跨方沟通，保障团队基础运营秩序。" },
        { anchor: "培训协助", keywords: ["培训", "签到", "反馈"], text: "培训协助：参与培训资料准备、签到统计和反馈收集，支持培训活动顺利完成。" }
      ],
      enTemplates: [
        "- Supported recruitment processes by organizing candidate information, interview schedules, and communication records.",
        "- Assisted administrative coordination by tracking daily tasks, organizing documents, and supporting cross-team communication.",
        "- Helped prepare training materials, attendance records, and feedback summaries to support training delivery."
      ]
    },
    {
      id: "creative",
      zhName: "创意、设计与内容制作",
      enName: "Creative, Design & Content Production",
      directionTags: ["设计 / 创意", "内容 / 新媒体"],
      keywords: ["设计", "创意", "视频剪辑", "文案", "摄影", "视觉", "剪映", "素材", "版本修改"],
      anchors: ["创意策划", "视频剪辑", "视觉设计", "文案创作", "素材整理", "版本修改", "风格统一", "用户反馈"],
      verbs: ["策划", "剪辑", "设计", "整理", "修改", "优化"],
      metrics: ["观看体验", "传播效果", "视觉一致性", "用户反馈", "完成数量"],
      zhTemplates: [
        { anchor: "视频剪辑", keywords: ["视频", "剪辑", "剪映", "字幕"], text: "视频剪辑：使用剪映完成短视频剪辑、字幕处理、节奏调整和版本修改，提升内容完整度和观看体验。" },
        { anchor: "创意策划", keywords: ["创意", "策划", "主题", "表达"], text: "创意策划：围绕主题方向参与内容创意和表达设计，协助提升内容吸引力和传播效果。" },
        { anchor: "视觉优化", keywords: ["视觉", "设计", "风格", "平台"], text: "视觉优化：根据平台调性和受众反馈调整视觉元素，提升内容呈现的一致性和识别度。" }
      ],
      enTemplates: [
        "- Edited short-form videos using Jianying, including subtitle editing, pacing adjustment, and version revisions.",
        "- Supported creative planning by developing content ideas and improving storytelling based on topic direction.",
        "- Optimized visual elements according to platform style and audience feedback to improve content consistency."
      ]
    },
    {
      id: "operations",
      zhName: "运营与项目执行",
      enName: "Operations & Project Execution",
      directionTags: ["运营", "产品"],
      keywords: ["运营", "项目", "活动", "流程", "现场", "执行", "进度", "资料", "问题处理"],
      anchors: ["流程跟进", "任务执行", "项目协助", "活动执行", "现场协调", "资料整理", "进度同步", "问题处理"],
      verbs: ["推进", "跟进", "整理", "协调", "执行", "反馈"],
      metrics: ["项目进度", "交付效率", "执行风险", "任务完成", "复盘结果"],
      zhTemplates: [
        { anchor: "流程跟进", keywords: ["流程", "进度", "跟进"], text: "流程跟进：协助推进项目执行流程，完成信息同步、进度记录和问题反馈，保障任务按计划推进。" },
        { anchor: "现场协调", keywords: ["现场", "设备", "人员", "协调"], text: "现场协调：参与现场执行工作，协助完成设备确认、人员沟通和流程衔接，降低执行风险。" },
        { anchor: "项目协助", keywords: ["项目", "资料", "清单", "复盘"], text: "项目协助：整理项目资料和执行清单，支持团队完成前期准备、过程跟进和后续复盘。" }
      ],
      enTemplates: [
        "- Supported project execution by tracking progress, summarizing updates, and reporting issues to ensure timely delivery.",
        "- Assisted on-site coordination, including equipment checks, team communication, and workflow alignment.",
        "- Organized project materials and execution checklists to support preparation, implementation, and review."
      ]
    },
    {
      id: "content-media",
      zhName: "内容与传媒",
      enName: "Content & Media",
      directionTags: ["内容 / 新媒体", "运营"],
      keywords: ["新媒体", "内容运营", "编辑", "视频运营", "媒体", "直播", "公众号", "抖音"],
      anchors: ["内容运营", "信息提炼", "视频剪辑", "直播执行", "平台运营", "选题整理", "内容复盘", "数据成果"],
      verbs: ["整理", "发布", "剪辑", "复盘", "提炼", "执行"],
      metrics: ["播放量", "互动率", "发布数量", "内容表现", "用户反馈"],
      zhTemplates: [
        { anchor: "内容运营", keywords: ["内容", "平台", "公众号", "抖音"], text: "内容运营：参与 App、微信公众号、抖音等平台内容运营，协助完成选题整理、内容摘要和素材归档。" },
        { anchor: "信息提炼", keywords: ["会议", "摘要", "AI", "关键词"], text: "信息提炼：整理会议和投稿内容摘要，使用 AI 工具生成关键词、思维导图和行动要点。" },
        { anchor: "视频剪辑", keywords: ["视频", "剪映", "字幕", "版本"], text: "视频剪辑：使用剪映完成短视频和采访类视频制作，负责素材筛选、字幕处理和版本修改。" },
        { anchor: "数据成果", keywords: ["播放量", "数据", "表现"], text: "数据成果：参与制作的视频获得较高播放表现，支持团队优化后续内容选题和表达方式。" }
      ],
      enTemplates: [
        "- Supported content operations across app, WeChat official account, and Douyin, including topic organization, content summaries, and material archiving.",
        "- Used AI tools to extract keywords, mind maps, and action points from meeting records and submitted materials.",
        "- Edited short-form and interview videos using Jianying, including material selection, subtitle editing, and version revisions.",
        "- Contributed to video content with strong view performance, supporting future topic selection and content optimization."
      ]
    },
    {
      id: "education",
      zhName: "教育与培训",
      enName: "Education & Training",
      directionTags: ["教育 / 培训"],
      keywords: ["教师", "助教", "课程", "培训", "学生", "家长", "辅导", "课堂"],
      anchors: ["教学执行", "课堂管理", "学生辅导", "家长沟通", "学习反馈", "课程准备", "问题答疑"],
      verbs: ["讲解", "辅导", "管理", "反馈", "沟通", "准备"],
      metrics: ["学生人数", "完成数量", "理解度", "家长反馈", "课堂表现"],
      zhTemplates: [
        { anchor: "教学执行", keywords: ["教学", "讲解", "辅导"], text: "教学执行：负责学生课堂讲解和学习辅导，根据学生理解情况调整讲解方式，提升课堂吸收效果。" },
        { anchor: "课堂管理", keywords: ["课堂", "秩序", "练习"], text: "课堂管理：维护课堂秩序和学习节奏，协助学生按时完成练习和学习任务。" },
        { anchor: "家长沟通", keywords: ["家长", "反馈", "沟通"], text: "家长沟通：根据学生表现反馈学习情况，回应家长问题并协助建立信任关系。" }
      ],
      enTemplates: [
        "- Delivered classroom instruction and learning support, adjusting explanations based on students' understanding.",
        "- Managed classroom order and learning pace to help students complete exercises and tasks on time.",
        "- Communicated with parents about student performance and responded to questions to build trust."
      ]
    },
    {
      id: "consulting-strategy",
      zhName: "咨询与战略",
      enName: "Consulting & Strategy",
      directionTags: ["咨询 / 战略", "数据 / 分析"],
      keywords: ["咨询", "战略", "行业研究", "商业分析", "竞品", "案例", "结构化", "客户访谈"],
      anchors: ["问题诊断", "行业研究", "竞品分析", "案例分析", "结构化分析", "报告撰写", "客户访谈", "方案支持"],
      verbs: ["诊断", "研究", "分析", "访谈", "撰写", "支持"],
      metrics: ["关键问题", "趋势变化", "潜在机会", "方案判断", "汇报质量"],
      zhTemplates: [
        { anchor: "问题诊断", keywords: ["问题", "诊断", "业务"], text: "问题诊断：围绕业务问题整理背景信息和关键矛盾，协助团队明确分析方向。" },
        { anchor: "行业研究", keywords: ["行业", "竞品", "用户", "趋势"], text: "行业研究：收集行业、竞品和用户信息，提炼趋势变化和潜在机会，支持方案判断。" },
        { anchor: "报告撰写", keywords: ["报告", "调研", "分析", "汇报"], text: "报告撰写：将调研资料和分析结果整理成结构化报告，支持团队汇报和后续决策。" }
      ],
      enTemplates: [
        "- Organized background information and key issues to support structured problem diagnosis.",
        "- Conducted industry and competitor research to identify trends, risks, and potential opportunities.",
        "- Prepared structured reports based on research findings and analysis to support team presentations and decision-making."
      ]
    }
  ];

  window.BulletPatternLibrary = {
    patterns: BULLET_PATTERNS,
    findById(id) {
      return BULLET_PATTERNS.find((pattern) => pattern.id === id) || null;
    }
  };
})();
