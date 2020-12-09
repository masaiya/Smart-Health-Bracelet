<template>
  <div class="login">
    <h2>登录</h2>
    <form id="login_form" onsubmit="return false;">
      <div class="input-group cell">
        <span class="input-group-addon">账号:</span>
        <input type="text" class="form-control" placeholder="请输入账号" name="userid" v-model="inputUser.userid" onkeyup="value=value.replace(/[^\d]/g,'')"> 
      </div>
      <br>
      <br>
      <div class="input-group cell">
        <span class="input-group-addon">密码:</span>
        <input type="password" class="form-control" placeholder="请输入密码" name="pwd" v-model="inputUser.pwd">
      </div>
      <div class="input-group subBtn">
        <button class="btn btn-success" id="submit" @click="login()">确认</button>
        <a href="/" class="btn btn-danger" id="cancel">取消</a>
      </div>
      <div class="input-group tip">
        <span>没有账号？<a href="/reg">点击创建</a></span>
        <span>
            <a href="/">返回首页</a>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      inputUser: {}
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {
    login() {
      this.inputUser.userid = parseInt(this.inputUser.userid);
      this.$axios({
        method: 'post',
        url: '/iot/login',
        data: {
          userid: this.inputUser.userid,
          pwd: this.inputUser.pwd
        },
        datatype: 'json',
        header: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        console.log(res);
        if(res.data) {
          sessionStorage.setItem('user',res.data.userid);
          this.$message(res.data.username + ',欢迎您!');
          window.location.href = '/new_health';
        } else {
          this.$alert('密码或账号错误', '提示', {
            confirmButtonText: '确定'
          });
          this.inputUser = {};
        }
      }).catch(err => {
        this.$message('服务器繁忙，请稍后再试！');
        console.log(err);
      })
    }
  },
};
</script>

<style scoped lang="less">
.login {
  width: 500px;
  margin: 105px auto;
  background-color: #fff;
  padding: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-shadow: 3px 0 3px #ddd;
  h2 {
    text-align: center;
    margin: 10px 0;
  }
  form {
    padding: 20px;
  }
  .cell>input {
    border: none;
    outline: none;
    border-bottom: 1px solid #666;
    margin-left: 30px;
    text-indent: 5px;
    flex: 1;
  }
  .cell>span {
    text-align: right;
    width: 80px;
  }
  .subBtn {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    margin-top: 30px;
  }
  .btn-success {
    border: none;
    padding: 10px 30px;
    background: #2980b9;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
  }
  .btn-danger {
    text-decoration: none;
    color: #000;
    background: #fff;
    border: 1px solid #999;
    padding: 7px 30px;
    border-radius: 10px;
  }
  .btn-success:hover,
  .btn-danger:hover {
    opacity: .8;
  }
  .tip {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 45px;
  }
  .tip>span:first-child a {
    color: #3498db;
  }
  .tip>span:first-child a:hover {
    text-decoration: underline;
  }
  .tip>span a {
    color: #000;
    text-decoration: none;
  }
  .tip>span:last-child a:hover {
    color: #3498db;
    text-decoration: underline;
  }
}
</style>