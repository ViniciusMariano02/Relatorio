import React , {useState, useEffect} from 'react';
import './listAll.css'
import { FcSearch } from 'react-icons/fc'
import Modal from 'react-modal'

Modal.setAppElement("#root")

export const TelaChefe = () => {

    const[filterFilial, setIsOpenFilterFilial] = useState(true);
    const[filterTops, setIsOpenFilterTops] = useState(false);
    const[modalIsOpen, setIsOpen] = useState(false);
    const[regiaoIsOpen, setIsOpenRegiao] = useState(false);
    const[filialIsOpen, setIsOpenFilial] = useState(false);
    const[vendedorIsOpen, setIsOpenVendedor] = useState(false);
    const[clienteIsOpen, setIsOpenCliente] = useState(false);
    const[tipoPgIsOpen, setIsOpenTipoPg] = useState(false);
    const[produtoIsOpen, setIsOpenProduto] = useState(false);
    const[grupoIsOpen, setIsOpenGrupo] = useState(false);
    const[fornecdorIsOpen, setIsOpenFornecedor] = useState(false);
    const[relatorioIsOpen, setIsOpenRelatorio] = useState(false);

    function openFilterFilial (){
        setIsOpenFilterFilial(true);
    }

    function closeFilterFilial (){
        setIsOpenFilterFilial(false);
    }

    function openFilterTops (){
        setIsOpenFilterTops(true);
    }

    function closeFilterTops (){
        setIsOpenFilterTops(false);
    }

    function openRelatorio (){
        setIsOpenRelatorio(true);
    }

    function closeRelatorio (){
        setIsOpenRelatorio(false);
    }

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

    function abrirFiltroFilial (){
        openFilterFilial()
        closeFilterTops()
    }

    function abrirFiltroTops (){
        openFilterTops()
        closeFilterFilial()
    }

    function abrirRegiao (){
        closeRelatorio()
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
        closeRelatorio()
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
        openRelatorio()
        openVendedor()
    }

    function abrirCliente (){
        closeRelatorio()
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
        openRelatorio()
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
        openRelatorio()
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
        openRelatorio()
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
        openRelatorio()
        openFornecedor()
    }

    //--------------------------------------------------------------Separando Filtros-------------------------------------------------------------------------

    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("");
    const [dataIni, setDataIni] = useState("");
    const [dataFin, setDataFin] = useState("");
    const [products, setProducts] = useState([]);
    const [dados, setDados] = useState([]);

    const [checkNFE, setCheckNFE] = useState(false);
    const [checkNFCE, setCheckNFCE] = useState(false);
    const [checkTOP, setCheckTOP] = useState(false);

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

    const objs = 
        {
        "incluirNfe": checkNFE,
        "incluirNfce": checkNFCE,
        "statusVenda": "%",
        "dataInicial": dataIni,
        "dataFinal": dataFin, 
        "idFilial": "1",
        "idTop": null
    }
    
    console.log(dados)

    const handleSetData = async (e) => {
        e.preventDefault()
        const res = await fetch("http://8b38091fc43d.sn.mynetname.net:2002/resFatPorFilial", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(objs),
        });
        if(res.status === 200){
            res.json().then(data => { 
                setDados(data);
            });

        }
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
    //const filter_items = [...new Set(products.map((item) => item.category))];

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

    //console.log(checkTOP)
    //console.log(checkNFCE)
    //console.log(checkNFE)
    //console.log(dataIni)
    //console.log(dataFin)

//------------------------------------------------------------------Visual---------------------------------------------------------------------------------

        return (
            <div className="wrapper">
                
                <div className='test1'>

                <span className='frontSpan' >Aten????o: Ao selecionar NF-e, ?? importante destacar as T.OP.??s que ser??o tomadas em considera????o na consulta, consultando sem nenhuma T.OP.(consulta geral), poder?? vir ENTRADAS </span>

                <div className='btns'>
                    <button className='topFilialBtn' onClick={abrirFiltroFilial} >Filial</button>
                    <button className='topsBtn' onClick={abrirFiltroTops} >Tops</button>
                </div>
            
                <Modal isOpen={filterFilial} onRequestClose={closeFilterFilial} contentLabel="Filtro-Filial" overlayClassName="filtroFilialOverlay" className="filtro-filial-content">
                    <form className='filtro1'>
                        <div className='filter01' >
                        <select className='custom-select' >
                            <option>Filial</option>
                            <option>Regi??o</option>
                        </select>
                                       
                            <label htmlFor="search-form">
                            <input type="search" name="search-form" id="search-form" className="search-input" placeholder="Buscar..." onChange={(e) => setQuery(e.target.value)}/>
                        
                            </label>
                        
                            <div className='icon2'>
                                <button className="clear"> Limpar </button>
                                <FcSearch onClick={openModal} className='icon' /> 
                            </div>
                            
                    
                        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="testando" overlayClassName="modal-overlay" className="modal-content">   
                            <input type="search" name="search-form" id="search-form" className="search-input" placeholder="Buscar por Filial" onChange={(e) => setQuery(e.target.value)}/>

                            <ul className="card-grid">
                                    {search(products).map((item) => (
                                <li>
                                        <article className="card" key={item.id}>
                                            <div className="card-content">
                                                <h2 className="card-name">{item.title}</h2>
                                                <ol className="card-list">

                                                    <li>Teste:{" "}<span>{item.price}</span></li>
                                            </ol>
                                            </div>
                                        </article>
                                </li>
                             ))}
                            </ul>

                            <button onClick={closeModal}>Fechar</button>
                        </Modal>
                    
                        <div>
                                <thead>
                                    <tr className='obs'>
                                        <th className='ep1' >C??digo</th>

                                        <th className='ep2' >Fantasia</th>

                                        <th className='ep3' >Raz??o Social</th>

                                        <th className='ep4' >Documento</th>

                                        <th className='ep5' >Munic??pio</th>
                                    </tr>
                                </thead>
                            </div>
                    </div>
                    </form>
                </Modal>

                <Modal
                    isOpen={filterTops}
                    onRequestClose={closeFilterTops}
                    contentLabel="Filtro-Tops"
                    overlayClassName="FitlroTopsOverlay"
                    className="filtro-tops-content">

                    <form className='filtro1' >
                        <div className='filter01' >                                        
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

                            <div className='icon2'>
                               <FcSearch onClick={openModal} className='icon' /> 
                            </div>

                            <div>
                                <thead>
                                    <tr>
                                        <th>
                                            teste1
                                        </th>

                                        <th>
                                            teste2
                                        </th>
                                    </tr>
                                </thead>
                            </div>
                            
                    
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="testando"
                            overlayClassName="modal-overlay"
                            className="modal-content"

                        >   

                            <input type="search" name="search-form" id="search-form" className="search-input" placeholder="Buscar por Filial" onChange={(e) => setQuery(e.target.value)}/>

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
                    </form>
                                       
                </Modal>

                    <Modal isOpen={relatorioIsOpen} onRequestClose={closeRelatorio} contentLabel="Relatorio" overlayClassName="relatorioOverlay" className="relatorio-content"> 
                    <button className='relatorioBtn' onClick={() => window.print()} >Relat??rio</button>  </Modal>

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

                        <div className="select">
                            <span className="sr-only">Status NFC-e</span>
                            <select
                                onChange={(e) => setFilter(e.target.value)}
                                className="custom-select01"
                                aria-label="Filter By Category"
                        >
                                <option id='todo' value="%">TODOS</option>
                                <option value="">VENDA</option>
                                <option value="">OR??AMENTO</option>
                            </select>
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
                        <p></p>
                    </div>

                </div>

                <div className="search-wrapper">
              
                    <div className="filtros" >                               
                        <button className='regiaoBtn' onClick={abrirRegiao} >Regi??o</button>          
                        <Modal            
                            isOpen={regiaoIsOpen}
                            onRequestClose={closeRegiao}
                            contentLabel="testando1"
                            shouldCloseOnOverlayClick={true}
                            overlayClassName="modal-overlay"
                            className="regiao">

                                <div>
                                <thead>
                                    <tr>
                                        <th className="regiao-f1">Id.Regi??o</th>

                                        <th className="regiao-f2" scope="col">Regi??o</th> 

                                        <th className="regiao-f3">Id. Filial</th>    

                                        <th className="regiao-f4">Qtd. Vendas</th>

                                        <th className="regiao-f5">Vlr.M??dio Venda</th>

                                        <th className="regiao-f6">Vlr. Total NF-e</th>

                                        <th className="regiao-f7">Vlr. Total NFC-e</th>

                                        <th className="regiao-f8">Vlr. Venda Total</th>

                                        <th className="regiao-f9">Vlr. Custo Total</th>

                                        <th className="regiao-f10">Vlr. Lucro Venda</th>

                                        <th className="regiao-f11" >Margem</th>

                                        <th className="regiao-f12" >Markup</th>

                                    </tr>
                                </thead>      
                                </div>

                        <div>                      
                            <tbody>                       
                                {dados.map((f1) =>{
                                    return (
                                        <tr key={f1.idFilial} >
                                            <td className='re1' ></td>
                                                
                                            <td className='re2' ></td>
                                            
                                            <td className='re3'>{f1.idFilial}</td>

                                            <td className='re4' >{f1.qtdVendas}</td>

                                            <td className='re5' >{f1.vlMedioVendas}</td>

                                            <td className='re6' >{f1.vlTotalNfe}</td>

                                            <td className='re7' >{f1.vlTotalNfce}</td>

                                            <td className='re8' >{f1.vlVendaTotal}</td>

                                            <td className='re9' >{f1.vlCustoTotal}</td>

                                            <td className='re10' >{(f1.vlVendaTotal - f1.vlCustoTotal)}</td>

                                            <td className='re11' >{f1.margem}</td>

                                            <td className='re12'>{((f1.vlVendaTotal - f1.vlCustoTotal) / f1.vlCustoTotal)*100}</td>
                                        </tr>
                                    )
                                }       )}
                            </tbody>
                        </div>
                        </Modal>
                    
                        <button className='filialBtn' onClick={abrirFilial} >Filial</button>     
                        <Modal isOpen={filialIsOpen} onRequestClose={closeFilial} contentLabel="Filial" shouldCloseOnOverlayClick={true} overlayClassName="filial-overlay" className="filial">
                                <thead>
                                    <tr>
                                        <th className="filial-f1">Id.Filial</th>

                                        <th className="filial-f2" scope="col">Filial</th> 

                                        <th className="filial-f3">Qtd. Vendas</th>    

                                        <th className="filial-f4">Qtd. Itens</th>

                                        <th className="filial-f5">M??d. Itens/Cup.</th>

                                        <th className="filial-f6">Vlr. M??dio Venda</th>

                                        <th className="filial-f7">Vlr. Total NF-e</th>

                                        <th className="filial-f8">Vlr. Total NFC-e</th>

                                        <th className="filial-f9">Vlr. Venda Total</th>

                                        <th className="filial-f10">Vlr. Total Credito</th>

                                        <th className="filial-f11" > Vlr. Total L??quido</th>

                                        <th className="filial-f12" >Vlr. Custo Total</th>

                                        <th className="filial-f13" >Vlr. Lucro Venda</th>

                                        <th className="filial-f14" >Vlr. Lucro L??quido</th>

                                        <th className="filial-f15" >% Margem</th>

                                        <th className="filial-f16" >Percentual</th>
                                    </tr>
                                </thead>

                                <div>
                                    <tbody> {dados.map((f2) => { 
                                        return(
                                            <tr>
                                                <td className='fi1' >
                                                    {f2.idFilial}
                                                </td>

                                                <td className='fi2' >
                                                    {f2.filial}
                                                </td>

                                                <td className='fi3' >
                                                    {f2.qtdVendas}
                                                </td>

                                                <td className='fi4' >
                                                    
                                                </td>

                                                <td className='fi5' >
                                                    {f2.vlMedioVendas}
                                                </td>

                                                <td className='fi6' >
                                                    {f2.vlTotalNfe}    
                                                </td>
                                            </tr>
                                        )
                                    })} </tbody>
                                </div>

                        </Modal>
                    
                        <button className='vendedorBtn' onClick={abrirVendedor} > Vendedor </button>
                        <Modal isOpen={vendedorIsOpen} onRequestClose={closeVendedor} contentLabel="Vendedor" shouldCloseOnOverlayClick={true} overlayClassName="vendedor-overlay" className="vendedor"> 
                            <thead>
                                <tr>
                                    <th className='vendedor-f1' >Id. Filial</th>

                                    <th className='vendedor-f2' >Id. Vendedor</th>

                                    <th className='vendedor-f3' >Vendedor</th>

                                    <th className='vendedor-f4' >Qtd. Vendas</th>

                                    <th className='vendedor-f5' >Vlr. Total NF-e</th>

                                    <th className='vendedor-f6'>Vlr. Total NFC-e</th>

                                    <th className='vendedor-f7'> Vlr. Venda Total</th>

                                    <th className='vendedor-f8' >Vlr. Total Cancelamento</th>

                                    <th className='vendedor-f9' >Vlr. Total Desconto</th>

                                    <th className='vendedor-f10' >Vlr. Total Credito</th>

                                    <th className='vendedor-f11' >Vlr. Total Comiss??o</th>

                                    <th className='vendedor-f12' >Vlr. Custo Total</th>

                                    <th className='vendedor-f13' >Vlr. Lucro Venda</th>

                                    <th className='vendedor-f14'>Vlr. Lucro L??quido</th>

                                    <th className='vendedor-f15' >Per. Lucro L??quido</th>

                                    <th className='vendedor-f16'>Percentual</th>
                                </tr>
                            </thead>
                            
                        </Modal>
                    
                        <button className='clienteBtn' onClick={abrirCliente} > Cliente </button>
                        <Modal isOpen={clienteIsOpen} onRequestClose={closeCliente} contentLabel="Cliente" shouldCloseOnOverlayClick={true} overlayClassName="Cliente-overlay" className="cliente"> 
                            <thead>
                                <tr>
                                    <th className='cliente-f1' >Id. Filial</th>

                                    <th className='cliente-f2'>Id. Cliente</th>

                                    <th className='cliente-f3' >Cliente</th>

                                    <th className='cliente-f4' >Qtd. Vendas</th>

                                    <th className='cliente-f5' >Vlr. Total NF-e</th>

                                    <th className='cliente-f6' >Vlr. Total NFC-e</th>

                                    <th className='cliente-f7' >Vlr. Venda Total</th>

                                    <th className='cliente-f8' >Vlr. Total Desconto</th>

                                    <th className='cliente-f9' >Vlr. Total Credito</th>

                                    <th className='cliente-f10' >Vlr. Custo Total</th>

                                    <th className='cliente-f11' >Vlr. Lucro Venda</th>

                                    <th className='cliente-f12' >Vlr. Lucro L??quido</th>
                                    
                                    <th className='cliente-f13' >Per. Lucro L??quido</th>

                                    <th className='cliente-f14'>Percentual</th>
                                </tr>
                            </thead>

                        </Modal>
                    
                        <button className='tipoDePagamentoBtn' onClick={abrirTipoPg} > Tipo de Pagamento </button>
                        <Modal isOpen={tipoPgIsOpen} onRequestClose={closeTipoPg} contentLabel="Tipo de Pagamento" shouldCloseOnOverlayClick={true} overlayClassName="TipoPg-overlay" className="tipoDePagamento"> 
                            <thead>
                                <tr>
                                    <th className='tpPg-f1' >Id. Filial</th>

                                    <th className='tpPg-f2' >Dinheiro</th>

                                    <th className='tpPg-f3' >Cheque</th>

                                    <th className='tpPg-f4' >BRASILCARD</th>

                                    <th className='tpPg-f5' >Cart??o de Cr??dito</th>

                                    <th className='tpPg-f6' >POS Cr??dito</th>

                                    <th className='tpPg-f7' >Cart??o de D??bito</th>

                                    <th className='tpPg-f8' >POS D??bito</th>

                                    <th className='tpPg-f9' >Cr??dito Loja</th>

                                    <th className='tpPg-f10' >Duplicata Mercantil</th>

                                    <th className='tpPg-f11' >Boleto Banc??rio</th>

                                    <th className='tpPg-f12' >Pix</th>

                                    <th className='tpPg-f13' >Sem Pagamento</th>

                                    <th className='tpPg-f14' >Cupom de cr??dito</th>

                                    <th className='tpPg-f15' >Outros</th>

                                    <th className='tpPg-f16' >Desconto Total</th>

                                    <th className='tpPg-f17' >Cancelamento Total</th>

                                    <th className='tpPg-f18' >Total</th>
                                </tr>
                            </thead>

                        </Modal>


                        <button className='produtoBtn' onClick={abrirProduto} > Produto </button>
                        <Modal
                            isOpen={produtoIsOpen}
                            onRequestClose={closeProduto}
                            contentLabel="Produto"
                            shouldCloseOnOverlayClick={true}
                            overlayClassName="Produto-overlay"
                            className="produto"> 

                            <thead>
                                <tr>
                                    <th className='produto-f1' >
                                        Ranking
                                    </th>

                                    <th className='produto-f2' >
                                        Id.Produto
                                    </th>

                                    <th className='produto-f3' >
                                        Produto
                                    </th>

                                    <th className='produto-f4' >
                                        Qtd. Total
                                    </th>

                                    <th className='produto-f5' >
                                        Sub Total
                                    </th>

                                    <th className='produto-f6' >
                                        % Desconto
                                    </th>

                                    <th className='produto-f7' >
                                       Vlr. Desconto Total 
                                    </th>

                                    <th className='produto-f8' >
                                        Vlr. Venda Total
                                    </th>

                                    <th className='produto-f9' >
                                        Vlr. Lucro Total
                                    </th>

                                    <th className='produto-f10' >
                                        % Markup
                                    </th>

                                    <th className='produto-f11' >
                                        % Margem
                                    </th>

                                    <th className='produto-f12' >
                                        Percentual
                                    </th>
                                </tr>
                            </thead>

                        </Modal>


                        <button className='grupoBtn' onClick={abrirGrupo} > Grupo </button>
                        <Modal 
                            isOpen={grupoIsOpen}
                            onRequestClose={closeGrupo}
                            shouldCloseOnOverlayClick={true}
                            overlayClassName="Grupo-overlay"
                            contentLabel="Grupo"
                            className="grupo"> 
                            
                            
                            <thead>
                                <tr>
                                    <th className='grupo-f1' >
                                        Ranking
                                    </th>

                                    <th className='grupo-f2' >
                                        Id. Grupo
                                    </th>

                                    <th className='grupo-f3' >
                                        Grupo
                                    </th>

                                    <th className='grupo-f4' >
                                        Qtd. Total
                                    </th>

                                    <th className='grupo-f5' >
                                        Sub Total
                                    </th>

                                    <th className='grupo-f6' >
                                        % Desconto
                                    </th>

                                    <th className='grupo-f7' >
                                        Vlr. Desconto Total
                                    </th>

                                    <th className='grupo-f8' >
                                        Vlr. Venda Total
                                    </th>

                                    <th className='grupo-f9' >
                                        Vlr. Custo Total
                                    </th>

                                    <th className='grupo-f10' >
                                        % Markup
                                    </th>

                                    <th className='grupo-f11' >
                                        % Margem
                                    </th>

                                    <th className='grupo-f12' >
                                        Percentual
                                    </th>                          
                                </tr>
                            </thead>


                        </Modal>

                    
                        <button className='fornecedorBtn' onClick={abrirFornecedor} >Fornecedor</button>
                        <Modal 
                            isOpen={fornecdorIsOpen}
                            onRequestClose={closeFornecedor}
                            contentLabel="Fornecedor"
                            shouldCloseOnOverlayClick={true}
                            overlayClassName="Fornecedor-overlay"
                            className="fornecedor"> 


                            <thead>
                                <tr>
                                    <th className='fornecedor-f1' >Ranking</th>

                                    <th className='fornecedor-f2' >Id. Fornecedor</th>

                                    <th className='fornecedor-f3' >
                                        Fornecedor
                                    </th>

                                    <th className='fornecedor-f4' >
                                        Qtd. Total
                                    </th>

                                    <th className='fornecedor-f5' >
                                        Sub Total
                                    </th>

                                    <th className='fornecedor-f6' >
                                        % Desconto
                                    </th>

                                    <th className='fornecedor-f7' >
                                        Vlr. Desconto Total
                                    </th>

                                    <th className='fornecedor-f8' >
                                        Vlr. Custo Total
                                    </th>

                                    <th className='fornecedor-f9' >
                                        Vlr. Lucro Total
                                    </th>

                                    <th className='fornecedor-f10' >
                                        % Markup
                                    </th>

                                    <th className='fornecedor-f11' >
                                        % Margem
                                    </th>

                                    <th className='fornecedor-f12' >
                                        Percentual
                                    </th>

                                </tr>
                            </thead>


                        </Modal>

                    </div>
                </div>
                </div>
            </div>
        );
}

export default TelaChefe;