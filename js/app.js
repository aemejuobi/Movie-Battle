const apiKey = "86fbe270";
let query1 = "";
let query2 = "";
let search1 = ``;
let search2 = ``;
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let title1 = document.querySelector(".title1");
let title2 = document.querySelector(".title2");
let summary1 = document.querySelector(".summary1");
let summary2 = document.querySelector(".summary2");
let money1 = document.querySelector(".money1");
let money2 = document.querySelector(".money2");
let rating1 = document.querySelector(".rating1");
let rating2 = document.querySelector(".rating2");
const searchBtn1 = document.querySelector(".leftBtn");
const searchBtn2 = document.querySelector(".rightBtn");

const compareMovies = () => {

}

const getMovie1 = async (e) => {
    e.preventDefault();
    query1 = document.querySelector(".search1").value;
    search1 = `http://www.omdbapi.com/?t=${query1}&apikey=${apiKey}`;

    const res = await axios.get(search1);
    try{
        console.log(res.data);
        img1.src = res.data.Poster;
        title1.innerText = res.data.Title;
        summary1.innerText = res.data.Plot;
        money1.innerText = res.data.BoxOffice;
        rating1.innerText = parseFloat(res.data.imdbRating);

    }catch(err){
        console.log(err);
    }
}

const getMovie2 = async (e) => {
    e.preventDefault();
    query2 = document.querySelector(".search2").value;
    search2 = `http://www.omdbapi.com/?t=${query2}&apikey=${apiKey}`;

    const res = await axios.get(search2);
    try{
        console.log(res.data);
        img2.src = res.data.Poster;
        title2.innerText = res.data.Title;
        summary2.innerText = res.data.Plot;
        money2.innerText = res.data.BoxOffice;
        rating2.innerText = parseFloat(res.data.imdbRating);
    }catch(err){
        console.log(err);
    }
}

searchBtn1.addEventListener("click", getMovie1);
searchBtn2.addEventListener("click", getMovie2);