let num1 = 8
        let num2 = 2
        let sumEl = document.getElementById('sum-el')

        document.getElementById('num1-el').textContent = num1
        document.getElementById('num2-el').textContent = num2

        function add()
        {
            let sum = num1 + num2
            sumEl.textContent = "Sum: " + sum
            sum = 0
        }

        function subtract()
        {
            let diff = num1 - num2
            sumEl.textContent = "Difference: " + diff
        }

        function divide()
        {
            let div = num1 / num2
            sumEl.textContent = "Division: " + div
        }

        function multiply()
        {
            let mult = num1 * num2
            sumEl.textContent = "Multiplication: " + mult
        }