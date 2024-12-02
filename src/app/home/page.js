import Link from "next/link";
import Input from "../components/input";
import Button, { ButtonType } from "../components/button";
import Icons from "../constants/icons";

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
          <Button placeholder="Placeholder" disabled={false}/>
          <br/>
          <Button placeholder="Placeholder" disabled={true}/>
          <br/>
          <Button placeholder="Placeholder" type={ButtonType.standard} disabled={false}/>
          <br/>
          <Button placeholder="Placeholder" type={ButtonType.standard} disabled={true}/>
          <br/>
          <Button type={ButtonType.standard} disabled={false} firstImage={Icons.adicionar}/>
          <br/>
          <Button type={ButtonType.standard} disabled={false} secondImage={Icons.adicionar}/>
          <br/>
          <Button placeholder="Placeholder" firstImage={Icons.adicionar} secondImage={Icons.adicionar}/>
          <br/>
        </div>
      </>
    );
  }

  export default Home