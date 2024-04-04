import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center mt-12 space-y-2">
      <div className="flex justify-center">
        <img src={logo} alt="" />
      </div>
      <p className="text-2xl text-[#706F6F] font-medium">
        Journalism Without Fear or Favour
      </p>
      <p className="text-2xl text-[#706F6F] font-medium">
        {moment().format("dddd, MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
