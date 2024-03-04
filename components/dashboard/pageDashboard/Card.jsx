const Card = ({ icon1, icon2, text, bg, color }) => {
  return (
    <div
      className={`relative ${bg}  shadow-xl p-[30px] flex rounded-lg justify-between items-center cursor-pointer  ">
          gap-2`}
    >
      <div className="icon1"> {icon1} </div>

      <div className={`relative font-bold text-[12px] ${color}`}> {text}</div>
      <div className="icon2">{icon2}</div>
    </div>
  );
};

export default Card;
