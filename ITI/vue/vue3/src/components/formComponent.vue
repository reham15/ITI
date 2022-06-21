<template>
  {{rank}}
  <form @submit.prevent="formHandle">
    <label for="name">Name:</label>
    <input type="text" v-model="formValues.name" id="name" name="name" ><br>
    <label for="age">Age:</label>
    <input type="text" v-model="formValues.age" id="age" name="age" ><br><br>
    <label for="address">Address:</label>
    <input type="text" v-model="formValues.address" id="adress" name="adress" ><br><br>
    <button class="btn btn-sm btn-success">submit</button>
  </form>
  <div>
    <input type="radio" id="admin" v-model="rank" name="rank" value="admin" />
    <label for="admin">Admin</label><br>
    <input type="radio" id="student" name="rank" v-model="rank" value="student" />
    <label for="student">Student</label>
  </div>
</template>
<script>
import {ref} from "vue";

export default {
  name: "formComponent",
  setup(props,context){
    const rank =ref('')
    const formValues=ref({name: "", age: "", address: ""})

    function formHandle(e){
      e.preventDefault();
      if (rank.value === "student") {
        context.emit("student", formValues.value);
        console.log("Students", formValues.value)
      } else if (rank.value === "admin") {
        context.emit("admin", formValues.value);
        console.log("Admin", formValues.value)
      }


    }
    return{
      rank,
      formValues,
      formHandle,

    }



  },

 

}
</script>

<style scoped>

</style>