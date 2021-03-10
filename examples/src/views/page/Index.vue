<template>
    <div>
        <div class="image-layout" id="site-banner">
            <img src="./../../assets/images/star-bg.svg"/>
            <div class="image-layout-body">
                <div class="container site-description">
                    <h1>Classic vue icon repository</h1>
                    <p>The front end UI solution for all levels of the front and back apes, the zero threshold open, and the front end for all levels</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import packageConfig from './../../../../package';

    export default {
        name: 'Index',
        computed: {
            author: ()=>{
                return packageConfig.author;
            },
            name: ()=>{
                return packageConfig.name;
            }
        }
    };
</script>
<style lang="scss">
    #site-banner{
        height: 640px;
        overflow: hidden;
        background-color: #24292e;
        background-size: 100%;
        text-align: center;
        margin: 0;
        position: relative;

        .image-layout-body{
            padding-top: 169px;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;

            .site-description{
                h1{
                    color:#fff;
                }
                h2{
                    color:#fff;
                }
                p{
                    color:#fff;
                }
            }
        }
        .canvas-box{
            position: absolute;
            left:0;
            top:0;
            width: 100%;
            height: 100%;
        }
    }
</style>
