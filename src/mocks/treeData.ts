export const treeData = [
  {
    key: "0",
    label: "Bandeja de entrada",
    data: "Documents Folder",
    icon: "pi pi-fw pi-inbox",
    children: [
      {
        key: "0-0",
        label: "Work",
        data: "Work Folder",
        icon: "pi pi-fw pi-cog",
        children: [],
      },
    ],
  },
  {
    key: "1",
    label: "Contenido de Islas Baleares",
    data: "Events Folder",
    icon: "pi pi-fw pi-folder-open",
    children: [
      {
        key: "1-0",
        label: "Expedientes personal",
        icon: "pi pi-fw pi-folder",
        data: "Meeting",
      },
      {
        key: "1-1",
        label: "Expedientes material",
        icon: "pi pi-fw pi-folder",
        data: "Product Launch",
      },
    ],
  },
];
