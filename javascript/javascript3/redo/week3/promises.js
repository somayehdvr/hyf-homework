Promise.all([
    fetch('https://api.github.com/search/repositories?q=user:alina-kho'),
    fetch('https://api.github.com/search/repositories?q=user:hassou2n'),
    fetch('https://api.github.com/search/repositories?q=user:rismita87')
]).then(results => Promise.all(results.map(results => results.json())))
.then(data =>
    data.forEach(element =>
        console.log('url: ' + element.items[0].url,
                    'fullname: ' + element.items[0].full_name,
                    'owner: ' + element.items[0].owner.login
        ))
)