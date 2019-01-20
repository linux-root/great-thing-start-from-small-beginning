<template>
    <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <table class="table table-striped">
            <thead>
            <tr>
              <th>Tên</th>
              <th>Giá bán</th>
              <th></th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products">
              <td>{{product.name}}</td>
              <td>${{product.price}}</td>
              <td><router-link :to="'/admin/edit/'+product._id"><i class="fa fa-pencil-square-o"></i></router-link></td>
              <td><a @click="deleteProduct(product)"><i class="fa fa-trash"></i></a></td>
            </tr>
            </tbody>
          </table>
        </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    computed: {
      products () {
        return this.$store.getters.allProducts
      }
    },
    created () {
      if (this.products.length === 0) {
        this.$store.dispatch('allProducts')
      }
    },
    methods: {
      deleteProduct (product) {
          const swalWithBootstrapButtons = this.$swal.mixin({
              confirmButtonClass: 'btn btn-success',
              cancelButtonClass: 'btn btn-danger',
              buttonsStyling: false,
          })

          swalWithBootstrapButtons({
              title: 'Bạn có chắc ?',
              text: "Sản phẩm sẽ bị xoá và không thể khôi phục",
              type: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Xoá',
              cancelButtonText: 'Huỷ',
              reverseButtons: true
          }).then((result) => {
              if (result.value) {
                  this.$store.dispatch('removeProduct', product)
                  swalWithBootstrapButtons(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                  )
              } else if (
                  // Read more about handling dismissals
                  result.dismiss === swal.DismissReason.cancel
              ) {
                  swalWithBootstrapButtons(
                      'Cancelled',
                      'Your imaginary file is safe :)',
                      'error'
                  )
              }
          })
      }
    }
  }
</script>
