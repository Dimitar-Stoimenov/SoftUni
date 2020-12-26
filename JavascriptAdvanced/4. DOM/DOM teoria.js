'there are a few ways to find a certain HTML element in the DOM:'
- 'by ID' - getElementByID();
- 'by tag name' - getElementsByTag();
- 'by class name' - getElementsByClassName();
- 'by CSS selector' - querySelector();

'.innerHTML взима нещо, което се намира вътре в HTML-а'
let ulElement = document.querySelector('ul')
ulElement.innerHTML += '<li> Newly added!</li>'
'document означава в момента заредения HTML документ'

'.attributes може да се достъпват като обект, примерно:'
ulElement.attributes.id

'.setAttribute() - примерно:'
ulElement.setAttribute('id', 'Pesho');

'.style - може да се променят CSS пропъртитата динамично:'
liElement.style.backgroundColor = 'pink'
liElement.style.color = 'white'

'.removeChild() - изтрива child от ДОМ дървото:'
parentElement.removeChild(childElement)
'но изтрития child не спира да съществува! има го в памета и може да се извика, просто вече не е вързано към DOM дървото'

'може да се добави отново с .appendChild() и дори евентуално да му се добави нещо:'
childElement.innerHTML += ' + added content'
parentElement.appendChild(childElement)
'appendChild(), добавя най-отзад, .prepend() може да добави най-отпред'
'реално appendChild() и prepend() могат да разместят различните неща, ако се сложат вътре в тях директно'

'.replaceChild() - може да се сменя child елемент по следния начин:'
parentElement.replaceChild(newChild, oldChild)

'document.write дописва накрая на документа:'
document.write('Pisha si kot si iskam')

'document.createElement("p") - създаване на ДОМ елемент с таг "p". той не е в ДОМ дървото, но може да бъде присъединен с .appendChild()'
let p = document.createElement("p")

'клониране на ДОМ елементс .cloneNode(), като ако искаме да включим и елементите във него се слага true в скобите - .cloneNode(true)'
let newLiElement = liElement.cloneNode()
'и после можем да го добавим с .appendChild()'

'премахване на child от дом дървото:'
firstChild.remove()
'или'
parent.removeChild(firstChild)
'не го трият директно - може да се закачи обратно с appendChild()'

.setAttributes()
.removeAttributes()
.hasAttributes()

'.classList - за манипулации на класовете на елемента:'
'има .add() .remove()'
liElement.classList.add('selected')
'това добави нов клас на елемента с име "selected"'

'можем да взимаме парент елемента от чайлда му:'
let parentEl = liElement.parentElement;

'също може да взимаме чайлд от парента:'
parentElement.children
'връща списък (масив) с всички деца'
'може да взимаме и първия или последния чайлд със следните команди:'
.firstElementChild
.lastElementChild

'може да взимаме следващ или предишен sibling:'
.nextElementSibling
.previousElementSibling
'тези могат да се нестват един в друг, примерно:'
.nextElementSibling.nextElementSibling.nextElementSibling

'сет интервал на който да се изпълнява определена фунцкяи и спирането и:'
let intervalId = setInterval(() => {
    counter++
    buttonElement.click() //това е хванатия елемент, който кликаме
    if (counter > 5) {
        clearInterval(intervalId)
    }
}, 4000)

'пример за адване на eventListener на един parent, вместо на всеки child поотделно'
'по този начин се адва само един event listener, за оптимизиране'
parentElement.addEventListener('click', onListItemClick);
function onListItemClick(e) {
    if (e.target.tagName === 'LI') {
        let paddingValue = parseInt(e.target.style.paddingLeft) || 0;

        paddingValue += 3

        e.target.style.paddingLeft = paddingValue + 'px'
    }
}

'.target и .currentTarget са различни - current e този, върху който е зададен евента (обикновено е парент) - таргет е този, който е натиснат'
