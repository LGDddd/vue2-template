<template>
    <div class="home">
        {{ ok }}
    </div>
</template>

<script setup>
import { ref, shallowRef, isShallow } from 'vue'
const ok = ref([{ ok: 1 }])
const data = shallowRef([{ ok: 1 }])
console.log(ok)
console.log(data)
console.log(isShallow)
</script>
