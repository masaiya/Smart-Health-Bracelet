<template>
  <div class="reg">
    <h2>注册</h2>
    <form id="reg_form" onsubmit="return false;">
      <div class="input-group cell">
        <span class="input-group-addon">用户名:</span>
        <input type="text" class="form-control" placeholder="请输入用户名" name="username" v-model="inputUser.username"> 
      </div>
      <br>
      <br>
      <div class="input-group cell">
        <span class="input-group-addon">保护对象:</span>
        <input type="text" class="form-control" placeholder="请输入保护对象" name="protectid" v-model="inputUser.protectid">
      </div>
      <br>
      <br>
      <div class="input-group cell">
        <span class="input-group-addon">电话号码:</span>
        <input type="text" class="form-control" placeholder="请输入电话号码" name="phone" v-model="inputUser.phone">
      </div>
      <br>
      <br>
      <div class="input-group cell">
        <span class="input-group-addon">性别:</span>
        <!-- <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio> -->
        <input type="text" class="form-control" placeholder="请输入性别" name="sex" v-model="inputUser.sex">
      </div>
      <br>
      <br>
      <div class="input-group cell">
        <span class="input-group-addon">年龄:</span>
        <input type="text" class="form-control" placeholder="请输入年龄" name="age" v-model="inputUser.age">
      </div>
      <br>
      <br>
      <div class="input-group cell">
        <span class="input-group-addon">住址:</span>
        <input type="text" class="form-control" placeholder="请输入地址" name="address" v-model="inputUser.address">
      </div>
      <br>
      <br>
      <div class="input-group cell">
        <span class="input-group-addon">工作:</span>
        <input type="text" class="form-control" placeholder="请输入工作" name="works" v-model="inputUser.works">
      </div>
      <br>
      <br>
      <div class="input-group cell">
        <span class="input-group-addon">密码:</span>
        <input type="text" class="form-control" placeholder="请输入密码" name="password" v-model="inputUser.password">
      </div>
      <br>
      <br>
      <div class="input-group subBtn">
        <button class="btn btn-success" id="submit" @click="reg()">确认</button>
        <a href="/" class="btn btn-danger" id="cancel">取消</a>
      </div>
      <div class="input-group tip">
        <span>已有账号？<a href="/login">点击登录</a></span>
        <span>
            <a href="/">返回首页</a>
        </span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'reg',
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
    reg() {
      this.$axios({
        method: 'post',
        url: '/iot/reg',
        data: {
          username: "嘤嘤嘤",
          protectid: 1,
          phone: "15399274446",
          sex: '男',
          age: 18,
          address: "陕西省西安市",
          works: '程序员',
          passwords: '123456'
        },
        datatype: 'json',
        header: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        var code = res.data.err_code;
        if (code === 0) {
          window.alert('登录成功，即将跳转！');
          window.location.href = '/';
        } else if (code === 1) {
          window.alert('邮箱或者密码错误！');
        } else if (code === 500) {
          window.alert('服务器繁忙，请稍后再试！');
        }
      }).catch(err => {
        console.log(err);
      })
    }
  },
};
</script>

<style scoped lang="less">
.reg {
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
  .cell .input-group-addon {
    width: 80px;
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
    text-align: center;
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