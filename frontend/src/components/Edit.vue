<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-container class="bv-example-row mb-1">
        <b-row>
          <div class="d-flex w-100 justify-content-between">
            <b-col md="4">
              <b-form-group label="Nome: ">
                <b-form-input
                  id="input-name"
                  v-model="member_edit.name"
                  type="text"
                  required
                ></b-form-input> </b-form-group
            ></b-col>
            <b-col md="1">
              <b-form-group label="Nivel: ">
                <b-form-input
                  id="input-expLevel"
                  v-model="member_edit.expLevel"
                  type="number"
                  required
                ></b-form-input> </b-form-group
            ></b-col>
            <b-col md="2">
              <b-form-group label="Troféus: ">
                <b-form-input
                  id="input-trophies"
                  v-model="member_edit.trophies"
                  type="number"
                  required
                ></b-form-input> </b-form-group
            ></b-col>
            <b-col md="2">
              <b-form-group label="Doações: ">
                <b-form-input
                  id="input-donations"
                  v-model="member_edit.donations"
                  type="number"
                  required
                ></b-form-input> </b-form-group
            ></b-col>
            <b-col md="2">
              <b-form-group label="Função: ">
                <b-form-input
                  id="input-role"
                  v-model="member_edit.role"
                  type="text"
                  required
                >
                </b-form-input>
              </b-form-group>
            </b-col>
            <b-col md="1">
              <div align-v="center">
                <b-button type="submit" variant="primary">Salvar</b-button>
              </div>
            </b-col>
          </div>
        </b-row>
      </b-container>
    </b-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'edit-member',
  data() {
    return {
      tag: this.$route.params.tag,
      member_edit: {
        name: '',
        expLevel: '',
        trophies: '',
        donations: '',
        role: '',
      },
    };
  },
  computed: mapGetters(['memberByTag']),
  created() {
    console.log(this.tag);
    this.member_edit = this.memberByTag(this.tag);
  },
  methods: {
    ...mapActions(['updateMember']),
    onSubmit() {
      this.updateMember(this.member_edit);
      alert('Dados editados com sucesso');
    },
  },
};
</script>

<style scoped></style>
