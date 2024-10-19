import Link from "next/link";

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