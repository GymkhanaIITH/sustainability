import { useState, useEffect } from "react";
import "../styles/global.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false);
    }, []);

    return (
        <div className="relative">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <img
            src="/assets/hamburger.png"
            alt="Menu"
            className="w-12 invert cursor-pointer"
            />
        </button>

        <nav
            className={`bg-[#6f6f6f] z-[100] absolute top-14 left-0 w-full ${
            isOpen ? "block" : "hidden"
            }`}
        >
            <ul className="flex flex-col space-y-4 text-md p-4">
            <li>
                <a href="/#" className="hover:text-orange-400">
                Home
                </a>
            </li>
            <li>
                <a href="/#about" className="hover:text-orange-400">
                About
                </a>
            </li>
            <li>
                <a href="https://www.iith.ac.in/about/iith_policies/" className="hover:text-orange-400">
                Policies
                </a>
            </li>
            <li>
                <a href="/#initiatives" className="hover:text-orange-400">
                Initiatives
                </a>
            </li>
            <li>
                <a href="/#projects" className="hover:text-orange-400">
                Projects
                </a>
            </li>
            <li>
                <a href="/#events" className="hover:text-orange-400">
                Events
                </a>
            </li>
            <li>
                <a
                href="/#student-led-activities"
                className="hover:text-orange-400"
                >
                Student Led Activities
                </a>
            </li>
            <li>
                <a href="/#targets" className="hover:text-orange-400">
                Targets for Future
                </a>
            </li>
            <li>
                <a href="/#video-highlights" className="hover:text-orange-400">
                Video Highlights
                </a>
            </li>
            </ul>
        </nav>
        </div>
    );
};

export default Navbar;
