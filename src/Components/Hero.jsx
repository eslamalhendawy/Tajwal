import { Link } from "react-router-dom";

import heroImage from "../assets/heroImage.svg";
import logo from "../assets/logo.svg";

const Hero = () => {
  const linksList = ["ر.س", "English", "اتصل بنا", "مركز المساعدة", "العروض", "الدول", "البداية"];


  return (
    <div className="bg-center bg-cover" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="container mx-auto py-12 px-8 relative">
        <div className="flex items-center justify-between mb-12">
          <div className="flex gap-4 items-center">
            <Link to="/sign-up" className="bg-[#336279] text-white px-8 py-2 rounded-lg">تسجيل</Link>
            <Link to="/login" className="text-white">دخول</Link>
          </div>
          <ul>
            {linksList.map((link, index) => (
              <li key={index} className="inline-block px-4 py-2 text-white cursor-pointer hover:text-[#336279] duration-200">
                {link}
              </li>
            ))}
          </ul>
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
        <h1 className="text-center text-white font-bold text-[40px]">
          ابقى متصلاً{" "}
          <span className="relative">
            <span className="relative z-[1]">اينما كنت</span>
            <div className="bg-[#336279] absolute left-0 bottom-0 h-[20px] w-[102%] rounded-xl z-[0]" />
          </span>
        </h1>
        <h2 className="text-center text-white font-[300] text-[20px] mb-8">في اكثر من 200 دولة</h2>
        <div className="flex justify-center relative w-[40%] mx-auto mb-8">
          <input type="text" className="outline-none rounded-md text-[#626E7B] py-3 w-full pr-[35px]" dir="rtl" placeholder="ابحث" />
          <i className="fa-solid fa-magnifying-glass text-[#626E7B] text-xl absolute right-[10px] top-[50%] translate-y-[-50%]"></i>
        </div>
        <div className="absolute left-[50%] translate-x-[-50%] bottom-0">
          <ul className="flex items-center justify-center">
            <li className="text-white hover:text-[#336279] hover:bg-white duration-200 px-12 py-4 font-[500] text-[17px] cursor-pointer rounded-t-lg">عالمية</li>
            <li className="text-white hover:text-[#336279] hover:bg-white duration-200 px-12 py-4 font-[500] text-[17px] cursor-pointer rounded-t-lg">قارية</li>
            <li className="text-white hover:text-[#336279] hover:bg-white duration-200 px-12 py-4 font-[500] text-[17px] cursor-pointer rounded-t-lg">دولية</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
