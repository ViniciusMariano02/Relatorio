import React , {useState, useEffect} from 'react';
import './listAll.css'
import Modal from 'react-modal'

Modal.setAppElement("#root")

export const TelaChefe = () => {

    const[modalIsOpen, setIsOpen] = useState(false);
    const[regiaoIsOpen, setIsOpenRegiao] = useState(false);
    const[filialIsOpen, setIsOpenFilial] = useState(false);
    const[vendedorIsOpen, setIsOpenVendedor] = useState(false);
    const[clienteIsOpen, setIsOpenCliente] = useState(false);
    const[tipoPgIsOpen, setIsOpenTipoPg] = useState(false);
    const[produtoIsOpen, setIsOpenProduto] = useState(false);
    const[grupoIsOpen, setIsOpenGrupo] = useState(false);
    const[fornecdorIsOpen, setIsOpenFornecedor] = useState(false);

    function openModal() {
        setIsOpen(true);
    } 

    function closeModal(){
        setIsOpen(false);
    }

    function openRegiao() {
        setIsOpenRegiao(true);
    } 

    function closeRegiao(){
        setIsOpenRegiao(false);
    }

    function openFilial() {
        setIsOpenFilial(true);
    } 

    function closeFilial(){
        setIsOpenFilial(false);
    }

    function openVendedor(){
        setIsOpenVendedor(true);
    }

    function closeVendedor (){
        setIsOpenVendedor(false);
    }

    function openCliente (){
        setIsOpenCliente(true);
    }

    function closeCliente (){
        setIsOpenCliente(false);
    }

    function openTipoPg (){
        setIsOpenTipoPg(true);
    }

    function closeTipoPg (){
        setIsOpenTipoPg(false);
    }

    function openProduto (){
        setIsOpenProduto(true);
    }

    function closeProduto (){
        setIsOpenProduto(false);
    }

    function openGrupo (){
        setIsOpenGrupo(true);
    }

    function closeGrupo (){
        setIsOpenGrupo(false);
    }

    function openFornecedor (){
        setIsOpenFornecedor(true);
    }

    function closeFornecedor (){
        setIsOpenFornecedor(false);
    }

    function abrirRegiao (){
        closeFornecedor()
        closeGrupo()
        closeTipoPg()
        closeCliente()
        closeVendedor()
        closeFilial()
        closeProduto()
        openRegiao()
    }

    function abrirFilial (){
        closeGrupo()
        closeFornecedor()
        closeTipoPg()
        closeCliente()
        closeProduto()
        closeVendedor()
        closeRegiao()
        openFilial()
    }

    function abrirVendedor (){
        closeCliente()
        closeGrupo()
        closeFornecedor()
        closeFilial()
        closeRegiao()
        closeTipoPg()
        closeProduto()
        openVendedor()
    }

    function abrirCliente (){
        closeTipoPg()
        closeFilial()
        closeRegiao()
        closeVendedor()
        closeProduto()
        closeFornecedor()
        closeGrupo()
        openCliente()
    }

    function abrirTipoPg (){
        closeFilial()
        closeRegiao()
        closeVendedor()
        closeCliente()
        closeFornecedor()
        closeProduto()
        closeGrupo()
        openTipoPg()
    }

    function abrirProduto(){
        closeFilial()
        closeCliente()
        closeRegiao()
        closeFornecedor()
        closeTipoPg()
        closeVendedor()
        closeGrupo()
        openProduto()
    }

    function abrirGrupo (){
        closeCliente()
        closeFilial()
        closeProduto()
        closeFornecedor()
        closeRegiao()
        closeTipoPg()
        closeVendedor()
        openGrupo()
    }

    function abrirFornecedor (){
        closeCliente()
        closeFilial()
        closeGrupo()
        closeProduto()
        closeRegiao()
        closeTipoPg()
        closeVendedor()
        openFornecedor()
    }

    //--------------------------------------------------------------Separando Filtros-------------------------------------------------------------------------

    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("");
    const [dataIni, setDataIni] = useState("");
    const [dataFin, setDataFin] = useState("");
    const [products, setProducts] = useState([]);

    const [checkNFE, setCheckNFE] = useState(false);
    const [checkNFCE, setCheckNFCE] = useState(false);
    const [checkTOP, setCheckTOP] = useState(false);

    const[itens, setItens] = useState([]);

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

    console.log(itens)

    const objs = [
        {
        "incluirNfe": checkNFE,
        "incluirNfce": checkNFCE,
        "statusVenda": "%",
        "dataInicial": dataIni,
        "dataFinal": dataFin, 
        "idFilial": "1",
        "idTop": null
    }
    ] 

    console.log(objs)

    const handleSetData = async () => {
        const url = 'http://8b38091fc43d.sn.mynetname.net:2002/resFatPorFilial';
        const parametros = {
          incluirNfe: true,
          incluirNfce: true,
          statusVenda: '%',
          dataInicial: '2021-01-01',
          dataFinal: '2021-12-31',
          idFilial: '1',
          idTop: null
        };
        const queryString = new URLSearchParams(parametros).toString();
        const resposta = await fetch(`${url}?${queryString}`);
        const jsonResposta = await resposta.json();
        console.log(jsonResposta);
      }

    useEffect(() => {
        async function fetchData (){
            const response = await fetch ("https://fakestoreapi.com/products?limit=5"); 
            const data = await response.json();
            setProducts(data);
        }
        fetchData();
    }, []);

    const search_parameters = Object.keys(Object.assign({}, ...products));
    const filter_items = [...new Set(products.map((item) => item.category))];

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

//------------------------------------------------------------------Visual---------------------------------------------------------------------------------

        return (
            <div className="wrapper">

                <div>
                    <select>
                        <option>Filial</option>
                        <option>Região</option>
                    </select>
                    <button onClick={openModal} >Abrir Modal</button>

                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="testando"
                        overlayClassName="modal-overlay"
                        className="modal-content"

                    >   

                        <input
                            type="search"
                            name="search-form"
                            id="search-form"
                            className="search-input"
                            placeholder="Buscar por Filial"
                            onChange={(e) => setQuery(e.target.value)}
                        />

                        <ul className="card-grid">
                                {search(products).map((item) => (
                            <li>
                                    <article className="card" key={item.id}>
                                        <div className="card-content">
                                            <h2 className="card-name">{item.title}</h2>
                                            <ol className="card-list">
                                                <li>
                                                    Teste:{" "}
                                                    <span>{item.price}</span>
                                                </li>
                                         </ol>
                                        </div>
                                 </article>
                             </li>
                         ))}
                        </ul>

                        

                        <button onClick={closeModal}>Fechar</button>
                    </Modal>
                </div>

                <div>   

                    <form className='test' >

                        <div className="dataIni" >
                            <p>Data Inicial</p>
                            <input type="date" onChange={onChangeDataIni}/>
                        </div>

                        <div className="dataFin" >
                            <p>Data Final</p>
                            <input type="date" onChange={onChangeDataFin}/>
                        </div>

                        <div >
                            <button type='submit' className="pesquisar" onClick={handleSetData} >Pesquisar</button>
                        </div>

                        <div className="checkboxs" >
                             <input type="checkbox" value="false" id='TOP' checked={checkTOP} onChange={handleChecked02} /><label>Incluir T.OP. Salvas</label>

                            <input type="checkbox" value="false" id='NFE' checked={checkNFE} onChange={handleChecked} /><label>NF-e</label>

                             <input type="checkbox" value="false" id='NFCE' checked={checkNFCE} onChange={handleChecked01} /><label>NFC-e</label>

                        </div>
                    
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
                    
                    <div className="filtros" >                               
                        <button className='regiaoBtn' onClick={abrirRegiao} >Região</button>          
                        <Modal            
                            isOpen={regiaoIsOpen}
                            onRequestClose={closeRegiao}
                            contentLabel="testando1"
                            shouldCloseOnOverlayClick={true}
                            overlayClassName="modal-overlay"
                            className="regiao">       
                                
                        
                        <tbody>                       
                            {products.map((f1) =>{
                                return (
                                    <tr key={f1.id} >
                                        <td>
                                            {f1.title}
                                        </td>

                                        <td>
                                            {f1.price}
                                        </td>

                                    </tr>
                                )
                            }   )}
                        </tbody></Modal>
                    
                        <button className='filialBtn' onClick={abrirFilial} >Filial</button>     
                        <Modal                         
                            isOpen={filialIsOpen}
                            onRequestClose={closeFilial}
                            contentLabel="Filial"
                            shouldCloseOnOverlayClick={true}
                            overlayClassName="filial-overlay"
                            className="filial"><h1>Oi</h1>
                        </Modal>
                    
                        <button className='vendedorBtn' onClick={abrirVendedor} > Vendedor </button>
                        <Modal
                            isOpen={vendedorIsOpen}
                            onRequestClose={closeVendedor}
                            contentLabel="Vendedor"
                            shouldCloseOnOverlayClick={true}
                            overlayClassName="vendedor-overlay"
                            className="vendedor"> <p>Ok</p>
                    

                        </Modal>
                    
                        <button className='clienteBtn' onClick={abrirCliente} > Cliente </button>
                        <Modal
                            isOpen={clienteIsOpen}
                            onRequestClose={closeCliente}
                            contentLabel="Cliente"
                            shouldCloseOnOverlayClick={true}
                            overlayClassName="Cliente-overlay"
                            className="cliente"> <h2>Cliente</h2>

                        </Modal>
                    
                        <button className='tipoDePagamentoBtn' onClick={abrirTipoPg} > Tipo de Pagamento </button>
                        <Modal
                            isOpen={tipoPgIsOpen}
                            onRequestClose={closeTipoPg}
                            contentLabel="Tipo de Pagamento"
                            shouldCloseOnOverlayClick={true}
                            overlayClassName="TipoPg-overlay"
                            className="tipoDePagamento"> <h3> Tipo de Pagamento </h3>
                        </Modal>


                        <button className='produtoBtn' onClick={abrirProduto} > Produto </button>
                        <Modal
                            isOpen={produtoIsOpen}
                            onRequestClose={closeProduto}
                            contentLabel="Produto"
                            shouldCloseOnOverlayClick={true}
                            overlayClassName="Produto-overlay"
                            className="produto"> <h3> Produto </h3>

                        </Modal>


                        <button className='grupoBtn' onClick={abrirGrupo} > Grupo </button>
                        <Modal 
                            isOpen={grupoIsOpen}
                            onRequestClose={closeGrupo}
                            shouldCloseOnOverlayClick={true}
                            overlayClassName="Grupo-overlay"
                            contentLabel="Grupo"
                            className="grupo"> <h3>Grupo</h3>
                        </Modal>

                    
                        <button className='fornecedorBtn' onClick={abrirFornecedor} >Fornecedor</button>
                        <Modal 
                            isOpen={fornecdorIsOpen}
                            onRequestClose={closeFornecedor}
                            contentLabel="Fornecedor"
                            shouldCloseOnOverlayClick={true}
                            overlayClassName="Fornecedor-overlay"
                            className="fornecedor"> <h3>Fornecedor</h3>                        
                        </Modal>

                    </div>
                </div>
            </div>
        );
}

export default TelaChefe;