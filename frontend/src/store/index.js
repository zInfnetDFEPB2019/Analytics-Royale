import Vue from 'vue';
import Vuex from 'vuex';
import Api from '../services/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    player: {},
    clans: {},
  },
  getters: {
    getPlayer: state => state.player,
    getClan: state => state.clans,
    memberByTag: state => tag =>
      (state.clans.memberList = state.clans.memberList.filter(
        m => m.tag == tag
      ))[0],
  },
  actions: {
    async getInfo({ commit }, searchParams) {
      const { searchTag, searchType } = searchParams;

      try {
        const response = await Api.post('/', { searchTag, searchType });
        if (searchType == '1') {
          commit('addPlayer', response.data.info);
        } else {
          commit('addClan', response.data.info);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async deleteMember({ commit }, tag) {
      commit('removeMember', tag);
    },
    async updateMember({ commit }, updMember) {
      commit('updateMember', updMember);
    },
  },
  mutations: {
    addPlayer: (state, response) => {
      state.player = response;
      console.log(state.player);
    },
    addClan: (state, response) => (state.clans = response),
    removeMember: (state, tag) =>
      (state.clans.memberList = state.clans.memberList.filter(
        m => m.tag !== tag
      )),
    updateMember: (state, updMember) => {
      const index = state.clans.memberList.findIndex(
        m => m.tag === updMember.tag
      );
      if (index !== -1) {
        state.clans.memberList.splice(index, 1, updMember);
      }
    },
  },
});
