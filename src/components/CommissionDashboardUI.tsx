// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.
import React from 'react';
import './CommissionDashboardUI.css';

export interface MonthlyCommission {
  year: number;
  month: number;
  totalCommission: number;
  totalPaid: number;
  totalUnpaid: number;
  lineItemCount: number;
}

export interface CommissionSummary {
  userId: string;
  userName: string;
  currentYearTotal: number;
  currentMonthTotal: number;
  monthlyBreakdown: MonthlyCommission[];
}

export interface CommissionDashboardUIProps {
  summary: CommissionSummary | null;
  isLoading: boolean;
  error: string | null;
  onRefresh?: () => void;
}

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

const getMonthName = (month: number): string => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  return months[month - 1] || 'Unknown';
};

export const CommissionDashboardUI: React.FC<CommissionDashboardUIProps> = ({
  summary,
  isLoading,
  error,
  onRefresh
}) => {
  if (isLoading) {
    return (
      <div className="dashboard-container">
        <div className="loading">Loading commission data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <div className="error">{error}</div>
        {onRefresh && <button onClick={onRefresh}>Retry</button>}
      </div>
    );
  }

  if (!summary) {
    return (
      <div className="dashboard-container">
        <div className="no-data">No commission data available.</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Commission Dashboard</h1>
        <h2>Welcome, {summary.userName}</h2>
        {onRefresh && <button onClick={onRefresh}>Refresh</button>}
      </div>

      <div className="summary-cards">
        <div className="summary-card">
          <h3>Current Year Total</h3>
          <div className="amount">{formatCurrency(summary.currentYearTotal)}</div>
        </div>
        <div className="summary-card">
          <h3>Current Month</h3>
          <div className="amount">{formatCurrency(summary.currentMonthTotal)}</div>
        </div>
      </div>

      <div className="monthly-breakdown">
        <h3>Monthly Breakdown</h3>
        <div className="breakdown-table">
          <div className="table-header">
            <div className="header-cell">Period</div>
            <div className="header-cell">Total Commission</div>
            <div className="header-cell">Paid</div>
            <div className="header-cell">Unpaid</div>
            <div className="header-cell">Line Items</div>
            <div className="header-cell">Payment Status</div>
          </div>
          {summary.monthlyBreakdown.map((month: MonthlyCommission, index: number) => (
            <div key={index} className="table-row">
              <div className="cell">
                {getMonthName(month.month)} {month.year}
              </div>
              <div className="cell">{formatCurrency(month.totalCommission)}</div>
              <div className="cell paid">{formatCurrency(month.totalPaid)}</div>
              <div className="cell unpaid">{formatCurrency(month.totalUnpaid)}</div>
              <div className="cell">{month.lineItemCount}</div>
              <div className="cell">
                <div className="payment-status">
                  {month.totalCommission > 0 ? 
                    `${Math.round((month.totalPaid / month.totalCommission) * 100)}% Paid` : 
                    'N/A'
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
