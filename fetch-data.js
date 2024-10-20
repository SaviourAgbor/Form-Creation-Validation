// Define an async function to fetch user data
async function fetchUserData() {
  // Define the API URL
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  // Select the container where the user data will be displayed
  const dataContainer = document.getElementById("api-data");

  try {
    // Fetch data from the API and await its response
    const response = await fetch(apiUrl);

    // Check if the response is OK, else throw an error
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Convert the response to JSON and store it in users
    const users = await response.json();

    // Clear the existing loading message
    dataContainer.innerHTML = "";

    // Create a <ul> element to contain the list of users
    const userList = document.createElement("ul");

    // Loop through each user in the users array
    users.forEach((user) => {
      // Create a <li> element for each user
      const listItem = document.createElement("li");
      // Set the text content of <li> to the user's name
      listItem.textContent = user.name;
      // Append the <li> to the <ul>
      userList.appendChild(listItem);
    });

    // Append the <ul> to the data container
    dataContainer.appendChild(userList);
  } catch (error) {
    // In case of error, clear the loading message and show an error message
    dataContainer.innerHTML = "Failed to load user data.";
    console.error("There was an error fetching the user data:", error);
  }
}

// Ensure the fetchUserData function runs when the document has fully loaded
document.addEventListener("DOMContentLoaded", fetchUserData);
