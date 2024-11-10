import uk from "../assets/uk.svg";
import germany from "../assets/germany.svg";
import china from "../assets/china.svg";
import france from "../assets/france.svg";
import arrow from "../assets/arrow.svg"

const CountriesList = () => {
  const list = [
    { name: "الصين", flag: china },
    { name: "فرنسا", flag: france },
    { name: "المانيا", flag: germany },
    { name: "المملكة المتحدة", flag: uk },
    { name: "الصين", flag: china },
    { name: "فرنسا", flag: france },
    { name: "المانيا", flag: germany },
    { name: "المملكة المتحدة", flag: uk },
    { name: "الصين", flag: china },
    { name: "فرنسا", flag: france },
    { name: "المانيا", flag: germany },
    { name: "المملكة المتحدة", flag: uk },
  ];
  return (
    <div className="bg-[#f9f9f9] py-12 px-8">
      <div className="container mx-auto grid grid-cols-4 gap-8 mb-16">
        {list.map((country, index) => (
          <div key={index} className="flex justify-between items-center py-4 bg-white p-4 cardShadow rounded-xl">
            <img src={arrow} alt="" />
            <div className="flex items-center justify-end gap-4">
              <h3 className="text-[#626E7B] font-[500] text-[20px]">{country.name}</h3>
              <img src={country.flag} alt="" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-[#575050] text-white px-[70px] py-3">عرض جميع الدول</button>
      </div>
    </div>
  );
};

export default CountriesList;
