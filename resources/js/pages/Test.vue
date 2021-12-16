<template>
    <div class="container grid place-content-center h-screen">
        <button
            class="border px-2 py-1 bg-blue-100 hover:bg-blue-200 transition ease-in-out"
            @click="onDestroy"
        >
            Destroy
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        onDestroy() {
            this.$inertia.visit("/test/1", {
                method: "DELETE",
                success() {
                    alert("deleted");
                },
            });
        },
    },
};
</script>

<style></style>
