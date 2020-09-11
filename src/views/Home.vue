<template>
  <div class="container">
    <h1 class="center">Home</h1>
    <div class="row">
      <div class="six columns">
        <div class="card">
          <h1 class="center">VueJS</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nostrum alias blanditiis in. Quis sed beatae suscipit amet delectus consequuntur eius dignissimos eveniet possimus nisi rem molestiae perspiciatis, necessitatibus libero?</p>
        </div>
      </div>
      <div class="six columns">
        <div class="card">
          <h1 class="center">Firebase</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nostrum alias blanditiis in. Quis sed beatae suscipit amet delectus consequuntur eius dignissimos eveniet possimus nisi rem molestiae perspiciatis, necessitatibus libero?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
};
</script>
<style lang="scss">
.card {
	border: solid 1px #222;
	padding: 2em;
	border-radius: 1em;
}

.row {
	margin-top: 5em;
}
</style>