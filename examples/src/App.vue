<template>
    <router-view></router-view>
</template>
<script>
    export default {
        name: 'App'
    };
</script>
<style lang="scss">
    $resourceRoot:"~canknow/src";
    @import "~canknow-ui/src/scss/index.scss";
    @import "./styles/index";
    body {
        height: 100%;
    }
</style>
