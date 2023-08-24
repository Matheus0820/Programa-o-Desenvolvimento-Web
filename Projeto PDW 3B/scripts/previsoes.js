function LoadPrevisao() {
    var xmlhp = new XMLHttpRequest();
    xmlhp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var parser = new DOMParser();
        var xmlD = parser.parseFromString(this.responseText, "text/html");

        let x = xmlD.getElementsByTagName("cidade")
        let nome_cidade = x[0].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
        let nome_estado = x[0].getElementsByTagName("uf")[0].childNodes[0].nodeValue;
        document.getElementById("nome_cidade").innerHTML = nome_cidade + " - " + nome_estado;

        var htmlrequest = document.querySelector('.carousel-inner'),
        temphtml = htmlrequest.innerHTML;
        var novohtml = '';

        let y = x[0].getElementsByTagName("previsao");

        for(let j = 0; j < y.length; j++) {
            //Coletando dados do XML
            let data = y[j].getElementsByTagName("dia")[0].childNodes[0].nodeValue;
            let condicao_tempo = Rtempo(y[j].getElementsByTagName("tempo")[0].childNodes[0].nodeValue);
            console.log(y[j].getElementsByTagName("tempo")[0].childNodes[0].nodeValue);
            let temp_max = y[j].getElementsByTagName("maxima")[0].childNodes[0].nodeValue;
            let temp_min = y[j].getElementsByTagName("minima")[0].childNodes[0].nodeValue;
            let iuv = y[j].getElementsByTagName("iuv")[0].childNodes[0].nodeValue;
             
            let classdivBost;
            if(j == 0) classdivBost = "active";
            else classdivBost = "";

            novohtml += '<div class="carousel-item ' + classdivBost + '">'
            novohtml += '<img src="https://s1.static.brasilescola.uol.com.br/be/2022/11/vista-de-um-por-do-sol-sobre-as-nuvens-com-o-ceu-apresentando-varias-cores.jpg" class="d-block w-100" alt="..." style="border-bottom-right-radius: 5px; border-bottom-left-radius: 5px;">';
            novohtml += '<div class="carousel-caption d-none d-md-block" style="color: black; background-color: rgba(255, 255, 255, 0.5); border-radius: 10px;">';
            novohtml += '  <h4 style="margin: 3px; font-size: medium;">Previsão do Tempo</h4>';
            novohtml += '  <p style="margin: 3px; font-size: small;">' + data + '</p>';
            novohtml += '  <p style="margin: 3px; font-size: small;">' + condicao_tempo + '</p>';
            novohtml += '  <p style="margin: 3px; font-size: small;">Temperatura minima: ' + temp_min +'°C</p>';
            novohtml += '  <p style="margin: 3px; font-size: small;">Temperatura maxima: ' + temp_max + '°C</p>';
            novohtml += '  <p style="margin: 3px; font-size: small;">Indice de Ultravioleta: ' + iuv + '</p>';
            novohtml += '</div>'
            novohtml += '</div>'
            
        }

        novohtml += '</div>'
        novohtml += '</div>'
        temphtml = temphtml + novohtml;
        htmlrequest.innerHTML = temphtml;
    }
   };
    const url_id = new URLSearchParams(window.location.search);
    const id_get = url_id.get("id");
    console.log(id_get);
    const url_api = 'http://servicos.cptec.inpe.br/XML/cidade/' + id_get + '/previsao.xml';
    xmlhp.open("GET", url_api, true);
    xmlhp.send();
}

function Rtempo(cod) {
    let ListaCods = [
        ["ec","Encoberto com Chuvas Isoladas"], 
        ["ci","Chuvas Isoladas"], 
        ["c","Chuva Instável"],
        ["pp","Poss. de Pancadas de Chuva"],
        ["cm","Chuva pela Manhã"],
        ["cn","Chuva a Noite"],
        ["pt","Pancadas de Chuva a Tarde"],
        ["pm","Pancadas de Chuva pela Manhã"],
        ["np","Nublado e Pancadas de Chuva"],
        ["pc","Pancadas de Chuva"],
        ["pn","Parcialmente Nublado"],
        ["cv","Chuvisco"],
        ["ch","Chuvoso"],
        ["t","Tempestade"],
        ["ps","Predomínio de Sol"],
        ["e","Encoberto"],
        ["n","Nublado"], ["clCéu Claro"],
        ["nv","Nevoeiro"],
        ["g","Geada"],
        ["ne","Neve"],
        ["nd","Não Definido"],
        ["pnt","Pancadas de Chuva a Noite"],
        ["psc","Possibilidade de Chuva"],
        ["pcm","Possibilidade de Chuva pela Manhã"], 
        ["pct","Possibilidade de Chuva a Tarde"],
        ["pcn","Possibilidade de Chuva a Noite"], 
        ["npt","Nublado com Pancadas a Tarde"], 
        ["npn","Nublado com Pancadas a Noite"], 
        ["ncn","Nublado com Poss. de Chuva a Noite"], 
        ["nct","Nublado com Poss. de Chuva a Tarde"], 
        ["ncm","Nubl. c/ Poss. de Chuva pela Manhã"], 
        ["npm","Nublado com Pancadas pela Manhã"], 
        ["npp","Nublado com Possibilidade de Chuva"], 
        ["vn","Variação de Nebulosidade"], 
        ["ct","Chuva a Tarde"], 
        ["ppn","Poss. de Panc. de Chuva a Noite"], 
        ["ppt","Poss. de Panc. de Chuva a Tarde"], 
        ["ppm","Poss. de Panc. de Chuva pela Manhã"]];
    
    for(let i = 0; i < ListaCods.length; i++) {
        if (cod == ListaCods[i][0]) {
            return ListaCods[i][1];
            break;
        }
    }
}

window.onload = LoadPrevisao;