import React, {useState} from 'react';
import logo_danlab from "../images/logo_danlab.png"
import line_2 from "../images/line_2.png"
import ic_menu from "../images/ic_menu.png"
import FreePostTable from "../components/FreePostTable";

const freePosts = [
    {
        name: '연구실 생활 한달 후기',
        writer: '이주성',
    },
    {
        name: '연구실 청소 당법 제비뽑기 결과',
        writer: '남재현',
    },
    {
        name: '소프트웨어학과 연구실에서 함께 연구 하실 분 구합니다',
        writer: '탁세하',
    },
];

const projectReviews = [
    {
        name: '연구실에서의 첫 프로젝트를 마치며...',
        writer: '이주성',
    },
    {
        name: '프로젝트 유경험자가 알려주는 프로젝트 기본 꿀팁',
        writer: '탁세하',
    },
];

const projectTechs = [
    {
        name: 'Storage 시스템에 관한 배경지식',
        writer: '최종무',
    },
    {
        name: '클라우드 컴퓨팅 기본 개념',
        writer: '남재현',
    },
    {
        name: '쿠버네티스 정복하기',
        writer: '이주성',
    },
];

function FreeBoard(props) {
    const [currentTable, setCurrentTable] = useState('free');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                return <FreePostTable table={freePosts} />;
            case 'review':
                return <FreePostTable table={projectReviews} />;
            case 'tech':
                return <FreePostTable table={projectTechs} />;
            default:
                return null;
        }
    };

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
        </div>
    );
}

export default FreeBoard;
