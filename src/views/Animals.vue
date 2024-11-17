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
        <div class="animals-container">
          <div class="animal" v-for="animal in animals" :key="animal.id">
            <img :src="animal.photo" alt="animal.name" />
            <p>{{ animal.name }}</p>
          </div>
        </div>
      </ion-content>

      <ion-footer>
        <ion-toolbar>
            <div class="button-container">
                <ion-button class="outline-button" fill="outline" @click="navigateToUsefulLinks">Useful Links</ion-button>
                <ion-button class="outline-button" fill="outline" @click="navigateToContact">Contact</ion-button>
            </div>
        </ion-toolbar>
    </ion-footer>
    </ion-page>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { person } from 'ionicons/icons';
  
const router = useRouter();

const animals = ref([
  { id: 1, name: 'Max', photo: 'https://placekitten.com/200/300' },
  { id: 2, name: 'Bella', photo: 'https://placekitten.com/200/301' },
  { id: 3, name: 'Charlie', photo: 'https://placekitten.com/200/302' },
  { id: 4, name: 'Daisy', photo: 'https://placekitten.com/200/303' },
]);

const navigateToUsefulLinks = () => {
  router.push('/useful-links');
};
  
const navigateToContact = () => {
  router.push('/contact');
};
</script>
  
<style scoped>
.animals-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 20px;
}
  
.animal {
  text-align: center;
}
  
.animal img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
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

.outline-button {
  --border-color: #1A4B41;
  --color: #1A4B41;
  --background: transparent;
}

.outline-button:hover {
  --color: white;
  --background: #1A4B41;
}
</style>
  