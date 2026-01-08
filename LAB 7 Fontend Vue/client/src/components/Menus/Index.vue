<template>
  <div>
    <h1>Get All Menus</h1>

    <p><button @click="goCreate">Create Menu</button></p>
    <p><button @click="goEdit">Edit Menu</button></p>
    <p><button @click="goShow">Show Menu</button></p>
  </div>
</template>

<script>
export default {
  methods: {
    goCreate () {
      this.$router.push('/menu/create')
    },
    goEdit () {
      this.$router.push('/menu/edit')
    },
    goShow () {
      this.$router.push('/menu')
    }
  }
}
</script>

