<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <img src="@/assets/logo.png" alt="Logo" class="logo" />
          <ion-button class="icon" size="small" slot="end" shape="round">
            <ion-icon :icon="person"/>
          </ion-button>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <div class="animal-container">
            <div class="animal" v-if="animal">
                <img :src="animal.photo" alt="animal.name" />
                <h2>{{ animal.name }}</h2>
                <p>{{ animal.species }}, {{ animal.sex }}</p>
                <p>{{ animal.age }}</p>
                <p>{{ animal.description }}</p>
                <p>{{ animal.status }}</p>
            </div>
        </div>
      </ion-content>

      <ion-footer>
        <ion-toolbar>
            <div class="button-container">
                <ion-button class="outline-button" fill="outline" @click="navigateToUsefulLinks">Useful Links</ion-button>
                <ion-button class="outline-button" fill="outline" @click="navigateToContact">Shelters</ion-button>
            </div>
        </ion-toolbar>
      </ion-footer>
    </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { person} from 'ionicons/icons';

const router = useRouter();
const route = useRoute();
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
});

const navigateToUsefulLinks = () => {
  router.push('/useful-links');
};
  
const navigateToContact = () => {
  router.push('/contact');
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