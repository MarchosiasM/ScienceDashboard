$.getJSON('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson', function (data) {

    for (var i = 0; i < 5; i++) {
        var earthquake = data.features[i];
        var location = $("<h3>").text("Location: " + data.features[i].properties.place);
        var magnitude = $("<p>").text("Magnitude 'Richter scale': " + data.features[i].properties.mag);
        var time = $("<p>").text("Time: " + data.features[i].properties.time);
        var t = data.features[i].properties.time
        var tPretty = moment(t).format("LLL");
        var moreInfo = $("<p>").text("");
        moreInfo.append("<a href = '" + data.features[i].properties.url + "'>Click here for more information</a>");
        $("#info").append(location, magnitude, tPretty, moreInfo);


        // console.log(tPretty);
        console.log(data.features[i]);
    }

});

$.getJSON('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson', function (data) {

    for (var i = 0; i < 5; i++) {
        var earthquake = data.features[i];
        var location = $("<h3>").text("Location: " + data.features[i].properties.place);
        var magnitude = $("<p>").text("Magnitude 'Richter scale': " + data.features[i].properties.mag);
        var time = $("<p>").text("Time: " + data.features[i].properties.time);
        var t = data.features[i].properties.time
        var tPretty = moment(t).format("LLL");
        var moreInfo = $("<p>").text("");
        moreInfo.append("<a href = '" + data.features[i].properties.url + "'>Click here for more information</a>");
        $("#info-2").append(location, magnitude, tPretty, moreInfo);


        // console.log(tPretty);
        console.log(data.features[i]);
    }

});