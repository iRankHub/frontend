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
    value: "approved",
    label: "Approved",
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

export const ballotStatuses = [
  {
    value: "Recorded",
    label: "Recorded",
    icon: CheckCircledIcon,
  },
  {
    value: "not yet",
    label: "Not Yet",
    icon: StopwatchIcon,
  },
]

export const billingsStatuses = [
  {
    value: "paid",
    label: "Paid",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "sponsored",
    label: "Sponsored",
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

export const userRoles = [
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "student",
    label: "Student",
  },
  {
    value: "school",
    label: "School",
  },
  {
    value: "volunteer",
    label: "Volunteer",
  },
];

export const rooms = [
  {
    value: "room 1",
    label: "Room 1",
  },
  {
    value: "room 2",
    label: "Room 2",
  },
  {
    value: "room 3",
    label: "Room 3",
  },
];

export const roomsPairings = [
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

export const teams = [
  {
    label: "3",
    value: "3",
  },
  {
    label: "5",
    value: "5",
  },
  {
    label: "2",
    value: "2",
  },
];


export const roomStatus = [
  {
    value: "occupied",
    label: "Occupied",
    icon: CheckCircledIcon,
  },
  {
    value: "available",
    label: "Available",
    icon: CrossCircledIcon,
  },
]