
function List(){

    /*

    const fruits = ["apple", "orange", "banana"]

    const listItems = fruits.map(fruit => <li>{fruit}</li> );

    return(<ol>{listItems}</ol>);

    */

    const fruits = [
                    {id: 1, name: "apple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45}, 
                    {id: 3, name: "banana", calories: 105}, 
                    {id: 4, name: "coconut", calories: 159}, 
                    {id: 5, name: "pineapple", calories: 37}
                ];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)) // ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name)) // REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories) // NUMERIC ORDER
    // fruits.sort((a, b) => b.calories - a.calories) // DESCENDING ORDER

    const listItems = fruits.map
        (fruit => 
            <li key={fruit.id}>
                {fruit.name}: &nbsp;
                <b>{fruit.calories}</b>
            </li>
        );

    // FILTERING
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)

    const lowCalFruitsList = lowCalFruits.map
        (lowCalFruit => 
            <li key={lowCalFruit.id}>
                {lowCalFruit.name}: &nbsp;
                <b>{lowCalFruit.calories}</b>
            </li>
        );

    const highCalFruits = fruits.filter(fruit => fruit.calories > 100)

    const highCalFruitsList = highCalFruits.map
        (highCalFruits => 
            <li key={highCalFruits.id}>
                {highCalFruits.name}: &nbsp;
                <b>{highCalFruits.calories}</b>
            </li>
        );

    return(
        <>
            <ol>{listItems}</ol>
            <ol>{lowCalFruitsList}</ol>
            <ol>{highCalFruitsList}</ol>
        </>
    );
}

export default List