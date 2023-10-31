import React from "react";
import { images } from "../constants";
import Button from "../components/Button";

const datas = [
    {
        img: images.bg1,
        title: "몽골 IT 아웃소싱 사업",
        caption:
            "한국 개발자 급여의 50% 수준으로 더 좋은퀄리티를 보장합니다.해외 (몽골) 에 개발팀구성 및 운영 관리 지원",
    },
    {
        img: images.bg2,
        title: "몽골 IT 아웃소싱 사업",
        caption:
            " 대한민국의 IT 웹 개발 인력! 타고플러스가 책임지겠습니다! 개발자의 단가는 낮게, 프로젝트의  퀄리티는 높게! 수많은 프로젝트를 수행한 Know-How로 고객사분들의 Needs를 충족시켜 드리겠습니다.",
    },
    {
        img: images.bg3,
        title: "몽골 개발자 IT 아웃소싱 사업",
        caption:
            " 저희 미얀마 퍼블리셔 아웃소싱을 통해 저렴한 단가와 최상의 서비스를 경험해 보세요!  지금까지 쌓아온 저희의 역량과 경험을 바탕으로 최고의 퀄리티를 선사하겠습니다!",
    },
];

const Hero = () => {
    return (
        <section className="relative">
            <div className="w-100">
                <div>
                    {datas.map((data, idx) => (
                        <div
                            id={`card${idx + 1}`}
                            className="card-shadow relative"
                            key={idx}
                        >
                            <img className="w-[100%] h-[100vh] object-cover" src={data.img} alt={`bg${idx + 1}`}  />
                            <div className="text-white absolute left-0 top-[50%] translate-y-[-50%] z-2  mx-auto px-[4rem] md:px-[10rem] ">
                                <h2
                                    className={`md:text-[45px] font-bold  text-[2rem] w-[50%]`}
                                >
                                    {data.title}
                                </h2>
                                <p
                                    className={`md:text-[1rem] text-[14px] w-[55%] my-5`}
                                >
                                    {data.caption}
                                </p>

                                <Button variant='btn' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
