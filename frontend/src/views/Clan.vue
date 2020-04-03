<template>
  <div>
    <b-container class="bv-example-row">
      <b-row align-v="center">
        <img src="../assets/clan-wars.png" width="50px" alt="Imagem do clan" />
        <h2>{{ getClan.name }}</h2>
      </b-row>
      <h6>{{ getClan.description }}</h6>
      <hr />
      <b-container class="bv-example-row mb-1">
        <b-row>
          <div class="d-flex w-100 justify-content-between">
            <b-col md="4" class="clan__headerCaption">Posição Nome</b-col>
            <b-col md="1" class="clan__headerCaption">Nível</b-col>
            <b-col md="1" class="clan__headerCaption">Troféus</b-col>
            <b-col md="1" class="clan__headerCaption">Doações</b-col>
            <b-col md="1" class="clan__headerCaption">Função</b-col>
            <b-col md="1" class="clan__headerCaption"></b-col>
          </div>
        </b-row>
      </b-container>

      <b-list-group v-for="member in getClan.memberList" :key="member.clanRank">
        <b-list-group-item class="flex-column align-items-start">
          <b-container class="bv-example-row">
            <b-row>
              <div class="d-flex w-100 justify-content-between">
                <b-col md="4" class="clan__headerCaption"
                  >#{{ member.clanRank }} {{ member.name }}</b-col
                >
                <b-col md="1">{{ member.expLevel }}</b-col>
                <b-col md="1"
                  ><img src="../assets/trophy.png" width="20px" />{{
                    member.trophies
                  }}</b-col
                >
                <b-col md="1">{{ member.donations }}</b-col>
                <b-col md="1">{{ member.role }}</b-col>
                <b-col md="1">
                  <b-icon
                    v-b-toggle="collapseId(member.clanRank)"
                    icon="pencil"
                    font-scale="1.5"
                    variant="info"
                    @click="editar(member.tag)"
                  ></b-icon>

                  <b-icon
                    class="ml-2"
                    icon="trash"
                    variant="danger"
                    font-scale="1.5"
                    @click="deleteMember(member.tag)"
                  ></b-icon>
                </b-col>
              </div>
            </b-row>
          </b-container>
          <b-collapse :id="collapseId(member.clanRank)">
            <router-view />
          </b-collapse>
        </b-list-group-item>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Statistic',
  methods: {
    ...mapActions(['deleteMember']),
    editar(tag) {
      this.$router.push({ name: 'edit-member', params: { tag: tag } });
    },
    collapseId(clanTag) {
      return 'collapse-' + clanTag;
    },
  },
  computed: mapGetters(['getClan']),
};
</script>

<style scoped>
.clan__headerCaption {
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  padding: 0 5px 16px;
}
</style>
