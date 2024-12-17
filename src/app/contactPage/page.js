import Link from "next/link";

function Contact() {

    return (
      <>
        <div>
          Página atual: Contato
        </div>
        <div>
          <Link href="/brigadesPage">
              Brigades
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
  
  export default Contact