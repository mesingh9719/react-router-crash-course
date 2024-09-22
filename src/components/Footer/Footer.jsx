import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">&copy; 2024 Your Company Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;