import Link from "next/link";

export function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"} className="text-white font-bold">Lilbitspace</Link>
                <div>
                    <Link href="/create" className="text-white mx-2">Create</Link>
                </div>
            </div>
        </nav>
    );
};
