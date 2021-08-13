// const ratings = {
//   maestro_a : 2.8,
//   maestro_b : 3.3,
//   maestro_c : 1.9,
//   maestro_d : 4.3,
//   maestro_e : 4.74
// };

// total number of stars
// const starTotal = 5;

// for(const rating in ratings) {
//   // console.log(document.querySelector(`.${rating} .stars-inner`))
//   const starPercentage = (ratings[rating] / starTotal) * 100;
//   const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
//   document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
// }

// let stars = document.querySelectorAll('.star')
// console.log(stars)

Vue.component('star-rating', {
  props: {
    'name': String,
    'value': null,
    'value_t': null,
    'id': String,
    'disabled': Boolean,
    'required': Boolean
  },
  template: '<div class="star-rating">\
        <label class="star-rating__star" v-for="rating in ratings" \
        :class="{\'is-selected\': ((value >= rating) && value != null), \'is-hover\': ((value_t >= rating) && value_t != null), \'is-disabled\': disabled}" \
        v-on:click="set(rating)" v-on:mouseover="star_over(rating)" v-on:mouseout="star_out">\
        <input class="star-rating star-rating__checkbox" type="radio" :value="rating" :name="name" \
        v-model="value" :disabled="disabled">★</label></div>',

  /*
   * Initial state of the component's data.
   */
  data: function() {
    return {
      temp_value: null,
      ratings: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    /*
     * Behaviour of the stars on mouseover.
     */
    star_over: function(index) {
      var self = this;

      if (!this.disabled) {
        this.temp_value = this.value_t;
        return this.value_t = index;
      }

    },

    /*
     * Behaviour of the stars on mouseout.
     */
    star_out: function() {
      var self = this;

      if (!this.disabled) {
        return this.value_t = this.temp_value;
      }
    },

    /*
     * Set the rating of the score
     */
    set: function(value) {
      var self = this;

      if (!this.disabled) {
      	// Make some call to a Laravel API using Vue.Resource
        this.temp_value = value;
        return this.value = value;
      }
    }
  }

});

const ratings = {
  maestro_1 : 2.8,
  maestro_2 : 3.3,
  maestro_3 : 1.9,
  maestro_4 : 4.3,
  maestro_5 : 4.74
};

new Vue({
  el: '#app',
  data: {
  	dev: [
    	{name: "Alex Toribio Bejar", level: ratings.maestro_1, src: './../img/profe1.jpg', cursos: 'Profesor de Algoritmica 1'},
			{name: "Alejandra Marco Cervantes", level: ratings.maestro_2, src: './../img/profe2.jpg', cursos: 'Profesora de Historia'},
			{name: "Maluma Beibi MasNa", level: ratings.maestro_2, src: './../img/profe3.jpg', cursos: 'Profesor de Algebra'},
			{name: "Carolina Velasquez Chiara", level: ratings.maestro_2, src: './../img/profe4.jpg', cursos: 'Profesora de Ingles'},
			{name: "Karla Russel Talara", level: ratings.maestro_2, src: './../img/profe5.jpg', cursos: 'Profesora de Aritmetica'},
    ]
  }
});
