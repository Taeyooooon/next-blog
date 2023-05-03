import Image from 'next/image';
import Link from 'next/link';
import profileImage from '../../../public/images/profile.jpeg';

export default function Hero() {
  return (
    <section className='flex flex-col items-center m-auto'>
      <Image
        className=' rounded-full'
        src={profileImage}
        alt=''
        width={250}
        height={250}
        priority
      />
      <h2 className=' text-3xl font-bold mt-2'>{"Hi, I'm Taeyoon"}</h2>
      <h3 className=' text-xl font-semibold'>{'Front-end Engineer'}</h3>
      <p>{'프론트엔드 개발을 즐기는 김태윤입니다.'}</p>
      <Link href={'/contact'}>
        <button className=' px-4 py-1 mt-2 bg-blue-300 font-bold rounded-xl'>
          Contact me
        </button>
      </Link>
    </section>
  );
}
