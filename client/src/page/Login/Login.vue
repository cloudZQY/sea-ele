<template>
  <v-row type="flex" justify="center" align="middle" class="main" :showMessage="true">
     <v-col span="4">
      <v-form direction="vertical" :model="formData">
        <v-form-item label="用户名" prop="uname">
            <v-input type="text" placeholder="用户名" size="large" v-model="formData.uname"></v-input>
        </v-form-item>
        <v-form-item label="密码" prop="pwd">
            <v-input type="password" placeholder="密码" size="large" v-model="formData.pwd"></v-input>
        </v-form-item>
        <v-form-item style="margin-top:24px">
            <v-button type="primary" html-type="submit" @click.prevent="submitForm()">确定</v-button>
        </v-form-item>
      </v-form>
     </v-col>
  </v-row>
</template>

<script>
import axios from 'axios'
import router from 'vue-router'
export default {
  name: 'HelloWorld',
  created() {
  },
  data: () => ({
    formData: {
      uname: '',
      pwd: '',
    },
  }),
  methods: {
    submitForm() {
      axios.post('/login/loginByUname', this.formData).then((data) => {
        localStorage.setItem('token', data.data.token)
        this.$router.push('/');
      }).catch((err) => {
        console.log(err)
      })
    },
  },
}
</script>

<style scoped>
.main {
  height: 100%;
  width: 100%;
}
</style>
