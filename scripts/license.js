$.ajax({
    url: "/LICENSE.txt",
    dataType: "text",
    success: function(data) {
        document.getElementById('license').textContent = data;
    }});

function show_license() {
    if (document.getElementById('license').style.display === "none") {
        document.getElementById('license').style.display = "block";
    }

    else {
        document.getElementById('license').style.display = "none";
    }
}