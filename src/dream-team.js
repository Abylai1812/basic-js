const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // проверяем, что параметр members является массивом
  if (!Array.isArray(members)) {
    return false;
  }
  
  // отфильтровываем массив members так, чтобы в нем остались только строки
  const filteredMembers = members.filter(member => typeof member === 'string');
  
  // производим преобразование каждого имени участника в название команды
  const dreamTeamName = filteredMembers.map(member => {
    // получаем первую букву имени без учета пробелов
    const firstLetter = member.trim().charAt(0);
    // преобразуем первую букву в верхний регистр
    return firstLetter.toUpperCase();
  });
  
  // сортируем полученные буквы по алфавиту
  const sortedName = dreamTeamName.sort();
  
  // объединяем полученные буквы в строку и возвращаем результат
  return sortedName.join('');
}



module.exports = {
  createDreamTeam
};
