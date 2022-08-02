<template>
  <div>
    <el-input placeholder="供应商管理" class="a2"></el-input>
    <el-input placeholder="联系人" class="a2"></el-input>
    <el-input placeholder="联系电话" class="a2"></el-input><br />
    <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
    <el-button type="primary">查询</el-button>
    <el-button type="primary">重置</el-button>
    <el-card class="box-card">
      <template>
        <el-table :data="datalist" style="width: 100%">
          <el-table-column type="index" label="序号"> </el-table-column>
          <el-table-column prop="name" label="供应商名称"> </el-table-column>
          <el-table-column prop="linkman" label="联系人"> </el-table-column>
          <el-table-column prop="mobile" label="联系电话"> </el-table-column>
          <el-table-column prop="remark" label="备注"> </el-table-column>
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

      <!-- 添加 -->
      <el-dialog title="供应商添加" :visible.sync="dialogFormVisible">
        <el-form :model="form" ref="form" :rules="rules">
          <el-form-item label="供应商名称" prop="name">
            <el-input
              v-model="form.name"
              autocomplete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系人" prop="linkman">
            <el-input
              v-model="form.linkman"
              autocomplete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系电话" prop="payType">
            <el-input
              v-model="form.mobile"
              autocomplete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>

          <el-form-item label="备注">
            <el-input
              v-model="form.remark"
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
      <el-dialog title="供应商编辑" :visible.sync="dialogFormVisible1">
        <el-form :model="bjlist" ref="form" :rules="rules">
          <el-form-item label="供应商名称" prop="name">
            <el-input
              v-model="bjlist.name"
              autocomplete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系人" prop="linkman">
            <el-input
              v-model="bjlist.linkman"
              autocomplete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系电话" prop="payType">
            <el-input
              v-model="bjlist.mobile"
              autocomplete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>

          <el-form-item label="备注">
            <el-input
              v-model="bjlist.remark"
              autocomplete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="add1">确 定</el-button>
        </div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "MobanGys",

  data() {
    return {
      dialogFormVisible1: false,
      dialogFormVisible: false,
      datalist: [],
      bjlist: [],
      form: {
        linkman: "", //联系人
        name: "", //供应商
        mobile: "", //手机
        remark: "", //备注
      },
      rules: {
        linkman: [{ required: true, message: "联系人能为空", trigger: "blur" }],
        name: [
          { required: true, message: "供应商姓名能不能为空", trigger: "blur" },
        ],
      },
        // 分页用的数据
      currentPage: 1, //当前页码
      pagesize: 10, //每页显示多少条
      total: 0,
    };
  },

  mounted() {},

  methods: {
     //   分页
    handleSizeChange(val) {
      this.pagesize = val;
      console.log(`每页 ${val} 条`);
      this.xr();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
      this.xr();
    },
    // 点击编辑确定
    add1() {
      this.$refs.form.validate((aa) => {
        if (!aa) return;

        this.$http
          .put("http://vue.mengxuegu.com/pro-api/supplier/10", this.bjlist)
          .then((res) => {
            console.log(res);
            if (res.data.code == 2000) {
              this.$message.success(res.data.message);
              this.xr();
              this.dialogFormVisible1 = false;
            }
          });
      });
    },
    // 编辑
    bj(val) {
      this.dialogFormVisible1 = true;
      this.bjlist = val;
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
            .delete("http://vue.mengxuegu.com/pro-api/supplier/11", id)
            .then((res) => {
              console.log(res);
              if (res.data.code == 2000) {
                this.$message.success(res.data.message);
              }
              this.xr();
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
          .post("http://vue.mengxuegu.com/pro-api/supplier", this.form)
          .then((res) => {
            console.log(res);
            if (res.data.code == 2000) {
              this.$message.success(res.data.message);
              this.xr();
              this.dialogFormVisible = false;
            }
          });
      });
    },
    // 获取数据
    xr() {
      this.$http
        .post("http://vue.mengxuegu.com/pro-api/supplier/list/search/1/10",this.pagesize,this.currentPage)
        .then((res) => {
            // console.log(res);
          this.datalist = res.data.data.rows;
          this.total=res.data.data.total
        });
    },
  },
  created() {
    this.xr();
  },
};
</script>

<style  scoped>
.a2 {
  width: 300px;
  border-radius: 3px;
  margin-left: 10px;
}
</style>