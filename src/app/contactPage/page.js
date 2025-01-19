import Button, { ButtonType } from "../components/button";
import Header from "../components/header";
import Input from "../components/input";
import Select from "../components/select";
import Estados from "../constants/estados";

function Contact() {

    return (
      <>
        <Header/>
        <div style={{margin: "1rem"}}>
          <div style={{display: "flex", flexWrap: "wrap"}}>
            <span style={{color: "#39542D", fontWeight: "bolder", fontSize: "1rem", width: "100%", marginBottom: "1rem"}}>Contato</span>

            <span style={{color: "#39542D", width: "100%", marginBottom: "1rem"}}>Entre em contato com uma brigada para se tornar um voluntário ou tirar dúvidas.</span>
          </div>

          <Input label="Nome e Sobrenome" placeholder="Seu nome"/>

          <Input label="E-mail de Contato" placeholder="Seu e-mail"/>

          <Input label="Telefone de Contato" placeholder="Seu telefone"/>

          <div style={{display: "flex", width: "100%"}}>
            <Select label="Estado" items={Estados} placeholder="UF"/>
            <span style={{marginLeft: "1rem"}}/>
            <Select label="Cidade" items={Estados} placeholder="Selecione a sua cidade" width="100%"/>
          </div>

          <Select label="Motivo do Contato" placeholder="Selecione o motivo do contato" width="100%"/>

          <Select label="Deseja falar com uma brigada específica? Se sim, selecione a brigada desejada." placeholder="Selecione uma brigada" width="100%"/>

          <Input label="Mensagem" placeholder="Digite aqui a sua mensagem" height="5rem"/>

          <input style={{marginTop: "2rem", marginRight: "0.5rem", border: "1px solid #39542D"}} type="checkbox" id="terms" name="terms" value="accepted"/>
          <label htmlFor="terms" style={{color: "#39542D"}}>Afirmo que li e aceito os Termos e Condições</label>

          <div style={{display: "flex", marginTop: "1rem"}}>
            <span style={{flexGrow: "1"}}/>
            <Button placeholder="Voltar" type={ButtonType.standard}/>
            <span style={{marginLeft: "0.5rem"}}/>
            <Button placeholder="Enviar"/>
          </div>
        </div>
      </>
    );
  }

  export default Contact