<template>
  <div>
    <h4>컴포넌트 사용하기</h4>
    <div class="view">
      <div class="source">
        <textarea class="html" readonly="readonly" disabled>{{code.htmlTemplate}}</textarea>
        <textarea class="js" readonly="readonly" disabled>{{code.script}}</textarea>
      </div>

      <div class="result">
        <ol>
          <daddy-child-care-list v-for="(item, index) in childCareList" :key="index" v-bind:item="item"></daddy-child-care-list>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
  import DaddyChildCareList from '../../components/DaddyChildCareList'

  const html = [
    '<ol>\n',
    '  <daddy-child-care-list v-for="item in childCareList" v-bind:item="item">\n',
    '  </daddy-child-care-list>\n',
    '<ol>'
  ].join('');

  const script = [
    'import DaddyChildCareList from \'../../components/DaddyChildCareList\'\n',
    '...\n',
    'const childCareList = [\n',
    '  {\n',
    '    desc: \'아기가 배고픕니다. 시간이 없다면 분유를 타주세요.\',\n',
    '    title: \'이유식 만들기\'\n',
    '  },\n',
    '  {\n',
    '    desc: \'오늘 하루 노느라 땀흘린 아이! 목욕하면 좋은 냄새가 날 것 같아요~\'\n',
    '    title: \'아기 목욕 시키기\'\n',
    '  },\n',
    '  {\n',
    '    desc: \'마사지권을 선물합니다.\',\n',
    '    title: \'마사지 사용권 선물\'\n',
    '  },\n',
    '];\n',
    'export default {\n',
    '  data () {\n',
    '    return {\n',
    '      childCareList: childCareList,\n',
    '    }\n',
    '  },\n',
    '  components: {\n',
    '    DaddyChildCareList\n',
    '  }\n',
    '}'
  ].join('');

  const childCareList = [
    {
      desc: '아기가 배고픕니다. 시간이 없다면 분유를 타주세요.',
      title: '이유식 만들기'
    },
    {
      desc: '오늘 하루 노느라 땀흘린 아이! 목욕하면 좋은 냄새가 날 것 같아요~',
      title: '아기 목욕 시키기'
    },
    {
      desc: '마사지권을 선물합니다.',
      title: '마사지 사용권 선물'
    },
  ];

  export default {
    name: 'Composing-With-Component',
    data () {
      return {
        code: {
          htmlTemplate: html,
          script: script
        },
        childCareList: childCareList,
      }
    },
    components: {
      DaddyChildCareList
    }
  }
</script>

<style lang="scss" scoped>
  .source {
    textarea {
      &.html {
        height: 100px;
      }
      &.js {
        height: 580px;
      }
    }
  }

</style>