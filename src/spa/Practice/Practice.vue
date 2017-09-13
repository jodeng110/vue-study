<template>
  <div id="practice" class="page">
    <nav class="list">
      <ul>
        <li>
          <router-link to="/practice/declarative-rendering">선언적 렌더링</router-link>
        </li>
        <li>
          <router-link to="/practice/conditionals-and-loops">조건문과 반복문</router-link>
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
    name: 'Practice',
    data () {
      return {
        title: '실습 페이지'
      }
    }
  }
  
</script>

<style lang="scss">
  #practice {
    .list {
      float: left;
      height: calc(100vh - 140px);
      overflow-y: auto;
      border-right: 1px solid #ccc;
      
      ul {
        margin: 0;
        padding: 0;
        
        li {
          width: 200px;
          list-style: none;
          
          a {
            display: inline-block;
            text-decoration: none;
            width: 100%;
            line-height: 20px;
    
            &.router-link-active {
              background-color: #35b883;
              color: #fff;
            }
          }
        }
      }
    
    }
    
    section {
      border: 1px solid #ccc;
      float: left;
      width: calc(100% - 225px);
      .view {
        >.source {
          display: inline-block;
          width: 100%;
          float: left;
          //border-left: 2px solid #35b883;
  
          @media screen and (min-width: 768px) {
            width: 50%;
          }
          
          textarea {
            width: 100%;
            resize: none;
          }
        }
  
        >.result {
          display: inline-block;
          width: 100%;
          padding-left: 20px;
          float: left;
          //border-left: 2px solid #35b883;
  
          @media screen and (min-width: 480px) {
            width: 50%;
          }
        }
      }
      
      &:after {
        clear: both;
      }
    }
  }
</style>