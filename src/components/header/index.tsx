import { Button } from "primereact/button";
import "./styles.css";
import { InputText } from "primereact/inputtext";

const Header = ({ children }: { children: any }) => {
  return (
    <>
      <div className="mainContent">
        <div className="headerArea">
          <div className="left">
            <Button icon="pi pi-arrow-left" outlined className="button" />
            <i className="pi pi-folder icon"></i>
            <h2>Expedientes material</h2>
          </div>
          <div className="right">
            <span className="flex p-input-icon-left search">
              <i className="pi pi-search" />
              <InputText placeholder="Buscar por nombre" />
              <Button icon="pi pi-sliders-h" className="button" />
            </span>
          </div>
        </div>
        <div className="tableArea">{children}</div>
      </div>
    </>
  );
};

export default Header;
