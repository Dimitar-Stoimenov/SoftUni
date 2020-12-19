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

'може да се добави отното с .appendChild() и дори евентуално да му се добави нещо:'
childElement.innerHTML += ' + added content'
parentElement.appendChild(childElement)

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

