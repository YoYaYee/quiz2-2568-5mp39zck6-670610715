import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
} from "@mantine/core";


interface AddExpenseModalProps {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string, 
    amount: number | string, 
    category: string
  ) => void;
};

export default function AddExpenseModal({  
  opened,
  onClose,
  onAdd,}: AddExpenseModalProps) {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string | number>(0);
  const [category, setCategory] = useState<string | null>(null);

  const handleAdd = () => {
    if (name && amount && category) {
      onAdd(name, amount, category);
      setName("");
      setAmount(0);
      setCategory(null);
      onClose();
    } 
  };

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return (
    <Modal opened={opened} onClose={onClose} title="Add Expense">
      <Stack>
        {}

        <TextInput
          label="Expense name"
          withAsterisk
          placeholder="E.g.,Coca-Cola"
          error="Expense Name is required"
          description="Expense Name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        /> 

        <NumberInput
          label="Amount"
          withAsterisk
          placeholder="0"
          error="Amount is required"
          description="Amount"
          value={amount}
          onChange={(e) => setAmount(e.valueOf())}
        />
        <Select
          value={category}
        />
        <Button onClick={handleAdd}>Submit</Button>
      </Stack>
    </Modal>
  );
}
