<script setup>
import { ref, defineAsyncComponent, watch } from "vue";
import { useRoute, useRouter } from 'vue-router';

// 侧边栏菜单
const menuItems = ref([
    {
        text: "AI工作组",
        iconfont: "icon-wj-jlb",
        path: '/dashboard/AI工作组'
    },
    {
        text: "我的数字人",
        iconfont: "icon-chengyuan",
        path: '/dashboard/我的数字人'
    },
    {
        text: "我的声音",
        iconfont: "icon-maikefeng",
        path: '/dashboard/我的声音'
    },
    {
        text: "我的作品",
        iconfont: "icon-film",
        path: '/dashboard/我的作品'
    },
    {
        text: "我的账号",
        iconfont: "icon-account-box-fill",
        path: '/dashboard/我的账号'
    }
]);

import Topic from '@/components/tools-child/select_topic.vue';
import Helper from '@/components/tools-child/write-helper.vue';

const route = useRoute();
const router = useRouter();

const componentsMap = {
    topic: Topic,
    helper: Helper
};

const currentComponent = ref(componentsMap.topic);

// 监听路由参数变化
watch(
    () => route.params.component,
    (newComponent) => {
        if (componentsMap[newComponent]) {
            currentComponent.value = componentsMap[newComponent];
        }
    },
    { immediate: true }
);

// 点击导航链接时更新路由
const showComponent = (component) => {
    router.push({ path: `/tools/${component}` });
};

// 点击侧边栏菜单项时更新路由
const handleMenuClick = (path) => {
    router.push({ path });
};
</script>

<template>
    <div class="tools-body">
        <!-- 侧边栏 -->
        <div class="sidebar">
            <!-- logo -->
            <div class="logo">
                <a href="#" @click.prevent="showComponent('helper')">
                    <img src="@/assets/pictures/logo.png" alt="福业智通AIGC">
                </a>
            </div>
            <!-- 侧边栏菜单 -->
            <div class="menu">
                <ul>
                    <li v-for="(item, index) in menuItems" :key="index"
                        :class="{ active: activeIndex === index}"
                        @mouseover="hoverIndex = index"
                        @mouseleave="hoverIndex = null"
                        @click="handleMenuClick(item.path)">
                        <!-- iconfont 图标 -->
                        <i class="iconfont" :class="item.iconfont"></i>  
                        <!-- 文本内容 -->
                        <span> {{ item.text }} </span>
                        <i class="iconfont icon-jiantou arrow-icon"></i>
                    </li>
                </ul>
            </div>
            <!-- 客户咨询区域 -->
            <div class="consult">
                <img alt="客户咨询图标" src="@/assets/pictures/dashboard-image/consult-img.png" />
                <span>客户咨询</span>
            </div>
        </div>
        <!-- 右侧主页面 -->
        <div class="main-content">
            <div class="header">
                <!-- 积分区域 -->
                <div class="points">
                    <i class="iconfont icon-zuanshi_o"></i>
                    <span>134 <i>积分</i></span>
                </div>
                <!-- 头像图标 -->
                <a href="#/dashboard/我的账号/" style="color: inherit; text-decoration: none;">
                  <i class="iconfont icon-yonghu user"></i>
                </a>

            </div>

            <div class="top-nav">
                <a href="#" style="color: #fff" @click.prevent="showComponent('topic')">AI帮选题</a>
                <a href="#" style="color: #fff" @click.prevent="showComponent('helper')">AI文案助手</a>
            </div>

            <component :is="currentComponent"></component>
        </div>
    </div>
</template>

<style scoped>
@import "@/assets/css/tools.css";
</style>