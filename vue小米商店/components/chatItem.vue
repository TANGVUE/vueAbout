<template>
    <router-link  class="chatItem-box" tag="div" to="/chatRoom">
        <div class="head">
            <img src="../static/img/801073.png" alt="" >
        </div>
        <div class="content">
            <h2 class="name">商家名称</h2>
            <p class="message">最新发送的消息展示</p>
        </div>
        <div class="time-bar">
            <div class="time">
                19/05/10
            </div>
            <div class="count">
                <mt-badge size="small" type="error">10</mt-badge>
            </div>
        </div>
    </router-link>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.chatItem-box{
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #e2e0e047;
    background-color: white;
}
.chatItem-box .head{
    float: left;
    width: 70px;
    height: 100%;
    margin-left: 5px;
}
.chatItem-box .head img{
    width: 60px;
    height: 60px;
    margin: 5px auto;
}
.chatItem-box .content{
    float: left;
    height: 100%;
    margin-left: 6px;
}
.chatItem-box .content .name{
    font-size: 17px;
    font-weight: 500;
    margin-top: 7px;
}
.chatItem-box .content .message{
    font-size: 16px;
    font-weight: 200;
    color: #303031;
    margin-top: 15px;
}
.chatItem-box .time-bar{
    float: right;
}
.chatItem-box .time-bar .time{
    font-size: 16px;
    color: #b9b9b9;
    margin-top: 7px;
    padding: 0px 5px;
}
.chatItem-box .time-bar .count{
    text-align: center;
    margin-top: 6px;
}

</style>
