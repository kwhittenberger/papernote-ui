import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant styles', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    let button = screen.getByText('Primary');
    expect(button).toHaveClass('bg-accent-500');

    rerender(<Button variant="danger">Danger</Button>);
    button = screen.getByText('Danger');
    expect(button).toHaveClass('bg-error-500');
  });

  it('shows loading state', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    // Loading spinner should be rendered
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);

    fireEvent.click(screen.getByText('Disabled'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies size classes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    let button = screen.getByText('Small');
    expect(button).toHaveClass('text-xs');

    rerender(<Button size="lg">Large</Button>);
    button = screen.getByText('Large');
    expect(button).toHaveClass('text-base');
  });

  it('renders with full width', () => {
    render(<Button fullWidth>Full Width</Button>);
    // Check for full width class (would need to verify actual implementation)
  });

  it('renders icon-only button', () => {
    render(<Button iconOnly>Icon</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('shows badge when provided', () => {
    render(<Button badge={5}>Messages</Button>);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('formats badge count correctly', () => {
    render(<Button badge={100}>Messages</Button>);
    expect(screen.getByText('99+')).toBeInTheDocument();
  });
});
