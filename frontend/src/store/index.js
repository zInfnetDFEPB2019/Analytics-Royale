import Vue from 'vue';
import Vuex from 'vuex';
import Api from '../services/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    player: {},
    clans: {},
  },
  actions: {
    async getInfo({ commit }, searchParams) {
      const { searchTag, searchType } = searchParams;

      try {
        const response = await Api.post('/', { searchTag, searchType });
        if (searchType == '1') {
          commit('addPlayer', response.data.info);
        }
        //  else {
        //   commit('addClan', response.data);
        // }
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    addPlayer: (state, response) => {
      state.player = response;
      console.log(state.player);
    },
    // addClan: (state, response) => (state.clans[0] = response.data),
  },
  getters: {
    getPlayer: state => state.player,
    // getClan: state => state.clans[0],
  },
});
