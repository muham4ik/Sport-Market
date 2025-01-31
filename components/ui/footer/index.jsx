import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/icons/logo.svg";
import Tel from "../../../public/assets/icons/phone.svg";
import Mail from "../../../public/assets/icons/mail.svg";
import Icon from "../../../public/assets/icons/icon.svg";
import "./style.css"
import { Instagram, Telegram, Facebook } from "@/public/assets";

const Footer = () => { // `index` o'rniga `Footer` nomi
  return (
    <footer className="bg-[#1F1D14] w-full border-t-[24px] border-t-[#FBD029]" id="footer">
      <div className="border-b-[1px] border-b-[#F2F2F2]">
        <div className="container">
          <nav className="navbar1 flex items-start pt-[77px] pb-[44px] justify-between">
            <Link href="/" className="flex items-center gap-[11px] mr-[72px]">
              <Image
                src={Logo}
                width={"62px"}
                height={"54px"}
                alt="Logo"
                loading="lazy"
              />
              <li className="flex flex-col items-start text-2xl not-italic font-semibold text-white">
                <p>Sport</p>
                <p>Market</p>
              </li>
            </Link>
            <ul className="flex flex-col items-start gap-[20px] mr-[89px]">
              <Link href="#" className="text-[18px] not-italic font-bold font-[Roboto] leading-normal text-white">Контакты</Link>
              <Link href="tel:+998905658585" className="flex items-center gap-[5px]">
                <Image
                  src={Tel}
                  width={"16px"}
                  height={"16px"}
                  alt="Phone"
                />
                <p className="text-[16px] not-italic font-normal leading-normal text-white">+998 (90) 565-85-85</p>
              </Link>
              <Link href="mailto:info@gmail.com" className="flex items-center gap-[5px]">
                <Image
                  src={Mail}
                  width={"16px"}
                  height={"16px"}
                  alt="Mail"
                />
                <p className="text-[16px] not-italic font-normal leading-normal text-white">info@gmail.com</p>
              </Link>
            </ul>
            <Link href="#" className="flex items-center gap-[13px] mt-[23px]">
              <Image
                src={Icon}
                alt="Address Icon"
              />
              <p className="text-[16px] not-italic font-normal leading-normal text-white">Tashkent Sh. Chilonzor 9 kvartal 12 uy</p>
            </Link>
            <ul className="flex flex-col items-start gap-[20px] ml-[166px]">
              <Link href="#" className="text-[18px] not-italic font-bold font-[Roboto] leading-normal text-white">Подписатся</Link>
              <input type="text" placeholder="support@figma.com" className="rounded-[5px] border-[#9A9EA5] border-[1px] outline-none py-[8px] pl-[16.83px] pr-[3px] w-full" />
              <button className="rounded-[6px] bg-[#FBD029] py-[10.5px] px-[77.5px] hover:bg-white hover:border-[#FBD029]">Отправить</button>
              <ul className="flex items-center gap-[20px] mt-[49px]">
                <Link href="#"><Image src={Instagram} alt="Instagram" /></Link>
                <Link href="#"><Image src={Facebook} alt="Facebook" /></Link>
                <Link href="#"><Image src={Telegram} alt="Telegram" /></Link>
              </ul>
            </ul>
          </nav>
        </div>
      </div>
      <div className="container footer-bottom flex justify-between pt-[13px] pb-[22px]">
        <p className="font-[Roboto] text-normal font-normal not-italic text-[#7B7E86]">© 2022 All Rights Reserved</p>
        <ul className="flex gap-[40px] items-center">
          <p className="font-[Roboto] text-normal font-normal not-italic text-[#7B7E86]">Privacy Policy</p>
          <p className="font-[Roboto] text-normal font-normal not-italic text-[#7B7E86]">Terms of Use</p>
          <p className="font-[Roboto] text-normal font-normal not-italic text-[#7B7E86]">Sales and Refunds</p>
          <p className="font-[Roboto] text-normal font-normal not-italic text-[#7B7E86]">Legal</p>
          <p className="font-[Roboto] text-normal font-normal not-italic text-[#7B7E86]">Site Map</p>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
