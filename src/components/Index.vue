<template>
  <div class="index container">
    <div class="card" v-for="soothie in soothies" :key="soothie.id">
      <div class="card-content">
        <div class="btn-floating btn-small pink right">
          <i class="material-icons" @click="deleteSoothie(soothie.id)">delete</i>
        </div>
        <h2 class="indigo-text">{{soothie.title}}</h2>
        <ul class="ingrediance">
          <li v-for="(ingrediance,index) in soothie.ingredients" :key="index">
            <span class="chip">{{ingrediance}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { db, fb } from "@/components/firebase";
export default {
  name: "Index",
  props: {},
  data() {
    return {
      soothies: []
    };
  },
  methods: {
    deleteSoothie(id) {
      db.collection("smoothies")
        .doc(id)
        .delete()
        .then(() => {
          this.soothies = this.soothies.filter(soothie => {
            return soothie.id != id;
          });
        });
    }
  },

  created() {
    db.collection("smoothies")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let soothie = doc.data();
          soothie.id = doc.id;
          this.soothies.push(soothie);
        });
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px;
  margin: 10px;
  grid-gap: 10px;
  margin-top: 60px;
}
.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0px;
}
.index .ingrediance {
  margin: 30px auto;
}
.index .ingrediance li {
  display: inline-block;
}
</style>
