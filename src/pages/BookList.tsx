import Filter from '../components/Filter'
import GenerateBooks from '../components/GenerateBooks'

const BookList = () => {
  return (
    <div className='flex'>
      <Filter />
      <GenerateBooks />
    </div>
  )
}

export default BookList