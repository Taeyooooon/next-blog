import { Metadata } from 'next';
import Hero from '../components/Hero';

export const metadata : Metadata = {
  title : "About Me",
  description : "Taeyoon 커리어"
}

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className=' bg-gray-100 shadow-lg p-8 m-8 text-center'>
        <h2 className={TITLE_CLASS}>How Am I?</h2>
        <p>프론트엔드 개발자</p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          취준
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React, Next.js <br />
          Scss, Styled-Components, Tailwind <br />
          Git, Github, Github-Actions <br />
          VSCode
        </p>
      </section>
    </>
  );
}
