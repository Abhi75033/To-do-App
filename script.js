const item_list = document.getElementById('item-list')
const form = document.querySelector('#item-form')
const itemIinput = document.querySelector('#item-input')
const clear = document.getElementById('clear')
const item = item_list.querySelectorAll('li')
const filter = document.getElementById('filter')
console.log(item);
function addItem(e){
    e.preventDefault()
    const newItem = itemIinput.value;
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(newItem))
    const button = createButton('remove-item btn-link text-red')  
   li.appendChild(button)
   item_list.appendChild(li)
  itemIinput.value=''
   checkUI()
}

function createButton(classes){
    const btn = document.createElement('button')
    btn.className=classes;
    
    const icon = createIcon('fa-solid fa-xmark')
    btn.append(icon)
  return btn
}

function createIcon(classes){
    const i = document.createElement('i')
    i.className=classes
    return i;
}

function removeitem(e){
if(e.target.parentElement.classList.contains('remove-item'));
if(confirm('Did you want to delete..?')){
  e.target.parentElement.parentElement.remove();
}

checkUI()
}

function checkUI(){
  const item = item_list.querySelectorAll('li')
  if(item.length===0){
clear.style.display='none'
filter.style.display='none'
  }else{
    clear.style.display='block'
    filter.style.display='block' 
  }
}

function removeallItems(){
  if(confirm('Did you want to delete..?')){
while(item_list.firstChild){
  item_list.removeChild(item_list.firstChild)
  checkUI()
}}
}

function filteritem(e){
  const item = item_list.querySelectorAll('li')
  const text = e.target.value.toLowerCase()
 item.forEach((item)=>{
  const newItem = item.firstChild.textContent.toLowerCase().trim()
if(newItem.indexOf(text) != -1){
 item.style.display='flex'
}else{
  item.style.display='none'
}
 })

}

form.addEventListener('submit',addItem)
item_list.addEventListener('click', removeitem)
clear.addEventListener('click', removeallItems)
filter.addEventListener('input',filteritem)
checkUI()

