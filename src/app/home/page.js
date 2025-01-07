import "./css.css"
import MenuButton from "./components/menuButton";
import HelpButton from "./components/helpButton";
import "./css.css"
import MenuButton from "./components/menuButton";
import HelpButton from "./components/helpButton";
import Input from "../components/input";
import ViewBrigades from "./components/viewBrigadesButton";
import AddNewBrigade from "./components/addNewBrigade";
import FilterButton from "./components/filterButton";
import Icons from "../constants/icons";
import Image from "next/image";
import { Fragment } from "react";
import ViewBrigades from "./components/viewBrigadesButton";
import AddNewBrigade from "./components/addNewBrigade";
import FilterButton from "./components/filterButton";
import Icons from "../constants/icons";
import Image from "next/image";
import { Fragment } from "react";

function Home() {
    return (
      <div className="wrapper">
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
        <header className="header">
          <div className="menuLeft">
            <MenuButton />
          </div>
          <div className="menuCenter">
          <Image
              src={Icons.logo.value}
              alt={Icons.logo.alt}
              width={160}
              />
          </div>
          <div className="menuRight">
            <HelpButton />
          </div>
        </header>
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
        <footer className="footer">
          <div className="footerColumn">
            <p>Entre em contato</p>
            <p>Contato 1</p>
            <p>Contato 2</p>
            <p>Contato 3</p>
          </div>
          <div className="footerColumn">
            <p>FAQ</p>
            <p>Pergunta 1</p>
            <p>Pergunta 2</p>
            <p>Pergunta 3</p>
          </div>
        </footer>
      </div>
      <div className="wrapper">
        <header className="header">
          <div className="menuLeft">
            <MenuButton />
          </div>
          <div className="menuCenter">
          <Image
              src={Icons.logo.value}
              alt={Icons.logo.alt}
              width={160}
              />
          </div>
          <div className="menuRight">
            <HelpButton />
          </div>
        </header>
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
        <footer className="footer">
          <div className="footerColumn">
            <p>Entre em contato</p>
            <p>Contato 1</p>
            <p>Contato 2</p>
            <p>Contato 3</p>
          </div>
          <div className="footerColumn">
            <p>FAQ</p>
            <p>Pergunta 1</p>
            <p>Pergunta 2</p>
            <p>Pergunta 3</p>
          </div>
        </footer>
      </div>
    );
  }

  export default Home