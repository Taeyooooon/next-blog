import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  post: Post;
};

export default function PostCard({
  post: { title, description, date, category, path },
}: Props) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'my story':
        return 'bg-green-100';
      case 'frontend':
        return 'bg-blue-100';
      case 'backend':
        return 'bg-yellow-100';
      case 'javascript':
        return 'bg-red-100';
    }
  };
  return (
    <Link href={`/posts/${path}`}>
      <article className=' rounded-md overflow-hidden shadow-md hover:shadow-xl'>
        <Image
          className='w-full'
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className='flex flex-col items-center p-4'>
          <time className='self-end text-gray-700'>{date.toString()}</time>
          <h3 className='text-lg truncate font-bold'>{title}</h3>
          <p className='w-full truncate text-center'>{description}</p>
          <span className={`text-sm rounded-lg ${getCategoryColor(category)} px-2 my-2`}>
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
