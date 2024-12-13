function loadmenu(){
    fetch('food.json')
    .then(res => res.json())
    .then(data=>{
       const menucontainer = document.querySelector(".items");
       data.forEach(card=>{
        const foodItem = document.createElement('div');
        foodItem.className = 'item';
        foodItem.innerHTML = `
          <div class="item-img">
            <img src="./images/burger.png" alt="">
        </div>
        <div class="content">
                <div class="prize">
                    <h4>${card.name}</h4>
                    <h6>${card.price}/-</h6>
                </div>
                <div class="btn">+
                </div>
        </div>
        `;
    menucontainer.appendChild(foodItem);

       })
    })
    .catch(error => console.error('Error fetching menu:', error));
}
loadmenu()

function TakeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const burgers = ['Cheeseburger', 'Grilled Cheese', 'Burger King'];
            const order = {};
            for (let i = 0; i < 3; i++) {
                const randomBurger = burgers[Math.floor(Math.random() * burgers.length)];
                order[`burger${i + 1}`] = randomBurger;
            }
            resolve(order);
        }, 2500);
    });
}
// TakeOrder();

function orderPrep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const orderStatus = { order_status: true, paid: false };
            resolve(orderStatus);
        }, 1500);
    });
}


function payOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const orderStatus = { order_status: true, paid: true };
            resolve(orderStatus);
        }, 1000);
    });
}


function thankyouFnc(orderStatus) {
    if (orderStatus.paid) {
        alert("Thank you for your order! Your payment was successful.");
    }
}

TakeOrder()
    .then(order => {
        console.log('Order placed:', order);
        return orderPrep();
    })
    .then(orderStatus => {
        console.log('Order prepared:', orderStatus);
        return payOrder();
    })
    .then(paymentStatus => {
        console.log('Payment completed:', paymentStatus);
        thankyouFnc(paymentStatus);
    })
    .catch(error => {
        console.error('Error during the process:', error);
    });

 