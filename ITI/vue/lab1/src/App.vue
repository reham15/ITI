<script setup></script>

<template>
  <header></header>

  <div class="wrapper">
    <button class="btn btn-primary m-2" @click="showForm()">form</button>
    <button   class="btn btn-primary m-2" @click="showadmin()">admins</button>
    <button   class="btn btn-primary m-2" @click="showUser()">users</button>
    <br />
    <FormVue v-if="form" @user="addUser"  @admin="addAdmin"/>
    <user v-else-if="user === 1" :users="users" @delete="deleteUser"></user>
    <admin v-else-if="admin === 1" :admins="admins" @delete="deleteAdmin"></admin>
  </div>
  <router-view></router-view>

  <main></main>
</template>

<script>
import FormVue from './components/form.vue';
import admin  from './components/admin.vue';
import user from './components/user.vue';
  export default {
    name:"App",
    components:{FormVue,user,admin},
    data(){
      return{
        form: false,
        user: 0,
        admin:0,
        users:[],
        admins:[],
          };
    },
    methods:{
      showForm()
      {
        this.form=true;
        this.user=0;
        this.admin=0;
        console.log(this.form===true);

      },
      showUser()
      {
        this.form=0;
        this.user=1;
        this.admin=0;
        console.log(this.user);

      },
      showadmin()
      {
        this.form=0;
        this.user=0;
        this.admin=1;
        console.log(this.admin);

      },
      addUser(user){
        console.log(user);
        this.users.push(user);
      },
      addAdmin(admin){
        console.log(admin);
        this.admins.push(admin);
      },
      deleteAdmin(i){

        const index = i;
        if (index > -1) {
          this.admins.splice(index, 1); // 2nd parameter means remove one item only
        }
      },
      deleteUser(i){

        const index = i;
        if (index > -1) {
          this.users.splice(index, 1); // 2nd parameter means remove one item only
        }
      }

    }

  }
</script>

<style>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
.wraper {
  margin: auto;
}
</style>
