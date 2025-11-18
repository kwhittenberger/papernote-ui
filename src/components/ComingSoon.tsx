// Copyright (c) 2025 kwhittenberger. All rights reserved.
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

import { AlertCircle, Calendar, FileText, TrendingUp } from 'lucide-react';
import type { ReactNode } from 'react';

export interface ComingSoonProps {
  title: string;
  description: string;
  icon?: ReactNode;
  features?: string[];
  estimatedDate?: string;
}

/**
 * Coming Soon placeholder component for pages under development
 *
 * Provides a professional placeholder for features that are planned but not yet implemented.
 * Shows feature highlights, estimated release dates, and contact information.
 *
 * @example
 * ```tsx
 * <ComingSoon
 *   title="Sales Pipeline"
 *   description="Kanban-style pipeline for tracking opportunities"
 *   icon={<TrendingUp className="h-8 w-8" />}
 *   features={[
 *     'Drag-and-drop stage transitions',
 *     'Weighted forecast calculations',
 *     'Win/loss analytics'
 *   ]}
 *   estimatedDate="Q2 2026"
 * />
 * ```
 */
export function ComingSoon({
  title,
  description,
  icon,
  features = [],
  estimatedDate
}: ComingSoonProps) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-paper-50 dark:bg-paper-800 rounded-lg shadow-sm border border-paper-200 dark:border-paper-700 p-8">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
            {icon || <FileText className="h-8 w-8 text-primary-600 dark:text-primary-400" />}
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-ink-900 dark:text-ink-100 mb-2">
              {title}
            </h1>
            <p className="text-base text-ink-600 dark:text-ink-400">
              {description}
            </p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning-100 dark:bg-warning-900 rounded-full">
            <AlertCircle className="h-4 w-4 text-warning-700 dark:text-warning-300" />
            <span className="text-sm font-medium text-warning-700 dark:text-warning-300">
              Coming Soon - Under Development
            </span>
          </div>
        </div>

        {/* Features List */}
        {features.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-ink-900 dark:text-ink-100 mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Planned Features
            </h2>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-ink-600 dark:text-ink-400"
                >
                  <span className="text-primary-500 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Estimated Date */}
        {estimatedDate && (
          <div className="pt-6 border-t border-paper-300 dark:border-paper-600">
            <div className="flex items-center gap-2 text-sm text-ink-600 dark:text-ink-400">
              <Calendar className="h-4 w-4" />
              <span>
                <span className="font-medium">Estimated Release:</span> {estimatedDate}
              </span>
            </div>
          </div>
        )}

        {/* Contact Info */}
        <div className="mt-6 p-4 bg-paper-100 dark:bg-paper-700 rounded">
          <p className="text-sm text-ink-600 dark:text-ink-400">
            <span className="font-medium">Need this feature sooner?</span> Contact your administrator
            to discuss prioritization.
          </p>
        </div>
      </div>
    </div>
  );
}
