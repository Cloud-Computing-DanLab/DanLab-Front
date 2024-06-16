import React from "react";
import './LabInfoTable.css';

function LabInfoTable(props) {
    return (
        <div className="board-table-container">
            <table>
                <thead>
                <tr>
                    <th>연구실명</th>
                    <th>주요 연구 분야</th>
                    <th>지도교수</th>
                    <th>소속</th>
                    <th>연락처</th>
                </tr>
                </thead>
                <tbody>
                {props.table.map((lab, index) => (
                    <tr key={index}>
                        <td>{lab.name}</td>
                        <td>{lab.researchField}</td>
                        <td>{lab.professor}</td>
                        <td>{lab.department}</td>
                        <td>{lab.contact}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default LabInfoTable;