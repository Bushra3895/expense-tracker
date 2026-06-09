import { useState } from "react";

function AddTransaction({ addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: +amount
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={e => setText(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />

        <button>Add Transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
