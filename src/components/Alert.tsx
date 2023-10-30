import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onAlertToggle: ()=> void;
}

const Alert = ({ children, onAlertToggle }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">{children}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onAlertToggle}></button>
    </div>
  );
};

export default Alert;
