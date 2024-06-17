import React from "react";
import './LabInfoTable.css';
import {useNavigate} from "react-router-dom";

function LabProjectTable(props) {
    const navigate = useNavigate();

    const handleRowClick = (id) => {
        navigate(`/lab-event/${id}`);
    };

    return (
        <div className="board-table-container">
            <table>
                <thead>
                <tr>
                    <th>프로젝트/이벤트명</th>
                    <th>상세 설명</th>
                </tr>
                </thead>
                <tbody>
                {props.table.map((lab, index) => (
                    <tr key={lab.id} onClick={() => handleRowClick(lab.id)}>
                        <td>{lab.title}</td>
                        <td>{lab.detail}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default LabProjectTable;