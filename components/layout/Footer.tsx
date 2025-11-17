import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-blue-dark text-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-white/20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="size-6 text-primary">
                <svg className="text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1.487a1.5 1.5 0 0 1 1.06.44l7.25 7.25a1.5 1.5 0 0 1 0 2.122l-7.25 7.25a1.5 1.5 0 0 1-2.122 0L3.717 11.3a1.5 1.5 0 0 1 0-2.122l7.25-7.25a1.5 1.5 0 0 1 1.03-.44zM12 3.608L5.828 9.78l6.171 6.172 6.172-6.172L12 3.608z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold">Cardozo & Associates</h3>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">Expert legal counsel with unwavering client commitment since 2003.</p>
          </div>

          <div>
            <h4 className="text-base font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-white/80 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/practice-areas" className="text-white/80 hover:text-primary transition-colors">Practice Areas</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-white/80 hover:text-primary transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/practice-areas#corporate" className="text-white/80 hover:text-primary transition-colors">Corporate Law</Link></li>
              <li><Link href="/practice-areas#family" className="text-white/80 hover:text-primary transition-colors">Family Law</Link></li>
              <li><Link href="/practice-areas#litigation" className="text-white/80 hover:text-primary transition-colors">Litigation</Link></li>
              <li><Link href="/practice-areas#estate" className="text-white/80 hover:text-primary transition-colors">Estate Planning</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+15551234567" className="text-white/80 hover:text-primary transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@cardozolaw.com" className="text-white/80 hover:text-primary transition-colors">info@cardozolaw.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="text-sm text-white/60">© 2024 Cardozo & Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
