var url_p1 = 'http://servicos.cptec.inpe.br/XML/estacao/';
var url_p2 = '/condicoesAtuais.xml';

function aeroportos() {
    const aeroportos_json = '[{"uf": "AC","sigla": "SBTK","aeroporto": "Tarauacá"},{"uf": "AC","sigla": "SBRB","aeroporto": "Presidente Médici"},{"uf": "AC","sigla": "SBCZ","aeroporto": "Internacional"},{"uf": "AL","sigla": "SBMO","aeroporto": "Zumbi dos Palmares"},{"uf": "AM","sigla": "SBEG","aeroporto": "Eduardo Gomes"},{"uf": "AM","sigla": "SBMN","aeroporto": "Ponta Pelada"},{"uf": "AM","sigla": "SBMY","aeroporto": "Manicoré"},{"uf": "AM","sigla": "SBTT","aeroporto": "Tabatinga"},{"uf": "AM","sigla": "SBYA","aeroporto": "Iuaretê"},{"uf": "AM","sigla": "SBUA","aeroporto": "São Gabriel da Cachoeira"},{"uf": "AM","sigla": "SBTF","aeroporto": "Tefé"},{"uf": "AP","sigla": "SBAM","aeroporto": "Amapá"},{"uf": "AP","sigla": "SBMQ","aeroporto": "Internacional"},{"uf": "AP","sigla": "SBOI","aeroporto": "Oiapoque"},{"uf": "BA","sigla": "SBLP","aeroporto": "Bom Jesus da Lapa"},{"uf": "BA","sigla": "SBCV","aeroporto": "Caravelas"},{"uf": "BA","sigla": "SBIL","aeroporto": "Jorge Amado"},{"uf": "BA","sigla": "SBLE","aeroporto": "Chapada Diamantina"},{"uf": "BA","sigla": "SBUF","aeroporto": "Paulo Afonso"},{"uf": "BA","sigla": "SBPS","aeroporto": "Porto Seguro"},{"uf": "BA","sigla": "SBSV","aeroporto": "Dep. Luís Eduardo Magalhães"},{"uf": "BA","sigla": "SBQV","aeroporto": "Vitória da Conquista"},{"uf": "CE","sigla": "SBFZ","aeroporto": "Pinto Martins"},{"uf": "CE","sigla": "SBJU","aeroporto": "Cariri"},{"uf": "DF","sigla": "SBBR","aeroporto": "Juscelino Kubitschek"},{"uf": "ES","sigla": "SBVT","aeroporto": "Eurico Aguiar Salles"},{"uf": "GO","sigla": "SBAN","aeroporto": "Anápolis"},{"uf": "GO","sigla": "SBGO","aeroporto": "Santa Genoveva"},{"uf": "MA","sigla": "SBCI","aeroporto": "Carolina"},{"uf": "MA","sigla": "SBIZ","aeroporto": "Imperatriz"},{"uf": "MA","sigla": "SBSL","aeroporto": "Mar. Cunha Machado"},{"uf": "MG","sigla": "SBAX","aeroporto": "Araxá"},{"uf": "MG","sigla": "SBPR","aeroporto": "Carlos Prates"},{"uf": "MG","sigla": "SBBQ","aeroporto": "Barbacena"},{"uf": "MG","sigla": "SBBH","aeroporto": "Pampulha"},{"uf": "MG","sigla": "SBCF","aeroporto": "Tancredo Neves"},{"uf": "MG","sigla": "SBPC","aeroporto": "Poços de Caldas"},{"uf": "MG","sigla": "SBUR","aeroporto": "Uberaba"},{"uf": "MG","sigla": "SBUL","aeroporto": "Uberlândia"},{"uf": "MG","sigla": "SBIP","aeroporto": "Ipatinga"},{"uf": "MG","sigla": "SBJF","aeroporto": "Francisco de Assis"},{"uf": "MG","sigla": "SBMK","aeroporto": "Montes Claros"},{"uf": "MG","sigla": "SBVG","aeroporto": "Varginha"},{"uf": "MG","sigla": "SBGV","aeroporto": "Gov. Valadares"},{"uf": "MS","sigla": "SBCG","aeroporto": "Internacional"},{"uf": "MS","sigla": "SBCR","aeroporto": "Corumbá"},{"uf": "MS","sigla": "SBPP","aeroporto": "Internacional"},{"uf": "MT","sigla": "SBAT","aeroporto": "Alta Floresta"},{"uf": "MT","sigla": "SBBW","aeroporto": "Barra do Garças"},{"uf": "MT","sigla": "SBCY","aeroporto": "Marechal Rondon"},{"uf": "PA","sigla": "SBHT","aeroporto": "Altamira"},{"uf": "PA","sigla": "SBBE","aeroporto": "Val-de-Cans"},{"uf": "PA","sigla": "SBIH","aeroporto": "Itaituba"},{"uf": "PA","sigla": "SBEK","aeroporto": "Jacareacanga"},{"uf": "PA","sigla": "SBMA","aeroporto": "Marabá"},{"uf": "PA","sigla": "SBCC","aeroporto": "Cachimbó"},{"uf": "PA","sigla": "SBTB","aeroporto": "Trombetas"},{"uf": "PA","sigla": "SBCJ","aeroporto": "Carajás"},{"uf": "PA","sigla": "SBSN","aeroporto": "Santarém"},{"uf": "PA","sigla": "SBTU","aeroporto": "Tucuruí"},{"uf": "PA","sigla": "SBAA","aeroporto": "Conceição do Araguaia"},{"uf": "PB","sigla": "SBKG","aeroporto": "Pres. João Suassuna"},{"uf": "PB","sigla": "SBJP","aeroporto": "Pres. Castro Pinto"},{"uf": "PE","sigla": "SBFN","aeroporto": "Fernando de Noronha"},{"uf": "PE","sigla": "SBRF","aeroporto": "Guararapes"},{"uf": "PE","sigla": "SBPL","aeroporto": "Sen. Nilo Coelho"},{"uf": "PI","sigla": "SBPB","aeroporto": "Dr. João Silva Filho"},{"uf": "PI","sigla": "SBTE","aeroporto": "Sen. Petrônio Portella"},{"uf": "PR","sigla": "SBLO","aeroporto": "Londrina"},{"uf": "PR","sigla": "SBFI","aeroporto": "Cataratas"},{"uf": "PR","sigla": "SBBI","aeroporto": "Bacacheri"},{"uf": "PR","sigla": "SBCT","aeroporto": "Afonso Pena"},{"uf": "PR","sigla": "SBMG","aeroporto": "Silvio Name Junior"},{"uf": "RJ","sigla": "SBCB","aeroporto": "Cabo Frio"},{"uf": "RJ","sigla": "SBAF","aeroporto": "Afonsos"},{"uf": "RJ","sigla": "SBGL","aeroporto": "Galeão"},{"uf": "RJ","sigla": "SBJR","aeroporto": "Jacarepaguá"},{"uf": "RJ","sigla": "SBRJ","aeroporto": "Santos Dumont"},{"uf": "RJ","sigla": "SBSC","aeroporto": "Santa Cruz"},{"uf": "RJ","sigla": "SBME","aeroporto": "Macaé"},{"uf": "RJ","sigla": "SBES","aeroporto": "S. Pedro da Aldeia"},{"uf": "RJ","sigla": "SBCP","aeroporto": "Bartolomeu Lysandro"},{"uf": "RN","sigla": "SBMS","aeroporto": "Dix-Sept Rosado"},{"uf": "RN","sigla": "SBNT","aeroporto": "Augusto Severo"},{"uf": "RO","sigla": "SBGM","aeroporto": "Guajará Mirim"},{"uf": "RO","sigla": "SBVH","aeroporto": "Brigadeiro Camarão"},{"uf": "RO","sigla": "SBPV","aeroporto": "Gov. Jorge Teixeira de Oliveira"},{"uf": "RR","sigla": "SBBV","aeroporto": "Boa Vista"},{"uf": "RS","sigla": "SBBG","aeroporto": "Bagé"},{"uf": "RS","sigla": "SBSM","aeroporto": "Santa Maria"},{"uf": "RS","sigla": "SBPA","aeroporto": "Salgado Filho"},{"uf": "RS","sigla": "SBPK","aeroporto": "Pelotas"},{"uf": "RS","sigla": "SBCO","aeroporto": "Canoas"},{"uf": "RS","sigla": "SBUG","aeroporto": "Rubem Berta"},{"uf": "SC","sigla": "SBCH","aeroporto": "Chapecó"},{"uf": "SC","sigla": "SBCM","aeroporto": "Forquilinha"},{"uf": "SC","sigla": "SBFL","aeroporto": "Hercílio Luz"},{"uf": "SC","sigla": "SBJV","aeroporto": "Lauro Carneiro de Loyola"},{"uf": "SC","sigla": "SBNF","aeroporto": "Min. Victor Konder"},{"uf": "SE","sigla": "SBAR","aeroporto": "Santa Maria"},{"uf": "SP","sigla": "SBAU","aeroporto": "Araçatuba"},{"uf": "SP","sigla": "SBBU","aeroporto": "Bauru"},{"uf": "SP","sigla": "SBKP","aeroporto": "Viracopos"},{"uf": "SP","sigla": "SBDN","aeroporto": "Pres. Prudente"},{"uf": "SP","sigla": "SBRP","aeroporto": "Leite Lopes"},{"uf": "SP","sigla": "SBSR","aeroporto": "S. J. do Rio Preto"},{"uf": "SP","sigla": "SBYS","aeroporto": "Fontenelle"},{"uf": "SP","sigla": "SBST","aeroporto": "Base Aérea"},{"uf": "SP","sigla": "SBGP","aeroporto": "Gavião Peixoto"},{"uf": "SP","sigla": "SBGW","aeroporto": "Guaratinguetá"},{"uf": "SP","sigla": "SBGR","aeroporto": "Guarulhos"},{"uf": "SP","sigla": "SBSJ","aeroporto": "São J. dos Campos"},{"uf": "SP","sigla": "SBMT","aeroporto": "Campo de Marte"},{"uf": "SP","sigla": "SBSP","aeroporto": "Congonhas"},{"uf": "SP","sigla": "SBTA","aeroporto": "Taubaté"},{"uf": "TO","sigla": "SBPJ","aeroporto": "Palmas"},{"uf": "TO","sigla": "SBPN","aeroporto": "Porto Nacional"}]'
    const objcts = JSON.parse(aeroportos_json);

    let ufaux = null;
    for(let i = 0; i < objcts.length; i++) {
        if(ufaux == null) {
            ufaux = objcts[i].uf
            add_estado_div(ufaux);
        }
        else if (objcts[i].uf != ufaux) {
            ufaux = objcts[i].uf;
            add_estado_div(ufaux);
        } 

        add_aeroporto(ufaux, objcts[i].sigla, objcts[i].aeroporto);
    }    
}

function add_estado_div(uf) {
    let htmlrequest = document.querySelector('.tebelaAeroporto'),
    temphtml = htmlrequest.innerHTML;
    let novohtml;

    novohtml = '<div class="card text-center border-dark mb-3" style="margin: 20px;">';
    novohtml += '<div class="card-header text-white bg-dark mb-3" style="text-align: center;>';
    novohtml += '<h4 style="font-size: medium;">' + uf + '</h4>';    
    novohtml += '</div>';
    novohtml += '<div class="card-body">';
    novohtml += '<div class="tebelaauroporto_' + uf + ' text-center"></div>';
    novohtml += '</div>'
    novohtml += '</div>'
    htmlrequest.innerHTML = temphtml + novohtml;
}

function add_aeroporto(uf, sigla, aeroporto) {
    let htmlrequest = document.querySelector(".tebelaauroporto_" + uf),
    temphtml = htmlrequest.innerHTML;
    let novohtml;

    novohtml = '<div class="card text-center" style="min-width: 100px; min-height: 100px; display: inline-block; margin: 10px;">';
    novohtml += '<div class="card-body">' 
    novohtml += '<h5 class="card-title" style="font-size: small;">' + aeroporto + '</h5>';
    novohtml += '<p class="card-text" style="font-size: small;">' + sigla + '</p>';
    novohtml += '<form action="../templates/previsaoaeroporto.html" method="get">'
    novohtml += '<input type="hidden" name="sigla" value="' + sigla + '">';
    novohtml += '<input type="hidden" name="uf" value="' + uf + '">';
    novohtml += '<input type="hidden" name="aeroporto" value="' + aeroporto + '">'
    novohtml += '<input type="submit" class="btn btn-primary btn-sm" value="Ver Aeroporto" style="font-size: small;">'
    novohtml += '</form>'
    novohtml += '</div>'
    novohtml += '</div>'

    htmlrequest.innerHTML = temphtml + novohtml;
}