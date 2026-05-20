document.addEventListener('DOMContentLoaded', function() {
    // Обработчик кнопки «+ Доход»
    document.getElementById('addIncomeBtn').addEventListener('click', function() {
        const amount = prompt('Введите сумму дохода:');
        if (amount && !isNaN(amount) && amount > 0) {
            alert(`Доход в размере ${amount} ₽ добавлен!`);
        } else {
            alert('Пожалуйста, введите корректную сумму!');
        }
    });

    // Обработчик кнопки «– Расход»
    document.getElementById('addExpenseBtn').addEventListener('click', function() {
        const amount = prompt('Введите сумму расхода:');
        if (amount && !isNaN(amount) && amount > 0) {
            alert(`Расход в размере ${amount} ₽ добавлен!`);
        } else {
            alert('Пожалуйста, введите корректную сумму!');
        }
    });
});
