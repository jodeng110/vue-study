<template>
  <nav class="menu">
    <ul>
      <!--<li v-for="menuItem in menuList">-->
        <!--<router-link v-bind:to="menuItem.to" v-lang>{{ menuItem.title }}</router-link>-->
      <!--</li>-->
      <li>
        <router-link to="/intro">{{ intro }}</router-link>
      </li>
      <li>
        <router-link to="/practice">{{ practice }}</router-link>
      </li>
      <li>
        <router-link to="/further">{{ examples }}</router-link>
      </li>
    </ul>

    <b-dropdown right class="ddl-lang" v-bind:text="selectedLang.title">
      <b-dropdown-item v-for="(lang, index) in langs" :key="index" href="#" @click="changeLang(lang)">
        <img v-bind:src="lang.imgSrc" height="15" width="20" class="flag">{{ lang.title }}
      </b-dropdown-item>
    </b-dropdown>
  </nav>
</template>

<script>
  import { bDropdown } from 'bootstrap-vue/lib/components';

  const langs = [
    {imgSrc: 'assets/flags/us.png', title:"English", code: "us"},
    {imgSrc: 'assets/flags/kr.png', title:"한국어", code: "kr"},
    {imgSrc: 'assets/flags/jp.png', title:"日本語", code: "jp"}
  ];

  export default {
    name: 'Menu-Item',
    props: ['menuList'],
    data() {
      const findIdx = _.findIndex(langs, {code: this.$language})

      return {
        langs: langs,
        selectedLang: findIdx > -1 ? langs[findIdx] : langs[1]
      }
    },
    components: {
      bDropdown
    },
    mounted() {
      this.$language = this.$language || this.selectedLang.code;
    },
    computed: {
      intro() {
        return this.translate(this.$language, 'introduce');
      },
      practice() {
        this.$language = this.$language || 'kr';
        return this.translate(this.$language, 'practice');
      },
      examples() {
        this.$language = this.$language || 'kr';
        return this.translate(this.$language, 'examples');
      }
    },
    methods: {
      changeLang(lang) {
        this.selectedLang = lang;
        this.$language = lang.code;
      }
    }
  }
</script>

<style lang="scss" scoped>
  $vue-cobalt-blue: #35495e;
  $vue-green: #35b883;

  nav.menu {
    position: relative;
    background-color: $vue-cobalt-blue;
    ul {
      margin: 0;
      height: 50px;
      li {
        list-style: none;
        display: inline-block;

        a {
          display: inline-block;
          width: 100px;
          text-decoration: none;
          color: #fff;
          line-height: 50px;
          text-align: center;

          &.router-link-active {
            background-color: $vue-green;
          }
        }
      }
    }

    .ddl-lang {
      position: absolute;
      right: 5px;
      top: 5px;
    }

    .flag {
      border: 1px solid #000;
    }

    .date-time {
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 0.7em;
    }
  }
</style>