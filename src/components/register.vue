<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import passwordLogin from '@/functions/login/password_login';
import sendLoginCode from '@/functions/login/send_code';
import codeLogin from '@/functions/login/code_login';

const phonePosition = ref("+86");
const phoneNumber = ref("");
const password = ref(""); // 确保定义 password
const checkCode = ref("");
const verificationCode = ref(""); // 确保定义 verificationCode
const isCountingDown = ref(false);
const buttonText = ref("发送");
const showPhoneMessage = ref(false);
const showCheckCode = ref(true);
const showPassword = ref(true);
const agreementChecked = ref(false); // 确保定义 agreementChecked

// 检验界面类型
const isPwLogin = ref(true);
const changeOnType = () => {
    isPwLogin.value = !isPwLogin.value;
}

// 发送验证码
const getCheckCode = async () => {
    if (!phoneNumber.value) {
        console.log('请输入手机号');
        return;
    }
    try {
        await sendLoginCode(phoneNumber.value);
        console.log('验证码已发送');
        // 开始倒计时逻辑
    } catch (error) {
        console.log('发送验证码失败', error);
    }
}

// 登录按钮事件
const loginDetermine = async () => {
    if (isPwLogin.value) {
        if (!phoneNumber.value || !password.value) {
            console.log('请输入手机号和密码');
            return;
        }
        return await passwordLogin(phoneNumber.value, password.value);
    } else {
        if (!phoneNumber.value || !verificationCode.value) {
            console.log('请输入手机号和验证码');
            return;
        }
        return await codeLogin(phoneNumber.value, verificationCode.value);
    }
}

const router = useRouter();
const handleLogin = async () => {
    if (!agreementChecked.value) {
        console.log('请先同意协议');
        return;
    }
    try {
        const loginResult = await loginDetermine(); // 登录验证函数
        if (loginResult) {
            router.push('/dashboard');
        }
    } catch (error) {
        console.log('登录失败', error);
        // 处理登录失败
    }
}
</script>

<template>
    <div class="login-body">
        <!-- 左侧标题界面 -->
        <div class="left">
            <!-- logo -->
            <div class="logo">
                <a href="#">
                    <img src="../assets/pictures/logo.png" alt="福业智通AIGC">
                </a>
            </div>
            <!-- 标题 -->
            <div class="title">
                <h1>福业智通AGI</h1>
                <h2>人人都能顾得起的AI创意团队</h2>
            </div>
        </div>
        <!-- 右侧登录界面 -->
        <section class="register">
            <!-- 上方链接图 -->
            <a href="#">
                <div class="banner">
                    <h2>AI合伙人<span>招募中</span></h2>
                    <span>合作共双赢 携手同发展</span>
                </div>
            </a>
            <!-- 登录表单 -->
             <h3>欢迎登录 FYZTAGI.COM</h3>
            <form @submit.prevent="handleLogin">
                <!-- 手机号输入 -->
                <div class="phone-number">
                    <span class="iconfont icon-phone"></span>
                    <select v-model="phonePosition" class="phone-position">
                        <option>+86</option>
                        <option>+852</option>
                        <option>+853</option>
                        <option>+886</option>
                    </select>
                    <input type="text" placeholder="请输入电话号码" class="phone-input" v-model="phoneNumber" />
                </div>
                <!-- 显示提示信息 -->
                 <div class="error-phone">
                     <p v-show="showPhoneMessage">请输入手机号</p>
                 </div>
                <!-- 验证码输入 -->
                <div class="check-code" v-if="!isPwLogin">
                    <span class="iconfont icon-yanzhengma"></span>
                    <input type="text" placeholder="请输入验证码" class="verification-code" v-model="verificationCode" />
                    <button type="button" class="get-code-btn" @click="getCheckCode" :disabled="isCountingDown">{{
                        buttonText }}</button>
                </div>
                <!-- 显示提示信息 -->
                 <div class="error-checkcode" v-if="!isPwLogin">
                     <p v-show="showCheckCode">请输入验证码</p>
                 </div>
                <!-- 密码输入 -->
                <div class="password" v-if="isPwLogin">
                    <span class="iconfont icon-mima"></span>
                    <input type="text" placeholder="请输入您的密码" class="password-input" v-model="password" />
                </div>
                <!-- 显示提示信息 -->
                 <div class="error-password" v-if="isPwLogin">
                     <p v-show="showPassword">请输入密码</p>
                     <p class="forgetPw">忘记密码</p>
                 </div>
                <!-- 同意协议 -->
                <div class="agreement">
                    <input type="checkbox" id="agreement" v-model="agreementChecked" />
                    <label for="agreement">我已阅读并同意<a href="#">《服务协议》</a><a href="#">《隐私政策》</a></label>
                </div>
                <!-- 登录按钮 -->
                <button type="submit" class="login-button">登录</button>
                <div class="password-login">
                    <span class="a-link" @click="changeOnType">{{ isPwLogin ? "短信验证码登录" : "密码登录" }}</span>
                </div>
            </form>
        </section>


    </div>
</template>

<style scoped>
@import '@/assets/css/register.css';
</style>