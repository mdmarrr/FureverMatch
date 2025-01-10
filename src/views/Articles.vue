<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <img src="@/assets/logo.png" alt="Logo" class="logo" />
          <ion-button @click="navigateToProfile" class="icon" size="small" slot="end" shape="round">
            <ion-icon :icon="person"></ion-icon>
          </ion-button>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <div class="image-container">
          <img src="@/assets/catdog.jpg" alt="cat & dog" class="image" />
            <div class="overlay-text">
              <h1>Learn more...</h1>
            </div>
          </div>
            <div class="articles-content">
              
            </div>
      </ion-content>

      <ion-footer>
        <ion-toolbar>
            <div class="button-container">
                <ion-button class="outline-button" fill="outline" @click="navigateToAnimals">Animals</ion-button>
                <ion-button class="outline-button" fill="outline" @click="navigateToFAQ">FAQ</ion-button>
                <ion-button class="active-button" @click="navigateToArticles">Articles</ion-button>
                <ion-button class="outline-button" fill="outline" @click="navigateToContact">Shelters</ion-button>
            </div>
        </ion-toolbar>
      </ion-footer>
    </ion-page>
</template>
  
<script setup lang="ts">
import { person } from 'ionicons/icons';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToProfile = () => {
  router.push('/profile');
};

const navigateToAnimals = () => {
  router.push('/animals');
};

const navigateToFAQ = () => {
  router.push('/faq');
};

const navigateToArticles = () => {
  router.push('/articles');
};
  
const navigateToContact = () => {
  router.push('/contact');
};
</script>
  
<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

@media (max-width: 768px) {
  .button-container {
    gap: 5px;
  }
}
  
ion-button.active-button {
  --background: #1A4B41;
  --color: white;
  --border-color: #1A4B41;
}
  
ion-button:not(.active-button) {
  --background: transparent;
  --border-color: #1A4B41;
  --color: #1A4B41;
}

ion-button:hover {
  --background: #1A4B41;
  --border-color: #1A4B41;
  --color: white;
}

.articles-content {
  margin-top: 20px;
  margin-left: 20px;
  overflow-y: auto;
  height: 100%;
  max-height: 400px;
  padding-bottom: 60px;
}

.image-container {
  position: relative;
  width: 100%;
  min-height: 350px;
  margin: 0 auto;
  overflow: hidden;
}

.image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 60% 40%;
}

.overlay-text {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
}
</style>