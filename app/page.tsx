import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex min-h-[560px] flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-4"
           style={{backgroundImage: "linear-gradient(rgba(10, 35, 66, 0.85) 0%, rgba(10, 35, 66, 0.7) 100%), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070')"}}>
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="font-serif-display text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
            Cardozo & Associates
          </h1>
          <h2 className="max-w-xl text-lg font-normal leading-normal text-white/90 sm:text-xl">
            Expert legal counsel with unwavering client commitment.
          </h2>
          <p className="mt-2 text-sm font-medium text-primary uppercase tracking-wider">Free Initial Consultation</p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer"
             className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary px-6 text-base font-bold text-blue-dark transition-opacity hover:opacity-90">
            <span className="truncate">Contact on WhatsApp</span>
          </a>
          <Link href="/practice-areas"
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 border-solid border-white h-12 px-6 text-base font-bold text-white transition-colors hover:bg-white hover:text-blue-dark">
            <span className="truncate">Our Practice Areas</span>
          </Link>
        </div>
      </div>

      {/* Practice Areas Section */}
      <section className="w-full py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center">
            <h2 className="font-serif-display text-3xl font-bold leading-tight tracking-tight text-text-light dark:text-text-dark sm:text-4xl">
              Explore Our Expertise
            </h2>
            <p className="mt-4 max-w-2xl text-center text-base text-gray-600 dark:text-gray-300">
              With over 20 years of experience, we provide exceptional legal representation across multiple practice areas.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Corporate Law */}
            <div className="flex flex-col gap-4 rounded-lg border border-gray-200/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-white/5">
              <div className="text-primary text-4xl">⚖️</div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Corporate Law</h3>
                <p className="text-sm font-normal leading-normal text-gray-600 dark:text-gray-300">
                  Expert guidance for your business from formation to compliance.
                </p>
              </div>
              <Link href="/practice-areas#corporate" className="mt-2 flex items-center gap-1 text-sm font-bold text-primary hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Family Law */}
            <div className="flex flex-col gap-4 rounded-lg border border-gray-200/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-white/5">
              <div className="text-primary text-4xl">👨‍👩‍👧‍👦</div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Family Law</h3>
                <p className="text-sm font-normal leading-normal text-gray-600 dark:text-gray-300">
                  Compassionate and strategic representation in family matters.
                </p>
              </div>
              <Link href="/practice-areas#family" className="mt-2 flex items-center gap-1 text-sm font-bold text-primary hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Litigation */}
            <div className="flex flex-col gap-4 rounded-lg border border-gray-200/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-white/5">
              <div className="text-primary text-4xl">🔨</div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Litigation</h3>
                <p className="text-sm font-normal leading-normal text-gray-600 dark:text-gray-300">
                  Assertive advocacy in complex commercial and civil disputes.
                </p>
              </div>
              <Link href="/practice-areas#litigation" className="mt-2 flex items-center gap-1 text-sm font-bold text-primary hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 sm:py-24 bg-white dark:bg-background-dark/80">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-serif-display text-3xl font-bold leading-tight tracking-tight text-text-light dark:text-text-dark sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              We are proud to have earned the trust of our clients.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="relative flex flex-col justify-between rounded-lg border border-gray-200/80 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                "Cardozo & Associates provided exceptional counsel for my business. Their professionalism and attention to detail were second to none."
              </p>
              <div className="pt-6 border-t border-solid border-primary/20">
                <p className="font-bold text-text-light dark:text-text-dark">J. Rodriguez</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Corporate Client</p>
              </div>
            </div>

            <div className="relative flex flex-col justify-between rounded-lg border border-gray-200/80 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                "Navigating a difficult family matter was made easier with their compassionate and knowledgeable team."
              </p>
              <div className="pt-6 border-t border-solid border-primary/20">
                <p className="font-bold text-text-light dark:text-text-dark">S. Chen</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Family Law Client</p>
              </div>
            </div>

            <div className="relative flex flex-col justify-between rounded-lg border border-gray-200/80 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                "The litigation team is formidable. Their strategic approach delivered results beyond my expectations."
              </p>
              <div className="pt-6 border-t border-solid border-primary/20">
                <p className="font-bold text-text-light dark:text-text-dark">M. Williams</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Litigation Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-blue-dark text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif-display text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-white/90 mb-8">Schedule your free consultation today. No obligation, no upfront fees.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-lg h-12 bg-primary px-8 text-base font-bold text-blue-dark transition-opacity hover:opacity-90">
              Schedule Consultation
            </Link>
            <a href="tel:+15551234567" className="inline-flex items-center gap-2 justify-center rounded-lg border-2 border-solid border-white h-12 px-8 text-base font-bold text-white transition-colors hover:bg-white hover:text-blue-dark">
              <span>(555) 123-4567</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
