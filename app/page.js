import page from "../sections"
import { Footer, Header, Navigate } from "../components"
export default function Home() {
  return (
    <div className="container_fluid flex  flex-col items-center justify-between">
      <Header />
      <main className=" flex flex-col ">
        {page.map((item, index) => (
          <section key={index}>
            {item.section}
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
