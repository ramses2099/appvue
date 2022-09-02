<template>
  <!-- Page Wrapper -->
  <div id="wrapper">
   <SideBar/>
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <TopBar/>
        <!-- Begin Page Content -->
        <div class="container-fluid">
          <!-- route outlet -->
          <!-- component matched by the route will render here -->
          <router-view></router-view>
        </div>
      </div>  
      <FooterBar/>
    </div>
  </div>
  <!-- End of Page Wrapper -->
</template>
  
<script>
  import SideBar from './components/SideBar'
  import TopBar from './components/TopBar'
  import FooterBar from './components/FooterBar'


  export default {
    name: "App",
    components:{
    SideBar,
    TopBar,
    FooterBar,
    
}
  };
</script>
  
<style>
</style>
  