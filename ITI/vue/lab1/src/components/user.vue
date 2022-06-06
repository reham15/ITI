<template>
  <table class="table table-bordered">
    <thead>
    <th>
      name
    </th>
    <th>
      email
    </th>
    <th>
      address
    </th>
    <th>
      remove
    </th>
    </thead>
    <tbody>
    <!--  <tr>-->
    <!--    <td>{{admins[0].name}}</td>-->
    <!--  </tr>-->
    <tr v-for="(user,index) in users" :key="user.name">
      <td>{{user.name}}</td>
      <td>{{user.email}}</td>
      <td>{{user.address}}</td>
      <td> <button @click="deleteItem(index)"> delete</button></td>
    </tr>
    </tbody>


  </table>
</template>

<script>
export default {
  name: "user",
  props:["users"],
  methods:{
  deleteItem(i){
    console.log(i)
    this.$emit("delete",i);

  },},


}
</script>

<style scoped>

</style>