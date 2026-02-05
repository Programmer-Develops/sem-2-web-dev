// fill in javascript code here

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const docID = document.getElementById('docID').value.trim();
    const dept = document.getElementById('dept').value;
    const exp = document.getElementById('exp').value.trim();
    const email = document.getElementById('email').value.trim();
    const mbl = document.getElementById('mbl').value.trim();

    if (!name || !docID || !dept || !exp || !email || !mbl) {
        alert('Please fill in all fields');
        return;
    }

    if (isNaN(docID) || isNaN(exp) || isNaN(mbl)) {
        alert('Doctor ID, Experience and Mobile should be numbers');
        return;
    }

    const experience = Number(exp);

    let role = '';
    if (experience > 5) {
        role = 'Senior';
    } else if (experience >= 2 && experience <= 5) {
        role = 'Junior';
    } else if (experience >= 0 && experience <= 1) {
        role = 'Trainee';
    } else {
        alert('Experience cannot be negative');
        return;
    }

    const tbody = document.querySelector('tbody');
    const row = document.createElement('tr');

    const cells = [
        name,
        docID,
        dept,
        experience,
        email,
        mbl,
        role,
        '' 
    ];

    cells.forEach((text, index) => {
        const td = document.createElement('td');
        
        if (index === 7) { 
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.style.cursor = 'pointer';
            deleteBtn.style.padding = '4px 8px';
            deleteBtn.style.backgroundColor = '#ff4444';
            deleteBtn.style.color = 'white';
            deleteBtn.style.border = 'none';
            deleteBtn.style.borderRadius = '4px';
            
            deleteBtn.addEventListener('click', function() {
                row.remove();
            });
            
            td.append(deleteBtn);
        } else {
            td.textContent = text;
        }
        
        row.append(td);
    });

    tbody.append(row);

    document.querySelector('form').reset();
    document.getElementById('dept').value = ''; 
});