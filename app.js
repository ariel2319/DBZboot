let btnClear = document.querySelector('#btnClear');
let price = 150;


/* categoryDiscount.addEventListener('change', (e) => {
  const result = document.querySelector('#spanDiscount')
  result.textContent = `${e.target.value}`
})

subsCount.addEventListener('change', (e) => {
  const countRes = document.querySelector('#spanDiscount');
  countRes.textContent = `${e.target.value}`
}) */

/* categoryDiscount.addEventListener('change', calculateTotal) */
/* subsCount.addEventListener('change', calculateTotal)
 */

/* btnClear.addEventListener('onClick', () => {
  clearForm();
}) */

function clearForm() {
  document.querySelector('#formSubs').reset();
  const result = document.querySelector('#spanDiscount');
  result.textContent = 0;
  const pay = document.querySelector('#spanTotal');
  pay.textContent = 0;
  //console.log('butttonsito')
}

function calculateTotal() {
  const count = document.querySelector('#iCount').value;
  const cat = document.querySelector('#iCategory').value;
  const result = document.querySelector('#spanDiscount');
  const discountTotal = price * count * (cat / 100);
  /* console.log(discountTotal) */
  result.textContent = `${discountTotal}`;

  const pay = document.querySelector('#spanTotal');
  pay.textContent = price * count - discountTotal;
}