<template>
  <div>
    <el-container>
      <el-header
        ><div class="aaa">
          <span class="aaa1">梦雪谷会员管理系统</span>
          <el-dropdown>
            <el-button type="primary">
              王彦凯<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="xiu">修改密码</el-dropdown-item>
              <el-dropdown-item @click.native="tui">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div></el-header
      >
      <el-container>
        <el-aside width="200px">
          <el-menu>
            <el-menu-item @click="add">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>

            <el-menu-item @click="add1">
              <i class="el-icon-menu"></i>
              <span slot="title">会员管理</span>
            </el-menu-item>
            <el-menu-item @click="add2">
              <i class="el-icon-menu"></i>
              <span slot="title">供应商管理</span>
            </el-menu-item>
            <el-menu-item @click="add3">
              <i class="el-icon-menu"></i>
              <span slot="title">商品管理</span>
            </el-menu-item>
            <el-menu-item @click="add4">
              <i class="el-icon-menu"></i>
              <span slot="title">员工管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-container>
          <el-main> <router-view></router-view></el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    add() {
      this.$router.push("/shouye");
    },
    add1() {
      this.$router.push("/huiyuna");
    },
    add2() {
      this.$router.push("/gys");
    },
    add3() {
      this.$router.push("/spgl");
    },
    add4() {
      this.$router.push("/yggl");
    },
    tui() {
      this.$router.push("/");
      console.log(123);
    },
    xiu() {
      alert("暂不支持修改密码");
    },
  },
};
</script>

<style  scoped>
* {
  padding: 0;
  margin: 0;
}
.aaa {
  height: 50px;
  background-color: gray;
}
.aaa1 {
  font-size: 20px;
  color: aliceblue;
  line-height: 50px;
  margin-left: 50px;
}
.a1 {
  width: 100%;
  height: 50px;
  background-color: gray;
  font-size: 20px;
  color: aliceblue;
}
.el-dropdown {
  float: right;
  margin-right: 100px;
}
</style>