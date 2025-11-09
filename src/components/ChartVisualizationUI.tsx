// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import React from 'react';

export interface ChartData {
  type: string;
  title: string;
  charts?: any[];
  chartType?: string;
  data?: any;
  lastUpdated?: string;
  message?: string; // For custom reports
}

export interface ChartVisualizationUIProps {
  chartData: ChartData | null;
  isLoading: boolean;
  error: string | null;
  reportId: string;
  title?: string;
  height?: string;
  onRefresh?: () => void;
}

const renderMetricCard = (metric: any) => (
  <div key={metric.title} className="bg-white rounded-lg shadow p-6">
    <h3 className="text-lg font-semibold text-gray-700 mb-2">{metric.title}</h3>
    <div className="text-3xl font-bold text-blue-600">
      {metric.format === 'currency' 
        ? `$${metric.value.toLocaleString()}` 
        : metric.value.toLocaleString()}
    </div>
  </div>
);

const renderBarChart = (chart: any) => (
  <div key={chart.title} className="bg-white rounded-lg shadow p-6">
    <h3 className="text-lg font-semibold text-gray-700 mb-4">{chart.title}</h3>
    <div className="space-y-3">
      {Array.isArray(chart.data) && chart.data.slice(0, 5).map((item: any, index: number) => (
        <div key={index} className="flex items-center">
          <div className="w-32 text-sm text-gray-600 truncate">{item.name}</div>
          <div className="flex-1 mx-3">
            <div className="bg-gray-200 rounded-full h-3">
              <div 
                className="bg-blue-500 h-3 rounded-full"
                style={{ 
                  width: `${Math.min((item.value / Math.max(...chart.data.map((d: any) => d.value))) * 100, 100)}%` 
                }}
              ></div>
            </div>
          </div>
          <div className="w-24 text-sm font-medium text-right">
            ${item.value.toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const renderLineChart = (chart: any) => (
  <div key={chart.title} className="bg-white rounded-lg shadow p-6">
    <h3 className="text-lg font-semibold text-gray-700 mb-4">{chart.title}</h3>
    <div className="text-sm text-gray-500 mb-4">Monthly trend visualization</div>
    <div className="space-y-2">
      {Array.isArray(chart.data) && chart.data.slice(-6).map((item: any, index: number) => (
        <div key={index} className="flex justify-between py-2 border-b border-gray-100">
          <span className="text-sm text-gray-600">{item.month}</span>
          <span className="text-sm font-medium">${item.commission.toLocaleString()}</span>
          <span className="text-sm text-gray-500">{item.items} items</span>
        </div>
      ))}
    </div>
  </div>
);

const renderPieChart = (chart: any) => (
  <div key={chart.title} className="bg-white rounded-lg shadow p-6">
    <h3 className="text-lg font-semibold text-gray-700 mb-4">{chart.title}</h3>
    <div className="space-y-2">
      {Array.isArray(chart.data) && chart.data.slice(0, 8).map((item: any, index: number) => {
        const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-gray-500'];
        return (
          <div key={index} className="flex items-center">
            <div className={`w-4 h-4 rounded-full ${colors[index % colors.length]} mr-3`}></div>
            <div className="flex-1 text-sm text-gray-600">{item.name}</div>
            <div className="text-sm font-medium">${item.value.toLocaleString()}</div>
          </div>
        );
      })}
    </div>
  </div>
);

const renderTerritoryChart = (data: any) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="text-lg font-semibold text-gray-700 mb-4">Territory Performance</h3>
    <div className="space-y-3">
      {Array.isArray(data.data) && data.data.slice(0, 10).map((territory: any, index: number) => (
        <div key={index} className="border-b border-gray-100 pb-3">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium text-gray-800">{territory.territory}</span>
            <span className="text-sm font-bold text-blue-600">
              ${territory.commission.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>{territory.items} items</span>
            <span>{territory.representatives} reps</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const ChartVisualizationUI: React.FC<ChartVisualizationUIProps> = ({
  chartData,
  isLoading,
  error,
  reportId,
  title,
  height = '600px',
  onRefresh
}) => {
  if (isLoading) {
    return (
      <div className={`flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg`} style={{ height }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading visualization...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg`} style={{ height }}>
        <div className="text-center p-8">
          <div className="text-red-500 text-4xl mb-4">📊</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Visualization Error</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          {onRefresh && (
            <button
              onClick={onRefresh}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Retry
            </button>
          )}
        </div>
      </div>
    );
  }

  if (!chartData) {
    return (
      <div className={`flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg`} style={{ height }}>
        <p className="text-gray-600">No visualization data available</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{title || chartData.title}</h2>
          {chartData.lastUpdated && (
            <p className="text-sm text-gray-500">
              Last updated: {new Date(chartData.lastUpdated).toLocaleString()}
            </p>
          )}
        </div>
        {onRefresh && (
          <button
            onClick={onRefresh}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Refresh
          </button>
        )}
      </div>

      <div className="space-y-6">
        {chartData.type === 'dashboard' && chartData.charts && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chartData.charts.map((chart: any) => {
              switch (chart.type) {
                case 'metric':
                  return renderMetricCard(chart);
                case 'bar':
                  return renderBarChart(chart);
                case 'line':
                  return renderLineChart(chart);
                case 'pie':
                  return renderPieChart(chart);
                default:
                  return null;
              }
            })}
          </div>
        )}

        {chartData.type === 'chart' && chartData.chartType === 'bar' && chartData.data && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {renderTerritoryChart(chartData)}
          </div>
        )}

        {chartData.type === 'chart' && chartData.charts && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {chartData.charts.map((chart: any) => {
              switch (chart.type) {
                case 'line':
                  return renderLineChart(chart);
                case 'pie':
                  return renderPieChart(chart);
                case 'bar':
                  return renderBarChart(chart);
                default:
                  return null;
              }
            })}
          </div>
        )}

        {chartData.type === 'custom' && (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Report</h3>
            <p className="text-gray-600 mb-4">{chartData.message || 'Custom visualization coming soon'}</p>
            <div className="text-sm text-gray-500">Report ID: {reportId}</div>
          </div>
        )}
      </div>
    </div>
  );
};
