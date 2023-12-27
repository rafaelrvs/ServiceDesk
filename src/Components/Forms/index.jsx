import "./Forms.css"

const Forms = () =>{

return (
  <>
    <section>
      <form className="forms">
        <div className="container__circle">

          <div className="circle1"></div>Manutenção
          <div className="circle2"></div> Solicitação
          <div className="circle3"></div> Acompanhamento

        </div>
         <hr id="linha" />
        <div className="container__content">
          <label htmlFor="nome_do_colaborador">Nome do colaborador</label>
          <input type="text" id="nome_do_colaborador" />
          <label htmlFor="unidade">Unidade</label>
            <input type="text" id="unidade" />
          <label htmlFor="descricao">Sobre sua solicitação</label>
          <input type="text" placeholder="Descreva sua solicitação" id="" />

        </div>
        <div className="container__btn">
            <input type="button" value="Voltar" />
            <input type="submit" value="Continuar" />

        </div>



      </form>
    </section>
  </>
);

}
export default Forms