import React from "react";
import './ProfileCard.css';
import ic_student from "../images/ic_student.png";
import ic_student_lab from "../images/ic_student_lab.png";

function ProfileCard(props) {
    return (
            <div className="profile-card-container">
                <div className="profile-info">
                    <div className="profile-item">
                        {props.affiliation === '연구생' && (
                            <img src={ic_student_lab} className="icon" alt="Student in Lab"/>
                        )}
                        {props.affiliation === '학부생' && (
                            <img src={ic_student} className="icon" alt="Student"/>
                        )}
                        <div>
                            <div className="one-line">
                                <p className="gray-text-13">이름</p> <p className="black-text-13">{props.name}</p>
                            </div>
                            <div className="one-line">
                                <p className="gray-text-13">학과</p> <p className="black-text-13">{props.department}</p>
                            </div>
                            <div className="one-line">
                                <p className="gray-text-13">학년</p> <p className="black-text-13">{props.year}</p>
                            </div>
                            <div className="one-line">
                                <p className="gray-text-13">소속</p> <p className="black-text-13">{props.affiliation}</p>
                            </div>
                            {props.affiliation === '연구생' && (
                                <div className="one-line">
                                    <p className="gray-text-13">연구실</p>
                                    <p className="black-text-13">{props.lab}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="profile-introduction">
                    <p className="gray-text-13">자기소개</p>
                    <p className="black-text-13">{props.introduction}</p>
                </div>
            </div>
    );
}

export default ProfileCard;