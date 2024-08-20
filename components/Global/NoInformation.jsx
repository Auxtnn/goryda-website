import React from "react";

import Image from "next/image";

const NoInformation = () => {
  return (
    <div className="text-center py-8">
      <Image
        width={50}
        height={50}
        src="/images/empty.png"
        className="mx-auto h-40 w-auto"
        alt="No information found"
      />
      <p className="text-sm text-gray-600">No Available Information</p>
    </div>
  );
};

export default NoInformation;
