import { Column } from "primereact/column";
import { TreeTable, TreeTableExpandedKeysType } from "primereact/treetable";
import { useState } from "react";
import { classNames } from "primereact/utils";
import { Checkbox } from "primereact/checkbox";
import "./styles.css";
import {
  checkIfChildren,
  createTableData,
  dateTemplate,
  idTemplate,
  nameTemplate,
  starTemplate,
  statusTemplate,
  tagTemplate,
} from "./utils";
import { detailElement } from "../detailElement";

const Table = () => {
  const [selectedNodeKeys, setSelectedNodeKeys] = useState<{
    [index: string]: any;
  }>({});
  const [expandedKeys, setExpandedKeys] = useState<
    TreeTableExpandedKeysType | undefined
  >();

  const togglerTemplate = (node: any, options: any) => {
    if (!node || checkIfChildren(node)) {
      return detailElement.icon(node, options);
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
        <span className="pi pi-file-pdf flex pdfIcon"></span>
      </div>
    );
  };
  const tableData = createTableData();

  const toggleExpandKeys = (open: boolean) => {
    const _expandedKeys = { ...expandedKeys };
    if (!open) return setExpandedKeys({});
    tableData.forEach((element) => {
      _expandedKeys[element.key] = open;
    });
    setExpandedKeys(_expandedKeys);
  };
  const header = (
    <div className="header">
      <div className="text-sm leftText">Contiene 286 elementos</div>
      <div className="rightText">
        <div className="left" onClick={() => toggleExpandKeys(true)}>
          <span className="pi pi-plus flex"></span>
          <div className="collapseText">Expand all</div>
        </div>
        <div className="right" onClick={() => toggleExpandKeys(false)}>
          <span className="pi pi-minus flex"></span>
          <div className="collapseText">Collapse all</div>
        </div>
      </div>
    </div>
  );
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
        scrollHeight="73vh"
        onToggle={(e) => setExpandedKeys(e.value)}
        expandedKeys={expandedKeys}
      >
        <Column
          field="toggler"
          header=""
          expander
          style={{ width: "10%", height: "85px" }}
        ></Column>
        <Column
          field="name"
          header="Nombre"
          sortable
          body={nameTemplate}
          style={{ width: "45%", height: "85px" }}
        ></Column>
        <Column
          field="tag"
          header="Etiqueta"
          sortable
          body={tagTemplate}
          style={{ width: "12%", height: "85px" }}
        ></Column>
        <Column
          field="status"
          header="Estado"
          sortable
          body={statusTemplate}
          style={{ width: "25%", height: "85px" }}
        ></Column>
        <Column
          field="date"
          header="Fecha"
          sortable
          body={dateTemplate}
          style={{ width: "15%", height: "85px" }}
        ></Column>
        <Column
          field="id"
          header="ID"
          sortable
          body={idTemplate}
          style={{ width: "10%", height: "85px" }}
        ></Column>
        <Column
          field="star"
          header=""
          body={starTemplate}
          style={{ width: "8%", height: "85px" }}
        ></Column>
      </TreeTable>
    </div>
  );
};

export default Table;
