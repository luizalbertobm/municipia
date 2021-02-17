<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">#</th>
          <th class="text-left">Name</th>
          <th class="text-left">E-mail</th>
          <th class="text-left">Birth date</th>
          <th class="text-left">Show</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in list" :key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.birthDate }}</td>
          <td>
            <v-btn elevation="2" :to="'/users/' + user.id"> +Details </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  computed: {
    list() {
      return this.$store.state.customer.list
    },
  },
}
</script>

<style>
</style>
