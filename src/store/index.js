import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// import modules
import auth from './modules/auth';
import todos from './modules/todos';
const storeData = {
  modules: { auth, todos },
};
const store = new Vuex.Store(storeData);
export default store;
