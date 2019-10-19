---
home: true
actionText: Get started!
actionLink: /#get-started
footer: MIT Licensed | Copyright © 2019-present SigureMo
---

# Get Started!

## vuepress-plugin-ribbon

> :reminder_ribbon: Add a beautiful ribbon in your vuepress!

[GitHub](https://github.com/SigureMo/vuepress-plugin-ribbon)

### Install

``` bash
yarn add vuepress-plugin-ribbon -D
# or
npm i vuepress-plugin-ribbon -D
```

### Usage

``` javascript
module.exports = {
  plugins: ['ribbon']
}
```

### Options

``` js
module.exports = {
  plugins: [
    [
      "ribbon",
      {
        size: 90,     // width of the ribbon, default: 90
        opacity: 0.8, // opacity of the ribbon, default: 0.3
        zIndex: -1    // z-index property of the background, default: -1
      }
    ]
  ]
}
```

## vuepress-plugin-cursor-effects

[GitHub](https://github.com/SigureMo/vuepress-plugin-cursor-effects)

> :tada: Add a lovely cursor effects in your vuepress!

### Install

``` bash
yarn add vuepress-plugin-cursor-effects -D
# or use npm
npm i vuepress-plugin-cursor-effects -D
```

### Usage

``` javascript
module.exports = {
  plugins: ['cursor-effects']
}
```

## vuepress-plugin-dynamic-title

[GitHub](https://github.com/SigureMo/vuepress-plugin-dynamic-title)

> :eyes: Add a dynamic title in your vuepress!

### Install

``` bash
yarn add vuepress-plugin-dynamic-title -D
# or use npm
npm i vuepress-plugin-dynamic-title -D
```

### Usage

``` javascript
module.exports = {
  plugins: ['dynamic-title']
}
```

### Options

``` js
module.exports = {
  plugins: [
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
  ]
}
```

# Thanks

- [diygod.me](https://diygod.me/)
