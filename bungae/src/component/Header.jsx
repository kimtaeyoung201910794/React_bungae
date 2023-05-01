import React from "react";

export default function Header(){
    return (
        <div className="headerTop">
            <div className="headerline">
                    <div className="header_box">
                        <img src="https://bgzt.co.kr/assets/icon/icon_bunjang.svg"/>
                    </div>
                    <div className="info_wrap">
                        <div className="info">회사소개</div>
                        <div className="info">브랜드</div>
                        <div className="info">서비스</div>
                        <div className="info">팀</div>
                        <div className="info">뉴스룸</div>
                        <div className="info">인재영입</div>
                        <div id="info1" className="info">번개장터 써보기</div>
                    </div>
            </div>
        </div>
    )
}