import Link from "next/link"


const index = () => {
  return (
    <>
      <div className="main mb-[80px]">
        <div className="container">
          <div className="about">
            <h1 className="text-[#1F1D14] text-[32px] not-italic font-medium leading-normal mb-[31px] sm:text-center">О нас</h1>

            <div className="about_bottom bg-[#1F1D14] flex flex-col gap-[15px] rounded-[8px] ">
              <p className="pt-[80px] sm:p-4 sm:text-[18px] sm:leading-normal pb-[15px] pl-[80px] pr-[259px] text-[20px] not-italic font-normal leading-[28px] text-[#fff] sm:px-[500px]">
                Интернет магазин спортивных товаров <Link href="#"><b>7MARKETSPORT.UZ</b></Link> предлагает широкий ассортимент продукции с доставкой по Ташкенту, области и другим регионам Узбекистана. Ведется работа как с розничными покупателями, так и с оптовыми клиентами. Разнообразие форм оплаты заметно упрощает процесс приобретения товара. Действует гибкая система скидок. Разнообразие форм оплаты заметно упрощает процесс приобретения товара. Действует гибкая система скидок.
              </p>

              <span className="flex sm:hidden justify-end pr-[100px] pb-[50px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="85" height="40" viewBox="0 0 85 40" fill="none">
                  <g opacity="0.78">
                    <path d="M2 19.9087H84C78.0364 20.572 66.1091 17.9189 66.1091 2" stroke="white" stroke-width="4" stroke-linecap="square" />
                    <path d="M2 20.0913H84C78.0364 19.428 66.1091 22.0811 66.1091 38" stroke="white" stroke-width="4" stroke-linecap="square" />
                  </g>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default index