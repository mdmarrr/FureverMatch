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
        <div class="articles-content">
          <p>Contenido relacionado con artículos.</p>
        </div>
      </ion-content>

      <ion-footer>
        <ion-toolbar>
        <div class="button-container">
          <router-link to="/faq">
            <ion-button
              fill="outline"
              :class="{ 'active-button': $route.path === '/faq' }"
            >
              FAQ
            </ion-button>
          </router-link>
          <router-link to="/articles">
            <ion-button
              fill="outline"
              :class="{ 'active-button': $route.path === '/articles' }"
            >
              Articles
            </ion-button>
          </router-link>
          <router-link to="/legal">
            <ion-button
              fill="outline"
              :class="{ 'active-button': $route.path === '/legal' }"
            >
              Legal
            </ion-button>
          </router-link>
        </div>
      </ion-toolbar>      
      </ion-footer>
    </ion-page>
</template>
  
<script setup lang="ts">
import { person } from 'ionicons/icons';
</script>
  
<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-right: 20px;
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
  
.articles-content {
  margin-top: 20px;
  margin-left: 20px;
}
</style>