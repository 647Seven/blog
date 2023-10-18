
<template>
    <div>
        <el-config-provider :local="locale"
                            :message="config">
            <router-view/>
        </el-config-provider>
       
    </div>
 
</template>

<script setup>


import zhCn from "element-plus/es/locale/lang/zh-cn";
import { reactive } from "vue";

const locale=zhCn;
const config=reactive({
    max:1,
});
</script>



<style scoped>

</style>

