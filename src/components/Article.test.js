import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render } from 'express/lib/response';


const testArticle = {
    headline: 'test Headline',
    author: 'test Author',
    summary: 'test Summary',
    body: 'test Body'
}

test('renders component without errors', ()=> {
    render(<Article />)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={testArticle}/>)
    const headline = screen.queryByText(/test Headline/i)
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article />)
});

test('executes handleDelete when the delete button is pressed', ()=> {
    render(<Article />)
});

//Task List:
//1. Complete all above tests. Create test article data when needed.