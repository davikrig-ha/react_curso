import React, { useState, useEffect, useMemo, useCallback} from "react";

function App() {
  const [tarefas, setTarefas] = useState([]);

  const [input, setInput] = useState("");

  useEffect(() => {
    const tarefasStorage = localStorage.getItem("tarefas");
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  const handleAdd = useCallback(() =>  {
    setTarefas([...tarefas, input]);
    setInput("");
  }, [input, tarefas]);
  
  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  return (
    <div className="App">
      <ul>
        {tarefas.map((tarefas) => (
          <li key={tarefas}>{tarefas}</li>
        ))}
      </ul>
      <br/>
      <strong>Você tem {totalTarefas}  {totalTarefas === 1 ? 'Tarefa!' : 'Tarefas!'}</strong>      <br/>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </div>
  );
}

export default App;
