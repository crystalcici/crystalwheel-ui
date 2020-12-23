# 开始使用

[安装](#/doc/install)组件库

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
