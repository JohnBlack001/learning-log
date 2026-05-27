export type LearningEntry = {
  id: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  points: string[];
  reflection: string;
  nextActions: string[];
};

export const entries: LearningEntry[] = [
  {
    id: 'codex-github-workflow',
    title: '熟悉 Codex 与 GitHub 工作流',
    date: '2026-05-27',
    summary: '了解 Codex 的本地工作区能力、GitHub 连接器能力，以及如何把学习内容沉淀成网页。',
    tags: ['Codex', 'GitHub', 'Workflow'],
    points: [
      'Codex 可以读取本地工作区、分析项目结构、修改文件并运行验证命令。',
      'GitHub 连接器可以读取仓库、查看 PR、审查 diff，写入操作需要明确授权。',
      '学习日志网站适合先本地跑通，再推送到 GitHub 并开启 GitHub Pages。',
    ],
    reflection: '先把每日学习记录结构化，后续复盘和检索会更轻松，也能自然形成个人知识库。',
    nextActions: ['创建学习日志网页第一版', '准备一个 GitHub 仓库', '把每日学习内容追加到数据文件'],
  },
  {
    id: 'project-boundaries',
    title: '给 AI 编程助手设定任务边界',
    date: '2026-05-26',
    summary: '明确目标、修改范围、验收标准，可以让 Codex 更稳定地完成开发任务。',
    tags: ['Prompt', 'Engineering'],
    points: [
      '先要求分析相关文件和函数，再确认修改方案。',
      '说明哪些文件可以动、哪些不能动，能减少无关改动。',
      '验收方式最好具体到命令，例如 npm build、单元测试或页面预览。',
    ],
    reflection: '越像给同事派任务，Codex 的执行结果越容易符合预期。',
    nextActions: ['沉淀常用提示词模板', '为项目补充 AGENTS.md 规则'],
  },
];
