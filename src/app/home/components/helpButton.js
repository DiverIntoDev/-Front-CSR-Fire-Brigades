import Icons from "../../constants/icons";
import Image from "next/image";

export default function HelpButton() {
  return (
    <div>
        <Image
            src={Icons.ajudabranco.value}
            alt={Icons.ajudabranco.alt}
            height={40}
            width={40}
        />
    </div>
  );
}