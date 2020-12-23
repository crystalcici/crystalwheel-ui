# 介绍

crystalUI 是一款基于 Vue 3 和 TypeScript 的 UI 组件库。

这款组件库是我为春招准备的

主要用于学习 Vue3,无其他用途

# 安装

打开终端运行以下命令

```
npm install crystalUI
```

# 开始使用


引入库的代码为

```
import {Button, Tabs, Switch, Dialog} from 'crystalUI'
```

现在可以使用我封装的组件库了。

## Vue 文件代码示例

代码示例:

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Tab, Switch, Dialog, openDialog} from "crystalUI"
export default {
  components: {Button}
}
</script>
```
