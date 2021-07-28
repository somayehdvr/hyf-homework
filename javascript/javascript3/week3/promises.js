Promise.all([
    fetch('https://api.github.com/search/repositories?q=user:OlenaKasian'),
    fetch('https://api.github.com/search/repositories?q=user:simonreddy2001'),
    fetch('https://api.github.com/search/repositories?q=user:Sarulathaanbu')
  ]).then(response => 
    response.forEach(element => 
        console.log('url: ' + element.url, 
                    'fullname: ' + element.fullname,
                    'owner: ' + element.owner)));