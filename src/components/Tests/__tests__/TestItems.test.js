import React from 'react';
import { render, screen } from '@testing-library/react';
import TestItems from '../TestItems';

const mockTestsArr = [
	{
		_id: '1',
		name: 'harry',
	},
	{
		_id: '2',
		name: 'billy',
	},
];

test('should render component title', () => {
	render(<TestItems title={'Test Items'} />);
	const titleText = screen.getByRole('heading');
	expect(titleText).toHaveTextContent(/test items/i);
});

test('should render ui element', () => {
	render(<TestItems tests={mockTestsArr} />);
	const uiElement = screen.getByRole('list');
	expect(uiElement).toBeInTheDocument();
});

test('should render li elements', () => {
	render(<TestItems tests={mockTestsArr} />);
	const liElements = screen.getAllByRole('listitem');
	expect(liElements).toHaveLength(2);
});
