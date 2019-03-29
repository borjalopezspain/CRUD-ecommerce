const store = new Vuex.Store({
    state: {
        id: '',
        product: {},
        modify: ''
    },
    mutations: {
        setProduct(state, value){
            state.id = value;
        },
        setProductValues(state, value){
            state.product = value;
        },
        modifyProduct(state, value){
            state.modify = value;
        },
    },
});

export default store;