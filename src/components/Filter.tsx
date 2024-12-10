import InputField from './InputField'
import H2Text from './H2Text'
import books from '../data/books.json'
import CheckboxList from './CheckboxList'
import { Button, Slider } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, resetFilters } from '../store/filterSlice'
import { RootState } from '../store/store'

const Filter = () => {

  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);

  const languages = [...new Set(books.map(book => book.language))];
  const pages: string[] = ['1 - 300', '301 - 600', '600+'];

  const minPrice = Math.min(...books.map(book => book.price));
  const maxPrice = Math.max(...books.map(book => book.price));

  const handleFilterChange = <T extends keyof typeof filters>(
    key: T,
    value: typeof filters[T]
  ) => {
    dispatch(setFilter({ key, value }))
  }

  const resetAllFilters = () => {
    dispatch(resetFilters());
  }

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      handleFilterChange('minPrice', newValue[0].toString());
      handleFilterChange('maxPrice', newValue[1].toString());
    }
  };

  return (
    <div className='w-60 p-4 border-r-2'>
      <h1 className="text-2xl text-center border-b-2 mb-4 p-2">Filter</h1>
      <InputField
        placeholder='Enter the book name...'
        width='w-full'
        value={filters.bookName}
        onChange={e => handleFilterChange('bookName', e.target.value)}
      />

      <div>
        <H2Text text='Enter the price' />
        <div className='flex justify-between items-center'>
          <InputField
            placeholder='Min'
            width='w-1/3'
            value={filters.minPrice}
            onChange={e => handleFilterChange('minPrice', e.target.value)}
          />
          &mdash;
          <InputField
            placeholder='Max'
            width='w-1/3'
            value={filters.maxPrice}
            onChange={e => handleFilterChange('maxPrice', e.target.value)}
          />
        </div>
        <div className='mt-4'>
          <Slider
            value={[
              Number(filters.minPrice) || minPrice,
              Number(filters.maxPrice) || maxPrice,
            ]}
            onChange={handleSliderChange}
            min={minPrice}
            max={maxPrice}
            valueLabelDisplay='auto'
          />
        </div>
      </div>

      <div>
        <H2Text text='Choose the language' />
        <div>
          <CheckboxList
            categories={languages}
            name='languages'
            selectedValues={filters.chosenLanguage}
            onChange={selected => handleFilterChange('chosenLanguage', selected)}
          />
        </div>
      </div>

      <div>
        <H2Text text='Pages Amount' />
        <div>
          <CheckboxList
            categories={pages}
            name='pages'
            selectedValues={filters.pageAmount}
            onChange={selected => handleFilterChange('pageAmount', selected)}
          />
        </div>
      </div>

      <div className='flex justify-center mt-4'>
        <Button variant='contained' color='primary' onClick={resetAllFilters}>Reset Filters</Button>
      </div>

    </div>
  )
}

export default Filter