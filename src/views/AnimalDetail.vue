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
        <div class="animal-container">
          <ion-button @click="goBack" class="icon" size="small" slot="start" shape="round">
            <ion-icon :icon="arrowBack"/>
          </ion-button>
            <div class="animal" v-if="animal">
                <img :src="animal.photo" alt="animal.name" />
                <h2>{{ animal.name }}</h2>
                <p>{{ animal.species }}, {{ animal.sex }}</p>
                <p>{{ animal.age }}</p>
                <p>{{ animal.description }}</p>
                <p>{{ animal.status }}</p>
                <ion-button @click="toggleFavourite" class="icon" size="small" shape="round">
                  <ion-icon :icon="isFavourite ? 'heart' : 'heart-outline'" />
                </ion-button>
            </div>
        </div>
      </ion-content>

      <ion-footer>
        <ion-toolbar>
            <div class="button-container">
                <ion-button class="outline-button" fill="outline" @click="navigateToVisitForm">Visit</ion-button>
                <ion-button class="outline-button" fill="outline" @click="navigateToAdoptForm">Adopt</ion-button>
            </div>
        </ion-toolbar>
      </ion-footer>
    </ion-page>
</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAnimalsStore } from '@/stores/animalsStore';
import { useFavouritesStore } from '@/stores/favouritesStore';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { person, arrowBack } from 'ionicons/icons';
import { heartOutline, heart } from 'ionicons/icons';

const route = useRoute();
const router = useRouter();
const animalsStore = useAnimalsStore();
const favouritesStore = useFavouritesStore();

const animal = ref<any>(null);
const isFavourite = ref(false);

const getAnimal = (id: number) => {
  return animalsStore.animals.find((animal: any) => animal.animal_id === id);
};

onMounted(() => {
  const animalId = Number(route.params.id);
  animal.value = getAnimal(animalId);

  if (animal.value) {
    isFavourite.value = favouritesStore.favourites.some((fav: any) => fav.animal_id === animal.value.animal_id);
  }
});

const toggleFavourite = () => {
  if (isFavourite.value) {
    favouritesStore.removeFavourite(animal.value);
    isFavourite.value = false;
  } else {
    favouritesStore.addFavourite(animal.value);
    isFavourite.value = true;
  }
};


/*
import { ref, onMounted } from 'vue';

const animal = ref<any>(null);

onMounted(async () => {
  const id = route.params.id;

  try {
    const response = await fetch(`http://localhost:5000/api/animals/${id}`);
    if (response.ok) {
      animal.value = await response.json();
    } else {
      console.error('Error al obtener el animal:', response.statusText);
    }
  } catch (error) {
    console.error('Error de conexión:', error);
  }
});*/

const goBack = () => {
  router.back();
};

const navigateToProfile = () => {
  router.push('/profile');
};

const navigateToVisitForm = () => {
  router.push('/visit-form');
};
  
const navigateToAdoptForm = () => {
  router.push('/adopt-form');
};
</script>

<style scoped>
.animal-container {
  gap: 10px;
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 60px;
}
  
.animal {
  text-align: center;
}
  
.animal img {
  width: 30%;
  height: auto;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .animal img {
    max-width: 90%;
  }
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