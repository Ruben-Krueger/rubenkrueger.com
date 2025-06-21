import Footer from '../Footer';
import { getAllPosts } from '../../lib/markdown';
import { JSX } from 'react';
import type { BlogPost } from '../../types';

function Preview({ post }: { post: BlogPost }): JSX.Element {
  return (
    <article
      key={post.id}
      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <h2 className="text-xl font-semibold mb-2 sm:mb-0">
          <a
            href={`/blog/${post.id}`}
            className="hover:text-blue-600 transition-colors"
          >
            {post.title}
          </a>
        </h2>

        {post.date}
      </div>
      <p className="text-gray-300 mb-4">{post.description}</p>
    </article>
  );
}

const posts = getAllPosts();

export default function Blog() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-4xl">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-300">
            Thoughts, ideas, and updates from my journey.
          </p>
        </div>

        <div className="w-full space-y-8">
          {posts.map((post) => (
            <Preview key={post.id} post={post} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
