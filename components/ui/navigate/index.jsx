import Image from "next/image";
import Layer from "../../../public/assets/icons/layers.svg";
import Search from "../../../public/assets/icons/search.svg";
import User from "../../../public/assets/icons/user.svg";
import Wishlist from "../../../public/assets/icons/heart.svg";
import Korzinka from "../../../public/assets/icons/shopping.svg";

const Index = () => {
  return (
    <div className="main w-full bg-white">
      <div className="container">
        <nav className="navbar flex items-center py-[15px] justify-between">
          <ul className="flex items-center gap-[10px] flex-wrap">
            <button className="inline-flex justify-center items-center gap-[10px] py-[15px] px-[40px] bg-[#1F1D14] rounded-[5px]">
              <Image src={Layer} />
              <p className="text-[20px] not-italic font-normal leading-normal text-white">
                Каталог
              </p>
            </button>
            <div className="inpt flex items-center py-[17px] px-[20px] w-full md:w-[502px] border rounded-[5px] mt-4 md:mt-0">
              <input
                type="text"
                placeholder="Поиск"
                className="outline-none border-none bg-transparent w-full mr-[5px]"
              />
              <button className="p-[4px]">
                <Image src={Search} />
              </button>
            </div>
          </ul>
          <ul className="flex items-center gap-[13px] flex-wrap mt-4 md:mt-0">
            <button className="py-[13px] px-[12px] rounded-[3px] bg-[#F2F2F2]">
              <Image src={User} />
            </button>
            <button className="py-[13px] px-[12px] rounded-[3px] bg-[#F2F2F2]">
              <Image src={Wishlist} />
            </button>
            <button className="flex items-center py-[15px] px-[30px] gap-[5px] rounded-[5px] ml-[25px] bg-[#F2F2F2] justify-center">
              <Image src={Korzinka} />
              <p className="text-[20px] not-italic font-normal leading-normal text-[#1F1D14]">
                Корзина
              </p>
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Index;
