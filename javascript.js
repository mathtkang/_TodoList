function append(value){
    var ul = document.querySelector('ul') 
    var button = document.createElement('button') //<button></button>
    button.innerHTML = "<i class='fas fa-trash-alt'></i>" //<button><i class='fas fa-trash-alt'></i></button>
    var li = document.createElement('li') //<li></li>
    li.innerHTML = "<input type='checkbox'>" + value //로 수정하고 appendChild로 연결해주면 우리가 만들고자하는 태그의 틀이 완성된다.
    li.appendChild(button)
    ul.appendChild(li)

    // 1) button.addEventListener('click', function(e){
    //     remove(e)
    // })
    // 2) button.addEventListener('click', remove)
    // 3) button.onclick = function (e) {   //.onclick = function : 콜백함수(이름없음)
    //     remove(e)
    // }
    button.onclick = remove //4) 4가지 다 같은 말!!
    // 함수명을 선언해주는 것 까지 = 해당함수와 연결만 
    // remove() : (괄호)까지 적으면 함수를 바로 호출(진행)
}

// append('할일1') //html태그와 동일하게 구현됨
// append('할일2')

var button2 = document.querySelector('button')
button2.addEventListener('click', () => {
    var input = document.querySelector('input')
    value = input.value;
    append(value)
})

function remove(e){
    var remove = e.target.parentNode.parentNode
    remove.parentNode.removeChild(remove)
}