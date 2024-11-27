import Link from "next/link";
import "./css.css"
import MenuButton from "./components/menuButton";
import HelpButton from "./components/helpButton";
import Input from "../components/input";
import Button, {ButtonType} from "../components/button";
import ViewBrigades from "./components/viewBrigadesButton";
import AddNewBrigade from "./components/addNewBrigade";
import FilterButton from "./components/filterButton";

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
        <header>
          <div className="header">
            <div className="menuLeft">
              <MenuButton />
            </div>
            <div className="menuCenter">
              logo
            </div>
            <div className="menuRight">
              <HelpButton />
            </div>
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
            <div lassName="buttonSearch">
              <FilterButton />
            </div>
          </div>
        </section>

        {/*<div style={{margin: "1rem"}}>
          <text>Testes inputs</text>
          <br/>
          <Input placeholder="Placeholder" label="Label test"/>
          <br/>
          <Input placeholder="Placeholder" label="Label test" type="email"/>
          <br/>
          <Input placeholder="Desabilitado" disabled={true}/>
          <br/>
        </div>
        <div style={{margin: "1rem"}}>
          <text>Testes buttons</text>
          <br/>
          <Button placeholder="Placeholder" type={ButtonType.emphasized} disabled={false}/>
          <br/>
          <Button placeholder="Placeholder" type={ButtonType.emphasized} disabled={true}/>
          <br/>
          <Button placeholder="Placeholder" type={ButtonType.standard} disabled={false}/>
          <br/>
          <Button placeholder="Placeholder" type={ButtonType.standard} disabled={true}/>
          <br/>
          <Button type={ButtonType.standard} disabled={false}/>
          <br/>
        </div>*/}
      </>
    );
  }

  export default Home