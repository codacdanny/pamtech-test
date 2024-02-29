import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableProps } from "@chakra-ui/react";

// Define the data type for the table rows
type TableRowData = {
  title: string;
  description: string;
  target: string;
  status: string;
};

// Define a custom component for the table row
const TableRow: React.FC<TableRowData> = ({
  title,
  description,
  target,
  status,
}) => {
  return (
    <Tr>
      <Td>{title}</Td>
      <Td>{description}</Td>
      <Td>{target}</Td>
      <Td>{status}</Td>
    </Tr>
  );
};

// Define a custom component for the table
const CustomTable: React.FC<TableProps> = (props) => {
  // Define some dummy data for the table rows
  const data: TableRowData[] = [
    {
      title: "Mobile app coming soon",
      description:
        "Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...",
      target: "All customers",
      status: "Active",
    },
    {
      title: "Mobile app coming soon",
      description:
        "Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...",
      target: "All customers",
      status: "Active",
    },
    {
      title: "Mobile app coming soon",
      description:
        "Lorem ipsum dolor sit amet consectetur. Diam phasellus ut nisl dol...",
      target: "All customers",
      status: "Active",
    },
    // Add more data items here
  ];

  return (
    <Table {...props}>
      <Thead>
        <Tr>
          <Th>Campaign Title</Th>
          <Th>Description</Th>
          <Th>Target Group</Th>
          <Th>Campaign Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item, index) => (
          <TableRow key={index} {...item} />
        ))}
      </Tbody>
    </Table>
  );
};

export default CustomTable;
