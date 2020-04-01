// render

const { createApp, ref, h } = Vue

// 计数器组件
const Counter = {
    setup() {
        // const countOps = useCount()
        // return { ...countOps }

        // 如果不想在render函数中看到this,可以在setup函数中返回render函数，外面的render函数就不要了
        const { count, increase, reset } = useCount()
        return () => [
          h('div', { class: 'counter-display' }, [
              h('span', { class: 'counter-label' }, '恭喜你，你已经写了'),
              h('span', { class: 'counter-text' }, count.value),
              h('span', { class: 'counter-label' }, '斤代码！'),
          ]),
          h('div', { class: 'counter-btns' }, [
              h('button', { class: 'btn', onClick: increase }, '写一斤'),
              h('button', { class: 'btn', onClick: reset }, '删库啦'),
          ])
      ]
    }

    // render() {
    //     return [
    //         h('div', { class: 'counter-display' }, [
    //             h('span', { class: 'counter-label' }, '恭喜你，你已经写了'),
    //             h('span', { class: 'counter-text' }, this.count),
    //             h('span', { class: 'counter-label' }, '斤代码！'),
    //         ]),
    //         h('div', { class: 'counter-btns' }, [
    //             h('button', { class: 'btn', onClick: this.increase }, '写一斤'),
    //             h('button', { class: 'btn', onClick: this.reset }, '删库啦'),
    //         ])
    //     ]
    // }
}

function useCount() {
    const count = ref(0)
    const increase = () => { count.value++ }
    const reset = () => { count.value = 0 }
    return { count, increase, reset }
}

// 根组件
const App = {
    render() {
        return h('div', { class: 'container' }, [
            h('h3', '计数器示例'),
            h(Counter)
        ])
    }
}

// 启动
const container = document.querySelector('#app')
const app = createApp()

app.mount(App, container)
