import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
import router from './routes'   

Vue.use(Vuex);

const product = {
    namespaced : true,
    state: {
        data: [],
        isLoading: false,
        errors: []
    },
    getters : {
        isLoading: state => state.isLoading,
        errors: state => state.errors,
        Products: state => state.data
    },
    mutations : {
        updateIsLoading(state, isLoading){
            state.isLoading = isLoading
        },
        addProductSuccess(state) {
            state.isLoading = false;
            state.errors = [];
        },
        addProductError(state, errors) {
            state.isLoading = false;
            state.errors = errors.response.data;
        },
        fetchProductsSuccess(state, product){
            state.data = product;
            state.isLoading = false;
            state.errors = [];
        },
    },
    actions:{
        async addProduct(context, product){
            try{
                context.commit('updateIsLoading', true);
                await axios.post("/api/products/creat-product", product)
                context.commit('addProductSuccess');
                router.push("/ProductsList")
            }catch (err){
                context.commit("addProductError", err);

            }
        },
        /* async fetchProduct(context){
            try{
                context.commit('updateIsLoading', true);
                const response = await  axios.get('/api/products');
                console.log(response);
                context.commit("fetchProductsSuccess", response.data)
            }catch(err){
                console.log(err);
            }
        }   */
    }
}

const store = new  Vuex.Store({
    modules:{
        product
    }
    
});

export default store;