<template>
    <div class="question-box-container">
        <b-jumbotron>
            

            <template v-slot:lead>
              {{currentQuestion.question}}
            </template>

            <hr class="my-4">

          <b-list-group>
              <b-list-group-item
              v-for= "(answer, index) in answers" :key="index" @click.prevent= "selectAnswer(index)"
              :class= "[selectedIndex===index ? 'selected' : '']"
              >
                {{answer}}
              </b-list-group-item>
              
        </b-list-group>


            

            <b-button variant="primary"
            @click="submitAnswer"
            :disabled ="selectedIndex === null"
            >
              Submit
              </b-button>
            <b-button @click="next" variant="success" href="#">Next</b-button>
        </b-jumbotron>
    </div>
</template>

<script>

import _ from 'lodash'

export default {
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function

  },

  data () {
    return {
      selectedIndex : null,
      shuffledAnswers: []
    }
  },

  methods: {
    selectAnswer: function (index) {
      this.selectedIndex = index
     },

     submitAnswer() {
       let isCorrect = false
       if (this.selectedIndex === this.correctIndex) {
         isCorrect = true
       }

       this.increment(isCorrect)
       
     },

     shuffleAnswers : function () {
      let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
      this.shuffledAnswers = _.shuffle(answers) 
     }

     
  },

  watch : {
    currentQuestion: {
      immediate: true,
      handler() {
         this.selectedIndex= null
         this.shuffleAnswers()

      }
    }
    // {
    //   this.selectedIndex= null
    //   this.shuffleAnswers()
    // }
  },
  

  computed : {
    answers: function () {
      let answers = [...this.currentQuestion.incorrect_answers]
      answers.push(this.currentQuestion.correct_answer)
       return answers
    }
  }
}
</script>


<style scoped>
.list-group {
margin-bottom: 15px;

}

.list-group-item:hover {
background-color: #EEE;
cursor: pointer;
}

.btn {
  margin: 0 5px;
}

.selected {
  background-color: lightblue;
  }

  .correct {
  background-color: lightgreen;
  }

  .incorrect {
  background-color: red;
  }

</style>