"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FiInstagram, FiTwitter, FiLinkedin, FiFacebook, FiMail } from 'react-icons/fi';
import LegalModal from './Legalmodel';
import { privacyPolicy, termsOfService } from '@/components/constansts/legal';

const StandardFooter = () => {
  const [show, setShow] = useState<'privacy' | 'terms' | null>(null);
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#0e3c39] text-white/90 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* … same columns as before … */}

          {/* Company column – updated links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">KITA</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/" className="hover:text-orange-400 transition">About</Link></li>
              <li><Link href="/" className="hover:text-orange-400 transition">Contact</Link></li>
              <li>
                <button onClick={() => setShow('privacy')} className="hover:text-orange-400 transition">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => setShow('terms')} className="hover:text-orange-400 transition">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* … rest of footer … */}
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-white/60 text-xs">
          © {year} KITA. All rights reserved.
        </div>
      </footer>

      {/* Modals */}
      {show === 'privacy' && (
        <LegalModal title="Privacy Policy" content={privacyPolicy} onClose={() => setShow(null)} />
      )}
      {show === 'terms' && (
        <LegalModal title="Terms of Service" content={termsOfService} onClose={() => setShow(null)} />
      )}
    </>
  );
};

export default StandardFooter;