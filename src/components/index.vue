<template>
    <div class="index_body" style="background-color: #000;">
        <header class="header">
            <img src="@/assets/pictures/logo.png" alt="福业智通AIGC" class="logo">
            <nav class="nav">
                <router-link to="/index">
                <a href="#home" style="color: red;">首页</a>
                </router-link>
                <a href="#"  @click.prevent="scrollToSection1">产品</a>
                <a href="#" @click.prevent="scrollToSection2">价格</a>
                <a href="#" @click.prevent="scrollToSection3">帮助</a>
            </nav>
            <router-link to="/register">
            <a class="login-btn" href="register.vue" style="text-decoration: none; color: #fff;">登录</a>
            </router-link>
        </header>

        <section class="hero" >
            <h1><span class="blue-highlight">AI 一站式制作</span><br><span class="highlight">IP短视频</span></h1>
            <p>从策划、文案到音视频生成，体验全新的短视频制作方式</p>
            <div class="hero-buttons">
                <router-link to="/dashboard">
                  <button class="btn btn-primary">开始创作</button>
                </router-link>
                <button class="btn btn-secondary" @click.prevent="scrollToSection3">联系我们</button>
            </div>
        </section>

        <section id="products" class="partners">
            <div class="partner-logos">
                <!-- Partner logos would go here -->
                <img src="@/assets/pictures/logos.png" alt="partners">
            </div>
        </section>

        <section class="features" ref="section1">
            <h3>场景案例展示</h3>
            <h2>数字人一键克隆</h2>
            <p>真人形象 1:1 还原 · 超低成本极速克隆 · 一次克隆终身使用</p>
            <!-- <div class="cards">
                <video class="card" style="width: 300px; height: 472px;" src="@/assets/videos/video-eg1.mp4" controls></video>
                <div class="card" style="background: #5084bd;width: 350px;height: 557px;"></div>
                <div class="card" style="background: #6aa9de;width: 400px;height: 637px;"></div>
                <div class="card" style="background: #5084bd;width: 350px;height: 557px;"></div>
                <div class="card" style="background: #4472a4;width: 300px;height: 472px;"></div>
            </div> -->
            <div class="warp">
                <div class="slide-dom">
                <video class="card" style="width: 300px; height: 472px;" src="@/assets/videos/video-eg2.mp4" controls></video>
                <video class="card" style="width: 300px; height: 472px;" src="@/assets/videos/video-eg1.mp4" controls></video>
                <video class="card" style="width: 300px; height: 472px;" src="@/assets/videos/video-eg2.mp4" controls></video>
            </div>
            </div>

            
        </section>

        <section class="work">
            <h3>AIP内容工作</h3>
            <h2>个人 IP + 数字人团队</h2>
            <p>多智能体 7*24 同步在线 · 批量输出行业内容 · 微信群聊工作交传</p>
            <div class="work-cards">
                <div class="work-card">
                    <img src="@/assets/pictures/work1.png" alt="work1">
                    <p>精准智能抓取</p>
                    <router-link to="/tools/topic" style="color: inherit; text-decoration: none;">
                        <h3>热点抓取</h3>
                    </router-link>
                </div>
                <div class="work-card">
                    <img src="@/assets/pictures/work2.png" alt="work2">
                    <p>快速优化改写</p>
                    <router-link to="/tools/helper" style="color: inherit; text-decoration: none;">
                        <h3>改写文案</h3>
                    </router-link>
                </div>
                <div class="work-card">
                    <img src="@/assets/pictures/work3.png" alt="work3">
                    <p>极速智能生成</p>
                    <router-link to="/dashboard/我的数字人" style="color: inherit; text-decoration: none;">
                        <h3>生成视频</h3>
                    </router-link>
                </div>
                <div class="work-card">
                    <img src="@/assets/pictures/work4.png" alt="work4">
                    <p>多线程混剪</p>
                    <h3>混剪视频</h3>
                </div>
            </div>
        </section>

        <section class="pricing" ref="section2">
            <h3>个性化定制套餐</h3>
            <h2>选择适合你的套餐方案</h2>
            <div class="pricing-cards">
                <div class="pricing-card">
                    <h4>创作版</h4>
                    <div class="price" style="color: white;">¥ 365</div>
                    <hr class="gradient-line">
                    <p> <span class="highlight">有效期6个月</span></p>
                    <!-- <button class="btn btn-secondary">立即购买</button> -->

                    <div>
                        <button class="btn btn-secondary" @click="showPaymentWindow = true">立即购买</button>
                        <div v-if="showPaymentWindow" class="overlay" @click="closePaymentWindow">
                        <div class="payment-window" @click.stop>
                            <div class="payment-header">
                            <p>扫一扫付款</p>
                            <h2>199</h2>
                            <button class="close-btn" @click="closePaymentWindow">×</button>
                            </div>
                            <div class="payment-content">
                            <div class="qr-code">
                                <img src="@/assets/pictures/qr-eg.png" alt="二维码" />
                            </div>
                            <div class="payment-description">
                                <p>推荐以下应用扫码支付</p>
                                <p><img src="@/assets/pictures/zfb.png"> <img src="@/assets/pictures/wechat.png"></p>
                                <p>二维码剩余<span> 03分32秒 </span>过期，可重新获取</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <ul class="price-features">
                        <p>包括</p>
                        <li>5个场景</li>
                        <li>1个声音</li>
                        <li>30分钟</li>
                    </ul>
                </div>
                <div class="pricing-card" style="background:linear-gradient(to bottom left, #1b2f3a, #091416);">
                    <h4>充值积分</h4>
                    <div class="price" style="color:white">¥ 199</div>
                    <hr class="gradient-line">
                    <p> <span class="highlight">用于积分充值</span></p>
                    <!-- <button class="btn btn-secondary">立即购买</button> -->

                    <div>
                        <button class="btn btn-secondary" @click="showPaymentWindow = true">立即购买</button>
                        <div v-if="showPaymentWindow" class="overlay" @click="closePaymentWindow">
                        <div class="payment-window" @click.stop>
                            <div class="payment-header">
                            <p>扫一扫付款</p>
                            <h2>199</h2>
                            <button class="close-btn" @click="closePaymentWindow">×</button>
                            </div>
                            <div class="payment-content">
                            <div class="qr-code">
                                <img src="@/assets/pictures/qr-eg.png" alt="二维码" />
                            </div>
                            <div class="payment-description">
                                <p>推荐以下应用扫码支付</p>
                                <p><img src="@/assets/pictures/zfb.png"> <img src="@/assets/pictures/wechat.png"></p>
                                <p>二维码剩余<span> 03分32秒 </span>过期，可重新获取</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <ul class="price-features">
                        <p>包括</p>
                        <li>199积分=199元</li>
                        <li>500积分=500元</li>
                        <li>1000积分=1000元</li>
                    </ul>
                </div>
                <div class="pricing-card">
                    <h4>企业版</h4>
                    <div class="price" style="color:white">面议</div>
                    <hr class="gradient-line">
                    <p> <span class="highlight">合作接洽中</span></p>
                    <button class="btn btn-secondary">联系我们</button>
                </div>
            </div>
        </section>

        <footer class="footer" ref="section3">
            <div class="content">
                <img src="@/assets/pictures/logo.png" alt="福业智通AIGC" class="logo">
                <hr class="underline">
                <p>一站式策划、文案和音视频生成解决方案</p>
            </div>

            <div class="content">
                <p>联系我们</p>
                <p>xiaofu@fuyezhitong.com</p>
            </div>

            <div class="content">
                <img src="@/assets/pictures/cooperation.png" style="width: 120px;height: auto;" class="logo">
            </div>

        </footer>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showPaymentWindow: false
    };
  },
  methods: {
    scrollToSection1() {
      this.$refs.section1.scrollIntoView({ behavior: 'smooth' });
    },
    scrollToSection2() {
      this.$refs.section2.scrollIntoView({ behavior: 'smooth' });
    },
    scrollToSection3() {
      this.$refs.section3.scrollIntoView({ behavior: 'smooth' });
    },
    closePaymentWindow() {
      this.showPaymentWindow = false;
    }
  }
};
</script>

<style scoped>
@import '@/assets/css/index.css';
</style>