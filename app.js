const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.style.setProperty("--active-index", index)
        }
    });

function showPopup(id) {
        // Get the popup content element
        var popup = document.getElementById(id);
    
        // Set its display property to "block" to make it visible
        popup.style.display = "flex";
    }
    
function hidePopup(id) {
        // Get the popup content element
        var popup = document.getElementById(id);
    
        // Set its display property to "none" to hide it
        popup.style.display = "none";
}