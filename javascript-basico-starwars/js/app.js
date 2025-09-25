const LIST = [{
    id: 1,
    nome: 'C3pO',
    avatar: 'images/c3po.png'
},
{
    id: 1,
    nome: 'Chewbacca',
    avatar: 'images/chewbacca.png'
},
{
    id: 1,
    nome: 'Han Solo',
    avatar: 'images/hansolo.png'
},
{
    id: 1,
    nome: 'Princesa Leia',
    avatar: 'images/leia.png'
},
{
    id: 1,
    nome: 'Luke Skywalker',
    avatar: 'images/luke.png'
},
{
    id: 1,
    nome: 'R2D2',
    avatar: 'images/r2d2.png'
},
{
    id: 1,
    nome: 'Darth Vader',
    avatar: 'images/vader.png'
},
{
    id: 1,
    nome: 'Mestre Yoda',
    avatar: 'images/yoda.png'
}
]


const App = new Vue({
    el: '#app',
    data: {
        title: 'Statr Wars Lego',
        userName: 'Michelle',
        characters: LIST
    },
    methods: {
        like(userName) {
            alert(`O personagem ${userName} recebeu um like!`)
        }
    }
})