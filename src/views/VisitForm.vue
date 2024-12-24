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
        <form class="form-container" @submit.prevent="handleSubmit">
          <ion-button @click="goBack" class="icon" size="small" slot="start" shape="round">
            <ion-icon :icon="arrowBack"/>
          </ion-button>
          <ion-item>
            <ion-label position="floating">Name</ion-label>
            <ion-input v-model="form.name" type="text" required></ion-input>
          </ion-item>
  
          <ion-item>
            <ion-label position="floating">Email</ion-label>
            <ion-input v-model="form.email" type="email" required></ion-input>
          </ion-item>
  
          <ion-item>
            <ion-label position="floating">Phone</ion-label>
            <ion-input v-model="form.phone" type="tel" required></ion-input>
          </ion-item>
          
          <div class="button-container">
            <ion-button class="outline-button" fill="outline" type="submit">Submit</ion-button>
          </div>
        </form>
      </ion-content>
    </ion-page>
  </template>
  
<script setup lang="ts">
  import { ref } from 'vue';
  import { person, arrowBack } from 'ionicons/icons';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const form = ref({
    name: '',
    email: '',
    phone: ''
  });
  
  const handleSubmit = () => {
    console.log('Form submitted:', form.value);
  };

  const navigateToProfile = () => {
    router.push('/profile');
  };

  const goBack = () => {
  router.back();
  };
</script>
  
<style scoped>
ion-title {
  display: flex;
  justify-content: center;
}

.form-container {
  padding: 20px;
}

.button-container {
  display: flex;
  justify-content: center;
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
  