import React from 'react'
import Image from 'next/image'
import Korzinka from "../../public/assets/icons/shopping.svg";
import { Hom, Right, Shaxzod, Share, } from "@/public/assets"
import { ProductsCard, Header, Footer } from "@/components"
import Link from 'next/link'
import Swiper from '@components/carousel'

const page = () => {
    return (
        <>
            <div className="main mt-[200px] sm:mt-[180px]">
                <Header />
                <div className="container">
                    <ul className="navigate flex items-center gap-[6px] py-[20px] sm:mx-3">
                        <li className="flex gap-[6px] items-center">
                            <Image src={Hom} alt="Home icon" />
                            <Link href="/" className="text-[16px] not-italic font-normal leading-normal text-[#000]">Главная</Link>
                        </li>
                        <li className="flex gap-[6px] items-center">
                            <Image src={Right} alt="Right arrow icon" width={16} height={16} />
                            <p className="text-[16px] not-italic font-normal leading-normal text-[#1F1D14]">Гантель виниловая, 2 х 3 кг</p>
                        </li>
                    </ul>

                    <div className="top flex gap-[24px] sm:hidden items-center mb-[80px]">
                        <div className="top_left w-[720px] h-[539px] bg-[#fff] ">
                            <Swiper />
                        </div>
                        <div className="top_right bg-[#fff] h-[539px] flex flex-col items-start gap-[24px] pl-[52px] pr-[80px] pt-[50px] pb-[34px]">
                            <li className='flex flex-col gap-[8px]'>
                                <h1 className='text-[#1F1D14] text-[32px] not-italic font-medium leading-[34px]'>Гантель виниловая, 2 х 3 кг</h1>
                                <p className='text-[16px] text-[#000] not-italic '>В составе томатов в большом количестве содержатся сахара, клетчатка, пектины, бета-каротин, витамины.</p>
                                <span className='text-[#1F1D14] text-[16px] flex gap-[5px]'>В комлекте:  <p className='text-[#000] font-medium'> 2 шт.</p></span>
                                <span className='text-[#1F1D14] text-[16px] flex gap-[5px]'>В комлекте:  <p className='text-[#000] font-medium'> 2 шт.</p></span>
                            </li>
                            <li className='flex items-center gap-[10px]'>
                                <h3 className='text-[24px] text-[#1F1D14] font-medium'>220 000</h3>
                                <p className='text-[16px] text-[#1F1D14]'>uzs</p>
                                |
                                <p className='tetx-[#1F1D14]'>1 шт.</p>
                            </li>
                            <li className='flex items-start  gap-[24px] '>
                                <button className="flex items-center sm:py-[8px] bg-[#FBD029] border border-[#FBD029] py-[15px] px-[30px] gap-[5px] rounded-[5px] justify-center">
                                    <Image src={Korzinka} alt="korzina" />
                                    <p className="text-[20px] not-italic font-normal leading-normal text-[#1F1D14]">
                                        Корзина
                                    </p>
                                </button>
                                <button className="flex items-center sm:py-[8px] py-[15px] px-[30px] border border-[#FBD029] gap-[5px] rounded-[5px]  bg-[#F2F2F2] justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                        <path d="M13.333 5.9535V2.50016C13.333 2.32335 13.2627 2.15378 13.1377 2.02876C13.0127 1.90373 12.8431 1.8335 12.6663 1.8335C12.4895 1.8335 12.3199 1.90373 12.1949 2.02876C12.0699 2.15378 11.9996 2.32335 11.9996 2.50016V5.9535C11.6135 6.09363 11.2799 6.34925 11.0442 6.68561C10.8084 7.02196 10.682 7.42275 10.682 7.8335C10.682 8.24424 10.8084 8.64503 11.0442 8.98139C11.2799 9.31774 11.6135 9.57336 11.9996 9.7135V14.5002C11.9996 14.677 12.0699 14.8465 12.1949 14.9716C12.3199 15.0966 12.4895 15.1668 12.6663 15.1668C12.8431 15.1668 13.0127 15.0966 13.1377 14.9716C13.2627 14.8465 13.333 14.677 13.333 14.5002V9.7135C13.7191 9.57336 14.0526 9.31774 14.2884 8.98139C14.5241 8.64503 14.6506 8.24424 14.6506 7.8335C14.6506 7.42275 14.5241 7.02196 14.2884 6.68561C14.0526 6.34925 13.7191 6.09363 13.333 5.9535ZM12.6663 8.50016C12.5344 8.50016 12.4055 8.46106 12.2959 8.38781C12.1863 8.31456 12.1008 8.21044 12.0504 8.08862C11.9999 7.9668 11.9867 7.83276 12.0124 7.70344C12.0382 7.57412 12.1016 7.45533 12.1949 7.36209C12.2881 7.26886 12.4069 7.20536 12.5362 7.17964C12.6655 7.15392 12.7996 7.16712 12.9214 7.21758C13.0432 7.26803 13.1473 7.35348 13.2206 7.46312C13.2939 7.57275 13.333 7.70164 13.333 7.8335C13.333 8.01031 13.2627 8.17988 13.1377 8.3049C13.0127 8.42992 12.8431 8.50016 12.6663 8.50016ZM8.66628 9.9535V2.50016C8.66628 2.32335 8.59605 2.15378 8.47102 2.02876C8.346 1.90373 8.17643 1.8335 7.99962 1.8335C7.82281 1.8335 7.65324 1.90373 7.52821 2.02876C7.40319 2.15378 7.33295 2.32335 7.33295 2.50016V9.9535C6.94685 10.0936 6.61326 10.3492 6.37751 10.6856C6.14177 11.022 6.0153 11.4228 6.0153 11.8335C6.0153 12.2442 6.14177 12.645 6.37751 12.9814C6.61326 13.3177 6.94685 13.5734 7.33295 13.7135V14.5002C7.33295 14.677 7.40319 14.8465 7.52821 14.9716C7.65324 15.0966 7.82281 15.1668 7.99962 15.1668C8.17643 15.1668 8.346 15.0966 8.47102 14.9716C8.59605 14.8465 8.66628 14.677 8.66628 14.5002V13.7135C9.05239 13.5734 9.38598 13.3177 9.62172 12.9814C9.85747 12.645 9.98394 12.2442 9.98394 11.8335C9.98394 11.4228 9.85747 11.022 9.62172 10.6856C9.38598 10.3492 9.05239 10.0936 8.66628 9.9535ZM7.99962 12.5002C7.86776 12.5002 7.73887 12.4611 7.62924 12.3878C7.5196 12.3146 7.43416 12.2104 7.3837 12.0886C7.33324 11.9668 7.32004 11.8328 7.34576 11.7034C7.37148 11.5741 7.43498 11.4553 7.52821 11.3621C7.62145 11.2689 7.74024 11.2054 7.86956 11.1796C7.99888 11.1539 8.13292 11.1671 8.25474 11.2176C8.37656 11.268 8.48068 11.3535 8.55393 11.4631C8.62718 11.5727 8.66628 11.7016 8.66628 11.8335C8.66628 12.0103 8.59605 12.1799 8.47102 12.3049C8.346 12.4299 8.17643 12.5002 7.99962 12.5002ZM3.99962 4.62016V2.50016C3.99962 2.32335 3.92938 2.15378 3.80436 2.02876C3.67933 1.90373 3.50976 1.8335 3.33295 1.8335C3.15614 1.8335 2.98657 1.90373 2.86155 2.02876C2.73652 2.15378 2.66628 2.32335 2.66628 2.50016V4.62016C2.28018 4.7603 1.94659 5.01592 1.71084 5.35227C1.4751 5.68863 1.34863 6.08942 1.34863 6.50016C1.34863 6.91091 1.4751 7.3117 1.71084 7.64805C1.94659 7.98441 2.28018 8.24003 2.66628 8.38016V14.5002C2.66628 14.677 2.73652 14.8465 2.86155 14.9716C2.98657 15.0966 3.15614 15.1668 3.33295 15.1668C3.50976 15.1668 3.67933 15.0966 3.80436 14.9716C3.92938 14.8465 3.99962 14.677 3.99962 14.5002V8.38016C4.38572 8.24003 4.71931 7.98441 4.95506 7.64805C5.1908 7.3117 5.31727 6.91091 5.31727 6.50016C5.31727 6.08942 5.1908 5.68863 4.95506 5.35227C4.71931 5.01592 4.38572 4.7603 3.99962 4.62016ZM3.33295 7.16683C3.2011 7.16683 3.0722 7.12773 2.96257 7.05448C2.85294 6.98122 2.76749 6.8771 2.71703 6.75529C2.66657 6.63347 2.65337 6.49942 2.67909 6.3701C2.70482 6.24078 2.76831 6.12199 2.86155 6.02876C2.95478 5.93552 3.07357 5.87203 3.20289 5.84631C3.33221 5.82058 3.46626 5.83378 3.58807 5.88424C3.70989 5.9347 3.81401 6.02015 3.88726 6.12978C3.96052 6.23942 3.99962 6.36831 3.99962 6.50016C3.99962 6.67697 3.92938 6.84654 3.80436 6.97157C3.67933 7.09659 3.50976 7.16683 3.33295 7.16683Z" fill="#1F1D14" />
                                    </svg>
                                    <p className="text-[20px] not-italic font-normal leading-normal text-[#1F1D14]">
                                        Сравнить
                                    </p>
                                </button>

                            </li>
                            <li className='flex items-center mt-[100px] gap-[5px]'>
                                <Image src={Share} alt='share' />
                                <p className='#1F1D14'>Поделиться:</p>

                            </li>
                            <li></li>
                        </div>
                    </div>
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
