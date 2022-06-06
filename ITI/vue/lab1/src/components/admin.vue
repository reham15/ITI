<template>

<table class="table table-bordered" >
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
  <tr v-for="(admin,index) in admins" :key="admin.name">
  <td>{{admin.name}}</td>
    <td>{{admin.email}}</td>
    <td>{{admin.address}}</td>
    <td> <button @click="deleteItem(index)"> delete</button></td>
  </tr>
  </tbody>
</table>
</template>

<script>
export default {
  name: "admin",
  props:["admins"],
  methods:{
    deleteItem(i){
      console.log(i)
    this.$emit("delete",i);

    },
  }
}
</script>

<style scoped>

</style>