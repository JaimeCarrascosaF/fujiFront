import { Column } from "primereact/column";
import { TreeTable } from "primereact/treetable";
import { useState } from "react";
import { classNames } from "primereact/utils";
import { Checkbox } from "primereact/checkbox";
import "./styles.css";
import {
  createTableData,
  dateTemplate,
  header,
  idTemplate,
  nameTemplate,
  statusTemplate,
  tagTemplate,
} from "./utils";

const Table = () => {
  const [selectedNodeKeys, setSelectedNodeKeys] = useState<{
    [index: string]: any;
  }>({});
  const togglerTemplate = (node: any, options: any) => {
    if (!node) {
      return;
    }

    const expanded = options.expanded;
    const iconClassName = classNames("p-treetable-toggler-icon pi pi-fw", {
      "pi-angle-right": !expanded,
      "pi-angle-down": expanded,
    });

    return (
      <div className="toggleParent">
        <Checkbox
          className="checkbox"
          onChange={(e) => {
            const obj = {
              [node.key]: e.checked,
            };
            const selectedKeys = { ...selectedNodeKeys, ...obj };
            setSelectedNodeKeys(selectedKeys);
          }}
          checked={selectedNodeKeys[node.key]}
        ></Checkbox>
        <button
          type="button"
          className="p-treetable-toggler p-link buttonToggle"
          style={options.buttonStyle}
          tabIndex={-1}
          onClick={options.onClick}
        >
          <span className={iconClassName} aria-hidden="true"></span>
        </button>
        <span className="pi pi-file-pdf flex"></span>
      </div>
    );
  };
  const tableData = createTableData();
  return (
    <div className="card">
      <TreeTable
        value={tableData}
        tableStyle={{ minWidth: "50rem" }}
        header={header}
        paginator
        rows={10}
        scrollable
        rowsPerPageOptions={[10, 25]}
        togglerTemplate={togglerTemplate}
        scrollHeight="600px"
      >
        <Column
          field="toggler"
          header=""
          expander
          style={{ width: "10%" }}
        ></Column>
        <Column
          field="name"
          header="Nombre"
          sortable
          body={nameTemplate}
          style={{ width: "45%", height: "3.5rem" }}
        ></Column>
        <Column
          field="tag"
          header="Etiqueta"
          sortable
          body={tagTemplate}
          style={{ width: "12%" }}
        ></Column>
        <Column
          field="status"
          header="Estado"
          sortable
          body={statusTemplate}
          style={{ width: "25%" }}
        ></Column>
        <Column
          field="date"
          header="Fecha"
          sortable
          body={dateTemplate}
          style={{ width: "15%" }}
        ></Column>
        <Column
          field="id"
          header="ID"
          sortable
          body={idTemplate}
          style={{ width: "10%" }}
        ></Column>
      </TreeTable>
    </div>
  );
};

export default Table;
