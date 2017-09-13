<template>
  <div class="declarative-rendering view">
    <div class="source">
      <textarea class="html" readonly="readonly" disabled>{{code.htmlTemplate}}</textarea>
      <textarea class="js" readonly="readonly" disabled>{{code.script}}</textarea>
      </div>
    
    <div class="result">
      {{ message }}
    </div>
  </div>
</template>

<script>
  const html = [
    '<div>{{ message }}</div>'
  ].join('');
  
  const script = [
    '  export default {\n',
    '    name: \'Declarative-Rendering\',\n',
    '    data () {\n',
    '      return {\n',
    '        message: \'Hello Jodeng!\'\n',
    '      }\n',
    '    }\n',
    '  }\n'
  ].join('');
  
  export default {
    name: 'Declarative-Rendering',
    data () {
      return {
        code : {
          htmlTemplate: html,
          script: script
        },
        message: 'Hello Jodeng!'
      }
    }
  }

</script>

<style lang="scss">
  .declarative-rendering.view {
    .source {
      textarea {
        &.html {
          height: 50px;
        }
        &.js {
          height: 200px;
        }
      }
    }
  }
</style>
