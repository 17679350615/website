(function(e){function t(t){for(var n,r,i=t[0],l=t[1],c=t[2],u=0,m=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},o=[];function r(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-c2617760":"4c623873"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=s[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=r(e);var c=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,a[1](c)}s[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"2bef":function(e,t,a){"use strict";var n=a("42a4"),s=a.n(n);s.a},"2fda":function(e,t,a){},"42a4":function(e,t,a){},"448f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{"margin-top":"50px"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入学生姓名",clearable:""},model:{value:e.studentName,callback:function(t){e.studentName=t},expression:"studentName"}}),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.searchStudentByName}},[e._v("搜索")]),a("el-button",{staticStyle:{"margin-left":"10px","margin-bottom":"20px"},attrs:{type:"primary"},on:{click:e.showDialog}},[e._v("新增学生")])],1),a("div",[a("el-table",{attrs:{data:e.students,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"uid",label:"学号",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别",width:"180"}}),a("el-table-column",{attrs:{prop:"age",label:"年龄",width:"180"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])},[e._v(' align="left"> ')])],1),a("el-button",{staticStyle:{"margin-top":"12px"},attrs:{type:"danger",size:"mini",disabled:0===e.multipleSelection.length},on:{click:e.deleteStudents}},[e._v("批量删除")])],1),a("el-dialog",{attrs:{title:e.dialogTitle[e.dialogStatus],visible:e.dialogFormVisible,center:""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"student",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{label:"姓名","label-width":e.formLabelWidth,prop:"name"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"性别","label-width":e.formLabelWidth,prop:"sex"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{value:e.label}})})),1)],1),a("el-form-item",{attrs:{label:"年龄","label-width":e.formLabelWidth,prop:"age"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",e._n(t))},expression:"form.age"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submitStudent}},[e._v("确 定")])],1)],1),a("el-upload",{staticStyle:{"margin-top":"20px"},attrs:{action:"/upload",multiple:"","on-success":e.handleSuccess,limit:3,"file-list":e.fileList}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1)},s=[],o=(a("4160"),a("b0c0"),a("159b"),{name:"Home",components:{},data:function(){return{fileList:[],studentName:"",multipleSelection:[],dialogTitle:{addStudent:"新增学生",editStudent:"编辑学生"},dialogStatus:"",rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],age:[{required:!0,message:"年龄不能为空"},{type:"number",message:"年龄必须为数字值"}]},options:[{value:"1",label:"男"},{value:"2",label:"女"}],msg:"",students:[],search:"",dialogFormVisible:!1,form:{name:"",age:"",sex:""},formLabelWidth:"120px"}},created:function(){this.findAllStudents()},watch:{studentName:function(){this.findAllStudents()}},methods:{handleSuccess:function(e){e.name;this.$message({message:"文件上传成功！",type:"success"})},searchStudentByName:function(){var e=this;""!==this.studentName&&this.$axios.get("/student/findStudentByName?name="+this.studentName).then((function(t){e.students=t.data})).catch((function(t){e.$message({type:"error",message:"查询失败，原因是"+t.data.message})}))},deleteStudents:function(){var e=this;this.$confirm("此操作将永久删除学生, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t="?";e.multipleSelection.forEach((function(e){t+="ids="+e.uid+"&"})),e.$axios.post("/student/deleteStudentsByIds"+t).then((function(t){t&&(e.findAllStudents(),e.$message.success("删除成功！"))}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},handleSelectionChange:function(e){this.multipleSelection=e,console.log(e)},submitStudent:function(){"addStudent"===this.dialogStatus?this.addStudent():"editStudent"===this.dialogStatus&&this.editStudent()},findAllStudents:function(){var e=this;this.$axios.get("/student/findAllStudents").then((function(t){e.students=t.data})).catch((function(t){e.$message({type:"error",message:"查询失败，原因是"+t.data.message})}))},handleEdit:function(e){this.dialogFormVisible=!0,this.dialogStatus="editStudent",this.form.uid=e.uid,this.form.name=e.name,this.form.age=e.age,this.form.sex=e.sex},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该学生, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$axios.post("/student/deleteStudent?uid="+e.uid).then((function(e){t.$message.success("删除成功!"),t.findAllStudents()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},showDialog:function(){this.form.uid="",this.form.name="",this.form.age="",this.form.sex="",this.dialogFormVisible=!0,this.dialogStatus="addStudent"},addStudent:function(){var e=this;this.$refs.student.validate((function(t){if(!t)return e.$message({message:"请输入所有字段",type:"error"}),!1;e.$axios.post("/student/addStudent",e.form).then((function(t){t&&(e.dialogFormVisible=!1,e.$message.success("添加成功！"),e.findAllStudents())})).catch((function(t){e.$message({message:"添加数据失败，原因是"+t.data.message,type:"error"})}))}))},editStudent:function(){var e=this;this.$axios.post("/student/updateStudent",this.form).then((function(t){e.dialogFormVisible=!1,e.$message.success("修改成功!"),e.findAllStudents()})).catch((function(t){e.$message({message:"数据更新失败，原因是"+t.data.message,type:"error"})}))}}}),r=o,i=(a("796e"),a("2877")),l=Object(i["a"])(r,n,s,!1,null,"1c6221ce",null);t["default"]=l.exports},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],r=a("2877"),i={},l=Object(r["a"])(i,s,o,!1,null,null,null),c=l.exports,u=a("a18c"),d=a("bc3a"),m=a.n(d),f=a("5c96"),h=a.n(f),p=(a("0fae"),a("2f62"));n["default"].use(p["a"]);var g=new p["a"].Store({state:{routes:[]},mutations:{findAllRoutes:function(e,t){e.routes=t}},actions:{}}),b=(a("4160"),a("b0c0"),a("159b"),function(e,t){t.state.routes.length>0||m.a.get("/menu").then((function(a){if(a.data){var n=v(a.data);e.addRoutes(n),t.commit("findAllRoutes",n)}}))}),v=function e(t){var n=[];return t.forEach((function(t){var s=t.pattern,o=t.component,r=t.name,i=t.children;i&&i instanceof Array&&(i=e(i));var l={path:s,name:r,children:i,component:function(e){a.e("chunk-c2617760").then(function(){var t=[a("feca")("./"+o+".vue")];e.apply(null,t)}.bind(this)).catch(a.oe)}};n.push(l)})),n};n["default"].config.productionTip=!1,n["default"].prototype.$axios=m.a,n["default"].use(h.a),u["a"].beforeEach((function(e,t,a){"/"===e.path?a():window.sessionStorage.getItem("user")?(b(u["a"],g),a()):a("/?redirect="+e.path)})),new n["default"]({router:u["a"],store:g,render:function(e){return e(c)}}).$mount("#app")},"57ec":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{"margin-top":"50px"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入教师姓名",clearable:""},model:{value:e.teacherName,callback:function(t){e.teacherName=t},expression:"teacherName"}}),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:e.searchTeacherByName}},[e._v("搜索")]),a("el-button",{staticStyle:{"margin-left":"10px","margin-bottom":"20px"},attrs:{type:"primary"},on:{click:e.showDialog}},[e._v("新增教师")])],1),a("div",[a("el-table",{attrs:{data:e.teachers,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"uid",label:"编号",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别",width:"180"}}),a("el-table-column",{attrs:{prop:"age",label:"年龄",width:"180"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])},[e._v(' align="left"> ')])],1),a("el-button",{staticStyle:{"margin-top":"12px"},attrs:{type:"danger",size:"mini",disabled:0===e.multipleSelection.length},on:{click:e.deleteTeachers}},[e._v("批量删除")])],1),a("el-dialog",{attrs:{title:e.dialogTitle[e.dialogStatus],visible:e.dialogFormVisible,center:""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"teacher",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{label:"姓名","label-width":e.formLabelWidth,prop:"name"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"性别","label-width":e.formLabelWidth,prop:"sex"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{value:e.label}})})),1)],1),a("el-form-item",{attrs:{label:"年龄","label-width":e.formLabelWidth,prop:"age"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",e._n(t))},expression:"form.age"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submitTeacher}},[e._v("确 定")])],1)],1),a("el-upload",{staticStyle:{"margin-top":"20px"},attrs:{action:"/upload",multiple:"","on-success":e.handleSuccess,limit:3,"file-list":e.fileList}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1)},s=[],o=(a("4160"),a("b0c0"),a("159b"),{name:"Home",components:{},data:function(){return{fileList:[],teacherName:"",multipleSelection:[],dialogTitle:{addTeacher:"新增教师",editTeacher:"编辑教师"},dialogStatus:"",rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],age:[{required:!0,message:"年龄不能为空"},{type:"number",message:"年龄必须为数字值"}]},options:[{value:"1",label:"男"},{value:"2",label:"女"}],msg:"",teachers:[],search:"",dialogFormVisible:!1,form:{name:"",age:"",sex:""},formLabelWidth:"120px"}},created:function(){this.findAllTeachers()},watch:{teacherName:function(){this.findAllTeachers()}},methods:{handleSuccess:function(e){e.name;this.$message({message:"文件上传成功！",type:"success"})},searchTeacherByName:function(){var e=this;""!==this.teacherName&&this.$axios.get("/teacher/findTeacherByName?name="+this.teacherName).then((function(t){e.teachers=t.data})).catch((function(t){e.$message({type:"error",message:"查询失败，原因是"+t.data.message})}))},deleteTeachers:function(){var e=this;this.$confirm("此操作将永久删除教师, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t="?";e.multipleSelection.forEach((function(e){t+="ids="+e.uid+"&"})),e.$axios.post("/teacher/deleteTeachersByIds"+t).then((function(t){t&&(e.findAllTeachers(),e.$message.success("删除成功！"))}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},handleSelectionChange:function(e){this.multipleSelection=e,console.log(e)},submitTeacher:function(){"addTeacher"===this.dialogStatus?this.addTeacher():"editTeacher"===this.dialogStatus&&this.editTeacher()},findAllTeachers:function(){var e=this;this.$axios.get("/teacher/findAllTeachers").then((function(t){e.teachers=t.data})).catch((function(t){e.$message({type:"error",message:"查询失败，原因是"+t.data.message})}))},handleEdit:function(e){this.dialogFormVisible=!0,this.dialogStatus="editTeacher",this.form.uid=e.uid,this.form.name=e.name,this.form.age=e.age,this.form.sex=e.sex},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该教师, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$axios.post("/teacher/deleteTeacher?uid="+e.uid).then((function(e){t.$message.success("删除成功!"),t.findAllTeachers()}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},showDialog:function(){this.form.uid="",this.form.name="",this.form.age="",this.form.sex="",this.dialogFormVisible=!0,this.dialogStatus="addTeacher"},addTeacher:function(){var e=this;this.$refs.teacher.validate((function(t){if(!t)return e.$message({message:"请输入所有字段",type:"error"}),!1;e.$axios.post("/teacher/addTeacher",e.form).then((function(t){t&&(e.dialogFormVisible=!1,e.$message.success("添加成功！"),e.findAllTeachers())})).catch((function(t){e.$message({message:"添加数据失败，原因是"+t.data.message,type:"error"})}))}))},editTeacher:function(){var e=this;this.$axios.post("/teacher/updateTeacher",this.form).then((function(t){e.dialogFormVisible=!1,e.$message.success("修改成功!"),e.findAllTeachers()})).catch((function(t){e.$message({message:"数据更新失败，原因是"+t.data.message,type:"error"})}))}}}),r=o,i=(a("bd54"),a("2877")),l=Object(i["a"])(r,n,s,!1,null,"0c2b9c57",null);t["default"]=l.exports},6958:function(e,t,a){},"796e":function(e,t,a){"use strict";var n=a("2fda"),s=a.n(n);s.a},a18c:function(e,t,a){"use strict";var n=a("2b0e"),s=a("8c4f"),o=a("448f"),r=a("bb51"),i=a("a55b"),l=a("57ec");n["default"].use(s["a"]);var c=[{path:"/",name:"Login",component:i["default"],hidden:!0},{path:"/home",name:"Home",component:r["default"],hidden:!0},{path:"/home",name:"导航一",component:r["default"],children:[{path:"/student",name:"学生管理",component:o["default"]},{path:"/teacher",name:"教师管理",component:l["default"]}]}],u=new s["a"]({routes:c});t["a"]=u},a55b:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"userForm",staticClass:"login",attrs:{model:e.loginForm,rules:e.rules}},[a("h3",{staticClass:"header-title"},[e._v("系统登录")]),a("el-form-item",{attrs:{prop:"username"}},[a("el-input",{attrs:{type:"text",placeholder:"请输入用户名",autocomplete:"off"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"请输入密码"},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),a("el-form-item",[a("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:e.submit}},[e._v("登录")])],1)],1)],1)},s=[],o=(a("ac1f"),a("5319"),a("bc3a")),r=a.n(o),i=a("5c96"),l=a("a18c");r.a.interceptors.response.use((function(e){if(!e.status||200!==e.status||500!==e.data.status)return e.data.msg&&i["Message"].success({message:e.data.msg,center:!0}),e;i["Message"].error({message:e.data.msg})}),(function(e){504===e.response.status||404===e.response.status?i["Message"].error({message:"没有找到服务，请确认请求地址是否正确"}):403===e.response.status?i["Message"].error({message:"权限不足"}):401===e.response.status?(i["Message"].error({message:"尚未登录，请登录"}),l["a"].replace("/")):i["Message"].error({message:"未知错误"})}));var c="",u=function(e,t){return r()({method:"post",url:"".concat(c).concat(e),data:t,transformRequest:[function(e){var t="";for(var a in e)t+=encodeURIComponent(a)+"="+encodeURIComponent(e[a])+"&";return t}],headers:{"Content-Type":"application/x-www-form-urlencoded"}})},d={name:"Login",data:function(){return{rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},loginForm:{username:"admin",password:"123456"}}},methods:{submit:function(){var e=this;this.$refs.userForm.validate((function(t){if(!t)return e.$message({message:"请输入所有字段",type:"error"}),!1;u("/doLogin",e.loginForm).then((function(t){if(null!=t.data.obj){window.sessionStorage.setItem("user",JSON.stringify(t.data.obj));var a=e.$route.query.redirect;e.$router.replace("/"===a||void 0===a?"/home":a)}}))}))}}},m=d,f=(a("2bef"),a("2877")),h=Object(f["a"])(m,n,s,!1,null,"69020096",null);t["default"]=h.exports},b50a:function(e,t,a){},bb51:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-container",[a("el-header",{staticClass:"home-header"},[a("div",{staticClass:"title"},[e._v("管理系统")]),a("div",{staticClass:"user-info"},[a("el-dropdown",{attrs:{trigger:"click"},on:{command:e.logout}},[a("span",[e._v(" "+e._s(e.user.name)),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{staticClass:"user-info",attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"logout"}},[e._v("退出")])],1)],1)],1)]),a("el-container",[a("el-aside",{attrs:{width:"200px"}},[a("el-menu",{on:{select:e.menuClick}},e._l(e.routes,(function(t,n){return t.hidden?e._e():a("el-submenu",{key:n,attrs:{index:n+""}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-location"}),a("span",[e._v(e._s(t.name))])]),e._l(t.children,(function(t,n){return a("el-menu-item",{key:n,attrs:{index:t.path}},[e._v(e._s(t.name))])}))],2)})),1)],1),a("el-main",["/home"!==this.$router.currentRoute.path?a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),a("el-breadcrumb-item",[a("a",{attrs:{href:"/"}},[e._v(e._s(this.$router.currentRoute.name))])])],1):e._e(),"/home"===this.$router.currentRoute.path?a("div",[e._v("欢迎来到管理系统")]):e._e(),a("router-view")],1)],1)],1)],1)},s=[],o=(a("ac1f"),a("5319"),{name:"About",data:function(){return{user:JSON.parse(window.sessionStorage.getItem("user"))}},computed:{routes:function(){return this.$store.state.routes}},methods:{menuClick:function(e){this.$router.push(e)},logout:function(e){var t=this;"logout"===e&&this.$confirm("您确定要退出吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$axios.get("/logout").then((function(e){})),window.sessionStorage.removeItem("user"),t.$store.commit("findAllRoutes",[]),t.$router.replace("/")})).catch((function(){t.$message({type:"info",message:"已取消退出"})}))}}}),r=o,i=(a("f694"),a("2877")),l=Object(i["a"])(r,n,s,!1,null,"310037ca",null);t["default"]=l.exports},bd54:function(e,t,a){"use strict";var n=a("6958"),s=a.n(n);s.a},f694:function(e,t,a){"use strict";var n=a("b50a"),s=a.n(n);s.a}});
//# sourceMappingURL=app.9e91ad52.js.map