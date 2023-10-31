import React, { useState } from "react";
import { images } from "../constants";
import Button from "../components/Button";

const inputs = [
    { type: "name", name: "NAME" },
    { type: "email", name: "EMAIL" },
    { type: "number", name: "Tel" },
    { type: "text", name: "MESSAGE" },
];

function Input({ type, name }) {
    return (
        <div className="mx-[1rem] my-3">
            <input
                type={`${type ? type : "text"}`}
                name={`${name ? name : ""}`}
                id={`${name ? name : ""}`}
                className="w-full border-[1px] text-sm font-light border-[#c7c7c7] p-[0.5rem]"
                placeholder={`${name ? name : ""}`}
            />
        </div>
    );
}

const Content = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section
            id="contect"
            className="tagobg text-white px-16 md:px-32 py-10"
        >
            <div className=" ">
                <div className="grid grid-cols-2 place-items-center md:gap-10 text-center md:text-left  ">
                    <div
                        className={`${
                            isOpen ? "hidden md:block   " : "block"
                        } md:me-auto col-span-2 md:col-span-1`}
                    >
                        <h1 className="text-3xl font-black">
                            온라인 견적 및 아웃소싱 문의
                        </h1>
                        <p className="text-sm md:text-base my-5">
                            최대한 빠른 시간 내 친절하고 상세하게 상담해
                            드리겠습니다.
                        </p>
                        <Button hundldeClick={() => setIsOpen(!isOpen)} />
                    </div>

                    <div
                        className={`${
                            isOpen ? "block" : "md:block hidden"
                        }  bg-white p-10 w-[450px] mx-auto md:me-auto col-span-2 md:col-span-1 `}
                    >
                        <form
                            className=""
                            action=""
                            method=""
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <h2 className="text-2xl text-left text-black font-extrabold border-b-2 pb-4">
                                간편문의하기
                            </h2>

                            {inputs.map((input) => (
                                <Input
                                    type={input.type}
                                    name={input.name}
                                    key={input.name}
                                />
                            ))}

                            <div className=" text-[#767676] flex items-center ml-3">
                                <Input
                                    type="checkbox"
                                    name="agree"
                                    className="cursor-pointer"
                                />
                                <label
                                    htmlFor="agree"
                                    className=" cursor-pointer  select-none"
                                >
                                    개인정보제공에 동의합니다.
                                </label>
                            </div>

                            <div className="grid grid-cols-2 place-items-center">
                                <Button
                                    variant="dark"
                                    hundldeClick={() => setIsOpen(!isOpen)}
                                >
                                    빠른상담접수
                                </Button>
                                <Button
                                    variant="dark"
                                    hundldeClick={() => setIsOpen(!isOpen)}
                                >
                                    상세상담접수
                                </Button>
                            </div>

                            <div className=" text-[#767676]">
                                <div className="border-b-2 pb-4 flex items-center space-x-4">
                                    <h2 className="font-bold text-black text-2xl">
                                        고객센터
                                    </h2>
                                    <p>평일 09:00~18:00</p>
                                </div>

                                <div className="flex flex-col justify-center items-center mt-4">
                                    <h1 className="text-4xl text-[#585858]">
                                        02-1234-4567
                                    </h1>
                                    <p>
                                        점심시간 12:00~13:00/토.일,공휴일 휴무
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Content;
