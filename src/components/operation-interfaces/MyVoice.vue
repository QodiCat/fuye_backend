<script setup>
import { ref } from "vue";
</script>

<template>
    <div class="container">
        <div class="header">
            <button><i class="fas fa-search"></i> 搜索声音名称</button>
            <button class="active"><i class="fas fa-microphone"></i> 定制声音</button>
        </div>
        <div class="cards">
            <div class="card">
                <div class="icon">
                    <i class="iconfont icon-yonghu user"><span> 李飞</span></i>
                </div>
                <div class="role">原音色</div>
                <button>立即创作 <i class="fas fa-arrow-right"></i></button>
            </div>

            <div class="card">
                <div class="icon">
                    <i class="iconfont icon-yonghu user"><span> 李飞</span></i>
                </div>
                <div class="role">原音色</div>
                <button>立即创作 <i class="fas fa-arrow-right"></i></button>
            </div>

            <div class="card">
                <div class="icon">
                    <i class="iconfont icon-yonghu user"><span> 李飞</span></i>
                </div>
                <div class="role">原音色</div>
                <button>立即创作 <i class="fas fa-arrow-right"></i></button>
            </div>

            <div class="card">
                <div class="icon">
                    <i class="iconfont icon-yonghu user"><span> 李飞</span></i>
                </div>
                <div class="role">原音色</div>
                <button>立即创作 <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "../../assets/css/operation-interfaces-css/MyVoice.css"
</style>