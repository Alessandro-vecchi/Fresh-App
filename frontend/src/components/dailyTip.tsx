import Link from "next/link";

export default function Dailytip() {
 return (
  <>
   <div className="bg-gray-200 border-bottom rounded-b-2xl border-gray-400 h-24 w-full flex flex-col items-center justify-end">
    <h1 className="font-bold text-gray-900 text-3xl pb-4">Daily Tip</h1>
   </div>
   <div className="flex w-full pt-12">
    <div className=" flex-col w-48 pl-2 z-30">
     <div className="bg-gray-200 pl-2 py-2 rounded-2xl">
      Did you know you can hit today&apos;s exercise goals in just 20 minutes...?
      <br />
      Workout with me</div>
     <Link href="/daily-workout">
      <div className="bg-amber-400 mt-4 text-center rounded-2xl px-2 py-4">CLICK TO EXERCISE</div>
     </Link>
    </div>
    <div>
     <img src="https://utfs.io/f/e9822547-039a-47bd-8a05-ac881eb76277-gnruf6.png" alt="Carlotta picture" className='h-72 w-auto z-30 absolute -ml-6' />
    </div>
    <img src="https://s3-alpha-sig.figma.com/img/4252/0a62/a4c56943bde96785341933205d206e88?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ne5JppU2tfq~pis0HfveotN3x8CwbRnRXyutKtmlxTyLuN0TSN4FTZuhrO2iTT8NTj3mS-MKbDrnzcpAKciAgKKK0SIYmcwA0Yc3bScMwiUt7PHKT0wQj0xtphXd8C8DPtilq0XpPVCLa3sC-XRmdJmtWJXQMXCx5zPUyZmVbbrlcyrzZYanRIl7p2ZmjYzBxtD1uvGoSSvjdW4sbdMjM4h-yw7SU~iixwD-fFXeoTg7P5~L7KZZKG1q5fBILXNg9H0rKuA2ZQTIVcttSFU1NxGXHzAmHh-pIiiV7BTOO272Jjm-iUY0OeJ9GbVxvejxmoVWKPa0uv-Z6r82rEMOLw__" alt="Grass pattern" className="bottom-12 absolute z-10 h-64 w-96" />
   </div>
   <div className="flex-col flex py-2 px-2 mt-20 ml-3 w-72 z-40 bg-gray-200 absolute rounded-2xl">
    <h1 className="font-bold">Carlotta&apos;s tip of the day:</h1>
    <p>Laughing is good for the heart! It not only lifts your mood but also burns a small amount of calories.</p>
   </div>
  </>
 )
}