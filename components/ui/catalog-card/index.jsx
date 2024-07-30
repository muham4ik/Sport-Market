"use client"

import { CtlImg } from "@/public/catalog-image";
import Image from "next/image";
import { useState } from "react";

const Index = () => {
    const [clicked, setClicked] = useState(true);

    return (
        <>
        <main className="mb-[80px] sm:mb-[20px] bg-[#ffff]">
            <div className="container sm:mx-4">
                    <div className="carousel" onClick={() => setClicked(c => !c)}>
                        <div className="carousel-track">
                            {CtlImg.map((item, index) => (
                                <div
                                    className="card"
                                    style={{ background: item.bacround, opacity: 0.9 }}
                                    key={index}
                                >
                                    <div className="card_header mb-[16px] ">
                                        <h1 className="text-[#000] sm:text-[14px] text-[20px] not-italic font-normal leading-normal">{item.title}</h1>
                                    </div>
                                    <div className="card_footer flex justify-center items-center">
                                        <Image src={item.img} alt={item.title} width={126} height={102} />
                                    </div>
                                </div>
                            ))}
                            {CtlImg.map((item, index) => (
                                <div
                                    className="card"
                                    style={{ background: item.bacround, opacity: 0.9 }}
                                    key={index}
                                >
                                    <div className="card_header mb-[16px]">
                                        <h1 className="text-[#000]  text-[20px] sm:text-[14px]  not-italic font-normal leading-normal">{item.title}</h1>
                                    </div>
                                    <div className="card_footer flex justify-center items-center">
                                        <Image src={item.img} alt={item.title} width={126} height={102} className="sm:w-[112px] sm:h-[82]" />
                                    </div>
                                </div>
                            ))}
                               {CtlImg.map((item, index) => (
                                <div
                                    className="card"
                                    style={{ background: item.bacround, opacity: 0.9 }}
                                    key={index}
                                >
                                    <div className="card_header mb-[16px]">
                                        <h1 className="text-[#000]  text-[20px] sm:text-[14px]  not-italic font-normal leading-normal">{item.title}</h1>
                                    </div>
                                    <div className="card_footer flex justify-center items-center">
                                        <Image src={item.img} alt={item.title} width={126} height={102} className="sm:w-[112px] sm:h-[82]" />
                                    </div>
                                </div>
                            ))}
                             {CtlImg.map((item, index) => (
                                <div
                                    className="card"
                                    style={{ background: item.bacround, opacity: 0.9 }}
                                    key={index}
                                >
                                    <div className="card_header mb-[16px]">
                                        <h1 className="text-[#000]  text-[20px] sm:text-[14px]  not-italic font-normal leading-normal">{item.title}</h1>
                                    </div>
                                    <div className="card_footer flex justify-center items-center">
                                        <Image src={item.img} alt={item.title} width={126} height={102} className="sm:w-[112px] sm:h-[82]" />
                                    </div>
                                </div>
                            ))}
                             {CtlImg.map((item, index) => (
                                <div
                                    className="card"
                                    style={{ background: item.bacround, opacity: 0.9 }}
                                    key={index}
                                >
                                    <div className="card_header mb-[16px]">
                                        <h1 className="text-[#000]  text-[20px] sm:text-[14px]  not-italic font-normal leading-normal">{item.title}</h1>
                                    </div>
                                    <div className="card_footer flex justify-center items-center">
                                        <Image src={item.img} alt={item.title} width={126} height={102} className="sm:w-[112px] sm:h-[82]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
            </main>
            <style jsx>{`
                .carousel {
                    width: 100%;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 300px;
                }

                .carousel-track {
                    display: flex;
                    gap: 20px;
                    animation: ${clicked ? "scroll 25s linear infinite" : "none"};
                }

                .carousel img {
                    width: 100px;
                    height: auto;
                    object-fit: cover;
                    flex-shrink: 0;
                }

                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .card {
                    width: 187px;
                    height: 247px;
                    padding: 25px 30px 37px 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease-in-out;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .card:hover {
                    transform: scale(1.05);
                }

                .card_header {
                    text-align: start;
                }

                .card_footer {
                    text-align: center;
                }

                @media (max-width: 1024px) {
                    .carousel-track {
                        gap: 30px;
                    }

                    .card {
                        width: 160px;
                        height: 210px;
                        padding: 20px 25px 30px 15px;
                    }

                    .carousel img {
                        width: 80px;
                    }
                }

                @media (max-width: 768px) {
                    .carousel-track {
                        gap: 20px;
                    }

                    .card {
                        width: 140px;
                        height: 190px;
                        padding: 15px 20px 25px 10px;
                    }

                    .carousel img {
                        width: 60px;
                    }
                }

                @media (max-width: 480px) {
                    .carousel {
                        height: 200px;
                    }

                    .carousel-track {
                        gap: 10px;
                    }

                    .card {
                        width: 120px;
                        height: 170px;
                        padding: 10px 15px 20px 5px;
                    }

                    .carousel img {
                        width: 50px;
                    }
                }
            `}</style>
        </>
    );
};

export default Index;
