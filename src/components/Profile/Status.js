import React from "react";
class Status extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }
  render() {
    return (
      <div>
        <div>
          {!this.state.editMode && (
            <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</span>
          )}
        </div>
        {this.state.editMode && (
          <input
            type="text"
            autoFocus={true}
            onChange={this.onStatusChange}
            onBlur={this.deactivateEditMode}
            value={this.state.status}
          />
        )}
      </div>
    );
  }
}

export default Status;
