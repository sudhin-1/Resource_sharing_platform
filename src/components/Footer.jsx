import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className=" d-flex bg-dark text-white pt-4">
      <div className="max-w-7xl mx-auto px-6 py-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-1">Re-share</h3>
            <p className="text-gray-400 text-sm">Building amazing experiences</p>
          </div>

         

          <div className="text-center flex gap-3">
            <a href="#" className="text-gray-400  transition" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400  transition ms-2" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400  transition ms-2" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400  transition ms-2" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400  transition ms-2" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-400">
            © 2025 Re-share. All rights reserved.
          </p>
          <div className="text-center flex gap-4" >
            <a href="#" className="text-gray-400 hover:text-white transition " style={{textDecoration:'none'}}>Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition ms-2" style={{textDecoration:'none'}}>Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition ms-2" style={{textDecoration:'none'}}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}