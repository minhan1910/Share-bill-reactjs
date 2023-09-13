/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import SelectField from "./SelectField";

function SplitBill({ friendSelected, handleSplitBill }) {
  const [bill, setBill] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [friendExpense, setFriendExpense] = useState(0);
  const [whoIsPaying, setWhoIsPaying] = useState("you");

  const friendName = friendSelected.name;

  const options = [
    {
      value: "you",
      name: "You",
    },
    {
      value: friendName,
      name: friendName,
    },
  ];

  function handleSetBill(billMoney) {
    if (billMoney < 0) {
      alert("You must be enter money greater than 0");
      setBill(0);
      setFriendExpense(0);
      return;
    }

    setBill(billMoney);
    setFriendExpense(billMoney);
  }

  function handleSetWhoisPaying(whoIsPaying) {
    setWhoIsPaying(whoIsPaying);
  }

  function handleSetYourExpense(yourExpense) {
    if (yourExpense < 0) {
      alert("You must be enter money greater than 0");
      setYourExpense(0);
      return;
    }

    const friendMoney = bill - yourExpense;

    if (friendMoney < 0) {
      alert("You must be enter money less or equal than " + bill + " bill");
      return;
    }

    setYourExpense(yourExpense);
    setFriendExpense(friendMoney);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const billState = {
      friendId: friendSelected.id,
      bill,
      yourExpense,
      friendExpense,
      whoIsPaying,
      isPay: true,
    };

    handleSplitBill(billState);
  }

  return (
    <form
      className="split-bill content-2 orange-bg-light aligns-start"
      onSubmit={handleSubmit}
    >
      <h3>SPLIT A BILL WITH {friendName.toUpperCase()}</h3>
      <div className="inputs flex flex-col gap-3">
        <InputField width="10rem" value={bill} onChange={handleSetBill}>
          <div className="flex aligns-center">
            <span>💰</span> <span className="ml-2">Bill value</span>
          </div>
        </InputField>
        <InputField
          width="10rem"
          value={yourExpense}
          onChange={handleSetYourExpense}
        >
          <div className="flex aligns-center">
            <span>💰</span> <span className="ml-2">Your expense</span>
          </div>
        </InputField>
        <InputField
          width="10rem"
          customClass="unclickable"
          disabled={true}
          value={friendExpense}
        >
          <div className="flex aligns-center">
            <span>💰</span>{" "}
            <span className="ml-2">{friendName.toUpperCase()}'s expense</span>
          </div>
        </InputField>
        <SelectField
          width="10rem"
          options={options}
          value={whoIsPaying}
          onChange={handleSetWhoisPaying}
        >
          <div className="flex aligns-center">
            <span>💰</span>{" "}
            <span className="ml-2">Who is playing the bill?</span>
          </div>
        </SelectField>

        <div className="flex flex-end">
          <Button
            textColor="black"
            bgColor="rgba(242, 121, 53,0.8)"
            customPadding="0.7rem 2.5rem"
          >
            Split bill
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SplitBill;
