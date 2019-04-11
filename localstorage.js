var name = sessionStorage.getItem('freight');

if(!name) {
  console.log('existe a parada');
} else {

  var freight = {
    id: '1',
    content: 'tereza'
  };
  var content = JSON.stringify(freight);

  sessionStorage.setItem('freight', content);
}
// remove somente o item desejado
sessionStorage.removeItem('freight');
// remove todos os items
sessionStorage.clear();
// percorre todos os items
sessionStorage.key(i);