<template>
  <div id="app">
    <el-container style="height:100%;border: 1px solid #eee">
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span @click="changeLanguage">语言切换</span>
      </el-header>
      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu  >
            <el-submenu index="1" >
              <template slot="title">
                <i class="el-icon-message"></i>学习demo
              </template>
              <el-menu-item-group default-active=“1-1”>
                <el-menu-item index="1-1"><el-link href="/#/"  type="primary">语言切换</el-link></el-menu-item>
                <el-menu-item index="1-2"><el-link href="/#/other"  type="primary">其他</el-link></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main> <router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  methods:{
    changeLanguage:function(){
      let lang=localStorage.getItem("locale");
      if(lang=="zh"){
        lang="en"
      }else{
        lang="zh"
      }
      localStorage.setItem("locale",lang)
      this.$i18n.locale=lang;
    }
  }
};
</script>

<style scoped>
.el-header {
  background-color: #333;
  color: #fff;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
