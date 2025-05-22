<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-12">
                    <h4>Profile</h4>
                    <p>Name: {{ user.name }}</p>
                    <p>Email: {{ user.email }}</p>
                    <p>Password: {{ user.password }}</p>
                </div>
            </div>
        </div>
        <div class="card-footer d-flex">
            <button class="btn btn-warning btn-sm ms-auto" @click="back">Back</button>
        </div>
    </div>
</template>

<script>
export default {
    data() { return { user: [] }; },
    mounted() { this.fetchData(); },
    methods: {
       fetchData() {
            this.$http.get(`/api/users/${this.$route.params.id}`)
                .then(response => {
                    console.log(response.data);
                    this.user = response.data;
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        },  
        back() {
            this.$router.push(`/setting/user/index`);
        }
    }
};
</script>
