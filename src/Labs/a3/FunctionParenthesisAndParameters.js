const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
function FunctionParenthesisAndParameters(){
    return(
        <>
        <h3>Parenthesis and parameters</h3>
        twoSquared = {twoSquared}<br/>
        Square(2) = {square(2)}<br/>
        threePlusOne = {threePlusOne}<br/>
        plusOne(3) = {plusOne(2)}<br/>
        </>
    )
}
export default FunctionParenthesisAndParameters