const APP_KEY = "53fef54957110d9c0fcc262a9c906916";
const APP_ID = "b4caefc4";

const searchText = document.getElementById('search_text');
const searchForm = document.getElementById('search_form');
const main = document.getElementById('main');
const loader = document.getElementById('loader');

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let val = searchText.value;
    const app_url = `https://api.edamam.com/search?q=${val}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    main.innerHTML = '';

    const getData = async () => 
    {
        // loader.classList.remove("d-none");
        const data = await fetch(app_url).then(res => res.json())
        const allData = data.hits;
            allData.map((item) => {
                main.innerHTML += `
                <div class="food">
                    <img src="${item.recipe.image}" alt="img">
                    <div class="food-info">
                        <h3>${item.recipe.label}</h3>
                        <h4>calories: <span>${item.recipe.calories}</span></h4>
                    </div>
                </div>
                `
            })
            // loader.classList.add("d-none");
    }
    getData();

    // $.ajax({
    //     type:"GET",
    //     url:app_url,
    //     beforeSend:function()
    //     {
    //         loader.classList.remove("d-none");
    //     },
    //     success:function(data)
    //     {
    //         const allData = data.hits;
    //         allData.map((item) => {
    //             main.innerHTML += `
    //             <div class="food">
    //                 <img src="${item.recipe.image}" alt="img">
    //                 <div class="food-info">
    //                     <h3>${item.recipe.label}</h3>
    //                     <h4>calories: <span>${item.recipe.calories}</span></h4>
    //                 </div>
    //             </div>
    //             `
    //         })
    //         loader.classList.add("d-none");
    //     },
    //     error:function(error)
    //     {
    //         console.log(error)
    //     }
    // })
})