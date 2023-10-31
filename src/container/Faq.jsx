import React from "react";
import { FaArrowRight } from "react-icons/fa";

const datas = [
    {
        faq: "보도자료 제목이 들어갑니다.",
        date: "2023.12.31",
        noti: "보도자료",
    },
    {
        faq: "보도자료 제목이 들어갑니다.",
        date: "2023.12.31",
        noti: "보도자료",
    },
    {
        faq: "긴 텍스트 제목의 공지사항이 들어갑니다.",
        date: "2023.12.31",
        noti: "공지",
    },
    { faq: "공지사항 입니다.", date: "2023.12.31", noti: "공지" },
    { faq: "공지사항 입니다.", date: "2023.12.31", noti: "공지" },
];

const news = [
    { name: "자주 묻는 질문" },
    { name: "자주 묻는 질문" },
    { name: "자주 묻는 질문" },
];

const Faq = () => {
    return (
        <section id="faq" className="faq md:px-32 px-10  py-14 ">
            <div className="grid grid-cols-6 grid-rows-9 md:grid-cols-2 md:grid-rows-6 gap-5 ">
                <div className="bg-white border-2 border-[#c4c4c4] p-[2rem] cursor-pointer row-span-5 md:row-span-6 col-span-6 md:col-span-1 order-5 md:order-1 ">
                    <div className="flex justify-between items-center border-b-[1.5px] border-[#c4c4c4] pb-4">
                        <h2 className="text-[2rem] font-bold">공지사항</h2>
                        <i className="far fa-plus text-2xl"></i>
                    </div>
                    {datas.map((data, idx) => (
                        <div
                            className={`flex justify-start items-center ${
                                idx < 4 ? "border-b-[1px] border-[#c4c4c4]" : ""
                            }  py-auto h-1/6`}
                            key={data.faq + idx}
                        >
                            <p className="text-[10px] text-white py-[4px] px-[8px] bg-[#767676] rounded mr-5">
                                {data.noti}
                            </p>
                            <div className="">
                                <h3 className="text-base">{data.faq}</h3>
                                <p className="text-[0.9rem] text-[#848484]">
                                    {data.date}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white border-2 border-[#c4c4c4] p-[2rem] cursor-pointer col-span-6 md:col-span-1 row-span-3 order-1 md:order-2 ">
                    <div className="flex justify-between items-center border-b-[1.5px] border-[#c4c4c4] pb-4">
                        <h2 className="text-[2rem] font-bold">공지사항</h2>
                    </div>

                    <div className="flex justify-around items-center mt-6 ">
                        <div className="flex flex-col text-[#767676]">
                            <p className="text-2xl text-[#585858]">국민은행</p>
                            <p>123 - 456789 - 1234</p>
                            <p>예금주 : 타고플러스</p>
                        </div>
                        <div className="flex flex-col text-[#767676]">
                            <p className="text-2xl text-[#585858]">국민은행</p>
                            <p>123 - 456789 - 1234</p>
                            <p>예금주 : 타고플러스</p>
                        </div>
                    </div>
                </div>

                {news.map((news, idx) => (
                    <div
                        className={`bg-white border-2 border-[#c4c4c4] py-[1rem] px-[2rem] cursor-pointer row-span-1 col-span-2 md:col-span-1 h-full flex justify-between items-center hover:bg-[#c2c0c0] hover:text-white duration-[0.1s] ease-in order-2 md:order-3 `}
                        key={idx}
                    >
                        <p className="flex justify-between items-center w-full text-sm md:text-base">
                            {news.name}
                            <FaArrowRight className="fas fa-arrow-right text-2xl" />
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
