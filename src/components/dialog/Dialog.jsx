import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const DialogBox = ({ open, name, project, github, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby={"responsive-dialog-title"}
      //   fullScreen={fullScreen}
      BackdropProps={{
        style: { backgroundColor: "transparent" },
      }}
      className="dialog-box"
    >
      <div className="dialog-content">
        <DialogTitle id="responsive-dialog-title">{name}</DialogTitle>
        <DialogContent>
          <Button href={project} target="_blank" id="project-btn">
            Open Live
          </Button>
          <Button href={github} target="_blank" id="project-btn">
            github
          </Button>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            autoFocus
            variant="contained"
            color="error"
          >
            Close
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};
export default DialogBox;
