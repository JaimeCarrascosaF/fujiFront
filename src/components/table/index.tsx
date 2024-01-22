import { Column } from "primereact/column";
import { TreeTable, TreeTableSelectionKeysType } from "primereact/treetable";
import { tableData } from "../../mocks/tableData";
import { useState } from "react";

const Table = () => {
  const [selectedNodeKeys, setSelectedNodeKeys] =
    useState<TreeTableSelectionKeysType | null>(null);

  return (
    <div className="card">
      <TreeTable
        value={tableData}
        selectionMode="checkbox"
        selectionKeys={selectedNodeKeys}
        onSelectionChange={(e) => setSelectedNodeKeys(e.value)}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="name" header="Name" expander></Column>
        <Column field="size" header="Size"></Column>
        <Column field="type" header="Type"></Column>
      </TreeTable>
    </div>
  );
};

export default Table;
