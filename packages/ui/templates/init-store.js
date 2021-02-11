import { registerNavStore } from './nav';

export default (context) => {
  const { store } = context;
  registerNavStore(store);
};
