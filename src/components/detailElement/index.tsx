import "./styles.css";
import { ReactComponent as PdfLogo } from "./DocText.svg";
import { OverlayPanel } from "primereact/overlaypanel";
import { useRef } from "react";
export const detailElement = {
  name: (node: any, options: any) => {
    console.log("nodess", node, options);
    const tags = [1, 2, 3, 4, 5, 6, 7, 8];
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
          <div className="subtitletext flex">{renderTags(tags)}</div>
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

const renderTags = (tags: number[]) => {
  return tags.map((val, index, arr) => {
    if (index < 5) {
      return <div className="tagsText">Etiqueta {val},</div>;
    } else if (index === 5) return TextOverlay(arr);
    return null;
  });
};

function TextOverlay(arr: any) {
  const op = useRef<OverlayPanel>(null!);

  return (
    <>
      <div className="plustag" onClick={(e) => op.current.toggle(e)}>
        +{arr.length - 5}
      </div>
      <OverlayPanel ref={op}>
        <div className="textoverlay">textoverlay</div>
      </OverlayPanel>
    </>
  );
}
