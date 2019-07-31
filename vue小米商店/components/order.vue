<template>
    <div class="order-box">
        <div class="image">
            <img :src="obj.url" alt="1">
        </div>
        <div class="data">
            <p>名称:{{ obj.name }}</p>
            <p>收货地址：桂林电子科技大学北海校区</p>
            <p>快递：从深圳中转发出</p>
        </div>
        <div class="state">
            {{ obj.state }}
        </div>
    </div>
</template>

<script>
export default {
    props:['obj']
}
</script>

<style scoped>
.order-box{
    margin: 10px 5px;
    height: 70px;
    background-color: white;
    box-shadow: 0px 1px 1px 0px #9a949433;
    overflow: hidden;
}
.image{
    width: 20%;
    height: 100%;
    float: left;
}
.image img{
    width: 90%;
    height: 90%;
    margin-left: 5%;
}
.data{
    width: 50%;
    height: 100%;
    float: left;
    overflow: hidden;
}
.data p{
    white-space:nowrap; /*禁止换行*/
    text-overflow:ellipsis; /*文本超出隐藏*/
    font-weight: normal;
    font-size: 14px;
    padding: 1px 0px;
}
.state{
    width: 30%;
    height: 100%;
    text-align: center;
    line-height: 70px;
    float: right;
    font-weight: bold;
    font-size: 18px;
    color: #f7891d;
}
</style>
