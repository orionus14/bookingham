import InputField from './InputField'
import H2Text from './H2Text'
import books from '../data/books.json'
import CheckboxList from './CheckboxList'

const Filter = () => {

  const languages = [...new Set(books.map(book => book.language))];
  const pages = ['1 - 300', '301 - 600', '600+'];

  return (
    <div className='w-60 p-4 border-r-2'>
      <h1 className="text-2xl text-center border-b-2 mb-4 p-2">Filter</h1>
      <InputField placeholder='Enter the book name...' width='w-full' />

      <div>
        <H2Text text='Enter the price' />
        <div className='flex justify-between items-center'>
          <InputField placeholder='Min' width='w-1/3' />
          &mdash;
          <InputField placeholder='Max' width='w-1/3' />
        </div>
      </div>

      <div>
        <H2Text text='Choose the language' />
        <div>
          <CheckboxList categories={languages} name='languages' />
        </div>
      </div>

      <div>
        <H2Text text='Pages Amount' />
        <div>
          <CheckboxList categories={pages} name='pages' />
        </div>
      </div>

    </div>
  )
}

export default Filter