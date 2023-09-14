/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Friend from "./Friend";
import AddFriend from "./AddFriend";
import Button from "./Button";

function FriendList({
  data,
  friendSelected,
  onAddNewFriend,
  onShowSelectForm,
}) {
  const [isClickedAddFriend, setIsClickedAddFriend] = useState(false);

  function handleShowAddNewFriend() {
    setIsClickedAddFriend((show) => !show);
  }

  return (
    <div className="friends">
      {data.map((item) => (
        <Friend
          key={item.id}
          friendSelected={friendSelected}
          onShowSelectForm={onShowSelectForm}
          {...item}
        />
      ))}

      {isClickedAddFriend && (
        <AddFriend          
          onShowAddNewFriend={handleShowAddNewFriend}
          onAddNewFriend={onAddNewFriend}
        />
      )}

      <div className="flex flex-end mt-2">
        <Button
          textColor="black"
          bgColor="rgba(242, 121, 53,0.8)"
          onClick={handleShowAddNewFriend}
        >
          {isClickedAddFriend ? "Close" : "Add New Friend"}
        </Button>
      </div>
    </div>
  );
}

export default FriendList;
