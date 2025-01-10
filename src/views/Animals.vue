<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <img src="@/assets/logo.png" alt="Logo" class="logo" />
          <ion-button @click="navigateToProfile" class="icon" size="small" slot="end" shape="round">
            <ion-icon :icon="person"/>
          </ion-button>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-toolbar class="toolbar-icons">
          <ion-button size="large" slot="end" fill="clear" shape="round" @click="openFilters">
              <ion-icon :icon="options" slot="icon-only" style="font-size: 25px;" />
          </ion-button>
          <ion-button size="large" slot="end" fill="clear" shape="round" @click="goToFavourites">
              <ion-icon :icon="heart" slot="icon-only" style="font-size: 25px;" />
          </ion-button>
        </ion-toolbar>
        <div class="animals-container">
          <div class="animal" v-for="animal in filteredAnimals" :key="animal.animal_id">
            <router-link :to="`/animals/${animal.animal_id}`">
              <img :src="animal.photo" alt="animal.photo" />
            </router-link>
            <h2>{{ animal.name }}</h2>
            <p>{{ animal.species}}, {{ animal.sex }}</p>
            <p>{{ animal.age }}</p>
            <p>{{ animal.city }}</p>
            <p>{{ animal.status }}</p>
          </div>
        </div>
      </ion-content>

      <ion-footer>
        <ion-toolbar>
            <div class="button-container">
                <ion-button class="active-button" @click="navigateToAnimals">Animals</ion-button>
                <ion-button class="outline-button" fill="outline" @click="navigateToFAQ">FAQ</ion-button>
                <ion-button class="outline-button" fill="outline" @click="navigateToArticles">Articles</ion-button>
                <ion-button class="outline-button" fill="outline" @click="navigateToContact">Shelters</ion-button>
            </div>
        </ion-toolbar>
      </ion-footer>
    </ion-page>
</template>
  
<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAnimalsStore } from '@/stores/animalsStore';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { person, options, heart } from 'ionicons/icons';

const router = useRouter();
const animalsStore = useAnimalsStore();

const filters = ref({
  species: 'all',
  sex: 'all',
  status: 'all',
  keyword: ''
});

const filteredAnimals = ref<any[]>([]);

const applyFilters = () => {
  filteredAnimals.value = animalsStore.getFilteredAnimals(filters.value);
};

onMounted(() => {
  const queryParams = new URLSearchParams(window.location.search);

  filters.value.species = (Array.isArray(queryParams.get('species')) ? queryParams.get('species') : queryParams.get('species')) ?? 'all';
  filters.value.sex = (Array.isArray(queryParams.get('sex')) ? queryParams.get('sex') : queryParams.get('sex')) ?? 'all';
  filters.value.status = (Array.isArray(queryParams.get('status')) ? queryParams.get('status') : queryParams.get('status')) ?? 'all';
  filters.value.keyword = queryParams.get('keyword') ?? '';

  applyFilters();
});

const openFilters = () => {
  router.push('/filters');
};

const goToFavourites = () => {
    router.push('/favourites');
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
.animals-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 60px;
}
  
.animal {
  text-align: center;
}
  
.animal img {
  width: 80%;
  height: auto;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .animal img {
    width: 95%;
    max-width: none;
  }
}

.toolbar-icons {
  padding-top: 10px;
  padding-right: 20px;
  display: flex;
}

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
