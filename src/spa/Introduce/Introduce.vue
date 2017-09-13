<template>
  <div>
    <span>들어가기 앞서..(간략하게)</span>
    <ul>
      <li>
        프론트엔드 개발 시 프레임워크(Angular, React)나 라이브러리(Vue) 사용 이유
        <ul>
          <li><b>SPA</b> - Single Page Application</li>
          <li>팀원과의 협업 도구</li>
          <li>프로젝트 관리 효율 및 <b>유지보수</b></li>
        </ul>
      </li>
      <li>
        프론트엔드 개발 방식 설명
        <ul>
          <li>빌드 도구(<b>webpack</b>, browserify)를 활용 - (자동화, development mode, production mode, minified, uglyfied)등</li>
        </ul>
      </li>
      <li>
        오늘 발표 주제
        <ul>
          <li>UI개발 트렌드 중 하나인 Vue.js</li>
          <li>랭귀지 강의(?)시간 X => 가벼운 마음으로!</li>
          <li>
            관심있으신 분들 참고
            <ul>
              <li><a href="https://github.com/jodeng110/vue-study">Source</a></li>
              <li><a href="https://jodeng110.github.io/vue-study">Demo</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        해당 데모 사이트는 Vue.js를 활용
        <ul>
          <li>
            '소개' 메뉴
            <ul>
              <li>Vue.js 소개</li>
              <li>다른 프레임워크(Angular, React)와 비교 (소스 맛보기)</li>
              <li>참고 사이트</li>
            </ul>
          </li>
          <li>'실습' 메뉴 - 실제 소스와 결과물이 출력</li>
          <li>
            '응용' 메뉴
            <ul>
              <li><b>실제 Vue.js를 활용한 사이트</b></li>
              <li>차트(d3), 부트스트랩뷰(Bootstrap + Vue.js) 연동</li>
              <li>뷰 테스트 코드 작성</li>
              <li>번역 필터 적용</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    
    <span></span>
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

<style scoped>

</style>