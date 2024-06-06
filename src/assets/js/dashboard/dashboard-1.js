(function($) {
    /* "use strict" */


 var dzChartlist = function(){

	var screenWidth = $(window).width();
		var chartTimeline = function(){

		var optionsTimeline = {
			chart: {
				type: "bar",
				height: 250,
				stacked: true,
				toolbar: {
					show: false
				},

				sparkline: {
					//enabled: true
				},
				zoom: {
					enabled: true,
				},
				offsetX: 0,
			},
			series: [
				 {
					name: "Pourcentage de nouveau stage",
					data: [5, 10, 19, 25, 20, 60, 70, 60, 45, 15, 5, 4]
				}

			],

			plotOptions: {
				bar: {
					columnWidth: "30%",
					endingShape: "rounded",
					startingShape: "rounded",

					colors: {
						backgroundBarColors: ['#f0f0f0', '#f0f0f0', '#f0f0f0', '#f0f0f0','#f0f0f0','#f0f0f0','#f0f0f0','#f0f0f0'],
						backgroundBarOpacity: 1,
						backgroundBarRadius: 5,
					},

				},
				distributed: true
			},
			colors:['#43DC80'],
			grid: {
				show: false,
			},
			legend: {
				show: false
			},
			fill: {
			  opacity: 1
			},
			dataLabels: {
				enabled: false,
				colors: ['#000'],
				dropShadow: {
				  enabled: true,
				  top: 1,
				  left: 1,
				  blur: 1,
				  bottom:0,
				  opacity: 1
			  }
			},
			xaxis: {
			 categories:  ['Jan', 'feb', 'Mar', 'Apr', 'May', 'Jun','juil', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',],
			  labels: {
			   style: {
				  colors: '#787878',
				  fontSize: '14px',
				  fontFamily: 'poppins',
				  fontWeight: 400,
				  cssClass: 'apexcharts-xaxis-label',
				},
			  },
			  crosshairs: {
				show: false,
			  },
			  axisBorder: {
				  show: false,
				},
			},
			yaxis: {
			show:false,
			labels: {
			   style: {
				  colors: '#3e4954',
				  fontSize: '14px',
				   fontFamily: 'Poppins',
				  fontWeight: 100,

				},
				 formatter: function (y) {
						  return y.toFixed(0) + "%";
						}
			  },
			},
			tooltip: {
				x: {
					show: true
				}
			},
			 responsive: [{
				breakpoint: 575,
				options: {
					chart: {
						height: 250,
					}
				}
			 }]
		};
		var chartTimelineRender =  new ApexCharts(document.querySelector("#chartTimeline"), optionsTimeline);
		 chartTimelineRender.render();
	}


	var radialChart = function(){
		 var options = {
          series: [60],
          chart: {
          height: 230,
          type: 'radialBar',
          toolbar: {
            show: false
          }
        },
        fill: {
            colors: ['#43DC80'],
        },
        stroke: {
        },
        labels: [''],
        };

        var chart = new ApexCharts(document.querySelector("#radialChart"), options);
        chart.render();
	}

	var widgetChart2 = function(){
		var options = {
		  series: [

		],


		xaxis: {
			categories: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',],
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false
			},
			labels: {
				show: false,
				style: {
					fontSize: '12px',
				}
			},
			crosshairs: {
				show: false,
				position: 'front',
				stroke: {
					width: 1,
					dashArray: 3
				}
			},
			tooltip: {
				enabled: true,
				formatter: undefined,
				offsetY: 0,
				style: {
					fontSize: '12px',
				}
			}
		},
		yaxis: {
			show: false,
		},
		fill: {
		  opacity: 0.0,
		  type: 'solid',
		  colors:'#FAC7B6'
		},
		tooltip: {
			style: {
				fontSize: '12px',
			},
			y: {
				formatter: function(val) {
					return "$" + val + " thousands"
				}
			}
		}
		};

		var chartBar1 = new ApexCharts(document.querySelector("#widgetChart2"), options);
		chartBar1.render();
	}

	var donutChart1 = function(){
		$("span.donut1").peity("donut", {
			width: "81",
			height: "81"
		});
	}

	/* Function ============ */
		return {
			init:function(){
			},


			load:function(){
					chartTimeline();
					widgetChart1();
					radialChart();
					widgetChart2();
					donutChart1();
			},

			resize:function(){
			}
		}

	}();

	jQuery(document).ready(function(){
	});

	jQuery(window).on('load',function(){
    // dzChartlist.load();
		setTimeout(function(){
			dzChartlist.load();
		}, 0);

	});

	jQuery(window).on('resize',function(){


	});

})(jQuery);
