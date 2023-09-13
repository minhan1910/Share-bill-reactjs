/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

function AddFriend({ onAddNewFriend, onCloseNewFriendForm }) {
  const [friendName, setFriendName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newFriend = {
      id: Date.now(),
      name: friendName,
      avatar: imageUrl,
      notify: `You and ${friendName} are even`,
      isPay: false,
    };

    onAddNewFriend(newFriend);
    onCloseNewFriendForm();
  }

  function handleSetFriendName(friendName) {
    setFriendName(friendName);
  }

  function handleSetImageUrl(imageUrl) {
    setImageUrl(imageUrl);
  }

  return (
    <form className="orange-bg-light content" onSubmit={handleSubmit}>
      <InputField value={friendName} onChange={handleSetFriendName}>
        <span>👩🏻‍🤝‍🧑🏿</span> <span>Friend name</span>
      </InputField>
      <InputField value={imageUrl} onChange={handleSetImageUrl}>
        <span>🖼</span> <span>Image Url</span>
      </InputField>

      <div className="flex flex-end mt-2">
        <Button
          textColor="black"
          bgColor="rgba(242, 121, 53,0.8)"
          customPadding="0.5rem 6rem"
        >
          Add
        </Button>
      </div>
    </form>
  );
}

export default AddFriend;
