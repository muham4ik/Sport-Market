import Image from "next/image"
import {ProductsImg} from "../../../public/products-image"
import { News } from "@/public/assets"
import Wishlist from "../../../public/assets/icons/heart.svg"
import { Korzina } from "@/public/assets"
const index = () => {
  return (
    <>
      <div className="cards flex items-center gap-[24px]">
        {
        ProductsImg.map((item, index) => (
            <div className="card rounded-[5px] bg-[#ffff]" key={index}>
              <div className="card_header flex items-start gap-[48px] p-[10px]">
                <Image
                  src={News}
                  className="z-50 relative ml-[-10px] mt-[-10px]"
                />
                <Image
                  src={Wishlist}
                />
              </div>
              <div className="card_body flex justify-center">
                <Image
                  className="relative mt-[-180px] pb-[25px]"
                  src={item.image}
                />
              </div>
              <div className="card_footer w-[216px] pl-[20px] mb-[18px] flex flex-col gap-[24px]">
                <h1 className="text-[20px] not-italic font-normal leading-normal text-[#000000]">Бутса Nike Mercurial Superfly 8 FG</h1>
                <p className="text-[20px] not-italic font-semibold leading-normal text-[#1F1D14]">500 000 uzs</p>
              </div>
              <button className="w-full flex items-center gap-[6px] py-[15px] px-[91px] bg-[#FBD029] justify-center rounded-b-[5px]">
                  <Image
                    src={Korzina}
                  />
                  <p>Корзина</p>
                </button>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default index