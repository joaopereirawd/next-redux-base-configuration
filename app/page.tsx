'use client';

import Header from './components/header';
import { useDispatch } from 'react-redux'
import { changeString } from './store/slice'

export default function Home() {
  const dispatch = useDispatch();

  return (
    <main>
      <Header></Header>

      <div className='flex justify-center'>
        <button
          className='p-2 text-white mt-20 boreder border-solid bordertext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          onClick={() => dispatch(changeString('My New String'))}
        >
          <span>{'Click here to change redux status'}</span>
        </button>
      </div>
    </main>
  )
}
