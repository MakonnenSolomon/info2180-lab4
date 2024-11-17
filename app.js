document.getElementById('searchBtn').addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'superheroes.php', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            alert(xhr.responseText);
        }
    };
    xhr.send();
});