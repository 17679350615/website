<template>
  <div>
    <div style="margin-top:50px;">
      <el-input v-model="teacherName" placeholder="请输入教师姓名" style="width:80%" clearable></el-input>
      <el-button type="primary" style="margin-left: 10px;" @click="searchTeacherByName">搜索</el-button>
      <el-button type="primary" style="margin-left:10px;margin-bottom: 20px;" @click="showDialog">新增教师</el-button>
    </div>
    <div>
      <el-table
          height="350"
          @selection-change="handleSelectionChange"
          :data="teachers"
          border>
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            prop="uid"
            label="编号"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="sex"
            label="性别"
            width="180">
        </el-table-column>
        <el-table-column
            prop="age"
            label="年龄"
            width="180">
        </el-table-column>
        <el-table-column
            prop="date1"
            label="入职日期"
            :formatter= "date1format"
            width="180">
        </el-table-column>
        <el-table-column
            prop="date2"
            label="入职时间"
            width="180">
        </el-table-column>
        <el-table-column
            prop="state"
            label="状态"
            :formatter= "stateformat"
            width="180">
        </el-table-column>
<!--        <el-table-column
            prop="type"
            label="爱好"
            width="180">
        </el-table-column>-->
        <el-table-column
            prop="interview"
            label="是否通过面试"
            width="180">
        </el-table-column>
        <el-table-column
            prop="major"
            label="专业"
            width="180">
        </el-table-column>

        <el-table-column
            prop="hobby"
            label="爱好"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址"
            width="250"
            :formatter="addressFormat">
        </el-table-column>
        <el-table-column
            prop="salary"
            label="薪资"
            width="180">
        </el-table-column>
        <el-table-column
            prop="degree"
            label="满意度"
            width="180">
        </el-table-column>
        <el-table-column
            prop="mark"
            label="综合成绩"
            width="180">
        </el-table-column>
        <el-table-column
            prop="color"
            label="喜欢的颜色"
            width="180">
        </el-table-column>
        <el-table-column
            prop="email"
            label="邮箱"
            width="180">
        </el-table-column>
        <el-table-column
            prop="emailStyle"
            label="邮箱格式"
            width="180">
        </el-table-column>
        <el-table-column
            prop="code"
            label="密码"
            width="180">
        </el-table-column>
        <el-table-column
            prop="stature"
            label="身高(cm)"
            width="180">
        </el-table-column>
        <el-table-column
            prop="weight"
            label="体重(kg)"
            width="180">
        </el-table-column>
        <el-table-column
            prop="submitLink"
            label="提交链接"
            width="230">
        </el-table-column>
        <el-table-column
            prop="status"
            label="职位"
            width="180">
        </el-table-column>
        <el-table-column
            prop="introduce"
            label="自我介绍"
            width="250">
        </el-table-column>
        <el-table-column
            fixed= "right"
            label="操作"
            min-width="150%"
            align="left">
          <template slot-scope="scope" >
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
      <el-button type="danger" size="mini" style="margin-top: 12px" :disabled="multipleSelection.length === 0" @click="deleteTeachers">批量删除</el-button>
    </div>
    <el-dialog :title="dialogTitle[dialogStatus]" :visible.sync="dialogFormVisible" center>
      <el-form :model="form" :rules="rules" ref="teacher">
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name":validate-event="true"  autocomplete="off"  placeholder="请输入汉字"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择" style="width: 100%">
            <el-option
                v-for="item in options"
                :key="item.value"
                :value="item.label">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
          <el-input v-model.number="form.age" autocomplete="off" placeholder="请输入数字"></el-input>
        </el-form-item>
        <el-form-item label="入职时间" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-date-picker type="date"  placeholder="选择日期" v-model="form.date1" value-format= "yyyy-MM-dd" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2.5">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2" value-format="HH:mm:ss" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth" >
          <el-switch v-model="form.state" ></el-switch>
        </el-form-item>
        <el-form-item label="是否通过面试" :label-width="formLabelWidth">
          <el-radio-group v-model="form.interview" >
            <el-radio label="是">是</el-radio>
            <el-radio label="否">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="专业" :label-width="formLabelWidth" prop="major">
          <el-autocomplete
              class="inline-input"
              v-model="form.major"
              :fetch-suggestions="majorQuerySearch"
              placeholder="请输入汉字"
              style="width: 300px"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item label="爱好" :label-width="formLabelWidth" prop= "hobby">
<!--          <el-form-item>{{form.hobbys}}</el-form-item>-->
          <el-checkbox-group v-model="form.hobbys" >
            <el-checkbox label="打篮球"></el-checkbox>
            <el-checkbox label="踢足球"></el-checkbox>
            <el-checkbox label="唱歌"></el-checkbox>
            <el-checkbox label="跳舞"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth" prop="address">
          <el-cascader
              v-model="form.addresses"
              :options="addressOptions"
              :props="{ expandTrigger: 'hover' }">
          </el-cascader>
        </el-form-item>
        <el-form-item label="薪资" :label-width="formLabelWidth" prop="salary">
          <template>
            <el-input-number v-model="form.salary" :step="50" ></el-input-number>
          </template>
        </el-form-item>
        <el-form-item label="满意度" :label-width="formLabelWidth" prop="degree">
          <el-rate
              v-model="form.degree"
              show-text
              text-color="#ff9900">
          </el-rate>
        </el-form-item>
        <el-form-item label="综合成绩" :label-width="formLabelWidth" prop="mark">
          <el-slider
              v-model="form.mark"
              show-input>
          </el-slider>
        </el-form-item>
        <el-form-item label="喜欢的颜色" :label-width="formLabelWidth" prop="color">
          <el-color-picker v-model="form.color"></el-color-picker>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email" >
          <el-input placeholder="请输入字母或数字" v-model="form.email" class="input-with-select" >

              <el-select v-model="form.emailStyle" slot="append" placeholder="请选择" style="width: 150px">
                <el-option label="@qq.com" value="@qq.com"></el-option>
                <el-option label="@foxmail.com" value="@foxmail.com"></el-option>
                <el-option label="@gmail.com" value="@gmail.com"></el-option>
              </el-select>


          </el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="code">
          <el-input placeholder="请输入字母或数字" v-model="form.code" show-password></el-input>
        </el-form-item>
        <el-form-item label="身高" :label-width="formLabelWidth" prop="stature">
          <el-input placeholder="请输入数字" v-model.number="form.stature">
            <template slot="append">cm</template>
          </el-input>
        </el-form-item>
        <el-form-item label="体重" :label-width="formLabelWidth" prop="weight">
          <el-input placeholder="请输入数字" v-model.number="form.weight">
            <template slot="append">kg</template>
          </el-input>
        </el-form-item>
        <el-form-item label="提交链接" :label-width="formLabelWidth" prop="submitLink">
          <el-autocomplete
              class="inline-input"
              v-model="form.submitLink"
              :fetch-suggestions="querySearch"
              placeholder="请输入链接"
              style="width: 300px"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item label="职位" :label-width="formLabelWidth" prop="status">
          <el-select v-model="form.status" placeholder="请选择" style="width: 100%">
            <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :value="item.label">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="自我介绍" :label-width="formLabelWidth" prop="introduce">
          <el-input
              type="textarea"
              placeholder="请输入汉字或标点符号"
              v-model="form.introduce"
              maxlength="40"
              show-word-limit
          >
          </el-input>
        </el-form-item>


      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitTeacher">确 定</el-button>
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

import { regionData, CodeToText } from "element-china-area-data";

export default {
  name: 'Home',
  components: {
  },
  data () {
    var checkName = (rule, value, callback) => {
      rule = /^[\u4e00-\u9fa5]{2,6}$/;
      if (!value) {
        callback(new Error('名字不能为空'));
      } else {
        if(!rule.test(value)) {
          callback(new Error('姓名必须为2-6个汉字'));

        } else  {
          callback();
        }
      }
    };

    var checkAge = (rule, value, callback) => {
      if (!value) {
        callback(new Error('年龄不能为空'));
      } else {
        if(value < 18 || value > 60) {
          callback(new Error('年龄必须大于18和小于60'));
        } else {
          callback();
        }
      }
    };

    var checkSalary = (rule, value, callback) => {
      if (!value) {
        callback(new Error('薪资不能为空'));
      } else {
        if(value < 0) {
          callback(new Error('薪资必须大于0'));
        } else {
          callback();
        }
      }
    };

    var checkMark = (rule, value, callback) => {
      if (!value) {
        callback(new Error('成绩不能为空'));
      } else {
        if(value < 60) {
          callback(new Error('成绩必须大于60'));
        } else {
          callback();
        }
      }
    };



    var checkStature = (rule, value, callback) => {

        if(value < 150 || value > 220) {
          callback(new Error('身高必须大于150cm，小于220cm'));
        } else {
          callback();
        }

    };

    var checkWeight = (rule, value, callback) => {

      if(value < 35 || value > 200) {
        callback(new Error('体重必须大于35kg，小于200kg'));
      } else {
        callback();
      }

    };

    var checkCode = (rule, value, callback) => {
      rule = /^[a-zA-Z0-9]{6,20}$/;
      if (!value) {
        callback(new Error('密码不能为空'));
      } else {
        if(!rule.test(value)) {
          callback(new Error('密码必须由6-20位的数字和字母组成'));
        } else {
          callback();
        }
      }
    };

    var checkIntroduce = (rule, value, callback) => {
      rule = /^[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5|\u4e00-\u9fa5|0-9a-zA-Z]{10,40}$/;
      if (!value) {
        callback(new Error('自我介绍不能为空'));
      } else {
        if(!rule.test(value)) {
          callback(new Error('自我介绍由10-40中文和标点符号组成'));
        } else {
          callback();
        }
      }
    }

    var checkStatus = (rule, value, callback) => {
      rule = /^[\u4e00-\u9fa5]{2,10}$/;
      if (!value) {
        callback(new Error('职位不能为空'));
      } else {
        if(!rule.test(value)) {
          callback(new Error('职位由2-10个汉字组成'));
        } else {
          callback();
        }
      }
    };

    var checkSubmitLink = (rule, value, callback) => {
      rule = /^(https?|ftp|file):{0,30}/;
      if (!value) {
        callback(new Error('提交网址不能为空'));
      } else {
        if(!rule.test(value)) {
          callback(new Error('网址必须符合格式'));
        } else {
          callback();
        }
      }
    };

    var checkMajor = (rule, value, callback) => {
      rule = /^[\u4e00-\u9fa5]{2,20}$/;
      if (!value) {
        callback(new Error('专业不能为空'));
      } else {
        if(!rule.test(value)) {
          callback(new Error('专业必须为2-20个汉字'));

        } else  {
          callback();
        }
      }
    };

    var checkEmail = (rule, value, callback) => {
      rule = /^[a-zA-Z0-9]{2,20}$/;
      if (!value) {
        callback(new Error('email不能为空'));
      } else {
        if(!rule.test(value)) {
          callback(new Error('email必须由2-20个数字或字母组成'));

        } else  {
          callback();
        }
      }
    };

    var checkEmailStyle = (rule, value, callback) => {

      if (!value) {
        callback(new Error('email格式不能为空'));
      } else {
        callback();
      }
    };



    return {
      links: [],
      majors: [],
      fileList: [],
      teacherName: '',
      multipleSelection:[],
      dialogTitle: {
        addTeacher: "新增教师",
        editTeacher: "编辑教师"
      },
      dialogStatus: "",
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { validator: checkName, trigger: 'change'}
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        age: [
          { required: true, message: '年龄不能为空'},
          { type: 'number', message: '年龄必须为数字值'},
          { validator: checkAge, trigger: 'change'}
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'time', required: true, message: '请选择时间', trigger: 'change' }
        ],
        interview: [
          { required: true, message: '请选择是否通过面试', trigger: 'change' }
        ],
        major: [
          { required: true, message: '请输入专业', trigger: 'change' },
          {validator: checkMajor, trigger: 'change'}
        ],
        hobbys: [
          { trigger: 'change'}
        ],
        addresses: [
          { required: true, message: '请选择地址', trigger: 'change'}
        ],
        salary: [
          { required: true, message: '请填写薪资',type: 'number', trigger: 'change'},
          { validator: checkSalary, trigger: 'change'}
        ],
        degree: [
          {type: 'number', trigger: 'change'}
        ],
        mark: [
          { type: 'number', required: true, trigger: 'change'},
          { validator: checkMark, trigger: 'change'}
        ],
        color: [
          {trigger: 'change'}
        ],
        email: [
          {required: true, message: 'email不能为空',trigger: 'change'},
          {validator: checkEmail, trigger: 'change'}
        ],
        emailStyle: [
          {required: true, message: 'email格式不能为空',trigger: 'change'},
          {validator: checkEmailStyle, trigger: 'change'}
        ],
        code: [
          {required: true, trigger: 'change'},
          {validator: checkCode, trigger: 'change'}
        ],
        stature: [
          { type: 'number', trigger: 'change'},
          { validator: checkStature, trigger: 'change'}
        ],
        weight: [
          {type: 'number', trigger: 'change'},
          {validator: checkWeight, trigger: 'change'}
        ],
        submitLink: [
          {required: true, trigger: 'change'},
          {validator: checkSubmitLink, trigger: 'change'}
        ],
        status: [
          {trigger: 'change', required: true},
          {validator: checkStatus, trigger: 'change'}
        ],
        introduce: [
          {required: true, trigger: 'change'},
          {validator: checkIntroduce, trigger: 'change'}
        ]
      },
      options: [{
        value: '1',
        label: '男'
      }, {
        value: '2',
        label: '女'
      }],
      statusOptions: [{
        value: '1',
        label: '副教授'
      }, {
        value: '2',
        label: '教授'
      }, {
        value: '3',
        label: '硕导'
      }, {
        value: '4',
        label: '博导'
      }],
      addressOptions: regionData,
      msg: '',
      teachers:[],
      search: '',
      dialogFormVisible: false,
      form: {
        name: '',
        age: '',
        sex: '',
        date1: '',
        date2: '',
        state: false,
        interview: '',
        major: '',
        hobby: '',
        hobbys: [],
        address: '',
        addresses: [],
        salary: undefined,
        degree: undefined,
        mark:  undefined,
        color: '',
        email: undefined,
        emailStyle: '',
        code: '',
        stature: undefined,
        weight: undefined,
        submitLink: '',
        status: '',
        introduce: ''

      },
      formLabelWidth: '120px',

    }
  },
  created() {
    this.findAllTeachers();
  },
  watch:{
    teacherName () {
      this.findAllTeachers();
    }
  },
  methods: {
    // deleteFile (file) {
    //   console.log(file)
    // },

    querySearch(queryString, cb) {
      var links = this.links;
      var results = queryString ? links.filter(this.createFilter(queryString)) : links;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    majorQuerySearch(queryString, cb) {
      var majors = this.majors;
      var results = queryString ? majors.filter(this.createFilter(queryString)) : majors;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (link) => {
        return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [
        { "value": "https://www.google.cn/" },
        { "value": "https://www.baidu.com/" },
        { "value": "https://www.sohu.com/"},
        { "value": "https://www.sina.com.cn/" },
        { "value": "http://www.firefox.com.cn/"}
      ];
    },
    majorLoadAll() {
      return [
        { "value": "语文" },
        { "value": "数学" },
        { "value": "英语"},
        { "value": "政治" },
        { "value": "历史"},
        { "value": "地理"},
        { "value": "生物"},
        { "value": "物理"},
        { "value": "化学"},
        { "value": "计算机与信息科学技术"},
        { "value": "软件工程"},
        { "value": "工商管理"},
        { "value": "新闻与传媒"}
      ];
    },

    preparSave() {
      this.form.hobby = this.form.hobbys.join(",");
      this.form.address = this.form.addresses.join(",");
    },
    fetch() {
      if(this.form.hobby)
      {
        this.form.hobbys = this.form.hobby.split(",");
      }
      else
      {
        this.form.hobbys = [];
      }

      if(this.form.address)
      {
        this.form.addresses = this.form.address.split(",");
      }
      else
      {
        this.form.addresses = [];
      }
    },
    handleSuccess (file) {
      const filename = file.name;
      this.$message({
        message: '文件上传成功！',
        type: 'success'
      });
    },
    searchTeacherByName () {
      if (this.teacherName !== '') {
        this.$axios.get("/teacher/findTeacherByName?name="+this.teacherName).then( (resp)=> {
          this.teachers = resp.data;
        }).catch( (error)=>{
          this.$message({
            type: 'error',
            message: "查询失败，原因是"+error.data.message
          });
        })
      }
    },
    deleteTeachers () {
      this.$confirm('此操作将永久删除教师, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let ids = '?';
        this.multipleSelection.forEach( (item)=>{
          ids += 'ids='+item.uid+'&'
        });
        this.$axios.post("/teacher/deleteTeachersByIds"+ids).then( (resp)=> {
          if (resp) {
            this.findAllTeachers();
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
    submitTeacher () {
      if (this.dialogStatus === 'addTeacher'){
        this.addTeacher();
      } else if(this.dialogStatus === "editTeacher") {
        this.editTeacher();
      }
    },
    findAllTeachers () {
      this.$axios.get("/teacher/findAllTeachers")
          .then((res) => {
            this.teachers = res.data
            this.teachers.forEach((teacher)=>{
              this.fetch();
            })
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
      this.dialogStatus = "editTeacher";
      this.form.uid = row.uid;
      this.form.name = row.name;
      this.form.age = row.age;
      this.form.sex = row.sex;
      this.form.date1 = row.date1;
      this.form.date2 = row.date2;
      this.form.state = row.state;
      this.form.interview =row.interview;
      this.form.major = row.major;
      this.form.hobby = row.hobby;
      this.form.hobbys = row.hobby.split(",");
      this.form.address = row.address;
      this.form.addresses = row.address.split(",")
      this.form.salary = row.salary;
      this.form.degree = row.degree;
      this.form.mark = row.mark;
      this.form.color = row.color;
      this.form.email = row.email;
      this.form.emailStyle = row.emailStyle;
      this.form.code = row.code;
      this.form.stature = row.stature;
      this.form.weight = row.weight;
      this.form.submitLink = row.submitLink;
      this.form.status = row.status;
      this.form.introduce = row.introduce
    },
    handleDelete (row) {
      this.$confirm('此操作将永久删除该教师, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.post("/teacher/deleteTeacher?uid="+row.uid).then ((resp)=>{
          this.$message.success("删除成功!")
          this.findAllTeachers();
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
      this.form.name = '';
      this.form.age = '';
      this.form.sex = '';
      this.form.date1 = '';
      this.form.date2 = '';
      this.form.state = false;
      this.form.interview = '';
      this.form.major = '';
      this.form.hobby = '';
      this.form.hobbys= [];
      this.form.address= '';
      this.form.addresses= [];
      this.form.salary= 5000;
      this.form.degree = undefined;
      this.form.mark = undefined;
      this.form.color = '#409EFF';
      this.form.email = '';
      this.form.emailStyle = '';
      this.form.code = '';
      this.form.stature = undefined;
      this.form.weight = undefined;
      this.form.submitLink = '';
      this.form.status = '';
      this.form.introduce = '';


      this.dialogFormVisible = true;
      this.dialogStatus = "addTeacher";
    },
    addTeacher () {
      this.$refs.teacher.validate((valid) => {
        if (valid) {
          this.preparSave()
          this.$axios.post("/teacher/addTeacher",this.form).then( (resp)=>{
            console.log(resp);
            if (resp.data  == "success") {
              this.dialogFormVisible = false;
              this.$message.success("添加成功！");
              this.findAllTeachers();
            } else {
              this.$message({
                message: resp.data.join(','),
                type: 'error'
              })
              return false;
            }
          }).catch((error)=>{
            this.$message({
              message: '添加数据失败，原因是'+error.data.message,
              type: 'error'
            })
          })
        } else {
          this.$message({
            message: '请检查表单',
            type: 'error'
          })
          return false;
        }
      });
    },

    editTeacher () {
      this.$refs.teacher.validate((valid) => {
        if(valid){
          this.preparSave();
          this.$axios.post("/teacher/updateTeacher",this.form).then( (resp)=>{
            console.log(resp);
            if(resp.data  == "success") {
              this.dialogFormVisible = false;
              this.$message.success("修改成功!");
              this.findAllTeachers();
            } else {
              this.$message({
                message: resp.data.join(','),
                type: 'error'
              })
              return false;
            }
          }).catch( (error)=> {
            this.$message({
              message: '数据更新失败，原因是'+error.data.message,
              type: 'error'
            })
          })
        } else {
          this.$message({
            message: '请检查表单',
            type: 'error'
          })
          return false;
        }
      });

    },

    date1format:function(row, column) {
      let date = row[column.property];
      if (date == undefined) return '';
      let dt = new Date(date);
      return dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate()
    },
    stateformat:function (row, column) {
      let state = row[column.property];
      if (state == '1') {
        return '启用';
      }else {
        return '禁用';
      }
    },
    addressFormat:function (row,column) {
      let address = row[column.property];
      var addresses = address.split(',');
      var loc = "";
      for (let i = 0; i < addresses.length; i++) {
        loc += CodeToText[addresses[i]];
        loc += ",";
      }
      loc = loc.slice(0,loc.length-1);
      return loc;
    }
  },
  mounted() {
    this.links = this.loadAll();
    this.majors = this.majorLoadAll();
  }

}
</script>
<style scoped>
.table {
  margin: 0 auto;
  clear: both;
}
.el-select .el-input{
  width: 130px;
}

.input-with-select {
  background-color: #fff;
}
</style>
