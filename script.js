function calculate() {
    const totalIncome = document.getElementById('totalIncome').value;
    const percentage = document.getElementById('percentage').value;
    
    if (totalIncome && percentage) {
        const totalIncomeInt = parseFloat(totalIncome);
        const percentageInt = parseFloat(percentage);
        
        const amountToSoderzanka = (totalIncomeInt * (percentageInt / 100));
        const amountToUser = totalIncomeInt - amountToSoderzanka;
        
        document.getElementById('result').innerHTML = `
            <p>Общий доход: ${totalIncomeInt.toLocaleString('ru-RU')} тыс. руб.</p>
            <p>Доход содержанке (${percentageInt}%): ${amountToSoderzanka.toLocaleString('ru-RU')} тыс. руб.</p>
            <p>Ваш доход: ${amountToUser.toLocaleString('ru-RU')} тыс. руб.</p>
        `;
    } else {
        document.getElementById('result').innerHTML = '<p>Пожалуйста, заполните все поля.</p>';
    }
}
