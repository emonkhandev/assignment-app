import logoText from './assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div>
            <img src={logoText} alt="Dev Stack" className="h-8 object-contain" />
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">GitHub</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">
            Product
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-500">
            <li><a href="#" className="hover:text-gray-900">Home</a></li>
            <li><a href="#" className="hover:text-gray-900">Technologies</a></li>
            <li><a href="#" className="hover:text-gray-900">Projects</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">
            Company
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-500">
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            <li><a href="#" className="hover:text-gray-900">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">
            Legal
          </h4>
          <ul className="space-y-2.5 text-xs text-gray-500">
            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-100 text-xs text-gray-400">
        © 2026 Dev Stack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;