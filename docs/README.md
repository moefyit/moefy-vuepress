---
home: true
actionText: Get started!
actionLink: /#get-started
footer: MIT Licensed | Copyright © 2019-present SigureMo
---

# Get Started!

## vuepress-plugin-ribbon

<p align="center">
   <a href="https://www.npmjs.com/package/vuepress-plugin-ribbon" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-ribbon.svg"></a>
   <a href="https://github.com/SigureMo/vuepress-plugin-ribbon/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/SigureMo/vuepress-plugin-ribbon"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-ribbon" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dt/vuepress-plugin-ribbon.svg"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-ribbon" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dm/vuepress-plugin-ribbon.svg"></a>
   <a href="https://github.com/SigureMo/vuepress-plugin-ribbon/blob/master/LICENSE" target="_blank"><img alt="GitHub license" src="https://img.shields.io/github/license/SigureMo/vuepress-plugin-ribbon"></a>
</p>

[GitHub](https://github.com/SigureMo/vuepress-plugin-ribbon)

> :reminder_ribbon: Add a beautiful ribbon in your vuepress!

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

<p align="center">
   <a href="https://www.npmjs.com/package/vuepress-plugin-cursor-effects" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-cursor-effects.svg"></a>
   <a href="https://github.com/SigureMo/vuepress-plugin-cursor-effects/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/SigureMo/vuepress-plugin-cursor-effects"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-cursor-effects" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dt/vuepress-plugin-cursor-effects.svg"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-cursor-effects" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dm/vuepress-plugin-cursor-effects.svg"></a>
   <a href="https://github.com/SigureMo/vuepress-plugin-cursor-effects/blob/master/LICENSE" target="_blank"><img alt="GitHub license" src="https://img.shields.io/github/license/SigureMo/vuepress-plugin-cursor-effects"></a>
</p>

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

## Options

``` js
module.exports = {
  plugins: [
    [
      "cursor-effects",
      {
        size: 2,                    // size of the particle, default: 2
        shape: ['star'| 'circle'],  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ]
  ]
}
```

## vuepress-plugin-dynamic-title

<p align="center">
   <a href="https://www.npmjs.com/package/vuepress-plugin-dynamic-title" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-dynamic-title.svg"></a>
   <a href="https://github.com/SigureMo/vuepress-plugin-dynamic-title/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/SigureMo/vuepress-plugin-dynamic-title"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-dynamic-title" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dt/vuepress-plugin-dynamic-title.svg"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-dynamic-title" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dm/vuepress-plugin-dynamic-title.svg"></a>
   <a href="https://github.com/SigureMo/vuepress-plugin-dynamic-title/blob/master/LICENSE" target="_blank"><img alt="GitHub license" src="https://img.shields.io/github/license/SigureMo/vuepress-plugin-dynamic-title"></a>
</p>

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

## vuepress-plugin-go-top

<p align="center">
   <a href="https://www.npmjs.com/package/vuepress-plugin-go-top" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/vuepress-plugin-go-top.svg"></a>
   <a href="https://github.com/SigureMo/vuepress-plugin-go-top/stargazers" target="_blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/SigureMo/vuepress-plugin-go-top"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-go-top" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dt/vuepress-plugin-go-top.svg"></a>
   <a href="https://www.npmjs.com/package/vuepress-plugin-go-top" target="_blank"><img alt="downloads" src="https://img.shields.io/npm/dm/vuepress-plugin-go-top.svg"></a>
   <a href="https://github.com/SigureMo/vuepress-plugin-go-top/blob/master/LICENSE" target="_blank"><img alt="GitHub license" src="https://img.shields.io/github/license/SigureMo/vuepress-plugin-go-top"></a>
</p>

[GitHub](https://github.com/SigureMo/vuepress-plugin-go-top)

> :feet: Click such a lovely cat to back to top!

### Install

``` bash
yarn add vuepress-plugin-go-top -D
# or use npm
npm i vuepress-plugin-go-top -D
```

### Usage

``` javascript
module.exports = {
  plugins: ['go-top']
}
```

# Thanks

- [diygod.me](https://diygod.me/)
- [vuepress-reco](https://github.com/vuepress-reco)