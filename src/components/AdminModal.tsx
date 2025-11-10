import React, { ReactNode } from 'react';

export interface AdminModalTab {
  id: string;
  label: string;
  content: ReactNode;
}

export interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  onSubmit?: (formData: FormData) => void;
  isSaving?: boolean;
  tabs: AdminModalTab[];
  activeTabId: string;
  onTabChange: (tabId: string) => void;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | 'full';
  height?: string;
  formId?: string;
  children?: ReactNode;
  customFooterActions?: ReactNode;
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '4xl': 'max-w-4xl',
  '6xl': 'max-w-6xl',
  'full': 'max-w-full'
};

export function AdminModal({
  isOpen,
  onClose,
  title,
  subtitle,
  onSubmit,
  isSaving = false,
  tabs,
  activeTabId,
  onTabChange,
  size = '6xl',
  height = '80vh',
  formId = 'admin-modal-form',
  children,
  customFooterActions
}: AdminModalProps) {
  if (!isOpen) return null;

  const activeTab = tabs.find(tab => tab.id === activeTabId);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      const formData = new FormData(e.currentTarget);
      onSubmit(formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 admin-modal-overlay">
      <div 
        className={`bg-white rounded-lg w-full ${sizeClasses[size]} flex flex-col overflow-hidden shadow-2xl admin-modal-content`}
        style={{ height: height }}
      >
        {/* Overlay for navigation (visible but not interactive) */}
        <div className="fixed inset-0 pointer-events-none admin-modal-sidebar-placeholder" />
        {/* Modal Header */}
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>

        {/* Tab Navigation */}
        {tabs.length > 1 && (
          <div className="border-b border-gray-200 bg-white">
            <nav className="-mb-px flex items-center px-6 admin-modal-tabs" aria-label="Tabs">
              {tabs.map((tab, index) => (
                <React.Fragment key={tab.id}>
                  <button
                    type="button"
                    onClick={() => onTabChange(tab.id)}
                    className={`whitespace-nowrap border-b-2 py-3 px-4 text-sm font-medium transition-colors ${
                      activeTabId === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                    aria-current={activeTabId === tab.id ? 'page' : undefined}
                  >
                    {tab.label}
                  </button>
                  {index < tabs.length - 1 && (
                    <div className="admin-modal-tab-separator" />
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        )}

        {/* Modal Content - Form wrapper or direct content */}
        {onSubmit ? (
          <form
            className="flex-1 overflow-y-auto min-h-0 h-0 px-6 py-6 admin-modal-form"
            onSubmit={handleFormSubmit}
            id={formId}
          >
            {activeTab?.content || children}
          </form>
        ) : (
          <div 
            className="flex-1 overflow-y-auto min-h-0 h-0 px-6 py-6 admin-modal-content-area"
          >
            {activeTab?.content || children}
          </div>
        )}

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t bg-gray-50 flex justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
            disabled={isSaving}
          >
            Cancel
          </button>
          <div className="flex gap-3">
            {customFooterActions}
            {onSubmit && (
              <button
                type="submit"
                form={formId}
                disabled={isSaving}
                className="px-4 py-2 text-sm bg-primary-600 text-white rounded hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminModal;