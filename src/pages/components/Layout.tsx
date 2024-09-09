import { CartProvider } from "@/hooks/useCarts";
import Header from "./Header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="">
        <Header />
        <main className="h-screen w-full pt-12 px-8 mb-0">{children}</main>
        <footer className="bg-footer-svg bg-no-repeat bg-center bg-cover h-36 mb-0" />
      </div>
    </CartProvider>
  );
}
