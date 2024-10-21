import Greet from "./Greet";
import {render, screen } from '@testing-library/React';

test('greet rendered successfully',() => {
    render(<Greet/>)
    const testElement= screen.getByText('Greet')
    expect(testElement).toBeInTheDocument

})