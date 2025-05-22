<template>
    <div class="card">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h5>Table User</h5>
            <div class="ms-auto d-flex gap-2">
                <ExportBtn :data="exportData" />
                <button @click="openModal" class="btn btn-primary btn-sm">
                    <i class="fas fa-plus"></i> Add
                </button>
            </div>            
        </div>
        <div class="card-body">
            <div>
                <table id="datatable" class="table table-bordered"></table>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import ExportBtn from '@/components/ExportBtn.vue';

export default {
    components: {
        ExportBtn,
    },
    data() {
        return {
            exportData: {
                fileName: 'Data User.xlsx',
                data: []
            },
        };
    },
    mounted() {
        this.dataTable();
    },
    methods: {
        dataTable() {
            $('#datatable').DataTable({
                processing: true,
                serverSide: true,
                ajax: {
                    url: '/api/users/datatable',
                    type: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                },
                columns: [
                    { title: 'Name', data: 'name' },
                    { title: 'Email', data: 'email' },
                    {
                        title: 'Action',
                        data: null,
                        orderable: false,
                        searchable: false,
                        render: (data) => {
                            return `
                                <div class="text-center">
                                    <button class="btn btn-sm btn-detail" data-id="${data.id}"><i class="fas fa-file"></i></button>
                                    <button class="btn btn-sm btn-edit" data-id="${data.id}"><i class="fas fa-pencil"></i></button>
                                    <button class="btn btn-sm btn-delete" data-id="${data.id}"><i class="fas fa-trash"></i></button>
                                </div>
                            `;
                        }
                    }
                ],
            });
            $('#datatable').on('click', '.btn-detail', (event) => {
                const id = $(event.currentTarget).data('id');
                this.detail(id);
            });
            $('#datatable').on('click', '.btn-edit', (event) => {
                const id = $(event.currentTarget).data('id');
                this.edit(id);
            });
            $('#datatable').on('click', '.btn-delete', (event) => {
                const id = $(event.currentTarget).data('id');
                this.delete(id);
            });
        },
        reloadData() {
            const table = $('#datatable').DataTable();
            table.ajax.reload();
        },
        openModal() {
            this.$emit('openModal');
        },
        detail(id) {
            this.$toastr.info(`Menampilkan detail user dengan ID ${id}`, 'Detail User');
            this.$router.push(`/setting/user/show/${id}`);
        },
        edit(id) {
            this.$http.get(`/api/users/${id}`)
                .then(response => {
                    const userData = response.data;
                    this.$emit('openModal');
                    this.$emit('userForm', userData);
                })
                .catch(error => {
                    this.$toastr.error('Gagal mengambil data user', 'Error');
                    console.error('Edit Error:', error.response ? error.response.data : error.message);
                });
        },
        delete(id) {
            if (confirm('Apakah Anda yakin ?')) {
                this.$http.delete(`/api/users/${id}`)
                    .then(() => {
                        this.$toastr.success('User berhasil dihapus', 'Hapus Sukses');
                        this.reloadData();
                    })
                    .catch(error => {
                        this.$toastr.error('Gagal menghapus user', 'Error');
                        console.error('Delete Error:', error.response ? error.response.data : error.message);
                    });
            }
        }
    }
};
</script>
