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
          },
        },
      ],
    });
  }
  return arrData;
};
export const header = <div className="text-sm">Contiene 286 elementos</div>;
export const nameTemplate = (node: any, options: any) => {
  if (!node) {
    return;
  }
  return (
    <div className="nameParent">
      <div className="nameFirst">asd</div>
      <div className="nameSecond">
        <div className="leftElements">left</div>
        <div className="rightElements">right</div>
      </div>
    </div>
  );
};
export const tagTemplate = (node: any, options: any) => {
  if (!node) {
    return;
  }
  return (
    <div className="nameParent">
      <span className="pi pi-file-pdf"></span>
    </div>
  );
};
export const statusTemplate = (node: any, options: any) => {
  if (!node) {
    return;
  }
  return (
    <div className="nameParent">
      <span className="pi pi-file-pdf"></span>
    </div>
  );
};
export const dateTemplate = (node: any, options: any) => {
  if (!node) {
    return;
  }
  return (
    <div className="nameParent">
      <span className="pi pi-file-pdf"></span>
    </div>
  );
};
export const idTemplate = (node: any, options: any) => {
  if (!node) {
    return;
  }
  return (
    <div className="nameParent">
      <span className="pi pi-file-pdf"></span>
    </div>
  );
};
