import { LightBulbIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import FreshLogo from './freshLogo'
import { useState } from 'react'
import Link from 'next/link'


export default function Hero() {
 const [clickedOn, setClickedOn] = useState(false)
 return (
  <div className="bg-white flex h-full overflow-hidden w-full">
   <header className="absolute inset-x-0 top-0 z-50">
    <div className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
     <div className="flex items-start">
      <a href="#" className="-m-1.5 p-1.5">
       <span className="sr-only">Fresh by Bell Food Group</span>
       <FreshLogo className="h-8 w-auto" />
      </a>
     </div>
     {/* <div className="-m-1.5 p-1.5 flex flex-col items-end">
      <span className="sr-only">Your Streak</span>
      <img src='https://utfs.io/f/69447acf-2915-445e-93b5-896a7e2ccce6-umijef.png' className="h-10 w-auto" alt='Streak count' />
     </div> */}
    </div>

   </header>

   <div className="mx-auto pr-6 pb-6 pt-16 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
    <div className='w-screen h-36 flex items-center justify-center'>
     {!clickedOn ? (
      <div className="lg:mx-0 lg:flex-auto  mx-auto">
       <h1 className="max-w-lg text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Welcome back Mario!
       </h1>
       <p className="mt-3 text-lg leading-8 text-gray-600">
        Today Carlotta is feeling...
       </p>
       <div className="w-full flex flex-row relative items-center">
        <div className="w-full bg-gray-200 rounded-full h-5">
         <div
          className="bg-green-600 h-5 rounded-full"
          style={{
           width: '80%',
          }}
         ></div>
        </div>
       </div>
       <div className='flex flex-row-reverse'>
        <h1 className="max-w-lg text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl pt-2">
         Happy!
        </h1>
       </div>
      </div>
     ) : (
      <Link href='/#'>
       <div className='border border-gray-300 bg-gray-100 rounded-full gap-x-2 px-2 py-3 text-center justify-center mx-auto w-7/8 flex flex-row'>
        <QuestionMarkCircleIcon className='w-12 h-auto' />
        <div className='text-gray-900 font-bold'>Do you have a specific question? <br /> You can ask me anything!</div>
       </div>
      </Link>

     )}
    </div>
    <div className="mt-2 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
     <img src="https://utfs.io/f/e9822547-039a-47bd-8a05-ac881eb76277-gnruf6.png" alt="Carlotta picture" onClick={() => setClickedOn(!clickedOn)} className='h-72 w-auto hover:cursor-pointer mx-auto' />
    </div>
    {!!clickedOn ?
     (
      <Link href='/daily-tip'>
       <div className='w-screen flex items-center justify-center'>
        <div className='flex items-center justify-center text-center gap-x-2 border border-gray-300 bg-gray-100 rounded-full w-5/6 py-3'>
         <LightBulbIcon className='h-12 w-auto text-gray-800' />
         <div className='text-center text-gray-800 font-bold'>
          Click here to get a daily health tip
         </div>
        </div>
       </div>
      </Link>
     ) : (
      <>
       <div className='flex-col text-center '>
        <h1 className='text-gray-900 text-md font-bold '>Let&apos;s get started!</h1>
        <p>Click on me</p>
       </div>
      </>
     )}

   </div>
  </div>
 )
}
