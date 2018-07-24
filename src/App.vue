<template>
  <!-- <div id="app">
<input type="radio" name="radios" value="1" v-model="param"><label>one</label>
<br>
<input type="radio" name="radios" value="2" v-model="param"><label>two</label>
<br>
<input type="radio" name="radios" value="3" v-model="param"><label>three</label>
  </div> -->
<div id="app">
  <label v-for="option in arr"><input :value="option.name" v-model="prov" type="radio" name="radios" ><span>{{ option.name }}</span></label>
	<!-- <select v-model="prov">
		<option v-for="option in arr" :value="option.name">
			{{ option.name }}
		</option>
	</select> -->
	<!-- <select v-model="city">
		<option v-for="option in cityArr" :value="option.name">
			{{ option.name }}
		</option>
	</select> -->
  <ul v-model="city">
		<li v-for="option in cityArr" :value="option.name">
			{{ option.name }}
		</li>
	</ul>
	<select v-model="district" v-if="district">
		<option v-for="option in districtArr" :value="option.name">
			{{ option.name }}
		</option>
	</select>
</div>
</template>

<script>
import { arrAll } from './assets/josn/vue-area.js'
export default {
  data(){
    return {
      arr: arrAll,
      prov: '北京',
      city: '北京',
      district: '东城区',
      cityArr: [],
      districtArr: []
    }
  },
  methods: {
    updateCity: function () {
      for (var i in this.arr) {
        var obj = this.arr[i];
        if (obj.name == this.prov) {
          this.cityArr = obj.sub;
          break;
        }
      }
      this.city = this.cityArr[1].name;
    },
    updateDistrict: function () {
      for (var i in this.cityArr) {
        var obj = this.cityArr[i];
        if (obj.name == this.city) {
          this.districtArr = obj.sub;
          break;
        }
      }
      if(this.districtArr && this.districtArr.length > 0 && this.districtArr[1].name) {
        this.district = this.districtArr[1].name;
      } else {
        this.district = '';
      }
    }
  },
  beforeMount: function () {
    this.updateCity();
    this.updateDistrict();
  },
  watch: {
    prov: function () {
      this.updateCity();
      this.updateDistrict();
    },
    city: function () {
      this.updateDistrict();
    }
  }
}

</script>

<style lang="scss">

</style>
