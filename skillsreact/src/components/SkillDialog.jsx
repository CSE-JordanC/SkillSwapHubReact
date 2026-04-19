import { useState } from "react";
import "../css/Dialog.css";
import SkillDetailsDialog from "./SkillDetailsDialog";
import SkillEditDialog from "./SkillEditDialog";
import SkillDeleteDialog from "./SkillDeleteDialog";

const SkillDialog = ({
  closeSkillDialog,
  skill,
  updateSkillInList,
  deleteSkillFromList,
}) => {
  const [showContent, setShowContent] = useState("details");

  const showEdit = (e) => {
    e.preventDefault();
    setShowContent("edit");
  };

  const showDelete = (e) => {
    e.preventDefault();
    setShowContent("delete");
  };

  return (
    <div id="skill-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={closeSkillDialog}
          >
            &times;
          </span>

          <div id="skill-dialog-content">
            {showContent === "details" ? (
              <SkillDetailsDialog
                skill={skill}
                showEdit={showEdit}
                showDelete={showDelete}
              />
            ) : showContent === "edit" ? (
              <SkillEditDialog
                skill={skill}
                closeEditDialog={closeSkillDialog}
                updateSkillInList={updateSkillInList}
              />
            ) : (
              <SkillDeleteDialog
                skill={skill}
                closeDeleteDialog={closeSkillDialog}
                deleteSkillFromList={deleteSkillFromList}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDialog;