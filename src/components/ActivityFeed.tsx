import { Activity } from 'lucide-react';
import { CollaboratorAvatars, Collaborator } from './CollaboratorAvatars';
import Button from './Button';

export interface ActivityItem {
  /** Unique identifier for the activity */
  id: string;
  /** User who performed the action */
  user: Collaborator;
  /** Description of the action */
  action: string;
  /** Optional target of the action (e.g., document name) */
  target?: string;
  /** When the activity occurred */
  timestamp: Date;
  /** Optional custom icon */
  icon?: React.ReactNode;
}

export interface ActivityFeedProps {
  /** Array of activities to display */
  activities: ActivityItem[];
  /** Maximum number of items to display */
  maxItems?: number;
  /** Whether to show timestamps */
  showTimestamps?: boolean;
  /** Callback to load more activities */
  onLoadMore?: () => void;
  /** Whether more items are being loaded */
  loading?: boolean;
  /** Additional CSS classes */
  className?: string;
}

// Format relative time
function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

/**
 * ActivityFeed - Timeline of collaborative activity.
 * 
 * Features:
 * - Displays activities in a vertical timeline
 * - Shows user avatars with actions
 * - Relative timestamps
 * - Load more functionality
 * - Custom icons per activity
 */
export function ActivityFeed({
  activities,
  maxItems,
  showTimestamps = true,
  onLoadMore,
  loading = false,
  className = '',
}: ActivityFeedProps) {
  const displayedActivities = maxItems ? activities.slice(0, maxItems) : activities;
  const hasMore = maxItems ? activities.length > maxItems : false;

  if (activities.length === 0) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <Activity className="w-8 h-8 text-ink-300 mx-auto mb-2" />
        <p className="text-ink-500 text-sm">No activity yet</p>
      </div>
    );
  }

  return (
    <div className={`${className}`} role="feed" aria-label="Activity feed">
      <div className="space-y-4">
        {displayedActivities.map((activity, index) => (
          <div
            key={activity.id}
            className="flex gap-3"
            role="article"
            aria-label={`${activity.user.name} ${activity.action}${activity.target ? ` ${activity.target}` : ''}`}
          >
            {/* Timeline connector */}
            <div className="flex flex-col items-center">
              <CollaboratorAvatars
                collaborators={[activity.user]}
                max={1}
                size="sm"
              />
              {index < displayedActivities.length - 1 && (
                <div className="w-0.5 flex-1 bg-paper-200 mt-2" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pb-4">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-ink-700">
                    <span className="font-medium text-ink-800">
                      {activity.user.name}
                    </span>
                    {' '}
                    {activity.action}
                    {activity.target && (
                      <>
                        {' '}
                        <span className="font-medium text-ink-800">
                          {activity.target}
                        </span>
                      </>
                    )}
                  </p>
                </div>

                {/* Icon or timestamp */}
                <div className="flex items-center gap-2 shrink-0">
                  {activity.icon && (
                    <span className="text-ink-400">
                      {activity.icon}
                    </span>
                  )}
                  {showTimestamps && (
                    <span className="text-xs text-ink-400 whitespace-nowrap">
                      {formatRelativeTime(activity.timestamp)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load more */}
      {(hasMore || onLoadMore) && (
        <div className="mt-4 text-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={onLoadMore}
            loading={loading}
          >
            {loading ? 'Loading...' : 'Load more'}
          </Button>
        </div>
      )}
    </div>
  );
}

export default ActivityFeed;
