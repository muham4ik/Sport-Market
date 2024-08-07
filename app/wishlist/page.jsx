"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Header, Footer, } from '../../components';
import { WishlistCard } from '../../components';
import { Slider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Hom, Right } from "../../public/assets";
import { getLike } from '@/service/wishlist';
import Link from 'next/link';

// Custom Slider for MUI
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

const Page = () => {
  const [products, setProducts] = useState([]);

  // Fetch data from API
  const getData = async () => {
    try {
      const response = await getLike(1, 4);
      console.log('API Response:', response); // Log API response for debugging
      if (response.data.products) {
        setProducts(response.data.products);
      } else {
        console.error('No products found in response:', response.data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    getData();
  }, []);

  // Handle wishlist click
  const handleWishlistClick = async (id) => {
    try {
      const product = products.find((item) => item.product_id === id);
      
      if (!product) return;

      if (product.liked) {
        await removeFromWishlist(id);
      } else {
        await postLike(id);
      }
      
      setProducts((prevProducts) =>
        prevProducts.map((item) =>
          item.product_id === id
            ? { ...item, liked: !item.liked }
            : item
        )
      );
    } catch (error) {
      console.error('Error updating wishlist:', error);
    }
  };

  // Remove product from wishlist
  const removeFromWishlist = async (id) => {
    try {
      await axios.post('/api/wishlist/remove', { productId: id });
    } catch (error) {
      console.error('Error removing product from wishlist:', error);
    }
  };

  // Add product to wishlist
  const postLike = async (id) => {
    try {
      await axios.post('/api/wishlist/add', { productId: id });
    } catch (error) {
      console.error('Error adding product to wishlist:', error);
    }
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
              <p className="text-[16px] not-italic font-normal leading-normal text-[#1F1D14]">Wishlist</p>
            </li>
          </ul>
          <div className="products flex sm:flex-col sm:justify-center sm:items-center gap-[24px]">
            <div className="product_right flex">
              <div className="cards flex sm:flex-col items-center gap-[35px]">
                {products.map(product => (
                  <WishlistCard
                    key={product.product_id}
                    product={product}
                    onClick={() => handleWishlistClick(product.product_id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
