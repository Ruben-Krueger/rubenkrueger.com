import { notFound } from 'next/navigation';
import Link from 'next/link';
import Footer from '../../Footer';
import { getAllPostIds, getPostData } from '../../../lib/markdown';
import { format } from 'date-fns';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const postIds = getAllPostIds();
  return postIds.map((id) => ({
    slug: id,
  }));
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = await getPostData(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-4xl">
        <article className="w-full">
          <header className="mb-8">
            <nav className="mb-6">
              <Link
                href="/blog"
                className="hover:text-gray-300 transition-colors"
              >
                ← Back to Blog
              </Link>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              {post.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <time className="text-white mb-2 sm:mb-0">
                {format(new Date(post.date), 'MMMM d, yyyy')}
              </time>
            </div>

            {post.description && (
              <p className="text-lg text-white italic">{post.description}</p>
            )}
          </header>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
