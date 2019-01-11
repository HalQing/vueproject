<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
                <router-link :to="'/home/newsInfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.image">
                    <div class="mui-media-body">
                        <h1>{{ item.title }}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{ item.time | dateFormat}}</span>
                            <span>点击次数：{{ item.click }}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        name: "newsList",
        data(){
            return {list:[
                {id:11,title:'幸福11',url:'http://www.baidu.com/',time:new Date(),click:10,image:'http://localhost:3000/src/images/banner1.jpg'},
                {id:12,title:'幸福12',url:'http://www.baidu.com/',time:new Date(),click:10,image:'http://localhost:3000/src/images/banner1.jpg'},
                {id:13,title:'幸福13',url:'http://www.baidu.com/',time:new Date(),click:10,image:'http://localhost:3000/src/images/banner1.jpg'},
                {id:14,title:'幸福14',url:'http://www.baidu.com/',time:new Date(),click:10,image:'http://localhost:3000/src/images/banner1.jpg'},
                {id:15,title:'幸福15',url:'http://www.baidu.com/',time:new Date(),click:10,image:'http://localhost:3000/src/images/banner1.jpg'},
                {id:16,title:'幸福16',url:'http://www.baidu.com/',time:new Date(),click:10,image:'http://localhost:3000/src/images/banner1.jpg'},
                {id:17,title:'幸福17',url:'http://www.baidu.com/',time:new Date(),click:10,image:'http://localhost:3000/src/images/banner1.jpg'},
                {id:18,title:'幸福18',url:'http://www.baidu.com/',time:new Date(),click:10,image:'http://localhost:3000/src/images/banner1.jpg'},
                {id:21,title:'幸福21',url:'http://www.baidu.com/',time:new Date(),click:20,image:'http://localhost:3000/src/images/banner2.jpg'},
                {id:22,title:'幸福22',url:'http://www.baidu.com/',time:new Date(),click:20,image:'http://localhost:3000/src/images/banner2.jpg'},
                {id:23,title:'幸福23',url:'http://www.baidu.com/',time:new Date(),click:20,image:'http://localhost:3000/src/images/banner2.jpg'},
                {id:24,title:'幸福24',url:'http://www.baidu.com/',time:new Date(),click:20,image:'http://localhost:3000/src/images/banner2.jpg'},
                {id:25,title:'幸福25',url:'http://www.baidu.com/',time:new Date(),click:20,image:'http://localhost:3000/src/images/banner2.jpg'},
                {id:26,title:'幸福26',url:'http://www.baidu.com/',time:new Date(),click:20,image:'http://localhost:3000/src/images/banner2.jpg'},
                {id:27,title:'幸福27',url:'http://www.baidu.com/',time:new Date(),click:20,image:'http://localhost:3000/src/images/banner2.jpg'},
                {id:28,title:'幸福28',url:'http://www.baidu.com/',time:new Date(),click:20,image:'http://localhost:3000/src/images/banner2.jpg'},
                {id:31,title:'幸福31',url:'http://www.baidu.com/',time:new Date(),click:30,image:'http://localhost:3000/src/images/banner3.jpg'},
                {id:32,title:'幸福32',url:'http://www.baidu.com/',time:new Date(),click:30,image:'http://localhost:3000/src/images/banner3.jpg'},
                {id:33,title:'幸福33',url:'http://www.baidu.com/',time:new Date(),click:30,image:'http://localhost:3000/src/images/banner3.jpg'},
                {id:34,title:'幸福34',url:'http://www.baidu.com/',time:new Date(),click:30,image:'http://localhost:3000/src/images/banner3.jpg'},
                {id:35,title:'幸福35',url:'http://www.baidu.com/',time:new Date(),click:30,image:'http://localhost:3000/src/images/banner3.jpg'},
                {id:36,title:'幸福36',url:'http://www.baidu.com/',time:new Date(),click:30,image:'http://localhost:3000/src/images/banner3.jpg'},
                {id:37,title:'幸福37',url:'http://www.baidu.com/',time:new Date(),click:30,image:'http://localhost:3000/src/images/banner3.jpg'},
                {id:38,title:'幸福38',url:'http://www.baidu.com/',time:new Date(),click:30,image:'http://localhost:3000/src/images/banner3.jpg'},
            ]};
        },
        created(){
            this.getNewsList();
        },
        methods:{
          getNewsList(){
              Toast('开始请求NewsList数据');
          },
        },
    }
</script>

<style scoped>

    .mui-table-view li h1{
        font-size: 15px;
    }

    .mui-table-view li .mui-ellipsis{
        font-size: 13px;
        color: blue;
        display: flex;
        justify-content: space-between;
    }

</style>