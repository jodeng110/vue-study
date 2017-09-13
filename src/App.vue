<template>
  <div id="app">
    
    <header>
      <img src="./assets/logo.png" width="50" height="50">
      <span class="title">{{title}}</span>
    </header>
    
    <nav id="menu">
      <ul>
        <li>
          <router-link to="/intro">소개</router-link>
        </li>
        <li>
          <router-link to="/practice">실습</router-link>
        </li>
        <li>
          <router-link to="/further">응용</router-link>
        </li>
      </ul>
    </nav>
    
    <section>
      <router-view></router-view>
    </section>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Vue.js Study'
    }
  }
}
</script>

<style lang="scss">
  $vue-cobalt-blut: #35495e;
  $vue-green: #35b883;
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    /*color: #2c3e50;*/
    
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
    }
    
    nav#menu {
      background-color: $vue-cobalt-blut;
      ul {
        margin: 0;
        height: 50px;
        li {
          list-style: none;
          display: inline-block;
          
          a {
            display: inline-block;
            width: 100px;
            text-decoration: none;
            color: #fff;
            line-height: 50px;
            text-align: center;
            
            &.router-link-active {
              background-color: $vue-green;
            }
          }
          
          
        }
      }
    }
  }
</style>