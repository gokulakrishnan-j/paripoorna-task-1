import React from "react";
import "./Table.css";
import TableData from "../Tabledata/TableData";
import TableHead from "../Tablehead/TableHead";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function Table({ rest }) {
  return (
    <div>
      <h4>Dash Board</h4>
      <table className="table">
        {/* Table head*/}
        <thead>
          <tr>
            {rest.tableHeadData.map((d, i) => (
              <TableHead data={d} key={i} />
            ))}
          </tr>
        </thead>
        {/* Table body to display data */}
        <tbody>
          {rest.tableBodyData.map((d, i) => (
            <tr key={i}>
              <TableData data={i + 1} />
              <TableData data={d.name} />
              <TableData data={d.email} />
              <TableData data={d.age} />
              <TableData data={d.branch} />
              <TableData data={d.department.join(" & ")} />
              <TableData data={d.gender} />
              <div className="icons">
                {/* Edit button */}
                <EditIcon
                  className="editIcon"
                  onClick={() => rest.edit({ type: "edit", payload: d })}
                />
                {/* Delete button */}
                <DeleteIcon
                  className="deleteIcon"
                  onClick={() => rest.deletes({ type: "delete", payload: d })}
                />
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
