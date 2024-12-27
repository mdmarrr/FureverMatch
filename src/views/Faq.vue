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
              <h1>In case you were wondering...</h1>
            </div>
          </div>
            <div class="faq-content">
              <div v-for="(question, index) in questions" :key="index" class="faq-item">
                <div class="faq-question">
                  <h3>{{ question.title }}</h3>
                  <ion-button
                    class="icons"
                    size="small"
                    shape="round"
                    slot="end"
                    @click="toggleAnswer(index)"
                  >
                    <ion-icon :icon="isOpen[index] ? remove : add"></ion-icon>
                  </ion-button>
                </div>
                <div v-if="isOpen[index]" class="faq-answer">
                  <p>{{ question.answer }}</p>
                </div>
              </div>
            </div>
      </ion-content>

      <ion-footer>
        <ion-toolbar>
            <div class="button-container">
                <ion-button class="outline-button" fill="outline" @click="navigateToAnimals">Animals</ion-button>
                <ion-button class="active-button" @click="navigateToFAQ">FAQ</ion-button>
                <ion-button class="outline-button" fill="outline" @click="navigateToArticles">Articles</ion-button>
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

const questions = ref([
  { title: 'Why adopt instead of purchase?', answer: 'Nowadays there are millions of animals waiting for their forever home, adoption is the most responsible option. We are sure you will find a match for you in no time!' },
  { title: 'Can I send an adoption form without visiting first?', answer: 'We believe meeting the animals before adopting is a crucial step. If you send an adoption form before visiting, the shelter will contact you to schedule a visit first.' },
]);

const isOpen = ref(Array(questions.value.length).fill(false));

const toggleAnswer = (index: number) => {
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
    gap: 5px;  /* Reducir el espaciado entre los botones en la versión móvil */
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
  
.faq-content {
  overflow-y: auto;
  height: 100%;
  max-height: 400px;
  padding: 20px;
  padding-bottom: 60px;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-answer {
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