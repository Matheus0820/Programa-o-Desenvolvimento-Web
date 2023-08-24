var url_listcidade = 'http://servicos.cptec.inpe.br/XML/listaCidades?city=';

function queryCidade(request) {
   var xmlhp = new XMLHttpRequest();
   xmlhp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var parser = new DOMParser();
        var xmlD = parser.parseFromString(this.responseText, "text/html");

        var htmlrequest = document.querySelector('.tebelacidades');
        htmlrequest.innerHTML = '';

        var novohtml = '';
        let x = xmlD.getElementsByTagName("cidade")
        for(let i = 0; i < x.length; i++) {
            let nome_cidade = x[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue;
            let nome_estado = x[i].getElementsByTagName("uf")[0].childNodes[0].nodeValue;
            let id = x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;

            novohtml += '<div class="card text-center" style="min-width: 200px; min-height: 150px; display: inline-block; margin: 10px;">';
            novohtml += '<div class="card-body">' 
            novohtml += '<h5 class="card-title" style="font-size: medium;">' + nome_cidade + '</h5>';
            novohtml += '<p class="card-text">' + nome_estado + '</p>';
            novohtml += '<form action="../templates/previsaocidade.html" method="get">'
            novohtml += '<input type="hidden" name="id" value="' + id + '">'
            novohtml += '<input type="submit" class="btn btn-primary btn-sm" value="Ver previsão">'
            novohtml += '</form>'
            novohtml += '</div>'
            novohtml += '</div>'
        }
        htmlrequest.innerHTML = novohtml;
    }
   };
   if (request == null) {
    xmlhp.open("GET", url_listcidade, true);
    xmlhp.send();
   }
   else {
    xmlhp.open("GET", url_listcidade + request, true);
    xmlhp.send();
   }

}

function buscarCidade() {
    var search_cidade = document.querySelector("#search_cidade");
    queryCidade(search_cidade.value);
}