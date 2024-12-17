import Link from "next/link";

function Brigades() {

    return (
      <>
        <div>
          Página atual:  Brigadas
        </div>
        <div>
          <Link href="/contactPage">
              Contato
          </Link>
        </div>
        <div>
          <Link href="/home">
              Home
          </Link>
        </div>
      </>
    );
  }
  
  export default Brigades