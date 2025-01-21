// import Link from "next/link";
import Image from 'next/image'
export default function Pricing() {
  return (
    <div className="w-[1440px] h-[134px]">
      <header className="h-[38px] bg-[#000000] max-sm:w-[390px] max-sm:h-[34px] ">
        <h2 className="w-[411px] h-[19px] gap-2 relative top-2 left-[544px] text-[rgb(255,255,255)] font-satoshi font-normal leading-[18.9px] text-[14px] max-ss:justify-start max-ss:bg-yellow-300  max-sm:w-[301px] max-sm:h-[16px] max-sm:left-[20px] ">
          Sign up and get 20% off to your first order. <b className="underline text-[14px] font-medium">Sign Up Now</b>
        </h2>
</header>

      <div className="h-[1240px] w-[48px] text-[#000000] relative top-[24px] left-[100px] gap-[40px] flex">
        <div className="h-[160px] w-[22px] font-bold text-[32px] leading-[34.8px] flex max:sm-text-[25.2px] ">
          SHOP.CO
        
        <div className="h-[321px] w-[22px] relative left-[120px] gap-[24px] ">
          <div className=" w-[360px] gap-[24px] flex font-normal justify-between mt-[5.5px] items-center leading-[21.6px] text-[16px] ">
            <p>Shop</p>
            <Image
              className="w-[16px] h-[16px] relative pt-[2.5px] ml-[-12px]   "
              src={"/Vectorimg.png"}
              alt="icon image"
              width={16}
              height={16}
            ></Image>

            <div className="text-[#000000]">
              <p className="text-[#000000] w-[65px] h-[22px] ">On Sale</p>
            </div>
            <div>
              <p>New Arrivals</p>
            </div>
            <div>
              <p>Brands</p>
            </div>
          </div>
          </div>
        </div>
       
        <div className="h-[577px] w-[48px]    ">
          <input className="bg-[#F0F0F0] rounded-[62px]  relative pt-[10px] pr-[16px] pb-[12px] pl-[16px] left-[670px] max-ss:hidden text-center " type="search" placeholder="Search for products..."></input>

        </div>  

      </div>
    
    </div>
  );
}