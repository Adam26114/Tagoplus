import React, { useState } from "react";
import { BsMouse } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

const ScrolldownBtn = () => {
    const [isOpen, setIsOpen] = useState(true);

    function hundleClick() {
        window.scrollTo(0, 2900);
        window.addEventListener("scroll", function () {
            const scrollPosition = window.scrollY || window.pageYOffset;
            if (scrollPosition >= 1600) {
                setIsOpen(false);
            } else {
                setIsOpen(true);
            }
        });
    }

    return (
        <button
            className={` ${
                isOpen === false ? "hidden" : "block"
            } uppercase text-white bg-none border-none fixed left-[50%] bottom-10 translate-x-[-50%] flex flex-col items-center z-50 cursor-pointer`}
            onClick={() => hundleClick()}
        >

            <BsMouse className="far fa-mouse-alt text-[2.3rem] md:text-[2.5rem] " />
            <span className=" md:text-[0.6rem] md:my-2 text-[0.5rem] my-[0.5rem] ">
                scroll down
            </span>
            <BiChevronDown className="fas fa-chevron-down text-[0.7rem] md:text-[0.8rem] animate-bounce "></BiChevronDown>
        </button>
    );
};

export default ScrolldownBtn;
