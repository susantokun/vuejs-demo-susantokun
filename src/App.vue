<template>
  <div id="app">
    <div class="ui inverted menu" style="border-radius:0">
      <div class="ui container">
        <router-link tag="a" class="item" to="/">Home</router-link>
        <router-link tag="a" class="item" to="/about">About</router-link>
      </div>
    </div>
    <div class="ui main container">
      <br />
      <h1 class="ui header center aligned">DEMO SUSANTOKUN</h1>
      <p class="ui center aligned container">
        - Situs Khusus Demonstrasi -
      </p>
      <hr />
      <div class="ui segment">
        <router-view />
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getCategoryContents");
    this.$store.dispatch("getContents");
  }
};
</script>
