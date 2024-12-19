<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';
import Card from "./Card.vue";

const router = useRouter();

const cards = ref([
    {
        title: "用数字分身创作视频",
        description:
        "一键生成:只需上传文字或配音,选择你的数字分身,即可生成口播视频.高度拟真:数字分身表情自然,动作流畅,宛如真人出镜.节省成本:只需一次拍摄,大幅降低了视频制作成本和时间.",
        primaryButtonText: "立即创作",
        secondaryButtonText: "我的作品",
        primaryButtonAction: () => router.push({ path: '/dashboard/我的数字人' }),
        secondaryButtonAction: () => router.push({ path: '/dashboard/我的作品' })
    },
    {
        title: "爆款文案搜索",
        description:
        "一键生成:只需上传文字或配音,选择你的数字分身,即可生成口播视频.高度拟真:数字分身表情自然,动作流畅,宛如真人出镜.节省成本:只需一次拍摄,大幅降低了视频制作成本和时间.",
        primaryButtonText: "立即搜索",
        secondaryButtonText: "我的作品",
        primaryButtonAction: () => router.push({ path: '/tools/topic' }),
        secondaryButtonAction: () => router.push({ path: '/dashboard/我的作品' })
    },
    {
        title: "账号风格评估",
        description:
        "一键生成:只需上传文字或配音,选择你的数字分身,即可生成口播视频.高度拟真:数字分身表情自然,动作流畅,宛如真人出镜.节省成本:只需一次拍摄,大幅降低了视频制作成本和时间.",
        primaryButtonText: "立即创作",
        secondaryButtonText: "我的作品",
        primaryButtonAction: () => router.push({ path: '/dashboard/账号风格评估' }),
        secondaryButtonAction: () => router.push({ path: '/dashboard/我的作品' })
    },
    {
        title: "AI文案改写",
        description:
        "一键生成:只需上传文字或配音,选择你的数字分身,即可生成口播视频.高度拟真:数字分身表情自然,动作流畅,宛如真人出镜.节省成本:只需一次拍摄,大幅降低了视频制作成本和时间.",
        primaryButtonText: "立即创作",
        secondaryButtonText: "我的作品",
        primaryButtonAction: () => router.push({ path: '/tools/helper' }),
        secondaryButtonAction: () => router.push({ path: '/dashboard/我的作品' })
    },
])
</script>

<template>
    <div class="container">
        <Card 
            v-for="(card, index) in cards"
            :key="index"
            :cardTitle="card.title"
            :cardDescription="card.description"
            :primaryButtonText="card.primaryButtonText"
            :secondaryButtonText="card.secondaryButtonText"
            :primaryButtonAction="card.primaryButtonAction"
            :secondaryButtonAction="card.secondaryButtonAction"
        />
    </div>
</template>

<style scoped>
@import "@/assets/css/operation-interfaces-css/WorkGroup.css"
</style>