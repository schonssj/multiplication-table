function calculate() {
    let multiTable = document.querySelector('#multiplication-table tbody')
    multiTable.innerHTML = '';
    
    let x = parseInt(document.querySelector('#x').value)
    
    for(let y = 0; y <= 10; y++) {
        let result = x * y

        let template = 
        `
            <td>${x}</td>
            <td>x</td>
            <td>${y}</td>
            <td>=</td>
            <td>${result}</td>
        `
        let tr = document.createElement('tr')
        tr.innerHTML = template
        
        multiTable.append(tr)
    }
}
document.querySelector('#x').addEventListener('change', calculate)