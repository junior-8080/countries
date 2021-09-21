export const getCountries = function (params){
    const url = 'https://restcountries.eu/rest/v2/' + params
    console.log(url)
    fetch(url).then(res  => res.json())
    .then(result => {
        return result 
    })
}