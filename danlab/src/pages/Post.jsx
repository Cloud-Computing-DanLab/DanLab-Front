import React, {useState} from 'react';
import './Post.css';
import logo_danlab from "../images/logo_danlab.png"
import line_2 from "../images/line_2.png"
import ic_menu from "../images/ic_menu.png"
import {makeArticle, register} from "../Fetch";

function Post() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [postData, setPostData] = useState({
        member_id: 1,
        title: "",
        detail: "",
        category: ""
    })

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        {name: '프로필', link: '/profile'},
        {name: '연구실 소개', link: '/main'},
        {name: '연구실 일상 공유', link: '/free-board'},
    ];

    const moveToMain = () => {
        window.location.href = '/main';
        console.log('move to main');
    };

    const moveToFreeBoard = () => {
        window.location.href = '/free-board';
        console.log('move to free');
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPostData({
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postInfo(e);
        // moveToFreeBoard();
    };

    const postInfo = async (body) => {
        try {
            const response = await makeArticle(body);
            console.log(response);
        } catch (error) {
            // alert("올바르지 못한 코드 값 입니다.")
            // window.location.href = '/';
        }
    }

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
                <p className="board-title">게시글 작성</p>
            </div>
            <div className="post-body-container">
                <form onSubmit={handleSubmit}>
                    <div className="post-input-container">
                        <label className="post-label">
                            제목
                        </label>
                        <input className="post-input" type="text" name="title" value={postData.title}
                               onChange={handleChange}/>
                    </div>
                    <div className="post-input-container">
                        <label className="post-label">
                            카테고리
                        </label>
                        <input className="post-input set-margin" type="text" name="writer" value={postData.category}
                               onChange={handleChange}/>
                    </div>
                    <div className="post-input-container">
                        <label className="post-label">
                            내용
                        </label>
                        <textarea className="post-content" name="content" value={postData.detail}
                                  onChange={handleChange}></textarea>
                    </div>
                </form>
            </div>
            <div className="div-post-button">
                <button className="make-post-button" type="submit" onClick={handleSubmit}>등록하기</button>
            </div>
        </div>
    );
}

export default Post;
