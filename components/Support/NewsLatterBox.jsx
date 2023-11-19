import React from "react"
import {TfiLocationPin} from "react-icons/tfi"
import {BiPhoneCall, BiTimeFive} from "react-icons/bi"

const NewsLatterBox = () => {
  return (
    <div
      className="wow fadeInUp relative z-10 rounded-md bg-green-500/[3%] p-8 sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
      <div class="h-full pr-6">
    
                    <ul class="mb-6 md:mb-0">
                        <li class="flex">
                            <div class="flex h-10 w-10 items-center justify-center rounded bg-green-500 text-white">
              
                                <TfiLocationPin className="text-2xl" />
                            </div>
                            <div class="ml-4 mb-4">
                                <h3 class="mb-2 text-lg font-medium leading-6">Our Address
                                </h3>
                                <p class="text-gray-600 dark:text-slate-400">1230 Maecenas Street Awka Road</p>
                                <p class="text-gray-600 dark:text-slate-400">Awka, EEUU</p>
                            </div>
                        </li>
                        <li class="flex">
                            <div class="flex h-10 w-10 items-center justify-center rounded bg-green-500 text-white">
                                <BiPhoneCall className="text-2xl" />
                            </div>
                            <div class="ml-4 mb-4">
                                <h3 class="mb-2 text-lg font-medium leading-6 dark:text-white">Contact
                                </h3>
                                <p class="text-gray-600 dark:text-slate-400">Mobile: +1 (123) 456-7890</p>
                                <p class="text-gray-600 dark:text-slate-400">Mail: support@goryda.com</p>
                            </div>
                        </li>
                        <li class="flex">
                            <div class="flex h-10 w-10 items-center justify-center rounded bg-green-500 text-white">
                                <BiTimeFive className="text-2xl"/>
                            </div>
                            <div class="ml-4 mb-4">
                                <h3 class="mb-2 text-lg font-medium leading-6">Office
                                    hours</h3>
                                <p class="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                                <p class="text-gray-600 dark:text-slate-400">Saturday &amp; Sunday: 08:00 - 12:00</p>
                            </div>
                        </li>
                    </ul>
                </div>
    </div>
  );
};

export default NewsLatterBox;
