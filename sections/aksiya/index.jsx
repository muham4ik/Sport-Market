import Card from "../../components/ui/card"
import { Left, Right } from "@assets/index"
import Image from "next/image"
const index = () => {
  return (
    <>
      <div className="container">
        <div className="main">
        <div className="ahsiya_top flex items-center justify-between py-[30px]">
          <h1 className="text-[32px] not-italic font-medium leading-normal text-[#1F1D14]">Акция</h1>
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
        <Card />
        </div>
        
      </div>

    </>
  )
}

export default index