<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Furever Match</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong>Welcome to Furever Match</strong>
        <p>Find your perfect match forever!</p>
        <div class="button-container">
          <ion-button @click="navigateToLogin">Log in</ion-button>
          <ion-button @click="navigateToLogin">Register</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToLogin = () => {
  router.replace('/login');
};

</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}

.button-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

</style>
