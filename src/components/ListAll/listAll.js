import React , {useState, useEffect, useRef} from 'react';
import './listAll.css'
import Modal from '../modalFiliais';

export const TelaChefe = () => {

    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("");
    const [dataIni, setDataIni] = useState("");
    const [dataFin, setDataFin] = useState("");

    const [checkNFE, setCheckNFE] = useState(false);
    const [checkNFCE, setCheckNFCE] = useState(false);
    const [checkTOP, setCheckTOP] = useState(false);
    
    const [dropdown, setDropdown] = useState(""); 
    const modalRef = useRef(null);

  const toggleDropdown = () => {
    console.log("show");
    //se clicar no botão, modal aparece
    setDropdown("show");
    document.body.addEventListener("click", closeDropdown);
  }

  const closeDropdown = event => {
    event.stopPropagation(); //impede de executar listeners dos filhos
    const contain = modalRef.current.contains(event.target);
    if (!contain) { //se clicar fora do modal, ele DESaparece
      console.log("hidden");
      setDropdown("");
      document.body.removeEventListener("click", closeDropdown);
    }
  };

    const handleChecked = (e) => {
        setCheckNFE(e.currentTarget.checked);
      }

      const handleChecked01 = (e) => {
        setCheckNFCE(e.currentTarget.checked);
      }

      const handleChecked02 = (e) => {
        setCheckTOP(e.currentTarget.checked);
      }

    
    const opcTodos = document.getElementById('todo')
    
    const valorTodos = (opcTodos)

    console.log(valorTodos)

    const objs = {
        "incluirNfe": checkNFE,
        "incluirNfce": checkNFCE,
        "statusVenda": valorTodos,
        "dataInicial": dataIni,
        "dataFinal": dataFin, 
        "idFilial": "1",
        "idTop": null
    }
    
    console.log(objs)

    useEffect(() => {
        
        fetch(
            "https://fakestoreapi.com/products?limit=5"
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    setLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setLoaded(true);
                    setError(error);
                }
            );
    }, []);

    const data = Object.values(items);

    const search_parameters = Object.keys(Object.assign({}, ...data));
    const filter_items = [...new Set(data.map((item) => item.category))];

    function search(items) {
        return items.filter(
            (item) =>
                item.category.includes(filter) &&
                search_parameters.some((parameter) =>
                    item[parameter].toString().toLowerCase().includes(query)
                )
        );
    }

    function onChangeDataIni(e){
        setDataIni(e.currentTarget.value)
    }

    function onChangeDataFin(e){
        setDataFin(e.currentTarget.value)
    }

    console.log(checkTOP)
    console.log(checkNFCE)
    console.log(checkNFE)
    console.log(dataIni)
    console.log(dataFin)

    if (error) {
        return <>{error.message}</>;
    } else if (!loaded) {
        return <>Carregando...</>;
    } else {
        return (
            <div className="wrapper">

                <div>

                <header className="App-header">
                        <button onClick={toggleDropdown}>Click Here!</button>
                        <Modal className={dropdown} modalRef={modalRef}/>
                    </header>

                    

                    <form className='test' >
                        <p>DT. Inicial</p>
                        <input type="date" onChange={onChangeDataIni}/>

                        <p>DT. Final</p>
                        <input type="date" onChange={onChangeDataFin}/>

                        <div>
                            <button>Pesquisar</button>
                        </div>

                        <input type="checkbox" value="false" id='TOP' checked={checkTOP} onChange={handleChecked02} /><label>Incluir T.OP. Salvas</label>

                        <input type="checkbox" value="false" id='NFE' checked={checkNFE} onChange={handleChecked} /><label>NF-e</label>

                        <input type="checkbox" value="false" id='NFCE' checked={checkNFCE} onChange={handleChecked01} /><label>NFC-e</label>

                    </form>

                    

                    <div>
                        <button>Relatorio</button>
                    </div>

                    <div>
                        <p></p>
                    </div>

                </div>

                <div className="search-wrapper">
                    <label htmlFor="search-form">
                        <input
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="search-input"
                            placeholder="Buscar..."
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        
                    </label>

                    <div className="select">
                        <span className="sr-only">Status NFC-e</span>
                        <select
                            onChange={(e) => setFilter(e.target.value)}
                            className="custom-select"
                            aria-label="Filter By Category"
                        >
                            <option id='todo' value="%">TODOS</option>
                            <option value="">VENDA</option>
                            <option value="">ORÇAMENTO</option>
                            {filter_items.map((item) => (
                                <option value={item}>{item}</option>
                            ))}
                        </select>
                        <span className="focus"></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default TelaChefe;