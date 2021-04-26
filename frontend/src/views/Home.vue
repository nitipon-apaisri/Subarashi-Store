<template>
  <div class="home">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input type="text" v-model="user.username" />
      <input type="password" v-model="user.password" />
      <button>Sign up</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      axios
        .post("http://localhost:4200/register", {
          username: this.user.username,
          password: this.user.password,
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>
