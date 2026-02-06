function getMovie() {
const emotion = document.getElementById("emotion").value;
const result = document.getElementById("result");


if (!emotion) {
result.innerHTML = "⚠️ Please select an emotion";
return;
}


fetch("/recommend", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({ emotion })
})
.then(res => res.json())
.then(data => {
result.innerHTML = `🎬 Recommended Movie:<br>${data.movie}`;
});
}