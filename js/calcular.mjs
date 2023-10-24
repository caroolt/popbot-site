import { investors } from './mockup/investors.js'

document.getElementById('calcular').addEventListener('click', () => {
  const rows = document.querySelectorAll('#investors tr');

  rows.forEach((row, index) => {
    const invested = investors[index].valueInvested;
    const earnings = investors[index].earnings;
    const percentageTd = row.querySelector('.percentage');
    percentageTd.textContent = `${((earnings / invested ) * 100).toFixed(2)}%`;
  });
});

