"use client"

import Image from "next/image"
import Link from "next/link"
import { Header, Footer, Navigate } from "@/components"
import { Hom, Right ,Trash ,Location ,Clik ,Payme} from "@/public/assets"
import { useState } from "react";
import { OrgImg } from "@/public/korzina-image";

const page = () => {
  const [quantity, setQuantity] = useState(1);
  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };
  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  return (
    <>
      <Header />
      <Navigate />
      <div className="container">
        <ul className="navigate flex items-center gap-[6px] py-[20px]">
          <li className="flex gap-[6px] items-center">
            <Image src={Hom}
            />
            <p className="text-[16px] not-italic font-normal leading-normal text-[#000]">Главная</p></li>
          <li className="flex gap-[6px] items-center">
            <Image src={Right}
              width={16}
              height={16}
            />
            <p className="text-[16px] not-italic font-normal leading-normal text-[#1F1D14]">Корзина</p>
          </li>
        </ul>

        <div className="korzina flex items-start gap-[24px] mb-[120px]">
          <div className="korzine_left flex flex-col gap-[15px] py-[20px] px-[30px] bg-white rounded-[8px]">
            <ul className="flex justify-between">
              <li><h1 className="text-[24px] font-medium">Ваша корзина</h1></li>
              <li> <p className="text-[14px] text-[#FF1313] not-italic">Очистить все</p></li>
            </ul>
            <div className="korzina_product flex flex-col">
              {OrgImg.map((item,index)=>(
                   <ul key={index} className="flex items-center gap-[22px] p-[10px] bg-[#F2F2F2] ">
                   <Image src={item.image} width={145} />
                   <li className="flex flex-col gap-[29px]">
                     <h1 className="text-[20px] text-[#1F1D14] ">Гантель виниловая, 2 х 3 кг Гантель </h1>
                       <div className="flex items-center gap-[40px]">
                        <ul className="flex items-center gap-[25px]">
                        <button onClick={handleDecrease} className="text-[22px]">-</button>
                         <p className="text-[20px]">{quantity}</p>
                         <button onClick={handleIncrease} className="text-[22px]">+</button>
                        </ul>
                         <div className="flex items-center gap-[5px]"><h1 className="text-[22px] font-bold text-[#000]">300 000</h1><span className="text-[16px]">uzs</span></div>
                       </div>
                   </li>
                   <li className="rounded-[50%] p-[9px] bg-white"><Image src={Trash} width={18}/></li>
                 </ul>  
              ))}
           
              
            </div>
            <ul className="flex flex-col py-[63px] pr-[400px] gap-[20px]">
            <Link href="#" className="text-[20px] border-b-[#06F] text-[#06F] border-b" >Все информация о доставке</Link>
            <p className="text-[#000] text-[20px]">
            Если у вас имеется вопросы позаоните по номеру:<Link href="#">+998 (99) 995 55 65</Link>
            </p>
            </ul>
            
          </div>
          <div className="korzina_right flex flex-col py-[20px]  px-[40px] bg-white rounded-[8px]">
              <h1 className="text-[20px] font-medium text-[#1F1D14]">Итого</h1>   
              <ul className="flex justify-between">
                <li className="flex flex-col gap-[5px] mt-[15px]">
                <p className="text-[20px] text-[#1F1D14]">Кол-во товаров:</p>
                <span className="text-[20px] text-[#1F1D14] font-medium">4</span>
                </li>
                <li className="flex flex-col gap-[5px] mt-[15px]">
                  <p className="text-[20px] text-[#1F1D14]">Сумма:</p>
                  <span className="flex items-center gap-[5px]"><p className="text-[#1F1D14] text-[24px] font-medium">250 000</p> <p className="text-[16px] text-[#1F1D14]">UZS</p></span>
                </li>
              </ul>
              <form action="" className="flex flex-col gap-[19px]">
                <h1 className="text-[20px] text-[#1F1D14] font-medium leading-normal">Ваши данные</h1>
                <li className="flex flex-col gap-[18px]">
                <p className="text-[16px] text-[#1F1D14]">Имя /Фамиля *</p>
                <input type="text" placeholder="Имя/Фамиля" className="py-[18px] px-[20px] bg-[#F2F2F2] rounded-[8px] placeholder:text-[20px] placeholder:text[#1F2D14]" />
                </li>
              <li className="flex flex-col gap-[18px]">
                <p className="text-[16px] text-[#1F1D14]">Ваш номер *</p>
                <input type="num" placeholder="+998 __ ___ __ __" className="py-[18px] px-[20px] bg-[#F2F2F2] rounded-[8px] placeholder:text-[20px] placeholder:text[#1F2D14]" />
              </li>
              <li className="flex flex-col gap-[18px]">
                <p className="text-[16px] text-[#1F1D14]">Адрес доставки</p>
                <div className="flex justify-between">
                <input type="text" placeholder="Область/город/улица/дом"  className="w-[100%] py-[18px] px-[20px] bg-[#F2F2F2] rounded-[8px] placeholder:text-[20px] placeholder:text[#1F2D14]" />
                <button className="p-[18px] bg-[#FBD029] rounded-[5px]"><Image src={Location}/></button>
                </div>
              </li>
              </form>
              <ul className="flex flex-col gap-[19px]">
              <h1 className="text-[20px] font-medium text-[#1F1D14]">Тип оплаты</h1>
              <ul className="flex items-center gap-[12px]">
                <li className="py-[17px] px-[25px] bg-[#F2F2F2] rounded-[8px]">
                  <Image src={Clik}/>
                </li>
                <li className="py-[17px] px-[25px] bg-[#F2F2F2] rounded-[8px]">
                  <Image src={Payme}/>
                </li>
                <li className="py-[17px] px-[25px] bg-[#F2F2F2] rounded-[8px]">
                  <p className="text-[16px] font-medium text-[#1F1D14]">Через карту</p>
                </li>
              </ul>
              <li className="text-center py-[17px] px-[25px] bg-[#F2F2F2] rounded-[8px] w-[130px]">
                <p className="text-[16px] font-medium text-[#1F1D14]">Банковский счёт</p>
              </li>
              </ul>
              <button className="py-[15px] mt-[40px] px-[30px] text-[#1F1D14] text-[24px] font-medium rounded bg-[#FBD029] w-full">Купить</button>
          </div>
        </div>
      </div>
      <Footer />
    </>


  )
}

export default page