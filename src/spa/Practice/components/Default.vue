<template>
  <div>
    <h4></h4>
    <div class="view">
      <div class="source">
        <textarea class="html" readonly="readonly" disabled>{{code.htmlTemplate}}</textarea>
        <textarea class="js" readonly="readonly" disabled>{{code.script}}</textarea>
      </div>

      <div class="result">

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        code: {
          htmlTemplate: '',
          script: ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .source {
    textarea {
      &.html {
        height: 130px;
      }
      &.js {
        height: 300px;
      }
    }
  }

</style>