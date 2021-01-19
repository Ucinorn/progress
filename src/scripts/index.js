// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional data or codes you want to include below \/
import { achievements } from './achievements.js'
import { jobs } from './jobs.js'

// \/ All of your javascript should go here \/

window.init = function() {
  return {
    interval: false,
    start() {
      this.stop();
      this.interval = setInterval(function(){ this.tick() }, 10);
    },
    stop() {
      clearInterval(this.interval);
    },
    save() {
      localStorage.getItem('progress_save_v1', JSON.stringify({
        game: this.game,
        stats: this.stats,
      }))
    }
    game: JSON.parse(localStorage.getItem('progress_save_v1')).game || {
      age: 0,
      maxAge: ( 70 * 365 ),  // 70 years in days
      money: 0,
      happiness: 0,
      attributes: {
        strength: 0,
        finesse: 0,
        intelligence: 0,
      },
      skills: {
        labouring: 0,
        agriculture: 0,
        carpentry: 0,
        cooking: 0,
        nature: 0,
        literacy: 0,
        numeracy: 0,
        latin: 0,
        fighting: 0,
        swordplay: 0,
      },
      currentJob: false,
      origin: false,
    },
    stats: JSON.parse(localStorage.getItem('progress_save_v1')).stats || {
      lifetimes: 0,
      achievements: []
    },
    jobs,
    achievements,
    origins,
    tick() {
      // we have access to the whole init object using the 'this' context
      this.age++,
      this.addIncome();

    },

  }
}
