function createEnum(values) {
  const enumObject = {};
  for (const val of values) {
    enumObject[val] = val;
  }
  return Object.freeze(enumObject);
}

gameState = createEnum(["StartScreen", "GameScreen", "GameOverScreen"]);

state = gameState.StartScreen;

switch (state) {
  case gameState.StartScreen:
    console.log(1);
  case gameState.GameScreen:
    console.log(2);
  case gameState.GameOverScreen:
    console.log(3);
}
