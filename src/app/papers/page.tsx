import Footer from '../Footer';

function PaperCitation({
  title,
  authors,
  citation,
  href,
}: {
  title: string;
  authors: string;
  citation: string;
  href: string;
}) {
  return (
    <div>
      <a href={href} target="_noblank">
        <h1 className="font-bold">{title}</h1>
      </a>
      <p>{authors}</p>
      <p>{citation}</p>
    </div>
  );
}

export default function Papers() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        In a past life, I did translational psychiatry research at Stanford.
        <ol className="list-decimal pl-6">
          <li>
            <PaperCitation
              title="Real-Time Semi-Automated and Automated Voxel Placement using fMRI Targets for Repeated Acquisition Magnetic Resonance Spectroscopy"
              authors="James H. Bishop, Andrew Geoly, Naushaba Khan, Claudia Tischler, Ruben Krueger, Poorvi Keshava, Heer Amin, Laima Baltusis, Hua Wu, David Spiegel, Nolan Williams, Matthew D. Sacchet"
              citation="Journal of Neuroscience Methods, Volume 392, 2023, 109853, ISSN 0165-0270, https://doi.org/10.1016/j.jneumeth.2023.109853."
              href="https://doi.org/10.1016/j.jneumeth.2023.109853"
            />
          </li>
          <li>
            <PaperCitation
              title="Intracranial Intermittent Theta Burst Stimulation And Heart Brain Coupling"
              authors="Irakli Kaloiani, Chris Austelle, Seigo Ninomiya, Masataka Wada,  Nour Dannawi, Ruben Krueger, Lena Kozyr, John Coetzee, Cammie Rolle, Martijn Arns, Nolan Williams"
              citation="Brain Stimulation: Basic, Translational, and Clinical Research in Neuromodulation"
              href="https://doi.org/10.1016/j.brs.2024.12.760"
            />
          </li>
        </ol>
      </main>
      <Footer />
    </div>
  );
}
