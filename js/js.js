const phones = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    const json = await res.json()
    const phones = json.data;
    // console.log(phones);
    displayPhone(phones);
}

const displayPhone = phone => {
    // console.log(phone);
    const phoneContainer = document.getElementById('phone-container');
    phone.forEach(phoneVar => {
        console.log(phoneVar);

        const phoneCard = document.createElement('div');
        phoneCard.classList = `card p-4 bg-gray-100 shadow-xl`;
        // phoneCard.classList = ("card w-96 bg-gray-100 shadow-xl");
        phoneCard.innerHTML = `
        <figure><img src="${phoneVar.image}"
                            alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">${phoneVar.phone_name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
        `
        phoneContainer.appendChild(phoneCard);
    })
}
phones()