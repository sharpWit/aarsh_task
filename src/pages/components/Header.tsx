import { navLinks } from "@/utils/nvLinks";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/hooks/useCarts";

const Header = () => {
  const { cart } = useCart();

  return (
    <header className="w-4/5 mx-auto  max-h-48 h-full pt-8 ">
      <div className="container bg-white h-24 rounded-full pl-4 pt-2 flex justify-between items-center px-4">
        <Logo />
        <nav className="flex items-center">
          <div className="flex justify-between items-center gap-6 p-4">
            {navLinks.map((item) => (
              <Link key={item.id} href={item.slug}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className="pl-4 mr-8 relative">
            <Image src="/icons/basketIcon.png" alt="" width={30} height={30} />
            <span className="bg-red-300 text-black absolute -top-4 right-2 rounded-full w-[18px] h-[18px] flex items-center justify-center">
              {cart.length}
            </span>
          </div>
          <div className="pl-4">
            <Image src="/icons/userIcon.png" alt="" width={30} height={30} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
