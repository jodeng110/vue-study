<template>
  <li v-bind:title="item.desc">{{ item.title }}</li>
</template>

<script>
  export default {
    name: 'Daddy-Child-Care-List',
    props: ['item']
  }
</script>
