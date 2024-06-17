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
                                <p className="gray-text-13">연구실명&nbsp;</p> <p className="black-text-13">{props.name}</p>
                            </div>
                            <div className="one-line">
                                <p className="gray-text-13">지도교수&nbsp;</p> <p className="black-text-13">{props.leader}</p>
                            </div>
                            <div className="one-line">
                                <p className="gray-text-13">Contact</p> <p
                                className="black-text-13">{props.contacts}</p>
                            </div>
                            <div className="one-line">
                                <p className="gray-text-13">웹사이트&nbsp;</p> <p
                                className="black-text-13">{props.site}</p>
                            </div>
                            <p className="gray-text-13">상세 페이지&nbsp;</p>
                            <p className="black-text-13 preline">{props.info}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LabProfile;