"use client";
import { Korzina } from "../../../public/assets";
import Image from "next/image";
import { getLike, postLike } from "../../../service/wishlist"
import { useEffect, useState } from "react";
import { HeartIcon } from "../../../public/assets";
export default function Index() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const res = await getLike(10, 1);
            if (res?.data.products) {
                setData(res.data.products);
            }
        } catch (error) {
            console.error("Error fetching wishlist data:", error);
        } finally {
            setLoading(false); // End loading state
        }
    };

    useEffect(() => {
        getData();
    }, []);

    // Toggle wishlist item status
    const handleWishlistClick = async (id) => {
        try {
            const product = data.find((item) => item.product_id === id);
            if (!product) return;

            const response = await postLike(id);
            if (response && response.status === 201) {
                // Update the product list
                setData((prevData) =>
                    prevData.map((item) =>
                        item.product_id === id
                            ? { ...item, liked: !item.liked }
                            : item
                    )
                );
            }
            window.location.reload()
        } 
       
        catch (error) {
            console.error("Error updating wishlist:", error);
        }
    };

    // Redirect to product detail page
    const handleClick = (id) => {
        // Implement redirection logic (if needed)
        console.log(`Redirect to product detail page for ID: ${id}`);
    };

    return (
        <div className="container flex justify-around relative flex-wrap gap-4 md:gap-8">
            {loading ? (
                <div className="main h-[200px] flex justify-center items-center">
                    <h1 className="text-[32px] not-italic font-semibold text-center">
                        Загрузка...
                    </h1>
                </div>
            ) : data.length === 0 ? (
                <div className="main h-[200px] flex justify-center items-center">
                    <h1 className="text-[32px] not-italic font-semibold text-center">
                        Ваша избранная страница пуста 😴 . . .
                    </h1>
                </div>
            ) : (
                data.map((product) => (
                    <div
                        key={product.product_id}
                        className="relative w-[300px] my-4 gap-[24px] bg-white flex flex-col items-center justify-between shadow-md"
                    >
                        <div className="absolute right-[10px] top-[20px] cursor-pointer">
                            <button
                                className={`relative p-1 rounded-full ${product.liked ? 'bg-red-500' : 'bg-gray-200'} transition-colors duration-300`}
                                onClick={() => handleWishlistClick(product.product_id)}
                            >
                                <Image
                                    src={HeartIcon}
                                    alt="Heart icon"
                                    width={24} 
                                    height={24} 
                                    onClick={() => handleClick(product.product_id)}
                                />
                                {product.liked && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-red-500 opacity-40 rounded-full w-[24px] h-[24px]" />
                                    </div>
                                )}
                            </button>
                        </div>
                        <div className="card_body flex justify-center">
                            <Image
                                className="h-[200px] p-3 cursor-pointer"
                                src={product.image_url[0]}
                                alt={product.product_name}
                                width={200}
                                height={100}
                                onClick={() => handleClick(product.product_id)}
                            />
                        </div>
                        <div className="card_footer w-[216px] h-[150px] pl-[20px] mb-[18px] flex flex-col justify-between p-3">
                            <h1 className="text-[20px] not-italic font-medium leading-normal text-[#000000]">
                                {product.product_name || 'Product Name'}
                            </h1>
                            <p className="text-[20px] not-italic font-semibold leading-normal text-[#1F1D14]">
                                {product.cost ? `${product.cost} UZS` : 'Price'}
                            </p>
                        </div>
                        <button className="w-full flex items-center gap-[6px] py-[15px] px-[91px] bg-[#FBD029] justify-center rounded-b-[5px]">
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
}
