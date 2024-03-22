import Link from "next/link";

export default function DailyWorkout() {
 return (
  <>
   <div className="bg-gray-200 border-bottom rounded-b-2xl border-gray-400 h-24 w-full flex flex-col items-center justify-end">
    <h1 className="font-bold text-gray-900 text-3xl pb-4">Daily Workout</h1>
   </div>
   <div className="flex flex-col gap-y-1">
    <h1 className="font-bold text-xl text-center pt-2">Follow this workout to reach your goals and keep the momentum!</h1>
    <div className="bg-amber-400 mt-2 text-center font-bold rounded-lg w-3/4 mx-auto py-2">10x Squats - x3 reps</div>
    <div className="bg-amber-400 text-center font-bold rounded-lg w-3/4 mx-auto py-2">30s Wall Sit - x3 reps</div>
    <div className="bg-amber-400 text-center font-bold rounded-lg w-3/4 mx-auto py-2">10 minute walk</div>
    <img src="https://utfs.io/f/7e75013f-2d29-473c-aa44-0d6801b0cd51-wjdkh3.png" alt="Carlotta picture" className='h-48 w-auto z-30 absolute ml-48 mt-56' />
    <img src="https://s3-alpha-sig.figma.com/img/4252/0a62/a4c56943bde96785341933205d206e88?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ne5JppU2tfq~pis0HfveotN3x8CwbRnRXyutKtmlxTyLuN0TSN4FTZuhrO2iTT8NTj3mS-MKbDrnzcpAKciAgKKK0SIYmcwA0Yc3bScMwiUt7PHKT0wQj0xtphXd8C8DPtilq0XpPVCLa3sC-XRmdJmtWJXQMXCx5zPUyZmVbbrlcyrzZYanRIl7p2ZmjYzBxtD1uvGoSSvjdW4sbdMjM4h-yw7SU~iixwD-fFXeoTg7P5~L7KZZKG1q5fBILXNg9H0rKuA2ZQTIVcttSFU1NxGXHzAmHh-pIiiV7BTOO272Jjm-iUY0OeJ9GbVxvejxmoVWKPa0uv-Z6r82rEMOLw__" alt="Grass pattern" className="bottom-12 absolute z-10 h-56 w-96" />
   </div>
   <Link href="/">
    <div className="bg-amber-400 text-center font-bold rounded-lg w-3/4 ml-10 py-2 mt-52 absolute z-30">I&apos;M DONE!</div>
   </Link>
  </>
 )
}