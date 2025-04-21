'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import Icons from "../constants/icons";
import Button from "./button";

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
        border: "1px solid rgba(0,0,0,0.10)",
        borderRadius: "5% 5% 0 0",
        padding: "1rem",
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
        width: "40%",
        font: "normal normal bold 24px/29px 'Montserrat'",
        fontFamily: "'Montserrat', sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        Seu contato foi enviado!
      </span>
      <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Image
            src={Icons.checkbranco.value}
            alt={Icons.checkbranco.alt}
            height={75}
            width={75}
            style={{
              backgroundColor: "#39542D",
              objectFit: "scale-down",
              borderRadius: "50%"
            }}
        />
      </div>
      <span style={{
        color: "#39542D",
        font: "normal normal normal 15px/18px 'Montserrat'",
        fontFamily: "'Montserrat', sans-serif",
        width: "75%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        Agradecemos o seu interesse.
        <br/>
        Entraremos em contato em até 15 dias pelo e-mail ou telefone informados no formulário.
      </span>
      <div style={{display: "flex", width: "100%", justifyContent: "center", alignItems: "center"}}>
        <Button
          placeholder="Voltar para a página inicial"
          onPress={() => {
            document.body.style.transition = "opacity 0.5s";
            document.body.style.opacity = "1";
            router.push("/");
          }}
        />
      </div>
    </div>
  );
}
