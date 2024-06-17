import React, {useEffect, useState} from 'react';
import './LabInfo.css';
import logo_danlab from "../images/logo_danlab.png";
import ic_menu from "../images/ic_menu.png";
import line_2 from "../images/line_2.png";
import LabProfile from "../components/LabProfile";
import LabProjectTable from "../components/LabProjectTable";
import {getLabIdEventList, getLabInfo} from "../Fetch";
import {useParams} from "react-router-dom";

const labData = {
    name: 'BoanLab',
    contacts: 'SW융합대학 컴퓨터공학과',
    leader: '남재현',
    info: `https://www.boanlab.com`,
    site: `https://www.boanlab.com`,
};

const projects = [
    {
        id: 100,
        title: '다수의 자세 추정 모델 경량화 프로젝트',
        detail: '알고리즘 연구실',
    },
];

const LabInfo = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [labInfo, setLabInfo] = useState(labData);
    const [projectInfo, setProjectInfo] = useState(projects);
    const { labId } = useParams();

    const moveToMain = () => {
        window.location.href = '/main';
        console.log('move to main');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { name: '프로필', link: '/profile' },
        { name: '연구실 소개', link: '/main' },
        { name: '연구실 일상 공유', link: '/free-board' },
    ];

    const setLabProfile = async (labId) => {
        const response = await getLabInfo(labId);
        const data = response.data.res_obj;

        setLabInfo(data)

        console.log(data);
    }

    const setLabEvents = async (labId) => {
        const response = await getLabIdEventList(labId);
        const data = response.data.res_obj.content;

        setProjectInfo(data)

        console.log(data);
    }

    useEffect(() => {
        setLabProfile(labId);
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
                <p className="board-title" onClick={moveToMain}>연구실 정보</p>
            </div>
            <div className="lab-info-container">
                <LabProfile name={labInfo.name} info={labInfo.info} leader={labInfo.leader}
                            contacts={labInfo.contacts} site={labInfo.site}/>
            </div>
            {/*<div className="lab-info-container">*/}
            {/*    <p className="lab-profile-title">연구실 소속 프로젝트</p>*/}
            {/*    /!*<LabProjectTable table={projectInfo}/>*!/*/}
            {/*</div>*/}
        </div>

    );
};

export default LabInfo;
