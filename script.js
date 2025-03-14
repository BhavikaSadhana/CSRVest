document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signup-form");
    const userList = document.getElementById("user-list");

    // Load existing users from local storage
    function loadUsers() {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        userList.innerHTML = "";
        users.forEach((user) => {
            const li = document.createElement("li");
            li.textContent = user.name + " (" + user.email + ")";
            userList.appendChild(li);
        });
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Validate password match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Save user to local storage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ name, email });
        localStorage.setItem("users", JSON.stringify(users));

        // Update user list
        loadUsers();

        // Clear form fields
        form.reset();
        alert("Registration successful!");
    });

    // Load users when page loads
    loadUsers();
});
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Simulate form submission
        document.getElementById("formMessage").innerText =
            "Thank you! We will get back to you soon.";
        contactForm.reset();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    renderCharts();
});

function renderCharts() {
    const ctx1 = document.getElementById("csrTopStates").getContext("2d");
    new Chart(ctx1, {
        type: "bar",
        data: {
            labels: [
                "Maharashtra",
                "Gujarat",
                "Karnataka",
                "Tamil Nadu",
                "Delhi",
                "UP",
                "Rajasthan",
                "Punjab",
                "Odisha",
                "AP"
            ],
            datasets: [{
                label: "Amount Spent (in Cr)",
                data: [6000, 5000, 4500, 4000, 3800, 3500, 3000, 2800, 2500, 2300],
                backgroundColor: "rgba(54, 162, 235, 0.6)"
            }]
        },
        options: {
            responsive: true
        }
    });

    const ctx2 = document.getElementById("csrTopCompanies").getContext("2d");
    new Chart(ctx2, {
        type: "horizontalBar",
        data: {
            labels: [
                "HDFC Bank",
                "TCS",
                "Reliance",
                "ICICI Bank",
                "Tata Steel",
                "ONGC",
                "Infosys",
                "ITC",
                "NTPC",
                "Power Grid"
            ],
            datasets: [{
                label: "CSR Spend (in Cr)",
                data: [
                    803.15, 774.44, 743.4, 476.55, 475.11, 453.68, 390.17, 322.69,
                    319.98, 310.51
                ],
                backgroundColor: "rgba(255, 99, 132, 0.6)"
            }]
        },
        options: {
            responsive: true
        }
    });
}
// Optional: Add an animation effect when scrolling
document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".info-box");

    function checkVisibility() {
        boxes.forEach((box) => {
            const rect = box.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                box.style.transform = "scale(1)";
                box.style.opacity = "1";
            }
        });
    }

    // Initial check and event listener
    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
});
document.querySelectorAll(".swot-item").forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.style.transform = "scale(1.05)";
        item.style.transition = "0.3s ease-in-out";
    });
    item.addEventListener("mouseout", () => {
        item.style.transform = "scale(1)";
    });
});

document.querySelectorAll(".service-box").forEach((box) => {
    box.addEventListener("mouseover", () => {
        box.style.transform = "scale(1.05)";
        box.style.transition = "0.3s ease-in-out";
    });

    box.addEventListener("mouseout", () => {
        box.style.transform = "scale(1)";
    });
});

document.querySelectorAll(".phase-box").forEach((box) => {
    box.addEventListener("mouseover", () => {
        box.style.transform = "scale(1.05)";
        box.style.transition = "0.3s ease-in-out";
    });

    box.addEventListener("mouseout", () => {
        box.style.transform = "scale(1)";
    });
});

function searchWebsite() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let elements = document.querySelectorAll("main *");
    let resultsDiv = document.getElementById("searchResults");
    resultsDiv.innerHTML = ""; // Clear previous results

    if (input.length === 0) {
        resultsDiv.style.display = "none";
        return;
    }

    let found = false;

    elements.forEach((element) => {
        if (element.children.length === 0) {
            // Only target text elements
            let text = element.innerText.toLowerCase();
            if (text.includes(input)) {
                found = true;

                // Highlight the matching word
                let regex = new RegExp(`(${input})`, "gi");
                let newText = element.innerText.replace(regex, "<mark>$1</mark>");
                element.innerHTML = newText;

                // Add to results list
                let resultItem = document.createElement("div");
                resultItem.innerHTML = `<p>Found: <b>${element.innerText}</b></p>`;
                resultsDiv.appendChild(resultItem);
            }
        }
    });

    resultsDiv.style.display = found ? "block" : "none";
    if (!found) resultsDiv.innerHTML = "<p>No results found.</p>";
}