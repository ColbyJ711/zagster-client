const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

var Bacon=[]

function updateView() {
    // $.getJSON(BASE_URL + "/rides/count/per_hour", updatechart)
    $.when ($.getJSON(BASE_URL + "/rides/count/per_hour", test)
    ).then (updatechart)
}

// function updateRideCount(data) {
//     numberOfRides=data.count
//     $("h2#rideCount").html(numberOfRides)
// }

// function updateView2() {
//     $.getJSON(BASE_URL + "/rides/count" , updateRideCount)

//     $.when ($.getJSON(BASE_URL + "/rides/count/per_month", perYear),
//     ).then(updateChart)
// }

function test(data){
    var test2017=data[2017]
    console.log(Bacon)
    Bacon.push(data["0"])
    Bacon.push(data["1"])
    Bacon.push(data["3"])
    Bacon.push(data["4"])
    Bacon.push(data["5"])
    Bacon.push(0)
    Bacon.push(data["7"])
    Bacon.push(data["8"])
    Bacon.push(data["9"])
    Bacon.push(data["10"])
    Bacon.push(data["11"])
    Bacon.push(data["12"])
    Bacon.push(data["13"])

    console.log(Bacon)
}

function updatechart () {
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['0 hour', '1st hour', '2nd hour', '3rd hour', '4th hour', '5th hour', '6th hour', '7th hour', '8th hour', '9th hour', '10th hour', '11th hour', '12th hour'],
        datasets: [{
            label: 'Rides within the Hour',
            data: Bacon,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}
// add(2,3);

// function add (num1, num2){
//     answer=num1+num2;
//     console.log("The answer is: " + answer);
//     return answer;
// }

// function greeter(name){
//     alert("Welcome to " + name + " Data Visualization")
// }
// greeter("Colbys")

// var person= {name: "Colby", age:18, Life:{Job: "Pro Weeb", gradYear:"2019"}}
// console.log("My Name is " + person.name)
// console.log("My age is " + person.age)
// console.log("My Life consists of being a " + person.Life.Job);

// var data={"2016":[{"9":220},{"10":141},{"11":89},{"12":16}]}
// var year_list = data[2016]
// console.log('The year list is ' + year_list)

// console.log(year_list[0][9])
// console.log(year_list[1][10])
// console.log(year_list[2][11])
// console.log(year_list[3][12])