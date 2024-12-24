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
        <form>
          <ion-item>
            <ion-label>Species</ion-label>
            <ion-select v-model="filters.species">
              <ion-select-option value="all">All</ion-select-option>
              <ion-select-option value="Dog">Dog</ion-select-option>
              <ion-select-option value="Cat">Cat</ion-select-option>
            </ion-select>
          </ion-item>
  
          <ion-item>
            <ion-label>Sex</ion-label>
            <ion-select v-model="filters.sex">
              <ion-select-option value="all">All</ion-select-option>
              <ion-select-option value="male">Male</ion-select-option>
              <ion-select-option value="female">Female</ion-select-option>
            </ion-select>
          </ion-item>

          <ion-item>
            <ion-label>City</ion-label>
            <ion-select v-model="filters.city">
              <ion-select-option value="all">All</ion-select-option>
              <ion-select-option value="Barcelona">Barcelona</ion-select-option>
              <ion-select-option value="Galicia">Galicia</ion-select-option>
              <ion-select-option value="Huelva">Huelva</ion-select-option>
              <ion-select-option value="Madrid">Madrid</ion-select-option>
              <ion-select-option value="Málaga">Málaga</ion-select-option>
              <ion-select-option value="Navarra">Navarra</ion-select-option>
              <ion-select-option value="Valencia">Valencia</ion-select-option>
            </ion-select>
          </ion-item>

          <ion-item>
            <ion-label>Status</ion-label>
            <ion-select v-model="filters.status">
              <ion-select-option value="all">All</ion-select-option>
              <ion-select-option value="available">Available</ion-select-option>
              <ion-select-option value="adopted">Adopted</ion-select-option>
              <ion-select-option value="fostered">Fostered</ion-select-option>
              <ion-select-option value="reserved">Reserved</ion-select-option>
            </ion-select>
          </ion-item>

          <ion-item>
            <ion-label>Keyword</ion-label>
            <ion-input v-model="filters.keyword" type="text" placeholder=" Introduce a keyword"/>
          </ion-item>

        </form>
      </ion-content>
  
      <ion-footer>
        <ion-toolbar>
            <div class="button-container">
                <ion-button @click="applyFilters">Apply</ion-button>
            </div>
        </ion-toolbar>
      </ion-footer>
    </ion-page>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { IonSelect, IonSelectOption, IonItem, IonLabel, IonRange, IonInput, IonButton } from '@ionic/vue';
import { person } from 'ionicons/icons';
  
const router = useRouter();
  
const filters = ref({
  species: 'all',
  sex: 'all',
  city: 'all',
  status: 'all',
  keyword: '',
});

const applyFilters = () => {
  router.push({
    path: '/animals',
    query: {
      species: filters.value.species,
      sex: filters.value.sex,
      city: filters.value.city,
      status: filters.value.status,
      keyword: filters.value.keyword,
    }
  });
};

const navigateToProfile = () => {
  router.push('/profile');
};
</script>
  
<style scoped>
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
</style>