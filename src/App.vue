<template>
  <div id="app">
    <h1>Math Quiz App</h1>
    <OperatorQuiz
      @onBack="clearOperator"
      v-if="operator"
      :operator="operator"
    />
    <OperatorSelector v-if="!operator" @changeOperator="changeOperator" />
  </div>
</template>

<script>
import OperatorQuiz from "./components/OperatorQuiz.vue";
import OperatorSelector from "./components/OperatorSelector.vue";

export default {
  name: "App",
  data() {
    return {
      operator: null,
    };
  },
  methods: {
    changeOperator(operator) {
      this.operator = operator;
    },
    clearOperator() {
      this.operator = null;
    },
  },
  components: {
    OperatorSelector,
    OperatorQuiz,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
}
button {
  padding: 10px;
  width: 160px;
  height: 80px;
  margin-right: 10px;
  background-color: #10aeb2;
  color: white;
  font-size: 24px;
  cursor: pointer;
  vertical-align: top;
}
</style>
