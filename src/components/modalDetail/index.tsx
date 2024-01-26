import { Dialog } from "primereact/dialog";
import { Dispatch, SetStateAction } from "react";
import { detailElement } from "../detailElement";
import "./styles.css";
export function ModalDetail({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <Dialog
        header="Detalle del documento"
        visible={visible}
        style={{ width: "80vw" }}
        onHide={() => setVisible(false)}
      >
        <div className="dialog">{detailElement.name()}</div>
      </Dialog>
    </>
  );
}
