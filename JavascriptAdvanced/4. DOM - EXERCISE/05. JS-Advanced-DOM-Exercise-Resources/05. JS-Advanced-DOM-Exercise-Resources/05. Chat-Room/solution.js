function solve() {
   let btn = document.getElementById('send')

   btn.addEventListener('click', () => {
      let messageBox = document.getElementById('chat_input')
      let message = messageBox.value

      let parentElement = document.getElementById('chat_messages')
      let newMessage = document.createElement('div')
      parentElement.appendChild(newMessage)
      newMessage.textContent = message
      newMessage.className = 'message my-message'

      messageBox.value = ''
   })
}