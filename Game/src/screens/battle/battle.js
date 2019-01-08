/* eslint-disable eslint no-eval */
/* eslint-disable no-eval */
/* eslint-disable no-param-reassign */
/* eslint-disable eslint global-require */
/* eslint-disable-next-line eslint no-eval */
/* eslint-disable no-undef */

import calculateAnswer from '../../components/tasks/calculateAnswer';
import compareNumbers from '../../components/tasks/compareNumbers';
import insertLetter from '../../components/tasks/insertLetter';
import shuffleLettersWord from '../../components/tasks/shuffleLettersWord';
import antonyms from '../../components/tasks/antonyms';
import superFluousWord from '../../components/tasks/superFluousWord';
import cities from '../../components/tasks/cities';
import dictionary from '../../components/tasks/dictionary';
import questions from '../../components/tasks/questions';
import wordСolors from '../../components/tasks/wordСolors';

import ScoreManadge from '../score/score';

import monsterNameProp from './json/monsterNames.json';
import '../../components/modal-dialog/modal-dialog';

import bullet from './img/bullet.png';
import knife from './img/knife.png';
import shelling from './img/shelling.png';

import head1 from './img/Head_1.png';
import head2 from './img/Head_2.png';
import head3 from './img/Head_3.png';

import tombstoneHero from './img/tombstoneHero.png';
import './img/Hero_1_idle.png';
import './img/Hero_1_Attack_1.png';

import playSound from '../../components/sound/sound';

import shot from '../../../audio/shot.mp3';
import explosion from '../../../audio/explosion.mp3';
import applause from '../../../audio/applause.mp3';
import cryMonster from '../../../audio/cryMonster.mp3';
import music from '../../../audio/music.mp3';
import heroRuning from '../../../audio/runing.mp3';
import kickKnife from '../../../audio/knife.mp3';
import kickHero from '../../../audio/udarHero.mp3';
import ded from '../../../audio/ded.mp3';

import MonsterHeadIdle1 from './img/troll_1_Head_Idle.png';
import MonsterHeadIdle2 from './img/troll_2_Head_Idle.png';
import MonsterHeadIdle3 from './img/troll_3_Head_Idle.png';
import MonsterBodyIdle1 from './img/troll_1_Body_Idle.png';
import MonsterBodyIdle2 from './img/troll_2_Body_Idle.png';
import MonsterBodyIdle3 from './img/troll_3_Body_Idle.png';
import MonsterLegsIdle1 from './img/troll_1_Legs_Idle.png';
import MonsterLegsIdle2 from './img/troll_2_Legs_Idle.png';
import MonsterLegsIdle3 from './img/troll_3_Legs_Idle.png';

import MonsterHeadAttack1 from './img/troll_1_Head_Attack.png';
import MonsterHeadAttack2 from './img/troll_2_Head_Attack.png';
import MonsterHeadAttack3 from './img/troll_3_Head_Attack.png';
import MonsterBodyAttack1 from './img/troll_1_Body_Attack.png';
import MonsterBodyAttack2 from './img/troll_2_Body_Attack.png';
import MonsterBodyAttack3 from './img/troll_3_Body_Attack.png';
import MonsterLegsAttack1 from './img/troll_1_Legs_Attack.png';
import MonsterLegsAttack2 from './img/troll_2_Legs_Attack.png';
import MonsterLegsAttack3 from './img/troll_3_Legs_Attack.png';

import MonsterHeadDie1 from './img/troll_1_Head_Hurt.png';
import MonsterHeadDie2 from './img/troll_2_Head_Hurt.png';
import MonsterHeadDie3 from './img/troll_3_Head_Hurt.png';
import MonsterBodyDie1 from './img/troll_1_Body_Hurt.png';
import MonsterBodyDie2 from './img/troll_2_Body_Hurt.png';
import MonsterBodyDie3 from './img/troll_3_Body_Hurt.png';
import MonsterLegsDie1 from './img/troll_1_Legs_Hurt.png';
import MonsterLegsDie2 from './img/troll_2_Legs_Hurt.png';
import MonsterLegsDie3 from './img/troll_3_Legs_Hurt.png';

import './img/1_game_background.png';
import './img/2_game_background.png';
import './img/3_game_background.png';
import './img/4_game_background.png';

import './battle.css';

import ReturnUserName from '../login/login';

const scen = [' scen1', ' scen2', ' scen3', ' scen4'];

const monsterWeapon = [head1, head2, head3];

let conditionTask;
const taskArray = [
  calculateAnswer,
  compareNumbers,
  insertLetter,
  shuffleLettersWord,
  antonyms,
  superFluousWord,
  cities,
  dictionary,
  questions,
  wordСolors,
];

let wearponSelection = '';

let damage;
let weaponsForAttack;

const weaponHero = document.querySelector('.weaponHero');

const MonsterHeadIdle = [MonsterHeadIdle1, MonsterHeadIdle2, MonsterHeadIdle3];
const MonsterBodyIdle = [MonsterBodyIdle1, MonsterBodyIdle2, MonsterBodyIdle3];
const MonsterLegsIdle = [MonsterLegsIdle1, MonsterLegsIdle2, MonsterLegsIdle3];

const MonsterHeadAttack = [MonsterHeadAttack1, MonsterHeadAttack2, MonsterHeadAttack3];
const MonsterBodyAttack = [MonsterBodyAttack1, MonsterBodyAttack2, MonsterBodyAttack3];
const MonsterLegsAttack = [MonsterLegsAttack1, MonsterLegsAttack2, MonsterLegsAttack3];

const MonsterHeadDie = [MonsterHeadDie1, MonsterHeadDie2, MonsterHeadDie3];
const MonsterBodyDie = [MonsterBodyDie1, MonsterBodyDie2, MonsterBodyDie3];
const MonsterLegsDie = [MonsterLegsDie1, MonsterLegsDie2, MonsterLegsDie3];

const spells = document.querySelector('.spells');
const lifeMonster = document.querySelector('.life.Monster');
const lifeHero = document.querySelector('.life.Hero');
const cannonHero = document.querySelector('.bulletHero');
const attackHero = document.querySelector('.HeroImages');
const player1 = document.querySelector('#HeroImages');
const MonsterWound = document.querySelector('#MonsterWound');

const pause = time => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, time);
});

class Monster {
  constructor() {
    this.essence = 'monster';
    this.name = `${monsterNameProp.adjective[Math.round(Math.random() * (monsterNameProp.adjective.length - 1))]}`
         + ` ${monsterNameProp.subject[Math.round(Math.random() * (monsterNameProp.subject.length - 1))]}`
         + ` ${monsterNameProp.name[Math.round(Math.random() * (monsterNameProp.name.length - 1))]}`;
    this.life = 100;
    this.header = Math.round(Math.random() * (MonsterHeadIdle.length - 1));
    this.boder = Math.round(Math.random() * (MonsterBodyIdle.length - 1));
    this.lenger = Math.round(Math.random() * (MonsterLegsIdle.length - 1));
    this.ImgMonster = {
      headIdle: MonsterHeadIdle[this.header],
      bodyIdle: MonsterBodyIdle[this.boder],
      legsIdle: MonsterLegsIdle[this.lenger],
      headAttack: MonsterHeadAttack[this.header],
      bodyAttack: MonsterBodyAttack[this.boder],
      legsAttack: MonsterLegsAttack[this.lenger],
      headDie: MonsterHeadDie[this.header],
      bodyDie: MonsterBodyDie[this.boder],
      legsDie: MonsterLegsDie[this.lenger],
    };
  }

  init() {
    document.querySelector('#MonsterImLegs').style.backgroundImage = `url(${this.ImgMonster.legsIdle})`;
    document.querySelector('#MonsterImHead').style.backgroundImage = `url(${this.ImgMonster.headIdle})`;
    document.querySelector('#MonsterImBody').style.backgroundImage = `url(${this.ImgMonster.bodyIdle})`;
    document.querySelector('.life.Monster').style.width = '100px';
    document.querySelector('.life.Monster').style.backgroundColor = 'green';
    document.querySelector('.infoMonster').innerHTML = this.name;
    document.querySelector('.nameMonsterLife').innerHTML = this.life;
  }

  async attack() {
    weaponHero.src = monsterWeapon[this.header];
    Monster.setMonsterActivity('Attack', this.ImgMonster.headAttack, this.ImgMonster.bodyAttack, this.ImgMonster.legsAttack);
    await pause(1500);
    cannonHero.className = 'bulletHero go Monster';
    Monster.setMonsterActivity('', '', this.ImgMonster.bodyIdle, this.ImgMonster.legsIdle);
    await pause(800);
    playSound(kickHero);
    player1.className = 'HeroImages Hurt';
    await pause(1100);
    Monster.setMonsterActivity('', this.ImgMonster.headIdle, this.ImgMonster.bodyIdle, this.ImgMonster.legsIdle);
    await pause(200);
    cannonHero.className = 'bulletHero';
    player1.className = 'HeroImages Idle';
    damage = 20;
    weaponHero.src = bullet;
  }

  async healthUp() {
    MonsterWound.className += ' life_up';
    await pause(1000);
    MonsterWound.className = 'MonsterIm';
    if (this.life >= 100) {
      damage = 0;
    } else {
      damage = -10;
    }
  }

  static setMonsterActivity(skill, Head, Body, Legs) {
    document.querySelector('.MonsterIm.legs').className = `MonsterIm legs ${skill}`;
    document.querySelector('.MonsterIm.head').className = `MonsterIm head ${skill}`;
    document.querySelector('.MonsterIm.body').className = `MonsterIm body ${skill}`;
    document.querySelector('.MonsterIm.legs').style.backgroundImage = `url(${Legs})`;
    document.querySelector('.MonsterIm.head').style.backgroundImage = `url(${Head})`;
    document.querySelector('.MonsterIm.body').style.backgroundImage = `url(${Body})`;
  }
}

class Hero {
  constructor() {
    this.essence = 'hero';
    this.winCount = 0;
    this.name = '';
    this.password = '';
    this.life = 100;
  }

  init() {
    document.querySelector('.life.Hero').style.width = '100px';
    document.querySelector('.life.Hero').style.backgroundColor = 'green';
    document.querySelector('.infoHero').innerHTML = this.name;
    document.querySelector('.nameHeroLife').innerHTML = this.life;
    player1.className = 'HeroImages Idle';
  }

  static setImg(img) {
    player1.className = img;
  }

  static async attack1(element) {
    playSound(applause);
    await pause(1000);
    player1.className = 'HeroImages Attack1';
    damage = 15;
    weaponHero.src = bullet;
    await pause(700);
    cannonHero.className += ' go1';
    playSound(shot);
    player1.className = 'HeroImages Idle';
    await pause(1000);
    MonsterWound.className += ' wound';
    await pause(200);
    Monster.setMonsterActivity('Hurt', element.ImgMonster.headDie, element.ImgMonster.bodyDie, element.ImgMonster.legsDie);
    playSound(cryMonster);
    MonsterWound.className = 'MonsterIm';
    // await pause(8000);
  }

  static async attack3(element) {
    playSound(applause);
    await pause(1000);
    damage = 20;
    weaponHero.src = shelling;
    player1.className = 'HeroImages Attack3 runing-left';
    await pause(1000);
    player1.className = 'HeroImages Hero2-runing-right';
    await pause(1000);
    player1.className = 'HeroImages Hero2-Attack';
    await pause(1000);
    playSound(explosion);
    cannonHero.className += ' go3';
    await pause(1000);
    MonsterWound.className += ' explosion';
    Monster.setMonsterActivity('Hurt', element.ImgMonster.headDie, element.ImgMonster.bodyDie, element.ImgMonster.legsDie);
    playSound(cryMonster);
    player1.className = 'HeroImages Hero2-runing-left';
    await pause(1000);
    MonsterWound.className = 'MonsterIm';
    player1.className = 'HeroImages Attack3 runing-right';
    await pause(1000);
    player1.className = 'HeroImages Idle';
  }

  static async attack5(element) {
    playSound(applause);
    await pause(1000);
    damage = 10;
    weaponHero.src = knife;
    player1.className = 'HeroImages runing-right';
    playSound(heroRuning);
    await pause(2000);
    player1.className = 'HeroImages Attack5';
    playSound(kickKnife);
    Monster.setMonsterActivity('Hurt', element.ImgMonster.headDie, element.ImgMonster.bodyDie, element.ImgMonster.legsDie);
    playSound(cryMonster);
    await pause(2000);
    playSound(heroRuning);
    player1.className = 'HeroImages runing-left';
    await pause(2000);
    player1.className = 'HeroImages Idle';
  }

  async healthUp() {
    playSound(applause);
    await pause(1000);
    player1.className = 'HeroImages life_up';
    await pause(2000);
    player1.className = 'HeroImages Idle';
    if (this.life >= 100) {
      damage = 0;
    } else {
      damage = -10;
    }
  }
}

let alian;
let hero;

class Game {
  constructor() {
    this.level = '';
  }

  init() {
    alian = new Monster(MonsterHeadIdle, MonsterBodyIdle, MonsterLegsIdle);
    hero = new Hero();
    this.level = 0;
  }

  static clearGame() {
    document.querySelector('.MonsterIm.legs').style.backgroundImage = '';
    document.querySelector('.MonsterIm.head').style.backgroundImage = '';
    document.querySelector('.MonsterIm.body').style.backgroundImage = '';
    document.querySelector('.life.Monster').style.width = '';
    document.querySelector('.infoMonster').innerHTML = '';
    document.querySelector('.nameMonsterLife').innerHTML = '';
    MonsterWound.style.backgroundImage = '';

    document.querySelector('.life.Hero').style.width = '';
    document.querySelector('.infoHero').innerHTML = '';
    document.querySelector('.nameHeroLife').innerHTML = '';
    player1.style.backgroundImage = '';
    attackHero.className = '';
    document.querySelector('.MainWrapper').className = 'MainWrapper';

    document.querySelector('.roundNumder').innerHTML = 'Уровень ';
  }

  async start() {
    document.querySelector('.MainWrapper').className += scen[Math.round(Math.random() * 3)];
    if (!document.querySelector('audio')) {
      playSound(music, true);
    }
    hero.name = ReturnUserName().name;
    hero.password = ReturnUserName().password;

    this.level = ScoreManadge.checkForAvailbilityLevel(hero.name, hero.password);
    await ScoreManadge.setScore(hero.name, hero.password, this.level);
    await ScoreManadge.drawScore();

    this.level = this.level + 1;
    document.querySelector('.button__start').style.fontSize = '14vh';
    document.querySelector('.button__start').innerHTML = 3;
    await pause(700);
    document.querySelector('.button__start').innerHTML = 2;
    await pause(700);
    document.querySelector('.button__start').innerHTML = 1;
    await pause(700);
    document.querySelector('.button__start').style.fontSize = '10vh';
    document.querySelector('.button__start').innerHTML = 'погнали';
    await pause(1000);
    document.querySelector('.button__start').innerHTML = 'начать';
    document.querySelector('#start-page').className = 'start__page';
    document.querySelector('.roundNumder').innerHTML = `Уровень ${this.level}`;
    alian.init();
    hero.init();
    await pause(2000);
    spells.className += ' Gooo';
    document.querySelector('.modal-dialog').className += ' active';
    document.querySelector('.button.top-left').focus();
  }
}

const newGame = new Game();
newGame.init();

function drawLifeChanges(player, lifes) {
  if ((lifes.style.width.split('px').join('') - damage) < 101) {
    lifes.style.width = `${lifes.style.width.split('px').join('') - damage}px`;
    player.life -= damage;
  } else {
    lifes.style.width = '100px';
    player.life = 100;
  }
}

async function AttackPlayer() {
  const healt = document.querySelector('.nameMonsterLife');
  const life = lifeMonster;

  if (lifeMonster.style.width.split('px').join('') < damage) {
    lifeMonster.style.width = '0px';
    alian.life = 0;
    healt.innerHTML = alian.life;
  } else if (damage < 0) {
    await drawLifeChanges(hero, lifeHero);
    document.querySelector('.nameHeroLife').innerHTML = hero.life;
  } else {
    await drawLifeChanges(alian, life);
    healt.innerHTML = alian.life;
  }
  if (lifeMonster.style.width.split('px').join('') < 60 && lifeMonster.style.width.split('px').join('') > 30) {
    lifeMonster.style.background = 'yellow';
  }
  if (lifeMonster.style.width.split('px').join('') < 29) {
    lifeMonster.style.background = 'red';
  }
  cannonHero.className = 'bulletHero';

  if (!hero.life || !alian.life) {
    if (!hero.life) {
      player1.style.backgroundImage = `url(${tombstoneHero})`;
      player1.className += ' animation';
    }
    if (!alian.life) {
      await pause(1000);
      Monster.setMonsterActivity('', '', '', '');
      MonsterWound.style.backgroundImage = `url(${tombstoneHero})`;
    }

    await pause(3000);

    hero.winCount += 1;
    ScoreManadge.setScore(hero.name, hero.password, hero.winCount);
    ScoreManadge.drawScore();
    document.querySelector('.game-over').innerHTML = `Ты одолел ${newGame.level}-го монстра!!!`;
    document.querySelector('#inscription').className += ' animation';
    document.querySelector('#gameOver').className += ' animation';

    await pause(3000);

    document.querySelector('.game-over').innerHTML = 'готовся к следующей битве...';

    Game.clearGame();

    await pause(3000);

    alian = new Monster();
    hero = new Hero();

    document.querySelector('#start-page').className += ' active';
    document.querySelector('#inscription').className = 'inscription';
    document.querySelector('#gameOver').className = 'modal-game-over';

    await newGame.start();
  } else {
    Monster.setMonsterActivity('', alian.ImgMonster.headIdle, alian.ImgMonster.bodyIdle, alian.ImgMonster.legsIdle);

    await pause(2000);

    spells.className += ' Gooo';
    document.querySelector('.modal-dialog').className += ' active';
    document.querySelector('.button.top-left').focus();
  }
}

const startAttackHero = async (delay) => {
  await pause(delay);
  await AttackPlayer();
};

async function attackMonster(delay) {
  await pause(delay);
  const healt = document.querySelector('.nameHeroLife');
  const life = lifeHero;

  if (lifeHero.style.width.split('px').join('') < damage) {
    lifeHero.style.width = '0px';
    hero.life = 0;
    healt.innerHTML = hero.life;
  } else if (damage < 0) {
    await drawLifeChanges(alian, lifeMonster);
    document.querySelector('.nameMonsterLife').innerHTML = alian.life;
    healt.innerHTML = alian.life;
  } else {
    await drawLifeChanges(hero, life);
    document.querySelector('.nameHeroLife').innerHTML = hero.life;
  }
  if (lifeHero.style.width.split('px').join('') < 60 && lifeHero.style.width.split('px').join('') > 30) {
    lifeHero.style.background = 'yellow';
  }
  if (lifeHero.style.width.split('px').join('') < 29) {
    lifeHero.style.background = 'red';
  }
  cannonHero.className = 'bulletHero';

  if (!hero.life || !alian.life) {
    if (!hero.life) {
      document.querySelector('audio').remove();
      document.querySelector('#mute').value = ' выключить звук ';
      await playSound(ded);
      player1.className = 'tombstoneHero';
    }
    if (!alian.life) {
      await pause(1000);
      Monster.setMonsterActivity('', '', '', '');
      MonsterWound.style.backgroundImage = `url(${tombstoneHero})`;
    }

    await pause(3000);

    document.querySelector('.game-over').innerHTML = 'Ты проиграл';
    document.querySelector('#inscription').className += ' animation';
    document.querySelector('#gameOver').className += ' animation';

    await pause(3000);

    document.querySelector('.game-over').innerHTML = 'Не огорчайся, попробуй еще раз';

    Game.clearGame();

    await pause(3000);

    document.querySelector('#inscription').className = 'inscription';
    document.querySelector('#gameOver').className = 'modal-game-over';
    document.querySelector('#start-page').className += ' active';
    document.querySelector('.game-container').className = 'game-container';
  } else {
    player1.className = 'HeroImages Idle';
    await pause(2000);
    spells.className += ' Gooo';
    document.querySelector('.modal-dialog').className += ' active';
    document.querySelector('.button.top-left').focus();
  }
}

function goAttackMonster(wordSpell) {
  if (wordSpell === 'knife' || wordSpell === 'projectile' || wordSpell === 'bullet') {
    damage = 20;
    alian.attack();
    attackMonster(5000);
  }
  if (wordSpell === 'first aid kit') {
    damage = -10;
    alian.healthUp();
    attackMonster(0);
  }
}

function goAttackHero(wordSpell) {
  if (wordSpell === 'knife') {
    Hero.attack5(alian);
    startAttackHero(6000);
  }
  if (wordSpell === 'projectile') {
    Hero.attack3(alian);
    startAttackHero(7500);
  }
  if (wordSpell === 'first aid kit') {
    damage = -10;
    hero.healthUp();
    startAttackHero(0);
  }
  if (wordSpell === 'bullet') {
    Hero.attack1(alian);
    startAttackHero(5400);
  }
}

document.querySelector('body').addEventListener('click', (e) => {
  if (e.target.className === 'button__start') {
    newGame.start();
    document.querySelector('main').style.backgroundImage = 'url()';
  }
});

document.querySelector('.spells').addEventListener('click', (e) => {
  if (e.target.className === 'button top-left'
    || e.target.className === 'button bottom-left'
    || e.target.className === 'button top-right'
    || e.target.className === 'button bottom-right') {
    wearponSelection = e.target.className;
    spells.className = 'spells';
    document.querySelector('.modal-dialog').className = 'modal-dialog';
    damage = 0;

    if (wearponSelection === 'button top-left') {
      weaponsForAttack = 'bullet';

      conditionTask = taskArray[Math.floor(Math.random() * taskArray.length)]();
      document.querySelector('#task').className = 'modal modal--task';
    } else
    if (wearponSelection === 'button top-right') {
      weaponsForAttack = 'first aid kit';

      conditionTask = taskArray[Math.floor(Math.random() * taskArray.length)]();
      document.querySelector('#task').className = 'modal modal--task';
    } else
    if (wearponSelection === 'button bottom-left') {
      weaponsForAttack = 'projectile';
      conditionTask = taskArray[Math.floor(Math.random() * taskArray.length)]();
      document.querySelector('#task').className = 'modal modal--task';
    } else
    if (wearponSelection === 'button bottom-right') {
      weaponsForAttack = 'knife';
      conditionTask = taskArray[Math.floor(Math.random() * taskArray.length)]();
      document.querySelector('#task').className = 'modal modal--task';
    }
    Monster.setMonsterActivity('', alian.ImgMonster.headIdle, alian.ImgMonster.bodyIdle, alian.ImgMonster.legsIdle);
  }
});

// обработчик тасков

const handlerTemplate = (taskNumber) => {
  if (document.querySelector(taskNumber).value.toLowerCase() === String(conditionTask)) {
    document.querySelector('.task__condition').innerHTML = 'правильно';
    goAttackHero(weaponsForAttack);
  } else {
    document.querySelector('.task__condition').innerHTML = 'неправильно';
    goAttackMonster(weaponsForAttack);
  }
  setTimeout(() => { document.querySelector('.modal.modal--task').className += ' element--hidden'; }, 0);
};

// обработчик событий
document.querySelector('.modal').addEventListener('click', (e) => {
//   обработчик первого таска
  if (e.target.id === 'task1__button') { // если выпал таск 1
    handlerTemplate('.task-1');
  }

  //  обработчик второго таска
  if (e.target.id === 'task2__button1' || e.target.id === 'task2__button2' || e.target.id === 'task2__button3') {
    let comparison;
    switch (e.target.id) {
      // eslint-disable-next-line no-lone-blocks
      case 'task2__button1': {
        comparison = `${conditionTask[0]} < ${conditionTask[1]}`;
        document.querySelector('.task-1').value = '<';
      }
        break;
      // eslint-disable-next-line no-lone-blocks
      case 'task2__button2': {
        comparison = `${conditionTask[0]} > ${conditionTask[1]}`;
        document.querySelector('.task-1').value = '>';
      }
        break;
      // eslint-disable-next-line no-lone-blocks
      case 'task2__button3': {
        comparison = `${conditionTask[0]} == ${conditionTask[1]}`;
        document.querySelector('.task-1').value = '=';
      }
        break;
      default:
        break;
    }
    if (eval(comparison) === true) {
      document.querySelector('.task__condition').innerHTML = 'правильно';
      goAttackHero(weaponsForAttack);
    } else {
      document.querySelector('.task__condition').innerHTML = 'неправильно';
      goAttackMonster(weaponsForAttack);
    }
    setTimeout(() => { document.querySelector('.modal.modal--task').className += ' element--hidden'; }, 0);
  }

  // обработчик третьего таска
  if (e.target.id === 'task3__button') { // если выпал таск 3
    handlerTemplate('.task-3');
  }

  // обработчик четвертого таска
  if (e.target.id === 'task4__button') { // если выпал таск 4
    const ansver = document.querySelectorAll('.task-4');
    if (Array.from(ansver).map(item => item.innerText).join('') === conditionTask) {
      document.querySelector('.task__condition_task4').innerHTML = 'правильно';
      goAttackHero(weaponsForAttack);
    } else {
      document.querySelector('.task__condition_task4').innerHTML = 'неправильно';
      goAttackMonster(weaponsForAttack);
    }
    setTimeout(() => { document.querySelector('.modal.modal--task').className += ' element--hidden'; }, 0);
  }

  // обработчик таска №5
  if (e.target.id === 'task5__button1' || e.target.id === 'task5__button2'
  || e.target.id === 'task5__button3' || e.target.id === 'task5__button4'
  || e.target.id === 'task5__button5') {
    if (e.target.value === conditionTask) {
      document.querySelector('.task__condition').innerHTML = 'правильно';
      goAttackHero(weaponsForAttack);
    } else {
      document.querySelector('.task__condition').innerHTML = 'неправильно';
      goAttackMonster(weaponsForAttack);
    }
    setTimeout(() => { document.querySelector('.modal.modal--task').className += ' element--hidden'; }, 0);
  }

  // обработчик таска №6
  if (e.target.id === 'task6__button') {
    handlerTemplate('.task-6');
  }

  // обработчик таска №7
  if (e.target.id === 'task7__button') {
    handlerTemplate('.task-7');
  }

  // обработчик таска №8
  if (e.target.id === 'task8__button') {
    const variable = document.querySelector('.task-8').value;
    if (conditionTask.indexOf(variable) !== -1) {
      document.querySelector('.task__condition').innerHTML = 'правильно';
      goAttackHero(weaponsForAttack);
    } else {
      document.querySelector('.task__condition').innerHTML = 'неправильно';
      goAttackMonster(weaponsForAttack);
    }
    setTimeout(() => { document.querySelector('.modal.modal--task').className += ' element--hidden'; }, 0);
  }
  // обработчик таска №9
  if (e.target.id === 'task9__button1' || e.target.id === 'task9__button2') {
    let val;
    if (e.target.id === 'task9__button1') {
      val = 'true';
    } else {
      val = 'false';
    }
    if (val === conditionTask) {
      document.querySelector('.task__condition').innerHTML = 'правильно';
      goAttackHero(weaponsForAttack);
    } else {
      document.querySelector('.task__condition').innerHTML = 'неправильно';
      goAttackMonster(weaponsForAttack);
    }
    setTimeout(() => { document.querySelector('.modal.modal--task').className += ' element--hidden'; }, 0);
  }
  // обработчик таска №10
  if (e.target.id === 'task10__button') {
    handlerTemplate('.task-10');
  }
});
