// stores/animalsStore.ts
import { defineStore } from 'pinia';

interface Animal {
    animal_id: number;
    name: string;
    species: string;
    sex: string;
    age: string;
    city: string;
    status: string;
    description: string;
    photo: string;
}

export const useAnimalsStore = defineStore('animals', {
  state: () => ({
    animals: [
      {
        animal_id: 1,
        name: "Canela",
        species: "Dog",
        sex: "female",
        age: "4 years old",
        city: "Málaga",
        status: "Available",
        description: "Canela is a gentle poddle used to living with kids and cats. She loves attention, her family moved last year and they could not bring her with them, she is now waiting for her forever home",
        photo: "https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Canela.jpg?alt=media&token=4cf7caed-35b4-4996-b737-65d8491f8a69"
      },
      {
        animal_id: 2,
        name: "Atena",
        species: "Cat",
        sex: "female",
        age: "3 years old",
        city: "Barcelona",
        status: "Adopted",
        description: "Atena is such a loving cat, she was rescued last year from a cat colony and is now enjoying life with her forever family.",
        photo: "https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Atena.jpg?alt=media&token=439a296e-5e8b-422d-ae1d-9de60ef46cac"
      },
      {
        animal_id: 3,
        name: "Beba",
        species: "Dog",
        sex: "female",
        age: "2 years old",
        city: "Madrid",
        status: "Available",
        description: "Beba is a really active dog, she needs an adventurous family that can take her on long walks or even hikes. Overall, she is a really energetic dog, but she loves a good cuddle and attention",
        photo: "https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Beba.jpg?alt=media&token=b7034913-5a27-4df9-9f2e-8581721ee31c"
      },
      {
        animal_id: 4,
        name: "Bimba",
        species: "Dog",
        sex: "female",
        age: "2 years old",
        city: "Granada",
        status: "Available",
        description: "",
        photo: "https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Bimba.jpg?alt=media&token=608a1f4d-1d50-4743-900f-67cf73e9a087"
      },
      {
        animal_id: 5,
        name: "Leo",
        species: "Dog",
        sex: "male",
        age: "2 years old",
        city: "Valencia",
        status: "Fostered",
        description: "",
        photo: "https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Leo.jpg?alt=media&token=851f113f-569f-4a2d-871a-3a8097d5e092"
      },
      {
        animal_id: 6,
        name: "Coco",
        species: "Dog",
        sex: "male",
        age: "6 months old",
        city: "Madrid",
        status: "Available",
        description: "",
        photo: "https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Coco.jpg?alt=media&token=787f3e50-f86d-4fbb-8c18-6a78a2c2ccc3"
      },
      {
        animal_id: 7,
        name: "Luna",
        species: "Cat",
        sex: "female",
        age: "2 years old",
        city: "Málaga",
        status: "Available",
        description: "",
        photo: "https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Luna.jpg?alt=media&token=0d81c799-dc7b-4530-8bee-e935abe635d7"
      },
      {
        animal_id: 8,
        name: "Mia",
        species: "Cat",
        sex: "female",
        age: "6 months old",
        city: "Huelva",
        status: "Available",
        description: "",
        photo: "https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Mia.jpg?alt=media&token=210f0498-1b46-46ee-bf80-89bc7ab2ae4d"
      },
      {
        animal_id: 9,
        name: "Rocky",
        species: "Dog",
        sex: "male",
        age: "2 years old",
        city: "Galicia",
        status: "Available",
        description: "",
        photo: "https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Rocky.jpg?alt=media&token=5a40418c-d5a5-4440-a2a9-1f8affca3f91"
      },
      {
        animal_id: 10,
        name: "Noa",
        species: "Cat",
        sex: "male",
        age: "6 years old",
        city: "Navarra",
        status: "Fostered",
        description: "Noa is a really gentle and loving cat, she was rescued last year and is now being fostered in a house with another cat. She has never lived with other dogs, but she seems to get along just fine with kids and other cats.",
        photo: "https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Noa.jpg?alt=media&token=c55b1123-25b2-435e-ae89-13489d91cc66"
      },
    ]
  }),
  actions: {
    getAnimalById(id: number) {
        return this.animals.find(animal => animal.animal_id === id);
    },
    getFilteredAnimals(filters: { species: string; sex: string; city: string; status: string; keyword: string }) {
      return this.animals.filter(animal => {
        return (
          (filters.species === 'all' || animal.species.toLowerCase() === filters.species.toLowerCase()) &&
          (filters.sex === 'all' || animal.sex.toLowerCase() === filters.sex.toLowerCase()) &&
          (filters.city === 'all' || animal.city.toLowerCase() === filters.city.toLowerCase()) &&
          (filters.status === 'all' || animal.status.toLowerCase() === filters.status.toLowerCase()) &&
          (filters.keyword.trim() === '' || animal.name.toLowerCase().includes(filters.keyword.toLowerCase()) || (animal.description && animal.description.toLowerCase().includes(filters.keyword.toLowerCase())))
        );
      });
    }
  }
});