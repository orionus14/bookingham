import Filter from '../components/Filter'
import GenerateBooks from '../components/GenerateBooks'
import { Provider } from 'react-redux';
import store from '../store/store';

const BookList = () => {
  return (
    <Provider store={store}>
      <div className='flex'>
        <Filter />
        <GenerateBooks />
      </div>
    </Provider>
  )
}

export default BookList