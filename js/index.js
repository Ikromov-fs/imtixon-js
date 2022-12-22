
let $modal =document.querySelector(".modal");
let $btnOk =document.querySelector(".btn-ok");
let $saveBtn = document.querySelector("#save");
let $userName = document.querySelector("#userName");
let $phoneNumber = document.querySelector("#phoneNumber");
let $userAddress = document.querySelector("#userAddress");
let $form = document.querySelector("#form");
let $rezultUser = document.querySelector("#rezultUser");
let $select = document.querySelector("#select");

let order = [];
$phoneNumber.value = 9989
$form.addEventListener('submit', function (e) {
    e.preventDefault();

    let userName = $userName.value;
    let userPhone = $phoneNumber.value;
    let userAddress = $userAddress.value;

    let users = {
        name: userName,
        phone: userPhone,
        address: userAddress,
    }

    order.push(users);
    console.log(order);

    $userName.value = '';
    $phoneNumber.value = '9989';
    $userAddress.value = '';

    inText(e);
});

function inText(e) {
    $rezultUser.innerHTML = null;
    for (let i = 0; i < order.length; i++) {
        let userText = document.createElement("li");

        let userNameText = document.createElement("p");
        userNameText.textContent = order[i].name;
        userText.append(userNameText);

        let userPhoneText = document.createElement("p");
        userPhoneText.textContent = order[i].phone;
        userText.append(userPhoneText);

        let userAddressText = document.createElement("p");
        userAddressText.textContent = order[i].address;
        userText.append(userAddressText);

        $rezultUser.append(userText);
    }
}

$form.addEventListener("submit", function(){
    $modal.classList.add("modal-active")
})
$btnOk.addEventListener("click", function(){
    $modal.classList.remove("modal-active")
})





