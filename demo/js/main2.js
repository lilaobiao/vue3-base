const { createApp, ref } = Vue
// 对count值的操作逻辑
function useCount() {
  const count = ref(0)
  const increase = () => { count.value++ }
  const reset = () => { count.value = 0 }
  return { count, increase, reset }
}

// 计数器组件
const Counter = {
    template: `
        <div class="counter-display">
            <span class="counter-label">恭喜你，你已经写了</span>
            <span class="counter-text">{{ count }}</span>
            <span class="counter-label">斤代码！</span>
        </div>
        <div class="counter-btns">
            <button class="btn" @click="increase">写一斤</button>
            <button class="btn" @click="reset">删库啦</button>
        </div>
    `,
    /**
     * setup方法，它是Vue3.0中新增的组件入口，专为使用Composition API而设计，
     * 调用时机是在组件生命周期的 beforeCreate 和 created 之间（所以在 setup
     * 里面是访问不了你所期望的 this 对象的，即它里面的this并不是指向当前组件，
     * 这点需要注意也尽量避免使用）。原先在 data 里的响应式对象属性 count 在这里成为了一个使用 ref
     * 函数创建的响应式常量；而用于递增和重置这个 count 值的函数内部，
     * 不再需要通过 this 引用任何东西（也不推荐使用），这为我们进行进一步的重构提供了机会。
     */
    // setup() {
    //     // 创建一个响应式的对象
    //     const count = ref(0)
    //     // 操作函数
    //     const increase = () => { count.value++ }
    //     const reset = () => { count.value = 0 }
    //     // 导出给模板访问
    //     return { count, increase, reset }
    // }

    setup() {
      const countOps = useCount()
      return { ...countOps }
    }
}


// 根组件
const App = {
  components: { Counter },
  template: `
      <div class="container">
          <h3>计数器示例</h3>
          <Counter />
      </div>
  `
}

// 启动
const container = document.querySelector('#app')
const app = createApp()

app.mount(App, container)
