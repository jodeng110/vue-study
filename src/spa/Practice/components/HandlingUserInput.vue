<template>
  <div>
    <h4>사용자 입력 핸들링</h4>
    <ul>
      <li>이벤트 : <span class="color-green">v-on</span></li>
      <li>양방향 바인딩 : <span class="color-green">v-bind</span></li>
    </ul>
    <div class="view">
      <div class="source">
        <!--<textarea class="html" readonly="readonly" disabled>{{code.htmlTemplate}}</textarea>-->
        <!--<textarea class="js" readonly="readonly" disabled>{{code.script}}</textarea>-->
      </div>

      <div class="result">
        <button v-on:click="reverseMessage">메세지 뒤집기</button>
        <p>{{ message }}</p>
        <input type="text" v-model="message">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Handling-User-Input',
    data () {
      return {
        message: '안녕하세요, 프론트엔드 개발자 조정은입니다.'
      }
    },
    methods: {
      reverseMessage () {
        this.message = this.message.split('').reverse().join('');
      }

    }
  }
</script>

<style lang="scss" scoped>
  .source {
    textarea {
      &.html {
        height: 50px;
      }
      &.js {
        height: 300px;
      }
    }
  }

  input[type=text] {
    width: 100%;
  }

</style>