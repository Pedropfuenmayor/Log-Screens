import { LockClosedIcon, LockOpenIcon, SunIcon, MoonIcon, BellIcon} from "@heroicons/react/outline";

const activityAlertLogData = [
  {
    timestamp: "11.12.2021 - 13:42",
    device: "Door - Front",
    description: "Closed by you",
    icon: LockClosedIcon,
    type: 'Notification'
  },
  { timestamp: "11.12.2021 - 13:42", device: "Main Lighting", description: "Off", icon: MoonIcon, type: 'Notification' },
  { timestamp: "11.12.2021 - 13:42", device: "Main Lighting", description: "On", icon: SunIcon, type: 'Notification' },
  {
    timestamp: "11.12.2021 - 13:42",
    device: "Door - Front",
    description: "Opened by you",
    icon: LockOpenIcon,
    type: 'Notification'
  },
  {
    timestamp: "11.12.2021 - 13:42",
    device: "Door - Front",
    description: "Closed by you",
    icon: LockClosedIcon,
    type: 'Notification'
  },
  { timestamp: "11.12.2021 - 13:42", device: "Main Lighting", description: "Off", icon: MoonIcon, type: 'Notification' },
  { timestamp: "11.12.2021 - 13:42", device: "Main Lighting", description: "On", icon: SunIcon, type: 'Notification' },
  { timestamp: "11.12.2021 - 13:42", device: "Main Lighting", description: "Off", icon: MoonIcon, type: 'Notification'  },
  { timestamp: "11.12.2021 - 13:42", device: "Main Lighting", description: "On", icon: SunIcon, type: 'Notification' },
  {
    timestamp: "11.12.2021 - 13:42",
    device: "Door - Front",
    description: "Opened by you",
    icon: LockOpenIcon,
    type: 'Notification',
  },
];

export default activityAlertLogData;


