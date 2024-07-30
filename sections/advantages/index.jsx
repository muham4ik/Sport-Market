import { AdvCard } from "@/components"
const index = () => {
  return (
    <>
    <div className="main mb-[80px]">
    <div className="container">
        <div className="adventage flex flex-col gap-[30px]">
          <h1 className="text-[#1F1D14] text-[32px] not-italic font-medium leading-normal sm:text-center">Примущества</h1>
        <AdvCard/>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default index