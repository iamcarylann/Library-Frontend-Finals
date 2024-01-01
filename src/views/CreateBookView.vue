<template>
  <div class="container">
    <h1>Create Book</h1>
    <div class="row"> 
        <div class="col-md-6">
            <form @submit.prevent="createBook">
                <div class="form-group mt-2">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" v-model="book.title">
                </div>

                <div class="form-group mt-2">
                    <label for="author">Author</label>
                    <input type="text" class="form-control" v-model="book.author">
                </div>

                <div class="form-group mt-2">
                    <label for="isbn">ISBN</label>
                    <input type="text" class="form-control" v-model="book.isbn">
                </div> 
                
                <div class="form-group mt-2">
                    <label for="published_at">Published At</label>
                    <input type="date" class="form-control" v-model="book.published_at">
                </div>     
                
                <div class="form-group mt-2">
                    <label for="quantity">Quantity</label>
                    <input type="text" class="form-control" v-model="book.quantity">
                </div>    
          
                <div class="form-group my-3 d-grid gap-2 d-md-flex justify-content-end">
                    <button type="submit" class="btn btn-dark">Create Book</button>                    
                </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const book = ref({
  title: '',
  author: '',
  isbn: '',
  published_at: '',
  quantity: 0 // Set the default value for quantity
});

const createBook = async () => {
  try {
    const response = await fetch(`http://localhost:8000/api/books/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book.value),
    });

    if (response.ok) {
      console.log('Book created successfully');
      window.alert('Book created successfully');
      router.push('/books');
    } else {
      console.error('Failed to create book');
    }
  } catch (error) {
    console.error('Error creating book:', error);
  }
};

</script>

<style scoped>
.container {
  margin: 15vh auto;
}
.btn-dark {
  --bs-btn-color: #fff;
  --bs-btn-bg: #cb805c;
  --bs-btn-hover-bg: #ef7f0f;
}
</style>
