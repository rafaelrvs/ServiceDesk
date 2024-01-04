import "./Forms.css";


const Forms = () =>{
    return(

        <>
            <form id="forms">
                <h1>Faça sua solicitação</h1>

                <label htmlFor="nome-do-colaborador">Nome do colaborador</label>
                <input type="text" id="nome-do-colaborador" placeholder=" Digite o nome do solicitante..." />
                <label htmlFor="unidade-do-colaborador">Unidade</label>
                <input type="text" id="unidade" placeholder=" Digite a unidade..." />
                <div className="btn-prosseguir" >
                    <input id="btn" type="submit" value="Prosseguir" />
                </div>
                

            </form>

            
        </>
    )
}
export default Forms

