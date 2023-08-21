const search = () =>{
  const searchBox = document.getElementById('serach-item').value.toUpperCase();
  const storeItems = document.querySelector('.product-list')
  const product = document.querySelectorAll('.product')
  const pname = storeItems.getElementsByTagName('h2')

  for(let i=0; i<pname.length; i++){
    let match = product[i].getElementsByTagName('h2')[0]

    if(match){
     let textValue = match.textContent || match.innerHTML

     if(textValue.toUpperCase().indexOf(searchBox) > -1){
      product[i].style.display = '';
     }else{
      product[i].style.display = 'none';
     }
    }
  }
}