"use client";

import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "../../components";
import { Hom, Right, Trash, OrgImg } from "../../public/assets";
import { useState, useEffect } from "react";
import { gettProduct, deleteProduct } from "../../service/bascet";

const Page = () => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState([]);
  const [error, setError] = useState(null);
  const productId = sessionStorage.getItem('productId');

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        const data = await gettProduct();
        setProductData(data || []);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      // Handle case where productId is present if needed
    } else {
      fetchProductData();
    }
  }, [productId]);

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const delPRo = async (id) => {
    if (!id) {
      console.error("No product ID provided");
      return;
    }

    try {
      await deleteProduct(id);
      // Refresh the product data after deletion
      await fetchProductData();
    } catch (error) {
      console.error("Error deleting product:", error);
      setError(error);
    }
  };

  return (
    <>
      <div className="main mt-[200px] sm:mt-[180px]">
        <Header />
        <div className="container">
          <ul className="navigate flex items-center sm:mx-3 gap-[6px] py-[20px]">
            <li className="flex gap-[6px] items-center">
              <Image src={Hom} alt="Home icon" width={16} height={16} />
              <Link href="/" className="text-[16px] not-italic font-normal leading-normal text-[#000]">Главная</Link>
            </li>
            <li className="flex gap-[6px] items-center">
              <Image src={Right} alt="Right arrow icon" width={16} height={16} />
              <p className="text-[16px] not-italic font-normal leading-normal text-[#1F1D14]">Корзина</p>
            </li>
          </ul>

          <div className="korzina flex items-start gap-[24px] mb-[120px] sm:mb-[40px] sm:w-[300px] sm:flex-col sm:mx-auto">
            <div className="korzine_left flex flex-col gap-[15px] sm:w-[300px] w-[950px] sm:px-2 py-[20px] px-[30px] bg-white rounded-[8px]">
              <ul className="flex justify-between sm:justify-start sm:gap-[40px] items-center">
                <li><h1 className="text-[24px] sm:text-[20px] font-medium">Ваша корзина</h1></li>
                <li><p className="text-[14px] text-[#FF1313] not-italic">Очистить все</p></li>
              </ul>
              <div className="korzina_product flex flex-col bg-[#fff] gap-[12px] rounded-lg">
                {loading && <p className="text-center text-[#1F1D14]">Yuklanmoqda...</p>}
                {error && <p className="text-center text-[#FF1313]">Xatolik: {error.message}</p>}
                {productData.length > 0 ? productData.map((item, index) => (
                  <ul key={index} className="flex items-center gap-[22px] sm:gap-3 sm:p-2 p-[10px] bg-[#F2F2F2]">
                    <Image
                      src={item.image_url[0] || OrgImg}
                      alt={`Product image ${index + 1}`}
                      className="sm:w-[85px]"
                      width={145}
                      height={145}
                    />
                    <li className="flex flex-col sm:gap-[15px] gap-[29px]">
                      <h1 className="text-[20px] sm:text-[15px] sm:leading-normal text-[#1F1D14]">
                        {item.product_name || "Гантель виниловая, 2 х 3 кг Гантель"}
                      </h1>
                      <div className="flex items-center sm:gap-[10px] gap-[40px]">
                        <ul className="flex items-center sm:gap-[10px] gap-[25px]">
                          <button onClick={handleDecrease} className="text-[22px] sm:text-[14px]">-</button>
                          <p className="text-[20px] sm:text-[16px]">{quantity}</p>
                          <button onClick={handleIncrease} className="text-[22px] sm:text-[14px]">+</button>
                        </ul>
                        <div className="flex items-center gap-[5px]">
                          <h1 className="text-[22px] font-bold text-[#000] sm:text-[15px] sm:leading-normal sm:font-medium">
                            {item.cost || "300 000"}
                          </h1>
                          <span className="text-[16px] sm:text-[14px]">UZS</span>
                        </div>
                      </div>
                    </li>
                    <button onClick={() => delPRo(item.id)} className="rounded-[50%] ml-[200px] sm:ml-0 sm:p-2 p-[9px] bg-white">
                      <Image src={Trash} alt="Trash icon" width={18} height={18} />
                    </button>
                  </ul>
                )) : (
                  <p className="text-center text-[#1F1D14]">Savat bo&apos;sh</p>
                )}
              </div>
              <ul className="flex flex-col py-[63px] sm:py-5 pr-[400px] sm:px-2 gap-[20px]">
                <Link href="#" className="text-[20px] w-[277px] sm:w-full sm:text-[18px] sm:text-center border-b-[#06F] text-[#06F] border-b">
                  Все информация о доставке
                </Link>
                <p className="text-[#000] text-[20px] sm:text-[17px] sm:text-center">
                  Если у вас имеются вопросы, позвоните по номеру:
                  <Link href="tel:+998999955565" className="sm:hidden">+998 (99) 995 55 65</Link>
                </p>
                <Link href="tel:+998999955565" className="hidden sm:block sm:text-center sm:font-semibold">+998 (99) 995 55 65</Link>
              </ul>
            </div>
            <div className="korzina_right flex w-full flex-col py-[20px] px-2 bg-white rounded-[8px]">
              <h1 className="text-[20px] font-medium text-[#1F1D14]">Итого</h1>
              <ul className="flex justify-between">
                <li className="flex flex-col gap-[5px] mt-[15px]">
                  <p className="text-[20px] text-[#1F1D14]">Кол-во товаров:</p>
                  <span className="text-[20px] text-[#1F1D14] font-medium">4</span>
                </li>
                <li className="flex flex-col gap-[5px] mt-[15px]">
                  <p className="text-[20px] text-[#1F1D14]">Сумма:</p>
                  <span className="flex items-center gap-[5px]">
                    <p className="text-[#1F1D14] text-[24px] font-medium">250 000</p>
                    <p className="text-[16px] text-[#1F1D14]">UZS</p>
                  </span>
                </li>
              </ul>
              <form action="" className="flex flex-col gap-[19px]">
                <h1 className="text-[20px] text-[#1F1D14] font-medium leading-normal">Ваши данные</h1>
                <li className="flex flex-col gap-[18px]">
                  <p className="text-[16px] text-[#1F1D14]">Имя / Фамилия *</p>
                  <input type="text" placeholder="Имя / Фамилия" className="py-[18px] px-[20px] bg-[#F2F2F2] rounded-[8px] placeholder:text-[20px] placeholder:text-[#1F2D14]" />
                </li>
                <li className="flex flex-col gap-[18px]">
                  <p className="text-[16px] text-[#1F1D14]">Телефон *</p>
                  <input type="text" placeholder="Телефон" className="py-[18px] px-[20px] bg-[#F2F2F2] rounded-[8px] placeholder:text-[20px] placeholder:text-[#1F2D14]" />
                </li>
                <li className="flex flex-col gap-[18px]">
                  <p className="text-[16px] text-[#1F1D14]">Адрес *</p>
                  <input type="text" placeholder="Адрес" className="py-[18px] px-[20px] bg-[#F2F2F2] rounded-[8px] placeholder:text-[20px] placeholder:text-[#1F2D14]" />
                </li>
                <button type="submit" className="bg-[#06F] text-[#FFFFFF] py-[20px] px-[30px] rounded-[8px] text-[20px] font-medium">
                  Оформить заказ
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
