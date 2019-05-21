<template>
  <div calss="navbar">
    <nav class="nav-extended indigo darken-2">
      <div class="nav-content">
        <router-link to></router-link>
        <span class="nav-title">Firebase CURD</span>
        <div class="nontitle">
          <router-link to="/">Home</router-link>|
          <router-link to="/about">About</router-link>
        </div>
        <a href class="btn-floating btn-large halfway-fab pink">
          <router-link to>
            <i class="materal-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
span {
  padding: 0 20px;
  display: inline-block;
  width: 2000px;
}
.nontitle {
  display: inline-block;
  padding: 0px 50px;
}
</style>
