import React, { useState, Fragment, useEffect } from "react";
import { AgCharts } from "ag-charts-react";
import expenseService from "../../../services/api/expenseService";



const Chart = () => {
  const [expenses,setExpenses] = useState()
  const [options,setOptions] = useState()
  useEffect(() => {
    const getExpenses = async () => {
        try {
            const expense = await expenseService.getExpenses()
            console.log(expense);
            
            setOptions({
              data: expense,
              series: [
                {
                  type: "line",
                  xKey: "name",
                  yKey: "count",
                },
              ],
              axes: [
                {
                  type: "category",
                  position: "bottom",
                  gridLine: {
                    enabled: true,
                  },
                  
                },
                {
                  type: "number",
                  position: "left",
                  gridLine: {
                    enabled: true,
                  },
                  label: {
                    formatter: (params) => `${params.value / 1000000}M`,
                  },
                },
              ],
            })
        } catch (e) {
            console.log('failed', e)
        }
    }
    getExpenses();
  }, []);

  return (
    <Fragment>
      <AgCharts options={options} />
    </Fragment>
  );
};

export default Chart