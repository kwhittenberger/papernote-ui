// Copyright (c) 2025 kwhittenberger. All rights reserved.
// This file is part of the Commissions Management System (CMMS).
// Proprietary and confidential. Unauthorized copying or distribution is prohibited.

// Core Components
export { default as Button } from './Button';
export type { ButtonProps } from './Button';

export { default as Input } from './Input';
export type { InputProps, ValidationState } from './Input';

export { default as Select } from './Select';
export type { SelectProps, SelectOption } from './Select';

export { default as MultiSelect } from './MultiSelect';
export type { MultiSelectProps, MultiSelectOption } from './MultiSelect';

export { default as Switch } from './Switch';
export type { SwitchProps } from './Switch';

export { default as Textarea } from './Textarea';
export type { TextareaProps } from './Textarea';

export { default as Checkbox } from './Checkbox';
export type { CheckboxProps } from './Checkbox';

export { default as RadioGroup } from './Radio';
export type { RadioGroupProps, RadioOption } from './Radio';

export { default as FilterBar } from './FilterBar';
export type { FilterBarProps, FilterConfig } from './FilterBar';

export { default as StatCard } from './StatCard';
export type { StatCardProps } from './StatCard';
export { default as StatsGrid, StatItem } from './StatsGrid';
export type { StatsGridProps, StatItemProps } from './StatsGrid';


export { default as Separator } from './Separator';
export type { SeparatorProps } from './Separator';

// Layout Components
export { default as Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
export type { CardProps } from './Card';

export { default as Stack } from './Stack';
export type { StackProps } from './Stack';

export { default as Grid } from './Grid';
export type { GridProps } from './Grid';

export { default as GridItem } from './GridItem';
export type { GridItemProps } from './GridItem';

export { default as Box } from './Box';
export type { BoxProps } from './Box';

export { default as Text } from './Text';
export type { TextProps } from './Text';

// Feedback Components
export { default as Toast, ToastContainer } from './Toast';
export type { ToastProps, ToastType } from './Toast';

export { default as Alert } from './Alert';
export type { AlertProps } from './Alert';

export { default as Modal, ModalFooter } from './Modal';
export type { ModalProps } from './Modal';

export { default as ConfirmDialog, useConfirmDialog } from './ConfirmDialog';
export type { ConfirmDialogProps } from './ConfirmDialog';

export { default as Tooltip } from './Tooltip';
export type { TooltipProps } from './Tooltip';

// Navigation Components
export { default as Breadcrumbs } from './Breadcrumbs';
export type { BreadcrumbsProps, BreadcrumbItem } from './Breadcrumbs';

export { default as Tabs } from './Tabs';
export type { TabsProps, Tab } from './Tabs';

export { default as Pagination } from './Pagination';
export type { PaginationProps } from './Pagination';

export { default as StepIndicator } from './StepIndicator';
export type { StepIndicatorProps, Step } from './StepIndicator';

// Data Display Components
export { default as Table } from './Table';
export type { TableProps, Column, SortDirection } from './Table';

export { default as Badge } from './Badge';
export type { BadgeProps } from './Badge';

export { default as Avatar } from './Avatar';
export type { AvatarProps } from './Avatar';

export { default as EmptyState } from './EmptyState';
export type { EmptyStateProps } from './EmptyState';

export { ComingSoon } from './ComingSoon';
export type { ComingSoonProps } from './ComingSoon';

// Loading Components
export { default as Loading, Skeleton, SkeletonCard, SkeletonTable } from './Loading';
export type { LoadingProps } from './Loading';

// Disclosure Components
export { default as Accordion } from './Accordion';
export type { AccordionProps, AccordionItem } from './Accordion';

export { default as Dropdown, DropdownTrigger } from './Dropdown';
export type { DropdownProps, DropdownItem } from './Dropdown';

// File Upload Components
export { default as FileUpload } from './FileUpload';
export type { FileUploadProps, UploadedFile } from './FileUpload';

// Page Navigation
export { PageNavigation } from './PageNavigation';
export type { PageNavigationProps } from './PageNavigation';

// Sidebar Navigation
export { default as Sidebar, SidebarGroup } from './Sidebar';
export type { SidebarProps, SidebarItem, SidebarGroupProps } from './Sidebar';

// Logo
export { default as Logo } from './Logo';
export type { LogoProps } from './Logo';

// User Profile
export { default as UserProfileButton } from './UserProfileButton';
export type { UserProfileButtonProps } from './UserProfileButton';

// Layout
export { default as Layout } from './Layout';
export type { LayoutProps } from './Layout';

export { default as TwoColumnContent } from './TwoColumnContent';
export type { TwoColumnContentProps } from './TwoColumnContent';

export { default as Page } from './Page';
export type { PageProps } from './Page';
export { default as Dashboard, DashboardHeader, DashboardContent } from './Dashboard';
export type { DashboardProps, DashboardHeaderProps, DashboardContentProps } from './Dashboard';
// Status Bar
export { default as StatusBar } from './StatusBar';
export type { StatusBarProps } from './StatusBar';

// Theme Toggle
export { default as ThemeToggle } from './ThemeToggle';
export type { ThemeToggleProps } from './ThemeToggle';

// Search Bar
export { default as SearchBar } from './SearchBar';
export type { SearchBarProps } from './SearchBar';

// Notification Indicator
export { default as NotificationIndicator } from './NotificationIndicator';
export type { NotificationIndicatorProps } from './NotificationIndicator';

// Data Table
export { default as DataTable } from './DataTable';
export type { 
  DataTableColumn, 
  DataTableAction,
  ExpandedRowConfig,
  ExpansionMode
} from './DataTable';

export { default as ExpandedRowEditForm } from './ExpandedRowEditForm';
export type {
  ExpandedRowEditFormProps,
  FormField,
  FormFieldType,
  TextFormField,
  SelectFormField,
  TextareaFormField,
  CheckboxFormField,
  SwitchFormField
} from './ExpandedRowEditForm';

// Display Components
export { default as CurrencyDisplay } from './CurrencyDisplay';
export type { CurrencyDisplayProps } from './CurrencyDisplay';

export { default as DateDisplay } from './DateDisplay';
export type { DateDisplayProps } from './DateDisplay';

export { default as StatusBadge } from './StatusBadge';
export type { StatusBadgeProps } from './StatusBadge';

export { default as ExportButton } from './ExportButton';
export type { ExportButtonProps, ExportFormat } from './ExportButton';

// Control Bar
export { 
  ControlBar, 
  createPageControlsSection, 
  createFiltersSection, 
  createActionsSection, 
  createQueryDetailsSection 
} from './ControlBar';
export type { 
  ControlBarProps, 
  ControlBarSection, 
  PageControlsSectionProps, 
  FiltersSectionProps, 
  ActionsSectionProps, 
  QueryDetailsSectionProps 
} from './ControlBar';

// Loading Overlay
export { default as LoadingOverlay } from './LoadingOverlay';
export type { LoadingOverlayProps } from './LoadingOverlay';

// Query Transparency
export { default as QueryTransparency } from './QueryTransparency';
export type { QueryTransparencyProps, QueryTransparencyInfo } from './QueryTransparency';

// App-Specific Layout Components
export { AppLayout } from './AppLayout';
export type { AppLayoutProps } from './AppLayout';

export { PageLayout } from './PageLayout';

export { AdminModal } from './AdminModal';
export type { AdminModalProps, AdminModalTab } from './AdminModal';

// App-Specific Display Components
export { StatsCardGrid } from './StatsCardGrid';

export { default as ActionButton } from './ActionButton';
export type { ActionButtonProps } from './ActionButton';

export { default as ExpandableRowButton } from './ExpandableRowButton';
export type { ExpandableRowButtonProps } from './ExpandableRowButton';

export { default as SplitCommissionBadge } from './SplitCommissionBadge';
export type { SplitCommissionBadgeProps, SplitData } from './SplitCommissionBadge';

export { CardView } from './CardView';
export type { CardViewItem } from './CardView';

export { FilterControls } from './FilterControls';

export { FilterStatusBanner } from './FilterStatusBanner';

export { ExpandableToolbar } from './ExpandableToolbar';
export type { ToolbarSection, ExpandableToolbarProps } from './ExpandableToolbar';

// Status Bar (already exported above, but adding message functions)
export { statusManager, addSuccessMessage, addErrorMessage, addWarningMessage, addInfoMessage } from './StatusBar';
export type { StatusMessage, StatusType } from './StatusBar';

// Navigation Icons
export {
  DashboardIcon,
  CommissionsIcon,
  SalesIcon,
  ReportsIcon,
  AnalyticsIcon,
  UsersIcon,
  AccountsIcon,
  ProductsIcon,
  LocationsIcon,
  RulesIcon,
  WorkflowsIcon,
  SettingsIcon,
  CalendarIcon,
  ChartIcon,
  ClipboardIcon
} from './NavigationIcons';

// Notification Bar
export { default as NotificationBar } from './NotificationBar';

// Permission Gate
export { PermissionGate } from './PermissionGate';
export type { PermissionGateProps } from './PermissionGate';

// Payment History Timeline
export { PaymentHistoryTimeline } from './PaymentHistoryTimeline';
export type { PaymentStatusHistoryEntry } from './PaymentHistoryTimeline';

// Commission Dashboard UI
export { CommissionDashboardUI } from './CommissionDashboardUI';
export type { CommissionDashboardUIProps, CommissionSummary, MonthlyCommission } from './CommissionDashboardUI';

// Chart Visualization UI
export { ChartVisualizationUI } from './ChartVisualizationUI';
export type { ChartVisualizationUIProps, ChartData } from './ChartVisualizationUI';

// Chat UI
export { ChatUI } from './ChatUI';
export type { ChatUIProps, ChatMessage } from './ChatUI';

// Insights Panel UI
export { InsightsPanelUI } from './InsightsPanelUI';
export type { InsightsPanelUIProps, AnalyticsInsight } from './InsightsPanelUI';

// Role Manager
export { RoleManager } from './RoleManager';
export type { RoleManagerProps, Role } from './RoleManager';

// Relationship Manager UI
export { RelationshipManagerUI } from './RelationshipManagerUI';
export type { RelationshipManagerUIProps, AccountStaffAssignmentDto, RelationshipType, UserLookup } from './RelationshipManagerUI';

// Base types
export type {
  BaseDataItem,
  PaginationResponse,
  DataFetchParams,
  SortConfig,
  AppliedFilter,
  UseDataTableOptions,
  UseDataTableReturn,
} from '../types';

// Utilities
export { formatStatisticValue, formatStatistics } from '../utils/statisticsFormatter';
export type { StatisticFormat, StatisticConfig, FormattedStatistic } from '../utils/statisticsFormatter';
