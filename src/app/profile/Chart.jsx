import React, { useLayoutEffect } from "react"
import * as am5 from "@amcharts/amcharts5"
import * as am5xy from "@amcharts/amcharts5/xy"

import am5themes_Animated from "@amcharts/amcharts5/themes/Animated"

const Chart = () => {
  useLayoutEffect(() => {
    let root = am5.Root.new(chartdiv)

    root.setThemes([am5themes_Animated.new(root)])

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
        paddingLeft: 0,
        paddingRight: 1,
      })
    )

    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}))
    cursor.lineY.set("visible", false)

    let xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 30,
      minorGridEnabled: true,
    })

    xRenderer.labels.template.setAll({
      rotation: -50,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15,
      fill: "#fff",
    })

    xRenderer.grid.template.setAll({
      location: 1,
      stroke: "#fff", // Menetapkan warna garis putih
    })

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "country",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    )

    let yRenderer = am5xy.AxisRendererY.new(root, {
      strokeOpacity: 0.1,
    })

    yRenderer.labels.template.setAll({
      fill: "#fff",
    })

    yRenderer.grid.template.setAll({
      location: 1,
      stroke: "#fff", // Menetapkan warna garis putih
    })

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: yRenderer,
      })
    )

    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "country",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY.formatNumber('#.0')}%",
        }),
      })
    )

    series.columns.template.setAll({
      cornerRadiusTL: 5,
      cornerRadiusTR: 5,
      strokeOpacity: 0,
    })
    series.columns.template.adapters.add("fill", function (fill, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target))
    })

    series.columns.template.adapters.add("stroke", function (stroke, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target))
    })

    

    let data = [
      {
        country: "Papua",
        value: 27.81,
      },
      {
        country: "Nusa Tenggara Timur",
        value: 24.54,
      },
      {
        country: "Maluku",
        value: 23.44,
      },
      {
        country: "Papua Barat",
        value: 22.76,
      },
      {
        country: "Gorontalo",
        value: 22.65,
      },
      {
        country: "Sulawesi Tenggara",
        value: 22.20,
      },
      {
        country: "Sulawesi Barat",
        value: 21.88,
      },
      {
        country: "Maluku Utara",
        value: 21.74,
      },
      {
        country: "Kalimantan Barat",
        value: 21.32,
      },
      {
        country: "Kalimantan Tengah",
        value: 20.42,
      },
      {
        country: "Kalimantan Selatan",
        value: 19.71,
      },
      {
        country: "Sulawesi Utarar",
        value: 19.28,
      },
      {
        country: "Aceh",
        value: 19.18,
      },
      {
        country: "Sumatera Barat",
        value: 18.92,
      },
      {
        country: "Bengkulu",
        value: 18.78,
      },
      {
        country: "Jambi",
        value: 18.68,
      },
      {
        country: "Sumatera Selatan",
        value: 18.58,
      },
      {
        country: "Lampung",
        value: 18.38,
      },
      {
        country: "Banten",
        value: 18.28,
      },
      {
        country: "Jawa Barat",
        value: 18.18,
      },
      {
        country: "Jawa Tengah",
        value: 17.98,
      },
      {
        country: "DI Yogyakarta",
        value: 17.78,
      },
      {
        country: "Jawa Timur",
        value: 17.58,
      },
      {
        country: "Bali",
        value: 17.38,
      },
      {
        country: "Kalimantan Utara",
        value: 17.18,
      },
      {
        country: "Kalimantan Timur",
        value: 16.98,
      },
      {
        country: "Riau",
        value: 16.78,
      },
      {
        country: "Kepulauan Riau",
        value: 16.58,
      },
      {
        country: "Sumatera Utara",
        value: 16.38,
      },
    ]

    xAxis.data.setAll(data)
    series.data.setAll(data)

    series.appear(1000)
    chart.appear(1000, 100)

    chart.appear(1000, 100).then((x) => {
      root._logo?.hide()
      root._handleLogo = () => {
        console.log("Logo amchart hide")
      }
    })

    return () => {
      root.dispose()
    }
  }, [])

  return (
    <div className="w-full flex flex-col justify-center">
      <button className="bg-lightBlue rounded-md py-2 w-max m-auto my-10 px-5 font-bold">
        DATA STATISTIK
      </button>
      <div className="w-[85%] h-[90vh] mx-auto">
        <div id="chartdiv" className="w-full h-full"></div>
      </div>
    </div>
  )
}

export default Chart
