import { Modal } from "flowbite-react";
import { ReactNode } from "react";

interface customModalInterface {
  header?: string;
  footer?: ReactNode;
  body: ReactNode;
  show: boolean;
  onClose: () => void;
}

const CustomModal = ({
  show,
  onClose,
  header,
  body,
  footer,
}: customModalInterface) => {
  return (
    <Modal show={show} onClose={onClose}>
      {header && <Modal.Header>{header}</Modal.Header>}
      <Modal.Body className="p-0">{body}</Modal.Body>
      {footer && <Modal.Footer>{footer}</Modal.Footer>}
    </Modal>
  );
};

export default CustomModal;
