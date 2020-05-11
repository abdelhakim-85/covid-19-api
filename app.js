const URL = 'https://api.covid19api.com/summary'

const globalInfos = async () => {
    const data = await (await fetch(URL)).json()
    const totalRecovered = data.Global.TotalRecovered
    const totalDeaths = data.Global.TotalDeaths
    const totalConfirmed = data.Global.TotalConfirmed
    $('.confirmed').text('Total Confirmed: ' + totalConfirmed)
    $('.deaths').text('Total Deaths: ' + totalDeaths)
    $('.recovered').text('Total Recovered: ' + totalRecovered)
}
const countryInfos = async () => {
    const res = await fetch(URL)
    const data = await res.json()

    const countryName = data.Countries
    $('#countriesList').append(
        countryName.map(function (v) {
            return $('<option/>', {
                value: v.Country,
                text: v.Country,
                totalconfirmed: v.TotalConfirmed,
                totaldeaths: v.TotalDeaths,
                totalrecovered: v.TotalRecovered,
            })
        })
    ).change(function () {
        const countryConfirmed = $('option:selected', this).attr('totalconfirmed');
        const countryDeaths = $('option:selected', this).attr('totaldeaths');
        const countryRecoverd = $('option:selected', this).attr('totalrecovered');
        $('.countryconfirmid').text('Total Confirmed: ' + countryConfirmed)
        $('.countrydeaths').text('Total Deaths: ' + countryDeaths)
        $('.countryrecoverd').text('Total Recoverd: ' + countryRecoverd)
    })
}
globalInfos()
countryInfos()