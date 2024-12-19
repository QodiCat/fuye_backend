<script setup>
import { ref, computed, defineAsyncComponent, watch } from "vue";
import { useRoute, useRouter } from 'vue-router';


const hiddenComponents = ref([
    {
        text: "create-video",
        component: defineAsyncComponent(() => import("./operation-interfaces/CreateVideo.vue"))
    }
]);

// 侧边栏菜单
const menuItems = ref([
    {
        text: "AI工作组",
        iconfont: "icon-wj-jlb",
        component: defineAsyncComponent(() => import("./operation-interfaces/WorkGroup/WorkGroup.vue"))
    },
    {
        text: "我的数字人",
        iconfont: "icon-chengyuan",
        component: defineAsyncComponent(() => import("./operation-interfaces/DigitalMember.vue"))
    },
    {
        text: "我的声音",
        iconfont: "icon-maikefeng",
        component: defineAsyncComponent(() => import("./operation-interfaces/MyVoice.vue"))
    },
    {
        text: "我的作品",
        iconfont: "icon-film",
        component: defineAsyncComponent(() => import("./operation-interfaces/MyCreation.vue"))
    },
    {
        text: "我的账号",
        iconfont: "icon-account-box-fill",
        component: defineAsyncComponent(() => import("./operation-interfaces/MyAccount.vue"))
    }
]);

const activeIndex = ref(0);
const hoverIndex = ref(null);
const route = useRoute();
const router = useRouter();

// 计算所有可用组件（包括菜单项和隐藏组件）
const allComponents = computed(() => {
    return [...menuItems.value, ...hiddenComponents.value];
});

// 修改 currentComponent 计算属性
const currentComponent = computed(() => {
    // 先从路由参数获取组件名称
    const componentName = route.params.component;
    // 在所有组件中查找匹配的组件
    const component = allComponents.value.find(item => item.text === componentName);
    // 如果找到匹配的组件则返回，否则返回默认组件（第一个菜单项的组件）
    return component ? component.component : menuItems.value[0].component;
});

// 修改路由监听函数
watch(
    () => route.params.component,
    (newComponent) => {
        // 在菜单项中查找索引
        const index = menuItems.value.findIndex(item => item.text === newComponent);
        if (index !== -1) {
            activeIndex.value = index;
        }
        // 如果在菜单项中找不到，不更新 activeIndex
    },
    { immediate: true }
);

// 点击侧边栏菜单项时更新路由
const handleMenuClick = (index) => {
    activeIndex.value = index;
    router.push({ path: `/dashboard/${menuItems.value[index].text}` });
};
</script>

<template>
    <div class="dashboard-body">
        <!-- 侧边栏 -->
        <div class="sidebar">
            <!-- logo -->
            <div class="logo">
                <a href="#">
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
                        @click="handleMenuClick(index)">
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
            <!-- 头部区域 -->
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
            <div class="oper-interface">
                <!-- 工作区组件 -->
                <component :is="currentComponent" />
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "@/assets/css/dashboard.css";
</style>