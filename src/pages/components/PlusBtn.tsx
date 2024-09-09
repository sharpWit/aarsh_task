import { useCart } from "@/hooks/useCarts";
import Image from "next/image";
import React, { FC } from "react";

interface Props {
  toyId: number;
}

const PlusBtn: FC<Props> = ({ toyId }) => {
  const { addToCart } = useCart();

  return (
    <div className="flex justify-center items-center p-2">
      <button onClick={() => addToCart(toyId)}>
        <Image src="/icons/plus.png" alt="" width={30} height={30} />
      </button>
    </div>
  );
};

export default PlusBtn;
