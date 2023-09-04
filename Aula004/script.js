function StoreValue() {
    const inputValue = document.getElementById('input').value;
    localStorage.setItem('meuvalor', inputValue);
    alert('Valor armazenado com sucesso!');

    const storedValueElement = document.getElementById('storedValue');
    const storedValue = localStorage.getItem('meuvalor');

    if (storedValue) {
        storedValueElement.textContent = storedValue;
    
    
    } else {
        storedValueElement.textContent = 'Nenhum valor armazenado.';
    }


}

function limpar() {

    const storedValueElement = document.getElementById('storedValue');
    const storedValue = localStorage.getItem('meuValor');

    localStorage.removeItem('meuValor');
    alert('Valor removido do localStorage.');

    storedValueElement.textContent = 'Nenhum valor armazenado.';

    input.value = ''
}