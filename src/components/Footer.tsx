import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 text-center bg-neutral-dark text-white border-t border-gray-800">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="text-2xl font-extrabold text-white tracking-tighter uppercase">JA</div>
        
        <div className="flex gap-6 mb-4">
           {/* Add social links here if needed */}
        </div>
        
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Jumel Anthony Labe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;