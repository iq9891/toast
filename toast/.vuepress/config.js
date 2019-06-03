const base = process.env.GH ? '/toast/' : '/'

module.exports = {
  title: '提示框组件',
  base,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  dest: './docs',
  serviceWorker: true,
  themeConfig: {
    repo: 'fe6/toast',
    editLinks: false,
    searchMaxSuggestions: 5,
    docsDir: 'toast',
    editLinkText: '帮助我们改善此页面！',
    sidebar: [
      '/',
      '/wap/zh-cn',
    ]
  }
}
