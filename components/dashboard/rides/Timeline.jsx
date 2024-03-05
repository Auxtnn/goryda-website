export const TimelineItem = ({ description }) => (
  <li className="mb-5 w-full">
    <div className="flex group items-center justify-stretch w-full">
      <div className="bg-blue-500 group-hover:bg-white z-10 rounded-full border-4 border-blue-600 h-5 w-5">
        <div className="bg-white h-1 w-10 items-center ml-4 mt-1"></div>
      </div>
      <div className="flex-1 ml-4 z-10 font-medium">
        <div className="order-1 space-y-2 bg-gray-50 w-[300px] mt-[30px] rounded-bl-[30px] rounded-br-[30px] rounded-tr-[30px] shadow-only transition-ease px-2 py-3 pl-10">
          <p className="text-sm font-medium leading-snug tracking-wide text-gray-900 text-opacity-100 p-1 w-full">
            {description}
          </p>
        </div>
      </div>
    </div>
  </li>
);

const Timeline = () => (
  <div className="w-full bg-gray-900 h-screen mx-auto px-5 pt-5 transition-[display, width, right] duration-500">
    <p className="flex items-center gap-2 relative -ml-3">
      <img
        src="https://th.bing.com/th/id/R.ffc2adcb86ed3f7689bb24df653691d3?rik=O0sub3JhL9x5Ew&pid=ImgRaw&r=0"
        alt=""
        className="w-12 h-12 rounded-full"
      />
      <span className="text-white">
        <span className="block">Awolu Owolabi</span>
        <span className="block">080668482163</span>
      </span>
    </p>

    <div className="relative w-full">
      <div
        className="border-r-2 border-white absolute h-screen top-0"
        style={{ left: "9px" }}
      ></div>
      <ul className="list-none m-0 p-0 w-full">
        <TimelineItem description="University of DVI (1997 - 2009)" />
        <TimelineItem description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. A r loren  hd  hbdsuhe eueddd deuddudn the fhfyfg hfbef e ehfbfbehf ehfe h" />
      </ul>
    </div>
  </div>
);

export default Timeline;
