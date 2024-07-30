import Image from "next/image"
import { Eye, Calendar, Kreslo } from "@/public/assets"
import Link from "next/link"
const index = () => {
  return (
    <>
      <div className="main mb-[80px]">
        <div className="container mx-2">
          <div className="useful">
            <h1 className="text-[#1F1D14] text-[32px] not-italic font-medium leading-normal mb-[31px] sm:text-center">Полезное</h1>
            <div className="useful_main flex gap-[58px] sm:flex-col sm:justify-center sm:items-center ">
              <div className="useful_left flex flex-col bg-[#fff] sm:w-[300px] w-[608px] sm:p-3  pt-[38px] pb-[45px] pl-[35px] pr-[111px] ">
                <h1 className="text-[#1F1D14] sm:text-[22px]  text-[32px] not-italic  font-medium  leading-normal ">Как правильно выбрать эллиптический тренажер?</h1>
                <p className="text-[17px] not-italic  font-normal leading-[22px] ">Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...</p>

                <ul className="flex items-start gap-[39px] sm:justify-between mt-[124px]">
                  <li className="flex items-center gap-[5px]">
                    <Image
                      src={Calendar}
                    />
                    <p>27.01.2022</p>
                  </li>
                  <li className="flex items-center gap-[5px]">
                    <Image
                      src={Eye}
                    />
                    <p>250</p>
                  </li>
                </ul>
              </div>
              <div className="useful_right  flex flex-col sm:justify-center sm:items-center sm:w-[300px]  bg-[#fff]  w-[608px]">
                <div className="useful_right-top py-[17px] px-[145px] sm:w-[500px]">
                  <Image
                    src={Kreslo}
                    width={"318px"}
                    height={"315px"}
                    className="sm:w-[200px]"
                  />
                </div>
                <div className="nimadur  bg-[#f2f2f2] w-full">
                  <Link
                    href="/news"
                    className="flex justify-center items-center bg-[#fff] py-[20px] px-[16px] sm:px-[24px] hover:bg-[#FBD029] hover:text-white text-[#000] text-[16px] not-italic font-normal leading-[22px] mt-[16px]"
                  >
                    Посмотрет все
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default index