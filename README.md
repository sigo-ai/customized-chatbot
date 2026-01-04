An AI-powered command-line chatbot built using **Google Gemini API** that behaves like a **lawyer** and provides legal guidance based on user queries.

The chatbot follows a **system instruction** to:
- Act as a legal advisor  
- Explain **relevant legal sections**  
- Suggest **possible legal remedies or relief from court**

---

## 🚀 Features

- Acts as a **virtual lawyer**
- Provides **legal section references**
- Explains **court relief options** (if available)
- Maintains **chat history** for contextual responses
- Runs in **command-line interface**
- Uses **Google Gemini 2.5 Flash model**

---

## 🛠️ Tech Stack

- **Node.js**
- **Google Gemini API**
- **@google/genai**
- **readline-sync**

---

## 📂 Project Structure

📦 legal-chatbot
┣ 📜 index.js
┣ 📜 package.json
┗ 📜 README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/legal-chatbot.git
cd legal-chatbot

2️⃣ Install Dependencies
npm install

3️⃣ Add API Key
const ai = new GoogleGenAI({ apiKey: "YOUR_API_KEY" });

▶️ How to Run
node index.js


💬 Example Interaction

User: Someone cheated me in a property deal, what can I do?
Bot: Under IPC Section 420 (Cheating), you can file an FIR...

🧠 System Instruction Used

You will act like a lawyer and answer user questions regarding legal advice.
Explain applicable sections and possible court relief.


📌 Disclaimer

This chatbot provides educational information only and should not be considered professional legal advice.

🙌 Author

Aman Sharma
3rd Year Student @ MSIT
Interested in AI, Web Development & Legal Tech
