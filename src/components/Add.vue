<template>
  <div class="add-smoothie container z-depth-1">
    <h2 class="center-align indigo-text">Add New Smoothie Recipe</h2>
    <form @submit.prevent="Add">
      <div class="field title">
        <label for="title">Smoothie title:</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div class="field add-ingredient">
        <div v-for="(ing,index) in ingredients" :key="index" class="field">
          <label for="ingredient">ingredient:</label>
          <input type="text" name="ingredients" v-model="ingredients[index]">
          <i class="material-icons delete" @click="deleteing(ing)">delete</i>
        </div>

        <label for="add-ingredient">Add an ingredient:</label>
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
      </div>
      <div class="field center-align">
        <p class="red-text" v-if="feeadback">{{feeadback}}</p>
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
import { db, fb } from "@/components/firebase";
import slugify from "slugify";
export default {
  name: "Add",
  data() {
    return {
      title: null,
      another: null,
      ingredients: [],
      feeadback: "",
      slug: ""
    };
  },
  methods: {
    Add() {
      if (this.title) {
        this.feeadback = "";
        this.slug = slugify(this.title, {
          replacement: "-",
          remove: /[$@#%^&*!]/g,
          lower: true
        });
        db.collection("smoothies")
          .add({
            title: this.title,
            ingredients: this.ingredients,
            slug: this.slug
          })
          .then(() => {
            this.$router.push({ name: "Index" });
          });
      } else {
        this.feeadback = "Add a title";
      }
    },
    addIng() {
      if (this.another) {
        this.ingredients.push(this.another);
        this.another = null;
        this.feeadback = "";
      } else {
        this.feeadback = "Add an ingredient";
      }
    },
    deleteing(ing) {
      this.ingredients = this.ingredients.filter(ingredient => {
        return ingredient != ing;
      });
    }
  }
};
</script>

<style>
.add-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.add-smoothie h2 {
  font-size: 2em;
  margin: 20px auto;
}
.add-smoothie .field {
  margin: 20px auto;
  position: relative;
}
.delete {
  position: absolute;
  color: #aaa;
  font-size: 1.4em;
  right: 0;
  bottom: 16px;
  cursor: pointer;
}
</style>