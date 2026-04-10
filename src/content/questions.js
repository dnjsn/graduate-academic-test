export const dimensionKeys = [
  'topicInflation',
  'rhetoricStitching',
  'significanceFixation',
  'advisorStress',
  'submissionFatalism',
  'laborBurden',
  'shortcutSmell',
];

function effects(values) {
  return values;
}

export const baseQuestions = [
  {
    id: 'q01',
    category: '课题野心',
    prompt: '导师说：“这个方向挺新，你可以深入做一下。”你更可能：',
    options: [
      { id: 'A', label: '先拆成一个能毕业的小题。', effects: effects({ submissionFatalism: 1 }) },
      { id: 'B', label: '先查查别人做到了哪一步。', effects: effects({ topicInflation: 1, shortcutSmell: 1 }) },
      { id: 'C', label: '正好顺手补上本领域关键空白。', effects: effects({ topicInflation: 2, rhetoricStitching: 1 }) },
    ],
  },
  {
    id: 'q02',
    category: '课题野心',
    prompt: '下面哪句更像你的学术信条：',
    options: [
      { id: 'A', label: '先毕业，再伟大。', effects: effects({ submissionFatalism: 2, topicInflation: -1 }) },
      { id: 'B', label: '先发出来，再优化。', effects: effects({ rhetoricStitching: 1, submissionFatalism: 1 }) },
      { id: 'C', label: '不造航母我读什么研。', effects: effects({ topicInflation: 2, advisorStress: 1 }) },
    ],
  },
  {
    id: 'q03',
    category: '课题野心',
    prompt: '你第一次读到一篇和自己课题高度相似、但分数不高的文章时：',
    options: [
      { id: 'A', label: '坏了，我是不是也只能发这个档次。', effects: effects({ advisorStress: 1, submissionFatalism: 1 }) },
      { id: 'B', label: '稳了，说明这条路至少有人走通。', effects: effects({ submissionFatalism: 1, shortcutSmell: 1 }) },
      { id: 'C', label: '太好了，终于有结构可以合理借鉴。', effects: effects({ rhetoricStitching: 2 }) },
    ],
  },
  {
    id: 'q04',
    category: '论文缝合',
    prompt: '引言实在写不下去时，你最可能：',
    options: [
      { id: 'A', label: '回去多读几篇原文，再重构逻辑。', effects: effects({ rhetoricStitching: 0, shortcutSmell: 0 }) },
      { id: 'B', label: '参考同领域文章的结构先搭骨架。', effects: effects({ rhetoricStitching: 1 }) },
      { id: 'C', label: '先把别人写过的话术借来撑住场面。', effects: effects({ rhetoricStitching: 2, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'q05',
    category: '论文缝合',
    prompt: '如果结果不够丰富，但讨论区还空着，你更像：',
    options: [
      { id: 'A', label: '宁可少写一点，也不想硬拉。', effects: effects({ rhetoricStitching: 0 }) },
      { id: 'B', label: '先把讨论写满，再决定图补不补。', effects: effects({ rhetoricStitching: 1, submissionFatalism: 1 }) },
      { id: 'C', label: '结果不够讨论来凑，结构先体面起来。', effects: effects({ rhetoricStitching: 2, significanceFixation: 1 }) },
    ],
  },
  {
    id: 'q06',
    category: '论文缝合',
    prompt: '组会前一晚，你最真实的工作重点通常是：',
    options: [
      { id: 'A', label: '补实验、补分析、补证据。', effects: effects({ laborBurden: 1 }) },
      { id: 'B', label: '调整 PPT，让逻辑先成立。', effects: effects({ rhetoricStitching: 1, advisorStress: 1 }) },
      { id: 'C', label: '想办法把现有内容讲得像阶段性突破。', effects: effects({ rhetoricStitching: 2, advisorStress: 1 }) },
    ],
  },
  {
    id: 'q07',
    category: '论文缝合',
    prompt: '别人夸你“很会写论文”时，你内心更接近：',
    options: [
      { id: 'A', label: '我只是尽量把研究说明白。', effects: effects({ rhetoricStitching: 0 }) },
      { id: 'B', label: '我比较会组织结构和讲故事。', effects: effects({ rhetoricStitching: 1 }) },
      { id: 'C', label: '有些事情，确实不能让原始结果直接说话。', effects: effects({ rhetoricStitching: 2, significanceFixation: 1 }) },
    ],
  },
  {
    id: 'q08',
    category: '数据与统计',
    prompt: '结果不显著时，你第一反应更像：',
    options: [
      { id: 'A', label: '接受现实，先回去查设计。', effects: effects({ significanceFixation: 0 }) },
      { id: 'B', label: '再换几种统计方法试试。', effects: effects({ significanceFixation: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '不要让实验数据影响实验结论。', effects: effects({ significanceFixation: 2, rhetoricStitching: 2 }) },
    ],
  },
  {
    id: 'q09',
    category: '数据与统计',
    prompt: '统计学对你来说更像：',
    options: [
      { id: 'A', label: '必须真正理解的一套工具。', effects: effects({ significanceFixation: 0 }) },
      { id: 'B', label: '在同门或老师帮助下过关的环节。', effects: effects({ significanceFixation: 1, laborBurden: 1 }) },
      { id: 'C', label: '结果出来之后再理解也不迟。', effects: effects({ significanceFixation: 2, shortcutSmell: 1 }) },
    ],
  },
  {
    id: 'q10',
    category: '数据与统计',
    prompt: '如果一个结果 p 值卡在 0.06 左右，你会：',
    options: [
      { id: 'A', label: '承认它不显著。', effects: effects({ significanceFixation: 0 }) },
      { id: 'B', label: '强调趋势，看看能不能放进补充材料。', effects: effects({ significanceFixation: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '这次真的快显著了，再找找角度。', effects: effects({ significanceFixation: 2, rhetoricStitching: 1, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'q11',
    category: '数据与统计',
    prompt: '画图这件事，在你手里更像：',
    options: [
      { id: 'A', label: '忠实展示结果。', effects: effects({ rhetoricStitching: 0 }) },
      { id: 'B', label: '优化可读性，让它更像论文图。', effects: effects({ rhetoricStitching: 1 }) },
      { id: 'C', label: '图再补两张，故事就立住了。', effects: effects({ rhetoricStitching: 2, significanceFixation: 1 }) },
    ],
  },
  {
    id: 'q12',
    category: '导师与组会',
    prompt: '导师在群里说“明天每个人讲讲最近进展”，你更像：',
    options: [
      { id: 'A', label: '真讲进展。', effects: effects({ advisorStress: 0 }) },
      { id: 'B', label: '讲看起来像进展的东西。', effects: effects({ advisorStress: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '讲一个能把现状包装成进展的叙事。', effects: effects({ advisorStress: 2, rhetoricStitching: 2 }) },
    ],
  },
  {
    id: 'q13',
    category: '导师与组会',
    prompt: '看到导师发来“来我办公室一下”时，你的第一反应是：',
    options: [
      { id: 'A', label: '应该是正常沟通。', effects: effects({ advisorStress: 0 }) },
      { id: 'B', label: '先快速回忆我最近做了什么。', effects: effects({ advisorStress: 1, laborBurden: 1 }) },
      { id: 'C', label: '微信里有杀气。', effects: effects({ advisorStress: 2 }) },
    ],
  },
  {
    id: 'q14',
    category: '导师与组会',
    prompt: '如果导师问“你这个现在做到哪一步了”，你更可能：',
    options: [
      { id: 'A', label: '实话实说。', effects: effects({ advisorStress: 0 }) },
      { id: 'B', label: '先说已经完成的部分，再讲困难。', effects: effects({ advisorStress: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '先把 PPT 里最像结果的那页翻出来。', effects: effects({ advisorStress: 2, rhetoricStitching: 2 }) },
    ],
  },
  {
    id: 'q15',
    category: '导师与组会',
    prompt: '组会后导师说“你这个还得再想想”，你更像：',
    options: [
      { id: 'A', label: '回去重新设计。', effects: effects({ advisorStress: 0, topicInflation: 0 }) },
      { id: 'B', label: '先想怎么把现有结果整理顺。', effects: effects({ advisorStress: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '先活过这周再说。', effects: effects({ advisorStress: 2, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'q16',
    category: '返修与投稿',
    prompt: '返修意见写着“创新性不足，机制不清”，你第一反应是：',
    options: [
      { id: 'A', label: '认了，这活确实还没到位。', effects: effects({ submissionFatalism: 0 }) },
      { id: 'B', label: '看看能不能补两张图把故事撑起来。', effects: effects({ rhetoricStitching: 1, submissionFatalism: 1 }) },
      { id: 'C', label: '先认错再回复，态度必须在线。', effects: effects({ advisorStress: 1, submissionFatalism: 2 }) },
    ],
  },
  {
    id: 'q17',
    category: '返修与投稿',
    prompt: '你面对投稿系统时，最像哪种心态：',
    options: [
      { id: 'A', label: '认真匹配期刊定位和文章质量。', effects: effects({ submissionFatalism: 0 }) },
      { id: 'B', label: '先投一个差不多的，看看命。', effects: effects({ submissionFatalism: 1 }) },
      { id: 'C', label: '投稿本身就是玄学的一部分。', effects: effects({ submissionFatalism: 2, shortcutSmell: 1 }) },
    ],
  },
  {
    id: 'q18',
    category: '返修与投稿',
    prompt: '被拒稿以后，你通常：',
    options: [
      { id: 'A', label: '冷静复盘，再慢慢改。', effects: effects({ submissionFatalism: 0, laborBurden: 1 }) },
      { id: 'B', label: '改一版就转投。', effects: effects({ submissionFatalism: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '总有刊能收，别把拒稿太当回事。', effects: effects({ submissionFatalism: 2 }) },
    ],
  },
  {
    id: 'q19',
    category: '医学捷径嗅觉',
    prompt: '医学研究生最熟悉的科研捷径，在你心里更像：',
    options: [
      { id: 'A', label: '能自己做实验还是自己做。', effects: effects({ shortcutSmell: 0 }) },
      { id: 'B', label: 'meta、回顾性、公共数据库都只是方法。', effects: effects({ shortcutSmell: 1 }) },
      { id: 'C', label: '先毕业，方法以后再变高贵。', effects: effects({ shortcutSmell: 2, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'q20',
    category: '医学捷径嗅觉',
    prompt: '听到别人建议“先做个系统综述吧”，你更像：',
    options: [
      { id: 'A', label: '综述不是不能做，但不能当万金油。', effects: effects({ shortcutSmell: 0 }) },
      { id: 'B', label: '可以先练手，顺便熟悉领域。', effects: effects({ shortcutSmell: 1 }) },
      { id: 'C', label: 'Meta包治百病。', effects: effects({ shortcutSmell: 2, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'q21',
    category: '医学捷径嗅觉',
    prompt: '当课题推进不顺时，你会不会冒出“先去公共库看看”的念头：',
    options: [
      { id: 'A', label: '基本不会。', effects: effects({ shortcutSmell: 0 }) },
      { id: 'B', label: '会，但只是作为备选。', effects: effects({ shortcutSmell: 1 }) },
      { id: 'C', label: 'GEO 里应该有。', effects: effects({ shortcutSmell: 2, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'q22',
    category: '科研命运感',
    prompt: '盲审前夜，你最真实的信念是：',
    options: [
      { id: 'A', label: '尽人事，剩下的交给结果。', effects: effects({ submissionFatalism: 0 }) },
      { id: 'B', label: '应该能过吧。', effects: effects({ submissionFatalism: 1, advisorStress: 1 }) },
      { id: 'C', label: '有缘就能毕业。', effects: effects({ submissionFatalism: 2, advisorStress: 1 }) },
    ],
  },
  {
    id: 'hidden-authorship-trigger',
    category: '科研命运感',
    prompt: '如果有人提议“这篇共一可以商量”，你第一反应是：',
    options: [
      { id: 'A', label: '先看真实贡献。', effects: effects({ laborBurden: 0 }) },
      { id: 'B', label: '可以商量，但得讲清楚。', effects: effects({ laborBurden: 1, submissionFatalism: 1 }) },
      { id: 'C', label: '共一可以商量。', effects: effects({ laborBurden: 2, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'hidden-clinical-trigger',
    category: '科研命运感',
    prompt: '白天规培/上班已经很累，晚上还得补论文时，你更像：',
    options: [
      { id: 'A', label: '很难，但还是尽量一点点推进。', effects: effects({ laborBurden: 1, advisorStress: 1 }) },
      { id: 'B', label: '先把最容易交差的部分做完。', effects: effects({ laborBurden: 1, submissionFatalism: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '答辩先别细问。', effects: effects({ advisorStress: 2, laborBurden: 1, submissionFatalism: 1 }) },
    ],
  },
];

export const hiddenQuestions = [
  {
    id: 'hidden-authorship-followup',
    category: '隐藏题',
    prompt: '真正写作者贡献声明时，你更可能：',
    options: [
      { id: 'A', label: '按事实逐项写清楚。', effects: effects({ laborBurden: 0 }) },
      { id: 'B', label: '尽量体面，让每个人都过得去。', effects: effects({ laborBurden: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '把空间艺术发挥到最大。', effects: effects({ laborBurden: 2, rhetoricStitching: 1, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'hidden-clinical-followup',
    category: '隐藏题',
    prompt: '如果答辩老师开始追问方法细节，你最希望发生的是：',
    options: [
      { id: 'A', label: '我能稳稳接住。', effects: effects({ advisorStress: 0 }) },
      { id: 'B', label: '老师们不要继续追这块。', effects: effects({ advisorStress: 1, submissionFatalism: 1 }) },
      { id: 'C', label: '时间到了，下一位。', effects: effects({ advisorStress: 2, submissionFatalism: 1, rhetoricStitching: 1 }) },
    ],
  },
];
