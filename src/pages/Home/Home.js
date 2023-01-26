import React from 'react'
import { useState } from 'react'
import { useAuthentication } from "../../hooks/useAuthentication"
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Home = () => {

    const[name, setName] = useState("")
    const[password, setPassword] = useState("")
    const[error, setError] = useState("")
    const [margemhoras, setMargemhoras] = useState("")
    const [datainicio, setDatainicio] = useState("")
    const [saldodehoras, setSaldodehoras] = useState("")
    const [horasprevistas, setHorasprevistas] = useState("")
    const [nametarefa, setNametarefa] = useState("")
    const [horasprevtarefas, setHorasprevtarefa] = useState("")
    const [horasclientetarefa, setHorasclientetarefa] = useState("")

    const{login, error: authError, loading} = useAuthentication()

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()

        setError("")

        const projeto = {
            name,
            password,
            margemhoras
        }
        console.log(projeto)
    }

  return (
    <div className="login">
        <h1>Cadastro de Projeto</h1>
        <form onSubmit={handleSubmit}>
         
            <label>
                <span>Nome do Projeto:</span>
                <input value={name} onChange={(e) => setName(e.target.value)} type="name" name="name" required placeholder="Nome do Projeto"/>
            </label>

            <label>
                <span>Responsável:</span>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="name" name="name" required placeholder="Senha do usuário"/>
            </label>

            <label>
              <span>Data de Inicio:</span>
              <input value={datainicio} onChange={(e) => setDatainicio(e.target.value)} type="date" name="data" required placeholder='Data de Inicio'  />
            </label>

            <button onClick={openModal}>Adicionar Tarefas</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Adicionar Tarefa</h2>
        <button onClick={closeModal}>close</button>
        <form>
          <label>Nome da Tarefa:</label>
          <input value={nametarefa} onChange={(e) => setNametarefa(e.target.value)} type="name" name="nametarefa" required placeholder="Nome da Tarefa"/>
          <label>Responsavel pela tarefa</label>
        </form>
      </Modal>


            <label>
              <span>Margem de Horas:</span>
              <input value={margemhoras} onChange={(e) => setMargemhoras(e.target.value)} type="hour" name='margemhoras' required placeholder='Margem de Horas'/>
            </label>

            <label>
              <span>Horas previstas:</span>
              <input value={horasprevistas} onChange={(e) => setHorasprevistas(e.target.value)} type="hour" name='horasprevistas' required placeholder='Horas Previstas'/>
            </label>

            <label>
              <span>Saldo de Horas:</span>
              <input value={saldodehoras} onChange={(e) => setSaldodehoras(e.target.value)} type="hour" name='saldodehoras' required placeholder='Saldo de Horas'/>
            </label>

            
            {!loading &&<button className="btn">Entrar</button>}
            {loading && <button className="btn" disable>Aguarde...</button>}
            {error && <p className="error">{error}</p>}
            
            
        </form>
    </div>
  )
}

export default Home