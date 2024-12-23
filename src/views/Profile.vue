<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <img src="@/assets/logo.png" alt="Logo" class="logo" />
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <div class="profile-container">
          <h2>Lucía</h2>
          <p>Email: lucia.ramirez@gmail.com</p>
  
          <ion-item button @click="goToFavorites">
            <ion-label>My Favourites</ion-label>
          </ion-item>
  
          <ion-item button @click="goToSettings">
            <ion-label>Configuration</ion-label>
          </ion-item>
  
          <ion-item button @click="goToPrivacy">
            <ion-label>Privacy</ion-label>
          </ion-item>
  
          <ion-item button @click="goToNotifications">
            <ion-label>Notifications</ion-label>
          </ion-item>
        </div>
        <div class="button-container">
          <ion-button color="danger" class="outline-button" fill="outline" @click="logout">Cerrar sesión</ion-button>
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
  import { useRouter } from 'vue-router';
  
  const router = useRouter();

  const navigateToAnimals = () => {
    router.replace('/animals');
  };

  const navigateToFAQ = () => {
    router.replace('/faq');
  };

  const navigateToArticles = () => {
    router.replace('/articles');
  };
  
  const navigateToContact = () => {
    router.replace('/contact');
  };
  
  const goToFavorites = () => {
    router.replace('/favourites');
  };
  
  const goToSettings = () => {
    router.replace('/settings');
  };
  
  const goToPrivacy = () => {
    router.replace('/privacy');
  };
  
  const goToNotifications = () => {
    router.replace('/notifications');
  };
  
  const logout = () => {
    router.replace('/login');
  };
</script>
  
<style scoped>
  .profile-container {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  ion-item {
    margin: 10px 0;
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