import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { colors } from "../../Variables/variables";
import SearchBar from "../../Minor Components/Search";
import { BsFileText } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

import CustomTable from "../CustomTable";
type TableRowData = {
  title: string;
  description: string;
  target: string;
  status: string;
};
const Body = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [campaignTitle, setCampaignTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetGroup, setTargetGroup] = useState("");
  const [companyData, setCompanyData] = useState<TableRowData[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 7;
  const toast = useToast();

  const handleSubmit = () => {
    if (!campaignTitle || !description || !targetGroup) {
      toast({
        title: "Error",
        description: "Fill in valid details.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    setCompanyData([
      ...companyData,
      {
        title: campaignTitle,
        description: description,
        target: targetGroup,
        status: "Active",
      },
    ]);

    onClose();
  };

  const getPaginatedData = () => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return companyData.slice(startIndex, endIndex);
  };
  return (
    <Box
      margin="0 auto"
      backgroundColor={colors.bgColor}
      color={colors.textColor}
      minHeight="100svh"
      maxWidth="1200px"
      paddingY="2rem">
      <Box borderBottom={` 2px solid #eee`}>
        <Flex flexDirection="column" marginY="1.5rem" gap=".5rem">
          <Heading color={colors.headerColor} fontSize="1.5rem">
            Customers
          </Heading>
          <Text>See all your customers in one place </Text>
        </Flex>
        <Flex>
          <Button
            borderRadius="0px"
            _hover={{
              borderBottom: `2px solid ${colors.headerColor} `,
              color: `${colors.headerColor}`,
            }}
            cursor="pointer"
            as="a"
            variant="ghost"
            colorScheme="transparent">
            Customer Log
          </Button>
          <Button
            borderRadius="0px"
            _hover={{
              borderBottom: `2px solid ${colors.headerColor} `,
              color: `${colors.headerColor}`,
            }}
            cursor="pointer"
            as="a"
            variant="ghost"
            colorScheme="transparent">
            Campaigns
          </Button>
        </Flex>
      </Box>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        paddingY="2.5rem">
        <SearchBar />
        <Button
          onClick={onOpen}
          _active={{
            transform: "scale(.85)",
            transition: "all .2s ease-in-out",
          }}
          leftIcon={<BsFileText size="18" color={`${colors.primaryColor}`} />}
          colorScheme="transparent"
          borderRadius="13px"
          padding="25px"
          backgroundColor={`${colors.buttonBgColor}`}>
          Create a campaign
        </Button>
      </Flex>
      <CustomTable data={getPaginatedData()} />
      <Flex justifyContent="right" marginTop="2rem" gap="2rem">
        <IconButton
          icon={<BsArrowLeft size="20px" color="#fff" fontWeight={600} />}
          aria-label="next"
          colorScheme="transparent"
          backgroundColor={`${colors.buttonBgColor}`}
          borderRadius="50%"
          disabled={pageNumber === 1}
          onClick={() => setPageNumber(pageNumber - 1)}
          _active={{
            transform: "scale(.85)",
            transition: "all .2s ease-in-out",
          }}
        />

        <IconButton
          icon={<BsArrowRight size="20px" color="#fff" fontWeight={600} />}
          aria-label="next"
          colorScheme="transparent"
          backgroundColor={`${colors.buttonBgColor}`}
          borderRadius="50%"
          disabled={companyData.length <= pageNumber * itemsPerPage}
          onClick={() => setPageNumber(pageNumber + 1)}
          _active={{
            transform: "scale(.85)",
            transition: "all .2s ease-in-out",
          }}
        />
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display="flex"
            alignItems="center"
            gap=".5rem"
            color={colors.headerColor}>
            <BsFileText size="18" color={`${colors.headerColor}`} />
            Create a Campaign
          </ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel color={colors.headerColor}>Campaign Title</FormLabel>
              <Input
                variant="unstyled"
                outline={`2px solid #eee `}
                padding="1rem 1rem"
                placeholder="Write your campaign title here"
                _placeholder={{
                  color: `${colors.faintTextColor}`,
                }}
                value={campaignTitle}
                onChange={(e) => setCampaignTitle(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel color={colors.headerColor}>Description</FormLabel>
              <Input
                variant="unstyled"
                outline={`2px solid #eee `}
                padding="1rem 1rem"
                as="textarea"
                height="15rem"
                placeholder="Write your message here"
                _placeholder={{
                  color: `${colors.faintTextColor}`,
                }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel color={colors.headerColor}>Target Group</FormLabel>
              <Select
                placeholder="Select your target group"
                value={targetGroup}
                onChange={(e) => setTargetGroup(e.target.value)}>
                <option value="All Customers">All customers</option>
                <option value="New Customers">New customers</option>
                <option value="Loyal Customers">Loyal customers</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter width="100%">
            <Button
              width="100%"
              onClick={handleSubmit}
              _active={{
                transform: "scale(.85)",
                transition: "all .2s ease-in-out",
              }}
              colorScheme="transparent"
              borderRadius="6px"
              padding="25px"
              backgroundColor={`${colors.buttonBgColor}`}>
              Submit your campaign
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Body;
