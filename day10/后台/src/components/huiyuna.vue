<template>
  <div>
    <el-input placeholder="会员卡号" class="a2"></el-input>
    <el-input placeholder="会员名字" class="a2"></el-input>
    <el-input placeholder="支付类型" class="a2"></el-input><br />
    <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
    <el-button type="primary">查询</el-button>
    <el-button type="primary">重置</el-button>
    <el-card class="box-card">
      <template>
        <el-table :data="datalist" style="width: 100%">
          <el-table-column type="index" label="序号"> </el-table-column>
          <el-table-column prop="cardNum" label="会员卡号"> </el-table-column>
          <el-table-column prop="name" label="会员姓名"> </el-table-column>
          <el-table-column prop="birthday" label="会员生日"> </el-table-column>
          <el-table-column prop="phone" label="手机号码"> </el-table-column>
          <el-table-column prop="integral" label="可用积分"> </el-table-column>
          <el-table-column prop="money" label="开卡金额"> </el-table-column>
          <el-table-column label="支付类型">
            <template scope="scope">
              <el-tag type="info" v-if="scope.row.payType == 4">现金</el-tag>
              <el-tag type="warning" v-if="scope.row.payType == 1">微信</el-tag>
              <el-tag type="danger" v-if="scope.row.payType == 2"
                >支付宝</el-tag
              >
              <el-tag v-if="scope.row.payType == 3">银行卡</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="会员地址"> </el-table-column>
          <el-table-column label="操作" width="150px">
            <template scope="scope">
              <el-button size="mini" @click="bj(scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="del(scope.row.id)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </template>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, , 10, 20, 30]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>

    <!-- 添加 -->
    <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref='form' :rules="rules">
        <el-form-item label="会员卡号" prop="cardNum">
          <el-input
            v-model="form.cardNum"
            autocomplete="off"
            style="width: 80%"
          ></el-input>
        </el-form-item>
        <el-form-item label="会员姓名" prop="name">
          <el-input
            v-model="form.name"
            autocomplete="off"
            style="width: 80%"
          ></el-input>
        </el-form-item>
        <el-form-item label="支付类型" prop="payType">
          <el-input
            v-model="form.payType"
            autocomplete="off"
            style="width: 80%"
          ></el-input>
        </el-form-item>

        <el-form-item label="出生日期">
          <el-input
            v-model="form.birthday"
            autocomplete="off"
            style="width: 80%"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input
            v-model="form.phone"
            autocomplete="off"
            style="width: 80%"
          ></el-input>
        </el-form-item>
        <el-form-item label="可用积分">
          <el-input
            v-model="form.integral"
            autocomplete="off"
            style="width: 80%"
          ></el-input>
        </el-form-item>
        <el-form-item label="开卡金额">
          <el-input
            v-model="form.money"
            autocomplete="off"
            style="width: 80%"
          ></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input
            v-model="form.address"
            autocomplete="off"
            style="width: 80%"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 编辑 -->
    <el-dialog title="添加用户" :visible.sync="dialogFormVisible1">
      <el-form :model="bjlist" ref='form' :rules="rules">
        <el-form-item label="会员卡号" prop="cardNum">
          <el-input
            v-model="bjlist.cardNum"
            autocomplete="off"
            style="width: 80%"
          ></el-input>
        </el-form-item>
        <el-form-item label="会员姓名" prop="name">
          <el-input
            v-model="bjlist.name"
            autocomplete="off"
            style="width: 80%"
          ></el-input>
        </el-form-item>
        <el-form-item label="支付类型" prop="payType">
          <el-input
            v-model="bjlist.payType"
            autocomplete="off"
            style="width: 80%"
          ></el-input>
        </el-form-item>

        <el-form-item label="出生日期">
          <el-input
            v-model="bjlist.birthday"
            autocomplete="off"
            style="width: 80%"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input
            v-model="bjlist.phone"
            autocomplete="off"
            style="width: 80%"
          ></el-input>
        </el-form-item>
        <el-form-item label="可用积分">
          <el-input
            v-model="bjlist.integral"
            autocomplete="off"
            style="width: 80%"
          ></el-input>
        </el-form-item>
        <el-form-item label="开卡金额">
          <el-input
            v-model="bjlist.money"
            autocomplete="off"
            style="width: 80%"
          ></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input
            v-model="bjlist.address"
            autocomplete="off"
            style="width: 80%"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="bj1">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "MobanHuiyuna",

  data() {
    return {
      dialogFormVisible: false,
      dialogFormVisible1: false,
      // 数据
      datalist: [],
      // 编辑用的数组
      bjlist: [],
      form: {
        cardNum: "", //会员卡号
        name: "", //会员姓名
        payType: "", //支付类型: 0 : 现金 1 : 微信2 : 支付宝3 : 银行卡
        birthday: "", //出生日期
        phone: "", //手机号
        integral: "", //可用积分
        money: "", //开卡金额
        address: "", //地址
      },
      // 分页用的数据
      currentPage: 1, //当前页码
      pagesize: 10, //每页显示多少条

      total: 0,
      // 验证类型
      rules: {
        cardNum: [{ required: true, message: "卡号不能为空", trigger: "blur" }],
        name: [{ required: true, message: "姓名能不能为空", trigger: "blur" }],
        payType: [
          { required: true, message: "支付类型不能为空", trigger: "blur" },
        ],
      },
    };
  },

  mounted() {},

  methods: {
    // 点击编辑框的确认按钮
    bj1() {
      this.$http
        .put("http://vue.mengxuegu.com/pro-api/member/10", this.bjlist)
        .then((res) => {
          console.log(res);
          if (res.data.code == 2000) {
            this.$message.success(res.data.message);
            this.git();
            this.dialogFormVisible1 = false;
          }
        });
    },
    // 编辑
    bj(val) {
      this.dialogFormVisible1 = true;
      console.log(val);
      this.bjlist = val;
    },
    //   分页
    handleSizeChange(val) {
      this.pagesize = val;
      console.log(`每页 ${val} 条`);
      this.git();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
      this.git();
    },
    // 删除
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$http
            .delete("http://vue.mengxuegu.com/pro-api/member/17", id)
            .then((res) => {
              console.log(res);
              if (res.data.code == 2000) {
                this.$message.success(res.data.message);
              }
              this.git();
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 添加
    add() {
      this.$refs.form.validate((aa) => {
        if (!aa) return;
        this.$http
          .put("http://vue.mengxuegu.com/pro-api/member/10", this.form)
          .then((res) => {
            if (res.data.code == 2000) {
              this.$message.success(res.data.message);
              this.git();
              this.dialogFormVisible = false;
            }
          });
      });
    },
    // 获取数据
    git() {
      this.$http
        .post(
          "http://vue.mengxuegu.com/pro-api/member/list/search/1/20",
          this.currentPage,
          this.pagesize
        )
        .then((res) => {
          console.log(res);
          this.datalist = res.data.data.rows;
          // 给总条数赋值
          this.total = res.data.data.total;
        });
    },
  },
  created() {
    this.git();
  },
};
</script>

<style scoped>
.a2 {
  width: 300px;
  border-radius: 3px;
  margin-left: 10px;
}
</style>