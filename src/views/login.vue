<template>
    <div>
        <mt-button type="default" @click="show">我是一个登录的vue组件----{{msg}}</mt-button>
    </div>
</template>

<script>
    // export default 只能有一个，export 可以有多个
    export default {
        name: "login",
        data(){
            return {msg:123456};
        },
        methods:{
            show(){
                console.log("我被点击了");
            },
        },
    }
</script>

<style scoped>

</style>