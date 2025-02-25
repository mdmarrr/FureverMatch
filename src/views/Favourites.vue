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
      <div class="favourites-container" v-if="favouritesStore.favourites.length > 0">
        <div class="animal" v-for="animal in favouritesStore.favourites" :key="animal.animal_id">
          <img :src="animal.photo" alt="animal.photo" />
          <h2>{{ animal.name }}</h2>
          <p>{{ animal.species }}, {{ animal.sex }}</p>
          <p>{{ animal.age }}</p>
          <p>{{ animal.status }}</p>
          <ion-button @click="confirmRemove(animal)">
            Remove
          </ion-button>
        </div>
      </div>
      <div v-else>
        <p>No animals in favourites.</p>
      </div>
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <div class="button-container">
          <ion-button class="outline-button" fill="outline" @click="navigateToAnimals">Animals</ion-button>
          <ion-button class="outline-button" fill="outline" @click="navigateToFAQ">FAQ</ion-button>
          <ion-button class="outline-button" fill="outline" @click="navigateToArticles">Articles</ion-button>
          <ion-button class="outline-button" fill="outline" @click="navigateToContact">Shelters</ion-button>
        </div>
      </ion-toolbar>
    </ion-footer>

    <ion-modal v-if="isModalOpen" :is-open="isModalOpen" @didDismiss="closeModal">
      <ion-header>
        <ion-toolbar>
          <img src="@/assets/logo.png" alt="Logo" class="logo" />
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="modal-content">
          <p>Are you sure you want to remove this favourite?</p>
          <div class="button-container">
            <ion-button class="outline-button" fill="outline" @click="removeFromFavourites">YES</ion-button>
            <ion-button class="outline-button" fill="outline" @click="closeModal">NO</ion-button>
          </div>
        </div>
      </ion-content>
    </ion-modal>

    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { useFavouritesStore } from '@/stores/favouritesStore';
  import { useRouter } from 'vue-router';
  import { person, options } from 'ionicons/icons';
  import { ref } from 'vue';

  const router = useRouter();
  const favouritesStore = useFavouritesStore();

  const isModalOpen = ref(false);
  const selectedAnimal = ref(null);

  const confirmRemove = (animal: any) => {
    selectedAnimal.value = animal;
    isModalOpen.value = true;
  };

  const closeModal = () => {
    isModalOpen.value = false;
    selectedAnimal.value = null;
  };

  const removeFromFavourites = () => {
  if (selectedAnimal.value) {
    favouritesStore.removeFavourite(selectedAnimal.value);
  }
  closeModal();
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
.favourites-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 20px;
  padding-top: 10px;
  padding-bottom: 120px;
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
    max-width: 90%;
  }
}

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

.modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
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
  