import { CiLocationOn, CiTrash, CiDeliveryTruck, CiCalendar, CiCreditCard1 } from "react-icons/ci";
import { IoShieldOutline } from "react-icons/io5";

const steps = [
  { name: "Postcode", icon: <CiLocationOn /> },
  { name: "Waste Type", icon: <CiTrash /> },
  { name: "Select Skip", icon: <CiDeliveryTruck /> },
  { name: "Permit Check", icon: <IoShieldOutline /> },
  { name: "Choose Date", icon: <CiCalendar /> },
  { name: "Payment", icon: <CiCreditCard1 /> },
];

export default steps;