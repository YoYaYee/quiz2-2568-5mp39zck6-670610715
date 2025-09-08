import { type FooterProps } from "../libs/Footer";
import { Text, Group } from "@mantine/core";
export default function Footer({courseName, year, fullName, studentId }: FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        © {courseName}-{year} {fullName} {studentId}. All rights reserved.
      </Text>
    </Group>
  );
}