import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
    <div className="relative"> 
      <div className="w-full h-20 bg-emerald-800 absolute top-0 buttom-0 z-20">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">           
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
       
            </ul>        
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;