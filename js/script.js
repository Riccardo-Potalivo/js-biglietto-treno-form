const btnSubmit = document.querySelector('#btn_submit');
console.log(btnSubmit);

const priceKm = 0.21;
const discountUnder18 = 0.8;
const discountOver65 = 0.6;
let ticketPrice = document.getElementById('ticket_price')


btnSubmit.addEventListener('click',
function()
{
    let distance = document.getElementById('distance').value;
    console.log(distance);

    let age = document.getElementById('age').value;
    console.log(age);

    if (age >= 65)
    {
        ticketPrice.innerHTML = distance * priceKm * discountOver65;
    }

    else if (age < 18)
    {
        ticketPrice.innerHTML = distance * priceKm * discountUnder18;
    }

    else
    {
        ticketPrice.innerHTML = distance * priceKm;
    }


})