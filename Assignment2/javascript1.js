document.addEventListener('DOMContentLoaded', function() {

document.querySelector("#new-task").onsubmit = function() {

      const li = document.create('li');
      li.innerHTML = document.querySelector('#task').value;
      document.querySelector("#tasks_list").append(li);
      document.querySelector("#task").value = '';
      
      return false;
    }

    document.addeEvent('click', function(event){
    element = event.target;
    if (element.className === 'remove') {
      element.parentElement.remove();
    }

  })
});
