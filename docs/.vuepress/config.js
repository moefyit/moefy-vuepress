const path = require('path')
const packages = [
  'ribbon',
  'cursor-effects',
  'dynamic-title',
  'go-top',
  'meting'
]

module.exports = {
  title: 'moefy-vuepress',
  description: 'Add some lovely plugins in your vuepress!',
  base: '/moefy-vuepress/',

  plugins: [
    // 彩带背景
    [
      'ribbon',
      {
        size: 90,
        opacity: 0.8,
        zIndex: -1
      }
    ],
    // 鼠标特效插件
    [
      'cursor-effects',
      {
        size: 1.75,
        shape: 'star'
      }
    ],
    // 离开页面标题变化
    [
      'dynamic-title',
      {
        showIcon: '/favicon.ico',
        showText: '(ฅ>ω<*ฅ)欢迎回来！',
        hideIcon: '/failure.ico',
        hideText: '( ๑ˊ•̥▵•)੭₎₎不要走呀！',
        recoverTime: 2000
      }
    ],
    // 悬挂小猫返回顶部
    ['go-top'],
    // Meting 插件
    [
      'meting',
      {
        meting: {
          server: 'netease',
          type: 'playlist',
          mid: '2539599584'
        },
        aplayer: {
          lrcType: 3
        }
      }
    ]
  ],

  themeConfig: {
    nav: [{ text: 'Home', link: '/' }],
    sidebarDepth: 1,
    sidebar: {
      '/': packages.map(package => `packages/${package}`)
    },
    repo: 'moefyit/moefy-vuepress',
    docsDir: 'docs',
    docsBranch: 'master'
  },

  // 作为插件的额外路由
  additionalPages: packages.map(package => {
    return {
      path: `/packages/${package}.html`,
      filePath: path.resolve(
        __dirname,
        `../../packages/vuepress-plugin-${package}/README.md`
      )
    }
  })
}
