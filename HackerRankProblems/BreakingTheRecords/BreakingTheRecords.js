/**
 
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
She tabulates the number of times she breaks her season record for most points and least points in a game. 
Points scored in the first game establish her record for the season, and she begins counting from there.

Example 

Scores are in the same order as the games played. She tabulates her results as follows:
                                     Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1

     Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

 */

/**
 * Big O Notation: O(N) -> size of inputs will always determine number of steps, because each score must be checked in entire array
 * @param {number[]} scores all game scores in order of game played through season
 * @returns {number[]} records index 0 is times maximum score was beat, index 1 is times minimum score was beat
 */
function breakingRecords(scores) {
  let records = [0, 0];
  let currentMax = scores[0];
  let currentMin = scores[0];
  for (let index = 1; index < scores.length; index++) {
    if (scores[index] > currentMax) {
      records[0]++;
      currentMax = scores[index];
    }
    if (scores[index] < currentMin) {
      records[1]++;
      currentMin = scores[index];
    }
  }

  return records;
}

module.exports = breakingRecords;
