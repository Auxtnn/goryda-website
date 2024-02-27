const Card = ({ icon1, icon2, text, bg, color }) => {
  return (
    <div
      className={`${bg} ${color} shadow-lg rounded-lg py-8 px-2 m-2 flex gap-3  items-center justify-between`}
    >
      <div className="text-2xl text-blue-500">{icon1}</div>
      <div className={`text-${bg} font-bold text-[14px] `}>{text}</div>
      <div className="text-xl text-green-500">{icon2}</div>
    </div>
  );
};

export default Card;
