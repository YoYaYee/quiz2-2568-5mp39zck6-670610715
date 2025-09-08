import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
} from "@mantine/core";
import { v4 as uuidv4 } from "uuid";


type AddExpenseModalProps = {
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

  const handleSubmit = () => {
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
    <Modal opened={opened} onClose={onClose} title="Add Task">
      <Stack>
        {
          
        }
        <Button onClick={handleSubmit}>Save</Button>
      </Stack>
    </Modal>
  );
}
