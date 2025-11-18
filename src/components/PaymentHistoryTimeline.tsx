import StatusBadge from './StatusBadge';
import DateDisplay from './DateDisplay';
import { Clock, User, FileText } from 'lucide-react';

/**
 * Map payment status to StatusBadge compatible status
 */
function mapPaymentStatus(status: string): 'paid' | 'pending' | 'overdue' | 'cancelled' | 'success' | 'warning' | 'error' | 'info' {
  const statusLower = status.toLowerCase();
  
  // Direct matches
  if (statusLower === 'paid') return 'paid';
  if (statusLower === 'pending') return 'pending';
  if (statusLower === 'cancelled' || statusLower === 'canceled') return 'cancelled';
  if (statusLower === 'overdue') return 'overdue';
  
  // Common payment status mappings
  if (statusLower === 'approved' || statusLower === 'completed') return 'success';
  if (statusLower === 'processing' || statusLower === 'scheduled') return 'info';
  if (statusLower === 'failed' || statusLower === 'rejected') return 'error';
  if (statusLower === 'on hold' || statusLower === 'held') return 'warning';
  
  // Default fallback
  return 'info';
}

export interface PaymentStatusHistoryEntry {
  id: string;
  paymentTransactionId: string;
  previousStatus: string;
  newStatus: string;
  reason: string;
  changedBy: string;
  changedByName?: string;
  changedAt: string;
  metadata?: Record<string, unknown>;
}

interface PaymentHistoryTimelineProps {
  /** Array of payment status history entries */
  history: PaymentStatusHistoryEntry[];
  /** Loading state */
  loading?: boolean;
  /** Error message */
  error?: string | null;
}

/**
 * PaymentHistoryTimeline Component
 * 
 * Displays a vertical timeline of payment status changes with:
 * - Status badges with color coding
 * - Formatted timestamps showing when changes occurred
 * - User information for who made the change
 * - Optional reason text explaining the change
 * - Newest entries at the top
 * 
 * Used in: Payment tracking modal, payment detail pages
 */
export function PaymentHistoryTimeline({ 
  history, 
  loading = false, 
  error = null 
}: PaymentHistoryTimelineProps) {
  // Handle loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-sm text-gray-600">Loading history...</span>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-center">
          <div className="text-red-600 text-sm">
            <strong>Error:</strong> {error}
          </div>
        </div>
      </div>
    );
  }

  // Handle empty state
  if (!history || history.length === 0) {
    return (
      <div className="text-center py-12">
        <Clock className="h-12 w-12 text-gray-400 mx-auto mb-3" />
        <p className="text-sm text-gray-600">No status history available</p>
        <p className="text-xs text-gray-500 mt-1">
          Status changes will appear here when they occur
        </p>
      </div>
    );
  }

  // Sort history by date descending (newest first)
  const sortedHistory = [...history].sort((a, b) => 
    new Date(b.changedAt).getTime() - new Date(a.changedAt).getTime()
  );

  return (
    <div className="space-y-6">
      {/* Timeline container */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

        {/* Timeline entries */}
        <div className="space-y-6">
          {sortedHistory.map((entry, index) => (
            <div key={entry.id} className="relative pl-10">
              {/* Timeline dot */}
              <div className={`absolute left-2 w-4 h-4 rounded-full border-2 border-white ${
                index === 0 ? 'bg-blue-600' : 'bg-gray-400'
              }`} />

              {/* Entry content card */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  {/* Status badge */}
                  <div className="flex items-center gap-2">
                    <StatusBadge 
                      status={mapPaymentStatus(entry.newStatus)} 
                      label={entry.newStatus}
                    />
                    {index === 0 && (
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Timestamp */}
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="h-3.5 w-3.5" />
                    <DateDisplay 
                      date={entry.changedAt} 
                      format="medium"
                    />
                  </div>
                </div>

                {/* Changed by user */}
                {entry.changedBy && (
                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                    <User className="h-3.5 w-3.5" />
                    <span>
                      Changed by <span className="font-medium">{entry.changedBy}</span>
                    </span>
                  </div>
                )}

                {/* Reason (if provided) */}
                {entry.reason && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-start gap-2">
                      <FileText className="h-4 w-4 text-gray-400 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-xs font-medium text-gray-700 mb-1">Reason:</p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {entry.reason}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary footer */}
      <div className="text-center pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          {sortedHistory.length} status {sortedHistory.length === 1 ? 'change' : 'changes'} recorded
        </p>
      </div>
    </div>
  );
}
