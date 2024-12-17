import Bestsellers from "../components/Bestsellers"
import Carousel from "../components/Carousel"
import images from '../data/homePageImages.json'

const Home = () => {


  return (
    <>
      <Carousel images={images} />
      <Bestsellers />
    </>
  )
}

export default Home