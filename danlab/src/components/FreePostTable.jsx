import React from "react";
import './LabInfoTable.css';

function FreePostTable(props) {
    return (
        <div className="board-table-container">
            <table>
                <thead>
                <tr>
                    <th>제목</th>
                    <th>작성자</th>
                </tr>
                </thead>
                <tbody>
                {props.table.map((lab, index) => (
                    <tr key={index}>
                        <td>{lab.name}</td>
                        <td>{lab.writer}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default FreePostTable;