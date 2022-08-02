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
          <el-table-column prop="name" label="商品名称"> </el-table-column>
          <el-table-column prop="code" label="商品编码"> </el-table-column>
          <el-table-column prop="spec" label="商品规格"> </el-table-column>
          <el-table-column prop="retailPrice" label="零售价"> </el-table-column>
          <el-table-column prop="purchasePrice" label="进货价">
          </el-table-column>
          <el-table-column prop="storageNum" label="库存数量">
          </el-table-column>
          <el-table-column prop="supplierName" label="供应商">
          </el-table-column>
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
      <!-- 添加 -->
      <el-dialog title="供应商添加" :visible.sync="dialogFormVisible">
        <el-form :model="form" :rules="rules" ref="form">
          <el-form-item label="商品名称" prop="name">
            <el-input
              v-model="form.name"
              autocomplete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>
          <el-form-item label="商品编码" prop="code">
            <el-input
              v-model="form.code"
              autocomplete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>
          <el-form-item label="商品规格">
            <el-input
              v-model="form.spec"
              autocomplete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>

          <el-form-item label="零售价" prop="retailPrice">
            <el-input
              v-model="form.retailPrice"
              autocomplete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>
          <el-form-item label="进货价">
            <el-input
              v-model="form.purchasePrice"
              autocomplete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>
          <el-form-item label="库存数量">
            <el-input
              v-model="form.storageNum"
              autocomplete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>
          <el-form-item label="供应商">
            <el-input
              v-model="form.supplierName"
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
      <el-dialog title="供应商添加" :visible.sync="dialogFormVisible1">
        <el-form :model="bjlist" :rules="rules" ref="form">
          <el-form-item label="商品名称" prop="name">
            <el-input
              v-model="bjlist.name"
              autocomplete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>
          <el-form-item label="商品编码" prop="code">
            <el-input
              v-model="bjlist.code"
              autocomplete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>
          <el-form-item label="商品规格">
            <el-input
              v-model="bjlist.spec"
              autocomplete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>

          <el-form-item label="零售价" prop="retailPrice">
            <el-input
              v-model="bjlist.retailPrice"
              autocomplete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>
          <el-form-item label="进货价">
            <el-input
              v-model="bjlist.purchasePrice"
              autocomplete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>
          <el-form-item label="库存数量">
            <el-input
              v-model="bjlist.storageNum"
              autocomplete="off"
              style="width: 80%"
            ></el-input>
          </el-form-item>
          <el-form-item label="供应商">
            <el-input
              v-model="bjlist.supplierName"
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
  data() {
    return {
      dialogFormVisible: false,
      dialogFormVisible1: false,
      datalist: [],
      bjlist: [],
      form: {
        name: "",
        code: "",
        spec: "",
        retailPrice: 0,
        purchasePrice: 0,
        storageNum: 0,
        supplierName: "",
      },
      rules: {
        name: [
          { required: true, message: "商品名称不能为空", trigger: "blur" },
        ],
        code: [
          { required: true, message: "商品编码不能为空", trigger: "blur" },
        ],
        retailPrice: [
          { required: true, message: "零售价不能为空", trigger: "blur" },
        ],
      },
    };
  },

  mounted() {},

  methods: {
    // 删除
     del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$http
            .delete("http://vue.mengxuegu.com/pro-api/goods/10", id)
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
    // 点击编辑框的确认按钮
    add1(){
         this.$refs.form.validate((aa) => {
        if (!aa) return;

        this.$http
          .put("http://vue.mengxuegu.com/pro-api/goods/10", this.bjlist)
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
    // 点击编辑按钮
    bj(val){
        this.dialogFormVisible1=true
        this.bjlist=val
    },
    // 添加
    add() {
      // http://vue.mengxuegu.com/pro-api/goods
      this.$refs.form.validate((aa) => {
        if (!aa) return;
        this.$http
          .post("http://vue.mengxuegu.com/pro-api/goods", this.form)
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
    // 请求数据
    xr() {
      this.$http
        .post("http://vue.mengxuegu.com/pro-api/goods/list/search/1/10")
        .then((res) => {
          console.log(res);
          this.datalist = res.data.data.rows;
          console.log(this.datalist);
          //   this.total = res.data.data.total;
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