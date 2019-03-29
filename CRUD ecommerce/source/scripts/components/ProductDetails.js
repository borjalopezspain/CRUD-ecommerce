const ProductDetails = {
    name: 'ProductDetails',
    template: 
    `<div class="main-container product-info">
        <div class="product-info__header">
            <h1>Información de producto</h1>
        </div>
        <div class="product-info__info">
            <div class="info-container">
                <h3>Código</h3>
                <p>{{product.code}}</p>
            </div>

            <div class="info-container">
                <h3>Producto</h3>
                <p>{{product.name}}</p>
            </div>

            <div class="info-container">
                <h3>Categoría</h3>
                <p>{{product.category}}</p>
            </div>

            <div class="info-container">
                <h3>Stock</h3>
                <p>{{product.stock}}</p>
            </div>

            <div class="info-container">
                <h3>Precio</h3>
                <p>{{product.price}}</p>
            </div>

            <div class="info-container">
                <h3>Comentarios</h3>
                <p>{{product.comments}}</p>
            </div>
        </div>

        <button class="goBack" @click="$router.push('/productslist')">Volver</button>
        
    </div>`,
    data: function() {
        return {
            product: {}
        };
    },
    mounted() {
        this.product = this.$store.state.product;
    }
};

export default ProductDetails;