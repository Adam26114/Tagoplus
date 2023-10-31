import React from "react";
import { images } from "../constants";
import Button from "../components/Button";

const datas = [
    {
        img: images.featuerphoto1,
        title: "타고플러스의 주요 사업 및 보유 솔루션",
        caption:
            "다양한 맞춤형 솔루션으로 제작기간, 제작단가가절약되며 고객맞춤 커스터 마이징도 가능합니다.",
    },
    {
        img: images.featuerphoto2,
        title: "미얀마 퍼블리셔 IT 아웃소싱 사업",
        caption:
            " 미얀마 퍼블리셔 인력, 팀 구성관리 아웃소싱을 통한 프로젝트 퍼블리싱 및 지원",
    },
    {
        img: images.featuerphoto3,
        title: "몽골 개발자 IT 아웃소싱 사업",
        caption: " 일반 / 장문 / 포토문자 + RCS + 알림톡 + 친구톡 기능",
    },
    {
        img: images.featuerphoto4,
        title: "SMS Enterprise",
        caption: " 기본 문자솔루션 일반/장문/포토문자 기능",
    },
    {
        img: images.featuerphoto5,
        title: "SMS + 카카오 알림톡/친구톡",
        caption: "  일반 / 장문 / 포토문자 + 알림톡 + 친구톡  기능",
    },
];

const Business = () => {
    return (
        <main
            id="business"
            className=" business px-10 md:px-32 py-8 md:py-10 "
        >
            <div>
                <div className="title">
                    <h2 className="">타고플러스의 주요 사업 및 보유 솔루션</h2>
                    <p>
                        다양한 맞춤형 솔루션으로 제작기간, 제작단가가절약되며
                        고객맞춤 커스터 마이징도 가능합니다.
                    </p>
                </div>

                <div className=" grid grid-cols-6 gap-[1rem] md:gap-[35px] auto-rows-[140px] md:auto-rows-auto">
                    {datas.map((data, idx) => (
                        <div
                            className={` md:w-auto relative overflow-hidden shadow-md col-span-6 ${
                                idx < 2 ? "md:col-span-3" : "md:col-span-2"
                            }`}
                            key={`card${idx + 1}`}
                        >
                            <img
                                src={data.img}
                                alt="featuer-photo-1"
                                className="w-full h-full object-cover scale-[1.1]"
                            />
                            <div className=" absolute top-0 left-0 bottom-0 right-0 text-white flex justify-center flex-col items-center text-center z-10 bg-black/50">
                                <div className="w-full flex justify-between md:justify-center md:flex-col items-center p-12">
                                    <div className="flex flex-col w-[70%]">
                                        <h3 className="text-[1.3rem] md:text-[1.5rem] font-bold m-2">
                                            {data.title}
                                        </h3>
                                        <p className="text-[14px] md:text-1rem my-3">{data.caption}</p>
                                    </div>
                                    <Button>자세히 보기</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Business;
