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
        <form @submit.prevent="handleSubmit">

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
  
          <ion-item>
            <ion-label position="floating">Address</ion-label>
            <ion-input v-model="form.address" type="text" required></ion-input>
          </ion-item>
  
          <ion-item>
            <ion-label>Do you have children?</ion-label>
            <ion-select v-model="form.hasChildren" required>
              <ion-select-option value="yes">Yes</ion-select-option>
              <ion-select-option value="no">No</ion-select-option>
            </ion-select>
          </ion-item>
  
          <ion-item>
            <ion-label>Do you live with other animals?</ion-label>
            <ion-select v-model="form.hasOtherAnimals" required>
              <ion-select-option value="yes">Yes</ion-select-option>
              <ion-select-option value="no">No</ion-select-option>
            </ion-select>
          </ion-item>
  
          <ion-item>
            <ion-label position="floating">How much time will you dedicate to your new companion (play, walks, training, etc.)?</ion-label>
            <ion-input v-model="form.timeCommitment" type="text" required></ion-input>
          </ion-item>
  
          <ion-item>
            <ion-label>Have you read and agree to the adoption contract?</ion-label>
            <ion-checkbox v-model="form.agreeToContract" required></ion-checkbox>
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
  import { person} from 'ionicons/icons';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const form = ref({
    name: '',
    email: '',
    phone: '',
    address: '',
    hasChildren: '',
    hasOtherAnimals: '',
    timeCommitment: '',
    agreeToContract: false
  });
  
  const handleSubmit = () => {
    console.log('Form submitted:', form.value);
  };

  const navigateToProfile = () => {
    router.replace('/profile');
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