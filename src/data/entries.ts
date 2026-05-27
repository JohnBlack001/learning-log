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
    id: 'codex-to-github-pages',
    title: '从 Codex 到 GitHub Pages 的学习日志上线流程',
    date: '2026-05-27',
    summary: '把本地学习日志网页创建、运行、上传到 GitHub，并配置 GitHub Pages 自动部署。',
    tags: ['Codex', 'Vite', 'GitHub Pages', 'Git'],
    points: [
      'Codex 可以在本地工作区读项目、改代码、运行构建命令，并协助完成 Git 提交和推送。',
      'npm.cmd run dev 会启动 Vite 本地开发服务器，把 React 和 TypeScript 源码临时编译给浏览器访问。',
      '127.0.0.1 代表本机，5173 是 Vite 开发服务监听的端口，所以这个地址只适合本地预览。',
      'npm.cmd run build 会生成 dist 静态文件，GitHub Pages 托管的就是这类构建后的网页资源。',
      'GitHub Actions 可以在每次推送 main 分支后自动安装依赖、构建项目，并把 dist 发布到 GitHub Pages。',
      'git push 如果连不上 GitHub，常见原因是命令行没有走代理，可以给 Git 配置 http.proxy 和 https.proxy。',
    ],
    reflection:
      '这次流程把“写网页、理解本地服务、使用 Git、上传 GitHub、配置自动部署”串成了一条完整链路。以后每天只要继续追加学习记录，再推送到 GitHub，就能让个人知识库持续更新。',
    nextActions: [
      '确认 GitHub Pages 的 Source 已设置为 GitHub Actions',
      '观察 Actions 是否部署成功',
      '用公开 Pages 地址访问学习日志网站',
      '每天把新学到的内容整理成一条新的学习记录',
    ],
  },
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
