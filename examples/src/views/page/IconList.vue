<template>
    <div>
        <div class="icon-group margin-bottom-1" v-for="iconGroup in icons">
            <card :title="iconGroup.name">
                <ul class="icon-list">
                    <li v-for="iconName in iconGroup.items" :key="iconName" v-copy :data-clipboard-text="iconName">
                        <div>
                            <icon :name="iconName" :package="iconGroup.name"></icon>
                            <span class="icon-name">{{iconName}}</span>
                        </div>
                    </li>
                </ul>
            </card>
        </div>
    </div>
</template>
<script>
    const icons = require('./../../../icon.json');

    export default {
        name: 'IconList',
        data() {
            return {
                icons
            };
        }
    }
</script>
