<template>
 <div class="container">
    <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-3 buttondiv">
      <router-link to="/bookcheckouts/create" class="btn btn-dark mt-5 me-md-2" type="button">
        Add Book Checkout
      </router-link>
    </div>

    <table class="table table-bordered table-striped table-sm">
      <thead>
                <th>ID</th>
                <th>User</th>
                <th>Book</th>
                <th>Checkout Date</th>
                <th>Due Date</th>
                <th>Returned At</th>
                <th></th>

      </thead>
      <tbody>
        <tr v-for="bookCheckout in bookCheckouts" :key="bookCheckout.id">
          <td>{{ bookCheckout.id }}</td>
          <td>{{ bookCheckout.user.name }}</td>
          <td>{{ bookCheckout.book.title}}</td>
          <td>{{ bookCheckout.checkout_date}}</td>
          <td>{{ bookCheckout.due_date }}</td>
          <td>{{ bookCheckout.returned_at}}</td>
          
          <td class="icon">
            <button @click="deleteBookCheckout(bookCheckout.id)" class="btn btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const bookCheckouts = ref([]);

const fetchBookCheckouts = () => {
  fetch('http://localhost:8000/api/bookcheckouts')
    .then(response => response.json())
    .then(data => {
      bookCheckouts.value = data;
    })
    .catch(error => {
      console.error('Error fetching book checkouts:', error);
    });
};

onMounted(() => {
  fetchBookCheckouts();
});

const deleteBookCheckout = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/api/bookcheckouts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      console.log('Book checkout deleted successfully');
      window.alert('Book checkout deleted successfully');
      fetchBookCheckouts();
    } else {
      console.error('Failed to delete book checkout');
    }
  } catch (error) {
    console.error('Error deleting book checkout:', error);
  }
};

</script>

<style scoped>
.tablecontainer{
  display: flex;
  justify-content: center;
  margin: auto;
  align-items: center;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.icon {
  width: 18px; 
}
.icon a{
  color: black;
}
.btn-dark {
    --bs-btn-color: #fff;
    --bs-btn-bg: #cb805c;
    --bs-btn-hover-bg: #ef7f0f;
}

</style>