import React from 'react';
import Image from 'next/image';
import { Header, Footer} from '@/components';
import { Hom, Right } from "@/public/assets";
import Card from "../../components/ui/card";

const Index = () => {
  return (
    <>
    <div className="main mt-[200px] sm:mt-[260px]">
    <Header />
      <div className="container">
        <ul className="navigate flex items-center gap-[6px] py-[20px] sm:px-4">
          <li className="flex gap-[6px] items-center">
            <Image src={Hom} alt='Home icon' />
            <p className="text-[16px] not-italic font-normal leading-normal text-[#000]">Главная</p>
          </li>
          <li className="flex gap-[6px] items-center">
            <Image src={Right} alt='Right arrow icon' width={16} height={16} />
            <p className="text-[16px] not-italic font-normal leading-normal text-[#1F1D14]">О нас</p>
          </li>
        </ul>

        <div className="about">
          <div className="about_main flex sm:flex-col  gap-[24px] sm:mb-[40px] mb-[120px]">
            <div className="about_left bg-[#fff]  sm:w-[300px] sm:mx-auto h-[256px] gap-[15px] rounded-[6px]">
              <span className='flex items-center gap-[4px] py-[6px] pl-[9px] pr-[20px] w-[187px] '>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="26" viewBox="0 0 17 26" fill="none">
                  <rect width="2.28245" height="26.4608" transform="matrix(0.975738 0.218942 -0.266986 0.9637 14.7734 0)" fill="#FBD029" />
                  <rect width="2.28245" height="26.4608" transform="matrix(0.975738 0.218942 -0.266986 0.9637 7.06445 0)" fill="#FBD029" />
                </svg>
                <p className='text-[15px] text-[#000]'>Оплата и Доставка</p>
              </span>
            </div>
            <div className="about_right sm:mx-auto  sm:w-[300px] sm:px-4 pt-[40px] pb-[80px] pl-[66px] pr-[50px] bg-[#fff] rounded-[6px]">
              <h1 className='text-[24px] font-medium text-[#000] mb-[17px]'>Способы оплаты</h1>
              <ul className='flex flex-col gap-[29px]'>
                <p className='text-[#000] text-[20px] leadin g-[22.4px] not-italic font-normal sm:text-[18px]'>Для того, чтобы оплатить товар, Вам нужно перейти в «Корзину» и выбрать тот товар, который Вы хотите купить.</p>
                <p className='text-[#000] text-[20px] leading-[22.4px] not-italic font-normal sm:text-[18px]'>После перехода в Корзину, откроется список товаров, которые Вы добавили. Далее, нажимаем кнопку «Оформить заказ». В окне, появится «Контактная информация» и «Способы доставки», которые Вам не обходимо заполнить. </p>
                <p className='text-[#000] text-[20px] leading-[22.4px] not-italic font-normal sm:text-[18px]'>Вы можете выбрать более подходящий для Вас способ оплаты: -Оплата на месте; -Оплата по терминалу; -Оплата через платёжные системы, такие как CLICK, Payme.</p>
                <p className='text-[#000] text-[20px] leading-[22.4px] not-italic font-normal sm:text-[18px]'>платить покупки можно наличными при получении. Убедительная просьба вначале ознакомиться с товаром, убедиться в отсутствии дефектов в присутствии курьера, после чего оплачивать сумму.</p>
              </ul>
              <h1 className='text-[24px] font-medium text-[#000] mb-[17px] mt-[17px]'>Доставка</h1>
              <ul className='flex flex-col gap-[29px]'>
                <p className='text-[#000] text-[20px] leading-[22.4px] not-italic font-normal sm:text-[18px]'>Тарифы на доставку товаров по Ташкенту:</p>
                <p className='text-[#000] text-[20px] leading-[22.4px] not-italic font-normal sm:text-[18px]'>После перехода в Корзину, откроется список товаров, которые Вы добавили. Далее, нажимаем кнопку «Оформить заказ». В окне, появится «Контактная информация» и «Способы доставки», которые Вам не обходимо заполнить.</p>
                <p className='text-[#000] text-[20px] leading-[22.4px] not-italic font-normal sm:text-[18px]'>Тарифы на доставку товаров по всех регионов: -Платная доставка для всех товаров по согласованной цене -Бесплатная установка для всех тренажеров</p>
              </ul>
            </div>
          </div>
        </div>
        <div className="about_bottom flex flex-col gap-[40px] mb-[120px]">
          <h1 className='text-[24px] font-medium text-[#1F1D14] sm:text-center'>Акция</h1>
          <Card />
        </div>
      </div>
      <Footer />
    </div>

    </>
  );
}

export default Index;
