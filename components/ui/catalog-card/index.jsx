"use client"

import { CtlImg } from "@/public/catalog-image";
import Image from "next/image";
import { useState } from "react";

const Index = () => {
    const [clicked, setClicked] = useState(true);
  return (
    <>


      <div className="container">
      <main className="mb-[80px] bg-[#ffff]">
        <div className="carousel" onClick={() => setClicked((c) => !c)}>
          <div className="carousel-track">
          {CtlImg.map((item, index) => (
            <div
              className="card w-[187px] h-[247px] pt-[25px] pb-[37px] pl-[20px] pr-[30px]"
              style={{ background: item.bacround, opacity: 0.9 }}
              key={index}
            >
              <div className="card_header mb-[16px]">
                <h1 className="text-[#000] h-[48px] text-[20px] not-italic font-normal leading-normal">{item.title}</h1>
              </div>
              <div className="card_footer flex justify-center items-center">
                <Image src={item.img} alt={item.title} width={126} height={102} />
              </div>
            </div>
          ))}
            {CtlImg.map((item, index) => (
            <div
              className="card w-[187px] h-[247px] pt-[25px] pb-[37px] pl-[20px] pr-[30px]"
              style={{ background: item.bacround, opacity: 0.9 }}
              key={index}
            >
              <div className="card_header mb-[16px]">
                <h1 className="text-[#000] h-[48px] text-[20px] not-italic font-normal leading-normal">{item.title}</h1>
              </div>
              <div className="card_footer flex justify-center items-center">
                <Image src={item.img} alt={item.title} width={126} height={102} />
              </div>
            </div>
          ))}
          </div>
        </div>
      </main>
      </div>

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
          gap:50px;
          animation: ${clicked ? "scroll 25s linear infinite" : "none"};
        }

        .carousel img {
          width: 100px;
          height: 100%;
          display:flex:
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
        .cards {
          display: flex;
          flex-wrap: wrap;
          gap: 31px;
        }

        .card {
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease-in-out;
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
      `}</style>
    </>
  );
};

export default Index;
