import { ActivityAlertLogType } from "../models/models";
import {
  LockClosedIcon,
  LockOpenIcon,
  SunIcon,
  MoonIcon,
  BellIcon,
  FireIcon,
} from "@heroicons/react/outline";
import { DateTime } from "luxon";

const activityAlertLogData: ActivityAlertLogType[] = [
  {
    timestamp: DateTime.now().toSeconds(),
    device: "Door - Front",
    description: "Closed by you",
    icon: LockClosedIcon,
    type: "Notification",
  },
  {
    timestamp: DateTime.now().minus({ days: 1 }).toSeconds(),
    device: "Door - Front",
    description: "Closed by you",
    icon: LockClosedIcon,
    type: "Notification",
  },
  {
    timestamp: 1639392939,
    device: "Main Lighting",
    description: "Off",
    icon: MoonIcon,
    type: "Notification",
  },
  {
    timestamp: 1639390359,
    device: "Main Lighting",
    description: "On",
    icon: SunIcon,
    type: "Notification",
  },
  {
    timestamp: 1639387299,
    device: "Temperature",
    description: "Below 4°C",
    icon: BellIcon,
    type: "Warning",
  },
  {
    timestamp: 1639308099,
    device: "Door - Front",
    description: "Closed by you",
    icon: LockClosedIcon,
    type: "Notification",
  },
  {
    timestamp: 1639307739,
    device: "Main Lighting",
    description: "Off",
    icon: MoonIcon,
    type: "Notification",
  },
  {
    timestamp: 1639305339,
    device: "Main Lighting",
    description: "On",
    icon: SunIcon,
    type: "Notification",
  },
  {
    timestamp: 1639302339,
    device: "Main Lighting",
    description: "Off",
    icon: MoonIcon,
    type: "Notification",
  },
  {
    timestamp: 1639182039,
    device: "Emergency",
    description: "Unit is on fire",
    icon: FireIcon,
    type: "Alert",
  },
  {
    timestamp: 1639218039,
    device: "Door - Front",
    description: "Opened by you",
    icon: LockOpenIcon,
    type: "Notification",
  },
  {
    timestamp: 1639392939,
    device: "Main Lighting",
    description: "Off",
    icon: MoonIcon,
    type: "Notification",
  },
  {
    timestamp: 1639390359,
    device: "Main Lighting",
    description: "On",
    icon: SunIcon,
    type: "Notification",
  },
  {
    timestamp: 1639387299,
    device: "Temperature",
    description: "Below 4°C",
    icon: BellIcon,
    type: "Warning",
  },
  {
    timestamp: 1639308099,
    device: "Door - Front",
    description: "Closed by you",
    icon: LockClosedIcon,
    type: "Notification",
  },
  {
    timestamp: 1639307739,
    device: "Main Lighting",
    description: "Off",
    icon: MoonIcon,
    type: "Notification",
  },
  {
    timestamp: 1639305339,
    device: "Main Lighting",
    description: "On",
    icon: SunIcon,
    type: "Notification",
  },
  {
    timestamp: 1639302339,
    device: "Main Lighting",
    description: "Off",
    icon: MoonIcon,
    type: "Notification",
  },
  {
    timestamp: 1639182039,
    device: "Emergency",
    description: "Unit is on fire",
    icon: FireIcon,
    type: "Alert",
  },
  {
    timestamp: 1639218039,
    device: "Door - Front",
    description: "Opened by you",
    icon: LockOpenIcon,
    type: "Notification",
  },
  {
    timestamp: 1639392939,
    device: "Main Lighting",
    description: "Off",
    icon: MoonIcon,
    type: "Notification",
  },
  {
    timestamp: 1639390359,
    device: "Main Lighting",
    description: "On",
    icon: SunIcon,
    type: "Notification",
  },
  {
    timestamp: 1639387299,
    device: "Temperature",
    description: "Below 4°C",
    icon: BellIcon,
    type: "Warning",
  },
  {
    timestamp: 1639308099,
    device: "Door - Front",
    description: "Closed by you",
    icon: LockClosedIcon,
    type: "Notification",
  },
  {
    timestamp: 1639307739,
    device: "Main Lighting",
    description: "Off",
    icon: MoonIcon,
    type: "Notification",
  },
  {
    timestamp: 1639305339,
    device: "Main Lighting",
    description: "On",
    icon: SunIcon,
    type: "Notification",
  },
  {
    timestamp: 1639302339,
    device: "Main Lighting",
    description: "Off",
    icon: MoonIcon,
    type: "Notification",
  },
  {
    timestamp: 1639182039,
    device: "Emergency",
    description: "Unit is on fire",
    icon: FireIcon,
    type: "Alert",
  },
  {
    timestamp: 1639218039,
    device: "Door - Front",
    description: "Opened by you",
    icon: LockOpenIcon,
    type: "Notification",
  },
];

export default activityAlertLogData;
