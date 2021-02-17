<template>
  <user-show :id="parseInt(id)" :showTitle="true" />
</template>

<script>
import UserShow from '~/components/UserShow.vue'
export default {
  components: { UserShow },
  async asyncData({ params }) {
    const id = params.id
    return { id }
  },
}
</script>

<style>
</style>
