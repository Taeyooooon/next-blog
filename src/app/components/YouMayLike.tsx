import { getNonFeaturedPosts } from '@/service/posts';
import CarouselPosts from './MultiCarousel';
import PostCard from './PostCard';
import MultiCarousel from './MultiCarousel';

export default async function YouMayLike() {
  const posts = await getNonFeaturedPosts();

  return (
    <section className='my-4'>
      <h2 className=' font-bold text-2xl my-2'>You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
