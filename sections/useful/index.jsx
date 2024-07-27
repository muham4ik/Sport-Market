import Image from "next/image"
import { Eye, Calendar, Kreslo } from "@/public/assets"
const index = () => {
  return (
    <>
      <div className="main mb-[80px]">
        <div className="container">
          <div className="useful">
            <h1 className="text-[#1F1D14] text-[32px] not-italic font-medium leading-normal mb-[31px]">Полезное</h1>
            <div className="useful_main flex gap-[58px] ">
              <div className="useful_left flex flex-col bg-[#fff] w-[608px]  pt-[38px] pb-[45px] pl-[35px] pr-[111px] ">
                <h1 className="text-[#1F1D14] text-[32px] not-italic font-medium  leading-normal ">Как правильно выбрать эллиптический тренажер?</h1>
                <p className="text-[17px] not-italic font-[Roboto] font-normal leading-[22px] ">Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...</p>

                <ul className="flex items-start gap-[39px] mt-[124px]">
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
              <div className="useful_right  flex flex-col bg-[#fff] w-[608px]">
                <div className="useful_right-top py-[17px] px-[145px]">
                  <Image
                    src={Kreslo}
                    width={"318px"}
                    height={"315px"}
                  />
                </div>
                <div className="nimadur p-[15px] bg-[#f2f2f2] w-full">

                </div>
                <button className=" bg-[#fff] py-[20px] px-[250px] flex justify-center text-[#000] text-[16px] not-italic font-normal leding-[22px] ">Посмотрет</button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default index