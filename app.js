const STORAGE_KEY = "careerFitWorkflowToolExperiences";
const STATS_KEY = "careerFitWorkflowToolUsageStats";
const LANGUAGE_KEY = "careerFitWorkflowToolLanguage";
const EXPERIENCE_TYPES = ["实习", "兼职", "正式工作", "项目经历", "校园经历"];
const LEGACY_EXPERIENCE_TYPES = ["课程项目", "AI 项目", "学生经历", "其他"];
const ALL_EXPERIENCE_TYPES = [...EXPERIENCE_TYPES, ...LEGACY_EXPERIENCE_TYPES];
const ABILITY_TAGS = ["沟通", "执行", "数据", "内容", "运营", "AI", "解决问题", "团队协作", "学习能力", "组织协调", "责任心", "抗压能力", "逻辑分析", "细节意识", "结果导向"];
const DIRECTION_TAGS = ["内容 / 新媒体", "运营", "市场 / 品牌", "产品", "销售 / 商务", "数据 / 分析", "AI / 自动化", "人力 / 行政", "财务 / 金融", "供应链 / 制造", "咨询 / 战略", "技术 / 互联网", "教育 / 培训", "设计 / 创意", "Software Engineering", "Data Analytics", "AI / Machine Learning", "Cybersecurity", "IT Support", "Engineering", "Research / Lab", "Quality / Testing", "Healthcare / Life Science", "其他"];
const INTERFACE_TEXT = {
  en: {
    mainTitle: "Career Experience Matcher",
    languageLabel: "Language",
    experienceCountLabel: "experiences",
    privacyTitle: "Privacy-first career workspace",
    privacyBody: "Your experiences are stored locally in this browser. No account or server upload is required. You can use fictional sample data or add your own non-sensitive sample experiences.",
    addExperience: "Add Experience",
    addExperienceHelp: "Write a raw experience once, then structure it into STAR and job-search outputs.",
    experienceTitle: "Experience title",
    time: "Time",
    experienceType: "Experience type",
    abilityTags: "Ability tags",
    roleDirectionTags: "Role direction tags",
    experienceDescription: "Experience description",
    generateStar: "Generate STAR",
    situation: "Situation",
    task: "Task",
    action: "Action",
    result: "Result",
    addExperienceButton: "Add Experience",
    jobMatchTitle: "Match Experiences To A Job Description",
    jobMatchHelp: "Paste a target JD. The tool identifies role signals and recommends the strongest experience materials.",
    viewFictionalJd: "View fictional JD example",
    useThisJd: "Use This JD",
    jobDescription: "Job description",
    clearJd: "Clear JD",
    analyzeAndMatch: "Analyze And Match",
    analyzeAgain: "Analyze Again",
    clearResults: "Clear Results",
    matchTip: "The matching logic uses a local keyword library and rule-based scoring. No API key or backend is required.",
    advancedDataTitle: "Advanced: Local Data Management",
    advancedDataHelp: "Import sample JSON, export local career workspace data, or clear browser storage.",
    exportLocalData: "Export Local Data",
    importJsonData: "Import JSON Data",
    selectJsonFile: "Select JSON file",
    chooseFile: "Choose File",
    noFileSelected: "No file selected",
    dropHint: "You can also drag a .json file here.",
    importSelectedFile: "Import selected file",
    importData: "Import Data",
    clearBrowserData: "Clear Browser Data",
    keywordSearch: "Keyword search",
    typeFilter: "Type filter",
    directionFilter: "Direction filter",
    abilityFilter: "Ability filter",
    experienceLibrary: "Experience Library",
    emptyState: "No experiences yet. Import sample data or add your own non-sensitive sample experience.",
    promptTitle: "Prompt",
    promptHelp: "Use this shape: In [context], I was responsible for [task]. I did [actions]. The result was [outcome or metric].",
    viewFictionalExample: "View fictional example",
    fictionalExample: "In a campus product research project, I helped review student feedback for a learning app prototype. I grouped 80 survey responses, summarized recurring usability issues, and created a short priority list for the design team. The final recommendation helped reduce the onboarding flow from six screens to four.",
    titlePlaceholder: "Example: Campus content operations project",
    timePlaceholder: "Example: 2025.03 - 2025.06",
    experienceDescriptionPlaceholder: "Describe the context, responsibility, action, and outcome. Add numbers when possible.",
    generatedPlaceholder: "Generated from the description.",
    jobDescriptionPlaceholder: "Paste responsibilities, requirements, bonus qualifications, and role keywords.",
    searchPlaceholder: "Search title, tags, direction, STAR content",
    sampleJobDescription: `Role: Content Operations Intern

Responsibilities:
1. Support Xiaohongshu, Douyin, and WeChat content planning and publishing;
2. Organize topic ideas, short-video materials, and weekly content performance data;
3. Track comments and user feedback to improve engagement;
4. Assist campaign execution, content calendar updates, and post-campaign review.

Requirements:
1. Strong writing, communication, and information organization skills;
2. Familiar with social media platforms and short-video workflows;
3. Detail-oriented, reliable, and able to execute on schedule;
4. Experience with Excel, Canva, CapCut, or AI tools is a plus.`
  },
  zh: {
    mainTitle: "求职经历匹配工具",
    languageLabel: "语言",
    experienceCountLabel: "条经历",
    privacyTitle: "隐私优先的求职工作区",
    privacyBody: "你的经历会保存在当前浏览器本地，不需要账号，也不会上传到服务器。你可以使用虚构示例数据，或添加不含敏感信息的样例经历。",
    addExperience: "添加经历",
    addExperienceHelp: "先记录一段原始经历，再整理为 STAR 和求职材料。",
    experienceTitle: "经历标题",
    time: "时间",
    experienceType: "经历类型",
    abilityTags: "通用能力",
    roleDirectionTags: "岗位方向",
    experienceDescription: "经历描述",
    generateStar: "生成 STAR",
    situation: "背景",
    task: "任务",
    action: "行动",
    result: "结果",
    addExperienceButton: "添加经历",
    jobMatchTitle: "匹配岗位描述与经历",
    jobMatchHelp: "粘贴目标 JD，工具会识别岗位信号并推荐更适合使用的经历材料。",
    viewFictionalJd: "查看虚构 JD 示例",
    useThisJd: "使用这份 JD",
    jobDescription: "岗位描述",
    clearJd: "清空 JD",
    analyzeAndMatch: "分析岗位并匹配经历",
    analyzeAgain: "重新分析",
    clearResults: "清空结果",
    matchTip: "匹配逻辑基于本地关键词库和规则评分运行，不需要 API key 或后端服务。",
    advancedDataTitle: "高级：本地数据管理",
    advancedDataHelp: "导入示例 JSON、导出本地求职工作区数据，或清空浏览器数据。",
    exportLocalData: "导出本地数据",
    importJsonData: "导入 JSON 数据",
    selectJsonFile: "选择 JSON 文件",
    chooseFile: "选择文件",
    noFileSelected: "未选择文件",
    dropHint: "也可以将 .json 文件拖到这里。",
    importSelectedFile: "导入已选择文件",
    importData: "导入数据",
    clearBrowserData: "清空浏览器数据",
    keywordSearch: "关键词搜索",
    typeFilter: "经历类型筛选",
    directionFilter: "岗位方向筛选",
    abilityFilter: "通用能力筛选",
    experienceLibrary: "经历库",
    emptyState: "还没有经历。你可以导入示例数据，或添加一段不含敏感信息的样例经历。",
    promptTitle: "提示",
    promptHelp: "可以按这个结构写：在[背景]下，我负责[任务]。我做了[行动]。结果是[成果或数据]。",
    viewFictionalExample: "查看虚构示例",
    fictionalExample: "在一个校园产品调研项目中，我协助整理学习 App 原型的学生反馈。我归类了 80 份问卷，提炼出高频可用性问题，并为设计团队整理了优先级清单。最终建议帮助团队将新用户引导流程从 6 屏缩短到 4 屏。",
    titlePlaceholder: "示例：校园内容运营项目",
    timePlaceholder: "示例：2025.03 - 2025.06",
    experienceDescriptionPlaceholder: "描述背景、职责、行动和结果。尽量补充数量、比例或反馈。",
    generatedPlaceholder: "根据经历描述生成。",
    jobDescriptionPlaceholder: "粘贴岗位职责、任职要求、加分项和岗位关键词。",
    searchPlaceholder: "搜索标题、标签、方向或 STAR 内容",
    sampleJobDescription: `岗位名称：新媒体运营助理

岗位职责：
1. 协助负责小红书、抖音、微信公众号等平台的日常内容运营；
2. 参与选题策划、内容排期、文案整理、短视频素材归档和数据记录；
3. 跟进用户评论和私信反馈，协助提升内容曝光和用户参与度；
4. 配合团队完成活动推广、内容复盘和跨部门沟通。

任职要求：
1. 具备良好的文字表达、信息整理和沟通能力；
2. 熟悉短视频平台和新媒体内容形式；
3. 能使用 Excel、Canva、剪映、ChatGPT 或其他 AI 工具；
4. 具备执行力、责任心和基础数据意识。`
  }
};
const STATUS_TEXT = {
  en: {
    jobResultsCleared: "Job analysis results have been cleared.",
    experienceAddedRefresh: "Experience added. Analyze again to refresh the recommendations.",
    addSummaryFirst: "Please add an experience summary before generating STAR.",
    missingOutcome: "This experience is missing a clear outcome. Add metrics, volume, time saved, or stakeholder feedback if possible.",
    starGenerated: "STAR has been generated from the experience summary. You can still edit it.",
    experienceDeletedRefresh: "Experience deleted. Related recommendations were cleared. Please analyze again.",
    jdUpdatedCleared: "The JD was updated. Previous analysis results were cleared. Please analyze again.",
    jdEmptyCleared: "The JD is empty. Related analysis results were removed.",
    jdChangedCleared: "The JD was changed. Previous analysis results were cleared. Please analyze again.",
    jdCleared: "The JD was cleared. Related analysis results were removed.",
    pasteJobDescription: "Please paste a job description before analyzing.",
    addAtLeastOneExperience: "Please add at least one experience before matching.",
    clearCurrentResultsConfirm: "Clear the current job analysis results?",
    chooseJsonFirst: "Please choose or drop a .json file first.",
    chooseJsonFile: "Please choose a .json file.",
    noExperienceData: "This file does not contain experience data.",
    importFailed: "Import failed. Please upload a JSON file exported by this tool or the demo data file.",
    importCancelled: "Import cancelled.",
    dataImportedAnalyzeAgain: "Import successful. Please analyze the JD again.",
    importedCount: (count) => `Import successful. Imported ${count} experience${count === 1 ? "" : "s"}.`,
    invalidJson: "Invalid JSON file.",
    noExperiencesArray: "No experiences array was found in this JSON file.",
    exportedCount: (count) => `Exported ${count} experience${count === 1 ? "" : "s"}.`,
    exportAlert: "Data exported. The file only contains experiences saved in this browser.",
    localDataCleared: "Local data cleared. Job analysis results were removed.",
    clearLocalDataConfirm: "Clear local data? This deletes all local experiences and current match results.",
    importModeTitle: "Local data already exists. Choose an import mode:",
    importModeDescription: (count) => `This will import ${count} experience${count === 1 ? "" : "s"}. Merge keeps current local experiences; replace overwrites the current list with the JSON file.`,
    mergeImport: "Merge Import",
    replaceLocalData: "Replace Local Data",
    cancel: "Cancel",
    deleteExperienceConfirm: (title) => `Delete "${title}"?`
  },
  zh: {
    jobResultsCleared: "岗位分析结果已清空。",
    experienceAddedRefresh: "经历已添加。请重新分析以刷新推荐结果。",
    addSummaryFirst: "请先填写经历描述，再生成 STAR。",
    missingOutcome: "这段经历缺少明确结果。建议补充数据、数量、节省时间或相关反馈。",
    starGenerated: "STAR 已根据经历描述生成，你仍然可以继续编辑。",
    experienceDeletedRefresh: "经历已删除，相关推荐已清空。请重新分析。",
    jdUpdatedCleared: "岗位描述已更新，之前的分析结果已清空。请重新分析。",
    jdEmptyCleared: "岗位描述为空，相关分析结果已移除。",
    jdChangedCleared: "岗位描述已变更，之前的分析结果已清空。请重新分析。",
    jdCleared: "岗位描述已清空，相关分析结果已移除。",
    pasteJobDescription: "请先粘贴岗位描述。",
    addAtLeastOneExperience: "请先添加至少一段经历。",
    clearCurrentResultsConfirm: "确认清空当前岗位分析结果？",
    chooseJsonFirst: "请先选择或拖入一个 .json 文件。",
    chooseJsonFile: "请选择 .json 文件。",
    noExperienceData: "这个文件不包含经历数据。",
    importFailed: "导入失败。请上传本工具导出的 JSON 文件或示例数据文件。",
    importCancelled: "已取消导入。",
    dataImportedAnalyzeAgain: "导入成功。请重新分析 JD。",
    importedCount: (count) => `导入成功，共导入 ${count} 段经历。`,
    invalidJson: "JSON 文件无效。",
    noExperiencesArray: "这个 JSON 文件中没有找到 experiences 数组。",
    exportedCount: (count) => `已导出 ${count} 段经历。`,
    exportAlert: "数据已导出。文件仅包含当前浏览器中保存的经历。",
    localDataCleared: "本地数据已清除，岗位分析结果已移除。",
    clearLocalDataConfirm: "确认清空本地数据？这会删除所有本地经历和当前匹配结果。",
    importModeTitle: "本地已有数据，请选择导入方式：",
    importModeDescription: (count) => `将导入 ${count} 段经历。合并导入会保留当前本地经历；替换导入会用 JSON 文件覆盖当前列表。`,
    mergeImport: "合并导入",
    replaceLocalData: "替换本地数据",
    cancel: "取消",
    deleteExperienceConfirm: (title) => `确认删除「${title}」？`
  }
};

const form = document.querySelector("#experienceForm");
const experienceList = document.querySelector("#experienceList");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const typeFilter = document.querySelector("#typeFilter");
const directionFilter = document.querySelector("#directionFilter");
const abilityFilter = document.querySelector("#abilityFilter");
const generateStarButton = document.querySelector("#generateStarButton");
const starGenerationStatus = document.querySelector("#starGenerationStatus");
const outputLanguage = document.querySelector("#outputLanguage");
const totalCount = document.querySelector("#totalCount");
const visibleCount = document.querySelector("#visibleCount");
const jobDescription = document.querySelector("#jobDescription");
const useSampleJobButton = document.querySelector("#useSampleJobButton");
const sampleJobDescription = document.querySelector("#sampleJobDescription");
const analyzeMatchButton = document.querySelector("#analyzeMatchButton");
const clearJobDescriptionButton = document.querySelector("#clearJobDescriptionButton");
const clearMatchResultsButton = document.querySelector("#clearMatchResultsButton");
const reanalyzeMatchButton = document.querySelector("#reanalyzeMatchButton");
const matchResultsToolbar = document.querySelector("#matchResultsToolbar");
const matchStatus = document.querySelector("#matchStatus");
const matchResults = document.querySelector("#matchResults");
const exportDataButton = document.querySelector("#exportDataButton");
const importDataInput = document.querySelector("#importDataInput");
const importDataButton = document.querySelector("#importDataButton");
const importDropZone = document.querySelector("#importDropZone");
const selectedImportFileName = document.querySelector("#selectedImportFileName");
const backupStatus = document.querySelector("#backupStatus");
const clearLocalDataButton = document.querySelector("#clearLocalDataButton");

let experiences = loadExperiences();
let usageStats = loadStats();
let selectedImportFile = null;
let currentMatchResults = [];
let currentJobDescription = "";
let matchedExperienceIds = [];

form.addEventListener("submit", handleSubmit);
searchInput.addEventListener("input", renderExperiences);
typeFilter.addEventListener("change", renderExperiences);
directionFilter.addEventListener("change", renderExperiences);
abilityFilter.addEventListener("change", renderExperiences);
generateStarButton.addEventListener("click", handleGenerateStar);
experienceList.addEventListener("click", handleListClick);
matchResults.addEventListener("click", handleMatchResultClick);
analyzeMatchButton.addEventListener("click", analyzeJobMatch);
jobDescription.addEventListener("input", handleJobDescriptionInput);
clearJobDescriptionButton.addEventListener("click", clearJobDescriptionAndResults);
clearMatchResultsButton.addEventListener("click", () => clearMatchResults(statusText("jobResultsCleared"), { confirm: true }));
reanalyzeMatchButton.addEventListener("click", analyzeJobMatch);
useSampleJobButton.addEventListener("click", useSampleJobDescription);
outputLanguage.addEventListener("change", handleOutputLanguageChange);
exportDataButton.addEventListener("click", exportData);
importDataInput.addEventListener("change", handleImportFileSelection);
importDataButton.addEventListener("click", importData);
importDropZone.addEventListener("dragenter", handleImportDragEnter);
importDropZone.addEventListener("dragover", handleImportDragOver);
importDropZone.addEventListener("dragleave", handleImportDragLeave);
importDropZone.addEventListener("drop", handleImportDrop);
clearLocalDataButton.addEventListener("click", clearLocalData);

applyStoredLanguagePreference();
renderTagOptions();
renderFilterOptions();
updateInterfaceLanguage();
renderExperiences();

function handleSubmit(event) {
  event.preventDefault();

  const selectedTags = Array.from(document.querySelectorAll("#tagOptions input:checked"))
    .map((tag) => tag.value);
  const selectedDirectionTags = Array.from(document.querySelectorAll("#directionTagOptions input:checked"))
    .map((tag) => tag.value);
  const description = form.experienceDescription.value.trim();
  ensureStarFromDescription();

  const experience = {
    id: Date.now().toString(),
    title: form.title.value.trim(),
    time: form.time.value.trim(),
    type: form.type.value,
    tags: selectedTags,
    directionTags: selectedDirectionTags,
    experienceDescription: description,
    situation: form.situation.value.trim(),
    task: form.task.value.trim(),
    action: form.action.value.trim(),
    result: form.result.value.trim(),
    createdAt: new Date().toISOString()
  };

  experiences.unshift(experience);
  saveExperiences();
  form.reset();
  setStarGenerationStatus("");
  renderExperiences();
  if (hasCurrentMatchResults()) {
    setMatchStatus(statusText("experienceAddedRefresh"), { showReanalyze: true });
  }
}

function handleGenerateStar() {
  const description = form.experienceDescription.value.trim();
  if (!description) {
    setStarGenerationStatus(statusText("addSummaryFirst"), true);
    return;
  }

  const generatedStar = generateStarFromDescription(description, {
    title: form.title.value.trim(),
    type: form.type.value
  });

  form.situation.value = generatedStar.situation;
  form.task.value = generatedStar.task;
  form.action.value = generatedStar.action;
  form.result.value = generatedStar.result;
  setStarGenerationStatus(generatedStar.resultWarning ? statusText("missingOutcome") : statusText("starGenerated"), Boolean(generatedStar.resultWarning));
}

function ensureStarFromDescription() {
  const hasStar = [form.situation.value, form.task.value, form.action.value, form.result.value]
    .some((value) => value.trim());
  if (hasStar || !form.experienceDescription.value.trim()) return;
  handleGenerateStar();
}

function renderTagOptions() {
  const tagOptions = document.querySelector("#tagOptions");
  const directionTagOptions = document.querySelector("#directionTagOptions");

  tagOptions.innerHTML = ABILITY_TAGS
    .map((tag) => createCheckboxOption(tag, "ability-tag"))
    .join("");
  directionTagOptions.innerHTML = DIRECTION_TAGS
    .map((tag) => createCheckboxOption(tag, "direction-tag"))
    .join("");
}

function renderFilterOptions() {
  directionFilter.innerHTML = createSelectOptions(["全部", ...DIRECTION_TAGS]);
  abilityFilter.innerHTML = createSelectOptions(["全部", ...ABILITY_TAGS]);
}

function createCheckboxOption(value, className) {
  return `<label><input class="${className}" type="checkbox" value="${escapeHtml(value)}"> ${escapeHtml(getDisplayLabel(value))}</label>`;
}

function createSelectOptions(values) {
  return values.map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(getDisplayLabel(value))}</option>`).join("");
}

function getDisplayLabel(value) {
  if (getOutputLanguage() === "zh") return value === "全部" ? "全部" : getChinesePublicLabel(value) || value;
  if (value === "全部") return "All";
  return getPublicLabel(value) || value;
}

function getChinesePublicLabel(value) {
  const labels = {
    "Software Engineering": "软件开发",
    "Data Analytics": "数据分析",
    "AI / Machine Learning": "人工智能 / 机器学习",
    "Cybersecurity": "网络安全",
    "IT Support": "IT 支持",
    "Engineering": "工程技术",
    "Research / Lab": "科研 / 实验室",
    "Quality / Testing": "质量 / 测试",
    "Healthcare / Life Science": "医疗健康 / 生命科学"
  };

  return labels[value] || "";
}

function getPublicLabel(value) {
  const labels = {
    "沟通": "Communication",
    "执行": "Execution",
    "数据": "Data",
    "内容": "Content",
    "运营": "Operations",
    "AI": "AI",
    "解决问题": "Problem-solving",
    "团队协作": "Teamwork",
    "学习能力": "Learning Agility",
    "组织协调": "Coordination",
    "责任心": "Responsibility",
    "抗压能力": "Resilience",
    "逻辑分析": "Logical Analysis",
    "细节意识": "Attention to Detail",
    "结果导向": "Result Orientation",
    "内容 / 新媒体": "Content / New Media",
    "市场 / 品牌": "Marketing / Branding",
    "数据 / 分析": "Data / Analytics",
    "AI / 自动化": "AI / Automation",
    "产品": "Product",
    "技术 / 互联网": "Tech / Internet",
    "运营": "Operations",
    "销售 / 商务": "Sales / Business Development",
    "人力 / 行政": "HR / Administration",
    "财务 / 金融": "Finance",
    "供应链 / 制造": "Supply Chain / Manufacturing",
    "咨询 / 战略": "Consulting / Strategy",
    "教育 / 培训": "Education / Training",
    "设计 / 创意": "Design / Creative",
    "Software Engineering": "Software Engineering",
    "Data Analytics": "Data Analytics",
    "AI / Machine Learning": "AI / Machine Learning",
    "Cybersecurity": "Cybersecurity",
    "IT Support": "IT Support",
    "Engineering": "Engineering",
    "Research / Lab": "Research / Lab",
    "Quality / Testing": "Quality / Testing",
    "Healthcare / Life Science": "Healthcare / Life Science",
    "其他": "Other",
    "实习": "Internship",
    "兼职": "Part-time",
    "正式工作": "Full-time",
    "项目经历": "Project",
    "校园经历": "Campus",
    "课程项目": "Academic Project",
    "AI 项目": "AI Project",
    "学生经历": "Student Experience",
    "Project": "Project",
    "AI Project": "AI Project"
  };

  return labels[value] || translateTagToEnglish(value) || translateType(value);
}

function setStarGenerationStatus(message, isError = false) {
  starGenerationStatus.textContent = message;
  starGenerationStatus.classList.toggle("is-error", isError);
}

function handleListClick(event) {
  const button = event.target.closest("button");
  if (!button) return;

  const card = button.closest(".experience-card");
  const id = card.dataset.id;

  if (button.dataset.action === "delete") {
    deleteExperience(id);
  }

  if (button.dataset.action === "draft") {
    showGeneratedOutput(card, id, "draft");
  }

  if (button.dataset.action === "star") {
    showGeneratedOutput(card, id, "star");
  }

  if (button.dataset.action === "bullet") {
    showGeneratedOutput(card, id, "bullet");
  }

  if (button.dataset.action === "cover") {
    showGeneratedOutput(card, id, "cover");
  }

  if (button.dataset.action === "copy") {
    copyOutput(card, button);
  }
}

function handleMatchResultClick(event) {
  const button = event.target.closest("button");
  if (!button) return;

  if (button.dataset.action === "copy-match-output") {
    const output = button.closest(".match-output");
    const text = output.querySelector("pre").textContent;
    copyText(text, button, getOutputLanguage() === "en" ? "Copied" : "已复制");
    updateStats({ copyCount: 1 });
  }

}

function deleteExperience(id) {
  const target = experiences.find((experience) => experience.id === id);
  if (!target) return;

  const confirmed = window.confirm(statusText("deleteExperienceConfirm", target.title));
  if (!confirmed) return;

  experiences = experiences.filter((experience) => experience.id !== id);
  saveExperiences();
  renderExperiences();
  if (hasCurrentMatchResults() && (!matchedExperienceIds.length || matchedExperienceIds.includes(id))) {
    clearMatchResults(statusText("experienceDeletedRefresh"));
  }
}

async function copyText(text, button, successText) {
  if (!text.trim()) return;

  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
  }

  const originalText = button.textContent;
  button.textContent = successText;
  window.setTimeout(() => {
    button.textContent = originalText;
  }, 1200);
}

function showGeneratedOutput(card, id, outputType) {
  const box = card.querySelector(".output-box");
  const title = box.querySelector(".output-title");
  const textarea = box.querySelector("textarea");
  const experience = experiences.find((item) => item.id === id);

  if (!experience) return;

  const output = createOutput(experience, outputType, getCurrentJobAnalysis(), getOutputLanguage());
  const copyButton = card.querySelector('[data-action="copy"]');
  title.textContent = output.title;
  textarea.value = output.content;
  if (copyButton) {
    copyButton.textContent = outputType === "bullet"
      ? (getOutputLanguage() === "en" ? "Copy Resume Bullets" : "复制简历 Bullet")
      : (getOutputLanguage() === "en" ? "Copy Output" : "复制输出");
  }
  box.style.display = "block";
  updateStats({ outputCount: 1 });
}

async function copyOutput(card, button) {
  const textarea = card.querySelector(".output-box textarea");
  if (!textarea.value.trim()) return;

  try {
    await navigator.clipboard.writeText(textarea.value);
  } catch (error) {
    textarea.select();
    document.execCommand("copy");
  }

  const originalText = button.textContent;
  button.textContent = getOutputLanguage() === "en" ? "Copied" : "已复制";
  window.setTimeout(() => {
    button.textContent = originalText;
  }, 1200);
  updateStats({ copyCount: 1 });
}

function handleOutputLanguageChange() {
  saveLanguagePreference();
  updateInterfaceLanguage();
  const selectedType = typeFilter.value;
  const selectedDirection = directionFilter.value;
  const selectedAbility = abilityFilter.value;
  renderTagOptions();
  renderFilterOptions();
  typeFilter.value = selectedType;
  directionFilter.value = selectedDirection;
  abilityFilter.value = selectedAbility;
  renderExperiences();
  if (currentMatchResults.length && currentJobDescription) {
    analyzeJobMatch();
  }
}

function updateInterfaceLanguage() {
  const language = getOutputLanguage();
  const copy = INTERFACE_TEXT[language] || INTERFACE_TEXT.en;
  if (document.documentElement) {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (copy[key]) node.textContent = copy[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (copy[key]) node.placeholder = copy[key];
  });
  if (sampleJobDescription && copy.sampleJobDescription) {
    sampleJobDescription.textContent = copy.sampleJobDescription;
  }
  updateLanguageOptionLabels(language);
  updateExperienceTypeSelectLabels();
  if (selectedImportFileName && !selectedImportFile) {
    selectedImportFileName.textContent = copy.noFileSelected;
  }
  if (emptyState) {
    emptyState.textContent = copy.emptyState;
  }
}

function applyStoredLanguagePreference() {
  const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
  outputLanguage.value = savedLanguage === "zh" ? "zh" : "en";
}

function saveLanguagePreference() {
  localStorage.setItem(LANGUAGE_KEY, getOutputLanguage());
}

function updateLanguageOptionLabels(language) {
  const options = outputLanguage?.options || [];
  Array.from(options).forEach((option) => {
    if (option.value === "en") option.textContent = "English";
    if (option.value === "zh") option.textContent = language === "zh" ? "中文" : "Chinese";
  });
}

function updateExperienceTypeSelectLabels() {
  const typeSelect = document.querySelector("#type");
  if (!typeSelect) return;
  Array.from(typeSelect.options).forEach((option) => {
    option.textContent = getDisplayLabel(option.value);
  });
}

function statusText(key, ...args) {
  const value = (STATUS_TEXT[getOutputLanguage()] || STATUS_TEXT.en)[key];
  if (typeof value === "function") return value(...args);
  return value || key;
}

function renderExperiences() {
  const language = getOutputLanguage();
  const keyword = searchInput.value.trim().toLowerCase();
  const selectedType = typeFilter.value;
  const selectedDirection = directionFilter.value;
  const selectedAbility = abilityFilter.value;

  const filtered = experiences.filter((experience) => {
    const matchesType = selectedType === "全部" || experience.type === selectedType;
    const matchesDirection = selectedDirection === "全部" || experience.directionTags.includes(selectedDirection);
    const matchesAbility = selectedAbility === "全部" || experience.tags.includes(selectedAbility);
    const searchableText = [
      experience.title,
      experience.time,
      experience.type,
      experience.tags.join(" "),
      experience.directionTags.join(" "),
      experience.experienceDescription,
      experience.situation,
      experience.task,
      experience.action,
      experience.result
    ].join(" ").toLowerCase();

    return matchesType && matchesDirection && matchesAbility && searchableText.includes(keyword);
  });

  totalCount.textContent = experiences.length;
  visibleCount.textContent = language === "en"
    ? `Showing ${filtered.length} item${filtered.length === 1 ? "" : "s"}`
    : `显示 ${filtered.length} 条经历`;
  emptyState.style.display = filtered.length ? "none" : "block";
  experienceList.innerHTML = filtered.map(createExperienceCard).join("");
}

function createExperienceCard(experience) {
  const language = getOutputLanguage();
  const labels = language === "en"
    ? {
      noAbilityTags: "No ability tags",
      noDirectionTags: "No role direction tags",
      delete: "Delete",
      abilityTags: "Ability tags",
      roleDirection: "Role direction",
      summary: "Experience Summary",
      starBreakdown: "View STAR breakdown",
      situation: "Situation",
      task: "Task",
      action: "Action",
      result: "Result",
      notGenerated: "Not generated yet",
      bullet: "Generate Resume Bullets",
      star: "Generate Interview Answer",
      cover: "Generate Cover Letter / Self-introduction",
      draft: "Export Interview Draft",
      output: "Output",
      copy: "Copy Output"
    }
    : {
      noAbilityTags: "未选择通用能力",
      noDirectionTags: "未选择岗位方向",
      delete: "删除",
      abilityTags: "通用能力",
      roleDirection: "岗位方向",
      summary: "经历描述",
      starBreakdown: "查看 STAR breakdown",
      situation: "背景",
      task: "任务",
      action: "行动",
      result: "结果",
      notGenerated: "暂未生成",
      bullet: "生成简历 Bullet",
      star: "生成面试回答",
      cover: "生成求职信 / 自我介绍素材",
      draft: "导出面试草稿",
      output: "输出",
      copy: "复制输出"
    };
  const abilityTags = experience.tags.length
    ? experience.tags.map((tag) => `<span class="tag">${escapeHtml(getDisplayLabel(tag))}</span>`).join("")
    : `<span class="tag">${labels.noAbilityTags}</span>`;
  const directionTags = experience.directionTags.length
    ? experience.directionTags.map((tag) => `<span class="tag direction-tag">${escapeHtml(getDisplayLabel(tag))}</span>`).join("")
    : `<span class="tag direction-tag">${labels.noDirectionTags}</span>`;

  return `
    <article class="experience-card" data-id="${experience.id}">
      <div class="card-header">
        <div>
          <h3 class="card-title">${escapeHtml(experience.title)}</h3>
          <p class="card-meta">
            <span>${escapeHtml(experience.time)}</span>
            <span>${escapeHtml(language === "en" ? translateType(experience.type) : experience.type)}</span>
          </p>
        </div>
        <button class="danger-button" type="button" data-action="delete">${labels.delete}</button>
      </div>

      <div class="tag-section">
        <span class="tag-label">${labels.abilityTags}</span>
        <div class="tag-list">${abilityTags}</div>
      </div>
      <div class="tag-section">
        <span class="tag-label">${labels.roleDirection}</span>
        <div class="tag-list">${directionTags}</div>
      </div>

      ${experience.experienceDescription ? `
        <div class="description-block">
          <strong>${labels.summary}</strong>
          <p>${escapeHtml(experience.experienceDescription)}</p>
        </div>
      ` : ""}

      <details class="star-details">
        <summary>${labels.starBreakdown}</summary>
        <div class="star-content">
          ${createStarItem(labels.situation, experience.situation, labels.notGenerated)}
          ${createStarItem(labels.task, experience.task, labels.notGenerated)}
          ${createStarItem(labels.action, experience.action, labels.notGenerated)}
          ${createStarItem(labels.result, experience.result, labels.notGenerated)}
        </div>
      </details>

      <div class="card-actions">
        <button class="secondary-button" type="button" data-action="bullet">${labels.bullet}</button>
        <button class="secondary-button" type="button" data-action="star">${labels.star}</button>
        <button class="secondary-button" type="button" data-action="cover">${labels.cover}</button>
        <button class="secondary-button" type="button" data-action="draft">${labels.draft}</button>
      </div>

      <div class="output-box">
        <label>
          <span class="output-title">${labels.output}</span>
          <textarea readonly></textarea>
        </label>
        <button class="copy-button" type="button" data-action="copy">${labels.copy}</button>
      </div>
    </article>
  `;
}

function createStarItem(label, value, fallback = "Not generated yet") {
  return `
    <p class="star-item">
      <strong>${label}</strong>
      ${escapeHtml(value || fallback)}
    </p>
  `;
}

function generateStarFromDescription(description, context = {}) {
  const sentences = splitChineseSentences(description);
  const resultSentences = sentences.filter(isResultSentence);
  const actionSentences = sentences.filter(isActionSentence);
  const taskSentences = sentences.filter(isTaskSentence);
  const backgroundSentences = sentences.filter((sentence) => {
    return !resultSentences.includes(sentence)
      && !actionSentences.includes(sentence)
      && (isBackgroundSentence(sentence) || sentences.indexOf(sentence) <= 1);
  });

  const situation = cleanStarText(backgroundSentences.slice(0, 2).join(""))
    || createFallbackSituation(description, context);
  const task = cleanStarText(taskSentences.slice(0, 2).join(""))
    || createFallbackTask(context);
  const action = cleanStarText(actionSentences.slice(0, 3).join(""))
    || createFallbackAction(description);
  const result = cleanStarText(resultSentences.slice(0, 2).join(""))
    || "这段经历目前缺少明确结果。建议补充销售额、播放量、增长比例、完成数量、节省时间或用户反馈等信息。";

  return {
    situation,
    task,
    action,
    result,
    resultWarning: resultSentences.length ? "" : "这段经历目前缺少明确结果。建议补充销售额、播放量、增长比例、完成数量、节省时间或用户反馈等信息。"
  };
}

function splitChineseSentences(text) {
  return String(text || "")
    .replace(/\n+/g, "。")
    .split(/(?<=[。！？；;.!?])\s*/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function isBackgroundSentence(sentence) {
  return /在|期间|当时|背景|场景|项目|公司|平台|团队|面对|目标|问题|需要/.test(sentence);
}

function isTaskSentence(sentence) {
  return /负责|担任|承担|任务|目标|职责|需要|要求|角色|参与/.test(sentence);
}

function isActionSentence(sentence) {
  return /通过|采取|优化|整理|分析|沟通|协调|推进|设计|制作|撰写|复盘|总结|跟进|执行|搭建|发布|回答|展示|参与/.test(sentence);
}

function isResultSentence(sentence) {
  return /(\d+|%|％|增长|提升|降低|减少|突破|完成|实现|达到|带来|节省|转化|销售额|播放量|用户|人数|数量|效率|反馈|结果|最终|相比|较)/.test(sentence);
}

function cleanStarText(value) {
  return String(value || "").trim();
}

function createFallbackSituation(description, context) {
  const prefix = context.title ? `在「${context.title}」这段经历中，` : "";
  return `${prefix}${description}`;
}

function createFallbackTask(context) {
  const typeText = context.type ? `这是一段${context.type}，` : "";
  return `${typeText}我负责完成这段经历中的主要任务，并按要求交付结果。`;
}

function createFallbackAction(description) {
  return `我根据现场情况完成具体执行，并结合反馈调整做法。原始经历描述为：${description}`;
}

function createInterviewDraft(experience, jobAnalysis = null, language = "zh") {
  if (language === "en") return createEnglishInterviewDraft(experience, jobAnalysis);

  return createStarInterviewAnswer(experience, jobAnalysis, language);
}

function createEnglishInterviewDraft(experience, jobAnalysis = null) {
  return createEnglishStarInterviewAnswer(experience, jobAnalysis);
}

function createOutput(experience, outputType, jobAnalysis = null, language = "zh") {
  const creators = {
    draft: () => ({
      title: language === "en" ? "Interview Draft" : "面试回答草稿",
      content: createInterviewDraft(experience, jobAnalysis, language)
    }),
    star: () => ({
      title: language === "en" ? "Interview Answer" : "面试回答",
      content: createStarInterviewAnswer(experience, jobAnalysis, language)
    }),
    bullet: () => ({
      title: language === "en"
        ? `Resume Bullets (${getBulletDirectionLabel(experience, jobAnalysis, language)})`
        : `可粘贴简历 Bullet（当前简历方向：${getBulletDirectionLabel(experience, jobAnalysis, language)}）`,
      content: createResumeBullets(experience, jobAnalysis, language)
    }),
    cover: () => ({
      title: language === "en" ? "Cover Letter Material" : "求职信 / 自我介绍素材",
      content: createCoverLetterParagraph(experience, jobAnalysis, language)
    })
  };

  return creators[outputType] ? creators[outputType]() : creators.draft();
}

function createStarInterviewAnswer(experience, jobAnalysis = null, language = "zh") {
  if (language === "en") return createEnglishStarInterviewAnswer(experience, jobAnalysis);

  const newMediaAnswer = createChineseNewMediaInterviewAnswer(experience, jobAnalysis);
  if (newMediaAnswer) return newMediaAnswer;

  const roleReference = getChineseTargetRoleReference(jobAnalysis);
  const focusTerms = getRelevantOutputTerms(experience, jobAnalysis).slice(0, 3);
  const focusText = focusTerms.length ? `这段经历和${roleReference}比较相关，因为它能体现${focusTerms.join("、")}。` : "";
  const situation = trimSentence(experience.situation);
  const task = formatChineseResponsibility(experience.task);
  const action = splitActionSegments(experience.action).slice(0, 2).join("；");
  const result = trimSentence(experience.result);

  const parts = [
    `我想分享的是${buildExperienceIntro(experience)}。`,
    situation ? `当时${removeDuplicateSubject(situation)}` : "",
    task ? `我主要${task}。` : "",
    action ? `具体执行时，${action}。` : "",
    result ? `最后，${result}` : "最后的结果还可以继续补充具体数字、完成数量或反馈。",
    focusText
  ];

  return polishChineseText(parts.filter(Boolean).join(""));
}

function createChineseNewMediaInterviewAnswer(experience, jobAnalysis = null) {
  if (!isChineseNewMediaContentExperience(experience, jobAnalysis)) return "";
  const roleReference = getChineseTargetRoleReference(jobAnalysis);

  return [
    "我想分享的是校园内容运营项目。当时团队需要提升校园内容的互动表现，我负责整理选题反馈、短视频素材和内容表现记录。",
    "我主要梳理了约60条用户评论，按选题、表达、发布时间和互动问题分类，并用 Excel 记录内容表现。根据这次复盘，团队调整了4个选题方向，后续两周互动率提升约18%。",
    `这段经历和${roleReference}比较相关，因为它涉及内容协调、素材整理、用户反馈跟进、基础数据复盘，也能支持活动推广和跨团队沟通。`
  ].join("");
}

function createEnglishStarInterviewAnswer(experience, jobAnalysis = null) {
  const marketingAnswer = createMarketingCommunicationInterviewAnswer(experience, jobAnalysis);
  if (marketingAnswer) return marketingAnswer;

  const context = buildEnglishExperienceContext(experience, jobAnalysis);
  const roleReference = getTargetRoleReference(jobAnalysis);
  const experienceTitle = experience.title || "this experience";
  const task = context.task || "organising information and preparing useful materials for the team";
  const action = context.action || "reviewed the available information, identified key issues, and turned them into clearer notes for the team";
  const result = formatEnglishResultSentence(context.result);
  const relevance = context.focus
    ? `This experience is relevant to ${roleReference} because it shows ${context.focus}.`
    : `This experience is relevant to ${roleReference} because it shows clear information organisation, communication, and project support.`;
  const sentences = [
    `I would share my experience from ${withArticle(experienceTitle)}.`,
    `In this experience, my task was to support ${task}.`,
    `I ${action}.`,
    context.tools ? `I also used ${context.tools} to keep the work organised and easier for the team to review.` : "",
    result,
    relevance
  ];

  return polishEnglishText(sentences.filter(Boolean).join(" "));
}

function createMarketingCommunicationInterviewAnswer(experience, jobAnalysis = null) {
  if (!isMarketingCommunicationContentExperience(experience, jobAnalysis)) return "";
  const roleReference = getTargetRoleReference(jobAnalysis);

  return [
    "I would share my experience from a fictional campus content operations project. In this project, I helped organise topic feedback, short-video materials, and content performance notes for a campus content team. My task was to turn scattered feedback into clearer information that the team could use for campaign and content planning.",
    "I reviewed around 60 user comments, categorised issues related to topics, messaging, posting time, and engagement, and used Excel to record content performance notes. Based on this review, the team adjusted four topic directions, and engagement increased by around 18% over the following two weeks.",
    `This experience is relevant to ${roleReference} because it involved content coordination, communication material preparation, simple campaign review, and clear follow-up on project details.`
  ].join("\n\n");
}

function createResumeBullets(experience, jobAnalysis = null, language = "zh") {
  if (language === "en") return createEnglishResumeBullets(experience, jobAnalysis);

  const family = resolveBulletFamily(experience, jobAnalysis);
  const bullets = shouldUseSpecializedMediaBullets(family, experience)
    ? buildChineseResumeBulletCandidates(experience, jobAnalysis)
    : buildPatternResumeBullets(experience, jobAnalysis, family, "zh");

  return uniqueLines(bullets.map(normalizeChineseBullet)).slice(0, 5).join("\n");
}

function createEnglishResumeBullets(experience, jobAnalysis = null) {
  const family = resolveBulletFamily(experience, jobAnalysis);
  const marketingCommunicationBullets = createMarketingCommunicationBullets(experience, jobAnalysis);
  if (marketingCommunicationBullets) return marketingCommunicationBullets;

  if (!shouldUseSpecializedMediaBullets(family, experience)) {
    return buildPatternResumeBullets(experience, jobAnalysis, family, "en").join("\n");
  }

  const context = buildEnglishExperienceContext(experience, jobAnalysis);
  const sourceText = getExperienceSearchText(experience);
  const bullets = [];

  bullets.push(context.platforms
    ? `- Supported content operations across ${context.platforms}, including ${context.task || "daily execution and follow-up"}.`
    : `- Supported ${translateType(experience.type)} tasks, including ${context.task || "daily execution and follow-up"}.`);

  if (/会议|摘要|关键词|思维导图|行动要点|钉钉|AI|AIGC/.test(sourceText)) {
    bullets.push("- Used DingTalk meeting records and AI tools to extract keywords, mind maps, and action points, helping the team identify weekly priorities and content risks more efficiently.");
  } else if (context.tools) {
    bullets.push(`- Used ${context.tools} to complete assigned tasks and organize work outputs.`);
  }

  if (/直播|转播|会展|设备清点|机位确认|信号测试|现场流程/.test(sourceText)) {
    bullets.push("- Assisted with live-streaming execution for a large exhibition project, including equipment checks, camera position confirmation, signal testing, and on-site workflow coordination.");
  } else if (context.action) {
    bullets.push(`- ${capitalizeFirst(context.action)}.`);
  }

  const videoBullet = createEnglishVideoResultBullet(sourceText);
  if (videoBullet) {
    bullets.push(`- ${videoBullet}`);
  } else if (context.result) {
    bullets.push(`- ${capitalizeFirst(context.result)}.`);
  }

  return uniqueLines(bullets.map(polishEnglishText).filter(Boolean)).slice(0, 4).join("\n");
}

function createMarketingCommunicationBullets(experience, jobAnalysis = null) {
  if (!isMarketingCommunicationContentExperience(experience, jobAnalysis)) return "";

  return [
    "- Organised campaign notes, content materials, and project documents to support marketing communication tasks.",
    "- Reviewed user comments and content feedback to identify issues related to topics, messaging, posting time, and engagement.",
    "- Used Excel to record content performance notes and support simple post-campaign review.",
    "- Helped the team adjust 4 content topic directions, contributing to an 18% engagement increase over the following two weeks."
  ].join("\n");
}

function isMarketingCommunicationContentExperience(experience, jobAnalysis = null) {
  const jdText = String(jobAnalysis?.rawDescription || "").toLowerCase();
  const sourceText = getExperienceSearchText(experience).toLowerCase();
  const isMarketingCommunications = /marketing communications|campaign planning|communication materials|social media content|campaign documents|stakeholder/.test(jdText)
    || /市场|品牌/.test(jobAnalysis?.primaryDirection || "");
  const isContentOperations = /fictional campus content operations project|content operations|social media content|short-video|short video|content performance|topic feedback|内容运营|新媒体/.test(sourceText);

  return isMarketingCommunications && isContentOperations;
}

function isChineseNewMediaContentExperience(experience, jobAnalysis = null) {
  const jdText = String(jobAnalysis?.rawDescription || "");
  const sourceText = getExperienceSearchText(experience);
  const isNewMediaRole = /新媒体运营|内容运营|用户运营|社群运营|电商运营|直播运营|小红书|抖音|微信公众号|短视频|内容排期|活动推广|直播执行|内容复盘/.test(jdText)
    || /内容|新媒体|市场/.test(String(jobAnalysis?.primaryDirection || ""));
  const isContentOperations = /Fictional Campus Content Operations Project|content operations|short-video|short video|content performance|topic feedback|user comments|engagement|内容运营|新媒体|短视频|选题|互动率/.test(sourceText);

  return isNewMediaRole && isContentOperations;
}

function buildPatternResumeBullets(experience, jobAnalysis, family, language = "zh") {
  const selectedFamily = family || resolveBulletFamily(experience, jobAnalysis);
  const text = getBulletSelectionText(experience, jobAnalysis);
  const templates = language === "en" ? (selectedFamily.enTemplates || []) : (selectedFamily.zhTemplates || []);
  const scoredTemplates = templates.map((template, index) => {
    const keywords = language === "en" ? selectedFamily.keywords || [] : template.keywords || selectedFamily.keywords || [];
    const score = keywords.reduce((sum, keyword) => sum + (text.includes(String(keyword).toLowerCase()) ? 1 : 0), 0);
    return { template, index, score };
  }).sort((a, b) => b.score - a.score || a.index - b.index);
  const selected = scoredTemplates
    .filter((item) => item.score > 0)
    .concat(scoredTemplates.filter((item) => item.score === 0))
    .slice(0, 4)
    .map((item) => typeof item.template === "string" ? item.template : item.template.text);
  const resultText = [experience.result, experience.experienceDescription].join(" ");

  if (language === "zh" && !hasQuantifiedOutcome(resultText)) {
    selected.push("可补充数据建议：建议补充处理数量、销售额、播放量、转化率、节省时间、服务人数或客户反馈。");
  }
  if (language === "en" && !hasQuantifiedOutcome(resultText)) {
    selected.push("- Add measurable outcomes where possible, such as volume handled, revenue, views, conversion rate, time saved, users served, or stakeholder feedback.");
  }

  return uniqueLines(selected.map((item) => language === "en" ? polishEnglishText(item) : normalizeChineseBullet(item))).slice(0, 5);
}

function shouldUseSpecializedMediaBullets(family, experience) {
  const text = getExperienceSearchText(experience);
  return family?.id === "content-media" && /新媒体|内容运营|公众号|抖音|剪映|直播|播放量|视频|content operations|social media content|short-video|short video|content performance/.test(text);
}

function resolveBulletFamily(experience, jobAnalysis = null) {
  const patterns = window.BulletPatternLibrary?.patterns || [];
  if (!patterns.length) {
    return {
      id: "operations",
      zhName: "运营与项目执行",
      enName: "Operations & Project Execution",
      directionTags: ["运营"],
      keywords: ["运营", "项目", "执行"],
      zhTemplates: [],
      enTemplates: []
    };
  }

  const directFamilyId = getDirectTechnicalFamilyId(jobAnalysis);
  const directFamily = directFamilyId ? patterns.find((pattern) => pattern.id === directFamilyId) : null;
  if (directFamily) return directFamily;

  const jdText = [
    ...(jobAnalysis?.keywordList || []),
    ...(jobAnalysis?.coreKeywords || []),
    ...(jobAnalysis?.hardSkills || []),
    ...(jobAnalysis?.softSkills || []),
    ...(jobAnalysis?.bonusKeywords || []),
    ...(jobAnalysis?.expressionFocus || []),
    ...(jobAnalysis?.directions || []).map((direction) => direction.name)
  ].join(" ").toLowerCase();
  const rawJdText = String(jobAnalysis?.rawDescription || "").toLowerCase();
  const jdSignalText = rawJdText || jdText;
  const directionText = (experience.directionTags || []).join(" ").toLowerCase();
  const experienceText = getExperienceSearchText(experience).toLowerCase();
  const primaryFamilyId = mapJobAnalysisDirectionToBulletFamily(jobAnalysis?.primaryDirection || "");

  const scored = patterns.map((pattern) => {
    const terms = [
      pattern.zhName,
      pattern.enName,
      ...(pattern.directionTags || []),
      ...(pattern.keywords || []),
      ...(pattern.anchors || [])
    ].map((term) => String(term || "").toLowerCase());
    const jdScore = terms.reduce((sum, term) => sum + (jdSignalText.includes(term) ? 5 : 0), 0);
    const directionScore = terms.reduce((sum, term) => sum + (directionText.includes(term) ? 8 : 0), 0);
    const contentScore = terms.reduce((sum, term) => sum + (experienceText.includes(term) ? 1 : 0), 0);
    const primaryScore = pattern.id === primaryFamilyId ? 30 : 0;
    return { pattern, score: jdScore + directionScore + contentScore + primaryScore + getBulletFamilyDirectBoost(pattern.id, jdText, directionText, experienceText, rawJdText) };
  }).sort((a, b) => b.score - a.score);

  return scored[0]?.pattern || patterns[0];
}

function getBulletFamilyDirectBoost(familyId, jdText, directionText, experienceText, rawJdText = "") {
  const combined = `${rawJdText || jdText} ${directionText} ${experienceText}`;
  const rules = {
    business: /商业分析|业务助理|经营分析|管理培训生|商业运营|经营支持/,
    marketing: /市场营销|品牌营销|campaign|公关传播|增长营销|渠道推广/,
    sales: /销售|商务拓展|客户成功|大客户|渠道销售|bd|门店销售|直播带货/,
    product: /产品经理|产品助理|产品运营|用户研究|需求分析|增长产品|产品优化/,
    tech: /前端|后端|测试|数据开发|技术支持|低代码|无代码|自动化工具|ai workflow/,
    finance: /财务分析|会计|审计|金融分析|风控|投资研究|成本控制/,
    hr: /招聘|员工关系|行政支持|组织协调|候选人|面试安排/,
    creative: /视觉设计|视频剪辑|文案策划|内容创意|摄影摄像|品牌视觉|剪映/,
    operations: /运营助理|项目助理|活动运营|平台运营|流程管理|现场执行/,
    "content-media": /新媒体运营|内容运营|编辑|视频运营|媒体实习|直播执行|公众号|抖音/,
    education: /教师|助教|课程顾问|培训助理|学生辅导|家长沟通/,
    "consulting-strategy": /咨询助理|战略分析|行业研究|商业分析|竞品分析|案例分析/,
    "software-engineering": /frontend developer|software engineer|javascript|typescript|react|vue|api|web interface|frontend frameworks|debug interface issues|web application|软件工程师|前端开发|后端开发|接口开发|代码优化/,
    "data-analytics": /data analyst|sql|dashboard|kpi|power bi|tableau|reporting|data cleaning|data visualization|trend analysis|数据分析|数据看板|指标分析|报表|数据清洗|数据可视化/,
    "ai-machine-learning": /machine learning|model training|model evaluation|nlp|llm|feature engineering|dataset|evaluation metrics|机器学习|模型训练|模型评估|特征工程|评估指标/,
    cybersecurity: /cybersecurity|vulnerability|access control|incident response|log analysis|compliance|网络安全|漏洞|权限控制|安全事件响应|日志分析|合规检查/,
    "it-support-systems": /it support|helpdesk|technical support|system administration|troubleshooting|ticket|device setup|account setup|桌面支持|系统运维|工单|设备配置|账号配置/,
    "engineering-technical": /cad|autocad|solidworks|matlab|technical drawing|inspection|safety|机械工程|电气工程|土木工程|技术图纸|设计评审|设备维护/,
    "research-lab": /research assistant|literature review|data coding|survey|interview notes|research documentation|ethics|academic research|experiment|lab|科研助理|实验室助理|文献综述|数据编码|伦理审批/,
    "quality-testing": /quality assurance|software testing|test case|bug report|uat|regression testing|validation|user acceptance testing|质量保证|软件测试|测试用例|回归测试|用户验收测试/,
    "healthcare-life-science": /healthcare assistant|clinical support|life science|biology|pharmaceutical|medical research|patient support|health data|sample tracking|医疗助理|临床支持|生命科学|样本追踪/
  };
  return rules[familyId]?.test(combined) ? 60 : 0;
}

function mapJobAnalysisDirectionToBulletFamily(directionName) {
  const name = String(directionName || "");
  if (/软件开发/.test(name)) return "software-engineering";
  if (/数据分析方向|数据与商业分析/.test(name)) return "data-analytics";
  if (/人工智能|机器学习/.test(name)) return "ai-machine-learning";
  if (/网络安全/.test(name)) return "cybersecurity";
  if (/IT 支持|系统运维/.test(name)) return "it-support-systems";
  if (/工程技术/.test(name)) return "engineering-technical";
  if (/科研|实验室/.test(name)) return "research-lab";
  if (/质量|测试/.test(name)) return "quality-testing";
  if (/医疗健康|生命科学/.test(name)) return "healthcare-life-science";
  if (/内容|新媒体/.test(name)) return "content-media";
  if (/产品/.test(name)) return "product";
  if (/市场|品牌/.test(name)) return "marketing";
  if (/销售|商务/.test(name)) return "sales";
  if (/商业分析|经营分析/.test(name)) return "business";
  if (/AI|自动化|技术|互联网/.test(name)) return "tech";
  if (/人力|行政|HR/.test(name)) return "hr";
  if (/财务|金融/.test(name)) return "finance";
  if (/供应链|制造|运营|项目/.test(name)) return "operations";
  if (/咨询|战略/.test(name)) return "consulting-strategy";
  return "";
}

function getDirectTechnicalFamilyId(jobAnalysis = null) {
  const text = [
    jobAnalysis?.rawDescription,
    jobAnalysis?.primaryDirection,
    ...(jobAnalysis?.coreKeywords || []),
    ...(jobAnalysis?.hardSkills || []),
    ...(jobAnalysis?.bonusKeywords || []),
    ...(jobAnalysis?.directions || []).map((direction) => direction.name)
  ].join(" ").toLowerCase();

  const directSignals = [
    ["software-engineering", /frontend developer|software engineer|javascript|typescript|react|vue|api|web interface|frontend frameworks|debug interface issues|web application|软件工程师|前端开发|后端开发|全栈开发|接口开发|代码优化/],
    ["research-lab", /research assistant|literature review|data coding|survey|interview notes|research documentation|ethics|academic research|experiment|lab|科研助理|实验室助理|文献综述|数据编码|问卷|访谈|伦理审批|学术研究/],
    ["data-analytics", /data analyst|sql|dashboard|kpi|power bi|tableau|data cleaning|data visualization|trend analysis|数据分析|bi 分析|数据看板|指标分析|报表|数据清洗|数据可视化|趋势分析/],
    ["ai-machine-learning", /machine learning|model training|model evaluation|nlp|llm|feature engineering|dataset|evaluation metrics|机器学习|模型训练|模型评估|自然语言处理|大语言模型|特征工程|数据集|评估指标/],
    ["cybersecurity", /cybersecurity|vulnerability|access control|incident response|log analysis|compliance|网络安全|信息安全|漏洞|权限控制|安全事件响应|日志分析|合规检查/],
    ["it-support-systems", /it support|helpdesk|technical support|system administration|troubleshooting|ticket|device setup|account setup|桌面支持|系统运维|工单|设备配置|账号配置/],
    ["engineering-technical", /cad|autocad|solidworks|matlab|technical drawing|inspection|safety|mechanical engineering|electrical engineering|civil engineering|机械工程|电气工程|土木工程|技术图纸|设计评审|设备维护/],
    ["quality-testing", /quality assurance|software testing|test case|bug report|uat|regression testing|validation|user acceptance testing|质量保证|软件测试|测试用例|bug 记录|回归测试|用户验收测试/],
    ["healthcare-life-science", /healthcare assistant|clinical support|life science|biology|pharmaceutical|medical research|patient support|health data|sample tracking|医疗助理|临床支持|生命科学|医学研究|患者支持|健康数据|样本追踪/]
  ];

  return directSignals.find(([, pattern]) => pattern.test(text))?.[0] || "";
}

function getBulletSelectionText(experience, jobAnalysis = null) {
  return [
    getExperienceSearchText(experience),
    jobAnalysis?.rawDescription,
    ...(jobAnalysis?.keywordList || []),
    ...(jobAnalysis?.coreKeywords || []),
    ...(jobAnalysis?.hardSkills || []),
    ...(jobAnalysis?.softSkills || []),
    ...(jobAnalysis?.bonusKeywords || []),
    ...(jobAnalysis?.expressionFocus || []),
    ...(jobAnalysis?.directions || []).map((direction) => direction.name)
  ].join(" ").toLowerCase();
}

function getBulletDirectionLabel(experience, jobAnalysis = null, language = "zh") {
  const family = resolveBulletFamily(experience, jobAnalysis);
  if (language === "en") {
    const jdText = String(jobAnalysis?.rawDescription || "").toLowerCase();
    const experienceText = getExperienceSearchText(experience).toLowerCase();
    if (/marketing communications|campaign planning|communication materials|social media content|campaign documents/.test(jdText)) {
      if (/content operations|social media content|short-video|short video|content performance/.test(experienceText)) {
        return "Marketing Communications / Content Operations";
      }
      if (/resume workflow|job descriptions|jd matching|bullet generation|workflow prototype/.test(experienceText)) {
        return "Marketing Communications / Workflow Support";
      }
    }
    return family.enName || "General Resume";
  }
  const mappedDirection = mapBulletFamilyToDirectionTag(family);
  return mappedDirection || family.zhName || "通用简历";
}

function mapBulletFamilyToDirectionTag(family) {
  const map = {
    business: "商业分析 / 业务支持",
    marketing: "市场 / 品牌",
    sales: "销售 / 商务",
    product: "产品",
    tech: "技术 / 互联网",
    finance: "财务 / 金融",
    hr: "人力 / 行政",
    creative: "设计 / 创意",
    operations: "运营 / 项目执行",
    "content-media": "内容 / 新媒体",
    education: "教育 / 培训",
    "consulting-strategy": "咨询 / 战略"
  };
  return map[family?.id] || "";
}

function buildChineseResumeBulletCandidates(experience, jobAnalysis = null) {
  const text = getExperienceSearchText(experience);
  const resultText = [experience.result, experience.experienceDescription].join(" ");
  const platforms = detectChinesePlatforms(text);
  const bullets = [];
  const addBullet = (anchor, content) => {
    if (!content) return;
    const line = `${anchor}：${content}`;
    if (!bullets.some((item) => item.anchor === anchor || item.line === line)) {
      bullets.push({ anchor, line });
    }
  };

  if (isChineseNewMediaContentExperience(experience, jobAnalysis)) {
    addBullet("内容运营", "参与校园内容运营项目，协助整理选题反馈、短视频素材和内容表现记录，支持内容排期和复盘。");
    addBullet("用户反馈", "梳理约60条用户评论，按选题、表达、发布时间和互动问题分类，提炼可用于内容优化的反馈。");
    addBullet("数据复盘", "使用 Excel 记录内容表现，支持团队调整4个选题方向，推动后续两周互动率提升约18%。");
    addBullet("岗位匹配", "围绕内容协调、素材归档、用户反馈跟进和基础数据记录，积累新媒体运营助理岗位相关执行经验。");
  }

  if (/内容运营|新媒体|公众号|抖音|小红书|App|APP|内容发布|视频制作|平台/.test(text)) {
    const platformText = platforms.length ? `${platforms.join("、")}等平台` : "内容平台";
    const tasks = [];
    if (/选题/.test(text)) tasks.push("选题整理");
    if (/摘要|会议/.test(text)) tasks.push("内容摘要");
    if (/素材/.test(text)) tasks.push("素材归档");
    if (/发布|内容运营/.test(text)) tasks.push("发布前准备");
    addBullet("内容运营", `参与 ${platformText}内容运营，协助完成${formatChineseList(tasks, "内容整理、素材归档与发布前准备")}。`);
  }

  if (/会议|摘要|关键词|思维导图|行动要点|信息整理|钉钉|AI|AIGC/.test(text)) {
    const count = extractCountPhrase(text, /每天整理\s*([\d–\-~至到]+\s*条)/) || extractCountPhrase(text, /整理\s*([\d–\-~至到]+\s*条)/);
    const source = /运营会议|员工会议|投稿/.test(text) ? "运营会议、员工会议和投稿内容摘要" : "会议记录和内容摘要";
    const toolText = /钉钉/.test(text) && /AI|AIGC/.test(text) ? "钉钉会议记录与 AI 工具" : (/AI|AIGC/.test(text) ? "AI 工具" : "记录工具");
    addBullet("信息提炼", `${count ? `每日整理 ${count}` : "整理"}${source}，使用${toolText}生成关键词、思维导图和行动要点。`);
  }

  if (/直播|转播|会展|设备清点|机位确认|信号测试|现场流程/.test(text)) {
    const projectText = /会展/.test(text) ? "大型会展项目" : "直播项目";
    addBullet("直播执行", `配合拍摄团队完成${projectText}直播执行，协助设备清点、机位确认、转播信号测试和现场流程跟进。`);
  }

  if (/剪映|快剪|采访|视频剪辑|剪辑|字幕|节奏|版本修改/.test(text)) {
    const videoCount = extractVideoCountPhrase(text);
    const toolText = /剪映/.test(text) ? "使用剪映" : "使用剪辑工具";
    addBullet("视频剪辑", `${toolText}${videoCount ? `完成 ${videoCount}` : "完成视频剪辑"}，负责素材筛选、字幕处理、节奏调整和版本修改。`);
  }

  if (/数据|播放量|销售额|转化率|增长|提升|达到|突破|高于|相比|复盘/.test(resultText)) {
    addBullet("数据成果", formatChineseResultBullet(resultText));
  }

  if (/用户|评论|私信|答疑|观众|客户|服务|家长/.test(text)) {
    addBullet("用户互动", "跟进用户评论、私信或现场反馈，协助回应问题并整理高频需求。");
  }

  if (/项目|流程|跟进|协调|对接|团队|跨部门/.test(text)) {
    addBullet("项目协助", "配合团队完成项目流程跟进、信息同步和执行节点确认，保障任务按计划推进。");
  }

  if (/销售|订单|转化|商品讲解|带货|客户/.test(text)) {
    addBullet("销售转化", "围绕商品讲解、用户答疑和反馈整理支持销售转化，保留具体销售额或转化数据。");
  }

  if (/教学|课堂|学生|家长|培训|辅导/.test(text)) {
    addBullet("教学执行", "参与课堂辅导、学生跟进和学习反馈整理，根据学生理解情况调整讲解方式。");
  }

  if (!bullets.length) {
    const task = formatChineseResponsibility(experience.task);
    const action = splitActionSegments(experience.action)[0] || "";
    addBullet("执行落地", `${task || "参与相关任务执行"}${action ? `，${action}` : ""}。`);
  }

  if (!hasQuantifiedOutcome(resultText)) {
    addBullet("可补充数据建议", "建议补充处理数量、销售额、播放量、转化率、节省时间、服务人数或客户反馈。");
  }

  return orderChineseResumeBullets(bullets, jobAnalysis).map((item) => item.line);
}

function orderChineseResumeBullets(bullets, jobAnalysis = null) {
  const jdText = [
    ...(jobAnalysis?.keywordList || []),
    ...(jobAnalysis?.abilityTags || []),
    ...(jobAnalysis?.expressionFocus || []),
    ...(jobAnalysis?.directions || []).map((direction) => direction.name)
  ].join(" ");
  const priorityGroups = [];

  if (/内容|新媒体|短视频|公众号|抖音|小红书|平台/.test(jdText)) {
    priorityGroups.push(["内容运营", "平台运营", "用户反馈", "信息提炼", "直播执行", "视频剪辑", "数据复盘", "数据成果", "用户互动", "岗位匹配"]);
  }
  if (/AI|AIGC|工具|自动化|信息整理|提效/.test(jdText)) {
    priorityGroups.push(["AI 提效", "信息提炼", "工具应用", "流程优化", "数据成果"]);
  }
  if (/项目|执行|流程|协调|对接|落地/.test(jdText)) {
    priorityGroups.push(["项目协助", "流程跟进", "直播执行", "现场协调", "团队协作"]);
  }
  if (/销售|服务|客户|用户答疑|转化|商品/.test(jdText)) {
    priorityGroups.push(["客户沟通", "销售转化", "用户互动", "服务支持", "数据成果"]);
  }
  if (/数据|分析|复盘|指标|Excel|BI/.test(jdText)) {
    priorityGroups.push(["数据整理", "数据分析", "数据复盘", "数据成果", "效果复盘", "指标跟踪"]);
  }

  const defaultPriority = ["内容运营", "用户反馈", "信息提炼", "直播执行", "视频剪辑", "数据复盘", "数据成果", "项目协助", "用户互动", "岗位匹配", "销售转化", "教学执行", "执行落地", "可补充数据建议"];
  const priority = [...priorityGroups.flat(), ...defaultPriority];

  return [...bullets].sort((a, b) => {
    const aIndex = priority.indexOf(a.anchor);
    const bIndex = priority.indexOf(b.anchor);
    return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex);
  });
}

function detectChinesePlatforms(text) {
  const platforms = [];
  [
    [/App|APP|应用/, "App"],
    [/微信公众号|公众号/, "微信公众号"],
    [/抖音/, "抖音"],
    [/小红书/, "小红书"],
    [/视频号/, "视频号"],
    [/B站|哔哩哔哩/, "B站"]
  ].forEach(([pattern, label]) => {
    if (pattern.test(text) && !platforms.includes(label)) platforms.push(label);
  });
  return platforms;
}

function formatChineseList(items, fallback) {
  const values = [...new Set(items.filter(Boolean))];
  if (!values.length) return fallback;
  if (values.length === 1) return values[0];
  return `${values.slice(0, -1).join("、")}与${values.at(-1)}`;
}

function extractCountPhrase(text, pattern) {
  const match = String(text || "").match(pattern);
  return match ? match[1].replace(/-/g, "–").trim() : "";
}

function extractVideoCountPhrase(text) {
  const source = String(text || "");
  const match = source.match(/完成\s*([^。；，]*?(?:视频|快剪类视频|采访类视频)[^。；，]*)/);
  if (match) return match[1].trim();
  const numbers = source.match(/\d+\s*条[^，。；]*(?:视频|快剪|采访)[^，。；]*/g);
  return numbers ? numbers.slice(0, 2).join("和") : "";
}

function formatChineseResultBullet(text) {
  const source = String(text || "");
  const viewNumbers = [...new Set(source.match(/\d+(?:\.\d+)?\s*万/g) || [])];
  if (/播放量/.test(source) && viewNumbers.length >= 2) {
    const contentType = /普法/.test(source) ? "普法类视频" : "内容";
    const previous = viewNumbers.length >= 3 ? `，高于此前同类视频 ${viewNumbers[2]}的播放水平` : "";
    return `参与制作的两条${contentType}播放量分别达到 ${viewNumbers[0]}和 ${viewNumbers[1]}${previous}。`;
  }
  const resultSentence = splitChineseSentences(source).find(isResultSentence) || trimSentence(source);
  return removeResumeNoise(resultSentence || "保留经历中的量化结果，便于支撑简历表达。");
}

function createEnglishVideoResultBullet(text) {
  const source = String(text || "");
  if (!/视频|剪映|快剪|采访|播放量/.test(source)) return "";

  const shortVideoCount = source.match(/(\d+)\s*条快剪/)?.[1];
  const interviewVideoCount = source.match(/(\d+)\s*条采访/)?.[1];
  const toolText = /剪映/.test(source) ? "with Jianying" : "with video editing tools";
  const resultText = /播放量/.test(source) ? formatEnglishMetricText(source, "views", 2) : "";

  if (shortVideoCount && interviewVideoCount && resultText) {
    return `Edited ${shortVideoCount} short-form videos and ${interviewVideoCount} interview videos ${toolText}, with two legal education videos reaching ${resultText}.`;
  }
  if (shortVideoCount || interviewVideoCount) {
    const countText = [shortVideoCount ? `${shortVideoCount} short-form videos` : "", interviewVideoCount ? `${interviewVideoCount} interview videos` : ""]
      .filter(Boolean)
      .join(" and ");
    return `Edited ${countText} ${toolText}, including material selection, subtitle editing, pacing adjustment, and video revisions.`;
  }
  if (resultText) return `Video content reached ${resultText}.`;
  return "";
}

function createCoverLetterParagraph(experience, jobAnalysis = null, language = "zh") {
  if (language === "en") return createEnglishCoverLetterParagraph(experience, jobAnalysis);

  const newMediaParagraph = createChineseNewMediaCoverLetterParagraph(experience, jobAnalysis);
  if (newMediaParagraph) return newMediaParagraph;

  const roleReference = getChineseTargetRoleReference(jobAnalysis);
  const terms = getRelevantOutputTerms(experience, jobAnalysis);
  const fitText = terms.length
    ? `这段经历和${roleReference}中提到的${terms.slice(0, 3).join("、")}比较相关。`
    : "";
  const task = formatChineseResponsibility(experience.task);
  const action = splitActionSegments(experience.action)[0] || "";
  const result = trimSentence(experience.result);

  return polishChineseText(`${task ? `我${task}。` : `我参与了${removeTitleSuffix(experience.title)}相关工作。`}${action ? `执行过程中，${action}。` : ""}${result ? `最终，${result}` : ""}${fitText}`);
}

function createChineseNewMediaCoverLetterParagraph(experience, jobAnalysis = null) {
  if (!isChineseNewMediaContentExperience(experience, jobAnalysis)) return "";
  const roleReference = getChineseTargetRoleReference(jobAnalysis);

  return `我在校园内容运营项目中参与了选题反馈整理、短视频素材归档和内容表现记录，和${roleReference}中的内容排期、素材整理、用户反馈跟进比较匹配。我曾梳理约60条用户评论，并用 Excel 支持内容复盘，推动团队调整4个选题方向，后续互动率提升约18%。这段经历能支持我在内容执行、信息整理和基础数据复盘方面更快进入工作状态。`;
}

function createEnglishCoverLetterParagraph(experience, jobAnalysis = null) {
  const marketingParagraph = createMarketingCommunicationCoverLetterParagraph(experience, jobAnalysis);
  if (marketingParagraph) return marketingParagraph;

  const context = buildEnglishExperienceContext(experience, jobAnalysis);
  const roleReference = getTargetRoleReference(jobAnalysis);
  const task = context.task || "organising information and preparing useful work materials for the team";
  const action = context.action || "reviewed the available information, identified key issues, and turned them into clearer notes for the team";
  const result = formatEnglishResultSentence(context.result);
  const fit = context.focus
    ? `This experience connects well with ${roleReference} because it involved ${context.focus}.`
    : `This experience connects well with ${roleReference} because it involved information organisation, communication, and project support.`;
  const body = [
    `My experience in ${withArticle(experience.title || translateType(experience.type))} is relevant to ${roleReference}.`,
    `I supported ${task}, and I ${action}.`,
    context.tools ? `I used ${context.tools} to keep notes and outputs clear for review.` : "",
    result,
    fit
  ];

  return polishEnglishText(body.filter(Boolean).join(" "));
}

function createMarketingCommunicationCoverLetterParagraph(experience, jobAnalysis = null) {
  if (!isMarketingCommunicationContentExperience(experience, jobAnalysis)) return "";
  const roleReference = getTargetRoleReference(jobAnalysis);

  return `My experience in the fictional campus content operations project is relevant to ${roleReference} because it involved content coordination, communication material preparation, and simple campaign review. I organised topic feedback, short-video materials, and content performance notes, then reviewed around 60 user comments to identify issues related to messaging, posting time, and engagement. I also used Excel to record performance notes and support the team's review process. Based on this work, the team adjusted four topic directions and engagement increased by around 18% over the following two weeks. This experience shows my ability to organise information, support campaign execution, and communicate insights clearly.`;
}

function normalizeChineseBullet(value) {
  return removeResumeNoise(value)
    .replace(/^-+\s*/, "")
    .replace(/。。+/g, "。")
    .replace(/。$/, "。");
}

function removeResumeNoise(value) {
  return String(value || "")
    .replace(/负责我在/g, "在")
    .replace(/负责参与/g, "参与")
    .replace(/我负责参与/g, "我参与")
    .replace(/作为一段[^，。；]*经历[，。；]?/g, "")
    .replace(/这段经历帮助我提升[^。；]*[。；]?/g, "")
    .replace(/我围绕目标推进[^。；]*[。；]?/g, "")
    .replace(/围绕目标推进[^。；]*[。；]?/g, "")
    .replace(/。。+/g, "。")
    .replace(/\s+/g, " ")
    .trim();
}

function polishChineseText(value) {
  return String(value || "")
    .replace(/负责我在/g, "在")
    .replace(/负责参与/g, "参与")
    .replace(/我负责参与/g, "我参与")
    .replace(/我负责负责/g, "我负责")
    .replace(/我负责我/g, "我")
    .replace(/。。+/g, "。")
    .replace(/。+/g, "。")
    .replace(/\s+/g, "")
    .trim();
}

function trimSentence(value) {
  return String(value || "").trim().replace(/[。；;,\s]+$/g, "。");
}

function removeLeadingResponsibility(value) {
  return String(value || "")
    .trim()
    .replace(/^我的主要任务是/, "")
    .replace(/^我的主要职责是/, "")
    .replace(/^主要任务是/, "")
    .replace(/^主要职责是/, "")
    .replace(/^负责/, "")
    .replace(/[。；;,\s]+$/g, "");
}

function formatChineseResponsibility(value) {
  const text = String(value || "").trim();
  if (!text) return "";

  const responsibleMatch = text.match(/负责(.+)/);
  const cleaned = removeLeadingResponsibility(responsibleMatch ? responsibleMatch[1] : text)
    .replace(/^完成/, "完成")
    .replace(/^主要/, "")
    .replace(/[。；;,\s]+$/g, "");

  if (!cleaned) return "";
  if (/^(参与|协助|使用|完成|跟进|整理|处理|制作|运营|支持)/.test(cleaned)) return cleaned;
  return `负责${cleaned}`;
}

function removeDuplicateSubject(value) {
  return String(value || "")
    .replace(/^我在/, "在")
    .replace(/^当时/, "")
    .trim();
}

function removeTitleSuffix(value) {
  return String(value || "")
    .replace(/实习|兼职|项目经历|校园经历|正式工作/g, "")
    .trim() || "相关";
}

function buildExperienceIntro(experience) {
  const title = removeTitleSuffix(experience.title);
  const typeText = experience.type === "实习" || experience.type === "兼职" ? `做${title}${experience.type}时的一段经历` : `${title}中的一段经历`;
  return typeText;
}

function splitActionSegments(value) {
  return String(value || "")
    .split(/[；;。]/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 2);
}

function uniqueLines(lines) {
  return [...new Set(lines.filter((line) => line && line.trim()))];
}

function buildEnglishExperienceContext(experience, jobAnalysis) {
  const sourceText = getExperienceSearchText(experience);
  const task = translateExperiencePhrase(experience.task || experience.experienceDescription || "", "task");
  const action = translateExperiencePhrase(experience.action || experience.experienceDescription || "", "action");
  const result = translateExperiencePhrase(experience.result || "", "result");
  const platforms = formatEnglishList(detectEnglishPlatforms(sourceText));
  const tools = formatEnglishList(detectEnglishTools(sourceText));
  const focus = translateFocusTerms(getRelevantOutputTerms(experience, jobAnalysis));

  return { task, action, result, platforms, tools, focus };
}

function translateExperiencePhrase(value, mode) {
  const text = String(value || "");
  const items = [];

  const phraseRules = [
    [/会议摘要|会议记录/, "meeting summaries"],
    [/素材筛选|筛选素材/, "material selection"],
    [/字幕|字幕处理/, "subtitle editing"],
    [/版本修改|修改版本/, "video revision"],
    [/内容运营|日常运营/, "content operations"],
    [/视频制作|快剪|剪辑/, "video editing"],
    [/直播|转播/, "live-streaming execution"],
    [/设备清点|清点设备/, "equipment checks"],
    [/机位确认|确认机位/, "camera position confirmation"],
    [/信号测试|转播信号测试/, "signal testing"],
    [/现场流程|现场跟进|流程跟进/, "on-site workflow coordination"],
    [/关键词/, "keyword extraction"],
    [/思维导图/, "mind map organization"],
    [/行动要点/, "action point summaries"],
    [/选题|选题风险/, "topic planning and content risk review"],
    [/客户沟通|用户沟通|沟通/, "communication with users or stakeholders"],
    [/学习跟进|课堂辅导/, "student support and learning follow-up"],
    [/讲解方式|商品讲解/, "explanation and presentation"],
    [/用户反馈|观众反馈|家长反馈/, "feedback collection and response"]
  ];

  phraseRules.forEach(([pattern, phrase]) => {
    if (pattern.test(text) && !items.includes(phrase)) items.push(phrase);
  });

  const numberMatches = text.match(/\d+(?:\.\d+)?\s*(?:万|%|％|名|条|元|K|k)?/g) || [];
  const numberText = numberMatches.length ? numberMatches.join(", ") : "";

  if (mode === "result" && numberText) {
    if (/播放量|浏览|观看/.test(text)) return `two content pieces reached ${formatEnglishMetricText(text, "views")}`;
    if (/销售额|销售/.test(text)) return `sales reached ${convertChineseNumbersToEnglish(text)}`;
    return convertChineseNumbersToEnglish(text);
  }

  if (items.length) {
    if (mode === "task") return items.slice(0, 4).join(", ");
    return `${mode === "action" ? "handled " : ""}${items.slice(0, 5).join(", ")}`;
  }

  if (mode === "result") return "";
  return mode === "task"
    ? "organising information and preparing useful materials for the team"
    : "reviewed the available information and turned it into clearer notes for the team";
}

function detectEnglishPlatforms(text) {
  const platforms = [];
  const rules = [
    [/App|APP|应用/, "the app"],
    [/微信公众号|公众号/, "WeChat official account"],
    [/抖音|Douyin/, "Douyin"],
    [/小红书/, "Xiaohongshu"],
    [/B站|Bilibili/, "Bilibili"]
  ];

  rules.forEach(([pattern, label]) => {
    if (pattern.test(text)) platforms.push(label);
  });

  return platforms;
}

function detectEnglishTools(text) {
  const tools = [];
  const rules = [
    [/钉钉|DingTalk/i, "DingTalk meeting records"],
    [/AI|AIGC|人工智能/i, "AI tools"],
    [/剪映|Jianying|CapCut/i, "Jianying"],
    [/Excel/i, "Excel"],
    [/Canva/i, "Canva"]
  ];

  rules.forEach(([pattern, label]) => {
    if (pattern.test(text)) tools.push(label);
  });

  return tools;
}

function translateFocusTerms(terms) {
  return formatEnglishList((terms || []).map(translateTagToEnglish).filter(Boolean).slice(0, 4));
}

function translateType(type) {
  const map = {
    "实习": "internship",
    "兼职": "part-time experience",
    "正式工作": "full-time work experience",
    "项目经历": "project experience",
    "校园经历": "campus experience",
    "课程项目": "academic project",
    "AI 项目": "AI project",
    "学生经历": "campus experience",
    "其他": "experience",
    "Internship": "internship",
    "Part-time": "part-time experience",
    "Full-time": "full-time work experience",
    "Project": "project experience",
    "Campus": "campus experience",
    "AI Project": "AI project"
  };

  return map[type] || "experience";
}

function translateTagToEnglish(tag) {
  const map = {
    "沟通": "communication",
    "执行": "execution",
    "数据": "data analysis",
    "内容": "content",
    "运营": "operations",
    "AI": "AI tools",
    "解决问题": "problem-solving",
    "团队协作": "teamwork",
    "学习能力": "learning agility",
    "组织协调": "coordination",
    "责任心": "responsibility",
    "抗压能力": "resilience",
    "逻辑分析": "logical analysis",
    "细节意识": "attention to detail",
    "结果导向": "result orientation",
    "内容 / 新媒体": "content and new media",
    "运营": "operations",
    "市场 / 品牌": "marketing and branding",
    "产品": "product",
    "销售 / 商务": "sales and business development",
    "数据 / 分析": "data and analytics",
    "AI / 自动化": "AI and automation",
    "人力 / 行政": "HR and administration",
    "财务 / 金融": "finance",
    "供应链 / 制造": "supply chain and manufacturing",
    "咨询 / 战略": "consulting and strategy",
    "技术 / 互联网": "technology and internet",
    "教育 / 培训": "education and training",
    "设计 / 创意": "design and creative",
    "Software Engineering": "software engineering",
    "Data Analytics": "data analytics",
    "AI / Machine Learning": "AI and machine learning",
    "Cybersecurity": "cybersecurity",
    "IT Support": "IT support",
    "Engineering": "engineering",
    "Research / Lab": "research and lab",
    "Quality / Testing": "quality and testing",
    "Healthcare / Life Science": "healthcare and life science",
    "其他": "other",
    "内容与新媒体运营": "content and new media operations",
    "产品与项目方向": "product",
    "市场与品牌方向": "marketing and communications",
    "销售与商务方向": "sales and business development",
    "数据与商业分析方向": "data and business analysis",
    "AI 与自动化方向": "AI and automation",
    "技术与互联网基础岗位": "technology and internet",
    "人力与行政方向": "HR and administration",
    "金融与财务方向": "finance",
    "供应链与制造方向": "supply chain and manufacturing",
    "咨询与战略方向": "consulting and strategy",
    "通用职场能力": "general workplace skills",
    "市场营销": "marketing",
    "品牌": "branding",
    "活动运营": "campaign operations",
    "跨部门协作": "cross-functional collaboration",
    "报告撰写": "report writing",
    "复盘能力": "review and reflection",
    "流程优化": "process optimization",
    "内容运营": "content operations",
    "新媒体运营": "new media operations",
    "短视频运营": "short-form video operations",
    "用户运营": "user operations",
    "活动运营": "campaign operations",
    "平台运营": "platform operations",
    "小红书": "Xiaohongshu",
    "抖音": "Douyin",
    "公众号": "WeChat official account",
    "视频号": "WeChat Channels",
    "B站": "Bilibili",
    "剪映": "Jianying",
    "文案": "copywriting",
    "选题": "topic planning",
    "复盘": "review and reflection",
    "数据分析": "data analysis",
    "用户互动": "user engagement",
    "信息整理": "information organization",
    "Communication": "communication",
    "Execution": "execution",
    "Data": "data analysis",
    "Content": "content",
    "Operations": "operations",
    "Problem-solving": "problem-solving",
    "Teamwork": "teamwork",
    "Learning Agility": "learning agility",
    "Coordination": "coordination",
    "Logical Analysis": "logical analysis",
    "Attention to Detail": "attention to detail",
    "Result Orientation": "result orientation",
    "Content / New Media": "content and new media",
    "Marketing / Branding": "marketing and branding",
    "Product": "product",
    "Data / Analytics": "data and analytics",
    "AI / Automation": "AI and automation",
    "Tech / Internet": "technology and internet",
    "Software Engineering": "software engineering",
    "Data Analytics": "data analytics",
    "AI / Machine Learning": "AI and machine learning",
    "Cybersecurity": "cybersecurity",
    "IT Support": "IT support",
    "Engineering": "engineering",
    "Research / Lab": "research and lab",
    "Quality / Testing": "quality and testing",
    "Healthcare / Life Science": "healthcare and life science"
  };

  return map[tag] || "";
}

function formatEnglishMetricText(text, unit, limit = null) {
  const rawNumbers = unit === "views"
    ? (String(text || "").match(/\d+(?:\.\d+)?\s*万/g) || [])
    : (String(text || "").match(/\d+(?:\.\d+)?\s*(?:万|K|k)?/g) || []);
  const converted = rawNumbers
    .map((item) => convertChineseNumbersToEnglish(item).replace(/\s+/g, ""))
    .filter(Boolean);

  if (!converted.length) return convertChineseNumbersToEnglish(text);
  const metricText = formatEnglishList([...new Set(converted)].slice(0, limit || converted.length));
  return unit ? `${metricText} ${unit}` : metricText;
}

function convertChineseNumbersToEnglish(text) {
  return String(text || "")
    .replace(/(\d+(?:\.\d+)?)\s*万/g, (_, number) => `${Number(number) * 10}K`)
    .replace(/％/g, "%")
    .replace(/播放量达到/g, "reached")
    .replace(/和/g, " and ")
    .replace(/[，。；]/g, " ")
    .trim();
}

function getTargetRoleTitle(jobAnalysis = null) {
  if (jobAnalysis?.targetRoleTitle) return jobAnalysis.targetRoleTitle;
  const rawDescription = String(jobAnalysis?.rawDescription || "");
  const extractedTitle = extractTargetRoleTitle(rawDescription);
  if (extractedTitle) return extractedTitle;

  const primaryDirection = String(jobAnalysis?.primaryDirection || "");
  if (/市场|品牌/.test(primaryDirection)) return "Marketing Communications";
  if (/内容|新媒体/.test(primaryDirection)) return "Content Operations";
  if (/产品/.test(primaryDirection)) return "Product";
  return "target role";
}

function extractTargetRoleTitle(description) {
  const source = String(description || "");
  const roleMatch = source.match(/^\s*(?:岗位名称|职位名称|招聘岗位|应聘岗位|岗位|职位|Role|Position|Job\s*Title|Title)\s*[:：]\s*([^\n\r]+)/im);
  return cleanTargetRoleTitle(roleMatch?.[1] || "");
}

function cleanTargetRoleTitle(value) {
  return String(value || "")
    .replace(/[。；;，,].*$/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getTargetRoleReference(jobAnalysis = null) {
  const title = getTargetRoleTitle(jobAnalysis);
  if (!title || title === "target role") return "the target role";
  const roleTitle = /\brole$/i.test(title) ? title : `${title} role`;
  return withArticle(roleTitle);
}

function getChineseTargetRoleReference(jobAnalysis = null) {
  const title = getTargetRoleTitle(jobAnalysis);
  if (!title || title === "target role") return "目标岗位";
  if (/岗位$/.test(title)) return title;
  return `${title}岗位`;
}

function withArticle(value) {
  const text = String(value || "").trim();
  if (!text) return "the target role";
  if (/^(the|a|an)\s/i.test(text)) return text;
  return /^[aeiou]/i.test(text) ? `an ${text}` : `a ${text}`;
}

function formatEnglishResultSentence(result) {
  const text = String(result || "").trim();
  if (!text) return "";
  if (/^(as a result|based on this|this work|the team|engagement|it|we)\b/i.test(text)) {
    return ensureSentence(text);
  }
  return ensureSentence(`As a result, ${text}`);
}

function ensureSentence(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  return /[.!?]$/.test(text) ? text : `${text}.`;
}

function polishEnglishText(value) {
  return String(value || "")
    .replace(/[\u4e00-\u9fff]+/g, "")
    .replace(/\bincluding\s+(The|This)\b/g, "$1")
    .replace(/\bresults including\s+(The|This)\b/g, "results. $1")
    .replace(/\boutcomes including\s+(The|This)\b/g, "outcomes. $1")
    .replace(/\s+/g, " ")
    .replace(/\s+\./g, ".")
    .replace(/,\s*,/g, ",")
    .trim();
}

function capitalizeFirst(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function useSampleJobDescription() {
  jobDescription.value = sampleJobDescription.textContent.trim();
  if (hasCurrentMatchResults()) {
    clearMatchResults(statusText("jdUpdatedCleared"));
  }
  jobDescription.focus();
}

function handleJobDescriptionInput() {
  const description = jobDescription.value.trim();
  if (!hasCurrentMatchResults()) return;
  if (!description) {
    clearMatchResults(statusText("jdEmptyCleared"));
    return;
  }
  if (currentJobDescription && description !== currentJobDescription) {
    clearMatchResults(statusText("jdChangedCleared"));
  }
}

function clearJobDescriptionAndResults() {
  jobDescription.value = "";
  clearMatchResults(statusText("jdCleared"));
  jobDescription.focus();
}

function analyzeJobMatch() {
  const description = jobDescription.value.trim();
  const language = getOutputLanguage();

  if (!description) {
    currentMatchResults = [];
    currentJobDescription = "";
    matchedExperienceIds = [];
    matchResults.innerHTML = `<p class="match-empty">${escapeHtml(statusText("pasteJobDescription"))}</p>`;
    setMatchStatus("");
    return;
  }

  if (!experiences.length) {
    currentMatchResults = [];
    currentJobDescription = "";
    matchedExperienceIds = [];
    matchResults.innerHTML = `<p class="match-empty">${escapeHtml(statusText("addAtLeastOneExperience"))}</p>`;
    setMatchStatus("");
    return;
  }

  const jobAnalysis = analyzeJobDescription(description);
  jobAnalysis.rawDescription = description;
  const keywords = jobAnalysis.keywordList.length ? jobAnalysis.keywordList : extractKeywords(description);
  const scoredExperiences = experiences
    .map((experience) => scoreExperienceMatch(experience, description, keywords, jobAnalysis, language))
    .sort((a, b) => b.percentage - a.percentage || b.priority - a.priority);
  const outputCount = scoredExperiences.length * 3;

  matchResults.innerHTML = `
    <h3 class="match-results-title">${language === "en" ? "Job Analysis & Experience Recommendations" : "岗位分析与经历推荐"}</h3>
    ${createJobAnalysisSummary(jobAnalysis, language)}
    <div class="match-list">
      ${scoredExperiences.map((match) => createMatchCard(match, jobAnalysis, language)).join("")}
    </div>
  `;
  currentMatchResults = scoredExperiences;
  currentJobDescription = description;
  matchedExperienceIds = scoredExperiences.map((match) => match.experience.id);
  setMatchStatus("");
  updateMatchResultsToolbar();
  updateStats({ analysisCount: 1, outputCount });
}

function clearMatchResults(message = "", options = {}) {
  if (options.confirm && hasCurrentMatchResults()) {
    const confirmed = window.confirm(statusText("clearCurrentResultsConfirm"));
    if (!confirmed) return;
  }

  currentMatchResults = [];
  currentJobDescription = "";
  matchedExperienceIds = [];
  matchResults.innerHTML = "";
  setMatchStatus(message);
  updateMatchResultsToolbar();
}

function hasCurrentMatchResults() {
  return Boolean(currentMatchResults.length || matchedExperienceIds.length || matchResults.innerHTML.trim());
}

function setMatchStatus(message, options = {}) {
  matchStatus.textContent = message || "";
  reanalyzeMatchButton.hidden = !(options.showReanalyze && jobDescription.value.trim() && experiences.length);
  updateMatchResultsToolbar();
}

function updateMatchResultsToolbar() {
  const hasResults = Boolean(matchResults.innerHTML.trim());
  const hasStatus = Boolean(matchStatus.textContent.trim());
  matchResultsToolbar.hidden = !(hasResults || hasStatus);
  clearMatchResultsButton.hidden = !hasResults;
}

function scoreExperienceMatch(experience, description, keywords, jobAnalysis, language = "zh") {
  const lowerExperienceText = getExperienceSearchText(experience).toLowerCase();
  const reasons = [];
  let totalScore = 0;
  const abilityHits = getAbilityTagHits(experience.tags, jobAnalysis.abilityTags || [], lowerExperienceText);
  const directionTagHits = getDirectionTagHits(experience.directionTags, jobAnalysis.directions || []);
  const specificKeywords = keywords.filter((keyword) => !isGenericMatchKeyword(keyword));
  const keywordHits = [...new Set(specificKeywords.filter((keyword) => lowerExperienceText.includes(keyword.toLowerCase())))];
  const contentHits = keywordHits.filter((keyword) => {
    const lowerKeyword = keyword.toLowerCase();
    return [experience.title, experience.experienceDescription, experience.situation, experience.task, experience.action, experience.result]
      .some((value) => String(value || "").toLowerCase().includes(lowerKeyword));
  });
  const hasQuantifiedResult = hasQuantifiedOutcome(experience.result || experience.experienceDescription);

  const directionScore = Math.min(25, directionTagHits.length * 25);
  const abilityScore = Math.min(20, abilityHits.length * 7);
  const keywordScore = Math.min(25, keywordHits.length * 5);
  const contentScore = Math.min(20, contentHits.length * 4);
  const resultScore = hasQuantifiedResult ? 10 : 0;
  const workflowSupportScore = getWorkflowSupportScore(experience, jobAnalysis);
  const technicalFamilyScore = getTechnicalFamilyExperienceScore(experience, jobAnalysis);
  totalScore = directionScore + abilityScore + keywordScore + contentScore + resultScore + workflowSupportScore + technicalFamilyScore;
  const percentage = Math.min(100, Math.round(totalScore));
  const level = getMatchLevel(percentage, language);

  if (directionTagHits.length) {
    reasons.push(language === "en"
      ? `Role direction tags match the JD direction: ${directionTagHits.map(translateTagToEnglish).filter(Boolean).join(", ")}.`
      : `岗位方向标签与 JD 识别方向匹配：${directionTagHits.join("、")}。`);
  }

  if (abilityHits.length) {
    reasons.push(language === "en"
      ? `Ability tags or experience content match JD capabilities: ${abilityHits.map(translateTagToEnglish).filter(Boolean).slice(0, 6).join(", ")}.`
      : `能力标签或经历内容贴合 JD 能力：${abilityHits.slice(0, 6).join("、")}。`);
  }

  if (keywordHits.length) {
    reasons.push(language === "en"
      ? `Experience content matches several JD keywords.`
      : `标题、描述或经历内容命中岗位关键词：${keywordHits.slice(0, 8).join("、")}。`);
  }

  if (hasQuantifiedResult) {
    reasons.push(language === "en" ? "The experience includes measurable outcomes." : "经历中包含可量化结果。");
  }

  if (technicalFamilyScore > 0) {
    reasons.push(language === "en"
      ? "The experience includes role-specific technical signals for this JD."
      : "经历中包含与该 JD 相关的技术方向信号。");
  }

  if (!reasons.length) {
    reasons.push(language === "en" ? "No strong match signal was found yet; this can be kept as backup material." : "暂未发现强匹配信号，可作为备用素材。");
  }

  return {
    experience,
    rawScore: totalScore,
    percentage,
    priority: getRecommendationPriority(experience, jobAnalysis),
    level,
    keywordHits: [...new Set(keywordHits.concat(abilityHits, directionTagHits))],
    reasons: [...new Set(reasons)],
    usage: recommendUsage(percentage, keywordHits.length, experience.tags, language)
  };
}

function isGenericMatchKeyword(keyword) {
  const value = String(keyword || "").trim().toLowerCase();
  return /^(project|support|communication|data|organise|organize|information|task|team|项目|支持|沟通|数据|整理|信息|任务|团队)$/.test(value);
}

function getWorkflowSupportScore(experience, jobAnalysis) {
  const jdText = String(jobAnalysis?.rawDescription || "").toLowerCase();
  const experienceText = getExperienceSearchText(experience).toLowerCase();
  const isMarketingCommunications = /marketing communications|campaign planning|communication materials|social media content|campaign documents|stakeholder|ai tools/.test(jdText)
    || /市场|品牌/.test(jobAnalysis?.primaryDirection || "");
  const isWorkflowSupport = /ai-assisted resume workflow|resume workflow|job descriptions|jd matching|bullet generation|workflow prototype/.test(experienceText);

  return isMarketingCommunications && isWorkflowSupport ? 10 : 0;
}

function getTechnicalFamilyExperienceScore(experience, jobAnalysis = null) {
  const familyId = getDirectTechnicalFamilyId(jobAnalysis);
  if (!familyId) return 0;

  const text = getExperienceSearchText(experience).toLowerCase();
  const rules = {
    "software-engineering": [
      [/resume workflow prototype|ai-assisted resume workflow|workflow prototype|tool prototype/, 36],
      [/web app|web application|frontend|javascript|local data logic|user input|filtering|output generation|debug|interface|tool building/, 24],
      [/learning app user research|survey responses|interview notes|usability/, 8]
    ],
    "data-analytics": [
      [/survey responses|user comments|excel|categorised|categorized|data|performance notes|reviewed around \d+|分析|问卷|数据/, 24],
      [/dashboard|sql|kpi|reporting|data cleaning|trend analysis|power bi|tableau/, 30]
    ],
    "research-lab": [
      [/survey responses|interview notes|research project|reviewing \d+|categorised|categorized feedback|student survey|访谈|问卷/, 32],
      [/literature review|data coding|research documentation|ethics|academic research|experiment|lab/, 30]
    ],
    "ai-machine-learning": [
      [/ai-assisted|ai workflow|prompt|workflow prototype|classification|evaluation|dataset|model/, 28]
    ],
    cybersecurity: [
      [/security|risk|log|access|compliance|incident|vulnerability/, 28]
    ],
    "it-support-systems": [
      [/technical support|troubleshooting|ticket|device|account|system|documentation/, 24]
    ],
    "engineering-technical": [
      [/cad|drawing|testing|inspection|equipment|safety|simulation|matlab|solidworks/, 26]
    ],
    "quality-testing": [
      [/tested|testing|bug|feedback|workflow clarity|output quality|prototype testing|validation|test case/, 28]
    ],
    "healthcare-life-science": [
      [/health|lab|sample|patient|clinical|medical|compliance|safety protocol/, 26]
    ]
  };

  return (rules[familyId] || []).reduce((score, [pattern, points]) => {
    return score + (pattern.test(text) ? points : 0);
  }, 0);
}

function getRecommendationPriority(experience, jobAnalysis) {
  const text = getExperienceSearchText(experience).toLowerCase();
  const directions = (experience.directionTags || []).join(" ");
  const primaryDirection = jobAnalysis?.primaryDirection || "";
  let priority = 0;

  if (/市场|品牌|内容|新媒体/.test(primaryDirection)) {
    if (directions.includes("内容 / 新媒体")) priority += 30;
    if (directions.includes("市场 / 品牌")) priority += 24;
    if (directions.includes("运营")) priority += 8;
    if (/content|social media|campaign|short-video|short video|内容运营|新媒体/.test(text)) priority += 12;
    if (/communication coordinator|meeting notes|stakeholder/.test(text)) priority += 6;
    if (/resume workflow|job descriptions|jd matching|bullet generation|workflow prototype/.test(text)) priority += 20;
  }

  if (/产品/.test(primaryDirection)) {
    if (directions.includes("产品")) priority += 30;
    if (/user research|prototype|feature|user flow|usability|产品|用户研究|原型/.test(text)) priority += 12;
  }

  priority += getTechnicalFamilyExperienceScore(experience, jobAnalysis);

  return priority;
}

function createMatchCard(match, jobAnalysis, language = "zh") {
  const starAnswer = createStarInterviewAnswer(match.experience, jobAnalysis, language);
  const resumeBullets = createResumeBullets(match.experience, jobAnalysis, language);
  const coverLetter = createCoverLetterParagraph(match.experience, jobAnalysis, language);
  const labels = getMatchLabels(language);
  const displayTitle = match.experience.title;
  const displayMeta = language === "en"
    ? `${escapeHtml(match.experience.time)} · ${escapeHtml(translateType(match.experience.type))} · ${escapeHtml(formatEnglishList(match.experience.directionTags.map(translateTagToEnglish).filter(Boolean)) || labels.noDirection)}`
    : `${escapeHtml(match.experience.time)} · ${escapeHtml(match.experience.type)} · ${escapeHtml(match.experience.directionTags.join(" / ") || labels.noDirection)}`;
  const displayedKeywordHits = language === "en"
    ? match.keywordHits.map(translateTagToEnglish).filter(Boolean)
    : match.keywordHits;

  return `
    <article class="match-card">
      <div class="match-card-header">
        <h3>${escapeHtml(displayTitle)}</h3>
        <span class="score-pill">${language === "en" ? "Match" : "匹配度"}: ${match.percentage}% | ${escapeHtml(match.level)}</span>
      </div>
      <p class="match-meta">${displayMeta}</p>
      <p><strong>${labels.usage}</strong>${escapeHtml(match.usage)}</p>
      ${createMatchOutputBlock(labels.bulletTitle, resumeBullets, labels.bulletCopy, `${labels.bulletDirection}${getBulletDirectionLabel(match.experience, jobAnalysis, language)}`)}
      ${createMatchOutputBlock(labels.starTitle, starAnswer, labels.copy)}
      ${createMatchOutputBlock(labels.coverTitle, coverLetter, labels.copy)}
      <details class="match-reason-details">
        <summary>${labels.reasonDetails}</summary>
        <p><strong>${labels.keywordHits}</strong>${displayedKeywordHits.length ? displayedKeywordHits.slice(0, 12).map(escapeHtml).join(language === "en" ? ", " : "、") : labels.noKeywordHits}</p>
        <p><strong>${labels.reason}</strong>${match.reasons.map(escapeHtml).join(" ")}</p>
      </details>
    </article>
  `;
}

function createMatchOutputBlock(title, content, copyLabel = "复制", note = "") {
  return `
    <div class="match-output">
      <div class="match-output-header">
        <strong>${escapeHtml(title)}</strong>
        <button class="copy-button compact-copy" type="button" data-action="copy-match-output">${escapeHtml(copyLabel)}</button>
      </div>
      ${note ? `<span class="bullet-direction-note">${escapeHtml(note)}</span>` : ""}
      <pre>${escapeHtml(content)}</pre>
    </div>
  `;
}

function getOutputLanguage() {
  return outputLanguage?.value === "en" ? "en" : "zh";
}

function getMatchLabels(language) {
  if (language === "en") {
    return {
      keywordHits: "Keyword hits: ",
      noKeywordHits: "No obvious keyword hits",
      reason: "Recommendation reason: ",
      reasonDetails: "View matching basis",
      usage: "Best use: ",
      starTitle: "Interview Answer",
      bulletTitle: "Resume Bullets",
      coverTitle: "Cover Letter Material",
      bulletDirection: "Resume focus: ",
      bulletCopy: "Copy Resume Bullets",
      copy: "Copy",
      noDirection: "No role direction tagged"
    };
  }

  return {
    keywordHits: "命中关键词：",
    noKeywordHits: "暂无明显关键词命中",
    reason: "推荐理由：",
    reasonDetails: "查看岗位匹配依据",
    usage: "推荐用途：",
    starTitle: "推荐面试回答",
    bulletTitle: "中文简历 Bullet",
    coverTitle: "求职信 / 自我介绍素材",
    bulletDirection: "当前简历方向：",
    bulletCopy: "复制简历 Bullet",
    copy: "复制",
    noDirection: "未标注岗位方向"
  };
}

function analyzeJobDescription(description) {
  if (window.JobKeywordLibrary?.analyze) {
    const analysis = window.JobKeywordLibrary.analyze(description);
    analysis.rawDescription = description;
    analysis.targetRoleTitle = extractTargetRoleTitle(description);
    return analysis;
  }

  const fallbackKeywords = extractKeywords(description);
  return {
    isShort: String(description || "").trim().length < 40,
    rawDescription: description,
    targetRoleTitle: extractTargetRoleTitle(description),
    hasSignals: fallbackKeywords.length > 0,
    directions: [],
    primaryDirection: "",
    coreKeywords: fallbackKeywords,
    hardSkills: [],
    softSkills: [],
    bonusKeywords: [],
    abilityTags: [],
    expressionFocus: [],
    matchedKeywords: fallbackKeywords,
    keywordList: fallbackKeywords
  };
}

function getCurrentJobAnalysis() {
  const description = jobDescription.value.trim();
  if (!description) return null;
  const analysis = analyzeJobDescription(description);
  analysis.rawDescription = description;
  return analysis.hasSignals ? analysis : null;
}

function createJobAnalysisSummary(analysis, language = "zh") {
  const shortWarning = analysis.isShort || !analysis.hasSignals
    ? `<p class="match-warning">${language === "en" ? "The job description is short. Paste fuller responsibilities and requirements for more accurate matching." : "岗位描述信息较少，建议粘贴更完整的职责和任职要求，以获得更准确的匹配结果。"}</p>`
    : "";
  const labels = language === "en"
    ? {
      title: "Job Analysis",
      note: "MVP keyword-library recognition, not real-time labor market data.",
      direction: "Detected role direction",
      core: "Core responsibility keywords",
      hard: "Hard skill keywords",
      soft: "Soft skill keywords",
      bonus: "Bonus keywords",
      focus: "Suggested emphasis",
      none: "No clear keywords found",
      noDirection: "Not detected",
      noFocus: "Paste a fuller JD for a better suggestion"
    }
    : {
      title: "岗位分析",
      note: "通用关键词库 MVP 识别，不代表实时就业市场数据。",
      direction: "识别到的岗位方向",
      core: "核心职责关键词",
      hard: "硬技能关键词",
      soft: "软技能关键词",
      bonus: "加分项关键词",
      focus: "建议重点突出能力",
      none: "暂无明显关键词",
      noDirection: "暂未识别",
      noFocus: "建议补充更完整 JD 后再判断"
    };
  const directionValue = language === "en"
    ? analysis.directions.map((direction) => translateTagToEnglish(direction.name)).filter(Boolean).join(", ")
    : analysis.directions.map((direction) => direction.name).join("、");
  const formatAnalysisValues = (items) => {
    if (language === "en") return (items || []).map(translateTagToEnglish).filter(Boolean).join(", ");
    return (items || []).join("、");
  };

  return `
    <details class="job-analysis-summary">
      <summary>${language === "en" ? "View matching basis" : "查看岗位匹配依据"}</summary>
      <div class="analysis-header">
        <strong>${labels.title}</strong>
        <span>${labels.note}</span>
      </div>
      ${shortWarning}
      <div class="analysis-grid">
        ${createAnalysisItem(labels.direction, directionValue || labels.noDirection)}
        ${createAnalysisItem(labels.core, formatAnalysisValues(analysis.coreKeywords) || labels.none)}
        ${createAnalysisItem(labels.hard, formatAnalysisValues(analysis.hardSkills) || labels.none)}
        ${createAnalysisItem(labels.soft, formatAnalysisValues(analysis.softSkills) || labels.none)}
        ${createAnalysisItem(labels.bonus, formatAnalysisValues(analysis.bonusKeywords) || labels.none)}
        ${createAnalysisItem(labels.focus, formatAnalysisValues(analysis.expressionFocus) || labels.noFocus)}
      </div>
    </details>
  `;
}

function createAnalysisItem(label, value) {
  return `
    <div class="analysis-item">
      <span>${escapeHtml(label)}</span>
      <p>${escapeHtml(value)}</p>
    </div>
  `;
}

function getDirectionTagHits(directionTags, detectedDirections) {
  if (!directionTags?.length || !detectedDirections?.length) return [];

  const detectedNames = detectedDirections.map((direction) => direction.name);
  return directionTags.filter((tag) => {
    const aliases = getDirectionAliases(tag);
    return detectedNames.some((directionName) => aliases.some((alias) => directionName.includes(alias)));
  });
}

function getAbilityTagHits(abilityTags, detectedAbilities, lowerExperienceText = "") {
  if (!abilityTags?.length || !detectedAbilities?.length) return [];

  return abilityTags.filter((tag) => {
    const aliases = getAbilityAliases(tag).map((alias) => alias.toLowerCase());
    return detectedAbilities.some((ability) => {
      const lowerAbility = ability.toLowerCase();
      return aliases.some((alias) => lowerAbility.includes(alias) || alias.includes(lowerAbility));
    }) || aliases.some((alias) => lowerExperienceText.includes(alias));
  });
}

function getAbilityAliases(abilityTag) {
  const aliasMap = {
    "沟通": ["沟通", "communication", "client communication", "stakeholder communication"],
    "执行": ["执行", "落地", "推进", "跟进", "execution", "implementation", "delivery"],
    "数据": ["数据", "指标", "分析", "data", "metrics", "SQL", "Excel"],
    "内容": ["内容", "文案", "选题", "content", "copywriting"],
    "运营": ["运营", "operation", "operations", "user operation", "platform operation"],
    "AI": ["AI", "AIGC", "prompt", "agent", "RAG", "automation"],
    "解决问题": ["解决问题", "问题诊断", "problem", "problem solving", "troubleshooting"],
    "团队协作": ["团队协作", "跨部门协作", "跨团队", "collaboration", "cross-functional", "stakeholder"],
    "学习能力": ["学习能力", "快速学习", "learning agility"],
    "组织协调": ["组织协调", "协调", "coordination", "cross-functional"],
    "责任心": ["责任心", "责任感", "ownership"],
    "抗压能力": ["抗压能力", "抗压", "pressure", "resilience"],
    "逻辑分析": ["逻辑分析", "结构化", "analysis", "logical"],
    "细节意识": ["细节意识", "细节", "attention to detail"],
    "结果导向": ["结果导向", "结果", "result", "outcome"]
  };

  return aliasMap[abilityTag] || [abilityTag];
}

function hasQuantifiedOutcome(text) {
  return /(\d+|%|％|万|千|K|k|增长|提升|降低|节省|播放量|销售额|人数|完成|转化率)/.test(String(text || ""));
}

function getMatchLevel(percentage, language = "zh") {
  if (language === "en") {
    if (percentage >= 85) return "Strong match";
    if (percentage >= 70) return "Good match";
    if (percentage >= 50) return "Partial match";
    if (percentage >= 30) return "Low relevance";
    return "Not recommended";
  }

  if (percentage >= 85) return "高度匹配";
  if (percentage >= 70) return "较匹配";
  if (percentage >= 50) return "部分匹配";
  if (percentage >= 30) return "相关度较低";
  return "暂不推荐";
}

function getDirectionAliases(directionTag) {
  const aliasMap = {
    "内容 / 新媒体": ["内容", "新媒体"],
    "运营": ["运营"],
    "市场 / 品牌": ["市场", "品牌"],
    "产品": ["产品"],
    "销售 / 商务": ["销售", "商务", "BD", "客户"],
    "数据 / 分析": ["数据", "分析", "BI"],
    "AI / 自动化": ["AI", "自动化"],
    "人力 / 行政": ["人力", "行政", "HR"],
    "财务 / 金融": ["财务", "金融"],
    "供应链 / 制造": ["供应链", "制造"],
    "咨询 / 战略": ["咨询", "战略"],
    "技术 / 互联网": ["技术", "互联网"],
    "教育 / 培训": ["教育", "培训"],
    "设计 / 创意": ["设计", "创意"],
    "其他": ["其他"]
  };

  return aliasMap[directionTag] || [directionTag];
}

function getRelevantOutputTerms(experience, jobAnalysis) {
  if (!jobAnalysis) return [];

  const experienceText = getExperienceSearchText(experience).toLowerCase();
  const matchedTerms = (jobAnalysis.keywordList || [])
    .filter((term) => experienceText.includes(term.toLowerCase()));
  const matchedTags = getAbilityTagHits(experience.tags, jobAnalysis.abilityTags || [], experienceText);

  return [...new Set(matchedTerms.concat(matchedTags))].slice(0, 5);
}

function getOutputEmphasis(experience, jobAnalysis) {
  if (!jobAnalysis) return "";

  const terms = getRelevantOutputTerms(experience, jobAnalysis);
  return terms.join(", ");
}

function formatFocusText(jobAnalysis) {
  if (!jobAnalysis) return "";
  return (jobAnalysis.expressionFocus || []).slice(0, 6).join("、");
}

function formatEnglishList(items) {
  const values = [...new Set((items || []).filter(Boolean))];
  if (!values.length) return "";
  if (values.length === 1) return values[0];
  if (values.length === 2) return `${values[0]} and ${values[1]}`;
  return `${values.slice(0, -1).join(", ")}, and ${values.at(-1)}`;
}

function extractKeywords(text) {
  const stopWords = new Set([
    "and", "the", "for", "with", "you", "your", "our", "are", "will", "this",
    "that", "from", "have", "has", "into", "about", "role", "team", "work",
    "job", "description", "responsibilities", "requirements", "ability", "skills",
    "experience", "candidate", "including", "across", "within", "using", "use"
  ]);

  const normalized = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length >= 3 && !stopWords.has(word));

  return [...new Set(normalized)].slice(0, 24);
}

function getExperienceSearchText(experience) {
  return [
    experience.title,
    experience.time,
    experience.type,
    experience.tags.join(" "),
    experience.directionTags.join(" "),
    experience.experienceDescription,
    experience.situation,
    experience.task,
    experience.action,
    experience.result
  ].join(" ");
}

function getTypeMatches(type, lowerDescription) {
  const typeKeywords = {
    "实习": ["intern", "internship"],
    "兼职": ["part-time", "part time", "assistant"],
    "正式工作": ["full-time", "full time", "工作经验", "正式"],
    "项目经历": ["project", "case", "项目"],
    "校园经历": ["student", "campus", "club", "leadership", "校园"],
    "课程项目": ["project", "course", "academic"],
    "AI 项目": ["ai", "automation", "workflow", "tools"],
    "学生经历": ["student", "campus", "club", "leadership"],
    "其他": []
  };

  return (typeKeywords[type] || []).filter((keyword) => lowerDescription.includes(keyword));
}

function recommendUsage(score, keywordHitCount, tags, language = "zh") {
  const usage = [];

  if (score >= 30 || keywordHitCount >= 3) usage.push(language === "en" ? "Resume" : "简历");
  if (score >= 20 || tags.includes("沟通") || tags.includes("解决问题")) usage.push(language === "en" ? "Interview" : "面试");
  if (tags.includes("沟通") || tags.includes("团队协作") || score >= 25) usage.push(language === "en" ? "Cover Letter" : "求职信");

  return usage.length ? usage.join(" / ") : (language === "en" ? "Backup interview material" : "面试备用素材");
}

function exportData() {
  const latestExperiences = loadExperiences();
  const latestStats = loadStats();
  experiences = latestExperiences;
  usageStats = latestStats;

  const backup = {
    app: "CareerFit Workflow Tool",
    exportedAt: new Date().toISOString(),
    version: 4,
    experiences: latestExperiences
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `careerfit-workflow-data-${formatDateForFilename(new Date())}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);

  setBackupStatus(statusText("exportedCount", latestExperiences.length));
  window.alert(statusText("exportAlert"));
}

function formatDateForFilename(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function handleImportFileSelection(event) {
  setSelectedImportFile(event.target.files?.[0] || null);
}

function handleImportDragEnter(event) {
  event.preventDefault();
  importDropZone.classList.add("is-drag-over");
}

function handleImportDragOver(event) {
  event.preventDefault();
  importDropZone.classList.add("is-drag-over");
}

function handleImportDragLeave(event) {
  if (!importDropZone.contains(event.relatedTarget)) {
    importDropZone.classList.remove("is-drag-over");
  }
}

function handleImportDrop(event) {
  event.preventDefault();
  importDropZone.classList.remove("is-drag-over");
  setSelectedImportFile(event.dataTransfer?.files?.[0] || null);
}

function setSelectedImportFile(file) {
  if (!file) {
    selectedImportFile = null;
    selectedImportFileName.textContent = INTERFACE_TEXT[getOutputLanguage()].noFileSelected;
    return;
  }

  selectedImportFile = file;
  selectedImportFileName.textContent = getOutputLanguage() === "en" ? `Selected: ${file.name}` : `已选择：${file.name}`;
  console.log("[import] selected file name:", file.name);
  setBackupStatus("");
}

function importData() {
  if (!selectedImportFile) {
    setBackupStatus(statusText("chooseJsonFirst"), true);
    return;
  }

  if (!isJsonFile(selectedImportFile)) {
    setBackupStatus(statusText("chooseJsonFile"), true);
    return;
  }

  const reader = new FileReader();

  reader.addEventListener("load", async () => {
    try {
      const importedBackup = parseImportedBackup(reader.result);
      const importedExperiences = importedBackup.experiences;
      console.log("[import] parsed json:", importedBackup.raw);
      console.log("[import] detected experiences array:", importedBackup.rawExperiences);
      console.log("[import] imported experiences count:", importedExperiences.length);

      if (!importedBackup.rawExperiences.length) {
        setBackupStatus(statusText("noExperienceData"), true);
        return;
      }

      if (!importedExperiences.length) {
        throw new Error("importFailed");
      }

      const hasImportAnalytics = importedBackup.hasAnalytics;
      const importMode = experiences.length || hasLocalStats(usageStats)
        ? await askImportMode(importedExperiences.length)
        : "replace";

      if (!importMode) {
        setBackupStatus(statusText("importCancelled"));
        return;
      }

      const shouldReplace = importMode === "replace";
      experiences = shouldReplace
        ? importedExperiences
        : mergeImportedExperiences(experiences, importedExperiences);

      if (hasImportAnalytics) {
        usageStats = shouldReplace
          ? importedBackup.stats
          : mergeStats(usageStats, importedBackup.stats);
        saveStats();
      }

      saveExperiences();
      renderExperiences();
      clearMatchResults(statusText("dataImportedAnalyzeAgain"));
      setBackupStatus(statusText("importedCount", importedExperiences.length));
    } catch (error) {
      console.log("[import] failed:", error);
      setBackupStatus(resolveImportErrorMessage(error), true);
    } finally {
      selectedImportFile = null;
      importDataInput.value = "";
      selectedImportFileName.textContent = INTERFACE_TEXT[getOutputLanguage()].noFileSelected;
    }
  });

  reader.addEventListener("error", () => {
    setBackupStatus(statusText("invalidJson"), true);
    selectedImportFile = null;
    importDataInput.value = "";
    selectedImportFileName.textContent = INTERFACE_TEXT[getOutputLanguage()].noFileSelected;
  });

  reader.readAsText(selectedImportFile);
}

function resolveImportErrorMessage(error) {
  const key = error?.message;
  if (key && STATUS_TEXT[getOutputLanguage()]?.[key]) return statusText(key);
  return key || statusText("importFailed");
}

function isJsonFile(file) {
  return /\.json$/i.test(file.name || "") || file.type === "application/json";
}

function parseImportedBackup(fileContent) {
  let parsed;

  try {
    parsed = JSON.parse(fileContent);
  } catch (error) {
    throw new Error("invalidJson");
  }

  const rawExperiences = Array.isArray(parsed) ? parsed : parsed.experiences;

  if (!Array.isArray(rawExperiences)) {
    throw new Error("noExperiencesArray");
  }

  const experiencesFromFile = rawExperiences
    .map(normalizeExperience)
    .filter(isValidExperience);
  const statsResult = normalizeImportedStats(parsed);

  return {
    experiences: experiencesFromFile,
    stats: statsResult.stats,
    hasAnalytics: statsResult.hasAnalytics,
    raw: parsed,
    rawExperiences
  };
}

function parseImportedExperiences(fileContent) {
  return parseImportedBackup(fileContent).experiences;
}

function normalizeExperience(experience) {
  return {
    id: String(experience.id || Date.now() + Math.random()),
    title: String(experience.title || "").trim(),
    time: String(experience.time || "").trim(),
    type: normalizeExperienceType(experience.type),
    tags: normalizeTags(experience.tags, ABILITY_TAGS),
    directionTags: normalizeTags(experience.directionTags, DIRECTION_TAGS),
    experienceDescription: String(experience.experienceDescription || "").trim(),
    situation: String(experience.situation || "").trim(),
    task: String(experience.task || "").trim(),
    action: String(experience.action || "").trim(),
    result: String(experience.result || "").trim(),
    createdAt: experience.createdAt || new Date().toISOString()
  };
}

function normalizeExperienceType(type) {
  const value = String(type || "").trim();
  const aliases = {
    Internship: "实习",
    "Part-time": "兼职",
    "Part-time experience": "兼职",
    "Full-time": "正式工作",
    "Full-time work experience": "正式工作",
    Project: "项目经历",
    "Project experience": "项目经历",
    Campus: "校园经历",
    "Campus experience": "校园经历",
    "Academic Project": "课程项目",
    "Academic project": "课程项目",
    "AI Project": "AI 项目",
    "Student Experience": "学生经历",
    "Student experience": "学生经历",
    Other: "其他"
  };

  if (ALL_EXPERIENCE_TYPES.includes(value)) return value;
  return aliases[value] || "项目经历";
}

function normalizeTags(tags, allowedTags) {
  if (!Array.isArray(tags)) return [];
  return [...new Set(tags
    .map((tag) => normalizeTagValue(tag, allowedTags))
    .filter(Boolean))];
}

function normalizeTagValue(tag, allowedTags) {
  const value = String(tag || "").trim();
  if (allowedTags.includes(value)) return value;

  const abilityAliases = {
    Communication: "沟通",
    Execution: "执行",
    Data: "数据",
    Content: "内容",
    Operations: "运营",
    AI: "AI",
    "Problem-solving": "解决问题",
    "Problem Solving": "解决问题",
    Teamwork: "团队协作",
    "Learning Agility": "学习能力",
    Coordination: "组织协调",
    Responsibility: "责任心",
    Resilience: "抗压能力",
    "Logical Analysis": "逻辑分析",
    "Attention to Detail": "细节意识",
    "Result Orientation": "结果导向"
  };
  const directionAliases = {
    "Content / New Media": "内容 / 新媒体",
    "Marketing / Branding": "市场 / 品牌",
    Operations: "运营",
    Product: "产品",
    "Sales / Business Development": "销售 / 商务",
    "Data / Analytics": "数据 / 分析",
    "AI / Automation": "AI / 自动化",
    "HR / Administration": "人力 / 行政",
    Finance: "财务 / 金融",
    "Supply Chain / Manufacturing": "供应链 / 制造",
    "Consulting / Strategy": "咨询 / 战略",
    "Tech / Internet": "技术 / 互联网",
    "Education / Training": "教育 / 培训",
    "Design / Creative": "设计 / 创意",
    "软件开发": "Software Engineering",
    "数据分析": "Data Analytics",
    "人工智能 / 机器学习": "AI / Machine Learning",
    "人工智能/机器学习": "AI / Machine Learning",
    "网络安全": "Cybersecurity",
    "IT 支持": "IT Support",
    "工程技术": "Engineering",
    "科研 / 实验室": "Research / Lab",
    "科研/实验室": "Research / Lab",
    "质量 / 测试": "Quality / Testing",
    "质量/测试": "Quality / Testing",
    "医疗健康 / 生命科学": "Healthcare / Life Science",
    "医疗健康/生命科学": "Healthcare / Life Science",
    Other: "其他"
  };
  const mapped = { ...abilityAliases, ...directionAliases }[value];

  return mapped && allowedTags.includes(mapped) ? mapped : "";
}

function mergeExperiences(currentExperiences, importedExperiences) {
  const seen = new Set();

  return [...importedExperiences, ...currentExperiences].filter((experience) => {
    const key = [
      experience.title,
      experience.time,
      experience.type,
      experience.tags.join(" "),
      experience.directionTags.join(" "),
      experience.situation,
      experience.task,
      experience.action,
      experience.result
    ].join("|").toLowerCase();

    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function mergeImportedExperiences(currentExperiences, importedExperiences) {
  const existingIds = new Set(currentExperiences.map((experience) => experience.id));
  const normalizedImported = importedExperiences.map((experience) => {
    const nextExperience = { ...experience };

    if (!nextExperience.id || existingIds.has(nextExperience.id)) {
      nextExperience.id = createImportedExperienceId(existingIds);
    }

    existingIds.add(nextExperience.id);
    return nextExperience;
  });

  return [...currentExperiences, ...normalizedImported];
}

function createImportedExperienceId(existingIds) {
  let id = "";

  do {
    id = `imported-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  } while (existingIds.has(id));

  return id;
}

function askImportMode(importCount) {
  return new Promise((resolve) => {
    const backdrop = document.createElement("div");
    backdrop.className = "import-modal-backdrop";
    backdrop.innerHTML = `
      <div class="import-modal" role="dialog" aria-modal="true" aria-labelledby="importModeTitle">
        <h3 id="importModeTitle">${escapeHtml(statusText("importModeTitle"))}</h3>
        <p>${escapeHtml(statusText("importModeDescription", importCount))}</p>
        <div class="import-modal-actions">
          <button class="primary-button" type="button" data-import-mode="merge">${escapeHtml(statusText("mergeImport"))}</button>
          <button class="danger-button" type="button" data-import-mode="replace">${escapeHtml(statusText("replaceLocalData"))}</button>
          <button class="secondary-button" type="button" data-import-mode="cancel">${escapeHtml(statusText("cancel"))}</button>
        </div>
      </div>
    `;

    const close = (mode) => {
      backdrop.remove();
      resolve(mode === "cancel" ? null : mode);
    };

    backdrop.addEventListener("click", (event) => {
      const button = event.target.closest("[data-import-mode]");
      if (button) {
        close(button.dataset.importMode);
        return;
      }

      if (event.target === backdrop) {
        close(null);
      }
    });

    document.body.appendChild(backdrop);
  });
}

function normalizeImportedStats(parsedBackup) {
  if (!parsedBackup || Array.isArray(parsedBackup)) {
    return { stats: createEmptyStats(), hasAnalytics: false };
  }

  const rawAnalytics = parsedBackup.analytics || null;
  const rawStats = parsedBackup.stats || null;
  const hasAnalytics = Boolean(rawAnalytics || rawStats);

  if (rawAnalytics) {
    return {
      stats: sanitizeStats({
        analysisCount: rawAnalytics.jdAnalysisCount,
        outputCount: rawAnalytics.outputGenerationCount,
        copyCount: rawAnalytics.copyCount
      }),
      hasAnalytics: true
    };
  }

  if (rawStats) {
    return {
      stats: sanitizeStats({
        ...createEmptyStats(),
        ...(rawStats || {})
      }),
      hasAnalytics: true
    };
  }

  return { stats: createEmptyStats(), hasAnalytics: false };
}

function mergeStats(currentStats, importedStats) {
  const current = sanitizeStats(currentStats);
  const imported = sanitizeStats(importedStats);

  return {
    analysisCount: current.analysisCount + imported.analysisCount,
    outputCount: current.outputCount + imported.outputCount,
    copyCount: current.copyCount + imported.copyCount
  };
}

function sanitizeStats(stats) {
  const safeStats = { ...createEmptyStats(), ...(stats || {}) };

  return {
    analysisCount: Number(safeStats.analysisCount) || 0,
    outputCount: Number(safeStats.outputCount) || 0,
    copyCount: Number(safeStats.copyCount) || 0
  };
}

function hasLocalStats(stats) {
  const normalizedStats = sanitizeStats(stats);
  return normalizedStats.analysisCount > 0
    || normalizedStats.outputCount > 0
    || normalizedStats.copyCount > 0;
}

function setBackupStatus(message, isError = false) {
  backupStatus.textContent = message;
  backupStatus.classList.toggle("is-error", isError);
}

function clearLocalData() {
  const confirmed = window.confirm(statusText("clearLocalDataConfirm"));
  if (!confirmed) return;

  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(STATS_KEY);
  experiences = [];
  usageStats = createEmptyStats();
  form.reset();
  jobDescription.value = "";
  searchInput.value = "";
  typeFilter.value = "全部";
  directionFilter.value = "全部";
  abilityFilter.value = "全部";
  selectedImportFile = null;
  importDataInput.value = "";
  selectedImportFileName.textContent = INTERFACE_TEXT[getOutputLanguage()].noFileSelected;
  setStarGenerationStatus("");
  clearMatchResults(statusText("localDataCleared"));
  setBackupStatus(statusText("localDataCleared"));
  updateInterfaceLanguage();
  renderExperiences();
}

function updateStats(change) {
  usageStats.analysisCount += change.analysisCount || 0;
  usageStats.outputCount += change.outputCount || 0;
  usageStats.copyCount += change.copyCount || 0;

  saveStats();
}

function loadStats() {
  const saved = localStorage.getItem(STATS_KEY);
  if (!saved) return createEmptyStats();

  try {
    return sanitizeStats(JSON.parse(saved));
  } catch (error) {
    console.warn("Failed to load stats:", error);
    return createEmptyStats();
  }
}

function saveStats() {
  usageStats = sanitizeStats(usageStats);
  localStorage.setItem(STATS_KEY, JSON.stringify(usageStats));
}

function createEmptyStats() {
  return {
    analysisCount: 0,
    outputCount: 0,
    copyCount: 0
  };
}

function formatEnglishTags(tags) {
  const tagMap = {
    "沟通": "communication",
    "执行": "execution",
    "数据": "data analysis",
    "内容": "content",
    "运营": "operations",
    "AI": "AI",
    "解决问题": "problem-solving",
    "团队协作": "teamwork",
    "学习能力": "learning agility",
    "组织协调": "coordination",
    "责任心": "ownership",
    "抗压能力": "resilience under pressure",
    "逻辑分析": "logical analysis",
    "细节意识": "attention to detail",
    "结果导向": "result orientation"
  };

  const translated = tags.map((tag) => tagMap[tag] || tag);
  if (!translated.length) return "relevant professional";
  if (translated.length === 1) return translated[0];
  if (translated.length === 2) return `${translated[0]} and ${translated[1]}`;
  return `${translated.slice(0, -1).join(", ")}, and ${translated.at(-1)}`;
}

function lowercaseFirst(value) {
  const text = String(value).trim();
  if (!text) return "";
  return text.charAt(0).toLowerCase() + text.slice(1);
}

function loadExperiences() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return [];

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed)
      ? parsed.map(normalizeExperience).filter(isValidExperience)
      : [];
  } catch (error) {
    console.warn("Failed to load experiences:", error);
    return [];
  }
}

function saveExperiences() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(experiences));
}

function isValidExperience(experience) {
  return experience
    && typeof experience.title === "string"
    && typeof experience.time === "string"
    && ALL_EXPERIENCE_TYPES.includes(experience.type)
    && Array.isArray(experience.tags)
    && Array.isArray(experience.directionTags);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
