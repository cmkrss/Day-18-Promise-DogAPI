document.addEventListener("DOMContentLoaded", function() {
    const fetchButton = document.getElementById("fetchButton");
    const imageContainer = document.getElementById("imageContainer");

    // Function to fetch and display a random dog image
    function fetchRandomDogImage() {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    const imageUrl = data.message;
                    const imageElement = document.createElement("img");
                    imageElement.src = imageUrl;
                    imageContainer.innerHTML = ""; // Clear previous image
                    imageContainer.appendChild(imageElement);
                } else {
                    console.error("Failed to fetch image:", data.message);
                }
            })
            .catch(error => {
                console.error("Error fetching image:", error);
            });
    }

    // Fetch new image when the button is clicked
    fetchButton.addEventListener("click", fetchRandomDogImage);

    // Fetch initial image when the page loads
    fetchRandomDogImage();
});
