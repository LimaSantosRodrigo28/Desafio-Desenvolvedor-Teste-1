let valueList = document.getElementById('valueList');
let text = '<span> Linguagens Selecionadas : </span>';
let listArray = [];
let count = 0;
let modalQt = 0;
let btn = document.querySelector("#send");
let checkboxes = document.querySelectorAll('.checkbox');
let countbtn = document.querySelectorAll('.ckeckbox');


for (let checkbox of checkboxes) {

    checkbox.addEventListener('click', function () {
        if (this.checked == true) {
            listArray.push(this.value);
            valueList.innerHTML = text + listArray.join(` / `);
        } else {
            listArray = listArray.filter(e => e !== this.value);
            valueList.innerHTML = text + listArray.join(` / `);
        }
    })
}

document.querySelector('.qtmais').addEventListener('click', () => { // evento click botão mais.
    modalQt++;
    document.querySelector('.qt').innerHTML = modalQt;
});

document.querySelector('.qtmenos').addEventListener('click', () => { // click botão menos.
    if (modalQt > 0) {
        modalQt--;
        document.querySelector('.qt').innerHTML = modalQt;
        listArray = listArray.filter(e => e !== this.value);
        valueList.innerHTML = text + listArray.join(` / `)
    }
});

document.querySelector('.send').addEventListener('click', () => { // evento click enviar // limpaform
    alert ("Cadastro Finalizado Com sucesso")
})