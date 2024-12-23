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
    </ion-page>
</template>
  
<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { person } from 'ionicons/icons';
import { useRouter } from 'vue-router';

const router = useRouter();

interface Shelter {
  shelter_id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  opening_hours: string;
}

const shelters = ref<Shelter[]>([
  {
    shelter_id: 1,
    name: "Adopta Málaga",
    phone: "612345678",
    email: "contacto@adoptamalaga.com",
    address: "Calle Mármoles 7, Málaga",
    opening_hours: "9:00 - 18:00"
  },
  {
    shelter_id: 2,
    name: "Rescue Ferals",
    phone: "654321987",
    email: "contacto@rescueferals.com",
    address: "Calle Ramos 12, Valencia",
    opening_hours: "8:00 - 17:00"
  },
  {
    shelter_id: 3,
    name: "Santuario Solidario",
    phone: "698745123",
    email: "contacto@santuariosolidario.com",
    address: "Calle Virgen de la Paz 3, Madrid",
    opening_hours: "8:00 - 18:00"
  },
  {
    shelter_id: 4,
    name: "Refugio En Familia",
    phone: "687912345",
    email: "contacto@refugiofamilia.com",
    address: "Calle Escudero 43, Zaragoza",
    opening_hours: "9:00 - 17:00"
  }
]);

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


/*
import { useRouter } from 'vue-router';
  
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
*/
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