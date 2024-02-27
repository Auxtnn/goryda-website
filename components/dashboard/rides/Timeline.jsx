export const TimelineItem = ({ description }) => (
  <li className="mb-5">
    <div className="flex group items-center">
      <div className="bg-gray-800 group-hover:bg-red-700 z-10 rounded-full border-4 border-black h-5 w-5">
        <div className="bg-black h-1 w-10 items-center ml-4 mt-1"></div>
      </div>
      <div className="flex-1 ml-4 z-10 font-medium">
        <div className="order-1 space-y-2 bg-gray-800 rounded-bl-full shadow-only transition-ease lg:w-5/12 pr-4  pb-5 pt-2 pl-10">
          <p className="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100 p-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  </li>
);

const Timeline = () => (
  <div className=" w-full bg-gray-900 h-full mx-auto px-5">
    <div className="relative">
      <div
        className="border-r-4 border-black absolute h-full top-0"
        style={{ left: "9px" }}
      ></div>
      <ul className="list-none m-0 p-0">
        <TimelineItem description="University of DVI (1997 - 2009)" />
        <TimelineItem description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. A repellendus similique accusamus consequuntur nesciunt. Voluptas pariatur aperiam aliquid, necessitatibus " />
      </ul>
    </div>
  </div>
);

export default Timeline;
