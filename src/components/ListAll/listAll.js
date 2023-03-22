import React , {useState, useEffect} from 'react';
import './listAll.css'
import { FcSearch } from 'react-icons/fc'
import {BiBlock} from 'react-icons/bi'
import Modal from 'react-modal'
import Chart from 'react-google-charts';

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
    const [checkTOP, setCheckTOP] = useState(true);

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

    const keys = Object.keys(dadosTipoPagamento);

    console.log(keys)

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

    const [teste, setTeste] = useState([]);

    useEffect(() => {
        async function fetch1 (){
            const response = await fetch ("http://8b38091fc43d.sn.mynetname.net:2005/produtos/general/company/1/payment/1?size=50"); 
            const data = await response.json();
            setTeste(data.content);
        }
        fetch1();
    }, []);

    console.log(teste)


    function onChangeDataIni(e){
        setDataIni(e.currentTarget.value)
    }

    function onChangeDataFin(e){
        setDataFin(e.currentTarget.value)
    }

    console.log(filter)

//------------------------------------------------------------------Dashboards (Dashboard Região)-------------------------------------------------------------------------------
    const[dashboardRegiao, setIsOpenDashboardRegiao] = useState(false);
 
    function openDashboardRegiao (){
        setIsOpenDashboardRegiao(true)
    }
    function closeDashboardRegiao (){
        setIsOpenDashboardRegiao(false)
    }
    
    const result = dadosRegiao.reduce((a, b) => a + b.vlCustoTotal, 0)
    const result1 = dadosRegiao.reduce((a, b) => a + b.vlVendaTotal, 0)
    const result2 = dadosRegiao.reduce((a, b) => a + b.vlLucroVenda, 0) 
    const result3 = dadosRegiao.reduce((a, b) => a + b.vlTotalNfe, 0)
    const result4 = dadosRegiao.reduce((a, b) => a + b.vlTotalNfce, 0) 
    
    const options = {
        title: "Valores",
        is3D: true,
    };

    const barData = [
        [
          "Element",
          "Valor",
          { role: "style" },
          {
            sourceColumn: 0,
            role: "annotation",
            type: "string",
            calc: "stringify",
          },
        ],
        ["Valor Lucro", result2, "#F7C64F", null],
        ["Valor Custo", result, "#b87333", null],
        ["Valor Total ", result1, "#39E055", null],
        ["Valor  Nf-e", result3, "#8226ED", null],
        ["Valor NFC-e", result4, "#2686ED", null],
      ];
      
    const barOptions = {
        title: "Tabela Valores Totais.",
        width: 600,
        height: 400,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
      };
      

    const dataRegiao = [
        ["Element", "Valor Total", { role: "style" }],
        ["Lucro Venda", result2, "#F7C64F"], 
        ["Valor Custo", result , "#b87333"],     
        ["Venda Total", result1, "#39E055"], 
        ["Valor Nf-e", result3 , "#8226ED"],     
        ["Venda NFC-e", result4, "#2686ED"], 
      ];
//-------------------------------------------------------------Dashboard Filial-------------------------------------------------------------------------

const[dashboardFilial, setIsOpenDashboardFilial] = useState(false);

console.log(query)
console.log(query1)
console.log(query2)

function openDashboardFilial (){
    setIsOpenDashboardFilial(true)
}
function closeDashboardFilial (){
    setIsOpenDashboardFilial(false)
}

const resultFi = dados.reduce((a, b) => a + b.vlCustoTotal, 0)
const resultFi1 = dados.reduce((a, b) => a + b.vlVendaTotal, 0)
const resultFi2 = dados.reduce((a, b) => a + b.vlLucroVenda, 0) 
const resultFi3 = dados.reduce((a, b) => a + b.vlTotalNfe, 0)
const resultFi4 = dados.reduce((a, b) => a + b.vlTotalNfce, 0) 

const optionsFi = {
    title: "Valores",
    is3D: true,
};

const barDataFi = [
    [
      "Element",
      "Valor",
      { role: "style" },
      {
        sourceColumn: 0,
        role: "annotation",
        type: "string",
        calc: "stringify",
      },
    ],
    ["Valor Lucro", resultFi2, "#F7C64F", null],
    ["Valor Custo", resultFi, "#b87333", null],
    ["Valor Total ", resultFi1, "#39E055", null],
    ["Valor  Nf-e", resultFi3, "#8226ED", null],
    ["Valor NFC-e", resultFi4, "#2686ED", null],
  ];
  
const barOptionsFi = {
    title: "Tabela Valores Totais.",
    width: 600,
    height: 400,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };
  
const dataFilial = [
    ["Element", "Valor Total", { role: "style" }],
    ["Lucro Venda", result2, "#F7C64F"], 
    ["Valor Custo", result , "#b87333"],     
    ["Venda Total", result1, "#39E055"], 
    ["Valor Nf-e", result3 , "#8226ED"],     
    ["Venda NFC-e", result4, "#2686ED"], 
  ];

//------------------------------------------------------------------Dashboard Vendedor----------------------------------------------------------------------  
const[dashboardVendedor, setIsOpenDashboardVendedor] = useState(false);

function openDashboardVendedor (){
    setIsOpenDashboardVendedor(true)
}
function closeDashboardVendedor (){
    setIsOpenDashboardVendedor(false)
}

const resultVen = dadosVendedor.reduce((a, b) => a + b.vlCustoTotal, 0)
const resultVen1 = dadosVendedor.reduce((a, b) => a + b.vlVendaTotal, 0)
const resultVen2 = dadosVendedor.reduce((a, b) => a + b.vlLucroVenda, 0) 
const resultVen3 = dadosVendedor.reduce((a, b) => a + b.vlTotalNfe, 0)
const resultVen4 = dadosVendedor.reduce((a, b) => a + b.vlTotalNfce, 0) 

const optionsVen = {
    title: "Valores",
    is3D: true,
};

const barDataVen = [
    [
      "Element",
      "Valor",
      { role: "style" },
      {
        sourceColumn: 0,
        role: "annotation",
        type: "string",
        calc: "stringify",
      },
    ],
    ["Valor Lucro", resultVen2, "#F7C64F", null],
    ["Valor Custo", resultVen, "#b87333", null],
    ["Valor Total ", resultVen1, "#39E055", null],
    ["Valor  Nf-e", resultVen3, "#8226ED", null],
    ["Valor NFC-e", resultVen4, "#2686ED", null],
  ];
  
const barOptionsVen = {
    title: "Tabela Valores Totais.",
    width: 600,
    height: 400,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };
  
const dataVendedor = [
    ["Element", "Valor Total", { role: "style" }],
    ["Lucro Venda", resultVen2, "#F7C64F"], 
    ["Valor Custo", resultVen , "#b87333"],     
    ["Venda Total", resultVen1, "#39E055"], 
    ["Valor Nf-e", resultVen3 , "#8226ED"],     
    ["Venda NFC-e", resultVen4, "#2686ED"], 
  ];

//---------------------------------------------------------------Dashboard Cliente--------------------------------------------------------------------------
const [dashboardCliente, setIsOpenDashboardCliente] = useState(false);

function openDashboardCliente (){
    setIsOpenDashboardCliente(true)
}
function closeDashboardCliente(){
    setIsOpenDashboardCliente(false)
}

const resultCli = dadosCliente.reduce((a, b) => a + b.vlVendaTotal, 0 )
const resultCli1 = dadosCliente.reduce((a, b) => a + b.vlLucroVenda, 0 )
const resultCli2 = dadosCliente.reduce((a, b) => a + b.vlTotalNfe, 0 )
const resultCli3 = dadosCliente.reduce((a, b) => a + b.vlTotalNfce, 0 )
const resultCli4 = dadosCliente.reduce((a, b) => a + b.vlCustoTotal, 0 )
const resultCli5 = dadosCliente.reduce((a, b) => a + b.vlTotalDesconto, 0 )


const optionsCli = {
    title: "Valores",
    is3D: true,
};

const dataCli0 = [
    ["Valores em R$", "V1", "V2"],
    [" (Cima)NF-e / NFC-e(Baixo)  ", resultCli2, resultCli3],
    ["Custo / Lucro", resultCli4, resultCli1],
    ["Desconto / Venda", resultCli5, resultCli],
  ];

const optionsCli0 = {
    chart: {
      title: "Valores Gerais",
      subtitle: "Testando",
    },
    hAxis: {
      title: "GGG",
      minValue: 0,
    },
    vAxis: {
      title: "Valores",
    },
    bars: "horizontal",
    axes: {
      y: {
        0: { side: "right" },
      },
    },
  };

const barDataCli = [
    [
      "Element",
      "Valor",
      { role: "style" },
      {
        sourceColumn: 0,
        role: "annotation",
        type: "string",
        calc: "stringify",
      },
    ],
    ["Valor Lucro", resultCli1, "#F7C64F", null],
    ["Valor Custo", resultCli4, "#b87333", null],
    ["Valor Total ", resultCli, "#39E055", null],
    ["Valor  Nf-e", resultCli2, "#8226ED", null],
    ["Valor NFC-e", resultCli3, "#2686ED", null],
  ];
  
const barOptionsCli = {
    title: "Tabela Valores Totais.",
    width: 600,
    height: 400,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };
  
const dataCliente = [
    ["Element", "Valor Total", { role: "style" }],
    ["Lucro Venda", resultCli1, "#F7C64F"], 
    ["Valor Custo", resultCli4 , "#b87333"],     
    ["Venda Total", resultCli, "#39E055"], 
    ["Valor Nf-e", resultCli2 , "#8226ED"],     
    ["Venda NFC-e", resultCli3, "#2686ED"], 
  ];

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
                            
                            <div className='parla' >

                                <div className='checkboxes' >
                                    <input type="checkbox" className='cb'/> <p className='cbText' >Código</p>
                                    <input type="checkbox" className='cb' /> <p className='cbText'>R. Social</p>
                                </div>

                                <div className='checkboxes' >
                                    <input type="checkbox" className='cb' /> <p className='cbText'>N. Fantasia</p>
                                    <input type="checkbox" className='cb' /> <p className='cbText'>N. Documento</p>
                                </div>
                             
                            </div>

                            <input type="search" name="search-form" id="search-form" className="search-input-modal" placeholder="Buscar por Filial" onChange={(e) => setQuery1(e.target.value)}/>
                            <button className='modalBtn' onClick={closeModal}><BiBlock className='cancel-icon' />Fechar</button>
                            
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
                            className="modal-content2"

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
                                <div className='dashboardTeste' >
                                    <h3>Dashboards</h3> <p className='esc' >( Use 'Esc' para fechar )</p>
                                    <button className='dashboardBtn' onClick={openDashboardRegiao} >Graficos</button>
                                </div>
                                <thead>
                                    <tr>
                                        <th className='filter-all'>Id.Região</th>

                                        <th className="filter-name" scope="col">Região</th> 

                                        <th className='filter-all'>Id. Filial</th>    

                                        <th className='filter-all'>Qtd. Vendas</th>

                                        <th className='filter-all'>Vlr.Médio Venda</th>

                                        <th className='filter-all'>Vlr. Total NF-e</th>

                                        <th className='filter-all'>Vlr. Total NFC-e</th>

                                        <th className='filter-all'>Vlr. Venda Total</th>

                                        <th className='filter-all'>Vlr. Custo Total</th>

                                        <th className='filter-all'>Vlr. Lucro Venda</th>

                                        <th className='filter-all' >Margem</th>

                                        <th className='filter-all' >Markup</th>

                                    </tr>
                                </thead>      
                                </div>

                        <div>                      
                            <tbody>                       
                                {dadosRegiao.map((f1) =>{
                                    return (
                                        <tr key={f1.idFilial} >
                                            <td className='filter-all' >{f1.idRegiao}</td>
                                                
                                            <td className='filter-name' >{f1.regiao}</td>
                                            
                                            <td className='filter-all'>{f1.idFilial}</td>

                                            <td className='filter-all' >{f1.qtdVendas}</td>

                                            <td className='filter-all' >{f1.vlMedioVendas}</td>

                                            <td className='filter-all' >{f1.vlTotalNfe}</td>

                                            <td className='filter-all' >{f1.vlTotalNfce}</td>

                                            <td className='filter-all' >{f1.vlVendaTotal}</td>

                                            <td className='filter-all' >{f1.vlCustoTotal}</td>

                                            <td className='filter-all' >{f1.vlLucroVenda}</td>

                                            <td className='filter-all' >{f1.margem}</td>

                                            <td className='filter-all'>{f1.markup}</td>
                                        </tr>
                                    )
                                }       )}
                            </tbody>
                           
                            <Modal isOpen={dashboardRegiao} onRequestClose={closeDashboardRegiao} contentLabel="dashboard" shouldCloseOnOverlayClick={true} overlayClassName="dashboard-overlay" className="dashboard">
                                
                                <Chart chartType="ColumnChart" width="500px" height="400px" data={dataRegiao} className="up-column" />
                                <Chart chartType="BarChart" width="500px" height="250px" data={barData} options={barOptions} className="side-column" />
                                <Chart chartType="PieChart" data={dataRegiao} options={options} width={"500px"} height={"400px"} className="pie-chart" />
                                
                            </Modal>

                        </div>
                        </Modal>
                    
                        <button className='filialBtn' onClick={abrirFilial} >Filial</button>     
                        <Modal isOpen={filialIsOpen} onRequestClose={closeFilial} contentLabel="Filial" shouldCloseOnOverlayClick={true} overlayClassName="filial-overlay" className="filial">
                                <div className='dashboardTeste' >
                                    <h3>Dashboards</h3> <p className='esc' >( Use 'Esc' para fechar )</p>
                                    <button className='dashboardBtn' onClick={openDashboardFilial} >Graficos</button>
                                </div>
                                <thead>
                                    <tr>
                                        <th className='filter-all'>Id.Filial</th>

                                        <th className="filter-name" scope="col">Filial</th> 

                                        <th className='filter-all'>Qtd. Vendas</th>    

                                        <th className='filter-all'>Qtd. Itens</th>

                                        <th className='filter-all'>Méd. Itens/Cup.</th>

                                        <th className='filter-all'>Vlr. Médio Venda</th>

                                        <th className='filter-all'>Vlr. Total NF-e</th>

                                        <th className='filter-all'>Vlr. Total NFC-e</th>

                                        <th className='filter-all'>Vlr. Venda Total</th>

                                        <th className='filter-all'>Vlr. Total Credito</th>

                                        <th className='filter-all' > Vlr. Total Líquido</th>

                                        <th className='filter-all' >Vlr. Custo Total</th>

                                        <th className='filter-all' >Vlr. Lucro Venda</th>

                                        <th className='filter-all' >Vlr. Lucro Líquido</th>

                                        <th className='filter-all' >% Margem</th>

                                        <th className='filter-all' >Percentual</th>
                                    </tr>
                                </thead>

                                <div>
                                    <tbody> {dados.map((f2) => { 
                                        return(
                                            <tr>
                                                <td className='filter-all' > {f2.idFilial} </td>

                                                <td className='filter-name' >{f2.filial}</td>

                                                <td className='filter-all' >{f2.qtdVendas}</td>

                                                <td className='filter-all' >{f2.qtdItens}</td>

                                                <td className='filter-all' >{f2.qtdItensCupom}</td>

                                                <td className='filter-all' >{f2.vlMedioVendas.toFixed(2)}</td>

                                                <td className='filter-all' >{f2.vlTotalNfe}</td>

                                                <td className='filter-all' >{f2.vlTotalNfce}</td>

                                                <td className='filter-all' >{f2.vlVendaTotal}</td>

                                                <td className='filter-all' >{f2.vlTotalCredito}</td>

                                                <td className='filter-all' >{f2.vlTotalLiquido}</td>

                                                <td className='filter-all' >{f2.vlCustoTotal}</td>

                                                <td className='filter-all' >{f2.vlLucroVenda}</td>

                                                <td className='filter-all' >{f2.vlLucroLiquido}</td>

                                                <td className='filter-all' >{f2.margem}</td>

                                                <td className='filter-all' >{(f2.percentual).toFixed(2)}</td>
                                            </tr>                                          
                                        )
                                    })} </tbody>
                                </div>
                           
                            <Modal isOpen={dashboardFilial} onRequestClose={closeDashboardFilial} contentLabel="dashboard" shouldCloseOnOverlayClick={true} overlayClassName="dashboard-overlay" className="dashboard">
                                
                                <Chart chartType="ColumnChart" width="500" height="400px" data={dataFilial} className="up-column" />
                                <Chart chartType="BarChart" width="400px" height="200px" data={barDataFi} options={barOptionsFi} className="side-column" />
                                <Chart chartType="PieChart" data={dataFilial} options={optionsFi} width={"500px"} height={"400px"} className="pie-chart" />
    
                            </Modal>

                        </Modal>
                    
                        <button className='vendedorBtn' onClick={abrirVendedor} > Vendedor </button>
                        <Modal isOpen={vendedorIsOpen} onRequestClose={closeVendedor} contentLabel="Vendedor" shouldCloseOnOverlayClick={true} overlayClassName="vendedor-overlay" className="vendedor"> 
                        <input type="search" name="search-vend" id="search-vend" className="search" placeholder="Buscar por Vendedor" onChange={(e) => setQuery4(e.target.value)}/>
                                <div className='dashboardTeste' >
                                    <h3>Dashboards</h3> <p className='esc' >( Use 'Esc' para fechar )</p>
                                    <button className='dashboardBtn' onClick={openDashboardVendedor} >Graficos</button>
                                </div>
                        <thead>
                                <tr>
                                    <th className='filter-all'>Id. Filial</th>

                                    <th className='filter-all'>Id. Vendedor</th>

                                    <th className='filter-name'>Vendedor</th>

                                    <th className='filter-all'>Qtd. Vendas</th>

                                    <th className='filter-all'>Vlr. Total NF-e</th>

                                    <th className='filter-all'>Vlr. Total NFC-e</th>

                                    <th className='filter-all'> Vlr. Venda Total</th>

                                    <th className='filter-all'>Vlr. Total Cancelamento</th>

                                    <th className='filter-all'>Vlr. Total Desconto</th>

                                    <th className='filter-all'>Vlr. Total Credito</th>

                                    <th className='filter-all'>Vlr. Total Comissão</th>

                                    <th className='filter-all'>Vlr. Custo Total</th>

                                    <th className='filter-all'>Vlr. Lucro Venda</th>

                                    <th className='filter-all'>Vlr. Lucro Líquido</th>

                                    <th className='filter-all'>Per. Lucro Líquido</th>

                                    <th className='filter-all'>Percentual</th>
                                </tr>
                            </thead>
                        {dadosVendedor.filter(dat => dat.vendedor.toLowerCase().includes(query4)).map((dat) => (

                           <div>
                                <tbody>
                                    <tr>
                                        <td className='filter-all'>{dat.idFilial}</td>

                                        <td className='filter-all'>{dat.idVendedor}</td>

                                        <td className='filter-name'>{dat.vendedor}</td>

                                        <td className='filter-all'>{dat.qtdVendas}</td>

                                        <td className='filter-all'>{dat.vlTotalNfe}</td>

                                        <td className='filter-all'>{dat.vlTotalNfce}</td>

                                        <td className='filter-all'>{dat.vlVendaTotal}</td>

                                        <td className='filter-all'>{dat.vlTotalCancelamento}</td>

                                        <td className='filter-all'>{dat.vlTotalDesconto}</td>

                                        <td className='filter-all'>{dat.vlTotalCredito}</td>

                                        <td className='filter-all'>{dat.vlTotalComissao}</td>

                                        <td className='filter-all'>{(dat.vlCustoTotal).toFixed(2)}</td>

                                        <td className='filter-all'>{(dat.vlLucroVenda).toFixed(2)}</td>

                                        <td className='filter-all'>{(dat.vlLucroLiquido).toFixed(2)}</td>

                                        <td className='filter-all'>% {(dat.plucroLiquido).toFixed(2)}</td>

                                        <td className='filter-all'>{(dat.percentual).toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </div>

                        ))}   
                         
                            <Modal isOpen={dashboardVendedor} onRequestClose={closeDashboardVendedor} contentLabel="dashboard" shouldCloseOnOverlayClick={true} overlayClassName="dashboard-overlay" className="dashboard">
                                <Chart chartType="ColumnChart" width="500" height="400px" data={dataFilial} className="up-column" />
                                <Chart chartType="BarChart" width="500px" height="300px" data={barDataVen} options={barOptionsVen} className="side-column" />
                                <Chart chartType="PieChart" data={dataVendedor} options={optionsVen} width={"500px"} height={"400px"} className="pie-chart" />

                            </Modal>
                         
                        </Modal>
                    
                        <button className='clienteBtn' onClick={abrirCliente} > Cliente </button>
                        <Modal isOpen={clienteIsOpen} onRequestClose={closeCliente} contentLabel="Cliente" shouldCloseOnOverlayClick={true} overlayClassName="Cliente-overlay" className="cliente"> 
                        <input type="search" name="search-cli" id="search-cli" className="search" placeholder="Buscar por Cliente" onChange={(e) => setQuery5(e.target.value)} />
                        <div className='dashboard-label' >
                                
                                <div className='dashboardTeste' >
                                    <h3>Dashboards</h3> <p className='esc' >( Use 'Esc' para fechar )</p>
                                    <button className='dashboardBtn' onClick={openDashboardCliente} >Graficos</button>
                                </div>
                        
                            </div>
                        <thead>
                                <tr>
                                    <th className='filter-all'> Id. Filial </th>

                                    <th className='filter-all'> Id. Cliente </th>

                                    <th className='filter-name-cliente'> Cliente </th>

                                    <th className='filter-all'> Qtd. Vendas </th>

                                    <th className='filter-all'> Vlr. Total NF-e </th>

                                    <th className='filter-all'> Vlr. Total NFC-e </th>

                                    <th className='filter-all'> Vlr. Venda Total </th>

                                    <th className='filter-all'> Vlr. Total Desconto </th>

                                    <th className='filter-all'> Vlr. Total Credito </th>

                                    <th className='filter-all'> Vlr. Custo Total </th>

                                    <th className='filter-all'> Vlr. Lucro Venda </th>

                                    <th className='filter-all'> Vlr. Lucro Líquido </th>

                                    <th className='filter-all'> Per. Lucro Líquido </th>

                                    <th className='filter-all'> Percentual </th>
                                </tr>
                            </thead>
                        {dadosCliente.filter(dat => dat.cliente.toLowerCase().includes(query5)).map((dat1) => (
                                <div>
                                    <tbody>
                                        <tr>
                                            <td className='filter-all'>{dat1.idFilial}</td>

                                            <td className='filter-all'>{dat1.idCliente}</td>

                                            <td className='filter-name-cliente'>{dat1.cliente}</td>

                                            <td className='filter-all'>{dat1.qtdVendas}</td>

                                            <td className='filter-all'>{dat1.vlTotalNfe}</td>

                                            <td className='filter-all'>{dat1.vlTotalNfce}</td>

                                            <td className='filter-all'>{dat1.vlVendaTotal}</td>

                                            <td className='filter-all'>{dat1.vlTotalDesconto}</td>

                                            <td className='filter-all'>{dat1.vlTotalCredito}</td>

                                            <td className='filter-all'>{dat1.vlCustoTotal}</td>

                                            <td className='filter-all'>{dat1.vlLucroVenda}</td>

                                            <td className='filter-all'>{dat1.vlLucroLiquido}</td>

                                            <td className='filter-all'>{dat1.plucroLiquido} %</td>

                                            <td className='filter-all'>{dat1.percentual}</td>
                                        </tr>
                                    </tbody>
                                </div>
                        ))}
                           
                            <Modal isOpen={dashboardCliente} onRequestClose={closeDashboardCliente} contentLabel="dashboard" shouldCloseOnOverlayClick={true} overlayClassName="dashboard-overlay" className="dashboard">
                                
                                <div className='dashboard0' >
                                    <Chart chartType="ColumnChart" width="500px" height="400px" data={dataCliente} className="up-column" />
                                    <Chart chartType="BarChart" width="500px" height="250px" data={barDataCli} options={barOptionsCli} className="side-column" />
                                </div>          
                                
                                
                                <div className='dashboard0'>
                                    <Chart chartType="PieChart" data={dataCliente} options={optionsCli} width={"500px"} height={"400px"} className="pie-chart" />
                                    <Chart chartType="Bar" width="95%" height="300px" data={dataCli0} options={optionsCli0} className="bar-chart" />
                                </div>
                                
                            </Modal>

                        </Modal>
                    
                        <button className='tipoDePagamentoBtn' onClick={abrirTipoPg} > Tipo de Pagamento </button>
                        <Modal isOpen={tipoPgIsOpen} onRequestClose={closeTipoPg} contentLabel="Tipo de Pagamento" shouldCloseOnOverlayClick={true} overlayClassName="TipoPg-overlay" className="tipoDePagamento"> 
                        {keys.map((propriedade) => (
                            <th key={propriedade}>{propriedade}</th>
                        ))}
                            <thead>
                                <tr>
                                    <th className='filter-all' >Id. Filial</th>

                                    <th className='filter-all' >Dinheiro</th>

                                    <th className='filter-all' >Cheque</th>

                                    <th className='filter-all' >BRASILCARD</th>

                                    <th className='filter-all' >Cartão de Crédito</th>

                                    <th className='filter-all' >POS Crédito</th>

                                    <th className='filter-all' >Cartão de Débito</th>

                                    <th className='filter-all' >POS Débito</th>

                                    <th className='filter-all' >Crédito Loja</th>

                                    <th className='filter-all' >Duplicata Mercantil</th>

                                    <th className='filter-all' >Boleto Bancário</th>

                                    <th className='filter-all' >Pix</th>

                                    <th className='filter-all' >Sem Pagamento</th>

                                    <th className='filter-all' >Cupom de crédito</th>

                                    <th className='filter-all' >Outros</th>

                                    <th className='filter-all' >Desconto Total</th>

                                    <th className='filter-all' >Cancelamento Total</th>

                                    <th className='filter-all' >Total</th>
                                </tr>
                            </thead>

                            <div>
                                <tbody>
                                    {dadosTipoPagamento.map((f5) => {
                                        return(
                                            <tr>
                                                <td className='filter-all' > {f5.id_filial} </td>
                                                
                                                <td className='filter-all' > {f5.dinheiro} </td>

                                                <td className='filter-all' > {f5.cheque} </td>

                                                <td className='filter-all' > {f5.brasilcard} </td>

                                                <td className='filter-all' > {f5.cartao_de_credito} </td>

                                                <td className='filter-all' > {f5.pos_credito} </td>

                                                <td className='filter-all' > {f5.cartao_de_debito} </td>

                                                <td className='filter-all' > {f5.pos_debito} </td>

                                                <td className='filter-all' > {f5.credito_loja} </td>

                                                <td className='filter-all' > {f5.duplicata_mercantil} </td>

                                                <td className='filter-all' > {f5.boleto_bancario} </td>

                                                <td className='filter-all' > {f5.pix} </td>

                                                <td className='filter-all' > {f5.sem_pagamento} </td>

                                                <td className='filter-all' > {f5.cupom_de_credito} </td>

                                                <td className='filter-all' > {f5.outros} </td>

                                                <td className='filter-all' > {f5.desconto_total} </td>

                                                <td className='filter-all' > {f5.cancelamento_total} </td>

                                                <td className='filter-all' >{f5.total}</td>
                                            </tr>
                                        )
                                    } )}
                                </tbody>
                            </div>

                        </Modal>

                        <button className='produtoBtn' onClick={abrirProduto} > Produto </button>
                        <Modal isOpen={produtoIsOpen} onRequestClose={closeProduto} contentLabel="Produto" shouldCloseOnOverlayClick={true} overlayClassName="Produto-overlay" className="produto"> 
                        <input type="search" name="search-pro" id="search-pro" className="search" placeholder="Buscar por Produto" onChange={(e) => setQuery6(e.target.value)}/>
                        <thead>
                                <tr>
                                    <th className='filter-all'>Ranking</th>

                                    <th className='filter-all'>Id.Produto</th>

                                    <th className='filter-name'>Produto</th>

                                    <th className='filter-all'>Qtd. Total</th>

                                    <th className='filter-all'>Sub Total</th>

                                    <th className='filter-all'>% Desconto</th>

                                    <th className='filter-all'>Vlr. Desconto Total </th>

                                    <th className='filter-all'>Vlr. Venda Total</th>

                                    <th className='filter-all'>Vlr. Custo Total</th>

                                    <th className='filter-all'>Vlr. Lucro Total</th>

                                    <th className='filter-all'>% Markup</th>

                                    <th className='filter-all'>% Margem</th>

                                    <th className='filter-all'>Percentual</th>
                                </tr>
                            </thead>
                        {teste.filter(dat => dat.descricaoPdv.toLowerCase().includes(query6)).map((dat2) => (
                            <div>
                                    <tbody>
                                                <tr>
                                                    <td className='filter-all'> {(dat2.id_regra_icms)} </td>

                                                    <td className='filter-all'> {dat2.id} </td>

                                                    <td className='filter-name'> {dat2.descricaoPdv} </td>

                                                    <td className='filter-all'> {dat2.qtd_estoque} </td>

                                                    <td className='filter-all'> {dat2.valor_venda} </td>

                                                    <td className='filter-all'> {dat2.desconto_percentual} </td>

                                                    <td className='filter-all'> {(dat2.preco_atacado).toFixed(2)} </td>

                                                    <td className='filter-all'> 0 </td>

                                                    <td className='filter-all'> 0 </td>

                                                    <td className='filter-all'> 0 </td>

                                                    <td className='filter-all'> 0 </td>

                                                    <td className='filter-all'> 0 </td>

                                                    <td className='filter-all'> 0 </td>
                                                </tr>
                                    </tbody>
                                </div>
                        ))} 
                                              
                         </Modal>

                        <button className='grupoBtn' onClick={abrirGrupo} > Grupo </button>
                        <Modal isOpen={grupoIsOpen} onRequestClose={closeGrupo} shouldCloseOnOverlayClick={true} overlayClassName="Grupo-overlay" contentLabel="Grupo" className="grupo">                                                     
                        <input type="search" name="search-gru" id="search-gru" className="search" placeholder="Buscar por Grupo" onChange={(e) => setQuery7(e.target.value)} />
                        <thead>
                                <tr>
                                    <th className='filter-all'>Ranking</th>

                                    <th className='filter-all'>Id. Grupo</th>

                                    <th className='filter-name'>Grupo</th>

                                    <th className='filter-all'>Qtd. Total</th>

                                    <th className='filter-all'>Sub Total</th>

                                    <th className='filter-all'>% Desconto</th>

                                    <th className='filter-all'>Vlr. Desconto Total</th>

                                    <th className='filter-all'>Vlr. Venda Total</th>

                                    <th className='filter-all'>Vlr. Custo Total</th>

                                    <th className='filter-all'>Vlr. Lucro Total</th>

                                    <th className='filter-all'>% Markup</th>

                                    <th className='filter-all'>% Margem</th>

                                    <th className='filter-all'>Percentual</th>
                                </tr>
                            </thead>
                        {products.filter(dat => dat.category.toLowerCase().includes(query7)).map((dat3) => (
                            <div>
                                    <tbody>
                                                <tr>
                                                    <td className='filter-all'>{(dat3.rating.rate).toFixed(0)}</td>

                                                    <td className='filter-all'>{dat3.id}</td>

                                                    <td className='filter-name'>{dat3.category}</td>

                                                    <td className='filter-all'>{dat3.rating.count}</td>

                                                    <td className='filter-all'>{dat3.price}</td>

                                                    <td className='filter-all'>%10</td>

                                                    <td className='filter-all'>{(dat3.price * 0.10).toFixed(2)}</td>

                                                    <td className='filter-all'>{((dat3.price - dat3.price * 0.10) * 30).toFixed(2)}</td>

                                                    <td className='filter-all'>{((dat3.price - 50) * 30).toFixed(2)}</td>

                                                    <td className='filter-all'>{(dat3.price * 30 - (dat3.price - 50 * 30)).toFixed(2)}</td>

                                                    <td className='filter-all'>Falta dados para teste</td>

                                                    <td className='filter-all'>falta dados</td>

                                                    <td className='filter-all'>falta dados</td>
                                                </tr>
                                    </tbody>
                                </div>

                        ))}
                                                       
                        </Modal>

                        <button className='fornecedorBtn' onClick={abrirFornecedor} >Fornecedor</button>
                        <Modal  isOpen={fornecdorIsOpen} onRequestClose={closeFornecedor} contentLabel="Fornecedor" shouldCloseOnOverlayClick={true} overlayClassName="Fornecedor-overlay" className="fornecedor"> 
                        <input type="search" name="search-gru" id="search-gru" className="search" placeholder="Buscar por Fornecedor" onChange={(e) => setQuery8(e.target.value)}/>
                        <thead>
                                <tr>
                                    <th className='filter-all'>Ranking</th>

                                    <th className='filter-all'>Id. Fornecedor</th>

                                    <th className='filter-name'>Fornecedor</th>

                                    <th className='filter-all'>Qtd. Total</th>

                                    <th className='filter-all'>Sub Total</th>

                                    <th className='filter-all'>% Desconto</th>

                                    <th className='filter-all'>Vlr. Desconto Total</th>

                                    <th className='filter-all'>Vlr. Venda Total</th>

                                    <th className='filter-all'>Vlr. Custo Total</th>

                                    <th className='filter-all'>Vlr. Lucro Total</th>

                                    <th className='filter-all'>% Markup</th>

                                    <th className='filter-all'>% Margem</th>

                                    <th className='filter-all'>Percentual</th>

                                </tr>
                            </thead>
                        {dados.filter(dat => dat.filial.toLowerCase().includes(query8)).map((dat) => (
                                <div>
                                    <tbody>
                                        <tr>
                                            <td className='filter-all' > 1 </td>

                                            <td className='filter-all' > 679 </td>
                                            
                                            <td className='filter-name' > CERAMICA ELIZABETH RN LTDA </td>

                                            <td className='filter-all' > 1848 </td>

                                            <td className='filter-all' > 118284.94 </td>

                                            <td className='filter-all' > 1,66 </td>

                                            <td className='filter-all' > 1958,42 </td>

                                            <td className='filter-all' > 116492.72 </td>

                                            <td className='filter-all' > 94713.12 </td>

                                            <td className='filter-all' > 21779.60 </td>

                                            <td className='filter-all' > 23 </td>
 
                                            <td className='filter-all' > 18,70 </td>

                                            <td className='filter-all' > 14.20 </td>
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