import React from 'react';
import {render, screen} from '@testing-library/react'; 
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import Article from './Article';


const testArticle = {
    headline: 'test headline',
    author: 'test author',
    summary: 'test summary',
    body: 'test body'
}

const autoPressTest = {
    headline: '',
    author: null,
    summary:'',
    body: ''
}

test('renders component without errors', ()=> {
    render(<Article article={testArticle} />)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle} />);
    const headline = screen.queryByText(/test headline/i);
    const author = screen.queryByText(/test author/i);
    const summary = screen.queryByText(/test summary/i);
    const body = screen.queryByText(/test body/i);
    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(body).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={autoPressTest} />);
    const autoAuthor = screen.queryByText(/associated press/i);
    expect(autoAuthor).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', ()=> {
    const handleDelete=jest.fn();
    render(<Article article={testArticle} handleDelete={handleDelete}/>);
    const button = screen.queryByTestId('deleteButton');
    userEvent.click(button);
    expect(handleDelete).toBeCalled();
});

//Task List:
//1. Complete all above tests. Create test article data when needed.