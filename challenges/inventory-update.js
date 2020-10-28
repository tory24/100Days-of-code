//Q: Compare and update the inventory in a 2D Array against a 2nd 2D Array of a fresh delivery.
//Update the current existing inventory item quantities(in arr1).
function updateInventory(arr1, arr2) {
    if (arr1.length === 0) {
        arr1 = arr2;
    } else {
        arr1.forEach(x => {
            arr2.forEach(y => {
                return (x[1].includes(y[1])) ? x[0] += y[0] :
                    (arr1.every(x => x[1] !== y[1])) ? arr1.push(y) : x;
            });
        });
    };
    return arr1.sort(function(a,b) { return (a[1] < b[1]) ? -1 : 1;});
};

updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
//I think this can be improved by adding each new item in order at the time it gets pushed to arr1.
