$(function (){
    // Doughnut
    const setDonut = (ind) => {
        const $this = $('#graph'+ind);
        let dataSeries = $this.attr('data-chartist-series');
        const dataWidth = $this.attr('data-width');
        const dataHeight = $this.attr('data-height');
        const dataGradient = $this.attr('data-chartist-gradient');
        const dataBorderWidth = parseInt($this.attr('data-chartist-width'), 10);
        const data = {};
        const conf = {};

        // Data
        if (dataSeries) {
            dataSeries = dataSeries.split(',');
            let dataSeriesNum = [];
            for (i = 0; i < dataSeries.length; i++) {
                dataSeriesNum.push(parseInt(dataSeries[i], 10));
            }
            data.series = dataSeriesNum;
        }

        // Conf
        conf.donut = true;
        conf.showLabel = false;

        if (dataBorderWidth) {
            conf.donutWidth = dataBorderWidth;
        }
        if (dataWidth) {
            conf.width = dataWidth;
        }
        if (dataHeight) {
            conf.height = dataHeight;
        }

        const chart = new Chartist.Pie($this[0], data, conf);

        // Create gradient
        var grad = 'gradient'+ind;
        console.log(grad);
        chart.on('created', function(ctx) {
            const defs = ctx.svg.elem('defs');
            defs.elem('linearGradient', {
                id: grad,
                x1: 0,
                y1: 1,
                x2: 0,
                y2: 0
            }).elem('stop', {
                offset: 0,
                'stop-color': dataGradient.split(';')[0]
            }).parent().elem('stop', {
                offset: 1,
                'stop-color': dataGradient.split(';')[1]
            });
        });
    }

    // Setting doughnut graphs
    setDonut(1);
    setDonut(2);
    setDonut(3);


    // Weekly Planification Scroll
    const scrollContainer = document.querySelector(".div-semanal");

    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });
})