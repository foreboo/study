/*
    <script defer>
        const root = document.getElementById("root");
        const targetFile = document.location.search.replace('?', '');
        console.log(document.location.host + document.location.pathname + targetFile);
        fetch(document.location.pathname + targetFile)
        .then((Response) => {
            return Response.text();
        })
        .then(data => {
            root.innerHTML = data;
        });
        console.log("勉強しろ!");
    </script>
*/