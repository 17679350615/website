<template>
  <el-container style="height: 100%; margin: fill;">
    <el-header style="background: midnightblue;color: white">
      <el-row class="el-row" justify="space-between" style="margin-left: 120px" >
        <el-col :span="6" >
          <div class="grid-content bg-blue" >
            <el-link @click="" type="primary" >学生</el-link>
            <a> | </a>
            <el-link @click="" type="primary">教工</el-link>
            <a> | </a>
            <el-link href="" type="primary">校友</el-link>
            <a> | </a>
            <el-link href="" type="primary">考生</el-link>
            <a> | </a>
            <el-link href="" type="primary">访客</el-link>
          </div>
        </el-col>
        <el-col :span="8" >
          <div class="grid-content bg-blue">

          </div>
        </el-col>
        <el-col :span="10" >
          <div class="grid-content bg-blue">
            <el-link href="" type="primary" >English</el-link>
            <a> | </a>
            <el-link href="" type="primary">数字图书</el-link>
            <a> | </a>
            <el-link href="" type="primary">校园邮箱</el-link>
            <a> | </a>
            <el-link href="" type="primary">自服务系统</el-link>
            <a> | </a>
            <el-link href="" type="primary">校园门户</el-link>
            <a> | </a>
            <el-link type="primary"  @click="login">正版化平台</el-link>
          </div>
        </el-col>
      </el-row>
    </el-header>

    <el-header style="background: darkblue;height: 100px" >
      <a href="" title="重庆师范大学" style="margin-left: 100px">
        <img src="../assets/logo.png" border="0">
        <img src="../assets/xiaoxun.png" style="margin-left: 300px">
        <img src="../assets/xiaohui.png" style="margin-left: 300px">
      </a>
    </el-header>

    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="white"
        text-color="black"
        style="margin-left: 120px"
        >
      <el-menu-item index="1">网站新闻</el-menu-item>
      <el-submenu index="2">
        <template slot="title">新闻资讯</template>
        <el-menu-item index="2-1">新闻网</el-menu-item>
        <el-menu-item index="2-2">电视台</el-menu-item>
        <el-menu-item index="2-3">师大报</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">学校概览</template>
        <el-menu-item index="3-1">学校简介</el-menu-item>
        <el-menu-item index="3-2">学校章程</el-menu-item>
        <el-menu-item index="3-3">校史追溯</el-menu-item>
        <el-menu-item index="3-4">核心理念</el-menu-item>
        <el-menu-item index="3-5">校徽校歌</el-menu-item>
        <el-menu-item index="3-6">重师图库</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">学院设置</el-menu-item>
      <el-menu-item index="5">管理机构</el-menu-item>
      <el-submenu index="6">
        <template slot="title">人才师资</template>
        <el-menu-item index="6-1">名师风采</el-menu-item>
        <el-menu-item index="6-2">正高职称人员</el-menu-item>
        <el-menu-item index="6-3">人才招聘</el-menu-item>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">教育教学</template>
        <el-menu-item index="7-1">本科生教育</el-menu-item>
        <el-menu-item index="7-2">研究生教育</el-menu-item>
        <el-menu-item index="7-3">留学生教育</el-menu-item>
        <el-menu-item index="7-4">继续教育</el-menu-item>
        <el-menu-item index="7-5">本科教学工程</el-menu-item>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">科学研究</template>
        <el-menu-item index="8-1">科研管理</el-menu-item>
        <el-menu-item index="8-2">学术刊物</el-menu-item>
        <el-menu-item index="8-3">学风建设</el-menu-item>
        <el-menu-item index="8-4">科研平台</el-menu-item>
        <el-menu-item index="8-5">国家应用数学中心</el-menu-item>
      </el-submenu>
      <el-submenu index="9">
        <template slot="title">招生就业</template>
        <el-menu-item index="9-1">本科生招生</el-menu-item>
        <el-menu-item index="9-2">本科生就业</el-menu-item>
        <el-menu-item index="9-3">研究生招生</el-menu-item>
        <el-menu-item index="9-4">留学生招生</el-menu-item>
        <el-menu-item index="9-5">继续教育招生</el-menu-item>
        <el-menu-item index="9-6">职教师资招生</el-menu-item>
      </el-submenu>
      <el-submenu index="10">
        <template slot="title">合作交流</template>
        <el-menu-item index="10-1">校企合作</el-menu-item>
        <el-menu-item index="10-2">校校合作</el-menu-item>
        <el-menu-item index="10-3">校地合作</el-menu-item>
        <el-menu-item index="10-4">国际合作</el-menu-item>
      </el-submenu>
      <el-submenu index="11">
        <template slot="title">校园文化</template>
        <el-menu-item index="11-1">讲座论坛</el-menu-item>
        <el-menu-item index="11-2">实践育人</el-menu-item>
        <el-menu-item index="11-3">学生组织</el-menu-item>
        <el-menu-item index="11-4">学生活动</el-menu-item>
        <el-menu-item index="11-5">健康校园</el-menu-item>
      </el-submenu>

    </el-menu>

    <template>
      <el-carousel :interval="5000" arrow="always" style="height: 470px;">
        <el-carousel-item v-for="pic in pics" :key="pic.id" style="height: 470px;">
          <img :src="pic.idView" style="width: 100%;height: 100%">
        </el-carousel-item>
      </el-carousel>
    </template>

    <el-main>
      <div>
        <el-row  style="margin-left: 100px;margin-right: 120px;">
          <el-col :span="6" >
            <div style="color: darkblue;font-family: 微软雅黑;font-size: 20pt;">
              <img src="../assets/chongshi.png" >
              重师要闻
            </div>
          </el-col >

          <el-col :span="2" style="margin-top: 10px" >
            <div style="color: darkblue;font-family: 微软雅黑;font-size: 10pt;">
              更多
              <img src="../assets/gengduo.png">
            </div>

          </el-col>

          <el-col :span="6">
            <div style="color: darkblue;font-family: 微软雅黑;font-size: 20pt;">
              <img src="../assets/chongshi.png">
              佳音在线
            </div>
          </el-col>
          <el-col :span="2" style="margin-top: 10px">
            <div style="color: darkblue;font-family: 微软雅黑;font-size: 10pt;">
              更多
              <img src="../assets/gengduo.png">
            </div>
          </el-col>
          <el-col :span="6">
            <div style="color: darkblue;font-family: 微软雅黑;font-size: 20pt;">
              <img src="../assets/zhuanti.png">
              专题聚焦
            </div>
          </el-col>
          <el-col :span="2" style="margin-top: 10px">
            <div style="color: darkblue;font-family: 微软雅黑;font-size: 10pt;">
              更多
              <img src="../assets/gengduo.png">
            </div>
          </el-col>
        </el-row>
      </div>

      <div >
        <el-row style="margin-left: 100px;margin-right: 120px;">
          <el-col :span="6" >
            <div  v-for="journalism in journalisms.slice(0,5)">
              <el-link style="display:block;text-overflow: ellipsis;width:100%;white-space: nowrap;overflow: hidden;line-height: 33px;font-size: 14px;" @click="toDetail(journalism)">{{journalism.title}}</el-link>
            </div>
          </el-col>
          <el-col :span="2" >
            <div  v-for="journalism in journalisms.slice(0,5)" >
              <el-link @click="" style="line-height: 33px;font-size: 14px;">{{journalism.date}}</el-link>
            </div>
          </el-col>
          <el-col :span="6">
            <div  v-for="evangel in evangels.slice(0,5)" >
              <el-link style="display:block;text-overflow: ellipsis;width:100%;white-space: nowrap;overflow: hidden;line-height: 33px;font-size: 14px;" @click="toDetail(evangel)">{{evangel.title}}</el-link>
            </div>
          </el-col>
          <el-col :span="2">
            <div  v-for="evangel in evangels.slice(0,5)" >
              <el-link @click="" style="line-height: 33px;font-size: 14px;">{{evangel.date}}</el-link>
            </div>
          </el-col>
          <el-col :span="6">
            <div  v-for="special in specials.slice(0,5)" >
              <el-link style="display:block;text-overflow: ellipsis;width:100%;white-space: nowrap;overflow: hidden;line-height: 33px;font-size: 14px;" @click="toDetail(special)">{{special.title}}</el-link>
            </div>
          </el-col>
          <el-col :span="2">
            <div  v-for="special in specials.slice(0,5)" >
              <el-link @click="" style="line-height: 33px;font-size: 14px;">{{special.date}}</el-link>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-main>

    <el-main style="background-color: azure">
      <div >
        <el-row style="margin-left: 100px;margin-right: 120px">
          <el-col :span="6">
            <div style="color: darkblue;font-family: 微软雅黑;font-size: 20pt;">
              <img src="../assets/xueke.png">
              学术动态
            </div>
          </el-col>
          <el-col :span="2" style="margin-top: 10px">
            <div style="color: darkblue;font-family: 微软雅黑;font-size: 10pt;">
              更多
              <img src="../assets/gengduo.png">
            </div>
          </el-col>
          <el-col :span="6">
            <div style="color: darkblue;font-family: 微软雅黑;font-size: 20pt;">
              <img src="../assets/xueke.png">
              学科建设
            </div>
          </el-col>
          <el-col :span="2" style="margin-top: 10px">
            <div style="color: darkblue;font-family: 微软雅黑;font-size: 10pt;">
              更多
              <img src="../assets/gengduo.png">
            </div>
          </el-col>
          <el-col :span="6">
            <div style="color: darkblue;font-family: 微软雅黑;font-size: 20pt;">
              <img src="../assets/tongzhi.png">
              通知公告
            </div>
          </el-col>
          <el-col :span="2" style="margin-top: 10px">
            <div style="color: darkblue;font-family: 微软雅黑;font-size: 10pt;">
              更多
              <img src="../assets/gengduo.png">
            </div>
          </el-col>
        </el-row>

        <el-row style="margin-left: 100px;margin-right: 120px">
          <el-col :span="6">
            <div  v-for="science in sciences.slice(0,5)">
              <el-link style="display:block;text-overflow: ellipsis;width:100%;white-space: nowrap;overflow: hidden;line-height: 33px;font-size: 14px;" @click="toDetail(science)">{{science.title}}</el-link>
            </div>
          </el-col>
          <el-col :span="2">
            <div  v-for="science in sciences.slice(0,5)" >
              <el-link @click="" style="line-height: 33px;font-size: 14px;">{{science.date}}</el-link>
            </div>
          </el-col>
          <el-col :span="6">
            <div  v-for="subject in subjects.slice(0,5)" >
              <el-link style="display:block;text-overflow: ellipsis;width:100%;white-space: nowrap;overflow: hidden;line-height: 33px;font-size: 14px;" @click="toDetail(subject)">{{subject.title}}</el-link>
            </div>
          </el-col>
          <el-col :span="2">
            <div  v-for="subject in subjects.slice(0,5)" >
              <el-link @click="" style="line-height: 33px;font-size: 14px;">{{subject.date}}</el-link>
            </div>
          </el-col>
          <el-col :span="6">
            <div  v-for="message in messages.slice(0,5)" >
              <el-link style="display:block;text-overflow: ellipsis;width:100%;white-space: nowrap;overflow: hidden;line-height: 33px;font-size: 14px;" @click="toDetail(message)">{{message.title}}</el-link>
            </div>
          </el-col>
          <el-col :span="2">
            <div  v-for="message in messages.slice(0,5)" >
              <el-link @click="" style="line-height: 33px;font-size: 14px;">{{message.date}}</el-link>
            </div>
          </el-col>
        </el-row>

        <img src="../assets/tupian.jpg" style="margin-left: 100px;margin-top: 50px">

        <el-row  style="margin-left: 150px; margin-right: 50px">
          <el-col :span="6" >
            <div style="color: darkblue;font-family: 微软雅黑;font-size: 10pt;">
              <img src="../assets/meiti.png">
              媒体重师
            </div>
          </el-col>
          <el-col :span="6" >
            <div style="color: darkblue;font-family: 微软雅黑;font-size: 10pt;">
              <img src="../assets/guangying.png">
              光影集萃
            </div>
          </el-col>
          <el-col :span="6" >
            <div style="color: darkblue;font-family: 微软雅黑;font-size: 10pt;">
              <img src="../assets/jiaoyu.png">
              党史学习教育
            </div>
          </el-col>
          <el-col :span="6" >
            <div style="color: darkblue;font-family: 微软雅黑;font-size: 10pt;">
              <img src="../assets/gushi.png">
              重师故事
            </div>
          </el-col>
        </el-row>

      </div>


    </el-main>

    <div style="margin-left: 120px; margin-top: 20px">
      <img src="../assets/guanxiang.jpg" >
    </div>

    <el-main :style="note">

      <div class="images1" style="margin-left: 100px;margin-right: 180px">

        <el-row :gutter="10" >
          <el-col :span="4" style="height: 170px">
            <img src="../assets/huoshuyinhua.jpg" style="width: 100%;height: 100%;">
          </el-col>
          <el-col :span="4" style="height: 170px">
            <img src="../assets/ye.jpg" style="width: 100%;height: 100%;">
          </el-col>
          <el-col :span="8" style="height: 170px">
            <img src="../assets/heshunzhixiang.jpg" style="width: 100%;max-height: 100%;">
          </el-col>
          <el-col :span="4" style="height: 170px">
            <img src="../assets/chunhua.jpg" style="width: 100%;height: 100%;">
          </el-col>
          <el-col :span="4" style="height: 170px">
            <img src="../assets/chendu.jpg" style="width: 100%;height: 100%;">
          </el-col>

        </el-row>

      </div>

      <div class="images2" style="margin-left: 100px;margin-right: 180px">
        <el-row :gutter="10" >
          <el-col :span="8" style="height: 170px">
            <img src="../assets/chen.jpg" style="width: 100%;height: 100%;">
          </el-col>
          <el-col :span="4" style="height: 170px">
            <img src="../assets/denghuocuican.jpg" style="width: 100%;height: 100%;">
          </el-col>
          <el-col :span="4" style="height: 170px">
            <img src="../assets/lunhua.jpg" style="width: 100%;height: 100%; ">
          </el-col>
          <el-col :span="8" style="height: 170px">
            <img src="../assets/chun.jpg" style="width: 100%;height: 100%;">
          </el-col>
        </el-row>
      </div>

    </el-main>






    <el-footer style="background: midnightblue; height: 200px; color: white">
      <el-row class="foot-row" justify="space-between" style="margin-left: 100px; margin-top: 20px;margin-right: 40px">
        <el-col :span="10">
          <el-link href="">学校校历</el-link>
          <el-link href="" style="margin-left: 20px">迎新系统</el-link>
          <el-link href="" style="margin-left: 20px">校友会</el-link>
        </el-col>

        <el-col :span="14">
          <a>大学城校区：重庆市沙坪坝区大学城中路37号 邮编：401331 党政办电话：023-65362555 </a>
        </el-col>

      </el-row>
      <el-row class="foot-row" justify="space-between" style="margin-left: 100px ">
        <el-col :span="10">
          <el-link href="" >人才招聘</el-link>
          <el-link href="" style="margin-left: 20px">信息服务</el-link>
          <el-link href="" style="margin-left: 20px">博望网</el-link>
        </el-col>

        <el-col :span="14">
          <a style="margin-left: 100px ">沙坪坝校区：重庆市沙坪坝区天陈路12号 邮编：400047 </a>
        </el-col>

      </el-row>
      <el-row class="foot-row" justify="space-between" style="margin-left: 100px ">
        <el-col :span="10">
          <el-link href="" >离校系统</el-link>
          <el-link href="" style="margin-left: 20px">采购招标</el-link>
          <el-link href="" style="margin-left: 20px">VPN</el-link>
        </el-col>

        <el-col :span="14">
          <a style="margin-left: 120px ">北碚校区：重庆市北碚区团山堡1号 邮编：400700</a>
        </el-col>

      </el-row>
      <el-row class="foot-row" justify="space-between" style="margin-left: 100px ">
        <el-col :span="10">
          <el-link href="">登陆专区</el-link>
          <el-link href="" style="margin-left: 20px">短信平台</el-link>
          <el-link href="" style="margin-left: 20px">领导信箱</el-link>
        </el-col>

        <el-col :span="14">
          <a style="margin-left: 160px ">版权所有©重庆师范大学 ######</a>
        </el-col>

      </el-row>
      <el-row class="foot-row" justify="space-between" style="margin-left: 100px;margin-bottom: 20px" >
        <el-col :span="10">
          <el-link href="">IPV6平台</el-link>
          <el-link href="" style="margin-left: 20px">信息公开</el-link>
          <el-link href="" style="margin-left: 20px">校园网专区</el-link>
        </el-col>

        <el-col :span="14">
          <a style="margin-left: 230px ">#########</a>
        </el-col>

      </el-row>
    </el-footer>





  </el-container>

</template>

<script>
const picsArray = [{id:0,idView:require('../assets/0.jpg')},{id:1,idView: require('../assets/1.jpg')},{id:2,idView:require('../assets/2.jpg')},{id:3,idView:require('../assets/3.jpg')},{id:4,idView:require('../assets/4.png')},{id:5,idView: require('../assets/5.jpg')},{id:6,idView:require('../assets/6.gif')},{id:7,idView:require('../assets/7.jpg')}];
export default {
  name: "website",
  data() {
    return{
      activeIndex:'1',
      pics: picsArray,
      note: {
        backgroundImage: "url(" + require("../assets/background.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "500px"
      },
      journalisms: [],
      evangels: [],
      specials: [],
      sciences: [],
      subjects: [],
      messages: [],
    };
  },
  created() {
    this.findAllJournalisms();
    this.findAllEvangels();
    this.findAllSpecials();
    this.findAllSciences();
    this.findAllSubjects();
    this.findAllMessages();
  },
  methods: {
    handleSelect() {

    },
    login () {
      this.$router.replace('/login');
    },
    findAllJournalisms() {
      this.$axios.get("/journalism/findAllJournalisms")
          .then((res) => {
            this.journalisms = res.data;
            console.log(res.data);
          })
          .catch(error => {
            this.$message({
              type: 'error',
              message: "查询失败，原因是"+error.data.message
            });
          });
    },
    findAllEvangels() {
      this.$axios.get("/evangel/findAllEvangels")
          .then((res) => {
            this.evangels = res.data;
            console.log(res.data);
          })
          .catch(error => {
            this.$message({
              type: 'error',
              message: "查询失败，原因是"+error.data.message
            });
          });
    },
    findAllSpecials() {
      this.$axios.get("/special/findAllSpecials")
          .then((res) => {
            this.specials = res.data;
            console.log(res.data);
          })
          .catch(error => {
            this.$message({
              type: 'error',
              message: "查询失败，原因是"+error.data.message
            });
          });
    },
    findAllSciences() {
      this.$axios.get("/science/findAllSciences")
          .then((res) => {
            this.sciences = res.data;
            console.log(res.data);
          })
          .catch(error => {
            this.$message({
              type: 'error',
              message: "查询失败，原因是"+error.data.message
            });
          });
    },
    findAllSubjects() {
      this.$axios.get("/subject/findAllSubjects")
          .then((res) => {
            this.subjects = res.data;
            console.log(res.data);
          })
          .catch(error => {
            this.$message({
              type: 'error',
              message: "查询失败，原因是"+error.data.message
            });
          });
    },
    findAllMessages() {
      this.$axios.get("/message/findAllMessages")
          .then((res) => {
            this.messages = res.data;
            console.log(res.data);
          })
          .catch(error => {
            this.$message({
              type: 'error',
              message: "查询失败，原因是"+error.data.message
            });
          });
    },
    toDetail(data) {
      this.$router.push({path: '/detail', query:{title:data.title,date:data.date,content:data.content}});
    }

  }
}
</script>

<style >




.el-row {
  margin-top: 10px;
}


.grid-content {
  min-height: 40px;
  font-size: 20pt;
}

.bg-blue {
  background: midnightblue;
}

.foot-row {
  margin-top: 10px;
}

.images1 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
}

.images2 {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
}


</style>