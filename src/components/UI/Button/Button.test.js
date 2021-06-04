import Button from './Button'
import { render, fireEvent } from '@testing-library/react'

describe('Button component', () => {
    it('should render correctly', () => {
        const { getByRole } = render(<Button />)
        getByRole('button')
    })
    it('should render correctly with children', () => {
        const text = 'My Button';
        const { getByText } = render(<Button>{text}</Button>);
        getByText(text)
    })
    it('should pass click', () => {
        const onClick = jest.fn()
        const {queryByRole} = render(<Button onClick={onClick}>Click</Button>)
        fireEvent(
            queryByRole('button'),
            new MouseEvent('click', { bubbles: true})
        )
        expect(onClick).toHaveBeenCalled()
    })
})
