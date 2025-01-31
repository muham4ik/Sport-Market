import React from 'react'
import Image from 'next/image'
import { Header, Footer } from '@/components'
import { Hom, Right, Share, Printer } from "@/public/assets"
import Card from "../../components/ui/card"
import Link from 'next/link'
const index = () => {
  return (
    <>
      <div className="main mt-[200px] sm:mt-[180px]">
        <Header />
        <div className="container">
          <ul className="navigate flex items-center gap-[6px] py-[20px] sm:px-4">
            <li className="flex gap-[6px] items-center">
              <Image src={Hom} alt='home'
              />
              <p className="text-[16px] not-italic font-normal leading-normal text-[#000]">Главная</p></li>
            <li className="flex gap-[6px] items-center">
              <Image src={Right}
                alt='right'
                width={16}
                height={16}
              />
              <Link href="/" className="text-[16px] not-italic font-normal leading-normal text-[#000]">Главная</Link>
            </li>
            <li className="flex gap-[6px] items-center">
              <Image src={Right}
                alt='right'
                width={16}
                height={16}
              />
            </li>
            <Link href="/about" className="text-[16px] not-italic font-normal leading-normal text-[#000]">О нас</Link>

          </ul>

          <div className="about">
            <div className="about_main sm:flex-col flex gap-[50px] mb-[120px]">
              <div className="about_left sm:w-[300px] sm:mx-auto pt-[7px] pl-[12px] pb-[178px] bg-[#fff] h-[256px] flex flex-col gap-[15px] rounded-[6px]">
                <span className='flex items-center gap-[4px] py-[6] pl-[9px] pr-[34px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="26" viewBox="0 0 17 26" fill="none">
                    <rect width="2.28245" height="26.4608" transform="matrix(0.975738 0.218942 -0.266986 0.9637 14.7734 0)" fill="#FBD029" />
                    <rect width="2.28245" height="26.4608" transform="matrix(0.975738 0.218942 -0.266986 0.9637 7.06445 0)" fill="#FBD029" />
                  </svg>
                  <p className='text-[16px] text-[#000]'>О нас</p>
                </span>
                <p className='text-[16px] text-[#000] py-[6px] pl-[37px] pr-[65px]'>Вканация</p>

              </div>
              <div className="about_right sm:w-[300px] mx-auto sm:p-4 pt-[40px] pb-[80px] pl-[66px] pr-[50px] bg-[#fff]  rounded-[6px]">
                <h1 className='text-[24px] font-medium text-[#000] mb-[17px]'>7 SPORT MARKET</h1>
                <ul className='flex flex-col gap-[29px] '>
                  <p className='text-[#000] text-[20px] leading-[22.4px] not-italic font-normal sm:text-[18px]'>В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а также нужные организму человека.</p>
                  <p className='text-[#000] text-[20px] leading-[22.4px] not-italic font-normal sm:text-[18px]'>Овощи содержат в себе много полезных витаминов, которые укрепляют здоровье и иммунитет и являются необходимым компонентом в рационе человека. Тепличный помидор - всегда доступен для вас и в сети супермаркетов “Makro” вы всегда можете найти его по выгодной цене и заказать их с доставкой в Ташкенте.</p>
                  <p className='text-[#000] text-[20px] leading-[22.4px] not-italic font-normal sm:text-[18px]'>В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9, С, К, Н и РР, а также нужные организму человека.</p>
                  <p className='text-[#000] text-[20px] leading-[22.4px] not-italic font-normal sm:text-[18px]'>Овощи содержат в себе много полезных витаминов, которые укрепляют здоровье и иммунитет и являются необходимым компонентом в рационе человека. Тепличный помидор - всегда доступен для вас и в сети супермаркетов “Makro” вы всегда можете найти его по выгодной цене и заказать их с доставкой в Ташкенте.</p>
                </ul>
                <ul className='flex justify-end mt-[62px] gap-[32px]'>
                  <li className='flex items-center gap-[5px]'>
                    <p className='#1F1D14'>Поделиться:</p>
                    <Image src={Share} alt='share' />
                  </li>
                  <li className='flex items-center gap-[5px]'>
                    <p className='#1F1D14'>Распечатать:</p>
                    <Image src={Printer} alt='printer' />
                  </li>
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
  )
}

export default index