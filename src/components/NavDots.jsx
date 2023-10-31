import React from "react";

const NavDots = () => {
    const navs = [
        { name: "#card1" },
        { name: "#card2" },
        { name: "#card3" },
        { name: "#contect" },
    ];

    function hundleClick(data) {
        window.location.href = data;
    }

    return (
        <div className="flex flex-col fixed right-[2rem] md:right-[7.5rem] top-[50%] z-50 space-y-3">
            {navs.map((nav, idx) => (
                <input
                    type="radio"
                    name="navdots"
                    onClick={() => hundleClick(nav.name)}
                    className=" cursor-pointer checked:ring-offset-2 text-transparent "
                    key={nav}
                />
            ))}
        </div>
    );
};

export default NavDots;
