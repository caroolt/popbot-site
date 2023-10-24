import { investors } from './mockup/investors.js'

const tbody = document.getElementById('investors');
investors.forEach((user) => {

  const tr = document.createElement('tr');
  tr.classList.add('user', 'table-dark');

  const nomeTd = document.createElement('td');
  nomeTd.classList.add('nome');
  nomeTd.textContent = user.name;

  const emailTd = document.createElement('td');
  emailTd.classList.add('email');
  emailTd.textContent = user.email;

  const investedTd = document.createElement('td');
  investedTd.classList.add('invested');
  investedTd.textContent = `R$ ${user.valueInvested},00` 
  
  const earningsTd = document.createElement('td');
  earningsTd.classList.add('earnings');
  earningsTd.textContent = `R$ ${user.earnings},00`

  const percentageTd = document.createElement('td');
  percentageTd.classList.add('percentage');
  percentageTd.textContent = 0

  tr.appendChild(nomeTd);
  tr.appendChild(emailTd);
  tr.appendChild(investedTd);
  tr.appendChild(earningsTd);
  tr.appendChild(percentageTd);

  tbody.appendChild(tr);
});