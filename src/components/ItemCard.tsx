import { Card, Group, Badge, ActionIcon, Text, Container} from "@mantine/core";
import { useState } from "react";
import AddExpenseModal from "./Modal"; 
import { IconTrash } from "@tabler/icons-react";
import { Checkbox } from "@mantine/core";





interface ExpenseProps {
  name: string;
  amount: number | string;
  category: string;
  onDelete: () => void;
};

 



export default function ItemCard() {
  const [tasks, setTasks] = useState<ExpenseProps[]>([

  ]);
  const [modalOpened, setModalOpened] = useState(false);
 





  // หากต้องการเปลี่ยนแปลง type ชนิด string เป็น number สามารถใช้วิธีการดังโค้ดตัวอย่างด้านล่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return (
    <Container>
        <Card withBorder shadow="sm" radius="md" mb="sm" key={task.id}>
            <Group justify="space-between" align="flex-start">
              <Text
               fw={600}
                td={task.isDone ? "line-through" : "none"}
                size="lg"
                >
                    {task.title}
              </Text>

                  <Text size="sm" c="dimmed">
                    {task.description}
                  </Text>
                  {task.dueDate ? (
                    <Text size="xs" c="gray">
                      Due: {task.dueDate.toDateString()}
                    </Text>
                  ) : (
                    <Text size="xs" c="gray">
                      Due: -
                    </Text>
                  )}
                  {task.doneAt && (
                    <Text size="xs" c="chanadda">
                      Done at: {task.doneAt.toDateString()}
                    </Text>
                  )}
              </Group>
          
        </Card>   

    </Container>
  );
}
