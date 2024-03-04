import React, { useState } from "react";
import TableWithEditDelete from "./rides/TableWithEditDelete";

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState(null);

  return (
    <div>
      <TableWithEditDelete />
    </div>
  );
};

export default Clients;
