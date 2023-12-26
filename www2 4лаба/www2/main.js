
function validation(form) {

    let result = true;
    return result
    }
document.getElementById('exampleModal').addEventListener('submit', function(event) {
event.preventDefault()
if (validation(this) == true) {
alert('Форма проверена успешно!')
}
})

closee.onmouseover = function() {
    closee.style.background= "#3f5896";
};
    
closee.onmouseleave = function() {
    closee.style.background= "grey";
};

done.onmouseover = function() {
    done.style.background= "#3f5896";
};
    
done.onmouseleave = function() {
    done.style.background= "grey";
};

