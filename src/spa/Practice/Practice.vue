<template>
  <div id="practice" class="page">
    <nav class="list">
      <ul>
        <li v-for="menuItem in menuList">
          <router-link v-bind:to="menuItem.to">{{menuItem.title}}</router-link>
        </li>
      </ul>
    </nav>
    
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
  const practiceList = [
    {title: '선언적 렌더링', to: '/practice/declarative-rendering'},
    {title: '조건문과 반복문', to: '/practice/conditionals-and-loops'},
    {title: '사용자 입력 핸들링', to: '/practice/handling-user-input'},
    {title: '컴포넌트를 사용한 작성방법', to: '/practice/composing-with-component'},
    {title: '생명주기', to: '/practice/lifecycle'},
  ];
  export default {
    name: 'Practice',
    data () {
      return {
        title: '실습 페이지',
        menuList: practiceList
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
          width: 250px;
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
      width: calc(100% - 275px);
      .view {
        display: table;
        width: 100%;

        >.source {
          display: table-cell;
          width: 100%;
  
          @media screen and (min-width: 768px) {
            width: 50%;
          }
          
          textarea {
            font-size: 14px;
            width: 100%;
            resize: none;
          }
        }
  
        >.result {
          display: table-cell;
          width: 100%;
          padding-left: 20px;
          vertical-align: top;
  
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