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
      { id: 'A', label: '先把它砍成一个我能按时毕业的小题，不然“深入”最后一般是我先没了。', effects: effects({ submissionFatalism: 1 }) },
      { id: 'B', label: '先去翻文献，看看前人到底是做出来了，还是死得比较体面。', effects: effects({ topicInflation: 1, shortcutSmell: 1 }) },
      { id: 'C', label: '正好，我来顺手补上本领域悬而未决的世纪空白。', effects: effects({ topicInflation: 2, rhetoricStitching: 1 }) },
    ],
  },
  {
    id: 'q02',
    category: '课题野心',
    prompt: '下面哪句更像你的学术信条：',
    options: [
      { id: 'A', label: '先顺利下岸，再考虑改变学界。', effects: effects({ submissionFatalism: 2, topicInflation: -1 }) },
      { id: 'B', label: '先把文章发出去，版本迭代也是一种科研美德。', effects: effects({ rhetoricStitching: 1, submissionFatalism: 1 }) },
      { id: 'C', label: '读研不碰点国家级命题，跟正常上班有什么区别。', effects: effects({ topicInflation: 2, advisorStress: 1 }) },
    ],
  },
  {
    id: 'q03',
    category: '课题野心',
    prompt: '你第一次读到一篇和自己课题高度相似、但分数不高的文章时：',
    options: [
      { id: 'A', label: '坏了，这不会就是我未来最体面的归宿吧。', effects: effects({ advisorStress: 1, submissionFatalism: 1 }) },
      { id: 'B', label: '稳了，说明这条路虽然寒酸，但起码能走通。', effects: effects({ submissionFatalism: 1, shortcutSmell: 1 }) },
      { id: 'C', label: '太好了，连结构模板都有人替我预热过了。', effects: effects({ rhetoricStitching: 2 }) },
    ],
  },
  {
    id: 'q04',
    category: '论文缝合',
    prompt: '引言实在写不下去时，你最可能：',
    options: [
      { id: 'A', label: '再去补几篇原文，假装一切还有救。', effects: effects({ rhetoricStitching: 0, shortcutSmell: 0 }) },
      { id: 'B', label: '先参考同领域成熟文章，把骨架搭出来再说。', effects: effects({ rhetoricStitching: 1 }) },
      { id: 'C', label: '先把别人已经说圆的话借来顶住逻辑真空。', effects: effects({ rhetoricStitching: 2, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'q05',
    category: '论文缝合',
    prompt: '如果结果不够丰富，但讨论区还空着，你更像：',
    options: [
      { id: 'A', label: '少写点就少写点，硬凑出来的体面也算工伤。', effects: effects({ rhetoricStitching: 0 }) },
      { id: 'B', label: '先把讨论区写热闹，再决定实验要不要补。', effects: effects({ rhetoricStitching: 1, submissionFatalism: 1 }) },
      { id: 'C', label: '结果负责出现，讨论负责升华，分工很明确。', effects: effects({ rhetoricStitching: 2, significanceFixation: 1 }) },
    ],
  },
  {
    id: 'q06',
    category: '论文缝合',
    prompt: '组会前一晚，你最真实的工作重点通常是：',
    options: [
      { id: 'A', label: '补实验、补分析、补那个本该上周就补的证据。', effects: effects({ laborBurden: 1 }) },
      { id: 'B', label: '先把 PPT 理顺，让现状看起来至少有方法感。', effects: effects({ rhetoricStitching: 1, advisorStress: 1 }) },
      { id: 'C', label: '想办法把现有内容讲出“阶段性重大突破”的气质。', effects: effects({ rhetoricStitching: 2, advisorStress: 1 }) },
    ],
  },
  {
    id: 'q07',
    category: '论文缝合',
    prompt: '别人夸你“很会写论文”时，你内心更接近：',
    options: [
      { id: 'A', label: '也没有，就是努力把灾情描述得比较有秩序。', effects: effects({ rhetoricStitching: 0 }) },
      { id: 'B', label: '我只是比较擅长让结构替结果承担一部分责任。', effects: effects({ rhetoricStitching: 1 }) },
      { id: 'C', label: '原始结果只是素材，真正发言的是叙事系统。', effects: effects({ rhetoricStitching: 2, significanceFixation: 1 }) },
    ],
  },
  {
    id: 'q08',
    category: '数据与统计',
    prompt: '结果不显著时，你第一反应更像：',
    options: [
      { id: 'A', label: '行吧，先怀疑设计，不急着怀疑宇宙。', effects: effects({ significanceFixation: 0 }) },
      { id: 'B', label: '再换几种分析法，说不定统计老师有别的理解。', effects: effects({ significanceFixation: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '数据表达得还不够懂事，结论可以先往前走一步。', effects: effects({ significanceFixation: 2, rhetoricStitching: 2 }) },
    ],
  },
  {
    id: 'q09',
    category: '数据与统计',
    prompt: '统计学对你来说更像：',
    options: [
      { id: 'A', label: '该懂还是得懂，不然以后会被方法部分反噬。', effects: effects({ significanceFixation: 0 }) },
      { id: 'B', label: '一门我负责尊重、同门负责拯救的学科。', effects: effects({ significanceFixation: 1, laborBurden: 1 }) },
      { id: 'C', label: '先把结果跑出来，理解属于发表后的个人修行。', effects: effects({ significanceFixation: 2, shortcutSmell: 1 }) },
    ],
  },
  {
    id: 'q10',
    category: '数据与统计',
    prompt: '如果一个结果 p 值卡在 0.06 左右，你会：',
    options: [
      { id: 'A', label: '接受它暂时没过线，只能说缘分差一点。', effects: effects({ significanceFixation: 0 }) },
      { id: 'B', label: '强调趋势，先把它体面地安置进补充材料。', effects: effects({ significanceFixation: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '这已经不是不显著，这是显著在路上堵车。', effects: effects({ significanceFixation: 2, rhetoricStitching: 1, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'q11',
    category: '数据与统计',
    prompt: '画图这件事，在你手里更像：',
    options: [
      { id: 'A', label: '如实汇报结果，不额外参与文学创作。', effects: effects({ rhetoricStitching: 0 }) },
      { id: 'B', label: '优化可读性，让图先具备“像论文”的职业素养。', effects: effects({ rhetoricStitching: 1 }) },
      { id: 'C', label: '图只要补到位，故事自己会从图例里长出来。', effects: effects({ rhetoricStitching: 2, significanceFixation: 1 }) },
    ],
  },
  {
    id: 'q12',
    category: '导师与组会',
    prompt: '导师在群里说“明天每个人讲讲最近进展”，你更像：',
    options: [
      { id: 'A', label: '真讲进展，哪怕进展的核心是“还在推进”。', effects: effects({ advisorStress: 0 }) },
      { id: 'B', label: '讲那些最像进展的部分，别的部分先战略模糊。', effects: effects({ advisorStress: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '用一个完整叙事，把停滞阶段包装成路径探索。', effects: effects({ advisorStress: 2, rhetoricStitching: 2 }) },
    ],
  },
  {
    id: 'q13',
    category: '导师与组会',
    prompt: '看到导师发来“来我办公室一下”时，你的第一反应是：',
    options: [
      { id: 'A', label: '应该是沟通问题，但心率还是会先沟通我一下。', effects: effects({ advisorStress: 0 }) },
      { id: 'B', label: '先极速回忆最近有没有哪件事值得当场解释。', effects: effects({ advisorStress: 1, laborBurden: 1 }) },
      { id: 'C', label: '微信里没有标点，但每个字都带着杀气。', effects: effects({ advisorStress: 2 }) },
    ],
  },
  {
    id: 'q14',
    category: '导师与组会',
    prompt: '如果导师问“你这个现在做到哪一步了”，你更可能：',
    options: [
      { id: 'A', label: '如实作答，把“做到哪一步”精确到令人心酸。', effects: effects({ advisorStress: 0 }) },
      { id: 'B', label: '先说已完成部分，再把困难包装成下一阶段计划。', effects: effects({ advisorStress: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '先翻出 PPT 里最像结果的那一页争取主动权。', effects: effects({ advisorStress: 2, rhetoricStitching: 2 }) },
    ],
  },
  {
    id: 'q15',
    category: '导师与组会',
    prompt: '组会后导师说“你这个还得再想想”，你更像：',
    options: [
      { id: 'A', label: '回去重做设计，尊重这句中文的重量。', effects: effects({ advisorStress: 0, topicInflation: 0 }) },
      { id: 'B', label: '先想办法把现有结果重新排布得更像一个思路。', effects: effects({ advisorStress: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '先活过这周，思想工作下周再正式启动。', effects: effects({ advisorStress: 2, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'q16',
    category: '返修与投稿',
    prompt: '返修意见写着“创新性不足，机制不清”，你第一反应是：',
    options: [
      { id: 'A', label: '认了，这句话虽然难听，但大概率没冤枉我。', effects: effects({ submissionFatalism: 0 }) },
      { id: 'B', label: '看看能不能补两张图，让故事先拥有骨气。', effects: effects({ rhetoricStitching: 1, submissionFatalism: 1 }) },
      { id: 'C', label: '先真诚道歉，科学问题未必能解决，态度问题必须解决。', effects: effects({ advisorStress: 1, submissionFatalism: 2 }) },
    ],
  },
  {
    id: 'q17',
    category: '返修与投稿',
    prompt: '你面对投稿系统时，最像哪种心态：',
    options: [
      { id: 'A', label: '认真匹配期刊定位，尽量别让自己死得太没必要。', effects: effects({ submissionFatalism: 0 }) },
      { id: 'B', label: '先投个差不多的，看看命运系统怎么给号。', effects: effects({ submissionFatalism: 1 }) },
      { id: 'C', label: '投稿不是流程，是我与宇宙编辑部之间的宗教互动。', effects: effects({ submissionFatalism: 2, shortcutSmell: 1 }) },
    ],
  },
  {
    id: 'q18',
    category: '返修与投稿',
    prompt: '被拒稿以后，你通常：',
    options: [
      { id: 'A', label: '先复盘，再安静修改，像一个受过教育的人。', effects: effects({ submissionFatalism: 0, laborBurden: 1 }) },
      { id: 'B', label: '改一版就转投，争取把情绪损耗压缩到最短。', effects: effects({ submissionFatalism: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '总有刊能收，拒稿只是编辑部替我筛选缘分。', effects: effects({ submissionFatalism: 2 }) },
    ],
  },
  {
    id: 'q19',
    category: '医学捷径嗅觉',
    prompt: '医学研究生最熟悉的科研捷径，在你心里更像：',
    options: [
      { id: 'A', label: '条件允许还是自己做，免得以后方法学追着我跑。', effects: effects({ shortcutSmell: 0 }) },
      { id: 'B', label: 'meta、回顾性、公共数据库本来就是工具，看谁用得体面。', effects: effects({ shortcutSmell: 1 }) },
      { id: 'C', label: '先毕业才是第一性原理，方法高贵可以以后再补。', effects: effects({ shortcutSmell: 2, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'q20',
    category: '医学捷径嗅觉',
    prompt: '听到别人建议“先做个系统综述吧”，你更像：',
    options: [
      { id: 'A', label: '综述可以做，但不能一不顺就把它当逃生舱。', effects: effects({ shortcutSmell: 0 }) },
      { id: 'B', label: '先做来练手也行，至少能熟悉一下这片江湖。', effects: effects({ shortcutSmell: 1 }) },
      { id: 'C', label: '当命运关上一扇实验室的门，Meta 会替你打开窗。', effects: effects({ shortcutSmell: 2, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'q21',
    category: '医学捷径嗅觉',
    prompt: '当课题推进不顺时，你会不会冒出“先去公共库看看”的念头：',
    options: [
      { id: 'A', label: '会想到，但我会先假装自己还想再挣扎一下。', effects: effects({ shortcutSmell: 0 }) },
      { id: 'B', label: '会，当作 Plan B，毕竟科研也需要应急出口。', effects: effects({ shortcutSmell: 1 }) },
      { id: 'C', label: '先别急着绝望，GEO 和 TCGA 未必没有我的明天。', effects: effects({ shortcutSmell: 2, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'hidden-authorship-trigger',
    category: '科研命运感',
    prompt: '下面哪句最像你对作者排序的社会学理解：',
    options: [
      { id: 'A', label: '署名是贡献排序', effects: effects({ laborBurden: 0 }) },
      { id: 'B', label: '署名是团队协商', effects: effects({ laborBurden: 1, submissionFatalism: 1 }) },
      { id: 'C', label: '共一可以商量', effects: effects({ laborBurden: 2, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'q22',
    category: '科研命运感',
    prompt: '盲审前夜，你最真实的信念是：',
    options: [
      { id: 'A', label: '能做的都做了，剩下的交给系统随机数。', effects: effects({ submissionFatalism: 0 }) },
      { id: 'B', label: '应该能过吧，至少从目录上看还是个人类作品。', effects: effects({ submissionFatalism: 1, advisorStress: 1 }) },
      { id: 'C', label: '有缘自会毕业，无缘方法部分也不会放过我。', effects: effects({ submissionFatalism: 2, advisorStress: 1 }) },
    ],
  },
  {
    id: 'hidden-clinical-trigger',
    category: '科研命运感',
    prompt: '白天规培/上班已经很累，晚上还得补论文时，你最常安慰自己：',
    options: [
      { id: 'A', label: '一点点推进总能补上', effects: effects({ laborBurden: 1, advisorStress: 1 }) },
      { id: 'B', label: '先把最容易交差的部分做完', effects: effects({ laborBurden: 1, submissionFatalism: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '答辩先别细问', effects: effects({ advisorStress: 2, laborBurden: 1, submissionFatalism: 1 }) },
    ],
  },
];

export const hiddenQuestions = [
  {
    id: 'hidden-authorship-followup',
    category: '隐藏题',
    prompt: '真到写贡献声明的时候，你更可能：',
    options: [
      { id: 'A', label: '按事实逐项写清楚', effects: effects({ laborBurden: 0 }) },
      { id: 'B', label: '尽量体面，让每个人都过得去', effects: effects({ laborBurden: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '把空间艺术发挥到最大', effects: effects({ laborBurden: 2, rhetoricStitching: 1, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'hidden-clinical-followup',
    category: '隐藏题',
    prompt: '如果答辩老师开始追问方法细节，你最希望出现的是：',
    options: [
      { id: 'A', label: '我能稳稳接住', effects: effects({ advisorStress: 0 }) },
      { id: 'B', label: '老师们别继续追这块', effects: effects({ advisorStress: 1, submissionFatalism: 1 }) },
      { id: 'C', label: '时间到了，下一位', effects: effects({ advisorStress: 2, submissionFatalism: 1, rhetoricStitching: 1 }) },
    ],
  },
];
