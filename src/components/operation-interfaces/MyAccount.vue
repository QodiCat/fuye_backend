<script setup>
import { ref } from "vue";
</script>

<template>
    <div class="my-account">
        <div class="account-info">
            <div class="user-details">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div>
                    <p>188****0222</p>
                    <p>方*</p>
                </div>
                <div class="validity">
                    <p>会员权益到期日期</p>
                    <p>2025-11-19</p>
                </div>
                <div class="residue">
                    <p>账户剩余积分</p>
                    <p>134（129积分 将于2025-11-19到期）</p>
                </div>
            </div>

            <div class="referral-header">
                <div class="credits">
                    <h3>每邀请一位好友将获得</h3>
                    <p>额外的免费积分</p>
                    <div class="referral-input">
                        <p>专属邀请链接：</p>
                        <input type="text">
                        <button>复制</button>
                    </div>
                </div>
                <div class="invitation">
                    <p>当前邀请成功 0 人</p>
                    <div style="display: flex;justify-content: space-between;padding: 10px;">
                        <p>被邀请人</p>
                        <p>赠送积分</p>
                    </div>
                </div>
            </div>

        </div>
        <div class="pricing-cards">
            <div class="pricing-card">
                <div class="buy">
                    <h3>创作版</h3>
                    <button style="">立即购买 →</button>
                </div>
                <div class="pricing-inner">
                    <h1>365</h1>
                    <ul>
                        <li>5个场景</li>
                        <li>1个声音</li>
                        <li>30分钟</li>
                    </ul>
                </div>
            </div>

            <div class="pricing-card">
                <div class="buy">
                    <h3>充值积分</h3>
                    <button style="">立即购买 →</button>
                </div>
                <div class="pricing-inner">
                    <h1>199</h1>
                    <ul>
                        <li>199积分=399元</li>
                        <li>500积分=500元</li>
                        <li>1000积分=1000元</li>
                    </ul>
                </div>
            </div>

            <div class="pricing-card">
                <div class="buy">
                    <h3>企业版</h3>
                    <button style="">立即购买 →</button>
                </div>
                <div class="pricing-inner">
                    <h1>面议</h1>
                </div>
            </div>
            
        </div>
        <div class="terms">
            <input type="checkbox" id="terms-checkbox">
            <label for="terms-checkbox"> 我已阅读并同意此承诺</label>
        </div>
    </div>
</template>

<style scoped>
@import "@/assets/css/operation-interfaces-css/MyAccount.css";

</style>