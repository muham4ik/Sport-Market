"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/assets/icons/logo.svg';
import Tel from '../../../public/assets/icons/phone.svg';
import Mail from '../../../public/assets/icons/mail.svg';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.position = 'fixed';
      document.body.style.top = '0';
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.bottom = '0';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.bottom = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.bottom = '';
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-[#1F1D14] w-full sticky top-0 z-[99999]">
      <div className="container">
        <nav className="navbar flex items-center justify-between py-[10px] md:py-[20px]">
          <Link href="#" className="flex items-center gap-[11px] mr-[53px]">
            <Image src={Logo} width={"62px"} height={"54px"} alt="logo" />
            <div className="flex flex-col items-start text-2xl font-semibold text-white">
              <p>Sport</p>
              <p>Market</p>
            </div>
          </Link>
          <ul className="hidden md:flex items-center gap-[30px] mr-[224.5px]">
            <Link href="#" className="text-[16px] font-normal leading-normal text-white hover:text-gray-400 transition-colors duration-300">Продукты</Link>
            <Link href="#" className="text-[16px] font-normal leading-normal text-white hover:text-gray-400 transition-colors duration-300">Контакты</Link>
            <Link href="#" className="text-[16px] font-normal leading-normal text-white hover:text-gray-400 transition-colors duration-300">Оплата и Доставка</Link>
            <Link href="#" className="text-[16px] font-normal leading-normal text-white hover:text-gray-400 transition-colors duration-300">Новости</Link>
            <Link href="#" className="text-[16px] font-normal leading-normal text-white hover:text-gray-400 transition-colors duration-300">О нас</Link>
          </ul>
          <ul className="hidden md:flex items-center gap-[30px]">
            <Link href="tel:+998905658585" className="flex items-center gap-[5px] text-white text-[16px] font-normal leading-normal hover:text-gray-400 transition-colors duration-300">
              <Image src={Tel} width={"16px"} height={"16px"} alt="phone" />
              <p>+998 (90) 565-85-85</p>
            </Link>
            <Link href="mailto:info@gmail.com" className="flex items-center gap-[5px] text-white text-[16px] font-normal leading-normal hover:text-gray-400 transition-colors duration-300">
              <Image src={Mail} width={"16px"} height={"16px"} alt="mail" />
              <p>info@gmail.com</p>
            </Link>
          </ul>
          <button onClick={handleMenuToggle} className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </nav>
        <div className={`fixed inset-0 bg-[#1F1D14] flex flex-col items-center justify-center transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 z-[99999]`}>
          <button onClick={handleMenuToggle} className="absolute top-4 right-4 text-white text-2xl">
            &times;
          </button>
          <ul className="flex flex-col items-center gap-4">
            <Link href="#" className="text-[24px] font-normal leading-normal text-white hover:text-gray-400 transition-colors duration-300">Продукты</Link>
            <Link href="#" className="text-[24px] font-normal leading-normal text-white hover:text-gray-400 transition-colors duration-300">Контакты</Link>
            <Link href="#" className="text-[24px] font-normal leading-normal text-white hover:text-gray-400 transition-colors duration-300">Оплата и Доставка</Link>
            <Link href="#" className="text-[24px] font-normal leading-normal text-white hover:text-gray-400 transition-colors duration-300">Новости</Link>
            <Link href="#" className="text-[24px] font-normal leading-normal text-white hover:text-gray-400 transition-colors duration-300">О нас</Link>
            <Link href="tel:+998905658585" className="flex items-center gap-[5px] text-white text-[24px] font-normal leading-normal hover:text-gray-400 transition-colors duration-300">
              <Image src={Tel} width={"24px"} height={"24px"} alt="phone" />
              <p>+998 (90) 565-85-85</p>
            </Link>
            <Link href="mailto:info@gmail.com" className="flex items-center gap-[5px] text-white text-[24px] font-normal leading-normal hover:text-gray-400 transition-colors duration-300">
              <Image src={Mail} width={"24px"} height={"24px"} alt="mail" />
              <p>info@gmail.com</p>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Index;
