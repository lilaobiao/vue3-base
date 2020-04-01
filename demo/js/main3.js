const { createApp, reactive } = Vue

// 计数器组件
const Counter = {
    template: `
        <div class="counter-display">
            <span class="counter-label">恭喜你，你已经写了</span>
            <span class="counter-text">{{ state.count }}</span>
            <span class="counter-label">斤代码！</span>
        </div>
        <div class="counter-btns">
            <button class="btn" @click="increase">写一斤</button>
            <button class="btn" @click="reset">删库啦</button>
        </div>
    `,

    setup() {
        const countOps = useCount()
        return { ...countOps }
    }
}

function useCount() {
    const state = reactive({ count: 0 })
    const increase = () => { state.count++ }
    const reset = () => { state.count = 0 }
    return { state, increase, reset }
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
