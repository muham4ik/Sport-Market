"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/assets/icons/logo.svg';
import Tel from '../../../public/assets/icons/phone.svg';
import Mail from '../../../public/assets/icons/mail.svg';
import Layer from "../../../public/assets/icons/layers.svg";
import Search from "../../../public/assets/icons/search.svg";
import User from "../../../public/assets/icons/user.svg";
import Wishlist from "../../../public/assets/icons/heart.svg";
import Korzinka from "../../../public/assets/icons/shopping.svg";
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
    <header className="bg-[#1F1D14] w-full fixed top-0 z-[99999]">
      <div className="container sm:px-4">
        <nav className="navbar flex items-center justify-between py-[10px] md:py-[20px]">
          <Link href="/" className="flex items-center gap-[11px] mr-[53px]">
            <Image src={Logo} width={"62px"} height={"54px"} alt="logo" />
            <div className="flex flex-col items-start text-2xl font-semibold text-white">
              <p>Sport</p>
              <p>Market</p>
            </div>
          </Link>
          <ul className="hidden md:flex items-center gap-[30px] mr-[224.5px]">
            <Link href="/product" className="text-[16px] font-normal leading-normal text-white hover:text-gray-400 transition-colors duration-300">Продукты</Link>
            <Link href="#footer" className="text-[16px] font-normal leading-normal text-white hover:text-gray-400 transition-colors duration-300">Контакты</Link>
            <Link href="/delivery" className="text-[16px] font-normal leading-normal text-white hover:text-gray-400 transition-colors duration-300">Оплата и Доставка</Link>
            <Link href="/#" className="text-[16px] font-normal leading-normal text-white hover:text-gray-400 transition-colors duration-300">Новости</Link>
            <Link href="/about" className="text-[16px] font-normal leading-normal text-white hover:text-gray-400 transition-colors duration-300">О нас</Link>
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
            <Link href="/product" className="text-[24px] font-normal leading-normal text-white hover:text-gray-400 transition-colors duration-300">Продукты</Link>
            <Link href="#footer" className="text-[24px] font-normal leading-normal text-white hover:text-gray-400 transition-colors duration-300">Контакты</Link>
            <Link href="/delivery" className="text-[24px] font-normal leading-normal text-white hover:text-gray-400 transition-colors duration-300">Оплата и Доставка</Link>
            <Link href="/#" className="text-[24px] font-normal leading-normal text-white hover:text-gray-400 transition-colors duration-300">Новости</Link>
            <Link href="/about" className="text-[24px] font-normal leading-normal text-white hover:text-gray-400 transition-colors duration-300">О нас</Link>
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
      <div className="main w-full bg-white z-[9999]">
      <div className="container sm:px-4">
        <nav className="navbar flex items-center sm:py-1 py-[15px] justify-between">
          <ul className="flex items-center sm:gap-[4px] gap-[10px] flex-wrap">
            <button className="inline-flex justify-center items-center sm:gap-[5px] gap-[10px] sm:py-[8px] py-[15px] px-[40px] bg-[#1F1D14] rounded-[5px]">
              <Image src={Layer} alt="layer" />
              <p className="text-[20px] not-italic font-normal sm:text-[16px] leading-normal text-white">
                Каталог
              </p>
            </button>
            <div className="inpt flex items-center sm:py-[8px] py-[17px] px-[20px] w-full md:w-[502px] border rounded-[5px] sm:mt-1 mt-4 md:mt-0">
              <input
                type="text"
                placeholder="Поиск"
                className="outline-none border-none bg-transparent w-full mr-[5px]"
              />
              <button className="p-[4px]">
                <Image src={Search} alt="search" />
              </button>
            </div>
          </ul>
          <ul className="flex items-center sm:gap-[4px] gap-[13px] flex-wrap sm:mt-1 mt-4 md:mt-0">
            <button className="py-[13px] sm:py-[8px] px-[12px] rounded-[3px] bg-[#F2F2F2]">
              <Image src={User} alt="user"/>
            </button>
            <button className="py-[13px] sm:py-[8px] px-[12px] rounded-[3px] bg-[#F2F2F2]">
              <Image src={Wishlist} alt="wishlist" />
            </button>
            <button className="flex items-center sm:py-[8px] py-[15px] px-[30px] gap-[5px] rounded-[5px] ml-[25px] bg-[#F2F2F2] justify-center">
              <Image src={Korzinka} alt="korzina" />
              <p className="text-[20px] not-italic font-normal leading-normal text-[#1F1D14]">
                Корзина
              </p>
            </button>
          </ul>
        </nav>
      </div>
    </div>
    </header>
  );
};

export default Index;
