<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png" width="50" height="50">
      <span class="title">{{title}}</span>

      <span class="date-time">{{ currentTime }}</span>
      <!--<icon></icon>-->
    </header>

    <nav-menu v-bind:menu-list="menus"></nav-menu>

    <section>
      <router-view></router-view>
    </section>
    
  </div>
</template>

<script>
  import NavMenu from './spa/components/NavMenu'

  const menus = [
    { to: '/intro', title: '소개', value: 'introduce'},
    { to: '/practice', title: '실습', value: 'practice'},
    { to: '/further', title: '응용', value: 'examples'},
  ];

  export default {
    name: 'app',
    data () {
      return {
        title: 'Vue.js Study',
        menus: menus,
        currentTime: null
      }
    },
    components: {
      NavMenu
    },
    methods: {
      updateCurrentTime() {
        this.currentTime = this.$moment().format('ll LTS');
      }
    },
    created() {
      this.currentTime = this.$moment().format('ll LTS');
      setInterval(() => this.updateCurrentTime(), 1*1000);
    },
  }
</script>

<style lang="scss">
  #app {
    $vue-cobalt-blue: #35495e;
    $vue-green: #35b883;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    /*color: #2c3e50;*/
    .color-blue { color: $vue-cobalt-blue; }
    .color-green { color: $vue-green; }
    
    header {
      padding-top: 25px;
      height: 90px;
      text-align: center;
      
      > img {
        vertical-align: middle;
      }
      
      > .title {
        font-size: 25px;
        font-weight: bold;
      }

      .date-time {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 0.7em;
      }
    }
  }
</style>