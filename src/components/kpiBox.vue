<template>
  <div class="dashboard-item">
    <div class="dashboard-item__content">
      <h3 class="dashboard-item__heading">
        <slot name="heading" />
      </h3>
      <p class="dashboard-item__description">
        <slot />
        <!-- This is the default slot -->
      </p>
    </div>
    <button class="dashboard-item__button" @click="handleClick">X</button>
  </div>
 </template>
 
 <script>
 export default {
   props: {
     index: {
       type: Number,
       required: true
     }
   },
   methods: {
     handleClick() {
       this.$emit('delete', this.index);
     }
   }
 };
 </script>


<style scoped>
.dashboard-item {
 position: relative;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 width: 30%;
 margin-top: 2rem;
 border: 2px solid grey;
 border-radius: 2px;
 box-sizing: border-box;
 padding: 1rem; /* Add padding to ensure content is not flush against the border */
}


.dashboard-item__content {
 flex: 1;
 display: flex;
 flex-direction: column;
 align-items: flex-end; /* Align content to the right */
 justify-content: space-between;
 margin-left: 1rem;
 margin-right: 1rem;
 padding-right: 2rem;
 padding-top: 2rem;
}


.dashboard-item__heading,
.dashboard-item__description {
 text-align: right; /* Right justify the text inside the content */
 width: 100%;
}


.dashboard-item__heading {
 font-size: 1.1rem;
 font-weight: 500;
 margin-bottom: 0.4rem;
 color: var(--color-heading);
}


.dashboard-item__description {
 font-size: large;
 font-weight: 300;
 color: var(--color-text);
}


.dashboard-item__button {
 position: absolute;
 top: 0;
 right: 0;
 background: var(--color-background);
 color: var(--color-text);
 border: 0;
 padding: 0.5rem;
 border-radius: 2px;
 cursor: pointer;
}


@media (min-width: 1024px) {
 .dashboard-item {
   margin-top: 0;
   padding: 0.4rem 0 1rem 2rem;
 }


 .dashboard-item__icon {
   top: calc(50% - 25px);
   left: -26px;
   position: absolute;
   border: 1px solid var(--color-border);
   background: #ffffff;
   border-radius: 8px;
   width: 50px;
   height: 50px;
 }
}
</style>
