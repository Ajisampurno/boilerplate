<template>

    <UserTable ref="userTable" @openModal="openModal = true"/>

    <UserForm :openModal="openModal" @closeModal="openModal = false" @reload="reloadData" />

</template>

<script>
import UserTable from '@/views/settings/userManagement/components/UserTable.vue';
import UserForm from '@/views/settings/userManagement/components/UserForm.vue';

export default {
    components: {
        UserTable,
        UserForm,
    },
    data () {
        return {
            openModal: false
        }
    },
    methods: {
        reloadData() {
            this.$refs.userTable.reloadData();
        }
    }
}
</script>