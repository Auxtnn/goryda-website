import { CiMenuKebab } from "react-icons/ci";

const DriverCard = ({ Icon, color }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
      <p className="flex justify-between items-center mb-2">
        <span className={`block p-2 ${color} rounded-lg`}>
          <Icon className="fill-white text-2xl font-bold" />
        </span>
        <span className=" block cursor-pointer">
          <CiMenuKebab className="fill-black text-2xl" />
        </span>
      </p>
      <strong>15%</strong>
      <p>Listening</p>
      <p>Speak 20 minutes</p>
    </div>
  );
};

export default DriverCard;
