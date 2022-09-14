import { useEffect, useState } from 'react';
import { makeRequest } from '../../utils/request';
import PieChartCard from '../pie-chart-card';
import './styles.css';
import { ChartSeriesData, PieChartConfig, SalesByGender, SalesByGender2 } from '../../types';
import { buildChartSeries, sumSalesByGender } from './helpers';
import { formatGender, formatPrice } from '../../utils/formatters';
import { buildSalesByGenderChart } from '../../helpers';

type Props = {
  filterStore?: number;
};

function SalesByStore({ filterStore }: Props) {
  const [chartSeries, setChartSeries] = useState<ChartSeriesData[]>([]);
  const [totalSum, setTotalSum] = useState(0);
  const [salesByGender2, setSalesByGender2] = useState<PieChartConfig>();

  useEffect(() => {
    makeRequest.get<SalesByGender[]>(`/sales/by-gender?storeId=${filterStore}`).then((response) => {
      const newChartSeries = buildChartSeries(response.data);
      setChartSeries(newChartSeries);
      const newTotalSum = sumSalesByGender(response.data);
      setTotalSum(newTotalSum);
    });
  }, [filterStore]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender2[]>(`/sales/by-gender?storeId=${filterStore}`)
      .then((response) => {
        const newSalesByGender2 = buildSalesByGenderChart(response.data);
        setSalesByGender2(newSalesByGender2);
      });
  }, [filterStore]);

  return (
    <div className="sales-by-store-container base-card">
      <div className="sales-by-store-data">
        <h1>{formatPrice(totalSum)}</h1>
        <span>Total de vendas</span>
      </div>
      <div className="pie-chart-card">
        <PieChartCard name="" labels={salesByGender2?.labels} series={salesByGender2?.series} />
      </div>
    </div>
  );
}

export default SalesByStore;
