<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">index</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Address</th>
      <th scope="col">Delete</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="admin ,index in admins " :key="index">
      <th scope="row">{{index}}</th>
      <td>{{admin.name}}</td>
      <td>{{admin.age}}</td>
      <td>{{admin.address}}</td>
      <td><button @click="$emit('delete',index)"  class="btn btn-danger"> Delete</button></td>

    </tr>
    </tbody>
  </table>

</template>

<script>

export default {

  name: "adminComponent",
   props: ["admins"],

}
</script>

<style scoped>

</style>