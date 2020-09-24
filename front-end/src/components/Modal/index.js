import { Modal, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import CloseForm from "@material-ui/icons/Clear";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import style from "./style";
import * as modalActions from "../../actions/modalActions";
class ModalAlert extends Component {
  render() {
    const { classes, modal, actionsModal } = this.props;
    const { showModal, title, component } = modal;
    const { hideModal } = actionsModal;
    return (
      <div className={classes.taskboard}>
        <Modal open={showModal} onClose={hideModal}>
          <div className={classes.modal}>
            <div className={classes.header}>
              <span className={classes.title}>{title}</span>
              <CloseForm className={classes.icon} onClick={hideModal} />
            </div>
            <div className={classes.content}>{component}</div>
          </div>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  modal: state.modal,
});
const mapDispatchToProps = (dispatch) => ({
  actionsModal: bindActionCreators(modalActions, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, withStyles(style))(ModalAlert);
