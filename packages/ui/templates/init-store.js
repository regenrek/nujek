import { registerNavStore } from './store/nav'

export default (context) => {
  const { store } = context
  registerNavStore(store)
}
