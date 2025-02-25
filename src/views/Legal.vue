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
        <div class="image-container">
          <ion-button @click="goBack" class="icon back-button" size="small" slot="start" shape="round">
            <ion-icon :icon="arrowBack"/>
          </ion-button>
          <img src="@/assets/catdog.jpg" alt="cat & dog" class="image" />
            <div class="overlay-text">
              <h1>Before you commit...</h1>
            </div>
        </div>
        <div class="legal-content">
          <h2>Legal Adoption Agreement</h2>
          <p>This Adoption Contract is made and entered into by and between the undersigned adopter ("Adopter") and the shelter ("Adoption Agency"). By signing this contract, the Adopter agrees to abide by the terms and conditions outlined below regarding the adoption of any animal.</p>
          <h3>1. Sterilization Commitment</h3>
          <p>The Adopter agrees to have the animal spayed or neutered as soon as it is medically appropriate, if it has not already been sterilized.</p>
          <h3>2. Health and Veterinary Care</h3>
          <p>The Adopter commits to keeping all vaccinations and veterinary appointments up to date for the animal. The Adopter will ensure the animal's physical and emotional well-being is maintained by providing necessary care, including but not limited to regular vet check-ups, grooming, and appropriate food.</p>
          <h3>3. Training and Education</h3>
          <p>The Adopter agrees to dedicate time and effort to training and educating the animal to ensure proper behavior and integration into their home. This includes providing appropriate training, socialization, and exercise.</p>
          <h3>4. Housing and Environment</h3>
          <p>The Adopter agrees to provide the animal with a safe, clean, and comfortable living environment, suitable for the animal's needs. The Adopter will ensure that the animal is not subject to any form of abuse or neglect.</p>
          <p><u>By signing this contract, the Adopter acknowledges that they have read, understood, and agree to the terms and conditions of the adoption.</u></p>
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
import { person, arrowBack } from 'ionicons/icons';
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.back();
};

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

</script>
  
<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

@media (max-width: 768px) {
  .button-container {
    gap: 5px;
  }
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
  
.legal-content {
  margin-top: 20px;
  margin-left: 20px;
  overflow-y: auto;
  height: 100%;
  max-height: 575px;
  padding-bottom: 80px;
}

.image-container {
  position: relative;
  width: 100%;
  min-height: 350px;
  margin: 0 auto;
  overflow: hidden;
}

.image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 60% 40%;
}

.overlay-text {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;
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