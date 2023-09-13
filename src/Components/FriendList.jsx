/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Friend from "./Friend";
import AddFriend from "./AddFriend";
import Button from "./Button";

function FriendList({ data, friendSelected, onAddNewFriend, onShowSelectForm }) {
  const [isClickedAddFriend, setIsClickedAddFriend] = useState(false);
  

  function handleCloseAddNewFriend() {
    setIsClickedAddFriend(false);
  }

  function handleShowAddNewFriendForm() {
    setIsClickedAddFriend(true);
  }

  return (
    <div className="friends">
      {data.map((item) => (
        <Friend key={item.id} friendSelected={friendSelected} onShowSelectForm={onShowSelectForm} {...item} />
      ))}

      {isClickedAddFriend ? (
        <>
          <AddFriend
            isClickedAddFriend={isClickedAddFriend}
            onCloseNewFriendForm={handleCloseAddNewFriend}
            onAddNewFriend={onAddNewFriend}
          />

          <div className="flex flex-end mt-2">
            <Button
              textColor="black"
              bgColor="rgba(242, 121, 53,0.8)"
              onClick={handleCloseAddNewFriend}
            >
              Close
            </Button>
          </div>
        </>
      ) : (
        <div className="flex flex-end mt-2">
          <Button
            textColor="black"
            bgColor="rgba(242, 121, 53,0.8)"
            onClick={handleShowAddNewFriendForm}
          >
            Add New Friend
          </Button>
        </div>
      )}
    </div>
  );
}

export default FriendList;
