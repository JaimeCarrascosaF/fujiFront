import { OverlayPanel } from "primereact/overlaypanel";
import { useRef } from "react";
import "./styles.css";
export function DetailsOverlay() {
  const op = useRef<OverlayPanel>(null!);
  return (
    <>
      <span
        className="pi pi-ellipsis-v dots"
        onClick={(e) => op.current.toggle(e)}
      ></span>
      <OverlayPanel ref={op}>
        <DetailsElements />
      </OverlayPanel>
    </>
  );
}

function DetailsElements() {
  return (
    <div className="flex detailsMain">
      <div className="textBlack">Introducción directa</div>
      <div className="iconandtext">
        <span className="pi pi-book"></span>
        <div>Por su i3ID</div>
      </div>
      <div className="iconandtext">
        <span className="pi pi-star-fill"></span>
        <div>De Mis favoritos</div>
      </div>
      <div className="iconandtext">
        <span className="pi pi-search"></span>
        <div>Buscando en el expediente</div>
      </div>
      <div className="textBlack">Introducción manual</div>
      <div className="iconandtext">
        <span className="pi pi-plus"></span>
        <div>Buscar o crear nueva</div>
      </div>
      <div className="textBlack">Introducción asistida</div>
      <div className="iconandtext prelast">
        <span className="pi pi-download"></span>
        <div>Extractor automático</div>
      </div>
      <div className="iconandtext last">
        <span className="pi pi-info-circle"></span>
        <div>Ayuda a la introducción de entidades</div>
      </div>
    </div>
  );
}
