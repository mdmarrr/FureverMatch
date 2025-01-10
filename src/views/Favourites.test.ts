import { render, screen, fireEvent, waitFor } from '@testing-library/vue';
import AnimalDetail from '@/views/AnimalDetail.vue';
import { vi } from 'vitest';

vi.mock('vue-router', () => ({
  useRoute: vi.fn(() => ({
    params: { id: '1' }
  })),
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    back: vi.fn()
  }))
}));

const mockAddFavourite = vi.fn();
const mockRemoveFavourite = vi.fn();

vi.mock('@/stores/favouritesStore', () => ({
  useFavouritesStore: vi.fn(() => ({
    favourites: [],
    addFavourite: mockAddFavourite,
    removeFavourite: mockRemoveFavourite
  }))
}));

const mockGetAnimalById = vi.fn((id: number) => ({
  animal_id: 1,
  name: 'Canela',
  species: 'Dog',
  sex: 'Female',
  age: '4 years old',
  city: 'Málaga',
  status: 'Available',
  description: 'Canela is a gentle poddle used to living with kids and cats. She loves attention, her family moved last year and they could not bring her with them, she is now waiting for her forever home',
  photo: 'https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Canela.jpg?alt=media&token=4cf7caed-35b4-4996-b737-65d8491f8a69'
}));

vi.mock('@/stores/animalsStore', () => ({
  useAnimalsStore: vi.fn(() => ({
    animals: [
      {
        animal_id: 1,
        name: 'Canela',
        species: 'Dog',
        sex: 'Female',
        age: '4 years old',
        city: 'Málaga',
        status: 'Available',
        description: 'Canela is a gentle poddle used to living with kids and cats. She loves attention, her family moved last year and they could not bring her with them, she is now waiting for her forever home',
        photo: 'https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Canela.jpg?alt=media&token=4cf7caed-35b4-4996-b737-65d8491f8a69'
      }
    ],
    getAnimalById: mockGetAnimalById
  }))
}));

describe('AnimalDetail.vue', () => {
  it('Adds an animal to the favourites list', async () => {
    render(AnimalDetail, {
      props: {
        animal: {
          animal_id: 1,
          name: 'Canela',
          species: 'Dog',
          sex: 'Female',
          age: '4 years old',
          city: 'Málaga',
          status: 'Available',
          description: 'Canela is a gentle poddle used to living with kids and cats. She loves attention, her family moved last year and they could not bring her with them, she is now waiting for her forever home',
          photo: 'https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Canela.jpg?alt=media&token=4cf7caed-35b4-4996-b737-65d8491f8a69'
        }
      }
    });

    await waitFor(() => screen.getByTestId('favourite-button'));

    const favouriteButton = screen.getByTestId('favourite-button');

    await fireEvent.click(favouriteButton);

    expect(mockAddFavourite).toHaveBeenCalledWith({
      animal_id: 1,
      name: 'Canela',
      species: 'Dog',
      sex: 'Female',
      age: '4 years old',
      city: 'Málaga',
      status: 'Available',
      description: 'Canela is a gentle poddle used to living with kids and cats. She loves attention, her family moved last year and they could not bring her with them, she is now waiting for her forever home',
      photo: 'https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Canela.jpg?alt=media&token=4cf7caed-35b4-4996-b737-65d8491f8a69'
    });

    await fireEvent.click(favouriteButton);

    expect(mockRemoveFavourite).toHaveBeenCalledWith({
      animal_id: 1,
      name: 'Canela',
      species: 'Dog',
      sex: 'Female',
      age: '4 years old',
      city: 'Málaga',
      status: 'Available',
      description: 'Canela is a gentle poddle used to living with kids and cats. She loves attention, her family moved last year and they could not bring her with them, she is now waiting for her forever home',
      photo: 'https://firebasestorage.googleapis.com/v0/b/furevermatch-d84bd.firebasestorage.app/o/Canela.jpg?alt=media&token=4cf7caed-35b4-4996-b737-65d8491f8a69'
    });
  });
});