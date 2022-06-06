<template>
<div class="container">
  <input  class="form-control" type="text" v-model="values.name">

  <input  class="form-control" type="text" v-model="values.email">

  <input class="form-control" type="text" v-model="values.address">

  <label>user</label>
  <input   type="radio" name="type" value="user" v-model="type">
 <br>
  <label>admin</label>
  <input    type="radio" name="type" value="admin" v-model="type">
  <br>
  <button  class="btn btn-success" @click="handle"> submit</button>
</div>
</template>

<script>
export default {
  name: "FormVue",
  data()
  {
    return{
     values:{name:"",email:"",address:""} ,
      type:"",
    }
  },
  methods:{
    handle(e){
      e.preventDefault();
    if(this.type==="user")
    { this.$emit("user",this.values);

    }
    else if(this.type==="admin")
      this.$emit("admin",this.values);
    }
  }
}
</script>

<style scoped>
input{

  margin-bottom: 10px;
}
.container{
  margin:auto;
}
</style>