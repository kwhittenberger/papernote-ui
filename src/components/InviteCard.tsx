import { useState } from 'react';
import { Send, Clock, X, Mail } from 'lucide-react';
import Button from './Button';
import Input from './Input';
import Stack from './Stack';
import Text from './Text';

export interface PendingInvite {
  /** Email address of the invitee */
  email: string;
  /** When the invitation was sent */
  sentAt: Date;
}

export interface InviteCardProps {
  /** Callback when an invitation is sent */
  onInvite: (email: string) => void;
  /** List of pending invitations */
  pending?: PendingInvite[];
  /** Whether an invitation is being sent */
  loading?: boolean;
  /** Maximum pending invites to display */
  maxPending?: number;
  /** Callback to cancel a pending invite */
  onCancelInvite?: (email: string) => void;
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

// Simple email validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * InviteCard - Card for inviting collaborators via email.
 * 
 * Features:
 * - Email input with validation
 * - Send button with loading state
 * - List of pending invitations
 * - Cancel pending invites
 * - Relative timestamps for pending
 */
export function InviteCard({
  onInvite,
  pending = [],
  loading = false,
  maxPending = 5,
  onCancelInvite,
  className = '',
}: InviteCardProps) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const displayedPending = pending.slice(0, maxPending);
  const hasMorePending = pending.length > maxPending;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedEmail = email.trim();
    
    if (!trimmedEmail) {
      setError('Email is required');
      return;
    }
    
    if (!isValidEmail(trimmedEmail)) {
      setError('Please enter a valid email address');
      return;
    }

    // Check if already invited
    if (pending.some((p) => p.email.toLowerCase() === trimmedEmail.toLowerCase())) {
      setError('This email has already been invited');
      return;
    }
    
    setError(null);
    onInvite(trimmedEmail);
    setEmail('');
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (error) {
      setError(null);
    }
  };

  return (
    <div
      className={`
        bg-white
        rounded-xl
        border border-paper-200
        shadow-card
        p-4
        ${className}
      `}
    >
      <Stack gap="md">
        {/* Header */}
        <Stack direction="horizontal" gap="sm" align="center">
          <div className="p-2 bg-accent-100 rounded-lg">
            <Mail className="w-5 h-5 text-accent-600" />
          </div>
          <div>
            <Text weight="semibold" className="text-ink-800">Invite People</Text>
            <Text size="sm" className="text-ink-500">Share access via email</Text>
          </div>
        </Stack>

        {/* Invite form */}
        <form onSubmit={handleSubmit}>
          <Stack direction="horizontal" gap="sm">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                validationState={error ? 'error' : undefined}
                validationMessage={error || undefined}
                disabled={loading}
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              loading={loading}
              disabled={!email.trim()}
              icon={<Send className="w-4 h-4" />}
            >
              Send
            </Button>
          </Stack>
        </form>

        {/* Pending invites */}
        {displayedPending.length > 0 && (
          <Stack gap="sm">
            <Stack direction="horizontal" gap="xs" align="center">
              <Clock className="w-4 h-4 text-ink-400" />
              <Text size="sm" className="text-ink-500">
                Pending invitations ({pending.length})
              </Text>
            </Stack>
            
            <div className="border border-paper-200 rounded-lg divide-y divide-paper-200">
              {displayedPending.map((invite) => (
                <div
                  key={invite.email}
                  className="px-3 py-2 flex items-center justify-between"
                >
                  <Stack gap="xs">
                    <Text size="sm" weight="medium" className="text-ink-700">
                      {invite.email}
                    </Text>
                    <Text size="xs" className="text-ink-400">
                      Sent {formatRelativeTime(invite.sentAt)}
                    </Text>
                  </Stack>
                  
                  {onCancelInvite && (
                    <button
                      onClick={() => onCancelInvite(invite.email)}
                      className="p-1 rounded hover:bg-paper-100 text-ink-400 hover:text-error-500 transition-colors"
                      aria-label={`Cancel invitation to ${invite.email}`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
              
              {hasMorePending && (
                <div className="px-3 py-2 text-center">
                  <Text size="sm" className="text-ink-400">
                    +{pending.length - maxPending} more
                  </Text>
                </div>
              )}
            </div>
          </Stack>
        )}
      </Stack>
    </div>
  );
}

export default InviteCard;
