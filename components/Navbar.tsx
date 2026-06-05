import { Link } from "next-view-transitions";
import Image from "next/image";
import { SignInButton } from "@clerk/nextjs";

const links = [
  { name: "Home", href: "/" },
  { name: "Drivers", href: "/drivers" },
  { name: "Iron Sets", href: "/irons" },
  { name: "Fairway Woods", href: "/woods" },
  { name: "Wedges", href: "/wedges" },
  { name: "Accessories", href: "/accessories" },
];

const Navbar = () => {
  return (
    <nav className="sticky w-full flex flex-col top-0 z-50 bg-background text-foreground shadow-md">
      <div className="relative h-20">
        <div className="flex h-full justify-around items-center gap-16">
          <div className="relative size-32">
            <Image
              src="/images/logo.png"
              fill
              className="object-contain"
              alt="logo"
            />
          </div>
          <div>SEARCH</div>
          <SignInButton>
            <button className="py-2 px-5 hover:text-gray-300 transition transform duration-300 hover:cursor-pointer bg-black text-white">
              Sign In!
            </button>
          </SignInButton>
        </div>
      </div>
      <div className="relative bg-black h-12">
        <ul className="flex h-full justify-center items-center gap-16 px-4">
          {links.map((link: any) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-white text-sm uppercase font-medium hover:text-gray-300 transition duration-150 hover:underline font-jetbrains"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
