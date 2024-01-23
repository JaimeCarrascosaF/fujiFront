
export const createTableData = () => {
    const arrData = [];
    for (let index = 0; index < 286; index++) {
      arrData.push({
        key: index,
        data: header,
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