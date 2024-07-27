import { NewsCard } from "@/components"
import Image from "next/image"
import { Left, Right } from "@assets/index"
const index = () => {
  return (
    <>
      <div className="main mb-[66px]">
        <div className="container">
          <div className="ahsiya_top flex items-center justify-between py-[30px]">
            <h1 className="text-[32px] not-italic font-medium leading-normal text-[#1F1D14]">Новинки</h1>
            <ul className="flex items-center gap-[25px]">
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