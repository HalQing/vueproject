<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论的内容（最多120字）" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in commentList" :key="item.name">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;&nbsp;&nbsp;用户：{{ item.name }}&nbsp;&nbsp;&nbsp;&nbsp;发表时间：{{ item.time | dateFormat}}
                </div>
                <div class="cmt-content">
                    {{ item.content==="undefined"?"什么也没有说": item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    import {Toast} from "mint-ui"
    export default {
        name: "comment",
        data(){
            return {
                pageIndex:1,
                commentList:[
                    {name:"111",time:new Date(),content:"ad卡电话卡极大肯定暗地里卡"},
                    {name:"222",time:new Date(),content:"ad卡电话卡极大肯定暗地里卡"},
                    {name:"333",time:new Date(),content:"ad卡电话卡极大肯定暗地里卡"},
                    {name:"444",time:new Date(),content:"ad卡电话卡极大肯定暗地里卡"},
                    {name:"555",time:new Date(),content:"ad卡电话卡极大肯定暗地里卡"},
                    {name:"666",time:new Date(),content:"ad卡电话卡极大肯定暗地里卡"},
                    {name:"777",time:new Date(),content:"ad卡电话卡极大肯定暗地里卡"},
                    {name:"888",time:new Date(),content:"ad卡电话卡极大肯定暗地里卡"},
                    {name:"999",time:new Date(),content:"ad卡电话卡极大肯定暗地里卡"},
                ],
            };
        },
        created(){
            this.getCommentList();
        },
        methods:{
            getCommentList(){
                // this.$http.get("地址/"+this.id+"?pageIndex="+this.pageIndex).then(result=>{
                //
                //     if(result.body.status===0){
                //         //在原来数据的基础上追加数据
                //         this.commentList = this.commentList.concat(result.body.message);
                //         console.log("成功获取评论："+result.body.message);
                //     }else{
                //         Toast("加载评论失败");
                //     }
                // });
                Toast("加载评论");
            },

            getMore(){
                this.pageIndex++;
                this.getCommentList();
            },
        },
        props:["id"],//从父组件传入

    }
</script>

<style scoped>
    .cmt-container{
        margin-top: 10px;
    }
   .cmt-container h3{
       font-size: 18px;
       font-weight: bold;
   }
   .cmt-container textarea{
       font-size: 14px;
       height: 100px;
       margin: 0;
   }

    .cmt-container .cmt-list{
        margin: 10px 0;
    }

   .cmt-container .cmt-list .cmt-item{
       font-size: 13px;
   }
   .cmt-container .cmt-list .cmt-item .cmt-title{
       line-height: 30px;
       background-color: #cccccc;
    }
    .cmt-container .cmt-list .cmt-item .cmt-content{
        line-height: 40px;
        text-indent: 2em;
    }
</style>