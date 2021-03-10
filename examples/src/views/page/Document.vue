<template>
    <div class="document-container">
        <div class="content-padding">
            <icon-list></icon-list>
        </div>
    </div>
</template>
<script>
    import IconList from "./IconList";
    export default {
        name: 'Document',
        components: { IconList },
        computed: {
        },
        methods: {
        }
    };
</script>
<style lang="scss">
    @import "~canknow-ui-core/src/scss/variables";
    @import "~canknow-ui-core/src/scss/mixins/index";
</style>
