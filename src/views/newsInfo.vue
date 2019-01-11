<template>
    <div class="newinfo-container">
        <h3 class="title">{{news.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{news.time | dateFormat}}</span>
            <span>点击次数：{{news.click}}次</span>
        </p>
        <hr>
        <div class="content" v-html="news.content"></div>
        <!--供子组件调用，接收设置props:["id"]-->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
    import comment from './comment.vue'
    export default {
        name: "newsInfo",
        data(){
            return {
                id:this.$route.params.id,
                news:{
                    id:this.$route.params.id,
                    title:"都是幸福",
                    time:new Date(),
                    click:100,
                    content:"在天地之间\n" +
                        "你是一座山。\n" +
                        "开辟了天和地，\n" +
                        "让我的世界\n" +
                        "有了阳光\n" +
                        "有了四季\n" +
                        "\n" +
                        "感恩，一生的爱\n" +
                        "\n" +
                        "在泥泞的陆地，\n" +
                        "你是一颗石子。\n" +
                        "用你朴实无华的身躯，\n" +
                        "为我将来的前途\n" +
                        "铺下第一层路基。\n" +
                        "\n" +
                        "在时间的长河里，\n" +
                        "你是一个航标。\n" +
                        "或许你给不了我答案，\n" +
                        "但在我深陷迷途时，\n" +
                        "你却是一直为我点亮的\n" +
                        "明灯。\n" +
                        "\n" +
                        "在未来的路上，\n" +
                        "你我或许要有一次\n" +
                        "难舍的分别。\n" +
                        "用刺骨的离情，\n" +
                        "向前世的陪伴\n" +
                        "做一个最长情的告白。\n" +
                        "\n" +
                        "或许，当你在天边\n" +
                        "看着我在人间\n" +
                        "蒸蒸日上的时候，\n" +
                        "也是我\n" +
                        "在向你发出一声问候。\n" +
                        "用你当年最洪亮的声音，\n" +
                        "就像我在人生起步的时候，\n" +
                        "你给我的最坚定的\n" +
                        "呐喊！\n" +
                        "\n" +
                        "农历戊戌年戊午月丙戌日\n" +
                        "西元2018年6月23日\n" +
                        "于家中为父亲节作"
                }
            };
        },
        methods:{},
        components:{
            'comment-box':comment,//名称与对应组件
        },
    }
</script>

<style scoped>
  .newinfo-container{
      padding: 0 5px;
  }
  .newinfo-container .title{
      font-size: 16px;
      text-align: center;
      margin: 20px 0;
      color: red;
  }
  .newinfo-container .subtitle{
      font-size: 13px;
      color: blue;
      display: flex;
      justify-content: space-between;
  }
  .newinfo-container .content img{
      width: 100%;
  }
</style>