// import actions from "./actions";
// import modules from "./modules";
import Axios from 'axios';
import { createStore } from 'vuex';

import mutations from './mutations';
import state from './state';

const store = createStore({
  state,
  mutations,
  actions: {
    getCategoryContents({ commit }) {
      Axios.get("https://admin.susantokun.com/api/v1/demo/category-contents")
        .then(response => {
          commit("GET_CATEGORY_CONTENTS", response.data.data);
        })
        .catch(error => {
          console.log("error: ", error);
        });
    },
    getContents({ commit }) {
      Axios.get("https://admin.susantokun.com/api/v1/demo/contents")
        .then(response => {
          commit("GET_CONTENTS", response.data.data);
        })
        .catch(error => {
          console.log("error: ", error);
        });
    }
  },
  modules: {}
})

export default store;