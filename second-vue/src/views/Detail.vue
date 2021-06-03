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

    <div>
      <img src="../assets/detail.jpg" width="100%">
    </div>

    <el-container>
      <el-aside width="auto" style="margin-left: 100px">
        <el-menu>
          <el-menu-item index="1" @click="toList(0)"><i class="el-icon-message"> </i>重师要闻</el-menu-item>
          <el-menu-item index="2" @click="toList(1)"><i class="el-icon-message"> </i>佳音在线</el-menu-item>
          <el-menu-item index="3" @click="toList(2)"><i class="el-icon-message"> </i>专题聚焦</el-menu-item>
          <el-menu-item index="4" @click="toList(3)"><i class="el-icon-message"> </i>学术动态</el-menu-item>
          <el-menu-item index="5" @click="toList(4)"><i class="el-icon-message"> </i>学科建设</el-menu-item>
          <el-menu-item index="6" @click="toList(5)"><i class="el-icon-message"> </i>通知公告</el-menu-item>
        </el-menu>
      </el-aside>


      <el-main>
        <div >
          <h2 id="title" >
            <span style="text-align: center;display: block">{{this.$route.query.title}}</span>
          </h2>
          <i id="date" style="text-align: center;display: block">发布日期：{{this.$route.query.date}}</i>
          <div>
            <span style="font-family: 仿宋_gb2312,fangsong_gb2312;margin-left: 100px"  id="content">{{this.$route.query.content}}</span>
          </div>
        </div>

      </el-main>



    </el-container>




  </el-container>



</template>

<script>
export default {
  name: "Detail",
  data() {
    return{
      activeIndex:'1',
    }

  },
  created() {
  },
  methods: {
    login() {
      this.$router.replace("/login")
    },
    handleSelect() {

    },
    toList(number) {
      this.$router.push({path:'/list',query:{number:number}})
    }
  },

}
</script>

<style scoped>

</style>