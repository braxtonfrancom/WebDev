
function grades(scores) {
    console.log("This is the grades function");
    /* Write a function named 'grades' takes a list of scores and then assigns letter grades such that:
     *
     * Scores within 10% of the greatest score are A's
     * Scores within 20% of the greatest score are B's
     * Scores within 30% of the greatest score are C's
     * Scores within 40% of the greatest score are D's
     * Remaining scores are F's
     */

    console.log("There are " + scores.length + " submissions to grade");

    // The maximum score
    let max = scores[0];
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
        }
    }
    console.log("The greatest score is " + max);

    let decile = max / 10;
    console.log(`The decile boundary is every ${decile} points`);

    A = [];
    B = [];
    C = [];
    D = [];
    F = [];

    for (let s in scores) {
        console.log(`Student #${s} got the score ${scores[s]}`);
    }

    // Number of scores that fall into each letter grade

    // Each student's letter grade and score where students are identified by the

    // order of their submission (student #0, student #1, etc.)
}

const scores = [75, 74, 80, 75, 47, 37, 73, 34, 70, 60, 53, 77, 72, 67];

grades(scores);

/* Hints:
 * To loop over an array by index, use `for (var i in array)`
 * To loop over an array by value, use `for (var v of array)`
 * Append items to an array with the `.push()` method
 * For our purposes, objects are constructed identically to Python dictionaries:
 *  var obj = {one: 1, two: 'dos', three: []};
 */
