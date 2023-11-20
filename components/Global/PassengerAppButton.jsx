import React from "react"
import Link from "next/link"

const PassengerAppButton = () =>{
    return (
       <div className="grid items-center md:inline-block">
        <button>
        <Link href="#" className="text-white bg-green-500 rounded py-3 px-4 hover:bg-green-600 hover:border-green-700 border">
          Get the app
        </Link>
        </button>
        </div>
    )
}

export default PassengerAppButton