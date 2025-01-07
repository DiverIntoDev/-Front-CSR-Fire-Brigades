import Link from "next/link";

function ViewBrigades() {
    return (
      <>
        <div>
          Página atual: Visualizar Brigadas
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
  
  export default ViewBrigades