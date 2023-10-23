import React from "react"
import Link from "next/link"

const DriverAppButton = () =>{
    return (
        <div className="grid items-center mt-5 md:inline-block">
        <button>
        <Link href="/about" className="text-white bg-green-500 rounded py-3 px-6 hover:text-green-700 hover:bg-transparent hover:border-green-700 border">
          Get the app
        </Link>
        </button>
        </div>
    )
}

export default DriverAppButton