"use client"
import Image from "next/image"
import Wishlist from "../../../public/assets/icons/heart.svg"
import { Korzina } from "@/public/assets"
import { getProduct } from "@/service/product";
import { useState ,useEffect } from "react";
const index = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await getProduct(4, 1); // `getProduct` funksiyasini chaqirish
      if (response.status === 200 && response.data.products) {
        const productsWithLikeState = response.data.products.map((product) => ({
          ...product,
          liked: false 
        }));
        setData(productsWithLikeState);
      } else {
        console.error('No products found in response:', response.data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log('Products Data:', data);
  }, [data]);
  return (
    <>
      <div className="cards flex sm:flex-col items-center gap-[35px]">
        {
          data?.map((item, index) => (
            <div className="card rounded-[5px] w-[214.5px] bg-[#ffff]" key={index}>
              <div className="card_header flex justify-end gap-[48px]  p-[10px] pb-[0px]">
                <Image
                  src={Wishlist}
                  alt="wishlis"
                />
              </div>
              <div className="card_body h-[216px] flex justify-center">
                <Image
                  className="  pb-[25px]"
                  src={item.image_url[0]}
                  alt={item.product_name}
                  width={200}
                  height={100}
                />
              </div>
              <div className="card_footer w-[216px] h-[150px] pl-[20px] mb-[18px] justify-between flex flex-col ">
                <h1 className="text-[20px] not-italic font-medium leading-normal text-[#000000]"> {item.product_name || 'Product Name'}</h1>
                <h1 className="text-[16px] not-italic font-normal leading-normal text-[#000000]"> {item.description || 'Product Name'}</h1>
                <p className="text-[20px] not-italic font-semibold leading-normal text-[#1F1D14]"> {item.cost || 'Price'} UZS</p>

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