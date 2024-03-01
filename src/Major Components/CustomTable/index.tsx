import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { colors } from "../../Variables/variables";

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
    <Tr backgroundColor="#fff" color={colors.campaignTextColor}>
      <Td>{title}</Td>
      <Td>{description}</Td>
      <Td>{target}</Td>
      <Td>{status}</Td>
    </Tr>
  );
};

const CustomTable: React.FC<{ data: TableRowData[] }> = ({ data }) => {
  return (
    <Table>
      <Thead border="3px solid #eee">
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
