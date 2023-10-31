import React from "react";
import { images } from "../constants";

const datas = [
    { img: images.java, name: "java" },
    { img: images.spring, name: "sprinf" },
    { img: images.javascript, name: "javascript" },
    { img: images.react, name: "react" },
    { img: images.reactnative, name: "reactnative" },
    { img: images.flutter, name: "flutter" },
    { img: images.vue, name: "vue" },
    { img: images.node, name: "node" },
    { img: images.php, name: "php" },
    { img: images.python, name: "python" }
];

const Languages = () => {
    return (
        <div className=" py-[100px] px-10 md:px-32 ">
            <div className="title">
                <h2>주요 보유 기술</h2>
                <p>
                    타고플러스의 개발자 및 퍼블리셔가 보유하고 있는 수준 높은
                    기술입니다.
                </p>
            </div>

            <div
                className="w-full grid place-items-center  grid-cols-5 gap-10"
                
            >
                {datas.map((data) => (
                    <div key={data.name} className="">
                        <img
                            src={data.img}
                            className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-contain object-center cursor-pointer select-none"
                            alt={data.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Languages;
