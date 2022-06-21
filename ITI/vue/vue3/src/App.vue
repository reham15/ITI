<template>
  <button @click="choice=0" class="btn btn-primary mybutton">Form</button>
  <button @click="choice=1" class="btn btn-primary mybutton">students</button>
  <button @click="choice=2" class="btn btn-primary mybutton">Admins</button>
  <form-component v-if="choice==0" @student="addStudent" @admin="addAdmin"/>
  <student-component  :students="students"  v-if="choice==1" @delete="deleteStudent"/>
  <admin-component :admins="admins"  v-if="choice==2" @delete="deleteAdmin"/>
</template>
<script>
import formComponent from "@/components/formComponent";
import adminComponent from "@/components/adminComponent";
import studentComponent from "@/components/studentComponent";
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    formComponent, studentComponent, adminComponent

  },
  setup(){
    const choice=ref(0);
    const students=ref([]);
    const admins=ref([]);
    function addStudent(student){
      console.log(student)
      students.value.push(student)

    }
    function addAdmin(admin){
      admins.value.push(admin)
    }
    function deleteStudent(index){
      students.value.splice(index,1)

    }
    function deleteAdmin(index){
      admins.value.splice(index,1)
    }

    return{
      choice,
      students,
      admins,
      deleteAdmin,
      deleteStudent,
      addAdmin,
      addStudent
    }

  },

}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mybutton{
  margin: 20px;
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>
