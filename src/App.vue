<template>
  <div id="app">
    <router-view></router-view>
    <loading
            :show="$data.$loaderShow"
            :label="$data.$loaderLabel">
    </loading>
  </div>
</template>

<script>
  import loading from 'vue-full-loading'

  export default {
    name: 'app',

    components: {
      loading
    },
  }
</script>