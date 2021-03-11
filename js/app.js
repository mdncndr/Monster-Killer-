const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

let choosenMaxValue = 100;
let currentMonstrerHealth = choosenMaxLife;
let currenPlayerHealth = choosenMaxLife;

adjustHealthBars(choosenMaxLife);

function endRound() {
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currenPlayerHealth -= playerDamage;

    if (currentMonstrerHealth <= 0 && currenPlayerHealth > 0) {
        alert('You won!');
    } else if
        (currenPlayerHealth <= 0 && currentMonstrerHealth > 0) {
        alert('You lost!');
    } else if (currenPlayerHealth <= 0 && currentMonstrerHealth <= 0) {
        alert('Youhave a draw!');
    }
}

function attackMonster(mode) {
    let maxDamage;
    if (mode === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    }
    else if (mode === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonstrerHealth -= damage;
    endRound();
}

function attackHandler() {
    attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster('STRONG_ATTACK');
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal to more than your max initial health.");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
}
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
