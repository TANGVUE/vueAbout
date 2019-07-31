<template>
    <div class="show2-box">
        <div class="image">
            <img :src="items.url" alt="">
        </div>
        <div class="data">
            <p>{{items.name}}</p>
            <p>{{items.money}}</p>
            <p>{{items.introduce}}</p>
        </div>
        <div class="count">
            数量：
            <button @click="reduce">-</button>
            <input type="text" v-model="items.count">
            <button @click="add">+</button>
        </div>
        <div class="sum">
            <p>{{sum}}</p>
        </div>
        <div class="del">
            <button @click="del">移出购物车</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods:{
        // 如果是购物车中的数据，加减存在延迟
        add:function(){
            this.items.count+=1;
            this.$emit('setSum');
        },
        reduce:function(){
            if(this.items.count!=1){
                this.items.count-=1;
                this.$emit('setSum');
            }

        },
        del:function(){
            this.$emit('func',this.items.id);
        }
    },
    // 拿到父级传递的值
    props:['items'],
    computed:{
        sum:function(){
            return '￥'+(parseFloat(this.items.money)*this.items.count).toFixed(1);
        }
    }
}
</script>
<style scoped>

.show2-box{
    width: 1200px;
    height: 170px;
    background-color: white;
    margin: 15px 0px;
    box-shadow: 0px 3px 3px #00000036;
}
.show2-box .image{
    width: 170px;
    height: 100%;
    float: left;
}
.show2-box .image img{
    width: 150px;
    height: 150px;
    margin: 10px 10px;
}
.show2-box .data{
    width: 200px;
    height: 100%;
    float: left;
    margin: 0px 15px;
}
.show2-box .data p{
    padding: 15px 5px;
    font-size: 16px;
    font-weight: normal;
}
.show2-box .count{
    width: 200px;
    float: left;
    margin-top: 71px;
}
.show2-box .count input{
    width: 50px;
    font-size: 17px;
}
.show2-box .count button{
    font-size: 17px;
    width: 30px;
}


.show2-box .sum{
    width: 200px;
    height: 100%;
    float: left;
    margin: 0xp 15px;
    margin-left: 250px;
}
.show2-box .sum p{
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    color: #ff6700;
    margin-top: 71px;
}
.show2-box .del{
    float: right;
    margin-top: 68px;
    margin-right: 30px;
}
.show2-box .del button{
    width: 100px;
    height: 36px;
    border: none;
    cursor: pointer;
    background-color: #ff6700;
    color: white;
    outline: none;
    border-radius:4px; 
}
</style>

