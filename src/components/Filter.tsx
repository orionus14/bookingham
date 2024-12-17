import InputField from './InputField'
import H2Text from './H2Text'
import books from '../data/books.json'
import CheckboxList from './CheckboxList'
import { Button, Slider } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, resetFilters } from '../store/filterSlice'
import { RootState } from '../store/store'
import { useLocation, useSearchParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import { MoveLeft } from 'lucide-react'

interface IFilter {
  setFilterMenu?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter: React.FC<IFilter> = ({ setFilterMenu }) => {

  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);
  const [searchParams] = useSearchParams();

  const languages = [...new Set(books.map(book => book.language))];
  const pages: string[] = ['1 - 300', '301 - 600', '600+'];

  const minPrice = Math.min(...books.map(book => book.price));
  const maxPrice = Math.max(...books.map(book => book.price));

  const location = useLocation();

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

  const handleCloseFilter = () => {
    if (setFilterMenu) {
      setFilterMenu(false);
    }
  };

  useEffect(() => {
    resetAllFilters();
  }, [location])

  useEffect(() => {
    for (const [key, value] of searchParams.entries()) {
      if (key === 'chosenLanguage') {
        handleFilterChange('chosenLanguage', [value]);
      } else if (key === 'minPrice') {
        handleFilterChange('minPrice', value);
      } else if (key === 'maxPrice') {
        handleFilterChange('maxPrice', value);
      } else if (key === 'bookName') {
        handleFilterChange('bookName', value);
      } else if (key === 'hasDiscount') {
        handleFilterChange('hasDiscount', value === 'true');
      }
    }
  }, [searchParams]);

  return (
    <div className='relative sm:w-60 w-full h-full p-4 border-r-2 sm:block'>

      <div
        className='sm:hidden block absolute right-4 top-4 cursor-pointer'
        onClick={handleCloseFilter}
      >
        <MoveLeft />
      </div>

      <h1 className="text-2xl text-center border-b-2 mb-4 p-2">Filter</h1>
      <InputField
        placeholder='Enter the book name...'
        width='w-full'
        value={filters.bookName}
        onChange={e => handleFilterChange('bookName', e.target.value)}
      />

      <div className='mt-4'>
        <CheckboxList
          categories={['At a discount']}
          name="discount"
          selectedValues={filters.hasDiscount ? ['At a discount'] : []}
          onChange={(selected) =>
            handleFilterChange('hasDiscount', selected.includes('At a discount'))
          }
        />
      </div>

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