module.exports = {
  title: "vuepress-lovely-plugins",
  description: "Add some lovely plugins in your vuepress!",
  base: "/vuepress-lovely-plugins/",

  plugins: [
    // 彩带背景
    [
      "ribbon",
      {
        size: 90,
        opacity: 0.8,
        zIndex: -1,
      },
    ],
    // 鼠标特效插件
    [
      "cursor-effects",
      {
        size: 1.75,
        shape: "star",
      },
    ],
    // 离开页面标题变化
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(ฅ>ω<*ฅ)欢迎回来！",
        hideIcon: "/failure.ico",
        hideText: "( ๑ˊ•̥▵•)੭₎₎不要走呀！",
        recoverTime: 2000,
      },
    ],
    // 悬挂小猫返回顶部
    ["go-top"],
    // Meting 插件
    [
      "meting",
      {
        meting: {
          server: "netease",
          type: "playlist",
          mid: "2539599584",
        },
        aplayer: {
          lrcType: 3,
        },
      },
    ],
  ],

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Packages", link: "/packages" }
    ],
    sidebarDepth: 1,
    sidebar: {
      "/": [
        "",
        "packages/ribbon",
        "packages/go-top",
        "packages/dynamic-title",
        "packages/cursor-effects",
        "packages/meting"
      ]
    },
    repo: "SigureMo/vuepress-lovely-plugins",
    docsDir: "docs",
    docsBranch: "master"
  }
};
