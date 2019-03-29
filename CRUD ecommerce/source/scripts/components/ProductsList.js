import {db, fireRefToCollection} from '../database/connect';

const ProductsList = {
    name: 'ProductsList',
    template: 
    `<div class="main-container product-admin">
        <div class="product-admin__header">
            <h1>Administrar poductos</h1>
            <button class="add" @click="newProduct()"><span>Añadir producto</span></button>
        </div>
        <div class="product-admin__items">
            <ul class="items-header">
                <li class="hide-mobile">Código</li>
                <li>Producto</li>
                <li class="center-text hide-mobile">Categoría</li>
                <li class="center-text">Stock</li>
                <li class="center-text">Precio</li>
                <li></li>
            </ul>
            <div class="items-products">
                <ul class="product" v-for="(product, index) in products">
                    <li class="hide-mobile">{{product.code}}</li>
                    <li>{{product.name}}</li>
                    <li class="center-text hide-mobile">{{product.category}}</li>
                    <li class="center-text">{{product.stock}}</li>
                    <li class="center-text">{{product.price}}</li>
                    <ul class="product__actions">
                        <li><button class="info" title="info" @click="setProductValues(product)"></button></li>
                        <li><button class="edit" title="editar" @click="editProduct(product)"></button></li>
                        <li><button class="delete" title="eliminar" @click="deleteProduct(product)"></button></li>
                    </ul>
                </ul>
            </div>
        </div>
    </div>`,
    data: function() {
        return {
            products: []
        };
    },
    mounted() {
        this.getRealtimeUpdateCollection('products');
    },
    methods: {
        getRealtimeUpdateCollection(collection) {
            fireRefToCollection.onSnapshot( (querySnapshot) => {
                var data = [];
                let i = 0;
                querySnapshot.forEach((doc) => {
                data.push(doc.data());
                data[i].id = doc.id;
                i++;
                });
                this.products = data;
            });
        },
        editProduct(product) {
            this.$store.commit('setProduct', product.id)
            this.$store.commit('setProductValues', product);
            this.$store.commit('modifyProduct', true);
            this.$router.push('/modify');
        },
        setProductValues(product) {
            this.$store.commit('setProductValues', product);
            this.$router.push('/productdetail');
        },
        deleteProduct(res) {
            fireRefToCollection.doc(res.id).delete().then( () => {
                console.log('Deleted');
              }).catch( (error) => {
                console.log(error);
            });
        },
        newProduct() {
            this.$store.commit('modifyProduct', false);
            this.$router.push('/new');
        }
    }
};

export default ProductsList;