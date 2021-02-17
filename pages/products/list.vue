<template>
  <div>
    <h1>Products List</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Price</th>
            <th class="text-left">Discount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in productsList" :key="index">
            <td class="py-3">
              <strong>{{ product.name }}</strong> <br />
              <small>{{ product.description }}</small> <br>
              <v-divider/>
              Linked user:
              <user-show :id="product.user_id"/>
            </td>
            <td>{{ product.price.toFixed(2) }}€</td>
            <td>{{ product.discount.toFixed(0) }}%</td>

          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import UserShow from '~/components/UserShow.vue'
// import { mapMutations } from 'vuex'

export default {
  components: { UserShow },
  computed: {
    productsList() {
      return this.$store.state.product.list
    },
  },
  methods: {
    async getusers() {
      const ip = await this.$axios.$get('~/assets/users.json')
      console.log(ip)
    },
  },
}
</script>

<style>
</style>
