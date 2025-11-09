// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import React, { useState } from 'react';

export interface AnalyticsInsight {
  id: string;
  type: 'trend' | 'anomaly' | 'forecast' | 'recommendation';
  title: string;
  summary: string;
  confidence: number;
  timestamp: Date | string;
  data?: any;
}

export interface InsightsPanelUIProps {
  insights: AnalyticsInsight[];
  isLoading: boolean;
  filter: string;
  maxInsights?: number;
  className?: string;
  onFilterChange: (filter: string) => void;
  onRefresh: () => void;
}

const insightTypeIcons: Record<string, string> = {
  'trend': '📈',
  'anomaly': '⚠️',
  'forecast': '🔮',
  'recommendation': '💡'
};

const insightTypeColors: Record<string, string> = {
  'trend': 'blue',
  'anomaly': 'red', 
  'forecast': 'purple',
  'recommendation': 'green'
};

function ConfidenceBar({ confidence }: { confidence: number }) {
  const percentage = Math.round(confidence * 100);
  
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-300 ${
            percentage >= 90 ? 'bg-green-500' :
            percentage >= 70 ? 'bg-yellow-500' :
            'bg-red-500'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-xs text-gray-500 w-10">{percentage}%</span>
    </div>
  );
}

function InsightCard({ insight }: { insight: AnalyticsInsight }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="group bg-white/90 backdrop-blur-sm border border-neutral-200/60 rounded-2xl p-6 hover:shadow-xl hover:shadow-neutral-900/10 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300/60">
      <div className="flex items-start gap-4">
        <div className={`h-12 w-12 bg-gradient-to-br from-${insightTypeColors[insight.type]}-400 to-${insightTypeColors[insight.type]}-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-${insightTypeColors[insight.type]}-500/25 group-hover:scale-110 transition-transform duration-300`}>
          <span className="text-xl">{insightTypeIcons[insight.type]}</span>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-3">
            <h4 className="font-bold text-neutral-900 text-base tracking-tight">{insight.title}</h4>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`text-neutral-400 hover:text-neutral-600 ml-3 p-1 rounded-lg hover:bg-neutral-100/80 transition-all duration-200 ${
                isExpanded ? 'rotate-45' : 'hover:scale-110'
              }`}
            >
              {isExpanded ? '❌' : '➕'}
            </button>
          </div>
          
          <p className="text-sm text-neutral-600 mb-4 leading-relaxed font-medium">{insight.summary}</p>
          
          <div className="mb-4">
            <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
              <span className="font-semibold">Confidence Level</span>
              <span className="font-medium">{new Date(insight.timestamp).toLocaleDateString()}</span>
            </div>
            <ConfidenceBar confidence={insight.confidence} />
          </div>
          
          <div className="flex items-center justify-between">
            <span className={`inline-flex px-3 py-1.5 text-xs font-bold rounded-xl bg-gradient-to-r from-${insightTypeColors[insight.type]}-100/80 to-${insightTypeColors[insight.type]}-200/60 text-${insightTypeColors[insight.type]}-800 border border-${insightTypeColors[insight.type]}-200/40`}>
              {insight.type.charAt(0).toUpperCase() + insight.type.slice(1)}
            </span>
            
            {isExpanded && insight.data && (
              <button className="text-xs text-primary-600 hover:text-primary-800 font-semibold px-3 py-1.5 rounded-xl hover:bg-primary-50 transition-colors duration-200">
                View Data
              </button>
            )}
          </div>
          
          {isExpanded && insight.data && (
            <div className="mt-4 pt-4 border-t border-neutral-200/60">
              <pre className="text-xs text-neutral-600 bg-gradient-to-br from-neutral-50/80 to-neutral-100/40 p-4 rounded-xl overflow-x-auto font-mono border border-neutral-200/40">
                {JSON.stringify(insight.data, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const InsightsPanelUI: React.FC<InsightsPanelUIProps> = ({
  insights,
  isLoading,
  filter,
  maxInsights = 6,
  className = '',
  onFilterChange,
  onRefresh
}) => {
  const filteredInsights = filter === 'all' 
    ? insights 
    : insights.filter(insight => insight.type === filter);

  const displayedInsights = filteredInsights.slice(0, maxInsights);

  const filterOptions = [
    { value: 'all', label: 'All Insights', count: insights.length },
    { value: 'trend', label: 'Trends', count: insights.filter(i => i.type === 'trend').length },
    { value: 'recommendation', label: 'Recommendations', count: insights.filter(i => i.type === 'recommendation').length },
    { value: 'forecast', label: 'Forecasts', count: insights.filter(i => i.type === 'forecast').length },
    { value: 'anomaly', label: 'Anomalies', count: insights.filter(i => i.type === 'anomaly').length }
  ];

  if (isLoading) {
    return (
      <div className={`bg-white rounded-lg border border-gray-200 ${className}`}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-8 bg-primary-100 rounded-lg animate-pulse"></div>
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="border border-gray-200 rounded-lg p-4">
                <div className="flex gap-3">
                  <div className="h-10 w-10 bg-gray-200 rounded-lg animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-4 w-3/4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                    <div className="h-3 w-full bg-gray-100 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white/80 backdrop-blur-2xl rounded-2xl border border-neutral-200/60 shadow-2xl shadow-neutral-900/10 ${className}`}>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/25">
              <span className="text-white text-xl">🧠</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">AI Insights</h3>
              <p className="text-sm text-neutral-600 font-medium">Intelligent analysis of your data</p>
            </div>
          </div>
          <button 
            onClick={onRefresh}
            className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-semibold px-4 py-2.5 rounded-xl hover:bg-primary-50/80 transition-all duration-200 hover:shadow-md"
          >
            <span className="text-lg animate-spin">↻</span>
            Refresh
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {filterOptions.map(option => (
            <button
              key={option.value}
              onClick={() => onFilterChange(option.value)}
              className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 hover:scale-105 ${
                filter === option.value
                  ? 'bg-gradient-to-r from-primary-500/20 to-primary-600/20 text-primary-700 border border-primary-300/40 shadow-lg shadow-primary-500/10'
                  : 'bg-neutral-100/80 text-neutral-600 hover:bg-neutral-200/80 hover:text-neutral-800 border border-neutral-200/60 hover:shadow-md'
              }`}
            >
              <span className="mr-2">{option.label}</span>
              <span className={`inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-xs font-bold rounded-full ${
                filter === option.value 
                  ? 'bg-primary-600/20 text-primary-700' 
                  : 'bg-neutral-200/80 text-neutral-600'
              }`}>
                {option.count}
              </span>
            </button>
          ))}
        </div>

        {/* Insights Grid */}
        {displayedInsights.length > 0 ? (
          <div className="space-y-4">
            {displayedInsights.map(insight => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
            
            {filteredInsights.length > maxInsights && (
              <div className="text-center pt-4">
                <p className="text-sm text-gray-500">
                  Showing {maxInsights} of {filteredInsights.length} insights
                </p>
                <button className="text-sm text-primary-600 hover:text-primary-800 font-medium mt-1">
                  View All Insights
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">No Insights Available</h4>
            <p className="text-sm text-gray-500 mb-4">
              {filter === 'all' 
                ? 'AI analysis will appear here as your data grows'
                : `No ${filter} insights found. Try selecting a different filter.`
              }
            </p>
            <button
              onClick={onRefresh}
              className="text-sm text-primary-600 hover:text-primary-800 font-medium"
            >
              Generate New Insights
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
