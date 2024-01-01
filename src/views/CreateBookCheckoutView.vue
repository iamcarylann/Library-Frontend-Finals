<template>
  <div class="container">
    <h1>Create New Book Checkout</h1>
    <div class="row">
      <div class="col-md-3">
        <form @submit.prevent="createBookCheckout">

          <!-- User Dropdown -->
          <div class="form-group mt-2">
            <label for="user_id">User:</label>
            <select v-model="book.user_id" class="form-select">
              <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
            </select>
            <p v-if="formErrors.user_id" class="text-danger">{{ formErrors.user_id }}</p>
          </div>

          <!-- Book Dropdown -->
          <div class="form-group mt-2">
            <label for="book_id">Book:</label>
            <select v-model="book.book_id" class="form-select">
              <option v-for="book in books" :key="book.id" :value="book.id">{{ book.title }}</option>
            </select>
            <p v-if="formErrors.book_id" class="text-danger">{{ formErrors.book_id }}</p>
          </div>

          <!-- Checkout Date Input -->
          <div class="form-group mt-2">
            <label for="checkout_date">Checkout Date:</label>
            <input type="date" v-model="book.checkout_date" class="form-control">
          </div>

          <!-- Due Date Input -->
          <div class="form-group mt-2">
            <label for="due_date">Due Date:</label>
            <input type="date" v-model="book.due_date" class="form-control">
          </div>

          <!-- Returned At Input -->
          <div class="form-group mt-2">
            <label for="returned_at">Returned At:</label>
            <input type="date" v-model="book.returned_at" class="form-control">
          </div>

          <!-- Submit Button -->
          <div class="form-group my-3 d-grid gap-2 d-md-flex justify-content-end">
            <button type="submit" class="btn btn-dark">Create Book Checkout</button>
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
  user_id: '',
  book_id: '',
  checkout_date: '',
  due_date: '',
  returned_at: ''
});

const formErrors = ref({
  user_id: '',
  book_id: ''
});

const users = ref([]);
const books = ref([]);

const createBookCheckout = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/bookcheckouts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book.value),
    });

    if (response.ok) {
      console.log('Book checkout created successfully');
      window.alert('Book checkout created successfully');
      router.push('/bookcheckouts');
    } else {
      console.error('Failed to create book checkout');
    }
  } catch (error) {
    console.error('Error creating book checkout:', error);
  }
};

const fetchUsers = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/users');
    if (response.ok) {
      users.value = await response.json();
    } else {
      console.error('Failed to fetch users');
    }
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

const fetchBooks = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/books');
    if (response.ok) {
      books.value = await response.json();
    } else {
      console.error('Failed to fetch books');
    }
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};

fetchUsers();
fetchBooks();
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
