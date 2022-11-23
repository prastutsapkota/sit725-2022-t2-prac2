function buildCitiesList()
{
    let cities, optext;
    cities = ["Adelaide", "Brisbane", "Canberra", "Darwin", "Hobart",
            "Melbourne", "Perth", "Sydney"];
    optext = "<ul>";
    for (let i = 0; i < cities.length; i++)
    {
        optext += "<li>" + cities[i] + "</li>";
    }
    optext += "</ul>";
    document.getElementById("capital_cities").innerHTML = optext;
}