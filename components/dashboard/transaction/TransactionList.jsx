import React from "react";

const TransactionList = ({ transactions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-md">
        <thead className="bg-green-500 text-left text-sm text-gray-600">
          <tr>
            <th className="py-3 px-4 border-b">Date</th>
            <th className="py-3 px-4 border-b">Amount</th>
            <th className="py-3 px-4 border-b">Transaction Type</th>
            <th className="py-3 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700">
          {transactions.map((transaction, index) => (
            <tr key={index} className="border-b">
              <td className="py-3 px-4">
                {new Date(transaction.createdAt).toLocaleDateString()}
              </td>
              <td className="py-3 px-4">{transaction.amount}</td>
              <td className="py-3 px-4">{transaction.transactionType}</td>
              <td className="py-3 px-4">
                <span
                  className={`py-1 px-2 rounded-lg font-medium ${
                    transaction.status === "Pending"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
