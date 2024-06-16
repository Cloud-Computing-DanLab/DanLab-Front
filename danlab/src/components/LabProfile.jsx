import React from "react";
import './LabProfile.css';
import ic_lab from "../images/ic_lab.png";

function LabProfile(props) {
    return (
        <div className="lab-profile-container">
            <p className="lab-profile-title">연구실 프로필</p>
            <div className="lab-profile-card-container">
                <div className="lab-profile-info">
                    <div className="profile-item">
                        <img src={ic_lab} className="icon" alt="Lab"/>
                        <div>
                            <div className="one-line">
                                <p className="gray-text-13">연구실명</p> <p className="black-text-13">{props.name}</p>
                            </div>
                            <div className="one-line">
                                <p className="gray-text-13">소속&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> <p className="black-text-13">{props.department}</p>
                            </div>
                            <div className="one-line">
                                <p className="gray-text-13">지도교수</p> <p className="black-text-13">{props.professor}</p>
                            </div>
                            <div className="one-line">
                                <p className="gray-text-13">웹사이트</p> <p
                                className="black-text-13">{props.link}</p>
                            </div>
                            <p className="gray-text-13">주요 연구분야</p>
                            <p className="black-text-13 preline">{props.researchField}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LabProfile;