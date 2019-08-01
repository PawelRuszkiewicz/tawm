// take button "save" and if click insert value to Local Storage.
const saveButtons = document.querySelector('.save--js');
const loadButtons = document.querySelector('.load--js');
const textIns = document.querySelector('.poleTextGr');
const clearB = document.querySelector('.clear--js');

saveButtons.addEventListener('click', (e) => {
  const textArea = document.querySelector('.poleTextGr').value;
  localStorage.setItem('textArea', textArea);
})

loadButtons.addEventListener('click', (e) => {
  if (localStorage.getItem('textArea')) 
  { textIns.value = localStorage.getItem('textArea'); }
})

clearB.addEventListener('click', () => {
  if (localStorage.getItem('textArea')) {
    localStorage.removeItem('textArea');
  }
})


