// Have both terminals set up, make sure to make the server public!
// Add your base URL that will be used to build the paths
const baseURL = "...";

// Task 3: Debug Fetch Call to GET Route

/*
async function getAllMenuItems() {
  const res = await fetch(baseURL + 'menus');
  const data = await res.json();
  console.log("All Menu Items:", data);
}

getAllMenuItems();
*/

// Once you verify it works, go back to index.js for Task 4

// Task 5: Debug Fetch Call to POST Route
/*
async function addNewItem(name, cost, rating, review) {
  const res = await fetch(baseURL + '/menu/new', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, cost, rating, review }),
  });
  console.log("New Item Added:", res);
}

addNewItem("Fries", 3.5, 4, "Crispy and golden");
*/

// Once you verify it works, go back to index.js for Task 6

// Task 7: Debug Fetch Call to PATCH Route

/*
async function updateItemCost(name, newCost) {
  const res = await fetch(baseURL + '/menu/update/' + name, {
    method: "UPDATE",
    headers: { "Content-Type": "application/json" },
    body: { cost: newCost }
  });
  const data = await res.json();
  console.log("Updated Item:", data);
}

updateItemCost("Fries", 2.99);
*/

// Once you verify it works, go back to index.js for Task 8

// Task 9: Debug Fetch Call to DELETE Route
/*
function deleteItem(name) {
  const res = await fetch(baseURL + '/delete/' + name, {
    method: "DELETE",
  });
  const data = await res.json();
  console.log("Deleted Item:", data);
}

deleteItem("Fries");
*/
