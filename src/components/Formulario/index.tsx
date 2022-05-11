import Button from "../Button";

function Formulario() {
  return (
    <form>
      <div>
        <label>

        </label>
        <input 
        type="text" 
        name="tarefa"
        id="tarefa"
        placeholder="O que você quer estudar"
        required
        />
      </div>
      <div>
        <label>
            Tempo
        </label>
        <input 
        type="time"
        step="1"
        name="tempo"
        id="tempo"
        min="00:00:00"
        max="01:30:00"
        required
         />
      </div>
      <Button />
    </form>
  );
}

export default Formulario;
