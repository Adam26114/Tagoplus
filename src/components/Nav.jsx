import React, { useState } from "react";
import { images } from "../constants";
import Button from "./Button";
import { FaBars, FaMoon, FaTimes } from "react-icons/fa";
const navs = [
    { name: "몽골 IT아웃소싱" },
    { name: "미얀마 퍼블리싱 아웃소싱" },
    { name: "타고플러스 솔루션" },
    { name: "포트폴리오" },
    { name: "고객센터" },
];

const Nav = () => {
    const [isClose, setIsClose] = useState(false);
    const [isSroll, setIsScroll] = useState(false);
    const [isDropdown, setIsDropdown] = useState(true);

    // function hundldeDropdown(idx) {
    //     setIsDropdown( 'dropdown-' + idx);
    // }

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY || window.pageYOffset;
        if (scrollPosition >= 2900) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    });

    return (
        <header
            className={`fixed w-[100%] top-0 left-0 w-100  z-[2000] py-4 md:py-0 ${
                isSroll === true ? "bg-white text-[#373737] shadow-xl" : ""
            } ${isClose === true ? "bg-[#373737]" : ""} `}
        >
            <div className="relative px-[5rem]  flex justify-between items-center ">
                <a href="index.html">
                    <img src={images.logo} className="w-[120px] md:w-auto" />
                </a>

                <nav
                    className={`absolute left-0 top-[100%] w-full md:static md:w-auto py-10 ${
                        isClose === false ? "hidden md:block " : ""
                    } ${isClose === true ? "bg-[#373737] " : ""} ${
                        isSroll === true
                            ? "bg-white text-[#373737] shadow-xl md:shadow-none"
                            : "text-white"
                    }`}
                >
                    <ul className="flex flex-col md:flex-row items-center gap-[4vw] text-[1rem] list-none ">
                        {navs.map((nav, idx) => (
                            <li
                                className="w-[100%] md:w-auto px-6 md:px-0"
                                key={`nav-${idx}`}
                                onClick={() =>
                                    setIsDropdown(`dropdown-${idx + 1}`)
                                }
                            >
                                <a
                                    href="#"
                                    className=" decoration-none  text-[14px] "
                                >
                                    {nav.name}
                                </a>
                                <Dropdown isDropdown={isDropdown} />
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={` flex item-center `}>
                    <Button
                        variant="sm"
                        addClass={`${
                            isSroll === true
                                ? "border-[#373737] text-[#373737]"
                                : "text-white"
                        }`}
                    >
                        <FaMoon className="me-1" />
                        dark
                    </Button>
                    <div
                        className={`flex items-center text-3xl text-white cursor-pointer md:hidden ${
                            isSroll === true
                                ? "border-[#373737] text-[#373737]"
                                : "text-white"
                        }`}
                        onClick={() => setIsClose(!isClose)}
                    >
                        {isClose === false ? <FaBars /> : <FaTimes />}
                    </div>
                </div>
            </div>
        </header>
    );
};

const Dropdown = ({ isDropdown }) => {
    return (
        <ul>
            {navs.map((nav, idx) => (
                <li
                    className={`${
                        isDropdown === `dropdown-${idx + 1}`
                            ? "block md:hidden"
                            : "hidden"
                    } `}
                    key={`nav-${idx}`}
                >
                    <a
                        href="#"
                        className=" decoration-none text-white mx-2 text-[14px]"
                    >
                        {nav.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Nav;
