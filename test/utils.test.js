import { renderParticipant, renderWorkshop } from '../render-utils.js';

const test = QUnit.test;

test('should return a div(class workshop) with a p(class workshop-name)', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="workshop"><p class="workshop-name">10xGravity Yoga</p></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderWorkshop({
        name: '10xGravity Yoga',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('should return p(class participant) ', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<p class="participant">Goku</p>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderParticipant({
        name: 'Goku',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
