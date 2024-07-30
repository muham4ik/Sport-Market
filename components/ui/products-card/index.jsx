import Image from "next/image"
import { ProductImg } from "@/public/product-image"
import Wishlist from "../../../public/assets/icons/heart.svg"
import { Korzina } from "@/public/assets"
const index = () => {
  return (
    <>
      <div className="cards flex sm:flex-col items-center gap-[35px]">
        {
          ProductImg.map((item, index) => (
            <div className="card rounded-[5px] w-[292px] bg-[#ffff]" key={index}>
              <div className="card_header flex justify-end gap-[48px]  p-[10px] pb-[0px]">
                <Image
                  src={Wishlist}
                  alt="wishlis"
                />
              </div>
              <div className="card_body flex justify-center">
                <Image
                  className="  pb-[25px]"
                  src={item.image}
                  alt="image"
                />
              </div>
              <div className="card_footer w-[216px] pl-[20px] mb-[18px] flex flex-col gap-[24px]">
                <h1 className="text-[20px] not-italic font-normal leading-normal text-[#000000]">Бутса Nike Mercurial Superfly 8 FG</h1>
                <p className="text-[20px] not-italic font-semibold leading-normal text-[#1F1D14]">250 000 uzs</p>
              </div>
              <button className="w-full flex items-center gap-[6px] py-[15px] px-[91px] bg-[#FBD029] justify-center rounded-b-[5px]">
                  <Image
                    src={Korzina}
                    alt="image"
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