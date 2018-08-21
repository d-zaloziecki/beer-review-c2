const beers = [];

const addBeer = function (name, category, rating) {
    let newBeer = {
        "name": name,
        "category": category,
        "rating": rating
    }
    beers.push(newBeer);
}

const renderBeers = function () {
    const list = $('.beers-list');
    list.empty();
    for (let i of beers) {
        list.append("<li> Beer's name: " + i.name +
            "<br/> Beer's category: " + i.category +
            "<br/> Rating: " + i.rating + "</li> <br/>")
    }
}

const post = function () {
    const name = $('.beer-input').val();
    const category = $('.category-input').val();
    const rating = $('.select-rating').val();
    addBeer(name, category, rating);
    renderBeers();
}

$('.post-beer').on('click', post)

let y = 1;

const sortBeers = function () {
    beers.sort(function (a, b) {
        return a.rating * y - b.rating * y
    })
    renderBeers();
    y = -y
}


$('.organizeBeers').on("click", sortBeers)