<template>
  <div id="lifecycle">
    <h4></h4>
    <div class="view">
      <div class="source">
        <textarea class="html" readonly="readonly" disabled>{{code.htmlTemplate}}</textarea>
        <textarea class="js" readonly="readonly" disabled>{{code.script}}</textarea>
      </div>

      <div class="result">
        <span class="tip">(개발자 도구 콘솔창을 열어주세요. <br>'텍스트 변경' 버튼 클릭 -> '파괴' 버튼 클릭)</span><br>
        <br>
        {{ text }}<br>
        <button @click="changeText">텍스트 변경</button>
        <button @click="destroyComp">파괴</button>
      </div>
    </div>
  </div>
</template>

<script>
  const html = [
    '{{ text }}<br>\n',
    '<button @click="changeText">텍스트 변경</button>\n',
    '<button @click="destroyComp">파괴</button>'
  ].join('');

  const script = [
    'export default {\n',
    '  data () {\n',
    '    return {\n',
    '      text: \'안녕하세요.~\'\n',
    '    }\n',
    '  },\n',
    '  methods: {\n',
    '    changeText() {\n',
    '      this.text = \'오늘도 수고하세요~!\';\n',
    '    },\n',
    '    destroyComp() {\n',
    '      this.$destroy();\n',
    '    }\n',
    '  },\n',
    '  beforeCreate() {\n',
    '    ... \n',
    '  },\n',
    '  create() {\n',
    '    ... \n',
    '  }, \n',
    '  mounted() {\n',
    '    ... \n',
    '  },\n',
    '  beforeUpdate () {\n',
    '    ... \n',
    '  },\n',
    '  updated() {\n',
    '    ... \n',
    '  },\n',
    '  destroyed() {\n',
    '    ... \n',
    '  }\n',
    '}'
  ].join('');
  export default {
    name: 'Lifecycle',
    data () {
      return {
        code: {
          htmlTemplate: html,
          script: script
        },
        text: '안녕하세요.~'
      }
    },
    methods: {
      changeText() {
        this.text = '오늘도 수고하세요~!';
      },
      destroyComp() {
        console.group('============ destroyComp method ============');
        console.log(this.$el);
        this.$destroy();
        console.groupEnd();
      }
    },
    beforeCreate() {
      console.group('============ beforeCreate ============');
      console.log('생명주기 페이지입니다.');
      console.log('text : ', this.text);
      console.log('$el : ', this.$el);
      console.groupEnd();
    },
    create() {
      console.group('============ create ============');
      console.log('text : ', this.text);
      console.log('$el : ', this.$el);
      console.groupEnd();
    },
    mounted() {
      console.group('============ mounted ============');
      console.log('text : ', this.text);
      console.log('$el : ', this.$el);
      console.groupEnd();
    },
    beforeUpdate () {
      console.group('============ beforeUpdate ============');
      console.log('text : ', this.text);
      console.log('$el : ', this.$el);
      console.groupEnd();
    },
    updated() {
      console.group('============ updated ============');
      console.log('text : ', this.text);
      console.log('$el : ', this.$el);
      console.groupEnd();
    },
    destroyed() {
      console.group('============ destroyed ============');
      console.log('text : ', this.text);
      console.log('$el : ', this.$el);
      console.groupEnd();
    }
  }
</script>

<style lang="scss" scoped>
  .source {
    textarea {
      &.html {
        height: 80px;
      }
      &.js {
        height: 700px;
      }
    }
  }

  .tip {
    font-size: 13px;
  }

</style>