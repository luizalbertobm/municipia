export const state = () => ({
    list: [{
            id: 1,
            name: 'Luiz Alberto Mesquita',
            email: 'luizalbertobm@gmail.com',
            birthDate: '1984-11-09',
        },
        {
            id: 2,
            name: 'Renata Leite Sobreira',
            email: 'renataleitesg@gmail.com',
            birthDate: '1989-05-07',
        },
        {
            id: 3,
            name: 'Rafael Rabelo',
            email: 'rafaelrabelo@gmail.com',
            birthDate: '1995-11-12',
        },
    ]
})

export const mutations = {
    add(state, text) {
        state.list.push(text);
    },
}