<template>
  <div calss="navbar">
    <nav class="nav-extended indigo darken-2">
      <div class="nav-content">
        <router-link :to="{name:'Index'}">
          <span class="nav-title">Firebase CURD</span>
        </router-link>
        <div class="nontitle">
          <router-link to="/">Home</router-link>|
          <router-link to="/about">About</router-link>
        </div>
        <a href class="btn-floating btn-large halfway-fab pink">
          <router-link :to="{name:'Add'}">
            <i class="material-icons">add</i>
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
