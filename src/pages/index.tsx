import localFont from "next/font/local";
import ToyCard from "./components/ToyCard";
import CartSummary from "./components/CartSummary";

const mickeyMouse = localFont({
  src: "./fonts/MickeyMouse_PERSONAL_USE_ONLY.otf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export default function Home() {
  return (
    <div className={`${mickeyMouse.variable} min-h-screen`}>
      <main className="h-screen w-full flex flex-col">
        <ToyCard />
        <div className="mb-48">
          <CartSummary />
        </div>
      </main>
    </div>
  );
}
