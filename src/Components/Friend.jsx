/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Button from "./Button";

function Friend({
  id,
  name,
  notify,
  avatar,
  oweMoneys,
  whoIsPay,
  friendSelected,
  onShowSelectForm,
}) {
  function handleSelectFormClick() {
    const friend = {
      id,
      name,
      notify,
      avatar,
    };

    onShowSelectForm(friend);
  }

  function getNotifyStatus() {
    if (!whoIsPay) {
      return "";
    }

    if (oweMoneys === 0) {
      return "green-text";
    }

    // me owes ... => red
    return whoIsPay === "you" ? "green-text" : "red-text";
  }

  function getBackgroundUserSelected() {
    if (friendSelected.id) {
      return friendSelected.id === id ? "orange-bg-light" : "";
    }
  }

  return (
    <div className={`content grid grid-3 ${getBackgroundUserSelected()}`}>
      <img src={`${avatar}`} alt="avatar" className="image" />
      <div className="content">
        <p className="name">{name.slice(0, 1).toUpperCase() + name.slice(1)}</p>
        <p className={`notify ${getNotifyStatus()}`}>{notify}</p>
      </div>
      <Button
        textColor="black"
        bgColor="rgba(242, 121, 53,0.8)"
        onClick={handleSelectFormClick}
      >
        Select
      </Button>
    </div>
  );
}

export default Friend;
