import "./styles.css";
import { ReactComponent as PdfLogo } from "./DocText.svg";
export const detailElement = {
  name: (node: any, options: any) => {
    console.log("nodess", node, options);
    const breadcrumbText =
      "Expedientes > Contenido Islas Baleares > Expedientes Mater...";
    return (
      <div className="nameParent">
        <div className="nameFirst">
          <h4>Nombre del documento</h4>
        </div>
        <div className="nameSecond">
          <div className="leftElements">
            <div className="text">Documento - PDF</div>
            <span className="pi pi-arrow-right-arrow-left icon"></span>
          </div>
          <div className="rightElements">{breadcrumbText}</div>
        </div>
      </div>
    );
  },
  icon: (node: any, options: any) => {
    return (
      <div className="logoMain">
        <PdfLogo />
      </div>
    );
  },
};
