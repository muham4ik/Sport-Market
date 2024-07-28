import Image from "next/image";
import { Akimg } from "@/public/aksiya-image";
import Aksiya from "../../../public/aksiya-image/aksiya.svg";
import Wishlist from "../../../public/assets/icons/heart.svg";
import { Korzina } from "@/public/assets";

const Index = () => { // Kichik harf bilan yozilgan `index` o'rniga katta harf bilan yozing.
  return (
    <div className="cards flex items-center gap-[24px]">
      {
        Akimg.map((item, idx) => ( // `index` o'rniga `idx` ishlating
          <div className="card rounded-[5px] bg-[#ffff]" key={idx}>
            <div className="card_header flex items-start gap-[48px] p-[10px]">
              <Image
                src={Aksiya}
                className="z-50 relative ml-[-10px] mt-[-10px]"
                alt="Aksiya icon" // alt atributini qo'shishni unutmang
              />
              <Image
                src={Wishlist}
                alt="Wishlist icon" // alt atributini qo'shishni unutmang
              />
            </div>
            <div className="card_body flex justify-center">
              <Image
                className="relative mt-[-180px] pb-[25px]"
                src={item.image}
                alt="Product image" // alt atributini qo'shishni unutmang
              />
            </div>
            <div className="card_footer w-[216px] pl-[20px] mb-[18px]">
              <h1 className="text-[20px] not-italic font-normal leading-normal text-[#000000]">Бутса Nike Mercurial Superfly 8 FG</h1>
              <p className="text-[20px] not-italic font-semibold leading-normal text-[#FF1313]">500 000 uzs</p>
              <p className="text-[16px] not-italic font-normal line-through text-[#1F1D14]">750 000</p>
            </div>
            <button className="w-full flex items-center gap-[6px] py-[15px] px-[91px] bg-[#FBD029] justify-center rounded-b-[5px]">
              <Image
                src={Korzina}
                alt="Korzina icon" // alt atributini qo'shishni unutmang
              />
              <p>Корзина</p>
            </button>
          </div>
        ))
      }
    </div>
  );
};

export default Index; // Kichik harf bilan yozilgan `index` o'rniga katta harf bilan yozing.
