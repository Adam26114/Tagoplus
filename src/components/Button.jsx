import React from "react";

const Button = ({ variant, hiden, children, hundldeClick, addClass }) => {
    const btn =
        " text-[14px] md:text-[1rem] text-white uppercase bg-none rounded-full border-2 border-white px-[1rem] md:px-[2rem] py-[0.5rem]  cursor-pointer  hover:bg-white hover:text-[#767676]";
    const dark =
        "text-[1rem] text-[#585858] uppercase bg-none rounded-full border-2 border-[#585858] px-[2rem] py-[0.5rem] m-[5px] cursor-pointer md:text-[10px] hover:bg-[#585858] hover:text-white";
    const sm = `flex items-center text-[0.9rem] text-white uppercase bg-none rounded-full border-2 border-white p-[8px] m-[5px] me-[60px] md:me-0 cursor-pointer hover:border-[#2e2e2e] hover:bg-[#2e2e2e] hover:text-[#fff] ${addClass}`;

    return (
        <button
            className={variant === "sm" ? sm : variant === "dark" ? dark : btn}
            onClick={hundldeClick}
        >
            {children ? children : " View More"}
        </button>
    );
};

export default Button;

{
    /* <button
className={`text-[1rem] text-[${variant === "md" ? "0.9rem" : "1rem]"} text-[${
    variant === "dark" ? "#000" : "#fff"
}] uppercase bg-none rounded-xl border-2 border-[${
    variant === "dark" ? "#000" : "#fff"
}] p-[${
    variant === "dark"
        ? "1rem 2rem"
        : variant === "md"
        ? "8px"
        : "0.5rem 2rem"
}] m-[${variant ? "5px" : "0px"}] cursor-pointer ${
    visibility === "hidden" ? "hidden" : ""
} `}
>
View More
</button> */
}
