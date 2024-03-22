import { HomeIcon, ChatBubbleLeftEllipsisIcon, GlobeEuropeAfricaIcon, ArrowTrendingUpIcon, UserIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function NavBar() {
 return (
  <div className='fixed inset-x-0 bottom-0 flex justify-around w-full items-center overflow-hidden border-t-2 border-gray-200 py-2'>
   <Link href='/'>
    <HomeIcon className='h-8 w-8 text-gray-500 hover:text-gray-800' />
   </Link>
   <Link href="/forums">
    <ChatBubbleLeftEllipsisIcon className='h-8 w-8 text-gray-500 hover:text-gray-800' />
   </Link>
   <Link href="/leaderboard" passHref>
    <GlobeEuropeAfricaIcon className='h-8 w-8 text-gray-500 hover:text-gray-800' />
   </Link>
   <Link href="/habits" passHref>
    <ArrowTrendingUpIcon className='h-8 w-8 text-gray-500 hover:text-gray-800' />
   </Link>
   <Link href="#">
    <UserIcon className='h-8 w-8 text-gray-500 hover:text-gray-800' />
   </Link>
  </div>
 )
}
