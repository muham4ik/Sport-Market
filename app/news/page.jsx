import { Header, Footer } from "@/components";
import Aksiya from "@sections/aksiya";
import Image from "next/image";
import { Eye, Calendar, Hom, Right } from "@/public/assets";
import Link from "next/link";

const Page = () => {
    return (
        <>
        <div className="main mt-[220px] sm:mt-[200px]">
        <Header />
            <div className="main mt-[27px] mb-[80px]">
                <div className="container ">
                    <ul className="navigate flex items-center gap-[6px] sm:px-4">
                        <li className="flex gap-[6px] items-center">
                            <Image src={Hom} alt="Home icon" />
                            <Link href="/" className="text-[16px] not-italic font-normal leading-normal text-[#000]">Главная</Link>
                        </li>
                        <li className="flex gap-[6px] items-center">
                            <Image src={Right} width={16} height={16} alt="Right arrow icon" />
                            <p className="text-[16px] not-italic font-normal leading-normal text-[#1F1D14]">Полезные информации</p>
                        </li>
                    </ul>
                    <h1 className="text-[#1F1D14] mt-[22px] text-[32px] not-italic font-medium leading-normal mb-[31px] sm:text-center sm:text-[24px]">Полезные информации</h1>
                    <div className="useful flex flex-col gap-[58px]">
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
                            <div className="useful_right flex flex-col bg-[#fff] sm:w-[300px] w-[608px] sm:p-3  pt-[38px] pb-[45px] pl-[35px] pr-[111px] ">
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
                        </div>
                        {/* Repeat similar blocks with the appropriate alt text for each Image component */}
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
                            <div className="useful_right flex flex-col bg-[#fff] sm:w-[300px] w-[608px] sm:p-3  pt-[38px] pb-[45px] pl-[35px] pr-[111px] ">
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
                        </div>
                    </div>
                    <Link href="#" className="sm:flex sm:justify-center">
                        <button className="py-[15px] mt-[30px] rounded-[5px] border-[2px] hover:bg-[#FBD029] border-[#FBD029] px-[40px] text-[20px] not-italic leading-normal font-normal">Показать ещё</button>
                    </Link>
                </div>
            </div>
            <div className="nima mb-[80px]">
                <Aksiya />
            </div>
            <Footer />
        </div>
           
        </>
    );
}

export default Page;
