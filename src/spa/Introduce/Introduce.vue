<template>
  <div class="intro-page">

    <ul>
      <li>들어가기 전에</li>
      <li>Vue.JS</li>
      <li>참고</li>
    </ul>

    <hr>

    <h3>들어가기 전에</h3>

    <p>
      <h4>프론트엔드 개발 시 프레임워크(Angular, React)나 라이브러리(Vue) 사용 이유</h4>
      <ul>
        <li>SPA - Single Page Application</li>
        <li>팀원과의 협업 도구</li>
        <li>프로젝트 관리 효율 및 유지보수 용이</li>
      </ul>
    </p>

    <p>
      <h4>프론트엔드 개발 방식</h4>
      <ul><li>빌드 도구 활용 - webpack, browerify</li></ul>
    </p>


    <hr>



  </div>
</template>

<script>
  export default {
    name: 'Intro',
    data () {
      return {
        msg: '안녕하세요. 프론트엔드 개발자 조정은 입니다.'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .intro-page {
    width: 70%;
    margin: 40px auto;

  }
</style>