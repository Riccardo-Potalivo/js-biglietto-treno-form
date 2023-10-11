const btnSubmit = document.querySelector('#btn_submit');

const btnReset = document.querySelector('#btn_reset');

const priceKm = 0.21;
const discountUnder18 = 0.8;
const discountOver65 = 0.6;
let ticketPrice = document.getElementById('ticket_price');


btnSubmit.addEventListener('click',
function()
{
    const distance = document.getElementById('distance').value;

    const age = document.getElementById('age').value;
    
    const name = document.getElementById('name').value;
    
    document.getElementById('ticket_name').innerHTML = name
    
    const trainTicket = document.getElementById('train_ticket');
    trainTicket.classList.remove('d-none')
    
    
    if (age === 'over_65')
    {
        ticketPrice.innerHTML = (distance * priceKm * discountOver65).toFixed(2) + '€';
        document.getElementById('ticket_discount').innerHTML = 'Biglietto Over 65'
    }
    
    else if (age === 'minorenne')
    {
        ticketPrice.innerHTML = (distance * priceKm * discountUnder18).toFixed(2) + '€';
        document.getElementById('ticket_discount').innerHTML = 'Biglietto Under 18'
    }
    
    else
    {
        ticketPrice.innerHTML = (distance * priceKm).toFixed(2) + '€';
        document.getElementById('ticket_discount').innerHTML = 'Biglietto Standard'
    }
    
    
});

btnReset.addEventListener('click',
function()


{
    const distance = document.getElementById('distance').value = '';

    const age = document.getElementById('age').value = '';
    
    const name = document.getElementById('name').value = '';

    const trainTicket = document.getElementById('train_ticket');
    trainTicket.classList.toggle('d-none')

});
