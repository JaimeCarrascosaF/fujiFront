import { Column } from "primereact/column";
import { TreeTable, TreeTableExpandedKeysType } from "primereact/treetable";
import { useEffect, useState } from "react";
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
import { tableDataType } from "../../types/tableDataType";
import { Button } from "primereact/button";

const Table = () => {
  const [selectedNodeKeys, setSelectedNodeKeys] = useState<{
    [index: string]: any;
  }>({});
  const [expandedKeys, setExpandedKeys] = useState<
    TreeTableExpandedKeysType | undefined
  >();
  const [tableData, setTableData] = useState<tableDataType>([]);

  const togglerTemplate = (node: any, options: any) => {
    if (!node || checkIfChildren(node)) {
      return detailElement.icon();
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
            let selectedKeys = { ...selectedNodeKeys };
            if (!e.checked) {
              delete selectedKeys[node.key];
            } else {
              const obj = {
                [node.key]: e.checked,
              };
              selectedKeys = { ...selectedKeys, ...obj };
            }
            setSelectedNodeKeys(selectedKeys);
            console.log("selected", selectedKeys);
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

  useEffect(() => {
    const data = createTableData();
    setTableData(data);
  }, [setTableData]);

  const toggleExpandKeys = (open: boolean) => {
    const _expandedKeys = { ...expandedKeys };
    if (!open) return setExpandedKeys({});
    tableData.forEach((element: any) => {
      _expandedKeys[element.key] = open;
    });
    setExpandedKeys(_expandedKeys);
  };
  const deleteSelectedKeys = () => {
    const _tableData = [...tableData];
    for (const key in selectedNodeKeys) {
      const indexToDelete = _tableData.findIndex(
        (e) => Number(e.key) === Number(key)
      );
      _tableData.splice(indexToDelete, 1);
    }
    setSelectedNodeKeys({});
    setTableData(_tableData);
  };
  const header = (
    <div className="header">
      <div className="text-sm leftText">
        Contiene {tableData.length} elementos
      </div>
      <div className="rightText">
        {Object.keys(selectedNodeKeys).length > 0 && (
          <div className="deletebutton">
            <Button
              label={`Eliminar (${Object.keys(selectedNodeKeys).length})`}
              icon="pi pi-trash"
              onClick={() => deleteSelectedKeys()}
            />
          </div>
        )}
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
