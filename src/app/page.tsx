import Image from 'next/image';
import Link from 'next/link';
import Hero from './components/Hero';

import FeaturePosts from './components/FeaturedPosts';
import YouMayLike from './components/YouMayLike';

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Server Component */}
      <FeaturePosts />
      {/* @ts-expect-error Server Component */}
      <YouMayLike />
    </>
  );
}
