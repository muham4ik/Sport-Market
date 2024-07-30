import React from 'react'
import Image from 'next/image'
import { Hom, Right, Shaxzod } from "@/public/assets"
import { ProductsCard, Header, Footer} from "@/components"

const page = () => {
    return (
        <>
         <div className="main mt-[200px] sm:mt-[250px]">
         <Header />
            <div className="container">
                <ul className="navigate flex items-center gap-[6px] py-[20px] sm:mx-3">
                    <li className="flex gap-[6px] items-center">
                        <Image src={Hom} alt="Home icon" />
                        <p className="text-[16px] not-italic font-normal leading-normal text-[#000]">Главная</p>
                    </li>
                    <li className="flex gap-[6px] items-center">
                        <Image src={Right} alt="Right arrow icon" width={16} height={16} />
                        <p className="text-[16px] not-italic font-normal leading-normal text-[#1F1D14]">Гантель виниловая, 2 х 3 кг</p>
                    </li>
                </ul>
                <div className="cards flex sm:flex-col  gap-[24px] mb-[81px]">
                    <div className="cards_left flex flex-col gap-[31px]">
                        <h1 className='text-[32px] font-medium sm:text-center'>
                            Описание
                        </h1>
                        <div className="card flex flex-col sm:w-[300px] sm:mx-auto sm:p-4 gap-[53px] pr-[140px] pt-[40px] pb-[116px] pl-[70px] bg-[#fff]">
                            <div className="card_header flex flex-col gap-[28px] ">
                                <h1 className='text-[24px] not-italic font-medium text-[#1F1D14] sm:text-[20px]'>Гантель виниловая, 2 х 3 кг</h1>
                                <li className='text-[16px] sm:text-center'>В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины.</li>
                            </div>
                            <div className="card_footer flex items-center gap-[60px]">
                                <ul className='flex items-center flex-col gap-[30px]'>
                                    <li className='flex flex-col gap-[10px]'>
                                        <h1 className='text-[20px] font-medium text-[#1F1D14] '>Вес гантела:</h1>
                                        <p className='text-[16px] text-[#1F1D14]'>5кг</p>
                                    </li>
                                    <li className='flex flex-col gap-[10px]'>
                                        <h1 className='text-[20px] font-medium text-[#1F1D14] '>Вес гантела:</h1>
                                        <p className='text-[16px] text-[#1F1D14]'>5кг</p>
                                    </li>
                                </ul>
                                <ul className='flex items-center flex-col gap-[30px]'>
                                    <li className='flex flex-col gap-[10px]'>
                                        <h1 className='text-[20px] font-medium text-[#1F1D14]'>Цвета:</h1>
                                        <p className='text-[16px] text-[#1F1D14]'>Синий, Красный</p>
                                    </li>
                                    <li className='flex flex-col gap-[10px]'>
                                        <h1 className='text-[20px] font-medium text-[#1F1D14]'>Цвета:</h1>
                                        <p className='text-[16px] text-[#1F1D14]'>Синий, Красный</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="cards_right flex flex-col gap-[31px]">
                        <h1 className='text-[32px] font-medium sm:text-center'>
                            Отзыви
                        </h1>
                        <div className="card flex flex-col sm:w-[300px] sm:p-4 sm:mx-auto pr-[140px] pt-[40px] pb-[38px] pl-[70px] bg-[#fff] ">
                            <div className="card_header flex items-start gap-[12px]">
                                <Image src={Shaxzod} alt="Shaxzod Anvarov" />
                                <ul className='flex flex-col gap-[13px]'>
                                    <li className='flex flex-col'>
                                        <h1 className='text-[20px] font-medium text-[#1F1D14]'>Шахзод Анваров</h1>
                                        <p className='text-[16px] text-[#1F1D14]'>клиент</p>
                                    </li>
                                    <li className='flex flex-col gap-[6px]'>
                                        <p className='text-[16px] text-[#000]'>В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины.</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="112" height="20" viewBox="0 0 112 20" fill="none">
                                            <path d="M33 0L35.2451 6.90983H42.5106L36.6327 11.1803L38.8779 18.0902L33 13.8197L27.1221 18.0902L29.3673 11.1803L23.4894 6.90983H30.7549L33 0Z" fill="#FBD029" />
                                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FBD029" />
                                            <path d="M56 0L58.2451 6.90983H65.5106L59.6327 11.1803L61.8779 18.0902L56 13.8197L50.1221 18.0902L52.3673 11.1803L46.4894 6.90983H53.7549L56 0Z" fill="#FBD029" />
                                            <path d="M102 0L104.245 6.90983H111.511L105.633 11.1803L107.878 18.0902L102 13.8197L96.1221 18.0902L98.3673 11.1803L92.4894 6.90983H99.7549L102 0Z" fill="#D9D9D9" />
                                            <path d="M79 0L81.2451 6.90983H88.5106L82.6327 11.1803L84.8779 18.0902L79 13.8197L73.1221 18.0902L75.3673 11.1803L69.4894 6.90983H76.7549L79 0Z" fill="#D9D9D9" />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                            <div className="card_footer flex items-start gap-[12px] mt-[53px]">
                                <Image src={Shaxzod} alt="Shaxzod Anvarov" />
                                <ul className='flex flex-col gap-[13px]'>
                                    <li className='flex flex-col'>
                                        <h1 className='text-[20px] font-medium text-[#1F1D14]'>Шахзод Анваров</h1>
                                        <p className='text-[16px] text-[#1F1D14]'>клиент</p>
                                    </li>
                                    <li className='flex flex-col gap-[6px]'>
                                        <p className='text-[16px] text-[#000]'>В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины.</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="112" height="20" viewBox="0 0 112 20" fill="none">
                                            <path d="M33 0L35.2451 6.90983H42.5106L36.6327 11.1803L38.8779 18.0902L33 13.8197L27.1221 18.0902L29.3673 11.1803L23.4894 6.90983H30.7549L33 0Z" fill="#FBD029" />
                                            <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#FBD029" />
                                            <path d="M56 0L58.2451 6.90983H65.5106L59.6327 11.1803L61.8779 18.0902L56 13.8197L50.1221 18.0902L52.3673 11.1803L46.4894 6.90983H53.7549L56 0Z" fill="#FBD029" />
                                            <path d="M102 0L104.245 6.90983H111.511L105.633 11.1803L107.878 18.0902L102 13.8197L96.1221 18.0902L98.3673 11.1803L92.4894 6.90983H99.7549L102 0Z" fill="#D9D9D9" />
                                            <path d="M79 0L81.2451 6.90983H88.5106L82.6327 11.1803L84.8779 18.0902L79 13.8197L73.1221 18.0902L75.3673 11.1803L69.4894 6.90983H76.7549L79 0Z" fill="#D9D9D9" />
                                        </svg>
                                    </li>
                                </ul>
                            </div>
                            <p className='flex justify-end mt-[18px] text-[#1F1D14] opacity-90'>Все отзыви <Image src={Right} alt="Right arrow icon" /></p>
                        </div>
                    </div>
                </div>

                <div className="cards flex flex-col gap-[30px] mb-[160px]">
                    <h1 className='text-[32px] font-medium text-[#1F1D14] sm:text-center'>Похожие продукты</h1>
                    <ProductsCard />
                </div>
            </div>
            <Footer />
         </div>
        </>
    )
}

export default page
