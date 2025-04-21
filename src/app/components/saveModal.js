'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import Icons from "../constants/icons";

export default function SaveModal({}) {
  const router = useRouter();

  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        height: "50%",
        color: "#000000",
        backgroundColor: "#FFFFFF",
        border: "1px solid #000000`",
        padding: "1rem",
        borderRadius: "5px",
        zIndex: "1000",
        display: "flex",
        flexWrap: "wrap",
        textAlign: "center",
        justifyContent: "center"
      }}
    >
      <span style={{
        color: "#39542D",
        fontWeight: "bolder",
        fontSize: "1rem",
        width: "100%",
        marginBottom: "1rem",
        font: "normal normal bold 24px/29px 'Montserrat'",
        fontFamily: "'Montserrat', sans-serif"
      }}>
        Seu contato foi enviado!
      </span>
      <Image
          src={Icons.check.value}
          alt={Icons.check.alt}
          height={50}
          width={50}
      />
      <button
        style={{
          backgroundColor: "#39542D",
          color: "#FFFFFF",
          marginTop: "1rem",
          width: "100%",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer"
        }}
        onClick={() => {
          document.body.style.transition = "opacity 0.5s";
          document.body.style.opacity = "1";
          router.push("/");
        }}
      >
        Voltar para a página inicial
      </button>
    </div>
  );
}
