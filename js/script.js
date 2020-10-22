(function($) {
    "use strict";
    var ctx = document.getElementById('pemesanan').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        data: {
            labels: ['2019-12-05', '2019-12-06', '2019-12-07', '2019-12-08', '2019-12-09', '2019-12-10', '2019-12-11'],
            datasets: [{
                label: 'Statistik pemesanan',
                pointBorderWidth: 4,
                pointBackgroundColor: '#4EBBBC',
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: '#4EBBBC',
                data: [30, 20, 80, 60, 85, 70, 88]
            }]
        },

        // Configuration options go here
        options: {
            responsive: true,
            legend: { display: false },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                    ticks: { fontFamily: "Nunito", }
                }],
                yAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                        zeroLineColor: "white"
                    },
                    ticks: { 
                        beginAtZero: true,
                        stepSize: 20,
                        max: 100,
                        fontFamily: "Nunito"
                    },
                }]
            },
            maintainAspectRatio: false,
        }
    });


    var ctx = document.getElementById('pengunjung').getContext('2d');
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(129, 213, 171, 0.85)');   
    gradient.addColorStop(1, 'rgb(129, 213, 171, 0)');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        data: {
            labels: ['2019-12-05', '2019-12-06', '2019-12-07', '2019-12-08', '2019-12-09', '2019-12-10', '2019-12-11'],
            datasets: [{
                label: 'Statistik pengunjung',
                pointBorderWidth: 4,
                pointBackgroundColor: '#4EBBBC',
                backgroundColor: gradient,
                borderColor: '#4EBBBC',
                lineTension: 0,
                data: [40, 30, 87, 63, 83, 80, 90]
            }]
        },

        // Configuration options go here
        options: {
            responsive: true,
            legend: { display: false },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                    ticks: { fontFamily: "Nunito" }
                }],
                yAxes: [{
                    gridLines: {
                        color: "rgba(0, 0, 0, 0)",
                        zeroLineColor: "white"
                    },
                    ticks: { 
                        beginAtZero: true,
                        stepSize: 20,
                        max: 100,
                        fontFamily: "Nunito"
                    },
                }]
            },
            maintainAspectRatio: false,
        }
    });

    $('.product').owlCarousel({
        center: true,
        autoWidth:false,
        loop:true,
        stagePadding: 60,
        margin: 20,
        responsiveClass: true,
        items : 1,
        responsive:{
            480:{
                items:1,
            },
            768:{
                items:1,
            },
            1024:{
                items:3
            }
        }
    });

    $(".product-owl-next").click(function() {
        $('.product').trigger('next.owl.carousel')
    })
    $(".product-owl-previous").click(function() {
        $('.product').trigger('prev.owl.carousel')
    })
    $(".toggle").click(function() {
        $('.sidebar').toggleClass('active')
    })

    $('.date').daterangepicker();
    $('.date').on('apply.daterangepicker', function(ev, picker) {
        var label = $(this).find('.label');
        label.html(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
    });

    eva.replace();
})(window.jQuery);