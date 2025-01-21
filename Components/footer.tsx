import Image from "next/image";
import Link from "next/link";
import {RiTwitterLine,RiFacebookLine,RiInstagramLine,RiGithubLine} from 'react-icons/ri'

export default function Footer() {
  return (
    <div className="mt-[20px] ">
      
      <div className="max-sm:w-[358px] max-sm:h-[293px] max-sm:left-4 max-sm:grid  w-[1240px] h-[180px] bg-[#000000] relative left-[65px] ">
        <h3 className="max-sm:w-[297px] max-sm:h-[195px] max-sm:text-[32px] max-sm:left-[16px] w-[551px] h-[94px] pt-[50px] relative left-[90px] font-bold leading-[49px] text-[40px]  text-[#ffffff] ">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h3>
        <div className="max-sm:ml-[0px] max-sm:mt-[2px] 4 w-[349px] h-[108px] gap-[14px] relative ml-[950px] mt-[-50px] ">
        <input  type="email" className="max-sm:w-[311px] max-sm:h-[42px] max-sm:left-[0px]  bg-[#F0F0F0] rounded-[62px] relative pt-[12px] pr-[16px] pb-[12px] pl-[16px] " placeholder="Enter your email address"></input>
        <input className=" max-sm:h-[42px] max-sm:w-[311px] max-sm:mb-[8px]  bg-[#F0F0F0] text-[16px] font-medium rounded-[62px] relative pt-[12px] pr-[16px] pb-[12px] pl-[16px] mt-2 leading-[21.6px] text-[#000000] " type="search" placeholder="Subscribe to Newsletter ">

        </input>

      </div>
      </div>
      
      <section className="max-sm:w-[390px] max-sm:mt-[-80px]  max-sm:left-[16px] w-[1240px] h-[177px] justify-between relative flex left-[100px] text-[#000000] max-sm:grid">
        <div className="w-[248px] h-[177px] gap-[35px] mt-[100px] ">
            <h3 className="max-sm:w-[144px] max-sm:h-[20px] max-sm:ml-4  font-bold text-[33.45px] max-sm:font-bold max-sm:text-[28.85px]  leading-[40.15px] text-[#000000] ">SHOP.CO</h3>
            <p className="max-sm:w-[357px] max-sm:h-[40px]   font-normal mt-[25px] leading-[22px] text-[14px] ">We have clothes that suits your style and which you re proud to wear. From women to men.</p>
            <div className="flex gap-[8px] mt-[25px] ">
            <Link  href='https://www.youtube.com/@knowledgelearning9352' target="_blank" className="rounded-[45px] border-[0.01px] text-[#000000]  border-[#000000] text-4xl hover:text-accent transition-all duration-300">
      <RiTwitterLine />
    </Link>
    <Link href={'https://www.facebook.com/groups/962710811500396/?ref=share'} className="text-4xl rounded-[45px] border-[0.1px] bg-[#000000] text-[#ffffff] hover:text-accent transition-all duration-300">
      <RiFacebookLine />
    </Link><Link href={''} className="text-4xl rounded-[45px] border-[0.1px] hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>
    <Link href={'https://www.facebook.com/groups/962710811500396/?ref=share'} className="text-4xl rounded-[45px] border-[0.1px] hover:text-accent transition-all duration-300">
      <RiGithubLine />
      </Link>
            </div>

        </div>
        <div className="flex ">
        <div className="max-sm:w-[91px] max-sm:h-[140px] w-[104px] h-[77px] gap-[26px] mt-[100px]  ">
            <h3 className="font-bold text-[16px]  leading-[18px] text-[#000000] ">COMPANY</h3>
            <div className="list-none mt-[26px] ">
            <li className="font-normal text-[16px] leading-[19px] ">About</li>
            <li className="list-none mt-[26px] ">Features </li>
             <li className="list-none mt-[26px] ">Works </li>
             <li className="list-none mt-[26px] ">Careers</li>
             </div>


        </div>
        <div className="max-2xl:left-[85px] w-[136px] h-[177px] relative gap-[26px] mt-[100px]  ">
            <h3 className="font-bold text-[16px]  leading-[18px] text-[#000000] ">HELP</h3>
            <div className="font-normal text-[16px] relative gap-[26px]  leading-[19px] list-none mt-[26px] ">
               <li className="gap-[26px] relative mb-[26px] ">Customer Support</li>
               <li className="mb-[26px] ">Delivery Details</li> 
               <li className="mb-[26px]">Term & Conditions</li>
               <li className="mb-[26px]">Privacy Policy </li>
            </div>

        </div>
        </div>

        {/* faq */}
        <div className="flex">
        <div className="max-2xl:left-[-59px] relative w-[149px] h-[177px] gap-[26px] mt-[100px]  ">
            <h3 className="font-bold text-[16px]  leading-[18px] list-none  text-[#000000] ">FAQ</h3>
            <div className="list-none mt-[26px] ">
            <li className="font-normal text-[16px]  leading-[19px] ">Account</li>
            <li className="list-none mt-[26px] ">Manage Deliveries </li>
             <li className="list-none mt-[26px] ">   Orders </li>
             <li className="list-none mt-[26px] ">   Payments </li>
             </div>
            

        </div>

        {/* resources */}
        <div className="w-[149px] h-[177px] gap-[26px] mt-[100px]  ">
            <h3 className="font-bold text-[16px] list-none  leading-[18px] text-[#000000] ">RESOURCES</h3>
            <div className="list-none mt-[26px] ">
            <li className="font-normal text-[16px]  leading-[19px] ">Free eEbooks</li>
            <li className="list-none mt-[26px] ">Development Tutorials </li>
             <li className="list-none mt-[26px] ">How to-Blog </li>
             <li className="list-none mt-[26px] ">Youtube Playlist </li>
             </div>

        </div>
        </div>


        </section>
        <div className="w-[1240px] h-[1.5px] mt-[230px] relative left-[100px] bg-black "></div>
           <div className="flex">
            <p className="max-sm:w-[520px] max-sm:h-[19px] max-sm:pl-[16px] max-sm:mt-[489px] mt-[19px] relative text-[14px] pl-[100px] ">Shop.co © 2000-2023, All Rights Reserved</p>

            <div className="max-sm:w-[240px] max-sm:h-[25.5px] max-sm:mt-[545px] max-sm:left-[-210px] flex mt-[19px] relative left-[691px] gap-[12px]  ">
            <Image
              className="w-[46.61px] h-[30.03px] rounded-[5.38px] border-[0.22px]   "
              src={"/Badge.png"}
              alt="icon image"
              width={70.61}
              height={30.03}
            ></Image>
            <Image
              className="w-[46.61px] h-[30.03px] rounded-[5.38px] border-[0.22px]   "
              src={"/Badge (1).png"}
              alt="icon image"
              width={46.61}
              height={30.03}
            ></Image>
            <Image
              className="w-[46.61px] h-[30.03px] rounded-[5.38px] border-[0.22px]   "
              src={"/Badge (2).png"}
              alt="icon image"
              width={76.61}
              height={50.03}
            ></Image>
            <Image
              className="w-[46.61px] h-[30.03px] rounded-[5.38px] border-[0.22px]   "
              src={"/Badge (3).png"}
              alt="icon image"
              width={76.61}
              height={50.03}
            ></Image>
            <Image
              className="w-[46.61px] h-[30.03px] rounded-[5.38px] border-[0.22px]   "
              src={"/Badge (4).png"}
              alt="icon image"
              width={76.61}
              height={50.03}
            ></Image>
            </div>
           </div>
    </div>
  );
}