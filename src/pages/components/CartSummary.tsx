import { useCart } from "@/hooks/useCarts";
import Image from "next/image";
import React from "react";

const CartSummary = () => {
  const { cart, getTotalPrice } = useCart();

  console.log("CART::: ", cart);
  return (
    <div className="bg-white w-full h-32 flex items-center rounded-3xl max-w-[800px] relative mx-auto border-2 border-slate-200 p-4 gap-8 py-8">
      <div className="rounded-full bg-slate-400 w-[35px] h-[35px] flex items-center justify-center text-2xl font-bold">
        {cart.length}
      </div>
      {cart && cart.length > 0 ? (
        cart.map((toy) => (
          <div
            key={toy.id}
            className="flex justify-between items-center w-full px-24"
          >
            <div className="flex flex-col items-center justify-center gap-4 relative">
              <div className="w-20 bg-white rounded-lg shadow-md flex justify-center items-center p-4">
                <Image src={toy.image} alt={toy.name} width={60} height={60} />
              </div>
              <span className="bg-red-300 text-black absolute -bottom-6 rounded-full w-[18px] h-[18px] flex items-center justify-center">
                {cart.length}
              </span>
            </div>

            <div className="flex flex-col space-y-2 mr-0">
              <div className="flex items-center justify-evenly gap-4 w-72 px-2 rounded-xl bg-slate-200 h-12">
                <Image
                  src="/icons/format-square.png"
                  alt=""
                  width={30}
                  height={30}
                  className="ml-0 mr-auto"
                />
                <h2 className="font-bold text">Packing price</h2>
                <p className="font-semibold text-lg">{`$ ${getTotalPrice()}`}</p>
              </div>
              <div className="flex items-center justify-evenly gap-4 w-72 px-2 rounded-xl bg-slate-200 h-12">
                <Image
                  src="/icons/dollar-circle.png"
                  alt=""
                  width={30}
                  height={30}
                  className="ml-0 mr-auto"
                />
                <h2 className="font-bold text">Price</h2>
                <p className="font-semibold text-lg">{`$ ${toy.price}`}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>There is no carts yet!</p>
      )}
      <div className="absolute -top-8 -right-36 bottom-0 flex items-center">
        <Image src="/images/basketImg.png" alt="" width={200} height={300} />
      </div>
    </div>
  );
};

export default CartSummary;
