// 1. カードデータ（全40種、すべて第1弾に設定）
const cardDatabase = [
  { id: 1, name: "エナジーボール", cost: 3, tribe: "-", power: 0, effect: "・エナジーから1枚を選んで墓地に置きカードを2枚引く。", evol: false, unique: false, type: "呪文", set: "第1弾", image: "images/energy_ball.jpg" },
  { id: 2, name: "メルト・パンチ", cost: 7, tribe: "-", power: 0, effect: "・カウンター3<br>・場にあるモンスター1体を破壊する。", evol: false, unique: false, type: "呪文", set: "第1弾", image: "images/melt_punch.jpg" },
  { id: 3, name: "デカクラクション", cost: 5, tribe: "-", power: 0, effect: "・カウンター2<br>・手札を1枚捨てる。<br>・場のコスト5以下のモンスターを1体選び破壊する。", evol: false, unique: false, type: "呪文", set: "第1弾", image: "images/bighorn.jpg" },
  { id: 4, name: "墓起こし", cost: 5, tribe: "-", power: 0, effect: "・自分の墓地のモンスターを1枚選び手札に加える。", evol: false, unique: false, type: "呪文", set: "第1弾", image: "images/grave_exhumation.jpg" },
  { id: 5, name: "電線復帰", cost: 4, tribe: "-", power: 0, effect: "・自分の墓地のカードを1枚選びエナジー化させる。", evol: false, unique: false, type: "呪文", set: "第1弾", image: "images/power_restored.jpg" },
  { id: 6, name: "王家の宝箱", cost: 6, tribe: "-", power: 0, effect: "・カウンター2<br>・カードを3枚引く。", evol: false, unique: false, type: "呪文", set: "第1弾", image: "images/the_royal_chest.jpg" },
  { id: 7, name: "セモタレエビ", cost: 3, tribe: "魚", power: 1000, effect: "・登場時、山札の上から2枚を見る。そのあと山札の上と下にそれぞれ1枚ずつ戻す。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/semotare_shrimp.jpg" },
  { id: 8, name: "トンカチヘッド・シャーク", cost: 5, tribe: "魚", power: 7000, effect: "・カウンター3<br>・自分のモンスターがバトルに勝った時、このモンスターは手札に戻る。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/hammerhead_shark.jpg" },
  { id: 9, name: "大海覇者 メガロエンペラー", cost: 9, tribe: "魚/皇帝主", power: 8000, effect: "・ツインアタッカー<br>・登場時、次のうちどちらかを選ぶ。<br>▶相手のモンスターを1体破壊する。<br>▶相手の手札を2枚まで破壊する。<br>・攻撃時、自分のエナジーを1枚選び手札に戻す。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/Megal Emperor.jpg" },
  { id: 10, name: "闇取り引きのディモン", cost: 6, tribe: "悪魔", power: 3000, effect: "・登場時、場のカード1枚を破壊する。こうしてカードが破壊されたプレイヤーはカードを2枚まで引く。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/dekoj_of_the_black_market.jpg" },
  { id: 11, name: "大空の使徒 デル・ローエ", cost: 8, tribe: "天使", power: 7000, effect: "・登場時、自分は手札からカードを2枚を選び捨て、3枚引く。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/del_roe.jpg" },
  { id: 12, name: "アルターナイツ ガーウィン", cost: 6, tribe: "ナイト", power: 4000, effect: "・登場時、相手のパワー3000以下のモンスターを1体破壊する。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/Alter Knights Garwin.jpg" },
  { id: 13, name: "アルターナイツ トリストラ", cost: 8, tribe: "ナイト", power: 10000, effect: "（効果なし）", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/Altanights Tristola.jpg" },
  { id: 14, name: "飛雷硬化 バリズム", cost: 3, tribe: "雷人", power: 3000, effect: "・フラッシュカウンター<br>・ガードナー<br>・登場時、自分の手札を1枚捨てる。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/Balism.jpg" },
  { id: 15, name: "豪快迅雷 ゴロツキ", cost: 4, tribe: "雷人", power: 2000, effect: "・登場時、カードを1枚引き、手札を1枚捨てる。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/thug.jpg" },
  { id: 16, name: "爆大電磁 ドン・エレキ", cost: 10, tribe: "雷人", power: 6000, effect: "・ツインアタッカー<br>・登場時、相手モンスター全てをスリープさせる。<br>・自分の場に、他の「種族：雷人」が2つ以上あればこのモンスターは「能力：速攻」を持つ。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/Don Eleki.jpg" },
  { id: 17, name: "見習い電導師 モーリス", cost: 3, tribe: "フォレスター", power: 1000, effect: "・登場時、このモンスターをエナジーに置く。その後エナジーから1枚を選び墓地に置く。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/Maurice.jpg" },
  { id: 18, name: "見習い電導師 シロビシン", cost: 5, tribe: "フォレスター", power: 4000, effect: "・このモンスターは、バトル中パワーが+3000される。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/Apprentice Electrician Shirobishin.jpg" },
  { id: 19, name: "電導師 キツネミア", cost: 5, tribe: "フォレスター", power: 2000, effect: "・登場時、山札の上から1枚をエナジー化する。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/Electromancer Kitsune Mia.jpg" },
  { id: 20, name: "電導師 フェネックス", cost: 4, tribe: "フォレスター", power: 3000, effect: "・このモンスターが破壊されて墓地に置かれる時、代わりにエナジーになる。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/Electromancer Fenix.jpg" },
  { id: 21, name: "一流電導師 テン・クロスタ", cost: 8, tribe: "フォレスター", power: 4000, effect: "・登場時、山札の上から2枚をエナジー化する。<br>・このモンスターは、エナジーにある「種族：フォレスター」の枚数分パワーが+1000される。こうしてパワーが8000を超えたら、このモンスターに「能力：ツインアタッカー」を、10000を超えたら「能力：速攻」を得る。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/Master Conductor Ten Cross.jpg" },
  { id: 22, name: "稲妻小僧 ビリザキッド", cost: 2, tribe: "雷人/スピードノイザー", power: 1000, effect: "・登場時、自分または相手のシールドが4枚以下ならこのモンスターは「能力：速攻」を得る。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/Lightning Kid.jpg" },
  { id: 23, name: "感電走族 パラリライダー", cost: 2, tribe: "雷人/スピードノイザー", power: 1000, effect: "・登場時、場の「種族：スピードノイザー」を選び、このターン「能力：ツインアタッカー」を与える。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/Electric Biker Gang Pararider.jpg" },
  { id: 24, name: "ソウオンカジキ", cost: 4, tribe: "魚/スピードノイザー", power: 1000, effect: "・速攻", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/Souon Swordfish.jpg" },
  { id: 25, name: "炎音 紅蝶羽", cost: 1, tribe: "堕虫/スピードノイザー", power: 1000, effect: "・このモンスターは、場のモンスターの数が自分の方が多い時だけ攻撃できる。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/Honoo Kouchouha.jpg" },
  { id: 26, name: "見極める主審 デラシャウト", cost: 3, tribe: "スピードノイザー", power: 3000, effect: "・登場時、手札を1枚捨てて1枚引く。捨てたカードが「種族：スピードノイザー」ならさらにもう1枚引き手札を1枚捨てる。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/The Discerning Referee Delashout.jpg" },
  { id: 27, name: "暴走する前歯 マモット", cost: 3, tribe: "スピードノイザー", power: 2000, effect: "・速攻<br>・登場時、自分のシールドを1枚選び手札に加える。<br>・登場時、場の「種族：スピードノイザー」を破壊する。しかし相手または自分のシールドが4枚以下ならこの効果は発動しない。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/Runaway Front Teeth Mamott.jpg" },
  { id: 28, name: "爆音狂竜 ブラストザウルス", cost: 8, tribe: "ドラゴン/スピードノイザー", power: 5000, effect: "・速攻<br>・手札にあるこのモンスターのコストは場の「種族：スピードノイザー」の数だけ少なくなる。<br>・登場時、場に他の「種族：スピードノイザー」があれば「能力：ガードナー」を持つモンスターを1体選びそれを破壊する。<br>・このモンスターは、場に他の「種族：スピードノイジー」があれば「能力：ツインアタッカー」を得る。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/Blastsaurus the Roaring Mad Dragon.jpg" },
  { id: 29, name: "魂の精霊", cost: 3, tribe: "スピリッツ/精霊", power: 3000, effect: "・登場時、カードを1枚引く<br>・このモンスターは相手に選ばれず、場に自分の「種族：精霊使い」が無ければ攻撃できない。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/Spirit of the Soul.jpg" },
  { id: 30, name: "奇跡の精霊", cost: 5, tribe: "スピリッツ/精霊", power: 3000, effect: "・登場時、山札の上から1枚をエナジー化する<br>・このモンスターは相手に選ばれず、場に自分の「種族：精霊使い」が無ければ攻撃できない。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/The Miracle Spirit.jpg" },
  { id: 31, name: "精霊の伝い手 フエセプス", cost: 9, tribe: "精霊使い", power: 4000, effect: "・登場時、山札の上から1枚をシールドに追加する。場に他の「精霊」カードがあれば、更にもう1枚追加する。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/Fueseps the Spirit Messenger.jpg" },
  { id: 32, name: "精霊の守り手 ディフィシウス", cost: 5, tribe: "精霊使い", power: 3000, effect: "・カウンター3<br>・ガードナー<br>・このモンスターは攻撃できない。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/Deficius Guardian of the Spirits.jpg" },
  { id: 33, name: "精霊の担い手 ギセウス", cost: 4, tribe: "精霊使い", power: 2000, effect: "・登場時、「精霊」カード1枚を破壊してもよい。そうしたら相手は自分のモンスターを1体選び破壊する。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/Giseus_the Spirit Bearer.jpg" },
  { id: 34, name: "精霊神話「第1章―光あれ」", cost: 2, tribe: "-", power: 0, effect: "・山札の上から2枚を表向きにする。その中から「種族：精霊」を全て手札に加え、残りを好きな順で山札の下に戻す。", evol: false, unique: false, type: "呪文", set: "第1弾", image: "images/Spirit Mythology1.jpg" },
  { id: 35, name: "精霊神 ファーザーズ・ゼウス", cost: 10, tribe: "神", power: 7000, effect: "・ツインアタッカー<br>・手札にあるこのモンスターのコストは場の「精霊」カードの数だけ少なくなる。<br>・登場時、相手は次ターンの終了時まで魔法カードを使うことが出来ない。", evol: false, unique: false, type: "モンスター", set: "第1弾", image: "images/Spirit God Father Zeus.jpg" },
  { id: 36, name: "破壊砲牙龍 ディクラスター・ドラゴン", cost: 10, tribe: "ドラゴン/改造龍機", power: 9000, effect: "・速攻<br>・ツインアタッカー<br>・登場時、お互いはシールドを1枚手札に加える。", evol: false, unique: true, type: "モンスター", set: "第1弾", image: "images/Destruction Fang Dragon Decluster Dragon.jpg" },
  { id: 37, name: "大爆発", cost: 13, tribe: "-", power: 0, effect: "・カウンター7<br>・場のモンスター全てを破壊する。", evol: false, unique: true, type: "呪文", set: "第1弾", image: "images/Massive explosion.jpg" },
  { id: 38, name: "秘術師 フィーデン・ニトロ", cost: 5, tribe: "悪魔/マジシャン", power: 5000, effect: "・自分のターン開始時、このモンスターを破壊する。そのあとモンスターが出るまで自分の山札をめくり、それを場に出す。", evol: false, unique: true, type: "モンスター", set: "第1弾", image: "images/Mystic Fiden Nitro.jpg" },
  { id: 39, name: "剛弾 ファウスト・ガントレット", cost: 4, tribe: "-", power: 0, effect: "・フラッシュカウンター<br>・場の相手カード1枚を破壊する。", evol: false, unique: true, type: "呪文", set: "第1弾", image: "images/Faust Gauntlet.jpg" },
  { id: 40, name: "閉ざされし暗黒の扉", cost: 13, tribe: "悪魔", power: 6666, effect: "・このモンスターは攻撃できない。<br>・自分のターン開始時、このモンスターを破壊する。そのあとカードを5枚引き、手札からコストが8以下の「種族：悪魔」を場に出す。", evol: false, unique: true, type: "モンスター", set: "第1弾", image: "images/The Sealed Door of Darkness.jpg" }
];

let currentUser = localStorage.getItem('deckUser') || null;
let myDeck = {}; 
let mySavedDecks = {}; 

const poolEl = document.getElementById('card-pool');
const deckListEl = document.getElementById('deck-list');
const countEl = document.getElementById('card-count');
const uniqueStatusEl = document.getElementById('unique-status');
const messageEl = document.getElementById('completion-message');

const searchBox = document.getElementById('search-box');
const filterType = document.getElementById('filter-type');
const filterTribe = document.getElementById('filter-tribe');
const filterSet = document.getElementById('filter-set'); // ★追加
const filterCost = document.getElementById('filter-cost');
const filterPowerMin = document.getElementById('filter-power-min');
const filterPowerMax = document.getElementById('filter-power-max');

const saveBtn = document.getElementById('save-deck-btn');
const deckNameInput = document.getElementById('deck-name-input');
const savedDecksListEl = document.getElementById('saved-decks-list');

// ---------------------------------------------------
// ログイン・初期化
// ---------------------------------------------------
function checkLogin() {
  if (currentUser) {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'block';
    document.getElementById('user-greeting').textContent = `ようこそ、${currentUser}`;
    document.getElementById('main-content').style.display = 'block';
    mySavedDecks = JSON.parse(localStorage.getItem(`decks_${currentUser}`)) || {};
    myDeck = JSON.parse(localStorage.getItem(`current_${currentUser}`)) || {};
    renderPool();
    renderDeck();
    renderSavedDecks();
  } else {
    document.getElementById('login-screen').style.display = 'block';
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'none';
  }
}

document.getElementById('login-btn').addEventListener('click', () => {
  const name = document.getElementById('username-input').value.trim();
  if (name) { currentUser = name; localStorage.setItem('deckUser', currentUser); checkLogin(); }
});

document.getElementById('logout-btn').addEventListener('click', () => {
  currentUser = null; localStorage.removeItem('deckUser'); checkLogin();
});

checkLogin();

// ---------------------------------------------------
// カード検索・絞り込み（★弾数を追加）
// ---------------------------------------------------
[searchBox, filterType, filterTribe, filterSet, filterCost, filterPowerMin, filterPowerMax].forEach(el => {
  el.addEventListener('input', renderPool);
});

function renderPool() {
  const keyword = searchBox.value.toLowerCase();
  const typeVal = filterType.value;
  const tribeVal = filterTribe.value;
  const setVal = filterSet.value; 
  const costVal = parseInt(filterCost.value);
  const pMin = parseInt(filterPowerMin.value) || 0;
  const pMax = parseInt(filterPowerMax.value) || 999999;

  const filtered = cardDatabase.filter(card => {
    const matchKeyword = card.name.includes(keyword) || card.effect.includes(keyword);
    
    // ▼ ここから変更：選ばれた項目によってチェックする場所を変える！
    let matchType = false;
    if (typeVal === "") {
      matchType = true; // 「すべての種類」なら全部OK
    } else if (typeVal === "ユニーク") {
      matchType = card.unique === true; // 「ユニーク」ならuniqueがtrueのカードだけOK
    } else {
      matchType = card.type === typeVal; // 「モンスター」「呪文」などなら通常のtypeチェック
    }
    // ▲ ここまで変更

    const matchTribe = tribeVal === "" || card.tribe.includes(tribeVal);
    const matchSet = setVal === "" || card.set === setVal;
    const matchCost = isNaN(costVal) || card.cost === costVal;
    const matchPower = card.power >= pMin && card.power <= pMax;

    return matchKeyword && matchType && matchTribe && matchSet && matchCost && matchPower;
  });

  // ...(以下、poolEl.innerHTML = ''; などはそのままです)...

  poolEl.innerHTML = '';
  filtered.forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    let badges = (card.unique ? '<span class="badge-unique">ユニーク</span> ' : '') + (card.evol ? '<span class="badge-evol">エボル</span>' : '');
    cardDiv.innerHTML = `
      <div class="card-image-box"><img src="${card.image}" class="card-img"></div>
      <div class="card-info">
        <div class="card-header">
          <span class="card-name">${card.name} ${badges}</span>
          <span class="card-cost">コスト: ${card.cost}</span>
        </div>
        <div class="card-tags">種類: ${card.type} | 種族: ${card.tribe} | 弾数: ${card.set} | パワー: ${card.power > 0 ? card.power : '-'}</div>
        <div class="card-effect">${card.effect}</div>
        <div class="card-actions"><button onclick="addCard(${card.id})">追加</button></div>
      </div>
    `;
    poolEl.appendChild(cardDiv);
  });
}

// ---（以下、addCard, removeCard, renderDeck, saveBtnなどは前回と同じ）---
function addCard(id) {
  const card = cardDatabase.find(c => c.id === id);
  if (getTotalCount() >= 40) return alert("デッキは最大40枚です！");
  if ((myDeck[id] || 0) >= 4) return alert("同名カードは4枚までです！");
  if (card.unique && hasUniqueCard()) return alert("ユニークカードは1枚までです！");
  myDeck[id] = (myDeck[id] || 0) + 1;
  saveCurrentState();
}

function removeCard(id) {
  if (myDeck[id] > 0) { myDeck[id]--; if (myDeck[id] === 0) delete myDeck[id]; saveCurrentState(); }
}

function saveCurrentState() {
  localStorage.setItem(`current_${currentUser}`, JSON.stringify(myDeck));
  renderDeck();
}

function renderDeck() {
  deckListEl.innerHTML = '';
  let totalCards = 0;
  let hasUnique = false;
  for (const id in myDeck) {
    const count = myDeck[id];
    const card = cardDatabase.find(c => c.id === parseInt(id));
    if(!card) continue;
    totalCards += count;
    if(card.unique && count > 0) hasUnique = true;
    const deckItem = document.createElement('div');
    deckItem.className = 'card';
    deckItem.innerHTML = `
      <div class="card-image-box"><img src="${card.image}" class="card-img"></div>
      <div class="card-info">
        <div class="card-header"><span class="card-name">${card.name}</span><span style="font-weight:bold;">x ${count}枚</span></div>
        <div class="card-actions"><button class="btn-remove" onclick="removeCard(${card.id})">外す</button></div>
      </div>
    `;
    deckListEl.appendChild(deckItem);
  }
  countEl.textContent = totalCards;
  uniqueStatusEl.textContent = hasUnique ? "設定済み OK!" : "未設定 (必須)";
  uniqueStatusEl.style.color = hasUnique ? "#27ae60" : "#e74c3c";
  
  const isComplete = totalCards === 40 && hasUnique;
  
  // ★ 変更点：メッセージを少し親切にして、保存ボタンを常に有効にしました
  if (isComplete) {
    messageEl.textContent = "✨ デッキ完成！";
    messageEl.className = "complete";
  } else {
    messageEl.textContent = "デッキ未完成（作成途中でも保存できます）";
    messageEl.className = "incomplete";
  }
  
  // ★ 変更点：常に false (無効化しない) にすることで、いつでも保存可能になります
  saveBtn.disabled = false; 
}

saveBtn.addEventListener('click', () => {
  const deckName = deckNameInput.value.trim();
  if (!deckName) return alert("デッキ名を入力してください");
  mySavedDecks[deckName] = Object.assign({}, myDeck);
  localStorage.setItem(`decks_${currentUser}`, JSON.stringify(mySavedDecks));
  alert(`「${deckName}」を保存しました！`);
  deckNameInput.value = "";
  renderSavedDecks();
});

function renderSavedDecks() {
  savedDecksListEl.innerHTML = '';
  const deckNames = Object.keys(mySavedDecks);
  if (deckNames.length === 0) {
    savedDecksListEl.innerHTML = '<p>保存されたデッキはありません。</p>';
    return;
  }
  deckNames.forEach(name => {
    const item = document.createElement('div');
    item.className = 'saved-deck-item';
    item.innerHTML = `
      <span style="font-weight:bold;">${name}</span>
      <div>
        <button onclick="loadDeck('${name}')" style="background-color: #3498db; margin-right: 5px;">読み込む</button>
        <button onclick="deleteDeck('${name}')" style="background-color: #e74c3c;">削除</button>
      </div>
    `;
    savedDecksListEl.appendChild(item);
  });
}

function loadDeck(name) {
  if(confirm(`「${name}」を編集エリアに読み込みますか？`)) {
    myDeck = Object.assign({}, mySavedDecks[name]);
    saveCurrentState();
  }
}

function deleteDeck(name) {
  if(confirm(`デッキ「${name}」を完全に削除しますか？`)) {
    delete mySavedDecks[name];
    localStorage.setItem(`decks_${currentUser}`, JSON.stringify(mySavedDecks));
    renderSavedDecks();
  }
}

function getTotalCount() { let t = 0; for (let i in myDeck) t += myDeck[i]; return t; }
function hasUniqueCard() { for (let i in myDeck) { const c = cardDatabase.find(x => x.id == parseInt(i)); if (c && c.unique) return true; } return false; }
document.getElementById('clear-deck-btn').addEventListener('click', () => { if(confirm("リセットしますか？")) { myDeck = {}; saveCurrentState(); } });