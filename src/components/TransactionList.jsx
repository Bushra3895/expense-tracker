import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
