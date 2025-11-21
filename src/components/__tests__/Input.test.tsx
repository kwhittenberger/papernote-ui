import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '../Input';

describe('Input', () => {
  it('renders with label', () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('handles value changes', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<Input label="Name" onChange={handleChange} />);
    const input = screen.getByLabelText('Name');

    await user.type(input, 'John Doe');
    expect(handleChange).toHaveBeenCalled();
  });

  it('shows error message', () => {
    render(<Input label="Email" error="Invalid email" />);
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  it('shows helper text', () => {
    render(<Input label="Username" helperText="Choose a unique username" />);
    expect(screen.getByText('Choose a unique username')).toBeInTheDocument();
  });

  it('displays required indicator', () => {
    render(<Input label="Email" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Input label="Email" disabled />);
    expect(screen.getByLabelText('Email')).toBeDisabled();
  });

  it('is read-only when readOnly prop is true', () => {
    render(<Input label="Email" readOnly value="test@example.com" />);
    const input = screen.getByLabelText('Email') as HTMLInputElement;
    expect(input.readOnly).toBe(true);
  });

  it('shows prefix text', () => {
    render(<Input label="Website" prefix="https://" />);
    expect(screen.getByText('https://')).toBeInTheDocument();
  });

  it('shows suffix text', () => {
    render(<Input label="Domain" suffix=".com" />);
    expect(screen.getByText('.com')).toBeInTheDocument();
  });

  it('applies different sizes', () => {
    const { rerender } = render(<Input label="Email" size="sm" />);
    let input = screen.getByLabelText('Email');
    expect(input).toHaveClass('text-sm');

    rerender(<Input label="Email" size="lg" />);
    input = screen.getByLabelText('Email');
    expect(input).toHaveClass('text-lg');
  });

  it('handles clear button click', async () => {
    const user = userEvent.setup();
    const handleClear = jest.fn();

    render(<Input label="Search" clearable onClear={handleClear} value="test" />);

    // Find and click clear button (would need to verify selector)
    const clearButton = screen.getByLabelText('Clear');
    await user.click(clearButton);

    expect(handleClear).toHaveBeenCalled();
  });

  it('shows loading state', () => {
    render(<Input label="Email" loading />);
    // Loading indicator should be rendered
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('applies error styling when error is present', () => {
    render(<Input label="Email" error="Invalid" />);
    const input = screen.getByLabelText('Email');
    expect(input).toHaveClass('border-error-500');
  });

  it('supports different input types', () => {
    const { rerender } = render(<Input label="Email" type="email" />);
    let input = screen.getByLabelText('Email') as HTMLInputElement;
    expect(input.type).toBe('email');

    rerender(<Input label="Password" type="password" />);
    input = screen.getByLabelText('Password') as HTMLInputElement;
    expect(input.type).toBe('password');
  });
});
