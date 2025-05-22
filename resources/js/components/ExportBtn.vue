<template>
    <button @click="proses" class="btn btn-success btn-sm"><i class="fas fa-file-excel"></i> Export</button>
</template>

<script>
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export default {
    props: {
        data: {
            required: true
        }
    },
    methods: {
        proses() {
            const data = this.data.data;
            const worksheet = XLSX.utils.json_to_sheet(data);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
            const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
            const dataBlob = new Blob([excelBuffer], { type: 'application/octet-stream' });
            saveAs(dataBlob, this.data.fileName+'.xlsx');
        }
    }
};
</script>
