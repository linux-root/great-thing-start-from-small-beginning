<template>
  <product-form @save-product="addProduct" :model="model"></product-form>
</template>

<script>
  import ProductFrom from '../../components/product/ProductForm.vue'
  export default {
    data () {
      return {
        model: {}
      }
    },
    methods: {
      addProduct (model) {
        this.$store.dispatch('addProduct', model).then(()=>{
            this.$router.push('/admin');
        })
      }
    },
    components: {
      'product-form': ProductFrom
    }
  }
</script>
