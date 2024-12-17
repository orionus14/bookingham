import H1Text from '../components/H1Text'

const About = () => {
  return (
    <div className='p-12'>
      <H1Text text='Who Are We?' />
      <div className='px-12 text-lg text-justify'>
        <p className='mt-4'>
          Welcome to <u>Bookingham</u>, your go-to destination for books in their original languages! We are a passionate team of book lovers who believe in the power of reading in its most authentic form. Our mission is to bring you an extensive collection of literature in the languages in which it was originally written, offering a deeper, more immersive reading experience.
        </p>
        <p className='mt-4'>
          Whether you're an avid reader looking to explore new cultures or a language learner eager to improve your skills, we offer a wide variety of books in different genres—fiction, non-fiction, poetry, and more—all in their original language.
        </p>
        <p className='mt-4'>
          At Bookingham, we are committed to quality and authenticity, ensuring that every book you purchase connects you with the author’s true voice. Join us in celebrating the beauty of literature in its original form.
        </p>
        <p className='text-right'>With Love,<br />Dmytro Mandriichuk</p>
        <div className='text-center text-base mt-10'>
          <span>Github: </span><a href="https://github.com/orionus14/bookingham" className='text-blue-600 '>https://github.com/orionus14/bookingham</a>
        </div>
      </div>
    </div>
  )
}

export default About