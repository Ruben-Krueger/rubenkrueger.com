import Footer from './Footer';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="font-bold text-xl">
          I&apos;m Ruben Krueger, a software engineer with a passion for
          building products that help people live better lives.
        </h1>
        <p className="max-w-prose text-center">
          Previously: Stanford Computer Science (B.S. &apos;21), Founding
          Engineer at Comet Healthcare (YC S21), Research Data Analyst at the
          Brain Stimulation Laboratory, and Software Engineer at Sprinter
          Health.
        </p>
      </main>
      <Footer />
    </div>
  );
}
