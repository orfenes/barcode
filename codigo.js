var button = document.querySelector('#submit');

// 00190000090292688202400003235173178830000042000
// NB - linha fina escura
// NW - linha fina branca
// WW - linha grossa branca
// WB - linha grossa escura
var imagemBradesco = {
  ['00'] () {
    return ['WW'];
  },
  ['01'] () {
    return ['NW', 'NB'];
  },
  ['10'] () {
    return [ 'NB', 'NW' ];
  },
  ['11'] () {
    return ['WB'];
  },
};


// constroi cada numero par do codigo de barra
var monteNomeDaImageItem = function(codigoItem) {  
  var arrayCodigoItem = codigoItem.match(/.{1,2}/g);
  var arrayImageItem = [];

  for(var i = 0; i < arrayCodigoItem.length; i++) {
    var imagem = arrayCodigoItem[i];
    var result = imagemBradesco[imagem]();
    arrayImageItem.push(result);    
  }

  return arrayImageItem;
}


// http://barcode.dltechnology.co.uk/barcode_patterns/ITFCodes.htm
var padraoIntervalte = {
  ['00']() {    
    var codigoItem = monteNomeDaImageItem('10101100110010');    
    return codigoItem;
  },  
  ['01']() {    
    var codigoItem = monteNomeDaImageItem('10010110110100');    
    return codigoItem;
  },
  ['02']() {    
    var codigoItem = monteNomeDaImageItem('10100110110100');    
    return codigoItem;
  },
  ['03']() {    
    var codigoItem = monteNomeDaImageItem('10010011011010');    
    return codigoItem;
  },
  ['04']() {    
    var codigoItem = monteNomeDaImageItem('10101100110100');    
    return codigoItem;
  },
  ['05']() {    
    var codigoItem = monteNomeDaImageItem('10010110011010');    
    return codigoItem;
  },
  ['06']() {    
    var codigoItem = monteNomeDaImageItem('10100110011010');    
    return codigoItem;
  },
  ['07']() {    
    var codigoItem = monteNomeDaImageItem('10101101100100');    
    return codigoItem;
  },
  ['08']() {    
    var codigoItem = monteNomeDaImageItem('10010110110010');    
    return codigoItem;
  },
  ['09']() {    
    var codigoItem = monteNomeDaImageItem('10100110110010');    
    return codigoItem;
  },
  ['10']() {    
    var codigoItem = monteNomeDaImageItem('11010100100110');    
    return codigoItem;
  },
  ['11']() {    
    var codigoItem = monteNomeDaImageItem('11001010101100');    
    return codigoItem;
  },
  ['12']() {    
    var codigoItem = monteNomeDaImageItem('11010010101100');    
    return codigoItem;
  },
  ['13']() {    
    var codigoItem = monteNomeDaImageItem('11001001010110');    
    return codigoItem;
  },
  ['14']() {    
    var codigoItem = monteNomeDaImageItem('11010100101100');    
    return codigoItem;
  },
  ['15']() {    
    var codigoItem = monteNomeDaImageItem('11001010010110');    
    return codigoItem;
  },
  ['16']() {    
    var codigoItem = monteNomeDaImageItem('11010010010110');    
    return codigoItem;
  },
  ['17']() {    
    var codigoItem = monteNomeDaImageItem('11010101001100');    
    return codigoItem;
  },
  ['18']() {    
    var codigoItem = monteNomeDaImageItem('11001010100110');    
    return codigoItem;
  },
  ['19']() {    
    var codigoItem = monteNomeDaImageItem('11010010100110');    
    return codigoItem;
  },
  ['20']() {    
    var codigoItem = monteNomeDaImageItem('10110100100110');    
    return codigoItem;
  },
  ['21']() {    
    var codigoItem = monteNomeDaImageItem('10011010101100');    
    return codigoItem;
  },
  ['22']() {    
    var codigoItem = monteNomeDaImageItem('10110010101100	');    
    return codigoItem;
  },
  ['23']() {    
    var codigoItem = monteNomeDaImageItem('10011001010110');    
    return codigoItem;
  },
  ['04']() {    
    var codigoItem = monteNomeDaImageItem('10101100110100');    
    return codigoItem;
  },
  ['24']() {    
    var codigoItem = monteNomeDaImageItem('10110100101100');    
    return codigoItem;
  },
  ['25']() {    
    var codigoItem = monteNomeDaImageItem('10011010010110');    
    return codigoItem;
  },
  ['26']() {    
    var codigoItem = monteNomeDaImageItem('10110010010110');    
    return codigoItem;
  },  
  ['27']() {    
    var codigoItem = monteNomeDaImageItem('10110101001100');    
    return codigoItem;
  },
  ['28']() {    
    var codigoItem = monteNomeDaImageItem('10011010100110');    
    return codigoItem;
  },
  ['29']() {    
    var codigoItem = monteNomeDaImageItem('10110010100110');    
    return codigoItem;
  },
  ['30']() {    
    var codigoItem = monteNomeDaImageItem('11011010010010');    
    return codigoItem;
  },
  ['31']() {    
    var codigoItem = monteNomeDaImageItem('11001101010100');    
    return codigoItem;
  },
  ['32']() {    
    var codigoItem = monteNomeDaImageItem('11011001010100');    
    return codigoItem;
  },
  ['33']() {    
    var codigoItem = monteNomeDaImageItem('11001100101010');    
    return codigoItem;
  },
  ['34']() {    
    var codigoItem = monteNomeDaImageItem('11011010010100');    
    return codigoItem;
  },
  ['35']() {    
    var codigoItem = monteNomeDaImageItem('11001101001010');    
    return codigoItem;
  },
  ['36']() {    
    var codigoItem = monteNomeDaImageItem('11011001001010');    
    return codigoItem;
  },
  ['37']() {    
    var codigoItem = monteNomeDaImageItem('11011010100100');    
    return codigoItem;
  },
  ['38']() {    
    var codigoItem = monteNomeDaImageItem('11001101010010');    
    return codigoItem;
  },
  ['39']() {    
    var codigoItem = monteNomeDaImageItem('11011001010010');    
    return codigoItem;
  },
  ['40']() {    
    var codigoItem = monteNomeDaImageItem('10101100100110');    
    return codigoItem;
  },
  ['41']() {    
    var codigoItem = monteNomeDaImageItem('10010110101100');    
    return codigoItem;
  },
  ['42']() {    
    var codigoItem = monteNomeDaImageItem('10100110101100');    
    return codigoItem;
  },
  ['43']() {    
    var codigoItem = monteNomeDaImageItem('10010011010110');    
    return codigoItem;
  },
  ['44']() {    
    var codigoItem = monteNomeDaImageItem('10101100101100');    
    return codigoItem;
  },
  ['45']() {    
    var codigoItem = monteNomeDaImageItem('10010110010110');    
    return codigoItem;
  },
  ['46']() {    
    var codigoItem = monteNomeDaImageItem('10100110010110');    
    return codigoItem;
  },
  ['47']() {    
    var codigoItem = monteNomeDaImageItem('10101101001100');    
    return codigoItem;
  },
  ['48']() {    
    var codigoItem = monteNomeDaImageItem('10010110100110');    
    return codigoItem;
  },  
  ['49']() {    
    var codigoItem = monteNomeDaImageItem('10100110100110');    
    return codigoItem;
  },
  ['50']() {    
    var codigoItem = monteNomeDaImageItem('11010110010010');    
    return codigoItem;
  },
  ['51']() {    
    var codigoItem = monteNomeDaImageItem('11001011010100');    
    return codigoItem;
  },
  ['52']() {    
    var codigoItem = monteNomeDaImageItem('11010011010100');    
    return codigoItem;
  },
  ['53']() {    
    var codigoItem = monteNomeDaImageItem('11001001101010');    
    return codigoItem;
  },
  ['54']() {    
    var codigoItem = monteNomeDaImageItem('11010110010100');    
    return codigoItem;
  },
  ['55']() {    
    var codigoItem = monteNomeDaImageItem('11001011001010');    
    return codigoItem;
  },
  ['56']() {    
    var codigoItem = monteNomeDaImageItem('11010011001010');    
    return codigoItem;
  },
  ['57']() {    
    var codigoItem = monteNomeDaImageItem('11010110100100');    
    return codigoItem;
  },
  ['58']() {    
    var codigoItem = monteNomeDaImageItem('11001011010010');    
    return codigoItem;
  },
  ['59']() {    
    var codigoItem = monteNomeDaImageItem('11010011010010');    
    return codigoItem;
  },
  ['60']() {    
    var codigoItem = monteNomeDaImageItem('10110110010010');    
    return codigoItem;
  },
  ['61']() {    
    var codigoItem = monteNomeDaImageItem('10011011010100');    
    return codigoItem;
  },
  ['62']() {    
    var codigoItem = monteNomeDaImageItem('10110011010100');    
    return codigoItem;
  },
  ['63']() {    
    var codigoItem = monteNomeDaImageItem('10011001101010');    
    return codigoItem;
  },
  ['64']() {    
    var codigoItem = monteNomeDaImageItem('10110110010100');    
    return codigoItem;
  },
  ['65']() {    
    var codigoItem = monteNomeDaImageItem('10011011001010');    
    return codigoItem;
  },
  ['66']() {    
    var codigoItem = monteNomeDaImageItem('10110011001010');    
    return codigoItem;
  },
  ['67']() {    
    var codigoItem = monteNomeDaImageItem('10110110100100');    
    return codigoItem;
  },
  ['68']() {    
    var codigoItem = monteNomeDaImageItem('10011011010010');    
    return codigoItem;
  },
  ['69']() {    
    var codigoItem = monteNomeDaImageItem('10110011010010');    
    return codigoItem;
  },
  ['70']() {    
    var codigoItem = monteNomeDaImageItem('10101001100110');    
    return codigoItem;
  },
  ['71']() {    
    var codigoItem = monteNomeDaImageItem('10010101101100');    
    return codigoItem;
  },
  ['72']() {    
    var codigoItem = monteNomeDaImageItem('10100101101100');    
    return codigoItem;
  },
  ['73']() {    
    var codigoItem = monteNomeDaImageItem('10010010110110');    
    return codigoItem;
  },
  ['74']() {    
    var codigoItem = monteNomeDaImageItem('10101001101100');    
    return codigoItem;
  },
  ['75']() {    
    var codigoItem = monteNomeDaImageItem('10010100110110');    
    return codigoItem;
  },
  ['76']() {    
    var codigoItem = monteNomeDaImageItem('10100100110110');    
    return codigoItem;
  },
  ['77']() {    
    var codigoItem = monteNomeDaImageItem('10101011001100');    
    return codigoItem;
  },
  ['78']() {    
    var codigoItem = monteNomeDaImageItem('10010101100110');    
    return codigoItem;
  },
  ['64']() {    
    var codigoItem = monteNomeDaImageItem('10110110010100');    
    return codigoItem;
  },
  ['79']() {    
    var codigoItem = monteNomeDaImageItem('10100101100110');    
    return codigoItem;
  },
  ['80']() {    
    var codigoItem = monteNomeDaImageItem('11010100110010');    
    return codigoItem;
  },
  ['81']() {    
    var codigoItem = monteNomeDaImageItem('11001010110100');    
    return codigoItem;
  },
  ['82']() {    
    var codigoItem = monteNomeDaImageItem('11010010110100');    
    return codigoItem;
  },
  ['83']() {    
    var codigoItem = monteNomeDaImageItem('11001001011010');    
    return codigoItem;
  },
  ['84']() {    
    var codigoItem = monteNomeDaImageItem('11010100110100');    
    return codigoItem;
  },
  ['85']() {    
    var codigoItem = monteNomeDaImageItem('11001010011010');    
    return codigoItem;
  },
  ['86']() {    
    var codigoItem = monteNomeDaImageItem('11010010011010');    
    return codigoItem;
  },
  ['87']() {    
    var codigoItem = monteNomeDaImageItem('11010101100100');    
    return codigoItem;
  },
  ['88']() {    
    var codigoItem = monteNomeDaImageItem('11001010110010');    
    return codigoItem;
  },
  ['90']() {    
    var codigoItem = monteNomeDaImageItem('10110100110010');    
    return codigoItem;
  },
  ['91']() {    
    var codigoItem = monteNomeDaImageItem('10011010110100');    
    return codigoItem;
  },
  ['92']() {    
    var codigoItem = monteNomeDaImageItem('10110010110100');    
    return codigoItem;
  },
  ['93']() {    
    var codigoItem = monteNomeDaImageItem('10011001011010');    
    return codigoItem;
  },
  ['94']() {    
    var codigoItem = monteNomeDaImageItem('10110100110100');    
    return codigoItem;
  },
  ['95']() {    
    var codigoItem = monteNomeDaImageItem('10011010011010');    
    return codigoItem;
  },
  ['96']() {    
    var codigoItem = monteNomeDaImageItem('10110010011010');    
    return codigoItem;
  },
  ['97']() {    
    var codigoItem = monteNomeDaImageItem('10110101100100');    
    return codigoItem;
  },
  ['98']() {    
    var codigoItem = monteNomeDaImageItem('10011010110010');    
    return codigoItem;
  },
  ['99']() {    
    var codigoItem = monteNomeDaImageItem('10110010110010');    
    return codigoItem;
  },
  ['100']() {    
    var codigoItem = monteNomeDaImageItem('00000000001010');    
    return codigoItem;
  },
  ['101']() {        
    var codigoItem = monteNomeDaImageItem('11010000000000');    
    return codigoItem;
  },
};




// codigo de barras completo
var constroiCodigoBarras = function(arrayCodigoBarras) {

  var tratamentArray = arrayCodigoBarras;
  var arrayCofigoBarras = [];
  var ultimoElemento = tratamentArray.length + 1;  
  var insertElement; 
  
  tratamentArray.unshift('100');
  insertElement = tratamentArray.splice(ultimoElemento, 0, "101");

  arrayCodigoBarras = tratamentArray;
  

  for(var i = 0; i < arrayCodigoBarras.length; i++ ) {        
    var item = arrayCodigoBarras[i];
    console.log('item ->', item);
    var codigoBarra = padraoIntervalte[item]();
    arrayCofigoBarras.push(codigoBarra);    
  }
  constroiHTML(arrayCofigoBarras);
};



var constroiHTML = function(arrayCodigoBarras) {
  var string = '';

  for(var x = 0; x < arrayCodigoBarras.length; x++) {
    var itemNumeroCodigo = arrayCodigoBarras[x];

    for(var y = 0; y < itemNumeroCodigo.length; y++ ) {
      if(itemNumeroCodigo[y].length > 1) {
        string += '<img src="https://meiosdepagamentobradesco.com.br/apiboleto/img/barcode/' + itemNumeroCodigo[y][0] + '.gif"></img>';
        string += '<img src="https://meiosdepagamentobradesco.com.br/apiboleto/img/barcode/' + itemNumeroCodigo[y][1] + '.gif"></img>';        
      } else {
        string += '<img src="https://meiosdepagamentobradesco.com.br/apiboleto/img/barcode/' + itemNumeroCodigo[y] + '.gif"></img>';        
      }
    }
  }

  var el = document.querySelector('#boleto');
  el.innerHTML = string;
};

button.addEventListener('click', function() {
  var number = document.querySelector('#codebar').value;

  // primeira regra descobrir se o numero é par ou impar
  var quantidadeCaracteres = number.length;
  var par = true;

  if(quantidadeCaracteres % 2 !== 0) {
    par = false;
  }

  // criando array com dois digitos cada
  var str = number;
  var arrayCodigo = [];
  if(par) {
    arrayCodigo = str.match(/.{1,2}/g);
  } else {
    var auxImpar = '0' + number;   
    arrayCodigo = auxImpar.match(/.{1,2}/g);
  } 

  constroiCodigoBarras(arrayCodigo);
});