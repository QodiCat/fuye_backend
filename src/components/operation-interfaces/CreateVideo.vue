<script setup>
import { ref } from "vue";

const selectedOption = ref('digital');
const showDigitalModal = ref(false);
const showVoiceModal = ref(false);
const selectedDigitalTab = ref('exclusive');
const selectedDigitalCard = ref(null);

const handleOptionClick = (option) => {
    selectedOption.value = option;
    if (option === 'digital') {
        showDigitalModal.value = true;
    } else if (option === 'voice') {
        showVoiceModal.value = true;
    }
};

const closeModal = (modalType) => {
    if (modalType === 'digital') {
        showDigitalModal.value = false;
    } else if (modalType === 'voice') {
        showVoiceModal.value = false;
    }
};

const handleDigitalCardClick = (index) => {
    selectedDigitalCard.value = index;
};
</script>

<template>
    <div class="content-area">
        <div class="preview-panel">
            <h2>选择或创建形象吧</h2>
                <div style="display: flex; flex-direction: row;" class="virols">
                    <div class="avatar-options">
                        <div 
                            class="option-button" 
                            :class="{ active: selectedOption === 'digital' }"
                            @click="handleOptionClick('digital')"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                <circle cx="12" cy="7" r="4"/>
                            </svg>
                            数字人
                        </div>

                        <div 
                            class="option-button"
                            :class="{ active: selectedOption === 'voice' }"
                            @click="handleOptionClick('voice')"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                                <line x1="12" y1="19" x2="12" y2="22"/>
                            </svg>
                            声音
                        </div>
                    </div>
            
                    <div class="preview-area">
                        <div class="preview-screen">
                            <div class="placeholder-content">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
                                    <line x1="7" y1="2" x2="7" y2="22"/>
                                    <line x1="17" y1="2" x2="17" y2="22"/>
                                    <line x1="2" y1="12" x2="22" y2="12"/>
                                    <line x1="2" y1="7" x2="7" y2="7"/>
                                    <line x1="2" y1="17" x2="7" y2="17"/>
                                    <line x1="17" y1="17" x2="22" y2="17"/>
                                    <line x1="17" y1="7" x2="22" y2="7"/>
                                </svg>
                                <p>预览区域</p>
                            </div>
                        </div>
                        <div class="video-controls">
                            <button class="play-btn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z"/>
                                </svg>
                            </button>
                            <div class="progress-wrapper">
                                <input type="range" class="progress-bar" min="0" max="100" value="0">
                                <div class="time-display">
                                    <span>00:00</span>
                                    <span>-00:33</span>
                                </div>
                            </div>
                            <button class="volume-btn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            <p class="tips">
                ! 预览提醒：开启中，"生成"后将为您提供
                您准备的口型和动画需要预览
            </p>
        </div>

        <div class="script-panel">
            <div class="tabs">
                <div class="tab">脚本内容</div>
                <div class="tab active">输入脚本</div>
            </div>

            <div class="script-tools">
                <button class="script-btn">文本转音频</button>
                <button class="script-btn">上传音频</button>
                <span>0字</span>
                <button class="try-btn">试听</button>
            </div>

            <textarea class="script-input" placeholder="请在这里输入您的文本内容并保证输入内容的语种与下方所选语种一致，否则可能会合成失败"></textarea>
            <input type="text" class="prompt-input" placeholder="输入您的创作要求，AI帮您智能生成">
        </div>
  </div>

  <div class="digital-footer">
      <label class="terms">
          <input type="checkbox">
          我已阅读并同意此承诺
      </label>
      <button class="generate-button">
          生成视频
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
      </button>
    </div>

    <!-- 添加数字人选择弹窗 -->
    <div v-if="showDigitalModal" class="modal-overlay">
        <div class="modal-content digital-modal">
            <div class="modal-header">
                <h3>选择数字人形象</h3>
                <button class="close-btn" @click="closeModal('digital')">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="modal-body">
                <div class="digital-modal-top">
                    <div class="digital-tabs">
                        <div 
                            class="digital-tab" 
                            :class="{ active: selectedDigitalTab === 'exclusive' }"
                            @click="selectedDigitalTab = 'exclusive'"
                        >
                            专属形象
                        </div>
                        <div 
                            class="digital-tab"
                            :class="{ active: selectedDigitalTab === 'public' }"
                            @click="selectedDigitalTab = 'public'"
                        >
                            公共形象
                        </div>
                    </div>
                    <div class="search-box">
                        <select>
                            <option>全部</option>
                            <option>英文</option>
                        </select>
                        <input type="text" placeholder="请输入数字人名称">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                </div>
                
                <div class="digital-grid">
                    <!-- 上传视频按钮 -->
                    <div class="digital-upload-card">
                        <div class="upload-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                <polyline points="17 8 12 3 7 8"/>
                                <line x1="12" y1="3" x2="12" y2="15"/>
                            </svg>
                        </div>
                        <p>上传视频</p>
                    </div>
                    
                    <!-- 数字人卡片列表 -->
                    <div 
                        v-for="i in 4" 
                        :key="i" 
                        :class="['digital-card', { selected: selectedDigitalCard === i }]"
                        @click="handleDigitalCardClick(i)"
                    >
                        <div class="digital-preview"></div>
                        <div class="digital-info">
                            <span>方大帅</span>
                            <span>专属形象</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 添加声音选择弹窗 -->
    <div v-if="showVoiceModal" class="modal-overlay">
        <div class="modal-content">
            <div class="modal-header">
                <h3>选择声音</h3>
                <button class="close-btn" @click="closeModal('voice')">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="modal-body">
                <!-- 这里添加声音选择的具体内容 -->
                <p>声音选择界面</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import "@/assets/css/operation-interfaces-css/CreateVideo.css";

</style>