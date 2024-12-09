import Bestsellers from "../components/Bestsellers"
import Carousel from "../components/Carousel"

const images = [
  '/carousel/a-Dolls-house.jpg',
  '/carousel/a-la-recherche-du-temps-perdu.jpg',
  '/carousel/absalom-absalom.jpg',
  '/carousel/gargantua-and-pantagruel.jpg',
  '/carousel/great-expectations.jpg',
  '/carousel/gullivers-travels.jpg',
];

const Home = () => {
  return (
    <>
      <Carousel images={images} />
      <Bestsellers />
    </>
  )
}

export default Home