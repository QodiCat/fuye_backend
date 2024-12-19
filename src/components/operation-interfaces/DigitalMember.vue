<script setup>
import { ref } from 'vue';

// 控制视频弹窗显示状态
const showPopup = ref(false);
const selectedVideo = ref(null);

// 控制定制数字人弹窗显示状态
const showCustomizePopup = ref(false);

// 处理视频点击事件
const handleVideoClick = (video) => {
  selectedVideo.value = video;
  showPopup.value = true;
};

// 关闭视频弹窗
const closePopup = () => {
  showPopup.value = false;
  selectedVideo.value = null;
};

// 处理定制数字人按钮点击
const handleCustomizeClick = () => {
  showCustomizePopup.value = true;
};

// 关闭定制数字人弹窗
const closeCustomizePopup = () => {
  showCustomizePopup.value = false;
};

// 添加视频操作方法
const handleEdit = () => {
  // 处理编辑逻辑
};

const handleDelete = () => {
  // 处理删除逻辑
};

const handleDownload = () => {
  // 处理下载逻辑
};
</script>

<template>
  <div class="my-creation">
    <div class="header">
      <div>
        <input placeholder="搜索数字人名称">
        </input>
        <button class="red" @click="handleCustomizeClick">
          <i class="fas fa-video"></i>
          定制数字人
        </button>
      </div>
    </div>

    <div class="content">
     <div class="video-grid">

        <div class="video-item" 
             v-for="(video, index) in 4" 
             :key="index"
             @click="handleVideoClick({
               title: '方大帅-办公室',
               date: '2024-11-21 15:21:39',
               duration: '00:36'
             })">
          <img alt="Video thumbnail" height="200" src="@/assets/pictures/gray.png"/>
          <div class="duration">
            <p>00:36</p>
          </div>
          <div class="details">
            <p>方大帅-办公室</p>
            <p>2024-11-21 15:21:39</p>
          </div>
        </div>

     </div>

    </div>

    <!-- 弹窗组件 -->
    <div class="popup video-popup" v-if="showPopup" @click.self="closePopup">
      <div class="video-popup-content">
        <button class="close-btn" @click="closePopup">×</button>
        <div class="video-preview">
          <video controls>
            <source src="" type="video/mp4">
            您的浏览器不支持视频播放
          </video>
        </div>
        <div class="video-info">
          <div class="info-header">
            <h3>{{ selectedVideo?.title }}</h3>
            <span class="duration">{{ selectedVideo?.duration }}</span>
          </div>
          <p class="date">创建时间：{{ selectedVideo?.date }}</p>
          <div class="action-buttons">
            <button class="action-btn edit" @click="handleEdit">
              <i class="fas fa-edit"></i>
              编辑
            </button>
            <button class="action-btn download" @click="handleDownload">
              <i class="fas fa-download"></i>
              下载
            </button>
            <button class="action-btn delete" @click="handleDelete">
              <i class="fas fa-trash"></i>
              删除
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 定制数字人弹窗 -->
    <div class="popup customize-popup" v-if="showCustomizePopup">
      <div class="customize-content">
        <button class="close-btn" @click="closeCustomizePopup">×</button>
        <h2>创建形象和声音</h2>
        <p>形象名称<input type="text" placeholder="给讲解视频的形象起个名字吧"></p>
        
        <div class="customize-main">
          <!-- 左侧上传区域 -->
          <div class="upload-section">
            <div class="upload-area">
              <i class="fas fa-cloud-upload-alt"></i>
              <span class="upload-tip">上传原始视频</span>
              <input type="file" accept="video/mp4" class="file-input">
            </div>
          </div>

          <!-- 右侧标准实例 -->
          <div class="example-section">
            <h3>标准实例</h3>
            <div class="example-img">
                <img src="@/assets/pictures/gray.png" alt="标准实例">
                <img src="@/assets/pictures/gray.png" alt="标准实例">
            </div>
            <div style="margin: 10px 0 20px 0;">
                <p>1.视频时长为<span>30秒到5分钟</span>；</p>
                <p>2.视频中只能出现<span>同一个人脸</span>；</p>
                <p>3.人物五官清晰，<span>面部无遮挡</span>，避免物品，麦克风，手等遮挡嘴巴、人脸、脖子；</p>
                <p>4.为保障效果，头部避免过度倾斜或倾向</p>
                <p>5.视频格式为 MP4/MOV ，且分辨率不高于4K</p>
            </div>
            <h3>错误实例</h3>
            <div class="error-eg">
                <div class="details">
                    <img src="@/assets/pictures/gray.png" alt="错误实例">
                    <p>多张人脸</p>
                </div>

                <div class="details">
                    <img src="@/assets/pictures/gray.png" alt="错误实例">
                    <p>面部过大</p>
                </div>

                <div class="details">
                    <img src="@/assets/pictures/gray.png" alt="错误实例">
                    <p>未检测到人脸</p>
                </div>

                <div class="details">
                    <img src="@/assets/pictures/gray.png" alt="错误实例">
                    <p>五官遮挡</p>
                </div>
            </div>
          </div>
        </div>

        <!-- 底部提示区域 -->
        <div class="bottom-section">
          <div class="warm-tips">
            <h4>温馨提示：<span>（非新用户）本次定制会同步克隆您的形象和声音</span></h4>
          </div>
          
          <div class="agreement">
            <label>
              <input type="checkbox">
              我已阅读并同意<a href="#">《数字人使用协议》</a>
            </label>
          </div>
          <button class="submit-btn" disabled>开始创建</button>
        </div>
      </div>
    </div>

    </div>

</template>

<style scoped>
@import "@/assets/css/operation-interfaces-css/MyCreation.css";

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  width: 80%;
  max-width: 600px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 24px;
  cursor: pointer;
}

.popup-video {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popup-video img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}

.popup-details {
  margin-top: 15px;
  text-align: center;
}

.popup-details h3 {
  margin: 0 0 10px 0;
}

.customize-popup .customize-content {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  position: relative;
  width: 90%;
  max-width: 1200px;
}

.customize-content h2 {
  text-align: left;
  margin-bottom: 10px;
  color: #333;
  font-size: 24px;
}

.customize-content p {
text-align: left;
margin:0 30px 0 10px;
color: #333;
font-size: 14px;
}

.customize-content input {
  padding: 8px 12px;
  margin-left: 1%;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  background-color: #f5f5f5;
}

.customize-main {
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
}

.upload-section, .example-section {
  flex: 1;
  margin-top: 15px;
}

.upload-section h3, .example-section h3 {
  margin-bottom: 15px;
  color: #333;
  font-size: 18px;
}

.upload-area {
  border: 2px dashed #ddd;
  border-radius: 8px;
  padding: 40px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #edf1f5;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.upload-area:hover {
  border-color: #477cd6;
}

.upload-area i {
  font-size: 40px;
  color: #666;
  margin-bottom: 10px;
}

.upload-tip {
  display: block;
  color: #000;
  font-size: 20px;
  margin: 0;
  text-align: center;
}

.file-input {
  display: none;
}

.example-section {
  margin-top: 15px;
}

.example-section span {
    color: #789ce1;
    font-size: 14px;
}

.example-img {
  margin-top: 15px;
}

.error-eg {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
}

.error-eg .details {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 10px;
  align-items: center;
}

.error-eg .details p {
  margin: 0;
  font-size: 12px;
  color: #666;
}

.error-eg img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}
.example-img img {
  width: 50px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
}

.bottom-section {
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.warm-tips h4 {
  color: #f39800;
  margin-bottom: 10px;
}

.warm-tips span {
  color: #000;
}

.warm-tips ul {
  padding-left: 20px;
  color: #000;
}

.warm-tips li {
  margin-bottom: 5px;
}

.agreement {
  margin: 20px 0;
  color: #666;
}

.agreement a {
  color: #5f73c5;
  text-decoration: none;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.submit-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.submit-btn:not(:disabled):hover {
  background-color: #c0392b;
}

.video-popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  position: relative;
  width: 90%;
  max-width: 800px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.video-preview {
  width: 100%;
  margin-bottom: 20px;
}

.video-preview video {
  width: 100%;
  border-radius: 8px;
  background-color: #f5f5f5;
}

.video-info {
  padding: 0 10px;
}

.info-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.info-header h3 {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.duration {
  color: #666;
  font-size: 14px;
}

.date {
  color: #888;
  font-size: 14px;
  margin-bottom: 20px;
}

.action-buttons {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.action-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.action-btn i {
  font-size: 14px;
}

.edit {
  background-color: #3498db;
  color: white;
}

.edit:hover {
  background-color: #2980b9;
}

.download {
  background-color: #2ecc71;
  color: white;
}

.download:hover {
  background-color: #27ae60;
}

.delete {
  background-color: #e74c3c;
  color: white;
}

.delete:hover {
  background-color: #c0392b;
}
</style>