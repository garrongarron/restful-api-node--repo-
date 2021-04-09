new Vue({
    el: '#app',
    data: {
        users: []
    },
    mounted() {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            this.users = data;
        })
        .catch(console.log)
    },
    methods: {
        deleleUser(id) {
            fetch('https://jsonplaceholder.typicode.com/users/' + id, {
                method: 'DELETE'
            })
            .then(() => {
                console.log('deleted');
                let tmp = this.users.filter((a) => {
                    return a.id !== id;
                })
                this.users = tmp;
            })
        },
        updateUser(post) {
            console.log("Updating " + post.id);
            fetch('https://jsonplaceholder.typicode.com/users/' + post.id, {
                method: 'PUT',
                body: JSON.stringify(post),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => console.log(json))
        },
        create() {
            console.log('creating user');
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    name: 'Jhon Doe',
                    email: 'bar@email.com',
                    phone: '444-555'
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.users.push(json);
            })
        }
    }
});