"use client"
import { AdvImg } from "../../../public/adentage-image";
import Image from "next/image";

const index= () => {
    return (
        <div className="cards flex items-center gap-[24px] sm:flex-col">
            {AdvImg.map((item, index) => (
                <div className="card flex flex-col items-start gap-[30px] bg-[#ffff] rounded-[8px] sm:w-[300px]" key={index}>
                    <div className="card_header pt-[60px] pl-[40px]">
                        <Image
                            src={item.image}
                            width={200} 
                            height={200} 
                            alt={item.description} 
                        />
                    </div>
                    <div className="card_footer pb-[99px] pl-[40px] pr-[70px]">
                        <p className="text-[20px] sm:text-center not-italic font-normal leading-normal">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default index;
