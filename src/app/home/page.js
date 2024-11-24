import Link from "next/link";
import Input from "../components/input";
import Button, { ButtonType } from "../components/button";

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

        <div style={{margin: "1rem"}}>
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
        </div>
      </>
    );
  }

  export default Home