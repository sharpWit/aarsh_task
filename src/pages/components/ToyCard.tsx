import { toys } from "@/utils/toyData";
import Image from "next/image";
import React from "react";
import styles from "./ToyCard.module.css";
import PlusBtn from "./PlusBtn";

const ToyCard = () => {
  return (
    <div className="flex flex-wrap justify-center  gap-8 p-8 relative h-full">
      {toys.map((toy) => (
        <div
          key={toy.id}
          className="max-w-xs w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden h-[300px] flex flex-col justify-end items-center space-y-8"
        >
          <div className="absolute -top-8">
            <Image
              src={toy.image}
              alt={toy.name}
              width={300}
              height={200}
              className="object-cover w-full h-40 "
            />
          </div>
          <div className="px-4 space-y-4">
            <div className={styles.disc}>
              <p className="text-yellow-500">{toy.disc}</p>
            </div>
            <div className="flex items-center gap-2 mb-2 ">
              <div>
                <Image
                  src="/icons/format-square.png"
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
              <span className="text-gray-800">W: {toy.wSize}</span>
              <span className="text-gray-800">H: {toy.hSize}</span>
              <span className="text-gray-800">D: {toy.dSize}</span>
            </div>
            <div className="text-lg font-bold flex justify-between items-center">
              <span>{`$${toy.price}`}</span>
              <span>
                <PlusBtn toyId={toy.id} />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToyCard;
