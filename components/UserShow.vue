<template>
  <div v-if="user">
    <h1 v-if="showTitle">{{ user.name }}</h1>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="user.name"
              label="Name"
              solo
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="user.email"
              label="E-mail"
              solo
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="user.birthDate"
              label="Bith date"
              solo
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
  <div v-else>Aguarde, a carregar o user {{ id }}</div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    showTitle: {
      type: Boolean,
      required: false,
    },
  },
  data: function () {
    return {
      user: null,
    }
  },
  methods: {
    getUser() {
      var user = this.$store.state.customer.list.filter((u) => u.id == this.id)
      if (user) {
        return user[0]
      }
      return null
    },
  },
  created: function () {
    this.user = this.getUser()
  },
}
</script>

<style>
</style>
