"use client";

import { useState } from "react";
import { Adidas, Armound, Reebok, Puma, Nike } from "@/public/brands-image";
import Image from "next/image";

export default function Index() {
  const [clicked, setClicked] = useState(true);

  return (
    <>
      <div className="container">
        <main className="mb-[80px] bg-[#ffff]">
          <div className="carousel" onClick={() => setClicked((c) => !c)}>
            <div className="carousel-track sm:gap-[50px]">
              <Image src={Adidas} alt="Adidas" />
              <Image src={Armound} alt="Armound" />
              <Image src={Reebok} alt="Reebok" />
              <Image src={Puma} alt="Puma" />
              <Image src={Nike} alt="Nike" />
              <Image src={Adidas} alt="Adidas" /> {/* Tasvirlarni takrorlash uchun */}
              <Image src={Armound} alt="Armound" />
              <Image src={Reebok} alt="Reebok" />
              <Image src={Puma} alt="Puma" />
              <Image src={Nike} alt="Nike" />
              <Image src={Adidas} alt="Adidas" /> {/* Tasvirlarni takrorlash uchun */}
              <Image src={Armound} alt="Armound" />
              <Image src={Reebok} alt="Reebok" />
              <Image src={Puma} alt="Puma" />
              <Image src={Nike} alt="Nike" />
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
          height: 154px;
        }

        .carousel-track {
          display: flex;
          gap:150px;
          animation: ${clicked ? "scroll 15s linear infinite" : "none"};
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
      `}</style>
    </>
  );
}
