import React from "react";
import { images } from "../constants";

const Footer = () => {
    return (
        <footer id="footer" className="px-10 md:px-32 py-12 bg-[#373737] text-white">
            <div className="grid grid-cols-4 items-center gap-10 md:gap-36">
                <div className=" col-span-2 md:col-span-1 order-1 md:order-1">
                    <img
                        src={images.footer}
                        alt="footer-logo"
                        className="w-[150px] md:w-[250px]"
                    />
                </div>
                <div className=" col-span-2 md:col-span-1 order-3 md:order-2">
                    <ul>
                        <li>㈜타고플러스</li>
                        <li>TEL : 1644-5805</li>
                        <li>FAX:.</li>
                        <li>
                            서울 금천구 가산디지털1로 5 대륭테크노타운20차 402호
                        </li>
                    </ul>
                </div>
                <div className=" col-span-2 md:col-span-1 order-4 md:order-3">
                    <ul>
                        <li>대표 : 문양희</li>
                        <li>개인정보관리책임자 : 조원호</li>
                        <li>사업자등록번호 : 113-86-13483</li>
                        <li>통신판매번호 : 구로 제 2008-00086호</li>
                    </ul>
                </div>
                <div className=" col-span-2 md:col-span-1 order-2 md:order-4">
                    <div className="flex justify-end items-center space-x-6">
                        <img
                            src={images.youtube}
                            alt="youtube"
                            className="footer-icons"
                        />
                        <img
                            src={images.talk}
                            alt="talk"
                            className="footer-icons"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
