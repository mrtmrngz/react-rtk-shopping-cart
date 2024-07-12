const TableHeader = () => {
  return (
    <thead className="table-header">
      <tr>
        <th className="th-img">Image</th>
        <th className="th-name">Name</th>
        <th className="th-price">Price</th>
        <th className="th-amount">Amount</th>
        <th className="th-totalAmount">Total Amount</th>
        <th className="th-delete">Delete</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
