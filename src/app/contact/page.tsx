import { AiFillGithub } from 'react-icons/ai';
import { SiVelog } from 'react-icons/si';
import ContactForm from '../components/ContactForm';
const LINKS = [
  {
    icon: <AiFillGithub />,
    url: 'https://github.com/Taeyooooon',
  },
  {
    icon: <SiVelog />,
    url: 'https://velog.io/@taeyooooon',
  },
];

export default function ContactPage() {
  return (
    <section className=' flex flex-col items-center'>
      <h2 className='text-3xl font-bold my-2'>Contact Me</h2>
      <p>eric8401@gmail.com</p>
      <ul className='flex gap-4 my-2'>
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target='_blank'
            rel='noreferrer'
            className='text-5xl hover:text-yellow-500  '
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className=' text-3xl font-bold my-8'>Or Send an Email</h2>
      <ContactForm />
    </section>
  );
}
