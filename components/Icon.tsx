import { IconType } from "react-icons";

export default function Icon({
  icon: IconComponent,
  size = 16,
}: {
  icon: IconType;
  size?: number;
}) {
  return <IconComponent size={size} aria-hidden />;
}
