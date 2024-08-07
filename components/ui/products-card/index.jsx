"use client";

import Image from "next/image";
import { postLike, removeFromWishlist } from "../../../service/wishlist";
import { Korzina, HeartIcon } from "../../../public/assets";
import { getProduct } from "../../../service/product";
import { postProduct } from "../../../service";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Index = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch product data
  const getData = async () => {
    try {
      const response = await getProduct(4, 1);
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (id) => {
    router.push(`/single/${id}`);
  };

  const handleWishlistClick = async (id) => {
    try {
      const product = data.find((item) => item.product_id === id);
      if (!product) return;

      if (product.liked) {
        // Placeholder for removeFromWishlist function
        // await removeFromWishlist(id);
      } else {
        await postLike(id);
      }

      // Update the list of products
      setData((prevData) =>
        prevData.map((item) =>
          item.product_id === id
            ? { ...item, liked: !item.liked }
            : item
        )
      );
    } catch (error) {
      console.error('Error updating wishlist:', error);
    }
  };

  const handleAddToBasket = async (id) => {
    try {
      // Add the product to the basket
      await postProduct(id);

      // Navigate to the basket page
      router.push('/korzina');
    } catch (error) {
      console.error('Error adding product to basket:', error);
    }
  };

  return (
    <div className="container flex justify-around relative flex-wrap  gap-4 md:gap-8">
      {loading ? (
        <div className="main h-[200px]  flex justify-center items-center">
          <h1 className="text-[32px] not-italic font-semibold text-center">
            Загрузка...
          </h1>
        </div>
      ) : data.length === 0 ? (
        <div className="main h-[200px] flex justify-center items-center">
          <h1 className="text-[32px] not-italic font-semibold text-center">
            Пожалуйста, пройдите регистрацию снова ♻️
          </h1>
        </div>
      ) : (
        data.map((item) => (
          <div className="card rounded-[5px] w-[292px] bg-[#ffff] shadow-md" key={item.product_id}>
            <div className="relative card_header flex justify-end p-[10px]">
              <button
                className={`relative p-2 rounded-full ${item.liked ? 'bg-red-500' : 'bg-gray-200'} transition-colors duration-300`}
                onClick={() => handleWishlistClick(item.product_id)}
              >
                <Image
                  src={HeartIcon}
                  alt="Heart icon"
                  width={24} 
                  height={24} 
                />
                {item.liked && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-500 opacity-40 rounded-full w-[24px] h-[24px]" />
                  </div>
                )}
              </button>
            </div>
            <div className="card_body flex justify-center">
              <Image
                className="h-[200px] pb-[25px] cursor-pointer"
                src={item.image_url[0]}
                alt={item.product_name}
                width={200}
                height={100}
                onClick={() => handleClick(item.product_id)}
              />
            </div>
            <div className="card_footer h-[100px] pl-[20px] mb-[18px] flex flex-col justify-between p-3">
              <h1 className="text-[20px] not-italic font-medium leading-normal text-[#000000]">
                {item.product_name || 'Product Name'}
              </h1>
              <p className="text-[20px] not-italic font-semibold leading-normal text-[#1F1D14]">
                {item.cost ? `${item.cost} UZS` : 'Price'}
              </p>
            </div>
            <button
              onClick={() => handleAddToBasket(item.product_id)}
              className="w-full flex items-center gap-[6px] py-[15px] px-[91px] bg-[#FBD029] justify-center rounded-b-[5px]"
            >
              <Image
                src={Korzina}
                alt="cart"
              />
              <p>Корзина</p>
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Index;
