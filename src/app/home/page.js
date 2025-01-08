import "./css.css"
import Input from "../components/input";
import ViewBrigades from "./components/viewBrigadesButton";
import AddNewBrigade from "./components/addNewBrigade";
import FilterButton from "./components/filterButton";
import Footer from "./components/footer";
import Header from "../components/header";

function Home() {
    return (
      <>
      <div className="wrapper">
        <Header />
        <section className="section">
          <div className="brigadasTitle">
            Brigadas
          </div>
          <div>
            Encontre as brigadas mais próximas de você ou cadastre a sua brigada.
          </div>
          <div className="viewBrigadesButton">
            <ViewBrigades />
          </div>
          <div>
            <AddNewBrigade />
          </div>
          <div className="feedTitle">
            Feed de Notícias
          </div>
          <div>
            Encontre aqui as publicações de nossas brigadas voluntárias nas redes sociais.
          </div>
          <div className="filterSide">
            <div className="searchBar">
              <Input placeholder="Pesquisar notícia" />
            </div>
            <div className="buttonSearch">
              <FilterButton />
            </div>
          </div>
        </section>
        <Footer />
      </div></>
    );
  }

  export default Home