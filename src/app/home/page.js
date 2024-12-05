import Link from "next/link";
import Input from "../components/input";
import Button, { ButtonType } from "../components/button";
import Icons from "../constants/icons";
import Table from "../components/table";

function Home() {
    return (
      <>
        <div>
          Página atual: Inicial
        </div>
        <div>
          <Link href="/contact">
              Contato
          </Link>
        </div>
        <div>
          <Link href="/brigades">
              Brigadas
          </Link>
        </div>
      </>
    );
  }

  export default Home