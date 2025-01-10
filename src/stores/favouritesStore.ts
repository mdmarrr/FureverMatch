import { defineStore } from 'pinia';

export const useFavouritesStore = defineStore('favourites', {
  state: () => ({
    favourites: [] as any[],
  }),
  actions: {
    addFavourite(animal: any) {
      if (!this.favourites.some((fav: any) => fav.animal_id === animal.animal_id)) {
        this.favourites.push(animal);
        console.log('Added to favourites:', animal, 'Favourites after adding:', this.favourites);
      }
    },
    removeFavourite(animal: any) {
      this.favourites = this.favourites.filter((fav: any) => fav.animal_id !== animal.animal_id);
      console.log('Removed from favourites:', animal);
    },
  },
});