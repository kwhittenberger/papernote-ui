# Bug: Gutter Dot Tooltip Shows Behind PageLayout Content

## Description
The tooltip that appears when hovering over gutter dots is rendering behind the PageLayout content, making it unreadable.

## Current Behavior
When hovering over a gutter dot, the tooltip appears but is partially or fully obscured by the PageLayout content.

## Expected Behavior
The gutter dot tooltip should appear above all other content (higher z-index) so it is always fully visible.

## Steps to Reproduce
1. Open any page that uses PageLayout with multiple sections
2. Hover over a gutter dot
3. Observe that the tooltip appears behind page content

## Technical Details
This is likely a z-index issue where the tooltip container needs a higher z-index value than the PageLayout content area.

## Priority
High - affects usability of the navigation feature

## Component
PageLayout / PageNavigation / Tooltip
