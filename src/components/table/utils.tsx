import { classNames } from "primereact/utils";

export const createTableData = () => {
  const arrData = [];
  for (let index = 0; index < 286; index++) {
    arrData.push({
      key: index,
      data: "asd",
      children: [
        {
          key: "0-0",
          data: {
            name: "Applications",
            tag: "100kb",
            status: "Folder",
            date: "Folder",
            id: "Folder",
            star: "Folder",
          },
        },
      ],
    });
  }
  return arrData;
};
export const header = <div className="text-sm">Contiene 286 elementos</div>;
export const nameTemplate = () => {
  console.log("name");
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
};
export const tagTemplate = (node: any, options: any) => {
  if (!node) {
    return;
  }
  return (
    <div className="tagParent">
      <div className="tagone">
        <span className="pi pi-briefcase icon"></span>
        <div className="text">+99</div>
      </div>
      <div className="tagtwo">
        <span className="pi pi-box icon"></span>
        <div className="text">+82</div>
      </div>
    </div>
  );
};
export const statusTemplate = (node: any, options: any) => {
  if (!node) {
    return;
  }
  console.log("dos");
  const keysToDraw = [1, 4];
  const drawError =
    (keysToDraw.includes(node.key) || node.key % 4 === 0) && node.key !== 0;
  const valPend = node.key === 1 ? 3 : 1;
  const errorareaClassNames = classNames("errorarea", {
    orange: valPend === 1,
    red: valPend !== 1,
  });
  return (
    <div className="statusParent">
      <div className="processedtext">Procesado</div>
      {drawError && (
        <div className={errorareaClassNames}>
          <div className="errortext">
            <div className="first">
              {valPend} validaciones de grafo pendientes
            </div>
            <div className="second">1 asignada a mí</div>
          </div>
          <div className="erroricon">
            <span className="pi pi-info-circle"></span>
          </div>
        </div>
      )}
    </div>
  );
};
export const dateTemplate = (node: any, options: any) => {
  if (!node) {
    return;
  }
  return (
    <div className="dateParent">
      <div className="datetext">20/05/2023 - 12:20</div>
    </div>
  );
};
export const idTemplate = (node: any, options: any) => {
  if (!node) {
    return;
  }
  return (
    <div className="idParent">
      <div className="idtext">12546793</div>
    </div>
  );
};

const starredKeys: {
  [index: string]: any;
} = {};
export const starTemplate = (node: any, options: any) => {
  if (!node) {
    return;
  }
  starredKeys[node.key] = "pi-star";
  let starClassName = "pi " + starredKeys[node.key];
  return (
    <div className="idParent">
      <div
        onClick={(e: any) => {
          e.preventDefault();
          e.target.classList.remove(starredKeys[node.key]);
          starredKeys[node.key] =
            starredKeys[node.key] === "pi-star" ? "pi-star-fill" : "pi-star";
          e.target.classList.add(starredKeys[node.key]);
        }}
      >
        <span className={starClassName}></span>
      </div>
      <span className="pi pi-ellipsis-v"></span>
    </div>
  );
};
