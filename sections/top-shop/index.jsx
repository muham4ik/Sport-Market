import { TopShop } from "@/components"
import Image from "next/image"
import { Left, Right } from "@assets/index"
const index = () => {
  return (
    <>
      <div className="main mb-[50px]">
        <div className="container">
        <div className="ahsiya_top flex sm:flex-col items-center  sm:justify-between py-[30px]">
            <div className="flex items-center justify-between sm:justify-center w-full">
              <h1 className="text-[32px] not-italic font-medium leading-normal text-[#1F1D14] text-center">
              ТОП продажа
              </h1>
            </div>
            <ul className="flex items-center gap-[25px] sm:hidden">
              <li className="rounded-[50%] p-[13px] bg-[#fff] cursor-pointer">
                <Image
                  src={Left}
                />
              </li>
              <li className="rounded-[50%] p-[13px] bg-[#fff] cursor-pointer ">
                <Image
                  src={Right}
                />
              </li>
            </ul>

          </div>
          <TopShop />
        </div>

      </div>

    </>
  )
}

export default index