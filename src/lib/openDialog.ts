import Dialog from './DialogProp.vue'
import { createApp, h } from 'vue'
export const openDialog = (options) => {
  const { title, content, ok, cancel } = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div)
          div.remove()
  }
  //将dialog放入div里
  const app = createApp({
    render(){
      return h(Dialog, {visible: true,'onUpdate:visible':(newVisible) => {
        if(newVisible === false){
          close()
        }
      },
      ok, cancel
    }, {
        title, content
      })
    }
  })
  app.mount(div)
}