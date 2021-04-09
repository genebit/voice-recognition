var api_url = "https://speech.googleapis.com/v1p1beta1/speech:recognize";

fetch(api_url)
     .then((resp) => resp.json())
     .then(function (data) {
          let authors = data.results;
          return authors.map(function (author) {
               let li = createNode('li');
               let img = createNode('img');
               let span = createNode('span');
               img.src = author.picture.medium;
               span.innerHTML = `${author.name.first} ${author.name.last}`;
               append(li, img);
               append(li, span);
               append(ul, li);
          })
     })
     .catch(function (error) {
          console.log(error);
     });