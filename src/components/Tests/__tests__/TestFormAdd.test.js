import { render, screen, fireEvent } from '@testing-library/react';
import TestFormAdd from '../TestFormAdd';

const mockAddTestFunction = jest.fn()
const mockResetFunction = jest.fn()

test('should render component title', () => {
	render(<TestFormAdd title={'Add Test'} />);
	const headerElement = screen.getByRole('heading');
	expect(headerElement).toHaveTextContent(/add test/i);
});

test('should be able to type in input', () => {
	render(<TestFormAdd />);
	const inputElement = screen.getByRole('textbox');
	fireEvent.change(inputElement, { target: { value: 'this is a new test' } });
	expect(inputElement.value).toBe('this is a new test');
});

test('should have empty input when add button is clicked', () => {
	render(<TestFormAdd handleCreateTest={mockAddTestFunction}/>);
	const inputElement = screen.getByRole('textbox');
	const addButtonElement = screen.getByRole('button', { name: /add/i });
	fireEvent.change(inputElement, { target: { value: 'this is a add button test' } });
	fireEvent.click(addButtonElement);
	expect(inputElement.value).toBe('');
});

test('should have empty input when cancel button is clicked',() => {
    render(<TestFormAdd handleResetEditedItem={mockResetFunction}/>)
    const inputElement = screen.getByRole('textbox')
    const cancelButtonElement = screen.getByRole('button', {name: /cancel/i})
    fireEvent.change(inputElement, {target: {value: 'this is a cancel button test'}})
    fireEvent.click(cancelButtonElement)
    expect(inputElement.value).toBe('')
} )
