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
    <tr v-for="student,index in students " :key="student.name">
      <th scope="row">{{index}}</th>
      <td>{{student.name}}</td>
      <td>{{student.age}}</td>
      <td>{{student.address}}</td>
      <td><button  @click="$emit('delete',index)" class="btn btn-danger"> Delete</button></td>
    </tr>
    </tbody>
  </table>

</template>

<script>



export default {
  name: "studentComponent",
  props: ["students"],


}
</script>

<style scoped>

</style>