<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const showPopup = ref(false);
const selectedVideo = ref(null);

const handleCreateVideo = () => {
  router.push('/dashboard/create-video');
};

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

// 视频操作方法
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
        <input placeholder="搜索作品名称">
        </input>
        <select class="filter-select">
          <option value="">全部</option>
          <option value="video">视频</option>
          <option value="image">图片</option>
        </select>
        <button class="red" @click="handleCreateVideo">
          <i class="fas fa-video"></i>
          创建视频
        </button>
      </div>
    </div>

    <div class="content">
     <div class="video-grid">

        <div class="video-item" 
             v-for="(video, index) in 4" 
             :key="index"
             @click="handleVideoClick({
               title: 'IP 到视频',
               date: '2024-11-21 15:21:39',
               duration: '00:36'
             })">
          <img alt="Video thumbnail" height="200" src="@/assets/pictures/gray.png"/>
          <div class="duration">
            <p>00:36</p>
          </div>
          <div class="details">
            <p>IP 到视频</p>
            <p>2024-11-21 15:21:39</p>
          </div>
        </div>

     </div>

    </div>

    <!-- 视频弹窗 -->
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

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  font-size: 24px;
  cursor: pointer;
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

.filter-select {
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  padding: 5px 10px;
  border-radius: 6px;
  margin-right: 10px;
}
</style>