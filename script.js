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

const organize = function () {
    let organizeButton = $('.organizeBeers').text();
    if (organizeButton == "Organize beers 0-5") {

        beers.sort(function (a, b) {
            return a.rating - b.rating
        })
        renderBeers();
        $('.organizeBeers').text("Organize beers 5-0")
    }

    else if (organizeButton == "Organize beers 5-0") {
        beers.sort(function (a, b) {
            return b.rating - a.rating
        })
        renderBeers();
        $('.organizeBeers').text("Organize beers 0-5")
    }
}

$('.organizeBeers').on("click", organize)