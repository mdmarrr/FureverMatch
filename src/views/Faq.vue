<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <img src="@/assets/logo.png" alt="Logo" class="logo" />
          <ion-button class="icon" size="small" slot="end" shape="round">
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
                  <h2>{{ question.title }}</h2>
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
          <router-link to="/faq">
            <ion-button
              fill="outline"
              :class="{ 'active-button': $route.path === '/faq' }"
            >
              FAQ
            </ion-button>
          </router-link>
          <router-link to="/articles">
            <ion-button
              fill="outline"
              :class="{ 'active-button': $route.path === '/articles' }"
            >
              Articles
            </ion-button>
          </router-link>
          <router-link to="/legal">
            <ion-button
              fill="outline"
              :class="{ 'active-button': $route.path === '/legal' }"
            >
              Legal
            </ion-button>
          </router-link>
        </div>
      </ion-toolbar>
      </ion-footer>
    </ion-page>
</template>
  
<script setup lang="ts">
import { person, add, remove } from 'ionicons/icons';
import { ref } from 'vue';

const questions = ref([
  { title: '¿Qué es la adopción responsable?', answer: 'La adopción responsable implica asegurarse de que el animal vaya a un hogar adecuado, con el compromiso de cuidarlo y darle un hogar seguro.' },
  { title: '¿Cuáles son los requisitos para adoptar?', answer: 'Los requisitos varían según el refugio, pero en general se requiere tener un hogar adecuado y estar dispuesto a cuidar del animal a largo plazo.' },
  { title: '¿Qué tipos de animales se pueden adoptar?', answer: 'Puedes adoptar perros, gatos y otros animales pequeños. Cada refugio tiene diferentes opciones disponibles.' },
]);

const isOpen = ref(Array(questions.value.length).fill(false));

const toggleAnswer = (index: number) => {
  isOpen.value[index] = !isOpen.value[index];
};
</script>
  
<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-right: 20px;
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
  margin-top: 20px;
  margin-left: 20px;
  overflow-y: auto;
  height: 100%;
  max-height: 400px;
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
  object-position: 70% 30%;
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