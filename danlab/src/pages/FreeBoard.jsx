import React, {useEffect, useState} from 'react';
import './FreeBoard.css';
import logo_danlab from "../images/logo_danlab.png"
import line_2 from "../images/line_2.png"
import ic_menu from "../images/ic_menu.png"
import FreePostTable from "../components/FreePostTable";
import {getArticleList, getLabIdEventList, getLabInfo} from "../Fetch";

const freePosts = [
    {
        id: 0,
        memberId: 0,
        title: '',
        detail: '',
        category: '',
    },
];

const projectReviews = [
    {
        id: 0,
        memberId: 0,
        title: '프로젝트 후기',
        detail: '연구실에서의 첫 프로젝트를 마치며...',
        category: 'REVIEW',
    },
    {
        id: 0,
        memberId: 0,
        title: '프로젝트 후기',
        detail: '프로젝트 유경험자가 알려주는 프로젝트 기본 꿀팁',
        category: 'REVIEW',
    },
];

const projectTechs = [
    {
        id: 0,
        memberId: 0,
        title: 'Storage 시스템에 관한 배경지식',
        detail: '본격적인 스토리지 시스템 교육에 앞서..',
        category: 'TECH',
    },
    {
        id: 0,
        memberId: 0,
        title: '클라우드 컴퓨팅 기본 개념',
        detail: '클컴 수업 유경험자가 알려주는 기술 꿀팁',
        category: 'TECH',
    },
    {
        id: 0,
        memberId: 0,
        title: '쿠버네티스 정복하기',
        detail: '쿠버네티스에서 MSA 구축하기',
        category: 'TECH',
    },
];

function FreeBoard(props) {
    const [currentTable, setCurrentTable] = useState('free');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [freePostList, setFreePosts] = useState(freePosts);

    const moveToMain = () => {
        window.location.href = '/main';
        console.log('move to main');
    };

    const makePost = () => {
        window.location.href = '/post';
        console.log('move to post');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { name: '프로필', link: '/profile' },
        { name: '연구실 소개', link: '/main' },
        { name: '연구실 일상 공유', link: '/free-board' },
    ];

    const showFreePosts = () => {
        setCurrentTable('free');
    };

    const showProjectReviews = () => {
        setCurrentTable('review');
    };

    const showProjectTechs = () => {
        setCurrentTable('tech');
    };

    const renderTable = () => {
        switch (currentTable) {
            case 'free':
                return <FreePostTable table={freePostList} />;
            case 'review':
                return <FreePostTable table={projectReviews} />;
            case 'tech':
                return <FreePostTable table={projectTechs} />;
            default:
                return null;
        }
    };

    const setFreePostList = async () => {
        const response = await getArticleList();
        const data = response.data.res_obj.content;

        setFreePosts(data)

        console.log(data);
    }

    useEffect(() => {
        setFreePostList();
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
                <p className="board-title">연구실 일상 공유</p>
            </div>
            <div className="category">
                <p
                    className={currentTable === 'free' ? "clicked-category" : "unclicked-category"}
                    onClick={showFreePosts}
                >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;자유
                    일상
                </p>
                <p className="divider">|</p>
                <p
                    className={currentTable === 'review' ? "clicked-category" : "unclicked-category"}
                    onClick={showProjectReviews}
                >
                    프로젝트 참여 후기
                </p>
                <p className="divider">|</p>
                <p
                    className={currentTable === 'tech' ? "clicked-category" : "unclicked-category"}
                    onClick={showProjectTechs}
                >
                    프로젝트 관련 기술
                </p>
            </div>
            {renderTable()}
            <div className="div-make-post-button">
                <button className="make-post-button" type="submit" onClick={makePost}>글쓰기</button>
            </div>
        </div>
    );
}

export default FreeBoard;
