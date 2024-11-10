import bg from "../assets/phonesBackground.svg";
import phone1 from "../assets/phone1.svg";
import phone2 from "../assets/phone2.svg";
import phone3 from "../assets/phone3.svg";
import phone4 from "../assets/phone4.svg";

const PhoneSection = () => {
  const list = [
    {
      image: phone1,
      title: "استمتع بالباقة"
    },
    {
      image: phone2,
      title: "ثبت الشريحة",
    },
    {
      image: phone3,
      title: "اختر الوجهة والباقة ",
    },
    {
      image: phone4,
      title: "حمل التطبيق",
    },
  ];
  return (
    <div className="bg-center bg-cover" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container mx-auto py-12 px-8 relative">
        <h4 className="text-[#626E7B] text-[24px] font-bold mb-8" dir="rtl">
          كيف تستخدم <q>تجوال</q>
        </h4>
        <div className="flex items-center justify-between">
          {list.map((item, index) => (
            <div key={index} className="text-center flex flex-col p-8">
              <img className="" src={item.image} alt="" />
              <h5 className="text-[#626E7B] text-[18px] font-bold mt-4 text-center">{item.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneSection;
