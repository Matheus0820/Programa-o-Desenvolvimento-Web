function LoadSituacaoAero() {
    var xmlhp = new XMLHttpRequest();
    xmlhp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var parser = new DOMParser();
        var xmlD = parser.parseFromString(this.responseText, "text/html");

        let y = xmlD.getElementsByTagName("metar");
        
        var htmlrequest = document.querySelector('.aeroportosituacao'),
        temphtml = htmlrequest.innerHTML;
        var novohtml = '';

        //Coletando dados do XML
        let ultimaatualizacao = y[0].getElementsByTagName("atualizacao")[0].childNodes[0].nodeValue;
        let condicao_tempo = y[0].getElementsByTagName("tempo_desc")[0].childNodes[0].nodeValue;
        let temp = y[0].getElementsByTagName("temperatura")[0].childNodes[0].nodeValue; //Em graus Celsius (°C)
        let umidade = y[0].getElementsByTagName("umidade")[0].childNodes[0].nodeValue; //Em porcetagem (%)
        let vento_dir = y[0].getElementsByTagName("vento_dir")[0].childNodes[0].nodeValue; //Direção do Vento em Graus (°)
        let vento_int = y[0].getElementsByTagName("vento_int")[0].childNodes[0].nodeValue; //Intencidade do vento em km/h
        let visibilidade = y[0].getElementsByTagName("visibilidade")[0].childNodes[0].nodeValue; //Visibilidade em metros (m)
        //Falta: vento_int (intencidade me km/h); visibilidade (em metros) 
        console.log(ultimaatualizacao);
            /* <div class="card text-center">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                <div class="card-footer text-muted">
                    2 days ago
                </div>
                </div> */

        novohtml = '<div class="card text-center border-dark mb-3" style="margin: 20px;">';
        novohtml += '<div class="card-header text-white bg-dark mb-3">';
        novohtml += '<h4 style="font-size: medium;">' + aero_get + ' - ' + uf_get + '</h4>';    
        novohtml += '</div>';
        novohtml += '<div class="card-body text-center" style="background-image: url(https://images4.alphacoders.com/111/1115644.jpg);">';
        novohtml += '<div style="color: black; background-color: rgba(255, 255, 255, 0.5); border-radius: 10px; max-width: 100%; min-width: 100%;">';
        novohtml += '<ul class="list-group list-group-flush">';
        novohtml += '<li class="list-group-item bg-transparent"> Condições do Tempo: ' + condicao_tempo + '</li>';
        novohtml += '<li class="list-group-item bg-transparent"> Temperatura: ' + temp + '°C</li>';
        novohtml += '<li class="list-group-item bg-transparent"> Umidade: ' + umidade + '%</li>';
        novohtml += '<li class="list-group-item bg-transparent"> Direção do Vento: ' + vento_dir + '°</li>';
        novohtml += '<li class="list-group-item bg-transparent"> Intencidade do Vento: ' + vento_int + 'km/h</li>';
        novohtml += '<li class="list-group-item bg-transparent"> Visibilidade: ' + visibilidade + 'm</li>';
        novohtml += '</ul>';
        novohtml += '</div>';
        novohtml += '</div>';
        novohtml += '<div class="card-footer text-muted">';
        novohtml += '<p class="card-text" style="font-size: small; margin: 0px;"> Última Atualização </p>';
        novohtml += '<p class="card-text" style="font-size: small; margin: 0px;">' + ultimaatualizacao + '</p>';
        novohtml += '</div>';
        novohtml += '</div>';
        
        temphtml = temphtml + novohtml;
        htmlrequest.innerHTML = temphtml;
    }
   };
    const url_get = new URLSearchParams(window.location.search);
    const sigla_get = url_get.get("sigla");
    const uf_get = url_get.get("uf");
    const aero_get = url_get.get("aeroporto");
    console.log(sigla_get);
    console.log(uf_get);
    console.log(aero_get);
    const url_api = 'http://servicos.cptec.inpe.br/XML/estacao/' + sigla_get + '/condicoesAtuais.xml';
    xmlhp.open("GET", url_api, true);
    xmlhp.send();
}