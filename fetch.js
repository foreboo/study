        const root = document.getElementById("root");
        const targetFile = document.location.search.replace('?', '');
        fetch("https://foreboo.github.io/study/" + targetFile)
        .then((Response) => {
            return Response.text();
        })
        .then(data => {
            root.innerHTML = data;
        });
        console.log("勉強しろ!");