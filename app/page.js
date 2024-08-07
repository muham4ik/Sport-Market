"use client"

import { useState, useEffect } from "react";
import page from "../sections";
import { Footer, Header, } from "../components";

export default function Home() {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false); 
    }, 300); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="container_fluid flex flex-col items-center justify-between">
      <Header />
      <main className="flex flex-col">
        {loading ? (
          <div className="main h-screen sm:h-screen flex justify-center items-center">
            <h1 className="text-[32px] not-italic font-semibold text-center">
              Загрузка...
            </h1>
          </div>
        ) : (
          page.map((item, index) => (
            <section key={index}>
              {item.section}
            </section>
          ))
        )}
      </main>
      <Footer />
    </div>
  );
}
