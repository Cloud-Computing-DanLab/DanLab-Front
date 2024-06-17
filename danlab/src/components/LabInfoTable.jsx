import React from "react";
import { useNavigate } from 'react-router-dom';
import './LabInfoTable.css';

function LabInfoTable(props) {
    const navigate = useNavigate();

    const handleRowClick = (labId) => {
        navigate(`/labs/${labId}`);
    };
    return (
        <div className="board-table-container">
            <table>
                <thead>
                <tr>
                    <th>연구실명</th>
                    <th>지도교수</th>
                    <th>상세페이지</th>
                    <th>Contact</th>
                </tr>
                </thead>
                <tbody>
                {props.table.map((lab, index) => (
                    <tr key={lab.id} onClick={() => handleRowClick(lab.id)}>
                        <td>{lab.name}</td>
                        <td>{lab.leader}</td>
                        <td>{lab.info}</td>
                        <td>{lab.contacts}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default LabInfoTable;