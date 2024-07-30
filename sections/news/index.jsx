import { NewsCard } from "@/components"
import Image from "next/image"
import { Left, Right } from "@assets/index"
const index = () => {
  return (
    <>
      <div className="main mb-[66px]">
        <div className="container">
          <div className="ahsiya_top flex justify-between items-start  sm:items-center sm:flex-row sm:justify-between py-[30px]">
            <div className="flex  sm:items-center sm:justify-center w-full">
              <h1 className="text-[32px] not-italic font-medium leading-normal text-[#1F1D14] sm:text-center">
                Новинки
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
          <NewsCard />
        </div>

      </div>

    </>
  )
}

export default index