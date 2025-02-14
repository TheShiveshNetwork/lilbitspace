import Image from "next/image";
import Link from "next/link";
import LOGO from "/public/logo.png";

export function Navbar() {
    return (
        <nav className="transparent absolute w-full px-4 py-4 md:px-8 lg:px-16 xl:px-24">
            <div className="flex justify-between items-center">
                <Link href={"/"} className="text-lg font-bold flex gap-2 items-center">
                    <Image src={LOGO} alt="lilbitspace" height={30} width={30} />
                    Lilbitspace
                </Link>
                <div>
                    <Link href="/create" className="">Create</Link>
                </div>
            </div>
        </nav>
    );
};
