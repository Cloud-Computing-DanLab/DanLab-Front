import React, {useEffect, useState} from 'react';
import './ProjectInfo.css';
import logo_danlab from "../images/logo_danlab.png";
import ic_menu from "../images/ic_menu.png";
import line_2 from "../images/line_2.png";
import line_1 from "../images/line_1.png";
import {useParams} from "react-router-dom";
import {getLabEventInfo, getLabInfo} from "../Fetch";

const ProjectInfo = () => {
    const [project, setProject] = useState({
        title: '',
        detail: '',
        category: '',
        status: '',
    });

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { id } = useParams();

    const moveToMain = () => {
        window.location.href = '/main';
        console.log('move to main');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        {name: '프로필', link: '/profile'},
        {name: '연구실 소개', link: '/main'},
        {name: '연구실 일상 공유', link: '/free-board'},
    ];

    const setProjectInfo = async (id) => {
        const response = await getLabEventInfo(id);
        const data = response.data.res_obj;

        setProject(data)

        console.log(data);
    }

    useEffect(() => {
        setProjectInfo(id);
    }, []);

    return (
        <div className="container">
            <div className="title-container">
                <div className="title-top">
                    <img src={logo_danlab} alt="DanLab Logo" className="logo-danlab-small" onClick={moveToMain}/>
                    <div className="menu-container">
                        <img src={ic_menu} alt="menu" width="35" height="35" onClick={toggleMenu}
                             className="icon-menu"/>
                        {isMenuOpen && (
                            <div className="dropdown-menu">
                                {menuItems.map((item, index) => (
                                    <a key={index} href={item.link} className="menu-item">{item.name}</a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <img src={line_2} alt="Line" className="line-2"/>
                <p className="board-title" onClick={moveToMain}>프로젝트/이벤트 정보</p>
            </div>
            <div className="project-body-container">
                <div className="one-line-pj">
                    <p className="black-text-13">제목&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <p
                        className="black-text-13-r">{project.title}</p>
                </div>
                <img src={line_1} alt="Line" className="line-2"/>
                <div className="one-line-space">
                    <div className="one-line-pj">
                        <p className="black-text-13">카테고리</p> <p
                        className="black-text-13-r">{project.category}</p>
                    </div>
                    <div className="one-line-pj">
                        <p className="black-text-13">Status</p> <p
                        className="black-text-13-r">진행 중</p>
                    </div>

                </div>
                <img src={line_1} alt="Line" className="line-2"/>
                <div className="one-line-pj">
                    <p className="black-text-13">내용</p>
                    <p className="black-text-13-r-block">{project.detail}</p>
                </div>
                <div className="line-container">
                    <img src={line_1} alt="Line" className="line-2"/>
                </div>
            </div>
        </div>
    );
};

export default ProjectInfo;
