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
              <div v-for="(article, index) in articles" :key="index" class="article-item">
                <div class="article-title">
                  <h3>{{ article.title }}</h3>
                  <ion-button
                    class="icons"
                    size="small"
                    shape="round"
                    slot="end"
                    @click="toggleLink(index)"
                  >
                    <ion-icon :icon="isOpen[index] ? remove : add"></ion-icon>
                  </ion-button>
                </div>
                <div v-if="isOpen[index]" class="article-link">
                  <a :href="article.link" target="_blank" rel="noopener noreferrer">
                    {{ article.link }}
                  </a>
                </div>
              </div>
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
import { person, add, remove } from 'ionicons/icons';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const articles = ref([
  { title: 'A Veterinarian’s Guide to Senior Dog Care', link: 'https://www.greatpetcare.com/wellness/guide-to-senior-dog-care/' },
  { title: '10 Dangers of Fleas, Ticks and Mosquitoes', link: 'https://www.greatpetcare.com/parasites/dangers-of-fleas-ticks-and-mosquitoes/' },
  { title: 'How Robotic Technology Is Revolutionizing Cancer Treatment for Pets', link: 'https://www.greatpetcare.com/pet-news/robotic-technology-revolutionizing-cancer-treatment-for-pets/' },
  { title: 'Cat Wheezing: What It Sounds Like and Why It Happens', link: 'https://www.greatpetcare.com/cat-health/cat-wheezing/' },
  { title: '8 Fungal Infections in Dogs You Should Know About', link: 'https://www.greatpetcare.com/dog-health/fungal-infections-in-dogs/' },
]);

const isOpen = ref(Array(articles.value.length).fill(false));

const toggleLink = (index: number) => {
  isOpen.value[index] = !isOpen.value[index];
};

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

.article-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.article-link {
  margin-top: -10px;
  padding-left: 20px;
  font-size: 14px;
  color: #666;
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