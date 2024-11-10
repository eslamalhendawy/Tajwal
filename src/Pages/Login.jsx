import { useState } from "react";

import image from "../assets/loginImage.svg";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";
import x from "../assets/x.svg";

const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);
  const [error, setError] = useState("");
  const [errorType, setErrorType] = useState("");

  const handleClick = () => {
    setError("");
    setErrorType("");
    if (phoneNumber.length === 0 || password.length === 0) {
      setError("البيانات المدخلة غير صحيحة");
      setErrorType("all");
      return;
    }
  };

  return (
    <section className="bg-[#f9f9f9] min-h-screen flex justify-center items-center">
      <div className="">
        <img src={image} alt="" />
        <div className="flex mt-4">
          <button className="text-[#575050] hover:bg-[#F1F3F6] duration-200 basis-1/2 py-3 rounded-tl-lg font-semibold">تسجيل</button>
          <button className="bg-[#F1F3F6] duration-200 basis-1/2 py-3 rounded-tr-lg text-[#336279] font-semibold">دخول</button>
        </div>
        <div className="bg-white rounded-b-lg" dir="rtl">
          <div className="p-6">
            <input onChange={(e) => setPhoneNumber(e.target.value)} type="text" placeholder="رقم الجوال" className={`text-[#626E7B] w-full outline-none bg-[#F9F9F9] p-3 rounded-lg mb-6 border border-white ${(errorType == "phoneNumber" || errorType == "all") && "border-[#E14F72]"}`} />
            <div className="relative mb-6">
              <div className="absolute left-2 top-[50%] translate-y-[-50%] cursor-pointer">
                <i className={` fa-solid ${hidden ? "fa-eye" : "fa-eye-slash"}`} onClick={() => setHidden(!hidden)}></i>
              </div>
              <input onChange={(e) => setPassword(e.target.value)} type={hidden ? "password" : "text"} placeholder="الرقم السري" className={`text-[#626E7B] w-full outline-none bg-[#F9F9F9] p-3 rounded-lg border border-white ${(errorType == "password" || errorType == "all") && "border-[#E14F72]"}`} />
            </div>
            <p className="text-center text-[#E14F72] font-[500] mb-4">{error}</p>
            <div className="flex justify-end">
              <button className="text-[#4B87A4] underline text-[14px]">نسيت الرقم السري ؟</button>
            </div>
            <button onClick={handleClick} className="bg-[#538ca8] text-white w-[70%] py-3 rounded-lg mt-4 mb-6 mx-auto block">
              دخول
            </button>
          </div>
          <div className="relative mb-6">
            <p className="text-[#B6BCC3] text-[13px] text-center relative z-[2] bg-white w-fit mx-auto p-2">المتابعة باستخدام</p>
            <div className="bg-[#B6BCC3] absolute w-full h-[2px] top-[50%] translate-y-[-50%] z-[1] left-0" />
          </div>
          <div className="mb-6 flex items-center justify-center gap-6 pb-8">
            <img src={apple} alt="" />
            <img src={google} alt="" />
            <img src={x} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
