import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
  } from "@radix-ui/react-icons"
  
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
  ]
  
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
  ]
  
  export const priorities = [
    {
      label: "Student",
      value: "student",
      icon: ArrowDownIcon,
    },
    {
      label: "School",
      value: "school",
      icon: ArrowRightIcon,
    },
    {
      label: "Volunteer",
      value: "volunteer",
      icon: ArrowUpIcon,
    },
  ]