<template>
  <ion-header>
    <ion-toolbar>
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <div class="login-container">
        <form @submit.prevent="login">
          <div class="input-group">
            <label for="email" class="input-label">Email</label>
            <div class="input-box">
              <ion-input v-model="email" type="email" placeholder="example@example.com" class="custom-input" required ></ion-input>
            </div>
          </div>
          <div class="input-group">
            <label for="email" class="input-label">Password</label>
            <div class="input-box">
              <ion-input v-model="password" type="password" placeholder="Enter at least 8 characters" class="custom-input" required ></ion-input>
            </div>
          </div>
          <div class="button-container">
            <ion-button type="submit">Log in</ion-button>
          </div>
        </form>
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

const login = async () => {
  router.replace('/animals');
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

form {
  width: 300px;
  text-align: center;
}

.input-label {
  margin-left: 5px;
  margin-bottom: 10px;
  display: block;
}

.input-box {
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 10px;
  padding: 2px 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input-group {
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 15px;
  text-align: left;
}

.button-container {
  margin-top: 30px;
}

.custom-font {
  font-size: 20px;
}

</style>  