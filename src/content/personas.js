export const personas = [
  {
    id: 'discussion-fills-the-gap',
    title: '叙事代偿型研究者',
    subtitle: '结果欠奉，结构自救',
    vector: {
      topicInflation: 2,
      rhetoricStitching: 10,
      significanceFixation: 5,
      advisorStress: 4,
      submissionFatalism: 4,
      laborBurden: 3,
      shortcutSmell: 2,
    },
    journalPool: ['Rubbish Communications', 'Rubbish Methods'],
    verdictPool: ['With Editor', 'Minor Revision'],
    blurb:
      '你不是不会科研，你只是更擅长让零散材料拥有结构、让普通图表看起来像阶段性突破。别人还在补实验，你已经开始替结果找讨论、替讨论找语气、替语气找一份看起来很稳的段落过渡。',
    reviewSnippets: [
      '文章结构完整，叙事高于结果，建议补充两张更忙的图后继续处理。',
      '讨论部分想象力充足，结果部分建议再给一点证据撑腰。',
    ],
    systemNote: '你的问题不是不会写，是太会把没写完的东西写得像快写完了。',
  },
  {
    id: 'nobel-at-proposal',
    title: '课题膨胀型幻想患者',
    subtitle: '选题超出培养计划',
    vector: {
      topicInflation: 10,
      rhetoricStitching: 4,
      significanceFixation: 2,
      advisorStress: 5,
      submissionFatalism: 2,
      laborBurden: 5,
      shortcutSmell: 1,
    },
    journalPool: ['Rubbish', 'Rubbish Communications'],
    verdictPool: ['Rejected in Current Form', 'With Editor'],
    blurb:
      '别人读研的目标是毕业，你读研的目标像是顺便改写一个领域。你的课题在立项阶段就已经表现出强烈的顶刊幻觉，规模、野心和工作量全面脱离培养计划，极其适合在开题会上给所有人制造沉默。',
    reviewSnippets: [
      '选题雄心可嘉，但当前稿件更像项目申请书而非可执行研究。',
      '建议缩小问题边界，否则作者可能先于课题自然毕业。',
    ],
    systemNote: '系统检测到你做题时一直在默认自己还有十条命。',
  },
  {
    id: 'almost-significant',
    title: '边缘显著性信徒',
    subtitle: '趋势已现，现实未批',
    vector: {
      topicInflation: 2,
      rhetoricStitching: 6,
      significanceFixation: 10,
      advisorStress: 5,
      submissionFatalism: 5,
      laborBurden: 2,
      shortcutSmell: 2,
    },
    journalPool: ['Rubbish Methods', 'Rubbish Medicine'],
    verdictPool: ['Major Revision', 'Minor Revision'],
    blurb:
      '你对学术世界最稳定的信仰不是理论、方法或问题意识，而是“这次真的快显著了”。你会给结果第二次机会、第三种算法、第四种图形表达方式，因为你始终觉得真相和 p 值之间只差一次合适的处理。',
    reviewSnippets: [
      '结果趋势可见，但目前仍主要依赖作者的信念支撑。',
      '建议作者重新界定主要结局指标，而不是重新界定现实。',
    ],
    systemNote: '请停止在讨论部分反复使用“呈现上升趋势”这类自我安慰性语句。',
  },
  {
    id: 'sounds-like-accepted-soon',
    title: '汇报表演型推进人格',
    subtitle: '阶段性成果可汇报',
    vector: {
      topicInflation: 3,
      rhetoricStitching: 9,
      significanceFixation: 4,
      advisorStress: 9,
      submissionFatalism: 4,
      laborBurden: 3,
      shortcutSmell: 2,
    },
    journalPool: ['Rubbish Communications', 'Rubbish Mental Health'],
    verdictPool: ['Minor Revision', 'With Editor'],
    blurb:
      '你最擅长的不是推进实验，而是保证每次组会都能让现状听起来不像停滞。你理解学术汇报的本质是一门表演艺术：背景、逻辑、阶段性进展、后续计划，一个都不能少，哪怕真正有数据的那页只有一张。',
    reviewSnippets: [
      '叙事成熟，故事流畅，建议补充与演讲同等成熟度的原始结果。',
      '作者展示能力出众，数据完成度建议尽快追平。',
    ],
    systemNote: '你不是在汇报进展，你是在维持一种“课题仍有未来”的集体幻觉。',
  },
  {
    id: 'meta-cures-all',
    title: '证据拼接型生存者',
    subtitle: '建议补充亚组分析',
    vector: {
      topicInflation: 2,
      rhetoricStitching: 5,
      significanceFixation: 3,
      advisorStress: 3,
      submissionFatalism: 6,
      laborBurden: 2,
      shortcutSmell: 10,
    },
    journalPool: ['Rubbish Reviews', 'Rubbish Medicine'],
    verdictPool: ['Major Revision', 'With Editor'],
    blurb:
      '你相信医学世界里没有什么问题是一次检索、两轮筛选和三张森林图解决不了的。如果有，那就加亚组分析、敏感性分析和发表偏倚检验。你不是偷懒，你只是极其懂得哪条路更有毕业友好度。',
    reviewSnippets: [
      '建议增加亚组分析，以便作者继续从有限数据中寻找无限希望。',
      '纳入标准尚可，讨论部分对异质性的安抚作用尤其突出。',
    ],
    systemNote: '系统建议你在森林图里寻找的不只是效应量，还有精神寄托。',
  },
  {
    id: 'check-public-database-first',
    title: '数据库迁徙型研究者',
    subtitle: '数据来源符合要求',
    vector: {
      topicInflation: 2,
      rhetoricStitching: 4,
      significanceFixation: 3,
      advisorStress: 3,
      submissionFatalism: 5,
      laborBurden: 2,
      shortcutSmell: 9,
    },
    journalPool: ['Rubbish Reports', 'Rubbish Bioinformatics'],
    verdictPool: ['With Editor', 'Minor Revision'],
    blurb:
      '你对 GEO、TCGA 和各种公共数据库的熟悉程度，已经接近一种野外求生技能。别人还在想怎么收样本，你已经在数据仓库里挖出三篇备选毕业路径。你不是没有实验理想，你只是对“先活下来”有更清醒的理解。',
    reviewSnippets: [
      '数据来源规范，作者对下载、过滤与重复利用流程表现熟练。',
      '建议作者补充一点“为什么又是公共数据库”的自我说明。',
    ],
    systemNote: '一遇到阻力你就会下意识问一句：这个东西公共库里真的没有吗？',
  },
  {
    id: 'teacher-is-looking-for-me',
    title: '导师应激型生物',
    subtitle: '请尽快来办公室',
    vector: {
      topicInflation: 2,
      rhetoricStitching: 5,
      significanceFixation: 2,
      advisorStress: 10,
      submissionFatalism: 5,
      laborBurden: 5,
      shortcutSmell: 1,
    },
    journalPool: ['Rubbish Mental Health', 'Rubbish Communications'],
    verdictPool: ['With Editor', 'Major Revision'],
    blurb:
      '你最大的研究能力，不是方法学或写作，而是从一句微信里感知天气变化。你知道哪一句“有空来一下”意味着正常沟通，哪一句意味着 PPT 第三页今晚必须消失。你不是胆小，你只是长期处在高压系统中，已经进化出研究生特有的情绪雷达。',
    reviewSnippets: [
      '作者情绪管理能力出色，建议减少对即时通讯软件的条件反射。',
      '稿件焦虑密度较高，但符合本刊栏目定位。',
    ],
    systemNote: '你对导师消息的反应速度，已经超过了很多实验本身的响应速度。',
  },
  {
    id: 'apologize-before-reply',
    title: '返修顺从型文本机器',
    subtitle: '请逐条回复意见',
    vector: {
      topicInflation: 1,
      rhetoricStitching: 5,
      significanceFixation: 3,
      advisorStress: 5,
      submissionFatalism: 9,
      laborBurden: 4,
      shortcutSmell: 2,
    },
    journalPool: ['Rubbish Communications', 'Rubbish Revision Research'],
    verdictPool: ['Major Revision', 'Minor Revision'],
    blurb:
      '你并不是特别享受返修，但你非常懂返修的礼仪：先感谢、再道歉、再承认不足、再温柔地解释为什么这次不能完全照做。你的人生已经被逐条回复训练成一种高礼貌、低睡眠、强执行的文字机器。',
    reviewSnippets: [
      '作者态度端正，回复礼貌，建议下次连数据也一起端正。',
      '逐条回复质量较高，稿件本体仍有继续教育空间。',
    ],
    systemNote: '你最像的不是研究者，是一个凌晨两点还在维护学术体面的人。',
  },
  {
    id: 'submit-and-see',
    title: '概率型投稿生物',
    subtitle: '先投，再由系统教育',
    vector: {
      topicInflation: 2,
      rhetoricStitching: 4,
      significanceFixation: 3,
      advisorStress: 4,
      submissionFatalism: 10,
      laborBurden: 2,
      shortcutSmell: 3,
    },
    journalPool: ['Rubbish Reports', 'Rubbish Communications'],
    verdictPool: ['With Editor', 'Major Revision'],
    blurb:
      '你对投稿生态的核心理解就是：很多事情不投进去，谁也不知道会发生什么。你并不总是盲目，你只是非常接受学术系统的概率性质。先投着看看，不是敷衍，而是你在不确定世界里最朴素也最实用的生存哲学。',
    reviewSnippets: [
      '稿件命运感强于控制感，适合进入本刊常规随机旅程。',
      '作者对投稿系统持开放态度，系统也将回以开放性的命运安排。',
    ],
    systemNote: '你早就明白了：投稿这件事，策略只能负责一半，剩下一半看命。',
  },
  {
    id: 'i-do-the-work-you-take-the-name',
    title: '高劳工密度研究生',
    subtitle: '已确认贡献',
    vector: {
      topicInflation: 1,
      rhetoricStitching: 3,
      significanceFixation: 2,
      advisorStress: 7,
      submissionFatalism: 4,
      laborBurden: 10,
      shortcutSmell: 1,
    },
    journalPool: ['Rubbish Reports', 'Rubbish Labor & Authorship'],
    verdictPool: ['Transferred to Rubbish Reports', 'With Editor'],
    blurb:
      '你是组里最常见也最坚韧的存在：活都干了，格式也改了，图也画了，数据也补了，最后署名顺序像彩票开奖。你不是不会争，只是很多时候连争都被安排在完成全部脏活之后。你身上有研究生体系里最稳定的劳工气息。',
    reviewSnippets: [
      '作者贡献广泛，署名存在一定哲学讨论空间。',
      '稿件劳动密度极高，建议系统向作者补发至少一点精神抚慰。',
    ],
    systemNote: '系统已确认：这篇里最累的那个人，大概率就是你。',
  },
  {
    id: 'submit-first-think-later',
    title: '转投游牧型作者',
    subtitle: '建议转投',
    vector: {
      topicInflation: 2,
      rhetoricStitching: 5,
      significanceFixation: 4,
      advisorStress: 4,
      submissionFatalism: 8,
      laborBurden: 2,
      shortcutSmell: 3,
    },
    journalPool: ['Rubbish Communications', 'Rubbish Reports'],
    verdictPool: ['Transferred to Rubbish Reports', 'Rejected in Current Form'],
    blurb:
      '你的人生方法论是先把稿子投出去，再慢慢接受现实。你不一定不认真，只是你深知很多问题只有在“被系统正式拒绝以后”才会显得足够具体。你和投稿系统的关系，不是严谨匹配，而是互相试探。',
    reviewSnippets: [
      '稿件方向尚可，但与本刊定位仅存在一种友好的误会。',
      '建议转投更能理解作者当前精神状态的刊物。',
    ],
    systemNote: '你不是不知道要选刊，你只是觉得很多事情不被拒一次就学不会。',
  },
  {
    id: 'some-journal-will-take-it',
    title: '持续爬行型学术生命体',
    subtitle: '当前版本不予接收，但仍具迁徙能力',
    vector: {
      topicInflation: 1,
      rhetoricStitching: 4,
      significanceFixation: 3,
      advisorStress: 3,
      submissionFatalism: 9,
      laborBurden: 3,
      shortcutSmell: 4,
    },
    journalPool: ['Rubbish Reports', 'Rubbish'],
    verdictPool: ['Rejected in Current Form', 'Transferred to Rubbish Reports'],
    blurb:
      '你对学术系统最深的认识，不是它有多高贵，而是它总会在某个角落留一条缝。你能被拒、被拖、被转投，但你很难真正停下。你已经不太相信完美投稿，却高度相信持续爬行的价值。',
    reviewSnippets: [
      '当前版本不宜接收，但作者表现出可持续投稿能力。',
      '稿件完成度一般，求生欲完成度极高。',
    ],
    systemNote: '你最像的不是某个学术人格，而是一种很难被彻底退稿的人类韧性。',
  },
];

export const hiddenPersonas = [
  {
    id: 'lucky-graduate',
    title: '命硬型毕业候选人',
    subtitle: '已获优先处理',
    journalPool: ['Rubbish Communications', 'Rubbish Reports'],
    verdictPool: ['Priority Handling', 'Minor Revision'],
    blurb:
      '你的方法未必最强，准备未必最细，但命是真的硬。你不是全靠运气，只是很多节点都恰好踩在系统还愿意放你一马的缝隙上。',
    reviewSnippets: [
      '稿件存在若干现实问题，但运势表现突出。',
    ],
    systemNote: '系统无法证明你为什么能过，但系统尊重这种结果。',
    matches({ answers, profile }) {
      return (
        answers.q22 === 'C' &&
        (profile.submissionFatalism || 0) >= 7 &&
        (profile.topicInflation || 0) <= 4
      );
    },
  },
  {
    id: 'co-first-is-negotiable',
    title: '署名弹性调节者',
    subtitle: '贡献声明待更新',
    journalPool: ['Rubbish Communications', 'Rubbish Labor & Authorship'],
    verdictPool: ['With Editor', 'Minor Revision'],
    blurb:
      '你最懂的未必是科研，但你很懂贡献声明里的空间艺术。你知道哪些词能让每个人都保住体面，也知道如何在事实、关系和投稿需要之间找到一种微妙平衡。',
    reviewSnippets: [
      '作者贡献描述富有创造性，建议统一语气后再次提交。',
    ],
    systemNote: '系统已检测到你对作者排序问题表现出极强的语义可塑性。',
    matches({ answers }) {
      return answers['hidden-authorship-followup'] === 'C';
    },
  },
  {
    id: 'dont-ask-during-defense',
    title: '现场追问回避体质',
    subtitle: '当前不在服务区',
    journalPool: ['Rubbish Medicine', 'Rubbish Mental Health'],
    verdictPool: ['With Editor', 'Major Revision'],
    blurb:
      '你不是完全没有准备，你只是希望所有关键追问都能刚好错过你。你的研究生求生智慧主要体现在：先过眼前这关，细节以后再补，解释以后再想，尊严以后再捡。',
    reviewSnippets: [
      '稿件阶段性可读，但方法学区域建议避免现场追问。',
    ],
    systemNote: '系统建议在被点名之前优先保持呼吸稳定。',
    matches({ answers }) {
      return answers['hidden-clinical-followup'] === 'C';
    },
  },
];
