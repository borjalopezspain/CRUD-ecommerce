import {db, fireRefToCollection} from '../database/connect';

const NewProduct = {
    name: 'NewProduct',
    template: 
    `<div class="main-container new-product">
        <div class="new-product__header">
            <h1>{{title}}</h1>
        </div>
        <div class="new-product__info">
            <div class="info-container">
                <h3>Código</h3>
                <input type="text" v-model="code">
            </div>

            <div class="info-container">
                <h3>Nombre</h3>
                <input type="text" v-model="name">
            </div>

            <div class="info-container">
                <h3>Categoría</h3>
                <select v-model="category">
                    <option v-for="category in categories" v-bind:value="category.text" v-bind:id="category.value">{{category.text}}</option>
                </select>
            </div>

            <div class="info-container">
                <h3>Stock</h3>
                <input type="text" v-model="stock">
            </div>

            <div class="info-container">
                <h3>Precio</h3>
                <input type="text" v-model="price">
            </div>

            <div class="info-container">
                <h3>Comentarios</h3>
                <textarea v-model="comments"></textarea>
            </div>
        </div>
        
        <div class="product-actions">
            <button class="goBack" @click="$router.push('/productslist')">Volver</button>
            <button class="save" @click="saveProduct" v-if="!this.$store.state.modify">Guardar</button>
            <button class="modify" @click="modifyProduct" v-if="this.$store.state.modify">Modificar</button>
        </div>
    </div>   
    `,
    data: function() {
        return {
            title: 'Añadir nuevo producto',
            code: '',
            name: '',
            category: '',
            categories: [
                {text:'electrodoméstico', value:1},
                {text:'fitness', value:2},
                {text:'cocina', value:3},
                {text:'movilidad', value:4},
                {text:'otros', value:5},
            ],
            stock: '',
            price: '',
            comments: ''
        };
    },
    mounted() {
        let res;
        if (this.$store.state.modify) {
            this.title = 'Modificar producto'
            res = this.$store.state.product;
            this.code = res.code;
            this.name = res.name;
            this.category = res.category;
            this.stock = res.stock;
            this.price = res.price;
            this.comments = res.comments;
        } else {
            this.$store.commit('modifyProduct', false);
        }
    },
    methods: {
        saveProduct() {
            db.collection('products').add({
                code: this.code,
                name: this.name,
                category: this.category,
                stock: this.stock,
                price: this.price,
                comments: this.comments
            });
            this.$router.push('/productslist');
        },
        modifyProduct(){
            fireRefToCollection.doc(this.$store.state.id).set({
                code: this.code,
                name: this.name,
                category: this.category,
                stock: this.stock,
                price: this.price,
                comments: this.comments
                }).then(() => {
                console.log('Data updated succefully')
                }).catch(function (error) {
                console.log(error);
            });
            this.$router.push('/productslist');
        }
    },
};

export default NewProduct;