import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-6">
      <p className="mb-4">&copy; {new Date().getFullYear()} Rackets for Africa</p>
      
      {/* Social Media Links */}
      <nav className="mb-4">
        <div className="social-media flex justify-center space-x-6">
          <a href="https://facebook.com/Racketsforafrica" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookSquare} size="2x" className="text-white hover:text-blue-400" />
          </a>
          <a href="https://www.twitter.com/your-username" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} size="2x" className="text-white hover:text-blue-300" />
          </a>
          <a href="https://www.instagram.com/officialrackets_forafrica/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white hover:text-pink-400" />
          </a>
        </div>
      </nav>

      {/* Privacy Policy and Terms */}
      <p className="mb-2">
        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> |{' '}
        <a href="/terms-of-use" className="hover:underline">Terms of Use</a>
      </p>

      {/* Footer Note */}
      <p className="text-sm max-w-lg mx-auto">
        Rackets For Africa is committed to transparency and accountability. Learn more about our financials and impact on our website.
      </p>
    </footer>
  );
};

export default Footer;
