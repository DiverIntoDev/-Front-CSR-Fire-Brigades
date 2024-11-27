import Icons from "../../constants/icons";
import Image from "next/image";

export default function HelpButton() {
  return (
    <div>
        <Image
            src={Icons.ajudabranco.value}
            alt={Icons.ajudabranco.alt}
            height={50}
            width={50}
        />
    </div>
  );
}