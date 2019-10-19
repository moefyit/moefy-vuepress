module.exports = {
  title: "vuepress-lovely-plugins",
  description: "Add some lovely plugins in your vuepress!",
  base: "/vuepress-lovely-plugins/",

  plugins: [
    [
      "ribbon",
      {
        size: 90,     // width of the ribbon, default: 90
        opacity: 0.8, // opacity of the ribbon, default: 0.3
        zIndex: 0     // z-index property of the background, default: -1
      }
    ],
    [
      'cursor-effects'
    ],
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ]
  ],

  themeConfig: {
    repo: "SigureMo/vuepress-lovely-plugins",
    docsDir: "docs",
    docsBranch: "master"
  }
};
