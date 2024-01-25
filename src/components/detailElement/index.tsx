import "./styles.css";
import { ReactComponent as PdfLogo } from "./DocText.svg";
export const detailElement = {
  name: (node: any, options: any) => {
    console.log("nodess", node, options);
    return (
      <div className="nameChildParent">
        <div className="textChild">
          <div className="graytext flex first">Nombre del documento.pdf</div>
          <div className="subtitletext flex">
            Departamento de origen de este documento, puede doblar las lineas
            que sean necesarias
          </div>
          <div className="graytext flex">Evaluación de la fuente</div>
          <div className="subtitletext flex">Evaluación</div>
        </div>
        <div className="textChild">
          <div className="graytext flex first">Plantilla utilizada</div>
          <div className="subtitletext flex">
            Nombre de plantilla para este doc
          </div>
          <div className="graytext flex">Fecha de creación</div>
          <div className="subtitletext flex">20/05/2023 - 12:20 h</div>
        </div>
        <div className="textChild">
          <div className="graytext flex first">Restricciones del documento</div>
          <div className="subtitletext flex">
            3 restricciones <div className="seeRestrictions">Ver</div>
          </div>
          <div className="graytext flex">Etiquetas</div>
          <div className="subtitletext flex">
            <span>Etiqueta 1,Etiqueta 2,Etiqueta 3,Etiqueta 4,Etiqueta 5,</span>
            <div className="plustag">+3</div>
          </div>
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
