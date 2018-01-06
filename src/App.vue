<template>
    <div id="app">
        <my-aaa></my-aaa>  
        <img src="./assets/images/logo.png">
        <div class="nav-box">
            <ul class="nav">
                <li>
                    <!-- exact 解除包含关系 -->
                    <!-- event="mouseover" 更改件类型 -->
                    <!-- <a href="#/">哈希模式不能阻止默认跳转</a> -->
                    <!-- <a href="/">history模式不能阻止默认跳转</a> -->

                    <!-- <router-link>完全兼容哈希模式和history模式</router-link>  -->
                    <router-link to="/" exact event="mouseover">home</router-link> 
                </li>
                <li>
                    <router-link :to="world">world</router-link> 
                </li>
                <li>
                    <router-link to="/user">user</router-link> 
                </li>
                <li>
                    <!-- active-class="activeClass" 单独样式class #target锚点定位 -->
                    <!-- <router-link :to="{path:'/hello#target'}" active-class="activeClass">hello</router-link>  -->
                    <router-link :to="{path:'/hello'}" active-class="activeClass">hello</router-link> 
                </li>
                <router-link to="/about" tag="li">
                    <!-- tag="li" 改变<router-link></router-link>生成元素的类型-->
                    <i class="fa fa-home"></i>
                    <span>about</span>
                </router-link> 
            </ul>
            当前下标为：{{$route.meta.index}}
        </div>

        <input type="button" value="后退一步" @click="backHandle" class="history">
        <input type="button" value="前进一步" @click="forwardHandle" class="history">
        <input type="button" value="后退两步" @click="goHandle" class="history">
        <input type="button" value="替换当前记录" @click="replaceHandle" class="history">
        <input type="button" value="添加一条记录" @click="pushHandle" class="history">

        <!-- 命名视图 -->
        <router-view name="slider" class="customer"></router-view>
        <transition :enter-active-class="activeName" :leave-active-class="activeName" mode="out-in">
            <router-view class="center animated"></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                world: '/world',
                activeName: 'bounce'
            }
        },
        components: {
            'my-aaa': {
                template: '<h2>我要学习VUE</h2>'
            }
        },
        watch: {
            $route (to, from) {
                if (to.meta.index < from.meta.index) {
                    this.activeName = 'bounce'
                } else {
                    this.activeName = 'wobble'
                }
            }
        },
        methods: {
            backHandle () {
                this.$router.back()
            },
            forwardHandle () {
                this.$router.forward()
            },
            goHandle () {
                this.$router.go(-2)
            },
            replaceHandle () {
                // this.$router.replace('/world')
                this.$router.replace({path: '/world'})
            },
            pushHandle () {
                // this.$router.push({path: '/user'})
                this.$router.push('/user')
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .history{
        display: inline-block;
        padding: 10px 5px;
        margin: 10px; 
    }
</style>
