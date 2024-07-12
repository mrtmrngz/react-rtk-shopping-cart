import ReactDOM from "react-dom";
import CancelIcon from '@mui/icons-material/Cancel';
import "./OffCanvas.scss";

const Backdrop = (props) => {
  return <div onClick={props.onClose} className="backdrop"></div>;
};

const SideBar = (props) => {
  return (
    <div className={`offcanvas ${props.className}`}>
      <button onClick={props.onClose}>
        <CancelIcon className="offcanvas-close-icon" />
      </button>
      <div className="content">{props.children}</div>
    </div>
  );
};

const OffCanvas = (props) => {
  const portalElement = document.getElementById("offcanvas");

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <SideBar onClose={props.onClose} className={props.className}>{props.children}</SideBar>,
        portalElement
      )}
    </>
  );
};

export default OffCanvas;
