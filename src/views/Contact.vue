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
        <div class="shelters-container">
          <div class="shelter" v-for="shelter in shelters" :key="shelter.shelter_id">
            <h2>{{ shelter.name }}</h2>
            <p>{{ shelter.phone }}</p>
            <p>{{ shelter.email }}</p>
            <p>{{ shelter.address }}</p>
            <p>{{ shelter.opening_hours }}</p>
          </div>
        </div>
      </ion-content>
    </ion-page>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { person } from 'ionicons/icons';
  
const router = useRouter();

const shelters = ref<any[]>([]);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:5000/api/shelters');
    if (response.ok) {
      const data = await response.json();
      shelters.value = data;
    } else {
      console.error('Error al obtener los refugios:', response.statusText);
    }
  } catch (error) {
    console.error('Error de conexión:', error);
  }
});
</script>
  
<style scoped>
.shelters-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 20px;
}
  
.shelter {
  text-align: center;
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