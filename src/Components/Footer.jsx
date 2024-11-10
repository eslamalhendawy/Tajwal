import qrCode from "../assets/qrCode.svg";
import appStore from "../assets/appStore.svg";
import googlePlay from "../assets/googlePlay.svg";
import logo from "../assets/footerHero.svg";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#D9DEE44D]">
        <div className="container mx-auto py-8 px-8 flex items-center justify-between">
          <div className="text-[#575050]">
            <h6 className="font-semibold text-[14px] text-center mb-4">خريطة الموقع</h6>
            <ul className="grid grid-cols-2 gap-4 text-center text-[12px]">
              <li>دخول</li>
              <li>البداية</li>
              <li>تسجيل</li>
              <li>الدول</li>
              <li>خدمة العملاء</li>
              <li>العروض</li>
            </ul>
          </div>
          <div className="text-[#575050]">
            <h6 className="font-semibold text-[14px] text-center mb-4">حمل التطبيق</h6>
            <ul className="grid grid-cols-2 gap-4 text-center">
              <div className="flex flex-col items-center gap-1">
                <img src={qrCode} alt="" />
                <img src={googlePlay} alt="" />
              </div>
              <div className="flex flex-col items-center gap-1">
                <img src={qrCode} alt="" />
                <img src={appStore} alt="" />
              </div>
            </ul>
          </div>
          <div className="text-[#575050] flex items-center gap-3">
            <div dir="rtl">
              <h6 className="font-semibold text-[14px] text-center mb-1">شركة تجوال العالم للتجارة</h6>
              <p className="max-w-[220px] text-[12px] text-center mb-1">هي أول شركة سعودية مسجلة متخصصه في بيع شرائح التجوال الالكترونية في السعودية، و مرخصة بالسجل التجاري رقم 7041398541</p>
              <div className="flex justify-center gap-4 text-[20px]">
                <i className="fa-brands fa-square-instagram"></i>
                <i className="fa-brands fa-square-x-twitter"></i>
              </div>
            </div>
            <div>
              <img className="size-[75px]" src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#626E7B]">
        <div className="container mx-auto py-2 px-8 flex items-center justify-between text-[#F9F9F9] text-[12px]">
          <div className="flex gap-2">
            <span className="underline">سياسة الاستخدام</span>
            <span className="underline">سياسة الخصوصية</span>
          </div>
          <span>جميع الحقوق محفوظة لـ تجوال</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
