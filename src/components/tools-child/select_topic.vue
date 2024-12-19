<script setup>
import { ref } from "vue";
</script>

<template>

    <div class="search-box" >
        <textarea class="search-input" placeholder="请输入选题..." rows="3"></textarea>
        <div class="search-actions" style="justify-content: space-between;">
            <span style="color: #666;">📎 附件</span>
            <button class="send-btn">→</button>
        </div>
    </div>

    <div class="card-grid">
        <div class="card">
            <i>🎵</i>
            <span>黄子韬直播说脏话</span>
        </div>
        <div class="card">
            <i>🤖</i>
            <span>黑神话悟空水墨风过场动画</span>
        </div>
        <div class="card">
            <i>🤖</i>
            <span>28岁网友应聘喜茶失败</span>
        </div>
        <div class="card">
            <i>🎵</i>
            <span>全红婵王俊凯合影</span>
        </div>
        <div class="card">
            <i>🎵</i>
            <span>吴艳妮和多名运动员合照</span>
        </div>
        <div class="card">
            <i>🎵</i>
            <span>消防版黑神话悟空</span>
        </div>
    </div>

    <button class="refresh-btn">换一批 ↻</button>
</template>

<style scoped>
@import "@/assets/css/tools.css";
</style>