<template>
  <div class="container">
    <h1>Create User</h1>
    <div class="row"> 
        <div class="col-mid-6">
            <form @submit.prevent="createUser">
                <div class="form-group mt-2">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" v-model="user.name">
                </div>

                <div class="form-group mt-2">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" v-model="user.email">
                </div>

                <div class="form-group mt-2">
                    <label for="phone">Phone</label>
                    <input type="text" class="form-control" v-model="user.phone">
                </div> 
                
                <div class="form-group mt-2">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" v-model="user.address">
                </div>            


                <div class="form-group my-3 d-grid gap-2 d-md-flex justify-content-end">
  
                <button type="submit" class="btn btn-dark" >
                    Create User
                </button>                    
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

const user = ref({});

const createUser = async () => {
  try {
    const response = await fetch(`http://localhost:8000/api/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user.value),
    });

    if (response.ok) {
      console.log('User created successfully');
      window.alert('User created successfully');

      router.push('/users');
    } else {
      console.error('Failed to created user');
    }
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

</script>

<style scoped>

.container{
  margin: 15vh auto;
}
.btn-dark {
    --bs-btn-color: #fff;
    --bs-btn-bg: #cb805c;
    --bs-btn-hover-bg: #ef7f0f;
}

</style>
