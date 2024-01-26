import { InputText } from "primereact/inputtext";
import { Menu } from "primereact/menu";
import "./styles.css";
import { Tree } from "primereact/tree";
import { treeData } from "../../mocks/treeData";
import { useState } from "react";

const items = [
  {
    template: () => {
      return (
        <span className="flex p-input-icon-left searchBox">
          <i className="pi pi-search" />
          <InputText placeholder="Filtrar carpetas del expediente" />
        </span>
      );
    },
  },
  {
    template: () => {
      return <ListTree />;
    },
  },
];
const Sidebar = () => {
  return (
    <div className="flex mainSidebar">
      <Menu model={items} className="menuSidebar" />
    </div>
  );
};

function ListTree() {
  const [selectedKey, setSelectedKey] = useState("");
  return (
    <div className="flex">
      <Tree
        value={treeData}
        className="flex treeElement"
        selectionMode="single"
        selectionKeys={selectedKey}
        onSelectionChange={(e: any) => setSelectedKey(e.value)}
      />
    </div>
  );
}

export default Sidebar;
