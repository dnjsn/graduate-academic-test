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
    category: '入学 / 开局',
    prompt: '刚读研那阵，你对自己的期待更像：',
    options: [
      { id: 'A', label: '先把毕业搞明白', effects: effects({ submissionFatalism: 1 }) },
      { id: 'B', label: '先看看实验室到底怎么活', effects: effects({ topicInflation: 1, shortcutSmell: 1 }) },
      { id: 'C', label: '开题即诺奖', effects: effects({ topicInflation: 2, rhetoricStitching: 1 }) },
    ],
  },
  {
    id: 'q02',
    category: '入学 / 上课',
    prompt: '研究生上课上到后来，你觉得自己真正学会的是：',
    options: [
      { id: 'A', label: '先活下来，再谈学术理想', effects: effects({ submissionFatalism: 2, topicInflation: -1 }) },
      { id: 'B', label: '怎么少走弯路', effects: effects({ rhetoricStitching: 1, submissionFatalism: 1 }) },
      { id: 'C', label: '原来我真能顺手改变学科版图', effects: effects({ topicInflation: 2, advisorStress: 1 }) },
    ],
  },
  {
    id: 'q21',
    category: '入学 / 上课',
    prompt: '下面哪句最像你对研究生捷径的理解：',
    options: [
      { id: 'A', label: '没有捷径，只有积累', effects: effects({ shortcutSmell: 0 }) },
      { id: 'B', label: '别人的弯路就是我的直路', effects: effects({ shortcutSmell: 1 }) },
      { id: 'C', label: '能毕业的都是正路', effects: effects({ shortcutSmell: 2, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'q12',
    category: '师门 / 传承',
    prompt: '下面哪句话最像师兄师姐毕业前你的真实心声：',
    options: [
      { id: 'A', label: '这下该我独立了', effects: effects({ advisorStress: 0 }) },
      { id: 'B', label: '这下祖传模板没人管了', effects: effects({ advisorStress: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '求求了师姐你可以延毕吗', effects: effects({ advisorStress: 2, rhetoricStitching: 2 }) },
    ],
  },
  {
    id: 'q13',
    category: '师门 / 传承',
    prompt: '如果师姐明天答辩，下面哪句最像你今晚会说的话：',
    options: [
      { id: 'A', label: '再教我一遍我就会了', effects: effects({ advisorStress: 0 }) },
      { id: 'B', label: '你那个文件夹能不能别删', effects: effects({ advisorStress: 1, laborBurden: 1 }) },
      { id: 'C', label: '你走了我怎么办', effects: effects({ advisorStress: 2 }) },
    ],
  },
  {
    id: 'q14',
    category: '导师 / 日常',
    prompt: '下面哪句话最像你对导师的最终理解：',
    options: [
      { id: 'A', label: '导师是领路人', effects: effects({ advisorStress: 0 }) },
      { id: 'B', label: '导师是课题分发系统', effects: effects({ advisorStress: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '再祛魅就只剩排班表了', effects: effects({ advisorStress: 2, rhetoricStitching: 2 }) },
    ],
  },
  {
    id: 'q05',
    category: '选题 / 开题',
    prompt: '导师说“这个方向挺新，你可以深入做一下”时，你更可能：',
    options: [
      { id: 'A', label: '老板又在哪个公众号看到的', effects: effects({ rhetoricStitching: 0 }) },
      { id: 'B', label: '先看看别人到底做到哪了', effects: effects({ rhetoricStitching: 1, submissionFatalism: 1 }) },
      { id: 'C', label: '开题即诺奖', effects: effects({ rhetoricStitching: 2, significanceFixation: 1 }) },
    ],
  },
  {
    id: 'q03',
    category: '选题 / 开题',
    prompt: '选题做到一半时，你最怕看到的是：',
    options: [
      { id: 'A', label: '别人也在做', effects: effects({ advisorStress: 1, submissionFatalism: 1 }) },
      { id: 'B', label: '别人已经发了个低分版', effects: effects({ submissionFatalism: 1, shortcutSmell: 1 }) },
      { id: 'C', label: '完了课题被别人发了', effects: effects({ rhetoricStitching: 2 }) },
    ],
  },
  {
    id: 'q15',
    category: '导师 / 组会',
    prompt: '看到“老师又找我了”时，下面哪句最像你的内心弹幕：',
    options: [
      { id: 'A', label: '应该是正常沟通', effects: effects({ advisorStress: 0, topicInflation: 0 }) },
      { id: 'B', label: '先想我最近是不是又拖了点什么', effects: effects({ advisorStress: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '微信里有杀气', effects: effects({ advisorStress: 2, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'q06',
    category: '导师 / 组会',
    prompt: '组会前一晚，你最真实的工作重点通常是：',
    options: [
      { id: 'A', label: '补点内容', effects: effects({ laborBurden: 1 }) },
      { id: 'B', label: '再玩会手机，等会再说', effects: effects({ rhetoricStitching: 1, advisorStress: 1 }) },
      { id: 'C', label: '讲得像快发了', effects: effects({ rhetoricStitching: 2, advisorStress: 1 }) },
    ],
  },
  {
    id: 'q11',
    category: '汇报 / PPT',
    prompt: '导师明天就要 PPT 时，你更可能先做的是：',
    options: [
      { id: 'A', label: '把结果老老实实放上去', effects: effects({ rhetoricStitching: 0 }) },
      { id: 'B', label: '先把版式弄得像那么回事', effects: effects({ rhetoricStitching: 1 }) },
      { id: 'C', label: '图再补两张', effects: effects({ rhetoricStitching: 2, significanceFixation: 1 }) },
    ],
  },
  {
    id: 'q08',
    category: '实验 / 数据',
    prompt: '结果不显著时，下面哪句话最像你脑子里的自动回复：',
    options: [
      { id: 'A', label: '是我设计有问题', effects: effects({ significanceFixation: 0 }) },
      { id: 'B', label: '先换个角度看看', effects: effects({ significanceFixation: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '不要让实验数据影响实验结论', effects: effects({ significanceFixation: 2, rhetoricStitching: 2 }) },
    ],
  },
  {
    id: 'q09',
    category: '实验 / 数据',
    prompt: '你对统计学最真实的态度更接近：',
    options: [
      { id: 'A', label: '工具', effects: effects({ significanceFixation: 0 }) },
      { id: 'B', label: '手续', effects: effects({ significanceFixation: 1, laborBurden: 1 }) },
      { id: 'C', label: '只要结果出来，大家都会重新理解统计学', effects: effects({ significanceFixation: 2, shortcutSmell: 1 }) },
    ],
  },
  {
    id: 'q10',
    category: '实验 / 数据',
    prompt: '下面哪句最像边缘显著时期的你：',
    options: [
      { id: 'A', label: '不显著就是不显著', effects: effects({ significanceFixation: 0 }) },
      { id: 'B', label: '可以先说有趋势', effects: effects({ significanceFixation: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '这次真的快显著了', effects: effects({ significanceFixation: 2, rhetoricStitching: 1, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'q19',
    category: '实验 / 数据',
    prompt: '下面哪句话你最不方便公开承认，但最容易偷偷点头：',
    options: [
      { id: 'A', label: '能自己做实验还是自己做', effects: effects({ shortcutSmell: 0 }) },
      { id: 'B', label: '不要让数据影响到你的结果', effects: effects({ shortcutSmell: 1 }) },
      { id: 'C', label: '先毕业，方法以后再变高贵', effects: effects({ shortcutSmell: 2, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'q04',
    category: '写作 / 初稿',
    prompt: '引言实在写不下去时，你最可能：',
    options: [
      { id: 'A', label: '再读两篇就会了', effects: effects({ rhetoricStitching: 0, shortcutSmell: 0 }) },
      { id: 'B', label: '先搭个框架', effects: effects({ rhetoricStitching: 1 }) },
      { id: 'C', label: 'GPT启动啊', effects: effects({ rhetoricStitching: 2, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'q20',
    category: '写作 / 初稿',
    prompt: '初稿写完之后，你最先担心的是：',
    options: [
      { id: 'A', label: '逻辑顺不顺', effects: effects({ shortcutSmell: 0 }) },
      { id: 'B', label: '这稿子像不像人写的', effects: effects({ shortcutSmell: 1 }) },
      { id: 'C', label: 'AI味会不会太重', effects: effects({ shortcutSmell: 2, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'q07',
    category: '写作 / 检测',
    prompt: '下面哪句最像 2026 研究生的新型写作焦虑：',
    options: [
      { id: 'A', label: '查重过不过', effects: effects({ rhetoricStitching: 0 }) },
      { id: 'B', label: '盲审过不过', effects: effects({ rhetoricStitching: 1 }) },
      { id: 'C', label: 'AI率过不过', effects: effects({ rhetoricStitching: 2, significanceFixation: 1 }) },
    ],
  },
  {
    id: 'q16',
    category: '返修 / 投稿',
    prompt: '返修意见写着“创新性不足，机制不清”，你第一反应是：',
    options: [
      { id: 'A', label: '创新性要足你投这个刊？CNS了都', effects: effects({ submissionFatalism: 0 }) },
      { id: 'B', label: '再圆一圆，看看能不能补两张图', effects: effects({ rhetoricStitching: 1, submissionFatalism: 1 }) },
      { id: 'C', label: '先认错再回复', effects: effects({ advisorStress: 1, submissionFatalism: 2 }) },
    ],
  },
  {
    id: 'q17',
    category: '返修 / 投稿',
    prompt: '你对投稿这件事最深的理解是：',
    options: [
      { id: 'A', label: '选对期刊很重要', effects: effects({ submissionFatalism: 0 }) },
      { id: 'B', label: '先投着看看', effects: effects({ submissionFatalism: 1 }) },
      { id: 'C', label: '投稿本身就是命运的一部分', effects: effects({ submissionFatalism: 2, shortcutSmell: 1 }) },
    ],
  },
  {
    id: 'q18',
    category: '返修 / 投稿',
    prompt: '下面哪句最像你对拒稿的最终理解：',
    options: [
      { id: 'A', label: '修改后再战', effects: effects({ submissionFatalism: 0, laborBurden: 1 }) },
      { id: 'B', label: '建议转投', effects: effects({ submissionFatalism: 1, rhetoricStitching: 1 }) },
      { id: 'C', label: '总有刊能收', effects: effects({ submissionFatalism: 2 }) },
    ],
  },
  {
    id: 'hidden-authorship-trigger',
    category: '投稿 / 署名',
    prompt: '下面哪句最像你对作者排序的社会学理解：',
    options: [
      { id: 'A', label: '署名是贡献排序', effects: effects({ laborBurden: 0 }) },
      { id: 'B', label: '署名是团队协商', effects: effects({ laborBurden: 1, submissionFatalism: 1 }) },
      { id: 'C', label: '共一可以商量', effects: effects({ laborBurden: 2, submissionFatalism: 1 }) },
    ],
  },
  {
    id: 'q22',
    category: '盲审 / 答辩',
    prompt: '下面哪句最像你对盲审和答辩的终极理解：',
    options: [
      { id: 'A', label: '尽人事，听天命', effects: effects({ submissionFatalism: 0 }) },
      { id: 'B', label: '应该能过吧', effects: effects({ submissionFatalism: 1, advisorStress: 1 }) },
      { id: 'C', label: '有缘就能毕业', effects: effects({ submissionFatalism: 2, advisorStress: 1 }) },
    ],
  },
  {
    id: 'hidden-clinical-trigger',
    category: '毕业 / 收尾',
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
