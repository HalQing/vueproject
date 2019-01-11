<template>
    <div>
        <!--轮播图-->
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="item in bannerList" :key="item.image">
                <img :src="item.image" :alt="item.url"/>
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newsList">
                   <img src="../images/menu1.png"/>
                   <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../images/menu2.png"/>
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../images/menu3.png"/>
                    <div class="mui-media-body">商品购买</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../images/menu4.png"/>
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../images/menu5.png"/>
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../images/menu6.png"/>
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        name: "home",
        data(){
          return {
              bannerList:[
                  {url:'http://www.baidu.com/',image:'http://localhost:3000/src/images/banner1.jpg'},
                  {url:'http://www.baidu.com/',image:'http://localhost:3000/src/images/banner2.jpg'},
                  {url:'http://www.baidu.com/',image:'http://localhost:3000/src/images/banner3.jpg'},
              ],
          };
        },
        created(){
            this.getBanners();
        },
        methods:{
            getBanners(){
                Toast('开始请求banner数据');
                //数据请求
                // this.$http.get('接口地址').then(result=>{
                //     console.log("请求图片:"+result.body);
                //     if(result.body.status===0){
                //         //成功
                //        this.bannerList = result.body.message;
                //     }else{
                //         //失败
                //         Toast('加载轮播图失败');
                //     }
                // }).catch(function(err){
                //      console.log("错误信息:"+err);
                // });
            },
        }
    }
</script>

<style scoped>
    .mint-swipe{
        height: 200px;
    }

    .mint-swipe .mint-swipe-item:nth-child(1){
        background-color: red;
    }
    .mint-swipe .mint-swipe-item:nth-child(2){
        background-color: yellow;
    }
    .mint-swipe .mint-swipe-item:nth-child(3){
        background-color: blue;
    }

    .mint-swipe .mint-swipe-item img{
        width: 100%;
        height: 100%;
        vertical-align: middle;
    }

    .mui-grid-view.mui-grid-9{
        background-color: white;
        border: none;
    }
    .mui-grid-view.mui-grid-9 img{
        width: 40px;
        height: 40px;
    }
    .mui-grid-view.mui-grid-9 .mui-media-body{
        font-size: 13px;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: none;
    }

</style>