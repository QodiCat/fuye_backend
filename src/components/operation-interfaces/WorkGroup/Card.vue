<script setup>
import { defineProps } from "vue";

const props = defineProps({
    cardTitle: String,
    cardDescription: String,
    primaryButtonText: String,
    secondaryButtonText: String,
    primaryButtonAction: Function,
    secondaryButtonAction: Function
});
</script>

<template>
    <div class="card">
        <h3>{{ cardTitle }}</h3>
        <p>{{ cardDescription }}</p>
        <div class="card-buttons">
            <button class="button button-primary" @click="props.primaryButtonAction">
                {{ primaryButtonText }}
                <i class="iconfont icon-xiangyoujiantou"></i>
            </button>
            <button class="button button-secondary" @click="props.secondaryButtonAction">
                {{ secondaryButtonText }}
            </button>
        </div>
    </div>
</template>

<style scoped>
.card {
    border: 1px solid #fff;
    padding: 40px;
}

.card h3 {
    font-size: 27px;
    margin-bottom: 24px;
}

.card p {
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 65px;
}

.card-buttons {
    display: flex;
    justify-content: space-between;
}

.button {
    width: 293px;
    height: 54px;
    border: none;
    border-radius: 27px;
    font-size: 21px;
    cursor: pointer;
}

.button-primary {
    background: linear-gradient(to right, #D33E3A, #C41025);
    color: #fff;
}

.button-primary i {
    margin-left: 3px;
    font-size: 21px;

    color: #C0272F;
    background-color: #fff;
    border-radius: 50%;
}

.button-secondary {
    background-color: rgba(247, 248, 248, 0.5);
    color: #C0272F;
}
</style>