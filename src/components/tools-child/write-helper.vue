<script setup>
import { ref } from "vue";
</script>

<template>
    <div class="search-box" style="height: 600px">
        <div class="search-actions">
            <a href="#" style="color: #fff; text-decoration: underline; text-decoration-color: #215c79; text-underline-offset: 8px;">口播稿</a>
            <a href="#" style="color: #797374">视频</a>
        </div>

        <textarea class="search-input" placeholder="请输入选题..." rows="3"></textarea>

        <div class="search-box-inner" >
            <textarea class="search-input-inner" placeholder="请输入选题..." rows="3"></textarea>
            <div class="search-actions-inner">
                <button class="square-btn" style="background-color: #c41125;">替换原文</button>
                <button class="square-btn">重新精简</button>
                <button class="square-btn">取消精简</button>
            </div>
        </div>

        <div class="search-actions-inner">
            <button class="round-btn" style="background-color: #c41125;">AI 精简 →</button>
            <button class="round-btn">AI 润色 →</button>
            <button class="round-btn">AI 扩写 →</button>
        </div>
    </div>


</template>

<style scoped>
@import "@/assets/css/tools.css";
</style>