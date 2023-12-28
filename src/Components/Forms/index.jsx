import { useState } from "react";
import "./Forms.css"

const Forms = () => {
  
  
  const [ sectionCircle , setctioncirCircle ] =  useState()
  const  circuloSelecionado2 = document.querySelector(".circle2")
  const  circuloSelecionado1 = document.querySelector(".circle1")
  const  circuloSelecionado3 = document.querySelector(".circle3")
  const [formDesativo, setFormDesativo] = useState(false)
  
  


   
function activeCircle01 (){
  if(circuloSelecionado1.className === "circle1")
  circuloSelecionado1.style.backgroundColor=" #a33120"
circuloSelecionado2.style.backgroundColor="white"
circuloSelecionado3.style.backgroundColor="white"
setctioncirCircle("Manutenção")
console.log(sectionCircle)



}
function activeCircle02 (){
  if(circuloSelecionado2.className === "circle2")
  circuloSelecionado1.style.backgroundColor="white"
circuloSelecionado2.style.backgroundColor=" #a33120"
circuloSelecionado3.style.backgroundColor="white"
setctioncirCircle("Solicitação")

console.log(sectionCircle)
}
function activeCircle03 (){
  if(circuloSelecionado3.className === "circle3")
  circuloSelecionado1.style.backgroundColor="white"
circuloSelecionado2.style.backgroundColor="white"
circuloSelecionado3.style.backgroundColor=" #a33120"
setctioncirCircle("Acompanhamento")
console.log(sectionCircle)


}
const [colaborador, setColaborador] = useState('')




function insertingColaborador (event){
  const colaboradorInserido = event.target.value
  setColaborador(colaboradorInserido)
  
}

const [unidade, setUnidade] = useState('')
function insertingUnidade(event){
  const  unidadeInserida = event.target.value
  setUnidade(unidadeInserida)


}



const [descricao ,setDescricao] =useState("")



function insertingDescription(event){
const descricaoInserida = event.target.value
setDescricao(descricaoInserida)
}

const handleSubmit = async (e) => {
  e.preventDefault();

  setFormDesativo(true);

};




  return (
    <>
      <section>
        <form className="forms" onSubmit={handleSubmit}>

          <div className="container__circle" >
            <div className="circle1" onClick={activeCircle01}  value={sectionCircle}  ></div>Manutenção
            <div className="circle2" onClick={activeCircle02}  value={sectionCircle}  ></div> Solicitação
            <div className="circle3" onClick={activeCircle03}  value={sectionCircle}  ></div> Acompanhamento
          </div>

          <hr id="linha" />
          <div className="container__content">
            <label htmlFor="nome_do_colaborador" >Nome do colaborador</label>
            <input type="text" id="nome_do_colaborador" placeholder="Qual é seu nome?" value={colaborador} onChange={insertingColaborador} required />
            <label htmlFor="unidade">Unidade</label>
            <input type="text" placeholder="Qual é seu local de trabalho?" id="unidade"value={unidade} onChange={insertingUnidade} required />
            <label htmlFor="descricao">Sobre sua solicitação</label>
            <input type="text" placeholder=" Descreva sua solicitação" id="descricao" value={descricao} onChange={insertingDescription} required />
          </div>

          <div className="container__btn">
            <input id="btn_voltar" type="button" value="Voltar" />
            <input id="btn_continuar" type="submit" value="Continuar" />
          </div>

        </form>
      </section>
    </>
  );

}
export default Forms