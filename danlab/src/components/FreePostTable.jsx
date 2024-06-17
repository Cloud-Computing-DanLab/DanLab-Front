import React from "react";
import './LabInfoTable.css';
import {useNavigate} from "react-router-dom";

function FreePostTable(props) {
    const navigate = useNavigate();

    const handleRowClick = (id) => {
        navigate(`/free/${id}`);
    };
    return (
        <div className="board-table-container">
            <table>
                <thead>
                <tr>
                    <th>제목</th>
                    <th>내용</th>
                    <th>카테고리</th>
                </tr>
                </thead>
                <tbody>
                {props.table.map((lab, index) => (
                    <tr key={lab.id} onClick={() => handleRowClick(lab.id)}>
                        <td>{lab.title}</td>
                        <td>{lab.detail}</td>
                        <td>{lab.category}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default FreePostTable;