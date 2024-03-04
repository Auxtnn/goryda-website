import { CiMenuKebab } from "react-icons/ci";

const DriverCard = ({ Icon, color }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
      <p className="flex justify-between items-center mb-4">
        <span className={`block p-2 ${color} rounded-lg`}>
          <Icon className="fill-white text-4xl font-bold" />
        </span>
        <span className=" block cursor-pointer">
          <CiMenuKebab className="fill-black text-3xl" />
        </span>
      </p>
      <strong className="my-2">15%</strong>
      <p className="my-2">Listening</p>
      <p className="my-2">Speak 20 minutes</p>
    </div>
  );
};

export default DriverCard;
