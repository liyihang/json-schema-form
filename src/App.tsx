import { defineComponent, reactive } from 'vue'
const logo = require('./assets/logo.png') //eslint-disable-line
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  setup() {
    const state = reactive({
      name: 'tommy',
    })

    // setInterval(() => {
    //   state.name += 1
    // }, 1000)
    return () => {
      return (
        <div>
          <img src={logo} alt="" />
          <p>{state.name}</p>
          <HelloWorld age={123} msg={'hello'}></HelloWorld>
        </div>
      )
    }
  },
})
