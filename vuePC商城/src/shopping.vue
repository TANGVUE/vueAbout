<template>
    <div>
        <router-view :addList="addList" @carts="getCart" @getAccount="getAccount" :account="account"></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props:['addList'],
    methods:{
    }
}
</script>

<style>

</style>
