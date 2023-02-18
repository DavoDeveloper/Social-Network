import React, { useState, useEffect } from "react";
const StatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };
  return (
    <div>
      <div>
        {!editMode && <span onDoubleClick={activateEditMode}>{props.status || "No status"}</span>}
      </div>
      {editMode && (
        <input
          className="form-control"
          type="text"
          autoFocus={true}
          onBlur={deactivateEditMode}
          onChange={onStatusChange}
          value={status}
        />
      )}
    </div>
  );
};

export default StatusWithHooks;
