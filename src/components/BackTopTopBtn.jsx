import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const BackTopTopBtn = () => {
    const [isOpen, setIsOpen] = useState(false);

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY || window.pageYOffset;
        if (scrollPosition >= 2900) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    });

    function hundleClick() {
        window.scrollTo(0, 0);
    }

    return (
        <button
            className={` ${
                isOpen === false ? "hidden" : "block"
            } fixed  right-[100px] bottom-[100px] z-50 w-[40px] h-[40px] md:w-[50px] md:h-[50px] text-3xl text-white bg-[#c1c1c1] border-none rounded-md shadow-md cursor-pointer duration-[0.1s] ease-in-out hover:bg-[#eaeaea] hover:text-[#181818]`}
            onClick={() => hundleClick()}
        >
            <div className="flex justify-center items-center">
                <IoIosArrowUp />
            </div>
        </button>
    );
};

export default BackTopTopBtn;
