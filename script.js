document.body.onload = initialize;

async function initialize() {
  const json = await readJsonData();
  const gamesArray = json["games"];
  //addHeaderContainerToDocument();
  for (let i = 0; i < gamesArray.length; i++) {
    showGame(gamesArray[i]);
  }
}
function showGame(singleGame) {
  const gameContainer = document.createElement("div");
  gameContainer.classList.add("game");
  document.body.appendChild(gameContainer);

  const dateContainer = document.createElement("div");
  dateContainer.classList.add("gameDate");
  dateContainer.innerText = `${singleGame["date"]}`;
  gameContainer.appendChild(dateContainer);

  const teamsContainer = document.createElement("div");
  teamsContainer.classList.add("Teamclass");
  teamsContainer.innerText = `${singleGame["team1"]} : ${singleGame["team2"]}`;
  gameContainer.appendChild(teamsContainer);

  const goalsContainer = document.createElement("div");
  goalsContainer.classList.add("score");
  goalsContainer.innerText = `${singleGame["goalsTeam1"]} : ${singleGame["goalsTeam2"]}`;
  gameContainer.appendChild(goalsContainer);
}

async function readJsonData() {
  const response = await fetch("./data.json");
  const json = await response.json();
  return json;
}
