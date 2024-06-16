import React from "react";
import './LabInfoTable.css';

function LabProjectTable(props) {
    return (
        <div className="board-table-container">
            <table>
                <thead>
                <tr>
                    <th>프로젝트/이벤트명</th>
                    <th>소속 연구실</th>
                    <th>소속 학과</th>
                </tr>
                </thead>
                <tbody>
                {props.table.map((lab, index) => (
                    <tr key={index}>
                        <td>{lab.project}</td>
                        <td>{lab.labName}</td>
                        <td>{lab.department}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default LabProjectTable;