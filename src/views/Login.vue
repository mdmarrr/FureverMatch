<template>
  <ion-header>
    <ion-toolbar>
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <div class="login-container">
      <div class="form-container">
        <form @submit.prevent="register">
        <ion-item>
          <ion-label position="stacked">Name</ion-label>
          <ion-input v-model="name" type="text" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Email</ion-label>
          <ion-input v-model="email" type="email" required></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Password</ion-label>
          <ion-input v-model="password" type="password" required></ion-input>
        </ion-item>
        <ion-button expand="full" type="submit">Register</ion-button>
        </form>
      </div>
    </div>
  </ion-content>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();

const register = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value, password: password.value, name: name.value })
    });

    const data = await response.json();
    if (response.ok) {
      router.push('/animals');
    } else {
      console.error('Error registering user:', response.statusText);
    }
  } catch (error) {
    console.error('Error connecting to server:', error);
  }
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