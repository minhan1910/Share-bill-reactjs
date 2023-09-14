import { useState } from "react";
import "./App.css";
import FriendList from "./Components/FriendList";
import SplitBill from "./Components/SplitBill";

const friends = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/48?=1",
    name: "Clark",
    notify: "You owes Clark 7$",
    isPay: true,
    oweMoneys: 7,
    whoIsPay: "Clark",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/48?=2",
    name: "Sarah",
    notify: "Sarah owes you 10$",
    oweMoneys: 10,
    isPay: true,
    whoIsPay: "you",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/48?=3",
    name: "Anthony",
    notify: "You and Anthony are even",
    oweMoneys: 0,
    isPay: false,
    whoIsPay: "",
  },
];

function App() {
  const [friendList, setFriendList] = useState(friends);
  const [isShowSelectForm, setIsShowSelectForm] = useState(false);
  const [friendSelected, setFriendSelected] = useState({});

  function handleAddNewFriend(newFriend) {
    setFriendList((friendList) => [...friendList, newFriend]);
    setIsShowSelectForm(false);
  }

  function handleShowSelectForm(friend) {
    const isSelectedAgain =
      friendSelected.id && friendSelected.id === friend.id ? false : true;

    if (isSelectedAgain) {
      setFriendSelected(friend);
    } else {
      setFriendSelected({ id: null });
    }

    setIsShowSelectForm(isSelectedAgain);
  }

  function handleSplitBill({
    friendId,
    yourExpense,
    friendExpense,
    whoIsPaying,
    isPay,
  }) {
    setFriendList((friendList) =>
      friendList.map((curFriend) => {
        if (curFriend.id === friendId) {
          const isYouPaying = whoIsPaying === "you";
          const debtor = isYouPaying ? curFriend.name : "You";
          const creditor = isYouPaying ? "You" : curFriend.name;
          const debt = isYouPaying ? friendExpense : yourExpense;

          let notifyMsg;

          if (debt == 0) {
            notifyMsg = `${debtor} doesn't owe ${creditor}`;
          } else {
            notifyMsg = `${debtor} owes ${creditor} ${debt}$`;
          }

          return {
            ...curFriend,
            notify: notifyMsg,
            isPay,
            oweMoneys: debt,
            whoIsPay: whoIsPaying,
          };
        }

        return curFriend;
      })
    );

    setIsShowSelectForm(false);
  }

  const handleFriendListFunctions = {
    onAddNewFriend: handleAddNewFriend,
    onShowSelectForm: handleShowSelectForm,
  };

  return (
    <div className="container">
      <div className="flex gap-2">
        <FriendList
          data={friendList}
          friendSelected={friendSelected}
          {...handleFriendListFunctions}
        />

        {isShowSelectForm && (
          <SplitBill
            handleSplitBill={handleSplitBill}
            friendSelected={friendSelected}
          />
        )}
      </div>
    </div>
  );
}

export default App;
