<template>
  <div>
    <div style="margin-top:50px;">
      <el-input v-model="evangelTitle" placeholder="请输入新闻标题" style="width:80%" clearable></el-input>
      <el-button type="primary" style="margin-left: 10px;" @click="searchEvangelByTitle">搜索</el-button>
      <el-button type="primary" style="margin-left:10px;margin-bottom: 20px;" @click="showDialog">新增新闻</el-button>
    </div>
    <div>
      <el-table
          @selection-change="handleSelectionChange"
          :data="evangels"
          border>
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            prop="uid"
            label="编号"
            width="50">
        </el-table-column>
        <el-table-column
            prop="title"
            label="标题"
            width="300"
            :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
            prop="date"
            label="发布日期"
            :formatter= "dateformat"
            width="120">
        </el-table-column>
        <el-table-column
            prop="content"
            label="内容"
            width="380"
            :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
            prop="http"
            label="Http"
            width="200"
            :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
            fixed= "right"
            min-width="150%"
            label="操作">
          align="left">
          <template slot-scope="scope">
            <el-button
                size="small"
                @click="handleEdit(scope.row)">编辑</el-button>
            <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="danger" size="mini" style="margin-top: 12px" :disabled="multipleSelection.length === 0" @click="deleteEvangels">批量删除</el-button>
    </div>
    <el-dialog :title="dialogTitle[dialogStatus]" :visible.sync="dialogFormVisible" center>
      <el-form :model="form" :rules="rules" ref="evangel">
        <el-form-item label="标题" :label-width="formLabelWidth" prop="title" >
          <el-input v-model="form.title" type="textarea" maxlength="30" autocomplete="off" show-word-limit></el-input>
        </el-form-item>
        <el-form-item label="入职时间" :label-width="formLabelWidth">
          <el-date-picker type="date"  placeholder="选择日期" v-model="form.date" value-format= "yyyy-MM-dd" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="内容" :label-width="formLabelWidth" prop="introduce">
          <el-input
              type="textarea"
              v-model="form.content"
              maxlength="500"
              show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="Http" :label-width="formLabelWidth" prop="http" >
          <el-input v-model="form.http" type="textarea" maxlength="30" autocomplete="off" show-word-limit></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitEvangel">确 定</el-button>
      </div>
    </el-dialog>
    <el-upload
        style="margin-top:20px;"
        action="/upload"
        multiple
        :on-success="handleSuccess"
        :limit="3"
        :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      fileList: [],
      evangelTitle: '',
      multipleSelection:[],
      dialogTitle: {
        addEvangel: "新增新闻",
        editEvangel: "编辑新闻"
      },
      dialogStatus: "",
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        date: [
          { required: true, message: '请选择时间', trigger: 'change' }
        ],
        content: [
          { required: true, message: '请输入内容'},
        ],
        http: [
          { required: true, message: '请输入网址'}
        ]
      },
      msg: '',
      evangels:[],
      search: '',
      dialogFormVisible: false,
      form: {
        title: '',
        date: '',
        content: '',
        http: ''
      },
      formLabelWidth: '120px',
    }
  },
  created() {
    this.findAllEvangels();
  },
  watch:{
    evangelTitle () {
      this.findAllEvangels();
    }
  },
  methods: {
    handleSuccess (file) {
      const filename = file.name;
      this.$message({
        message: '文件上传成功！',
        type: 'success'
      });
    },
    searchEvangelByTitle () {
      if (this.evangelTitle !== '') {
        this.$axios.get("/evangel/findEvangelByTitle?title="+this.evangelTitle).then( (resp)=> {
          this.evangels = resp.data;
        }).catch( (error)=>{
          this.$message({
            type: 'error',
            message: "查询失败，原因是"+error.data.message
          });
        })
      }
    },
    deleteEvangels () {
      this.$confirm('此操作将永久删除新闻, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let ids = '?';
        this.multipleSelection.forEach( (item)=>{
          ids += 'ids='+item.uid+'&'
        });
        this.$axios.post("/evangel/deleteEvangelsByIds"+ids).then( (resp)=> {
          if (resp) {
            this.findAllEvangels();
            this.$message.success("删除成功！");
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val)
    },
    submitEvangel () {
      if (this.dialogStatus === 'addEvangel'){
        this.addEvangel();
      } else if(this.dialogStatus === "editEvangel") {
        this.editEvangel();
      }
    },
    findAllEvangels () {
      this.$axios.get("/evangel/findAllEvangels")
          .then((res) => {
            this.evangels = res.data;

          })
          .catch(error => {
            this.$message({
              type: 'error',
              message: "查询失败，原因是"+error.data.message
            });
          });
    },
    handleEdit (row) {
      this.dialogFormVisible = true;
      this.dialogStatus = "editEvangel";
      this.form.uid = row.uid;
      this.form.title= row.title;
      this.form.date = row.date;
      this.form.content = row.content;
      this.form.http = row.http;
    },
    handleDelete (row) {
      this.$confirm('此操作将永久删除该新闻, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.post("/evangel/deleteEvangel?uid="+row.uid).then ((resp)=>{
          this.$message.success("删除成功!")
          this.findAllEvangels();
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    showDialog () {
      this.form.uid = '';
      this.form.title= '';
      this.form.date = '';
      this.form.content = '';
      this.form.http = '';
      this.dialogFormVisible = true;
      this.dialogStatus = "addEvangel";
    },
    addEvangel () {
      this.$refs.evangel.validate((valid) => {
        if (valid) {
          this.$axios.post("/evangel/addEvangel",this.form).then( (resp)=>{
            if (resp) {
              this.dialogFormVisible = false;
              this.$message.success("添加成功！");
              this.findAllEvangels();
            }
          }).catch((error)=>{
            this.$message({
              message: '添加数据失败，原因是'+error.data.message,
              type: 'error'
            })
          })
        } else {
          this.$message({
            message: '请输入所有字段',
            type: 'error'
          })
          return false;
        }
      });
    },
    editEvangel () {
      this.$axios.post("/evangel/updateEvangel",this.form).then( (resp)=>{
        this.dialogFormVisible = false;
        this.$message.success("修改成功!");
        this.findAllEvangels();
      }).catch( (error)=> {
        this.$message({
          message: '数据更新失败，原因是'+error.data.message,
          type: 'error'
        })
      })
    },
    dateformat:function(row, column) {
      let date = row[column.property];
      if (date == undefined) return '';
      let dt = new Date(date);
      return dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate()
    },
  }
}
</script>
<style scoped>
.table {
  margin: 0 auto;
  clear: both;
}
</style>
