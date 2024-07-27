import Image from "next/image"
import Frame from "../../public/assets/icons/polniy.svg"
const index = () => {
  return (
    <>
    <div className="caousel flex ">
      <div className="carousel_left flex flex-col w-[343px]">
      <h1 className="text-[32px] not-itelic font-extrabold leading-[47px]">Бутсы Nike Phantom GT2 Elite FG</h1>
      <button className="py-[15px] px-[22px] rounded-[10px] border-[2px] w-[145px] border-[#FBD029]">Подробности</button>
      </div>
      <div className="carousel_right">
      <Image
      src={Frame}
      />
      </div>
    </div>
    </>
  )
}

export default index