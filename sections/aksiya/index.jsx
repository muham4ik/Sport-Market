import Card from "../../components/ui/card";
import { Left, Right } from "@assets/index";
import Image from "next/image";

const Index = () => {
  return (
    <>

<div className="main">
      <div className="container ">
          <div className="ahsiya_top flex items-center justify-between  py-[30px] sm:py-[15px]">
            <div className="card_header mb-[16px] sm:mb-[8px] flex sm:items-center sm:justify-center w-full">
              <h1 className="text-[32px] not-italic font-medium leading-normal sm:text-center text-[#1F1D14]">
                Акция
              </h1>
            </div>
            <ul className="flex items-center gap-[25px] sm:hidden ">
              <li className="rounded-[50%] p-[13px] bg-[#fff] cursor-pointer">
                <Image src={Left} />
              </li>
              <li className="rounded-[50%] p-[13px] bg-[#fff] cursor-pointer">
                <Image src={Right} />
              </li>
            </ul>
          </div>
          <Card />
        </div>
      </div>
    </>
  );
};

export default Index;
