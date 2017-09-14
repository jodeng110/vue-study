<template>
  <div>
    <h4>조건문 : <span class="color-green">v-if</span></h4>
    <div class="view">
      <div class="source">
        <textarea class="html" readonly="readonly" disabled>{{code1.htmlTemplate}}</textarea>
        <textarea class="js" readonly="readonly" disabled>{{code1.script}}</textarea>
      </div>

      <div class="result">
        <div>
          <p v-if="show">내가 보이니?</p>
          <p v-if="hide">난 안보일껄?</p>
        </div>
      </div>
    </div>

    <h4>반복문 : <span class="color-green">v-for</span></h4>
    <div class="view">

      <div class="source">
        <textarea class="html" readonly="readonly" disabled>{{code2.htmlTemplate}}</textarea>
        <textarea class="js" readonly="readonly" disabled>{{code2.script}}</textarea>
      </div>

      <div class="result">
        <ul>
          <li v-for="food in foods">{{food.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  const html1 = [
    '<div>\n',
    '  <p v-if="show">내가 보이니?</p>\n',
    '  <p v-if="hide">난 안보일껄?</p>\n',
    '</div>'
  ].join('');

  const script1 = [
    '  export default {\n',
    '    name: \'Conditionals\',\n',
    '    data () {\n',
    '      return {\n',
    '        show: true\n',
    '        hide: false\n',
    '      }\n',
    '    }\n',
    '  }'
  ].join('');

  const html2 = [
    '<div>\n',
    '  <ul>\n',
    '    <li v-for="food in foods">{{food.name}}</li>\n',
    '  </ul>\n',
    '</div>'
  ].join('');

  const script2 = [
    '  export default {\n',
    '    name: \'Loop\',\n',
    '    data () {\n',
    '      return {\n',
    '        foods: [\n',
    '          { name: \'소곱창\' },\n',
    '          { name: \'삼겹살\' },\n',
    '          { name: \'육회\' }\n',
    '        ]\n',
    '      }\n',
    '    }\n',
    '  }'
  ].join('');

  const foods = [
    {name: '소곱창'},
    {name: '삼겹살'},
    {name: '육회'},
  ];

  export default {
    name: 'Conditionals-And-Loop',
    data () {
      return {
        code1: {
          htmlTemplate: html1,
          script: script1
        },
        code2: {
          htmlTemplate: html2,
          script: script2
        },
        show: true,
        hide: false,
        foods: foods
      }
    }
  }

</script>

<style lang="scss" scoped>
  .source {
    textarea {
      &.html {
        height: 120px;
      }
      &.js {
        height: 260px;
      }
    }
  }

</style>