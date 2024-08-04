"use client"

import React, { useState } from 'react';

import Image from 'next/image';
import { Header, Footer } from '@/components';
import { Slider, Typography, Box, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Hom, Right, Board, Listt } from "@/public/assets"
import { ProductCard, ProductsCard } from '@/components';
import "./index.css"
import Link from 'next/link';

const CustomSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.primary.main,
    height: 8,
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active': {
            boxShadow: 'inherit',
        },
    },
    '& .MuiSlider-track': {
        height: 8,
        borderRadius: 4,
    },
    '& .MuiSlider-rail': {
        height: 8,
        borderRadius: 4,
    },
}));

const Page = () => { // Kichik harf bilan yozilgan `page` o'rniga katta harf bilan yozing.
    const [value, setValue] = useState([250, 500]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const ValueLabelComponent = (props) => {
        const { children, open, value } = props;

        return (
            <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
                {children}
            </Tooltip>
        );
    };

    return (
        <>
        <div className="main mt-[200px] sm:mt-[180px]">
        <Header />
            <div className="container">
                <ul className="navigate flex items-center gap-[6px] sm:mx-4 py-[20px]">
                    <li className="flex gap-[6px] items-center">
                        <Image src={Hom} alt="Home icon" />
                        <Link href="/" className="text-[16px] not-italic font-normal leading-normal text-[#000]">Главная</Link>
                    </li>
                    <li className="flex gap-[6px] items-center">
                        <Image src={Right} alt="Right arrow icon" width={16} height={16} />
                        <p className="text-[16px] not-italic font-normal leading-normal text-[#1F1D14]">Полезные информации</p>
                    </li>
                </ul>
                <div className="products flex sm:flex-col sm:justify-center sm:items-center gap-[24px]">
                    <div className="products_left">
                        <form action="" className='bg-[#fff] py-[19px] pb-[38px] px-[18px] rounded-[8px] flex flex-col gap-[16px] w-[292px] '>
                            <h1 className='text-[16px] not-italic font-normal leading-normal text-[#000]'>
                                Филтрь
                            </h1>
                            <Box width={256}>
                                <Typography gutterBottom className='p-0 text-[#000] text-[12px] not-italic font-normal leading-normal'>Цена</Typography>

                                <div className="div py-[15px] px-[25px] bg-[#F2F2F2] rounded-[5px]">
                                    <CustomSlider
                                        value={value}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={(value) => `${value}`}
                                        min={250}
                                        max={500}
                                        step={1}
                                        ValueLabelComponent={ValueLabelComponent}
                                        sx={{
                                            '& .MuiSlider-thumb': {
                                                backgroundColor: value[0] < 50 ? '#1F1D14' : '#FBD029',
                                                color: 'black',
                                            },
                                            '& .MuiSlider-track': {
                                                background: `#FBD029`,
                                            },
                                        }}
                                    />
                                    <Typography className='text-center text-[#000] text-[14px] not-italic font-medium leading-normal'>
                                        {` ${value[0]} uzs - ${value[1]} uzs`}
                                    </Typography>
                                </div>
                            </Box>
                            <ul className='flex flex-col items-start gap-[16px] p-0 w-full'>
                                <li className='w-full flex flex-col gap-[10px]'>
                                    <h1 className='text-[16px] not-italic font-normal leading-normal text-[#000]'>Артикул:</h1>
                                    <input type="text" placeholder=' Все' className='placeholder:text-black p-1 h-[40px] bg-[#fff] border outline-none rounded-[5px]' />
                                </li>
                                <li className='w-full flex flex-col gap-[10px]'>
                                    <h1 className='text-[16px] not-italic font-normal leading-normal text-[#000]'>Выберите категорию:</h1>
                                    <select name="" id="" className='border h-[40px] outline-none rounded-[5px] p-1'>
                                        <option value="" className='p-5 h-[30px] text-[16px] not-italic font-normal leading-normal text-[#000]'>
                                            Все
                                        </option>
                                    </select>
                                </li>
                                <li className='w-full flex flex-col gap-[10px]'>
                                    <h1 className='text-[16px] not-italic font-normal leading-normal text-[#000]'>Новинка:</h1>
                                    <select name="" id="" className='border h-[40px] outline-none rounded-[5px] p-1'>
                                        <option value="" className='p-5 h-[30px] text-[16px] not-italic font-normal leading-normal text-[#000]'>
                                            Все
                                        </option>
                                    </select>
                                </li>
                                <li className='w-full flex flex-col gap-[10px]'>
                                    <h1>Акция:</h1>
                                    <select name="" id="" className='border h-[40px] outline-none rounded-[5px] p-1'>
                                        <option value="" className='p-5 h-[30px] text-[16px] not-italic font-normal leading-normal text-[#000]'>
                                            Все
                                        </option>
                                    </select>
                                </li>
                            </ul>
                        </form>
                        <button className='flex w-[292px] justify-center rounded-[5px] rounded-t-[0] bg-[#E4E4E4] opacity-[0.9] py-[15px] px-[77px] text-[15px] font-normal leading-normal text-[#000]'>Показать результат</button>
                    </div>
                    <div className="products_right w-full flex flex-col gap-[17px]">
                        <div className="products_right-top sm:justify-center sm:p-10">
                            <ul className='flex items-center gap-[24px] sm:flex-col'>
                                <select name="" id="" className='py-[7px] px-[15px] rounded-[4px]'>
                                    <option value="" className='text-[16px] not-italic font-normal leading-normal'>Сортировать</option>
                                </select>
                                <select name="" id="" className='py-[7px] px-[15px] rounded-[4px]'>
                                    <option value="" className='text-[16px] not-italic font-normal leading-normal'>Все продукты</option>
                                </select>
                            </ul>
                            <ul className='flex items-center gap-[24px] sm:flex-col'>
                                <li className='flex items-center py-[7px] px-[15px] bg-white gap-[5px] rounded-[4px]'>
                                    <p className='text-[16px]'>Кард</p>
                                    <Image src={Board} alt="Board view" />
                                </li>
                                <li className='flex items-center py-[7px] px-[15px] bg-white gap-[5px] rounded-[4px]'>
                                    <p className='text-[16px]'>Лист</p>
                                    <Image src={Listt} alt="List view" />
                                </li>
                            </ul>
                        </div>
                        <div className="card flex flex-col gap-[40px]">
                            <ProductCard />
                            <button className='py-[15px] flex justify-center text-[20px] not-italic font-normal text-[#000] bg-[white]'>Показать ещё</button>
                        </div>
                    </div>
                </div>
                <div className="product_bottom mt-[111px] flex flex-col gap-[60px] mb-[208px]">
                    <h1 className='text-[31px] text-[#1F1D14] not-italic font-medium sm:text-center'>Реконмендуемые продукты</h1>
                    <ProductsCard />
                </div>
            </div>
            <Footer />
        </div>
          
        </>
    );
};

export default Page;
