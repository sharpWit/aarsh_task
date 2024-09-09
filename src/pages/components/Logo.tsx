import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image
        src="/logo.svg"
        width={200}
        height={100}
        sizes="(max-width: 768px) 100vw, 50vw"
        alt="logo"
      />
    </div>
  );
};

export default Logo;
