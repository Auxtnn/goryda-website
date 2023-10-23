import React from "react"
import Image from "next/image"
import Link from "next/link"

const Download = () => {
    return (
        <section
        className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
        id="feature"
      >
         <h2 className="text-center font-display text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
    Download Our Apps
  </h2>
  <div className="text-center rounded mt-4">
    <span className="text-white bg-green-500 py-2 px-6 font-display text-[1rem] font-semibold tracking-tight">
      Rider
    </span>
    <span className="text-[#191a1a] drive py-2 px-6 font-display text-[1rem] font-semibold tracking-tight">
      Driver
    </span>
  </div>
        <div className="bg-green-500 h-[33rem] rounded md:grid md:grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
         
          <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-11/12">
            <h3 className="text-left text-white md:text-[2.5rem] text-3xl font-medium leading-normal text-black-600">
              Download  app & get started
            </h3>
            <p className="my-4 text-white text-[1rem]">
              You can explore the features that we provide with fun and have their
              own functions each feature.  own functions each feature.  own functions each feature.
            </p>
            {/* <div className="mt-10 gap-16 flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
				
			    </div> */}
          <div className="flex justify-center">
          <Link href="your-android-app-link" target="_blank" rel="noopener noreferrer" className="mr-4">
            <Image src="/images/android.png" alt="Android App" className="w-12 h-12" 
            quality={100}
            height={40}
            width={50}
            />
            <p className="mt-2 text-blue-500 font-semibold">Get it on Google Play</p>
          </Link>

          <Link href="your-ios-app-link" target="_blank" rel="noopener noreferrer">
            <Image src="/images/ios.png" alt="iOS App" className="w-12 h-12" 
              quality={100}
              height={40}
              width={50}
            />
            <p className="mt-2 text-blue-500 font-semibold">Download on the App Store</p>
          </Link>

        </div>
          </div>
          <div className="md:flex w-full h-[26.9rem] md:justify-end">
            <div className="h-full w-full p-4 ml-10">
              <Image
                src="/images/group 6.png"
                alt="VPN Illustrasi"
                quality={100}
                height={400}
                width={500}
              />
            </div>
          </div>
      
        </div>
      </section>
    )
}

export default Download;
