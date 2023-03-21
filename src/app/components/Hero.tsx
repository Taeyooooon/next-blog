import Image from 'next/image';
import Link from 'next/link';
import ProfileImage from '/public/images/profile.jpeg';

export default function Hero() {
  return (
    <section className='flex flex-col items-center m-auto'>
      <Image className=' rounded-full' src={ProfileImage} alt='' width={250} height={250} priority />
      <h2 className=' text-3xl font-bold mt-2'>{"Hi, I'm Taeyoon"}</h2>
      <h3 className=' text-xl font-semibold'>{'Front-end Engineer'}</h3>
      <p>{'ㅎㅇㅎㅇㅎㅇㅎㅇ'}</p>
      <Link href={'/contact'}>
        <button className=' px-4 py-1 mt-2 bg-yellow-500 font-bold rounded-xl'>Contact me</button>
      </Link>
    </section>
  );
}
