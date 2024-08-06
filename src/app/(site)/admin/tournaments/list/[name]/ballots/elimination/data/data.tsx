import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "accepted",
    label: "Accepted",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "rejected",
    label: "Rejected",
    icon: CircleIcon,
  },
  {
    value: "pending",
    label: "Pending",
    icon: StopwatchIcon,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
];

export const rooms = [
  {
    value: "room 1",
    label: "Room 1",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "room 2",
    label: "Room 2",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "room 3",
    label: "Room 3",
    icon: QuestionMarkCircledIcon,
  },
];
