import React , {useState, useEffect} from 'react';
import './listAll.css'
import { FcSearch } from 'react-icons/fc'
import Modal from 'react-modal'

Modal.setAppElement("#root")

export const TelaChefe = () => {

    const[filterFilial, setIsOpenFilterFilial] = useState(true);
    const[filterTops, setIsOpenFilterTops] = useState(false);
    const[modalIsOpen, setIsOpen] = useState(false);
    const[regiaoIsOpen, setIsOpenRegiao] = useState(true);
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
    const [query1, setQuery1] = useState("");
    const [query2, setQuery2] = useState("");
    const [query3, setQuery3] = useState("");
    const [query4, setQuery4] = useState("");
    const [query5, setQuery5] = useState("");
    const [query6, setQuery6] = useState("");
    const [query7, setQuery7] = useState("");
    const [query8, setQuery8] = useState("");

    const [filter, setFilter] = useState("");
    const [dataIni, setDataIni] = useState("");
    const [dataFin, setDataFin] = useState("");
    const [products, setProducts] = useState([]);
    
    const [dados, setDados] = useState([]);
    const [dadosRegiao, setDadosRegiao] = useState([]);
    const [dadosCliente, setDadosCliente] = useState([]);
    const [dadosTipoPagamento, setDadosTipoPagamento] = useState([]);
    const [dadosVendedor, setDadosVendedor] = useState([]);

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
    console.log(dadosCliente)
    console.log(dadosRegiao)
    console.log(dadosVendedor)
    console.log(dadosTipoPagamento)
    

    async function setDataFilial () 
    {
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

      async function setDataCliente () 
      {
        const res = await fetch("http://8b38091fc43d.sn.mynetname.net:2002/resFatPorCliente", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(objs),
        });
        if(res.status === 200){
            res.json().then(data => { 
                setDadosCliente(data);
            });

        }
      }

      async function setDataRegiao () 
      {
        const res = await fetch("http://8b38091fc43d.sn.mynetname.net:2002/resFatPorRegiao", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(objs),
        });
        if(res.status === 200){
            res.json().then(data => { 
                setDadosRegiao(data);
            });

        }
      }

      async function setDataTipoPagamento () 
      {
        const res = await fetch("http://8b38091fc43d.sn.mynetname.net:2002/resFatPorTipoPagamento", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(objs),
        });
        if(res.status === 200){
            res.json().then(data => { 
                setDadosTipoPagamento(data);
            });

        }
      }

      async function setDataVendedor () 
      {
        const res = await fetch("http://8b38091fc43d.sn.mynetname.net:2002/resFatPorVendedor", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(objs),
        });
        if(res.status === 200){
            res.json().then(data => { 
                setDadosVendedor(data);
            });

        }
      }

      const handleSetData = () => {
        setDataCliente();
        setDataFilial();
        setDataRegiao();
        setDataTipoPagamento();
        setDataVendedor();
      }

    useEffect(() => {
        async function fetchData (){
            const response = await fetch ("https://fakestoreapi.com/products?limit=5"); 
            const data = await response.json();
            setProducts(data);
        }
        fetchData();
    }, []);

    //const search_parameters = Object.keys(Object.assign({}, ...products));
    //const filter_items = [...new Set(dados.map((item) => item.category))];

    const result = products.reduce((a, b) => a + b.price, 0)
    console.log(result)

    function onChangeDataIni(e){
        setDataIni(e.currentTarget.value)
    }

    function onChangeDataFin(e){
        setDataFin(e.currentTarget.value)
    }

    console.log(filter)
    //console.log(checkTOP)
    //console.log(checkNFCE)
    //console.log(checkNFE)
    //console.log(dataIni)
    //console.log(dataFin)

//------------------------------------------------------------------Visual----------------------------------------------------------------------------------
        return (
            <div className="wrapper">
                
                <div className='test1'>

                <span className='frontSpan' >Atenção: Ao selecionar NF-e, é importante destacar as T.OP.´s que serão tomadas em consideração na consulta, consultando sem nenhuma T.OP.(consulta geral), poderá vir ENTRADAS </span>

                <div className='btns'>
                    <button className='topFilialBtn' onClick={abrirFiltroFilial} >Filial</button>
                    <button className='topsBtn' onClick={abrirFiltroTops} >Tops</button>
                </div>
            
                <Modal isOpen={filterFilial} onRequestClose={closeFilterFilial} contentLabel="Filtro-Filial" overlayClassName="filtroFilialOverlay" className="filtro-filial-content">
                    <form className='filtro1'>
                        <div className='filter01' >
                        <select className='custom-select' >
                            <option>Filial</option>
                            <option>Região</option>
                        </select>
                                       
                            <label htmlFor="search-form">
                            <input type="search" name="search-form" id="search-form" className="search-input" placeholder="Buscar..." onChange={(e) => setQuery(e.target.value)}/>
                        
                            </label>
                        
                            <div className='icon2'>
                                <button className="clear"> Limpar </button>
                                <FcSearch onClick={openModal} className='icon' /> 
                            </div>
                                                
                        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="testando" overlayClassName="modal-overlay" className="modal-content">   
                            <input type="search" name="search-form" id="search-form" className="search-input" placeholder="Buscar por Filial" onChange={(e) => setQuery1(e.target.value)}/>

                            <ul className="card-grid">
                                    {(products).map((item) => (
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
                                        <th className='ep1' >Código</th>

                                        <th className='ep2' >Fantasia</th>

                                        <th className='ep3' >Razão Social</th>

                                        <th className='ep4' >Documento</th>

                                        <th className='ep5' >Município</th>
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
                                onChange={(e) => setQuery2(e.target.value)}
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

                            <input type="search" name="search-form" id="search-form" className="search-input" placeholder="Buscar por Filial" onChange={(e) => setQuery3(e.target.value)}/>

                            <ul className="card-grid">
                               {dados.filter(dat => dat.filial.toLowerCase().includes(query3)).map((dat) => (
                                 <li key={dat.idFilial} >
                                    {dat.filial}
                                 </li>
                               ))}         
                            </ul>

                            <button onClick={closeModal}>Fechar</button>
                        </Modal>
                    
                    </div>
                    </form>
                                       
                </Modal>

                    <Modal isOpen={relatorioIsOpen} onRequestClose={closeRelatorio} contentLabel="Relatorio" overlayClassName="relatorioOverlay" className="relatorio-content"> 
                    <button className='relatorioBtn' onClick={() => window.print()} >Relatório</button>  </Modal>

                <div>   

                    <div className='test' >
                        
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
                                <option value="">ORÇAMENTO</option>
                            </select>
                        </div>

                        <div >
                            <button className="pesquisar" onClick={handleSetData} >Pesquisar</button>
                        </div>

                        <div className="checkboxs" >
                             <input type="checkbox" value="false" id='TOP' checked={checkTOP} onChange={handleChecked02} /><label>Incluir T.OP. Salvas</label>

                            <input type="checkbox" value="false" id='NFE' checked={checkNFE} onChange={handleChecked} /><label>NF-e</label>

                             <input type="checkbox" value="false" id='NFCE' checked={checkNFCE} onChange={handleChecked01} /><label>NFC-e</label>

                        </div>
                    
                    </div>

                    <div>
                        <p></p>
                    </div>

                </div>

                <div className="search-wrapper">
              
                    <div className="filtros" >                               
                        <button className='regiaoBtn' onClick={abrirRegiao} >Região</button>          
                        <Modal isOpen={regiaoIsOpen} onRequestClose={closeRegiao} contentLabel="testando1" shouldCloseOnOverlayClick={false} overlayClassName="modal-overlay" className="regiao">

                                <div>
                                <thead>
                                    <tr>
                                        <th className="regiao-f1">Id.Região</th>

                                        <th className="regiao-f2" scope="col">Região</th> 

                                        <th className="regiao-f3">Id. Filial</th>    

                                        <th className="regiao-f4">Qtd. Vendas</th>

                                        <th className="regiao-f5">Vlr.Médio Venda</th>

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
                                {dadosRegiao.map((f1) =>{
                                    return (
                                        <tr key={f1.idFilial} >
                                            <td className='re1' >{f1.idRegiao}</td>
                                                
                                            <td className='re2' >{f1.regiao}</td>
                                            
                                            <td className='re3'>{f1.idFilial}</td>

                                            <td className='re4' >{f1.qtdVendas}</td>

                                            <td className='re5' >{f1.vlMedioVendas}</td>

                                            <td className='re6' >{f1.vlTotalNfe}</td>

                                            <td className='re7' >{f1.vlTotalNfce}</td>

                                            <td className='re8' >{f1.vlVendaTotal}</td>

                                            <td className='re9' >{f1.vlCustoTotal}</td>

                                            <td className='re10' >{f1.vlLucroVenda}</td>

                                            <td className='re11' >{f1.margem}</td>

                                            <td className='re12'>{f1.markup}</td>
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

                                        <th className="filial-f5">Méd. Itens/Cup.</th>

                                        <th className="filial-f6">Vlr. Médio Venda</th>

                                        <th className="filial-f7">Vlr. Total NF-e</th>

                                        <th className="filial-f8">Vlr. Total NFC-e</th>

                                        <th className="filial-f9">Vlr. Venda Total</th>

                                        <th className="filial-f10">Vlr. Total Credito</th>

                                        <th className="filial-f11" > Vlr. Total Líquido</th>

                                        <th className="filial-f12" >Vlr. Custo Total</th>

                                        <th className="filial-f13" >Vlr. Lucro Venda</th>

                                        <th className="filial-f14" >Vlr. Lucro Líquido</th>

                                        <th className="filial-f15" >% Margem</th>

                                        <th className="filial-f16" >Percentual</th>
                                    </tr>
                                </thead>

                                <div>
                                    <tbody> {dados.map((f2) => { 
                                        return(
                                            <tr>
                                                <td className='fi1' > {f2.idFilial} </td>

                                                <td className='fi2' >{f2.filial}</td>

                                                <td className='fi3' >{f2.qtdVendas}</td>

                                                <td className='fi4' >{f2.qtdItens}</td>

                                                <td className='fi5' >{f2.qtdItensCupom}</td>

                                                <td className='fi6' >{f2.vlMedioVendas.toFixed(2)}</td>

                                                <td className='fi7' >{f2.vlTotalNfe}</td>

                                                <td className='fi8' >{f2.vlTotalNfce}</td>

                                                <td className='fi9' >{f2.vlVendaTotal}</td>

                                                <td className='fi10' >{f2.vlTotalCredito}</td>

                                                <td className='fi11' >{f2.vlTotalLiquido}</td>

                                                <td className='fi12' >{f2.vlCustoTotal}</td>

                                                <td className='fi13' >{f2.vlLucroVenda}</td>

                                                <td className='fi14' >{f2.vlLucroLiquido}</td>

                                                <td className='fi15' >{f2.margem}</td>

                                                <td className='fi16' >{(f2.percentual).toFixed(2)}</td>
                                            </tr>                                          
                                        )
                                    })} </tbody>
                                </div>

                        </Modal>
                    
                        <button className='vendedorBtn' onClick={abrirVendedor} > Vendedor </button>
                        <Modal isOpen={vendedorIsOpen} onRequestClose={closeVendedor} contentLabel="Vendedor" shouldCloseOnOverlayClick={true} overlayClassName="vendedor-overlay" className="vendedor"> 
                        <input type="search" name="search-vend" id="search-vend" className="search-vendedor" placeholder="Buscar por Vendedor" onChange={(e) => setQuery4(e.target.value)}/>
                        <thead>
                                <tr>
                                    <th className='vendedor-f1'>Id. Filial</th>

                                    <th className='vendedor-f2'>Id. Vendedor</th>

                                    <th className='vendedor-f3'>Vendedor</th>

                                    <th className='vendedor-f4'>Qtd. Vendas</th>

                                    <th className='vendedor-f5'>Vlr. Total NF-e</th>

                                    <th className='vendedor-f6'>Vlr. Total NFC-e</th>

                                    <th className='vendedor-f7'> Vlr. Venda Total</th>

                                    <th className='vendedor-f8'>Vlr. Total Cancelamento</th>

                                    <th className='vendedor-f9'>Vlr. Total Desconto</th>

                                    <th className='vendedor-f10'>Vlr. Total Credito</th>

                                    <th className='vendedor-f11'>Vlr. Total Comissão</th>

                                    <th className='vendedor-f12'>Vlr. Custo Total</th>

                                    <th className='vendedor-f13'>Vlr. Lucro Venda</th>

                                    <th className='vendedor-f14'>Vlr. Lucro Líquido</th>

                                    <th className='vendedor-f15'>Per. Lucro Líquido</th>

                                    <th className='vendedor-f16'>Percentual</th>
                                </tr>
                            </thead>
                        {dados.filter(dat => dat.filial.toLowerCase().includes(query4)).map((dat) => (

                           <div>
                                <tbody>
                                    <tr>
                                        <td className='ve1'>{dat.idFilial}</td>

                                        <td className='ve2'>12</td>

                                        <td className='ve3'>Claudio </td>

                                        <td className='ve4'>{dat.qtdVendas}</td>

                                        <td className='ve5'>{dat.vlTotalNfe}</td>

                                        <td className='ve6'>{dat.vlTotalNfce}</td>

                                        <td className='ve7'>{dat.vlVendaTotal}</td>

                                        <td className='ve8'>Vazio</td>

                                        <td className='ve9'>Vazio</td>

                                        <td className='ve10'>{dat.vlTotalCredito}</td>

                                        <td className='ve11'>Vazio</td>

                                        <td className='ve12'>{dat.vlCustoTotal}</td>

                                        <td className='ve13'>{dat.vlLucroVenda}</td>

                                        <td className='ve14'>{dat.vlLucroLiquido}</td>

                                        <td className='ve15'>{(dat.vlLucroLiquido - dat.vlCustoTotal) / dat.vlLucroLiquido * 100}%</td>

                                        <td className='ve16'>{dat.percentual}</td>
                                    </tr>
                                </tbody>
                            </div>

                        ))}   
                           
                        </Modal>
                    
                        <button className='clienteBtn' onClick={abrirCliente} > Cliente </button>
                        <Modal isOpen={clienteIsOpen} onRequestClose={closeCliente} contentLabel="Cliente" shouldCloseOnOverlayClick={true} overlayClassName="Cliente-overlay" className="cliente"> 
                        <input type="search" name="search-cli" id="search-cli" className="search-cliente" placeholder="Buscar por Cliente" onChange={(e) => setQuery5(e.target.value)} />
                        <thead>
                                <tr>
                                    <th className='cliente-f1'>Id. Filial</th>

                                    <th className='cliente-f2'>Id. Cliente</th>

                                    <th className='cliente-f3'>Cliente</th>

                                    <th className='cliente-f4'>Qtd. Vendas</th>

                                    <th className='cliente-f5'>Vlr. Total NF-e</th>

                                    <th className='cliente-f6'>Vlr. Total NFC-e</th>

                                    <th className='cliente-f7'>Vlr. Venda Total</th>

                                    <th className='cliente-f8'>Vlr. Total Desconto</th>

                                    <th className='cliente-f9'>Vlr. Total Credito</th>

                                    <th className='cliente-f10'>Vlr. Custo Total</th>

                                    <th className='cliente-f11'>Vlr. Lucro Venda</th>

                                    <th className='cliente-f12'>Vlr. Lucro Líquido</th>

                                    <th className='cliente-f13'>Per. Lucro Líquido</th>

                                    <th className='cliente-f14'>Percentual</th>
                                </tr>
                            </thead>
                        {dados.filter(dat => dat.filial.toLowerCase().includes(query5)).map((dat1) => (
                                <div>
                                    <tbody>
                                        <tr>
                                            <td className='cli1'>{dat1.idFilial}</td>

                                            <td className='cli2'>13</td>

                                            <td className='cli3'>Vagner Santos</td>

                                            <td className='cli4'>{dat1.qtdVendas}</td>

                                            <td className='cli5'>{dat1.vlTotalNfe}</td>

                                            <td className='cli6'>{dat1.vlTotalNfce}</td>

                                            <td className='cli7'>{dat1.vlVendaTotal}</td>

                                            <td className='cli8'>Vazio</td>

                                            <td className='cli9'>{dat1.vlTotalCredito}</td>

                                            <td className='cli10'>{dat1.vlCustoTotal}</td>

                                            <td className='cli11'>{dat1.vlLucroVenda}</td>

                                            <td className='cli12'>{dat1.vlLucroLiquido}</td>

                                            <td className='cli13'>{(dat1.vlLucroLiquido - dat1.vlCustoTotal) / dat1.vlLucroLiquido * 100}%</td>

                                            <td className='cli14'>{dat1.percentual}</td>
                                        </tr>
                                    </tbody>
                                </div>
                        ))}
                            
                        </Modal>
                    
                        <button className='tipoDePagamentoBtn' onClick={abrirTipoPg} > Tipo de Pagamento </button>
                        <Modal isOpen={tipoPgIsOpen} onRequestClose={closeTipoPg} contentLabel="Tipo de Pagamento" shouldCloseOnOverlayClick={true} overlayClassName="TipoPg-overlay" className="tipoDePagamento"> 
                            <thead>
                                <tr>
                                    <th className='tpPg-f1' >Id. Filial</th>

                                    <th className='tpPg-f2' >Dinheiro</th>

                                    <th className='tpPg-f3' >Cheque</th>

                                    <th className='tpPg-f4' >BRASILCARD</th>

                                    <th className='tpPg-f5' >Cartão de Crédito</th>

                                    <th className='tpPg-f6' >POS Crédito</th>

                                    <th className='tpPg-f7' >Cartão de Débito</th>

                                    <th className='tpPg-f8' >POS Débito</th>

                                    <th className='tpPg-f9' >Crédito Loja</th>

                                    <th className='tpPg-f10' >Duplicata Mercantil</th>

                                    <th className='tpPg-f11' >Boleto Bancário</th>

                                    <th className='tpPg-f12' >Pix</th>

                                    <th className='tpPg-f13' >Sem Pagamento</th>

                                    <th className='tpPg-f14' >Cupom de crédito</th>

                                    <th className='tpPg-f15' >Outros</th>

                                    <th className='tpPg-f16' >Desconto Total</th>

                                    <th className='tpPg-f17' >Cancelamento Total</th>

                                    <th className='tpPg-f18' >Total</th>
                                </tr>
                            </thead>

                            <div>
                                <tbody>
                                    {dados.map((f5) => {
                                        return(
                                            <tr>
                                                <td className='pg1' >{f5.idFilial}</td>
                                                
                                                <td className='pg2' > 2 </td>

                                                <td className='pg3' > 3 </td>

                                                <td className='pg4' > 4 </td>

                                                <td className='pg5' > 5 </td>

                                                <td className='pg6' > 6 </td>

                                                <td className='pg7' > 7 </td>

                                                <td className='pg8' > 8 </td>

                                                <td className='pg9' > 9 </td>

                                                <td className='pg10' > 10 </td>

                                                <td className='pg11' > 11 </td>

                                                <td className='pg12' > 12 </td>

                                                <td className='pg13' > 13 </td>

                                                <td className='pg14' > 14 </td>

                                                <td className='pg15' > 15 </td>

                                                <td className='pg16' > 16 </td>

                                                <td className='pg17' > 17 </td>

                                                <td className='pg18' >{result}</td>
                                            </tr>
                                        )
                                    } )}
                                </tbody>
                            </div>

                        </Modal>

                        <button className='produtoBtn' onClick={abrirProduto} > Produto </button>
                        <Modal isOpen={produtoIsOpen} onRequestClose={closeProduto} contentLabel="Produto" shouldCloseOnOverlayClick={true} overlayClassName="Produto-overlay" className="produto"> 
                        <input type="search" name="search-pro" id="search-pro" className="search-produto" placeholder="Buscar por Produto" onChange={(e) => setQuery6(e.target.value)}/>
                        <thead>
                                <tr>
                                    <th className='produto-f1'>Ranking</th>

                                    <th className='produto-f2'>Id.Produto</th>

                                    <th className='produto-f3'>Produto</th>

                                    <th className='produto-f4'>Qtd. Total</th>

                                    <th className='produto-f5'>Sub Total</th>

                                    <th className='produto-f6'>% Desconto</th>

                                    <th className='produto-f7'>Vlr. Desconto Total </th>

                                    <th className='produto-f8'>Vlr. Venda Total</th>

                                    <th className='produto-f9'>Vlr. Custo Total</th>

                                    <th className='produto-f9'>Vlr. Lucro Total</th>

                                    <th className='produto-f10'>% Markup</th>

                                    <th className='produto-f11'>% Margem</th>

                                    <th className='produto-f12'>Percentual</th>
                                </tr>
                            </thead>
                        {products.filter(dat => dat.title.toLowerCase().includes(query6)).map((dat2) => (
                            <div>
                                    <tbody>
                                                <tr>
                                                    <td className='pro1'> {(dat2.rating.rate).toFixed(0)} </td>

                                                    <td className='pro2'> {dat2.id} </td>

                                                    <td className='pro3'> {dat2.title} </td>

                                                    <td className='pro4'> {dat2.rating.count} </td>

                                                    <td className='pro5'> {dat2.rating.count - 10} </td>

                                                    <td className='pro6'> 5% </td>

                                                    <td className='pro7'> {(dat2.price * 0.05).toFixed(2)} </td>

                                                    <td className='pro8'> {dat2.price * 30} </td>

                                                    <td className='pro9'> teste </td>

                                                    <td className='pro10'> {(dat2.price * 30 - dat2.price * 0.05).toFixed(2)} </td>

                                                    <td className='pro11'> %{(((dat2.price * 30 - (dat2.price * 30 - dat2.price * 0.05)) / (dat2.price * 30 - dat2.price * 0.05)) * 100 * 100).toFixed(3)} </td>

                                                    <td className='pro12'> %100 </td>

                                                    <td className='pro13'> %90 </td>
                                                </tr>
                                    </tbody>
                                </div>
                        ))} 
                                              
                         </Modal>

                        <button className='grupoBtn' onClick={abrirGrupo} > Grupo </button>
                        <Modal isOpen={grupoIsOpen} onRequestClose={closeGrupo} shouldCloseOnOverlayClick={true} overlayClassName="Grupo-overlay" contentLabel="Grupo" className="grupo">                                                     
                        <input type="search" name="search-gru" id="search-gru" className="search-grupo" placeholder="Buscar por Grupo" onChange={(e) => setQuery7(e.target.value)} />
                        <thead>
                                <tr>
                                    <th className='grupo-f1'>Ranking</th>

                                    <th className='grupo-f2'>Id. Grupo</th>

                                    <th className='grupo-f3'>Grupo</th>

                                    <th className='grupo-f4'>Qtd. Total</th>

                                    <th className='grupo-f5'>Sub Total</th>

                                    <th className='grupo-f6'>% Desconto</th>

                                    <th className='grupo-f7'>Vlr. Desconto Total</th>

                                    <th className='grupo-f8'>Vlr. Venda Total</th>

                                    <th className='grupo-f9'>Vlr. Custo Total</th>

                                    <th className='grupo-f9'>Vlr. Lucro Total</th>

                                    <th className='grupo-f10'>% Markup</th>

                                    <th className='grupo-f11'>% Margem</th>

                                    <th className='grupo-f12'>Percentual</th>
                                </tr>
                            </thead>
                        {products.filter(dat => dat.category.toLowerCase().includes(query7)).map((dat3) => (
                            <div>
                                    <tbody>
                                                <tr>
                                                    <td className='gru1'>{(dat3.rating.rate).toFixed(0)}</td>

                                                    <td className='gru2'>{dat3.id}</td>

                                                    <td className='gru3'>{dat3.category}</td>

                                                    <td className='gru4'>{dat3.rating.count}</td>

                                                    <td className='gru5'>{dat3.price}</td>

                                                    <td className='gru6'>%10</td>

                                                    <td className='gru7'>{(dat3.price * 0.10).toFixed(2)}</td>

                                                    <td className='gru8'>{((dat3.price - dat3.price * 0.10) * 30).toFixed(2)}</td>

                                                    <td className='gru9'>{((dat3.price - 50) * 30).toFixed(2)}</td>

                                                    <td className='gru10'>{(dat3.price * 30 - (dat3.price - 50 * 30)).toFixed(2)}</td>

                                                    <td className='gru11'>Falta dados para teste</td>

                                                    <td className='gru12'>falta dados</td>

                                                    <td className='gru13'>falta dados</td>
                                                </tr>
                                    </tbody>
                                </div>

                        ))}
                                                       
                        </Modal>

                        <button className='fornecedorBtn' onClick={abrirFornecedor} >Fornecedor</button>
                        <Modal  isOpen={fornecdorIsOpen} onRequestClose={closeFornecedor} contentLabel="Fornecedor" shouldCloseOnOverlayClick={true} overlayClassName="Fornecedor-overlay" className="fornecedor"> 
                        <input type="search" name="search-gru" id="search-gru" className="search-grupo" placeholder="Buscar por Grupo" onChange={(e) => setQuery8(e.target.value)}/>
                        <thead>
                                <tr>
                                    <th className='fornecedor-f1'>Ranking</th>

                                    <th className='fornecedor-f2'>Id. Fornecedor</th>

                                    <th className='fornecedor-f3'>Fornecedor</th>

                                    <th className='fornecedor-f4'>Qtd. Total</th>

                                    <th className='fornecedor-f5'>Sub Total</th>

                                    <th className='fornecedor-f6'>% Desconto</th>

                                    <th className='fornecedor-f7'>Vlr. Desconto Total</th>

                                    <th className='fornecedor-f7'>Vlr. Venda Total</th>

                                    <th className='fornecedor-f8'>Vlr. Custo Total</th>

                                    <th className='fornecedor-f9'>Vlr. Lucro Total</th>

                                    <th className='fornecedor-f10'>% Markup</th>

                                    <th className='fornecedor-f11'>% Margem</th>

                                    <th className='fornecedor-f12'>Percentual</th>

                                </tr>
                            </thead>
                        {dados.filter(dat => dat.filial.toLowerCase().includes(query8)).map((dat) => (
                                <div>
                                    <tbody>
                                        <tr>
                                            <td className='for1' > 1 </td>

                                            <td className='for2' > 679 </td>
                                            
                                            <td className='for3' > CERAMICA ELIZABETH RN LTDA </td>

                                            <td className='for4' > 1848 </td>

                                            <td className='for5' > 118284.94 </td>

                                            <td className='for6' > 1,66 </td>

                                            <td className='for7' > 1958,42 </td>

                                            <td className='for8' > 116492.72 </td>

                                            <td className='for9' > 94713.12 </td>

                                            <td className='for10' > 21779.60 </td>

                                            <td className='for11' > 23 </td>
 
                                            <td className='for12' > 18,70 </td>

                                            <td className='for13' > 14.20 </td>
                                        </tr>
                                    </tbody>
                                </div>
                        ))}
                            
                        </Modal>
                    </div>
                </div>
                </div>
            </div>
        );
}

export default TelaChefe;