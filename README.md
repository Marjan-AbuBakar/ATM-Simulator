# 🏧 ATM Simulator

A simple and easy-to-use **ATM Simulator** built with **HTML, CSS, and JavaScript**. This web project lets users log in with a 4-digit PIN using an on-screen keypad, check their account balance, and deposit or withdraw cash with instant balance updates.

---

## ✨ Features

* **4-Digit PIN Login:** Interactive on-screen number pad (`0–9`) with **Clear** and **Enter** buttons.
* **PIN Validation:** Checks if the entered PIN is correct (`1234`) and shows a clear error message if it is empty or wrong.
* **Account Dashboard:** Displays a starting balance of **Rs: 3000**.
* **Withdraw Money:** Lets you withdraw cash if you have enough balance and updates your remaining amount right away.
* **Deposit Money:** Lets you add money to your account and immediately updates your total balance.
* **Input Checks:** Prevents submitting empty fields or using both deposit and withdrawal boxes at the same time.
* **Account Logout:** Includes an **Exit** button to return to the PIN login page.

---

## 🛠️ Technologies Used

* **HTML5** – Structure for the PIN screen and banking dashboard
* **CSS3** – Clean layout using Flexbox and CSS Grid
* **JavaScript** – Handles PIN verification, balance math, and error messages

---

## 📂 Project Structure

```text
ATM-Simulator/
├── atm.html                 # Main PIN login page
├── style.css                # Styling for the PIN keypad screen
├── script.js                # JavaScript logic for PIN verification
└── second-page/
    ├── index.html           # Banking dashboard (Balance, Deposit, Withdraw)
    ├── style.css            # Styling for the dashboard page
    └── script.js            # JavaScript logic for deposits, withdrawals, and logout
```

---

## 🚀 How to Run the Project

1. **Download or Clone** this repository to your computer:
   ```bash
   [git clone https://github.com](https://github.com/Marjan-AbuBakar/ATM-Simulator.git)
   ```
2. Open the project folder.
3. Double-click **`atm.html`** to open it in any web browser (Chrome, Edge, Firefox, etc.).
4. Enter the default PIN **`1234`** on the keypad and click **Enter**.

---

## 💡 Default Login Details

* **PIN:** `1234`
* **Starting Balance:** `Rs: 3000`

---

## 🤝 Contributing

Feel free to fork this project, improve the design, or add new features like transaction history or custom PIN changes!
