<template>
  <ion-header>
    <ion-toolbar>
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <div class="login-container">
      <div class="form-container">
        <ion-input aria-label="Email" type="email" placeholder="Email"></ion-input>
        <ion-input aria-label="Password" type="password" placeholder="Password"></ion-input>
        <div class="button-container">
          <ion-button @click="navigateToAnimals">Log in</ion-button>
          <ion-button @click="register">Register</ion-button>
        </div>
      </div>
    </div>
  </ion-content>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const login = () => {
  console.log('Log in with:', email.value, password.value);
};

const register = () => {
  console.log('Register with:', email.value, password.value);
};

const navigateToAnimals = () => {
  router.push('/animals');
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
}

.form-container {
  width: 150px;
  text-align: center;
}

.button-container {
  margin-top: 20px;
}

</style>  