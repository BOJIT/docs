<!--
 * @file +page.svelte
 * @author James Bennion-Pedley
 * @brief Format for standard page
 * @date 17/05/2023
 *
 * @copyright Copyright (c) 2023
 *
-->

<script lang="ts">
    /*-------------------------------- Imports -------------------------------*/

    import type { PageData } from "./$types";

    /*--------------------------------- Props --------------------------------*/

    export let data: PageData;

    /*-------------------------------- Methods -------------------------------*/

    /*------------------------------- Lifecycle ------------------------------*/
</script>

{@html data.page.content}

<style>
</style>
